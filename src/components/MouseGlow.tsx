import { useEffect, useRef } from "react";
import { MousePointer2 } from "lucide-react";

const MouseGlow = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || reduceMotion) return;

    let rafId = 0;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;
    let visible = false;

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      cursorEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      cursorEl.style.opacity = visible ? "1" : "0";
      rafId = window.requestAnimationFrame(updatePosition);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      visible = true;

      const target = event.target as HTMLElement | null;
      const isInteractive = Boolean(
        target?.closest("a, button, input, textarea, select, label, [role='button'], [data-cursor='interactive']"),
      );
      cursorEl.classList.toggle("is-hovering", isInteractive);
    };

    const onPointerLeave = () => {
      visible = false;
    };

    const onPointerDown = () => {
      cursorEl.classList.add("is-pressed");
    };

    const onPointerUp = () => {
      cursorEl.classList.remove("is-pressed");
    };

    document.body.classList.add("has-custom-cursor");

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointerleave", onPointerLeave);
    rafId = window.requestAnimationFrame(updatePosition);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={cursorRef} className="mouse-cursor" aria-hidden="true">
      <div className="mouse-cursor-glow" />
      <div className="mouse-cursor-ring" />
      <div className="mouse-cursor-icon">
        <MousePointer2 className="h-4 w-4" />
      </div>
    </div>
  );
};

export default MouseGlow;
