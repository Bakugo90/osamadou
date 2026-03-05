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

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--tx", `${e.clientX}px`);
      el.style.setProperty("--ty", `${e.clientY}px`);
      // Reveal smoothly on first move
      el.style.opacity = "1";
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onMove as EventListener);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onMove as EventListener);
    };
  }, []);

  return <div ref={overlayRef} className="cursor-torch" aria-hidden="true" />;
}
