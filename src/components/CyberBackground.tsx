
import { useEffect, useRef } from "react";

const CyberBackground = () => {
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

    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array(columns).fill(1);
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    function drawCyberBackground() {
      // Clear with semi-transparent black for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < columns; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Make some characters brighter (head of the trail)
        if (drops[i] * fontSize < height * 0.1) {
          ctx.fillStyle = "rgba(0, 255, 102, 0.9)"; // Bright green for head
        } else if (drops[i] * fontSize < height * 0.3) {
          ctx.fillStyle = "rgba(0, 255, 102, 0.6)"; // Medium green
        } else {
          ctx.fillStyle = "rgba(0, 255, 102, 0.3)"; // Dim green
        }
        
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    function animate() {
      drawCyberBackground();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    // Start animation immediately
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
      style={{ opacity: 0.8 }}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
};

export default CyberBackground;
