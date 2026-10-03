import React from 'react';
import { ArrowRight, Code2, Rocket, GraduationCap } from 'lucide-react';
import { Hero3DText } from './Hero3DText';
import { ThreeGlowingOrb } from './ThreeGlowingOrb';
import PortraitAvatar from './PortraitAvatar';

interface HeroSectionProps {
  scrollProgress: number;
  scrollY: number;
  onViewProjects: () => void;
  onGetInTouch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  scrollProgress,
  scrollY,
  onViewProjects,
  onGetInTouch,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* 1. Fluid Golden Silk Waves & Light Beams Backdrop (Matching reference image) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Ambient Warm Champagne Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#F5F2EB] to-[#EFEBE1]" />

        {/* Primary Golden Silk Wave Ribbon Sweeping across screen */}
        <svg
          className="absolute w-[160%] sm:w-[130%] -left-[15%] bottom-0 sm:bottom-[-5%] h-[60%] sm:h-[75%] opacity-90 filter drop-shadow-[0_-15px_35px_rgba(245,158,11,0.2)]"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="silkGoldWave1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0.25" />
              <stop offset="30%" stopColor="#F59E0B" stopOpacity="0.7" />
              <stop offset="65%" stopColor="#FEF08A" stopOpacity="0.9" />
              <stop offset="90%" stopColor="#D97706" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="silkGoldWave2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="silkSheen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#FBBF24" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Layer 1: Broad Silk Wave */}
          <path
            d="M-50 480 C 250 420, 500 580, 850 400 C 1150 250, 1350 320, 1550 200 L 1550 650 L -50 650 Z"
            fill="url(#silkGoldWave1)"
          />

          {/* Layer 2: Glowing Crest Line */}
          <path
            d="M-50 480 C 250 420, 500 580, 850 400 C 1150 250, 1350 320, 1550 200"
            stroke="url(#silkSheen)"
            strokeWidth="4"
            fill="none"
            filter="drop-shadow(0 0 10px #F59E0B)"
          />

          {/* Layer 3: Secondary Ethereal Flow */}
          <path
            d="M-20 540 C 350 490, 650 460, 950 350 C 1200 250, 1400 380, 1500 300"
            stroke="url(#silkGoldWave2)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.85"
          />

          {/* Soft Bottom Fill */}
          <path
            d="M0 520 Q 400 480, 800 540 T 1440 450 L 1440 600 L 0 600 Z"
            fill="#EFE7DA"
            opacity="0.4"
          />
        </svg>

        {/* Ambient Top Light Beam */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/25 via-yellow-100/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: 3D Typography, Typewriter Effect, Professional Bio & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* 3D Interactive Typography & Word-by-Word Typewriter Component */}
            <Hero3DText />

            {/* Professional & Elegant Bio Paragraphs (Faithful to Reference Image) */}
            <div className="mt-6 sm:mt-8 space-y-3.5 max-w-xl text-[#3A332C] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I'm a CS Engineer, with a strong interest in technology,
                passionate about web development, technology, and entrepreneurship.
              </p>
              <p>
                I enjoy turning ideas into practical projects, learning how
                things work, and continuously improving my skills through
                building.
              </p>
              <p className="pt-1">
                <span className="text-[#D97706] font-bold">Currently:</span>{' '}
                Building web projects, learning, experimenting, and turning
                ideas into reality.
              </p>
              </div>

