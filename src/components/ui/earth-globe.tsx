import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import {
  AdditiveBlending,
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  Color,
  Group,
  Mesh,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  Sprite,
  SpriteMaterial,
  SRGBColorSpace,
  Texture,
  TextureLoader,
  Vector3,
  WebGLRenderer,
} from "three";

const earthVertexShader = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vp;
varying vec3 vPositionNormal;
void main(void){
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vp = position;
  vPositionNormal = normalize(( modelViewMatrix * vec4(position, 1.0) ).xyz);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const earthFragmentShader = `
uniform vec3 glowColor;
uniform float bias;
uniform float power;
uniform float time;
uniform float scale;
uniform sampler2D map;
varying vec3 vp;
varying vec3 vNormal;
varying vec3 vPositionNormal;
varying vec2 vUv;
void main(void){
  vec4 tex = texture2D(map, vUv);
  float a = pow(bias + scale * abs(dot(vNormal, vPositionNormal)), power);
  vec4 color = tex + vec4(glowColor, 1.0) * a * 0.55;
  if (vp.y > time && vp.y < time + 20.0) {
    float t = smoothstep(0.0, 0.8, (1.0 - abs(0.5 - (vp.y - time) / 20.0)) / 3.0);
    color = mix(color, vec4(glowColor, 1.0), t * t * 0.9);
  }
  gl_FragColor = color;
}
`;

const atmosphereVertexShader = `
varying vec3 vVertexWorldPosition;
varying vec3 vVertexNormal;
void main(){
  vVertexNormal = normalize(normalMatrix * normal);
  vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const atmosphereFragmentShader = `
uniform vec3 glowColor;
uniform float coeficient;
uniform float power;
varying vec3 vVertexNormal;
varying vec3 vVertexWorldPosition;
void main(){
  vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;
  vec3 viewCameraToVertex = (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;
  viewCameraToVertex = normalize(viewCameraToVertex);
  float intensity = pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);
  gl_FragColor = vec4(glowColor, intensity);
}
`;

const loadTexture = (loader: TextureLoader, url: string) =>
  new Promise<Texture>((resolve, reject) => {
    loader.load(url, resolve, undefined, reject);
  });

const lonLatToVector3 = (radius: number, lon: number, lat: number) => {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new Vector3(x, y, z);
};

const networkTargets = [
  { lon: -0.12, lat: 51.5, tier: "primary" as const },
  { lon: 77.21, lat: 28.61, tier: "primary" as const },
  { lon: -74.0, lat: 40.71, tier: "primary" as const },
  { lon: 2.35, lat: 48.85, tier: "secondary" as const },
  { lon: 139.69, lat: 35.68, tier: "secondary" as const },
  { lon: 151.21, lat: -33.86, tier: "secondary" as const },
  { lon: -99.13, lat: 19.43, tier: "secondary" as const },
  { lon: -46.63, lat: -23.55, tier: "secondary" as const },
];

type EarthGlobeProps = {
  className?: string;
  reduceMotion?: boolean;
};

type PulseNode = {
  sprite: Sprite;
  baseScale: number;
  phase: number;
};

export const EarthGlobe = ({ className, reduceMotion = false }: EarthGlobeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const scene = new Scene();
    const camera = new PerspectiveCamera(34, 1, 0.1, 1000);
    camera.position.set(0, 0, 278);

    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    root.appendChild(renderer.domElement);

    const ambientLight = new AmbientLight(0x5ea8d4, 0.72);
    scene.add(ambientLight);

    const earthGroup = new Group();
    const networkGroup = new Group();
    earthGroup.add(networkGroup);
    scene.add(earthGroup);

    const textureLoader = new TextureLoader();
    const textures: Texture[] = [];
    const materials: ShaderMaterial[] = [];
    const pointMaterials: PointsMaterial[] = [];
    const spriteMaterials: SpriteMaterial[] = [];
    const geometries: BufferGeometry[] = [];
    const pulseNodes: PulseNode[] = [];

    let frameId = 0;
    let disposed = false;
    let sweep = -70;

    let earthUniforms:
      | {
          glowColor: { value: Color };
          scale: { value: number };
          bias: { value: number };
          power: { value: number };
          time: { value: number };
          map: { value: Texture | null };
        }
      | undefined;

    const resize = () => {
      const width = root.clientWidth || 1;
      const height = root.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(root);
    resize();

    const createStars = (gradientTexture: Texture) => {
      const starGeometry = new BufferGeometry();
      const starCount = 380;
      const positions = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i += 1) {
        positions[i * 3] = 740 * Math.random() - 300;
        positions[i * 3 + 1] = 740 * Math.random() - 300;
        positions[i * 3 + 2] = 740 * Math.random() - 300;
      }
      starGeometry.setAttribute("position", new BufferAttribute(positions, 3));
      const starMaterial = new PointsMaterial({
        size: 2.1,
        sizeAttenuation: true,
        color: 0x4d76cf,
        transparent: true,
        opacity: 0.78,
        map: gradientTexture,
        depthWrite: false,
        blending: AdditiveBlending,
      });
      const stars = new Points(starGeometry, starMaterial);
      earthGroup.add(stars);
      pointMaterials.push(starMaterial);
      geometries.push(starGeometry);
    };

    const createNode = (position: Vector3, nodeTexture: Texture, baseScale: number, phase: number, isPrimary: boolean) => {
      const nodeMaterial = new SpriteMaterial({
        map: nodeTexture,
        color: isPrimary ? 0xbafcff : 0x8ff6ff,
        transparent: true,
        opacity: isPrimary ? 0.98 : 0.82,
        depthWrite: false,
        blending: AdditiveBlending,
      });
      const node = new Sprite(nodeMaterial);
      node.position.copy(position);
      node.scale.set(baseScale, baseScale, 1);
      networkGroup.add(node);
      spriteMaterials.push(nodeMaterial);
      pulseNodes.push({ sprite: node, baseScale, phase });
    };

    const createNetwork = (nodeTexture: Texture) => {
      const hub = lonLatToVector3(66, -46.63, -23.55);
      createNode(hub, nodeTexture, 6.2, 0.2, true);
      networkTargets.forEach((target, index) => {
        const isPrimary = target.tier === "primary";
        const targetPoint = lonLatToVector3(66, target.lon, target.lat);
        createNode(targetPoint, nodeTexture, isPrimary ? 4.8 : 3.8, 0.8 + index * 0.7, isPrimary);
      });
    };

    const init = async () => {
      try {
        const [earthTexture, glowTexture, gradientTexture, nodeTexture] = await Promise.all([
          loadTexture(textureLoader, "/images/earth/earth.jpg"),
          loadTexture(textureLoader, "/images/earth/glow.png"),
          loadTexture(textureLoader, "/images/earth/gradient.png"),
          loadTexture(textureLoader, "/images/earth/redCircle.png"),
        ]);
        if (disposed) return;

        earthTexture.colorSpace = SRGBColorSpace;
        textures.push(earthTexture, glowTexture, gradientTexture, nodeTexture);

        createStars(gradientTexture);

        earthUniforms = {
          glowColor: { value: new Color(0x0cd1eb) },
          scale: { value: -1 },
          bias: { value: 1 },
          power: { value: 3.3 },
          time: { value: sweep },
          map: { value: earthTexture },
        };

        const radius = 64;
        const earthGeometry = new SphereGeometry(radius, 72, 72);
        const earthMaterial = new ShaderMaterial({
          uniforms: earthUniforms,
          vertexShader: earthVertexShader,
          fragmentShader: earthFragmentShader,
          transparent: true,
        });
        const earthMesh = new Mesh(earthGeometry, earthMaterial);
        earthGroup.add(earthMesh);
        geometries.push(earthGeometry);
        materials.push(earthMaterial);

        const atmosphereGeometry = new SphereGeometry(radius + 1.6, 60, 60);
        const atmosphereMaterial = new ShaderMaterial({
          uniforms: {
            coeficient: { value: 1 },
            power: { value: 3 },
            glowColor: { value: new Color(0x4390d1) },
          },
          vertexShader: atmosphereVertexShader,
          fragmentShader: atmosphereFragmentShader,
          blending: AdditiveBlending,
          transparent: true,
          depthWrite: false,
        });
        const atmosphereMesh = new Mesh(atmosphereGeometry, atmosphereMaterial);
        earthGroup.add(atmosphereMesh);
        geometries.push(atmosphereGeometry);
        materials.push(atmosphereMaterial);

        const glowSpriteMaterial = new SpriteMaterial({
          map: glowTexture,
          color: 0x4390d1,
          transparent: true,
          opacity: 0.68,
          depthWrite: false,
          blending: AdditiveBlending,
        });
        const glowSprite = new Sprite(glowSpriteMaterial);
        glowSprite.scale.set(radius * 3, radius * 3, 1);
        earthGroup.add(glowSprite);
        spriteMaterials.push(glowSpriteMaterial);

        createNetwork(nodeTexture);
      } catch {
        return;
      }
    };

    const render = () => {
      if (disposed) return;

      const time = performance.now() * 0.001;

      if (!reduceMotion) {
        earthGroup.rotation.y += 0.0024;
        earthGroup.rotation.x += 0.00035;
        earthGroup.position.x = Math.sin(time * 0.55) * 2.2;
        earthGroup.position.y = Math.cos(time * 0.45) * 1.9;
        sweep += 0.55;
        if (sweep > 70) sweep = -70;

        pulseNodes.forEach((node) => {
          const pulse = 1 + Math.sin(time * 1.8 + node.phase) * 0.22;
          const scale = node.baseScale * pulse;
          node.sprite.scale.set(scale, scale, 1);
        });
      }

      if (earthUniforms) earthUniforms.time.value = sweep;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    void init();
    frameId = window.requestAnimationFrame(render);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      scene.clear();
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      pointMaterials.forEach((material) => material.dispose());
      spriteMaterials.forEach((material) => material.dispose());
      textures.forEach((texture) => texture.dispose());
      renderer.dispose();
      root.removeChild(renderer.domElement);
    };
  }, [reduceMotion]);

  return <div ref={containerRef} className={cn("h-full w-full", className)} />;
};
