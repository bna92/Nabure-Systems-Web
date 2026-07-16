import { useEffect, useRef } from "react";
import logoMark from "@/assets/brand/logo-mark.png";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const canvasEl = canvasRef.current;
      if (!canvasEl) return;
      width = canvasEl.clientWidth;
      height = canvasEl.clientHeight;
      canvasEl.width = width * dpr;
      canvasEl.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 46;
    const nodes: Node[] = Array.from({ length: COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00045,
      vy: (Math.random() - 0.5) * 0.00045,
    }));

    let frameId: number;

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > 1) n.vx *= -1;
          if (n.y < 0 || n.y > 1) n.vy *= -1;
        }
      }

      const maxDist = Math.min(width, height) * 0.16;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = (a.x - b.x) * width;
          const dy = (a.y - b.y) * height;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx!.strokeStyle = `rgba(15, 111, 255, ${(1 - dist / maxDist) * 0.22})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x * width, a.y * height);
            ctx!.lineTo(b.x * width, b.y * height);
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx!.fillStyle = "rgba(34, 211, 255, 0.55)";
        ctx!.beginPath();
        ctx!.arc(n.x * width, n.y * height, 1.8, 0, Math.PI * 2);
        ctx!.fill();
      }

      frameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="relative h-[210px] w-full sm:h-[260px] md:h-[300px] lg:h-[320px]">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="hero-mark-glow absolute inset-[-20%] rounded-full" aria-hidden="true" />
          <img
            src={logoMark}
            alt="Nabure Systems"
            className="relative h-[120px] w-auto drop-shadow-[0_14px_24px_rgba(15,23,42,0.18)] sm:h-[150px] md:h-[175px] lg:h-[195px]"
          />
        </div>
      </div>
    </div>
  );
}