            {/* Action Buttons (VIEW PROJECTS → and GET IN TOUCH →) */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Button 1: Glowing Golden VIEW PROJECTS → */}
              <button
                onClick={onViewProjects}
                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-extrabold text-[#1A1612] bg-gradient-to-r from-[#FBA438] via-[#F59E0B] to-[#E58814] hover:from-[#F59E0B] hover:to-[#D97706] shadow-[0_6px_22px_rgba(245,158,11,0.45)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.65)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer select-none"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {/* Button 2: Crisp Pill GET IN TOUCH → */}
              <button
                onClick={onGetInTouch}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-extrabold text-[#1E1B18] bg-white/70 hover:bg-white border-2 border-[#D97706]/70 hover:border-[#D97706] shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer select-none backdrop-blur-sm"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#D97706]" />
              </button>
            </div>

            {/* Hero Metadata */}
            <div className="mt-10 sm:mt-12 pt-6 border-t border-[#E6E1D5]/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#615448] font-medium">

              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#D97706]" />
                <span>CSE @ BIET, Davangere</span>
              </div>

              <span className="text-[#B0A79C]" aria-hidden="true">·</span>

              <div className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-[#D97706]" />
                <span>C · Python · Web Development</span>
              </div>

              <span className="text-[#B0A79C]" aria-hidden="true">·</span>

              <div className="flex items-center gap-1.5">
                <Rocket className="w-4 h-4 text-[#D97706]" />
                <span>Building with an Entrepreneurial Mindset</span>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: 3D Glowing Black Circle, Concentric Rings & Portrait Avatar */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Background Grid Matrix Dots (Top-Right) matching reference image */}
            <div className="absolute -top-6 -right-4 sm:-right-8 grid grid-cols-5 gap-2.5 opacity-40 pointer-events-none select-none">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={`dot-tr-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#786C60]" />
              ))}
            </div>

            {/* Ambient Background Grid Matrix Dots (Bottom-Right) matching reference image */}
            <div className="absolute -bottom-8 -right-2 sm:-right-4 grid grid-cols-4 gap-2.5 opacity-40 pointer-events-none select-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={`dot-br-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#786C60]" />
              ))}
            </div>

            {/* Vertical Golden Pin Lines with Spheres (As in reference image right border) */}
            <div className="absolute -right-2 sm:-right-6 top-10 h-64 w-[1px] bg-gradient-to-b from-transparent via-[#F59E0B] to-transparent hidden sm:block pointer-events-none">
              <div className="absolute top-1/4 -left-1 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#F59E0B] to-[#FEF08A] shadow-[0_0_10px_#F59E0B]" />
              <div className="absolute top-3/4 -left-1 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#F59E0B] to-[#FEF08A] shadow-[0_0_10px_#F59E0B]" />
            </div>

            {/* Central 3D Container with Responsive Positioning */}
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] flex items-center justify-center">
              
              {/* Three.js 3D WebGL Canvas for the Glowing Black Circle & Orbiting Golden Geometry */}
              <div className="absolute inset-0 z-0">
                <ThreeGlowingOrb
                  scrollProgress={scrollProgress}
                  scrollY={scrollY}
                />
              </div>

              {/* Portrait Image Frame centered inside the 3D Golden Ring */}
              <div className="relative z-10 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[330px] lg:h-[330px] rounded-full p-1.5 bg-gradient-to-tr from-[#F59E0B] via-[#FEF08A] to-[#D97706] shadow-[0_0_40px_rgba(245,158,11,0.5)]">
                {/* Inner Black Bezel ring */}
                <div className="w-full h-full rounded-full p-1 bg-[#171412] shadow-inner">
                  <PortraitAvatar />
                </div>

                {/* Golden Specular Glares on Ring Rim */}
                <div className="absolute -top-1 right-12 w-8 h-8 rounded-full bg-white/80 blur-[2px] pointer-events-none animate-pulse" />
                <div className="absolute bottom-10 -left-1 w-6 h-6 rounded-full bg-[#FEF08A]/70 blur-[3px] pointer-events-none" />
              </div>

              {/* Satellite Floating Golden Spheres (as in reference image) */}
              <div
                className="absolute top-10 right-4 sm:right-6 w-5 h-5 rounded-full bg-gradient-to-tr from-[#F59E0B] to-[#FEF08A] shadow-[0_0_12px_#F59E0B] pointer-events-none animate-bounce"
                style={{ animationDuration: '4s' }}
              />
              <div
                className="absolute bottom-14 left-2 sm:left-4 w-4 h-4 rounded-full bg-gradient-to-tr from-[#F59E0B] to-[#FEF08A] shadow-[0_0_10px_#F59E0B] pointer-events-none animate-bounce"
                style={{ animationDuration: '3.2s', animationDelay: '1s' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
