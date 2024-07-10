import React, { useRef, useEffect } from 'react';

const purple = 'rgba(36, 19, 121)';

const randomFloat = (min: number, max: number) => Math.random() * (max - min) + min;

const TriangleGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dotSpacing = 30; // Tighter grid
    const waveSpeed = 0.001; // Slower wave speed
    const waveFrequency = 0.015; // Adjust wave frequency

    const triangles: { x: number, y: number, originalX: number, originalY: number }[] = [];
    for (let y = 0; y <= canvas.height; y += dotSpacing) {
      for (let x = 0; x <= canvas.width; x += dotSpacing) {
        triangles.push({ x, y, originalX: x, originalY: y });
      }
    }

    const drawTriangle = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, -size / 2);
      ctx.lineTo(-size / 2, size / 2);
      ctx.lineTo(size / 2, size / 2);
      ctx.closePath();
    //   ctx.strokeStyle = purple;
    //   ctx.stroke();

      ctx.fillStyle = purple;
      ctx.fill();

      ctx.restore();
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      triangles.forEach(triangle => {
        const distance = Math.sqrt(triangle.originalX * triangle.originalX + triangle.originalY * triangle.originalY);
        const offsetX = Math.sin(time * waveSpeed + distance * waveFrequency) * dotSpacing;
        const offsetY = Math.cos(time * waveSpeed + distance * waveFrequency) * dotSpacing;
        const size = 10 + Math.sin(time * waveSpeed + distance * waveFrequency) * 3;
        const rotation = Math.sin(time * waveSpeed + distance * waveFrequency);

        drawTriangle(triangle.originalX + offsetX, triangle.originalY + offsetY, size, rotation);
      });

      requestAnimationFrame(animate);
    };

    animate(0);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ position: 'absolute', top: 0, left: 0 }}
    ></canvas>
  );
};

export default TriangleGrid;
