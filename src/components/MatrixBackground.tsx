
import { useEffect, useRef } from "react";

const MATRIX_COLOR = "#10FF67";
const FONT_SIZE = 16;

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const columns = Math.floor(width / FONT_SIZE);
    const drops: number[] = Array(columns).fill(1);

    function drawMatrix() {
      ctx.fillStyle = "rgba(10, 15, 16, 0.30)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${FONT_SIZE}px monospace`;
      ctx.fillStyle = MATRIX_COLOR;

      for (let i = 0; i < columns; i++) {
        const text = String.fromCharCode(12448 + Math.random() * 60);
        ctx.fillText(text, i * FONT_SIZE, drops[i] * FONT_SIZE);

        if (drops[i] * FONT_SIZE > height && Math.random() > 0.97) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    function animate() {
      drawMatrix();
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity: 0.13 }}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
};

export default MatrixBackground;
