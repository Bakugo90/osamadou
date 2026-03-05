import { useRef, useEffect } from "react";
import "./CursorTorch.css";

/**
 * CursorTorch
 * A fixed dark overlay with a radial "hole" that follows the cursor,
 * simulating a torch / flashlight effect in a dark room.
 * Uses direct DOM style updates — zero React re-renders.
 */
export function CursorTorch() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      el.style.opacity = "1";
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const EASE = 0.12; // lower = more delay, higher = less delay

    const animate = () => {
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, EASE);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, EASE);
      el.style.setProperty("--tx", `${currentRef.current.x}px`);
      el.style.setProperty("--ty", `${currentRef.current.y}px`);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onMove as EventListener);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onMove as EventListener);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div ref={overlayRef} className="cursor-torch" aria-hidden="true" />;
}
