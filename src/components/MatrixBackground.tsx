import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const characters = '01';
    
    const draw = () => {
      // Background fill - adapts to theme
      const isDark = theme !== 'light';
      ctx.fillStyle = isDark ? 'rgba(8, 6, 12, 0.08)' : 'rgba(250, 250, 252, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.font = '14px monospace';

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        // Purple shades - different opacity for light/dark themes
        const shades = isDark ? [
          'rgba(168, 85, 247, 0.03)',
          'rgba(192, 132, 252, 0.02)',
          'rgba(139, 92, 246, 0.02)',
        ] : [
          'rgba(168, 85, 247, 0.08)',
          'rgba(192, 132, 252, 0.06)',
          'rgba(139, 92, 246, 0.06)',
        ];
        ctx.fillStyle = shades[i % shades.length];
        
        // Add subtle glow effect
        ctx.shadowBlur = 2;
        ctx.shadowColor = shades[i % shades.length];

        // Draw character
        ctx.fillText(text, i * 20, drops[i] * 20);

        // Reset drop to top randomly
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default MatrixBackground;
