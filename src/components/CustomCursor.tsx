import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

export const CustomCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const mousePosRef = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const prevMousePosRef = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const velocityRef = useRef<{ vx: number; vy: number }>({ vx: 0, vy: 0 });
  const isHoveredInteractiveRef = useRef<boolean>(false);
  const isClickingRef = useRef<boolean>(false);

  const [cursorEnabled, setCursorEnabled] = useState<boolean>(true);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    // Detect touch-only devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      // Allow cursor on desktop or pointer devices
      if (window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(pointer: fine)').matches) {
        setIsTouchDevice(true);
        return;
      }
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const vx = e.clientX - prevMousePosRef.current.x;
      const vy = e.clientY - prevMousePosRef.current.y;
      velocityRef.current = { vx, vy };
      prevMousePosRef.current = { x: e.clientX, y: e.clientY };
      mousePosRef.current = { x: e.clientX, y: e.clientY };

      // Add point to trail
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
      });

      // Update 3D cursor position and tilt
      if (cursorRef.current) {
        const tiltX = Math.max(-25, Math.min(25, -vy * 0.8));
        const tiltY = Math.max(-25, Math.min(25, vx * 0.8));
        const scale = isClickingRef.current ? 0.85 : isHoveredInteractiveRef.current ? 1.25 : 1;
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
      }

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest('button, a, input, textarea, select, [role="button"], .cursor-pointer');
        isHoveredInteractiveRef.current = isInteractive;
      }
    };

    const handleMouseDown = () => {
      isClickingRef.current = true;
      if (cursorRef.current) {
        cursorRef.current.style.transform += ' scale(0.8)';
      }
    };

    const handleMouseUp = () => {
      isClickingRef.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const points = pointsRef.current;
      const maxAge = 35; // Trail persistence frames

      // Update point ages
      for (let i = 0; i < points.length; i++) {
        points[i].age++;
      }

      // Filter out dead points
      pointsRef.current = points.filter((p) => p.age < maxAge);

      if (points.length > 2) {
        // Multi-pass glowing red ribbon trail
        
        // Pass 1: Diffuse outer neon bloom
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = '#FF0033';
        ctx.shadowBlur = 18;
        ctx.lineWidth = 9;
        ctx.strokeStyle = 'rgba(255, 20, 50, 0.25)';
        ctx.stroke();

        // Pass 2: Intense vibrant crimson glow
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
        ctx.shadowColor = '#FF1A4B';
        ctx.shadowBlur = 10;
        ctx.lineWidth = 4.5;
        ctx.strokeStyle = 'rgba(255, 30, 70, 0.75)';
        ctx.stroke();

        // Pass 3: Ultra sharp hot laser core with tapering
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const ratio = 1 - p1.age / maxAge; // 1 at tip, 0 at tail
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.shadowBlur = 4;
          ctx.shadowColor = '#FFFFFF';
          ctx.lineWidth = Math.max(1, 2.5 * ratio);
          ctx.strokeStyle = `rgba(255, ${Math.floor(180 * ratio)}, ${Math.floor(200 * ratio)}, ${ratio})`;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorEnabled, isTouchDevice]);

  if (isTouchDevice || !cursorEnabled) {
    return null;
  }

  return (
    <>
      {/* Canvas for the trailing glowing red ribbon */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[99998]"
        aria-hidden="true"
      />

      {/* Unique 3D Custom Cursor Icon */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[99999] -ml-2 -mt-2 transition-transform duration-75 ease-out will-change-transform"
        aria-hidden="true"
      >
        <div className="relative w-8 h-8 select-none">
          {/* Isometric 3D Pointer Mesh */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 filter drop-shadow-[0_4px_10px_rgba(255,30,60,0.6)]"
          >
            <defs>
              <linearGradient id="cursorGoldBevel" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="30%" stopColor="#F5D061" />
                <stop offset="70%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#92400E" />
              </linearGradient>
              <linearGradient id="cursorRubyCore" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FF4D6D" />
                <stop offset="50%" stopColor="#E11D48" />
                <stop offset="100%" stopColor="#9F1239" />
              </linearGradient>
              <radialGradient id="cursorGlowDot" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#FF0044" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>

            {/* 3D Drop Extrusion Depth Layer */}
            <path
              d="M3 3 L12 25 L16 16 L25 12 Z"
              fill="#590013"
              transform="translate(2, 3)"
              opacity="0.8"
            />

            {/* 3D Primary Beveled Diamond/Arrow Blade */}
            <path
              d="M3 3 L12 25 L16 16 L25 12 Z"
              fill="url(#cursorRubyCore)"
              stroke="url(#cursorGoldBevel)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* 3D Facet Highlight Ridge */}
            <path
              d="M3 3 L16 16"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Glowing Red Core Specular Node */}
            <circle
              cx="5"
              cy="5"
              r="2.5"
              fill="url(#cursorGlowDot)"
            />
          </svg>

          {/* Micro red beacon pulse */}
          <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-red-500 animate-ping opacity-75" />
        </div>
      </div>
    </>
  );
};
