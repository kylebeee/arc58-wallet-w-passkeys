'use client'

import React, { useRef, useEffect } from 'react';

const purple = 'rgba(36, 19, 121,';

const randomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
const randomFloat = (min: number, max: number) => Math.random() * (max - min) + min;

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const shapes = ['circle', 'square', 'rectangle', 'triangle'];
    const particles = new Array(400).fill(null).map(() => ({
      shape: shapes[randomNum(0, shapes.length)],
      color: `${purple} ${randomFloat(0.1, 1)})`,
      x: randomNum(0, canvas.width),
      y: randomNum(0, canvas.height),
      size: randomNum(5, 50),
      width: randomNum(10, 50),
      height: randomNum(10, 50),
      speedY: randomNum(1, 3),
      speedX: randomNum(0.5, 2),
      rotation: randomNum(0, 360),
      rotationSpeed: randomFloat(-2, 2),
      isBorder: Math.random() > 0.5
    }));

    const drawParticle = (particle: any) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation * Math.PI / 180);
      ctx.beginPath();
      ctx.strokeStyle = particle.color;
      ctx.fillStyle = particle.isBorder ? 'transparent' : particle.color;
      switch (particle.shape) {
        case 'circle':
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          break;
        case 'square':
          ctx.rect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
          break;
        case 'rectangle':
          ctx.rect(-particle.width / 2, -particle.height / 2, particle.width, particle.height);
          break;
        case 'triangle':
          ctx.moveTo(-particle.size / 2, particle.size / 2);
          ctx.lineTo(particle.size / 2, particle.size / 2);
          ctx.lineTo(0, -particle.size / 2);
          ctx.closePath();
          break;
      }
      if (particle.isBorder) {
        ctx.stroke();
      } else {
        ctx.fill();
      }
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        drawParticle(particle);

        particle.y -= particle.speedY;
        particle.x += particle.speedX;
        particle.rotation += particle.rotationSpeed;

        if (particle.y + particle.size < 0 || particle.x - particle.size > canvas.width) {
          particle.y = canvas.height + particle.size;
          particle.x = randomNum(0, canvas.width);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
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

export default Particles;
