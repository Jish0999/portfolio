import React, { useEffect, useState, useRef } from 'react';

export const Hero3DText: React.FC = () => {
  const fullName = 'JISHNUPREM M S';
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // 3D Parallax Tilt state
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Letter-by-letter typewriter effect loop
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPaused) {
      // Pause when full name is typed out
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 3000); // 3 seconds dwell time
      return () => clearTimeout(timer);
    }

    if (!isDeleting) {
      // Typing phase: type letter by letter
      if (charIndex < fullName.length) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, 90); // 90ms per character for natural typing cadence
      } else {
        // Completed full string, pause
        setIsPaused(true);
      }
    } else {
      // Deleting phase: backspace letter by letter
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, 45); // 45ms per character for smooth retraction
      } else {
        // Reset complete, pause momentarily then restart
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, 350);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, isPaused, fullName.length]);

  // Mouse move tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Subtle natural 3D tilt
  const tiltX = -mouseOffset.y * 8;
  const tiltY = mouseOffset.x * 10;

  const displayedText = fullName.slice(0, charIndex);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative select-none perspective-1000 py-2 inline-block cursor-default"
      style={{ perspective: '1200px' }}
    >
      {/* 3D Container with smooth tilt transition */}
      <div
        className="transform-style-3d transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        }}
      >
        {/* "This is" Script Element with Golden Swoosh */}
        <div
          className="relative inline-flex flex-col mb-1 transform-style-3d"
          style={{ transform: 'translateZ(15px)' }}
        >
          <div className="flex items-center gap-2">
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#1E1B18] tracking-wide filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              Hi, <span className="text-[#3A2F24] font-normal">This is</span>
            </span>
          </div>

          {/* Golden Brush Swoosh under "Hi, This is" */}
          <div className="w-48 sm:w-64 h-3 -mt-1 ml-4 sm:ml-6 relative overflow-hidden pointer-events-none">
            <svg
              viewBox="0 0 240 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full filter drop-shadow-[0_2px_6px_rgba(245,158,11,0.45)]"
            >
              <defs>
                <linearGradient id="swooshGoldClean" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D97706" />
                  <stop offset="40%" stopColor="#F59E0B" />
                  <stop offset="85%" stopColor="#FEF08A" />
                  <stop offset="100%" stopColor="#B45309" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path
                d="M4 12 C 40 4, 120 1, 236 7 C 180 12, 80 14, 4 12 Z"
                fill="url(#swooshGoldClean)"
              />
            </svg>
          </div>
        </div>

        {/* Primary Headline: "JISHNUPREM M S"
            - Clean font: 'Playfair Display' / 'font-hero-name' (bold luxury serif)
            - Effects removed: No gold gradient fill, no 3D extrusion shadows, no blur glow
            - True letter-by-letter typewriter animation in a continuous loop */}
        <div
          className="relative mt-1 sm:mt-2 transform-style-3d min-h-[4.2rem] sm:min-h-[5.5rem] md:min-h-[6.5rem] flex items-center"
          style={{ transform: 'translateZ(25px)' }}
        >
          <h1 className="font-hero-name font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-[#14110E] flex items-center leading-none">
            <span className="whitespace-pre">
              {displayedText}
            </span>

            {/* Sleek Golden Blinking Typewriter Cursor */}
            <span
              className="inline-block w-1 sm:w-1.5 md:w-2 h-9 sm:h-14 md:h-16 ml-1.5 sm:ml-2 bg-[#D97706] rounded-sm animate-pulse shadow-[0_0_8px_#F59E0B]"
              aria-hidden="true"
            />
          </h1>
        </div>

        {/* Subtitle Line with Golden Bullet Dots: "CSE Student • Developer • Future Entrepreneur" */}
        <div
          className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-base sm:text-xl font-bold tracking-tight text-[#2B231D] transform-style-3d"
          style={{ transform: 'translateZ(15px)' }}
        >
          <span>CSE Student</span>
          <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_6px_#F59E0B]" />
          <span>Developer</span>
          <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_6px_#F59E0B]" />
          <span className="text-[#1E1B18]">Future Entrepreneur</span>
        </div>
      </div>
    </div>
  );
};
