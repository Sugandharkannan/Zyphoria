"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let x = 0, y = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = x - 4 + "px";
        dotRef.current.style.top = y - 4 + "px";
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let raf: number;
    const animateRing = () => {
      ringX = lerp(ringX, x, 0.12);
      ringY = lerp(ringY, y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = ringX - 20 + "px";
        ringRef.current.style.top = ringY - 20 + "px";
      }
      raf = requestAnimationFrame(animateRing);
    };
    animateRing();

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", onMove);
    document
      .querySelectorAll("a, button, [data-hover]")
      .forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot fixed pointer-events-none z-[99999]"
        style={{ transform: isHovering ? "scale(2.5)" : "scale(1)" }}
      />
      <div
        ref={ringRef}
        className="cursor-ring fixed pointer-events-none z-[99998]"
        style={{
          width: isHovering ? "60px" : "40px",
          height: isHovering ? "60px" : "40px",
          borderColor: isHovering
            ? "rgba(139,92,246,0.7)"
            : "rgba(0,245,255,0.5)",
          transition: "width 0.3s, height 0.3s, border-color 0.3s",
        }}
      />
    </>
  );
}
