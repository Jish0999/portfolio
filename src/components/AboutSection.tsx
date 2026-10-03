import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onExploreWork?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreWork }) => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative bg-[#F8F6F0] overflow-hidden border-t border-[#EAE5DA]"
    >
      {/* Background Golden Silk Waves & Light Beams */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        {/* Soft background ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#F6F3EB] to-[#EFEBE1]" />

        {/* Golden Silk Wave sweeping across the bottom right */}
        <svg
          className="absolute w-[140%] -right-[20%] bottom-[-5%] h-[55%] opacity-85 filter drop-shadow-[0_-10px_25px_rgba(245,158,11,0.15)]"
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="aboutSilkWave" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0.1" />
              <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#FEF08A" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="aboutSilkLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0 380 C 400 320, 750 480, 1100 280 C 1280 180, 1380 220, 1500 160 L 1500 550 L 0 550 Z"
            fill="url(#aboutSilkWave)"
          />
          <path
            d="M0 380 C 400 320, 750 480, 1100 280 C 1280 180, 1380 220, 1500 160"
            stroke="url(#aboutSilkLine)"
            strokeWidth="3.5"
            fill="none"
            filter="drop-shadow(0 0 8px #F59E0B)"
          />
        </svg>

        {/* Ambient Top Glow */}
        <div className="absolute top-1/4 right-1/3 w-[450px] h-[450px] bg-gradient-to-br from-amber-200/20 via-yellow-100/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Section Tag, Headline, Detailed Bio & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Section Tag matching reference: 01 ———— ABOUT ME : */}
            <div className="flex items-center gap-3">
              <span className="font-sans font-extrabold text-sm sm:text-base text-[#E58814] tracking-wider">
                01
              </span>
              <div className="w-10 sm:w-14 h-[1.5px] bg-[#E58814]" />
            </div>

            <div className="mt-1 flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1E1B18]">
                ABOUT ME
              </span>
              <span className="flex flex-col gap-0.5 ml-0.5">
                <span className="w-1 h-1 rounded-full bg-[#E58814]" />
                <span className="w-1 h-1 rounded-full bg-[#E58814]" />
              </span>
            </div>

            {/* Main Headline:
                Building skills.
                Creating ideas.
                Thinking beyond code. (Gold 3D) */}
            <h2 className="mt-4 sm:mt-5 font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.12] text-[#14110E]">
              <span className="block">Building skills.</span>
              <span className="block">Creating ideas.</span>
              <span className="block gold-3d-text">Thinking beyond code.</span>
            </h2>

            {/* Exact Body Paragraphs from Reference Image */}
            <div className="mt-6 sm:mt-7 space-y-4 text-[#352D26] text-sm sm:text-[0.98rem] leading-relaxed max-w-xl font-normal">
              <p>
                I'm currently pursuing <strong className="font-bold text-[#14110E]">Computer Science and Engineering</strong>.
              </p>
              
              <p>
                My journey in technology started with programming, but over time, I've become more interested in what can be built with it. I enjoy working on web projects, exploring new technologies, and solving problems through code.
              </p>

              <p>
                I have experience working with <strong className="font-bold text-[#14110E]">C, Python, HTML, CSS, and JavaScript</strong>, and I'm continuously working on strengthening my fundamentals and developing better problem-solving skills.
              </p>

              <p>
                Beyond technology, my long-term goal is to become an <strong className="font-bold text-[#14110E]">entrepreneur</strong>. I want to build products that solve real problems, create meaningful value, and grow into something bigger than just a project.
              </p>

              <p>
                For me, every project is an opportunity to learn something new, experiment with an idea, and become a better developer.
              </p>
            </div>

            {/* Bottom Action Area: EXPLORE MY WORK → and "Turn ideas into reality." */}
            <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-6 sm:gap-7">
              {/* Button: EXPLORE MY WORK → */}
              <button
                onClick={onExploreWork}
                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-[#1A1612] bg-gradient-to-r from-[#FBA438] via-[#F59E0B] to-[#E58814] hover:from-[#F59E0B] hover:to-[#D97706] shadow-[0_6px_22px_rgba(245,158,11,0.45)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.65)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer select-none"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {/* Tagline Lockup: Vertical golden pin with circular node + "Turn ideas into reality." */}
              <div className="flex items-center gap-3 select-none">
                {/* Vertical Pin Line with Center Golden Node */}
                <div className="relative h-10 w-[1.5px] bg-[#E58814]/70 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white border-2 border-[#E58814] shadow-[0_0_6px_#E58814]" />
                </div>
                <div className="text-xs font-semibold text-[#665A4F] leading-tight">
                  <span className="block">Turn ideas</span>
                  <span className="block">into reality.</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Golden Glowing Circle with "Keep Building", Floating Spheres, & TECH STACK Cards */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center relative">
            
            {/* Top-Right Background Grid Matrix Dots */}
            <div className="absolute -top-8 right-2 grid grid-cols-5 gap-2.5 opacity-35 pointer-events-none select-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={`about-dot-tr-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#786C60]" />
              ))}
            </div>

            {/* Mid-Right Background Grid Matrix Dots */}
            <div className="absolute top-1/2 -right-4 grid grid-cols-4 gap-2.5 opacity-35 pointer-events-none select-none">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={`about-dot-mr-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#786C60]" />
              ))}
            </div>

            {/* Large Golden Glowing Circle with "Keep Building" Script & Satellite Spheres */}
            <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">
              
              {/* Outer Radiant Thin Golden Halo */}
              <div className="absolute inset-0 rounded-full border border-amber-400/40 shadow-[0_0_45px_rgba(245,158,11,0.25)] animate-pulse" style={{ animationDuration: '6s' }} />

              {/* Tilted Concentric Orbital Ring */}
              <div
                className="absolute inset-4 rounded-full border border-[#F59E0B]/50 transform -rotate-12 pointer-events-none"
              />

              {/* Core Circular Bezel Ring with Golden Gradient Border */}
              <div className="relative w-[260px] h-[260px] sm:w-[310px] sm:h-[310px] lg:w-[340px] lg:h-[340px] rounded-full p-[2.5px] bg-gradient-to-tr from-[#D97706] via-[#FEF08A] to-[#F59E0B] shadow-[0_10px_35px_rgba(217,119,6,0.3)] flex items-center justify-center">
                
                {/* Inner Warm Champagne / Light Surface */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FAF8F4] via-[#F4EFE6] to-[#ECE4D5] flex flex-col items-center justify-center p-6 text-center shadow-inner relative overflow-hidden select-none">
                  
                  {/* Subtle golden ambient radial glare */}
                  <div className="absolute inset-0 bg-radial from-amber-200/20 via-transparent to-transparent pointer-events-none" />

                  {/* "Keep Building" Script Handwriting Artwork */}
                  <div className="relative z-10 transform -rotate-6">
                    <span className="font-script text-5xl sm:text-6xl lg:text-7xl text-[#92551A] tracking-wider block filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                      Keep
                    </span>
                    <span className="font-script text-5xl sm:text-6xl lg:text-7xl text-[#B87023] tracking-wider block -mt-2 sm:-mt-3 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                      Building
                    </span>

                    {/* Golden Swoosh Underline underneath "Building" */}
                    <div className="w-36 sm:w-44 h-3 mt-1 relative overflow-hidden pointer-events-none">
                      <svg
                        viewBox="0 0 200 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full filter drop-shadow-[0_2px_6px_rgba(217,119,6,0.4)]"
                      >
                        <path
                          d="M4 12 C 40 4, 110 2, 196 8 C 140 12, 70 14, 4 12 Z"
                          fill="url(#swooshGoldKeep)"
                        />
                        <defs>
                          <linearGradient id="swooshGoldKeep" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#D97706" />
                            <stop offset="50%" stopColor="#F59E0B" />
                            <stop offset="85%" stopColor="#FEF08A" />
                            <stop offset="100%" stopColor="#B45309" stopOpacity="0.3" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                </div>

                {/* Golden Specular Glares on Ring Rim */}
                <div className="absolute top-2 right-12 w-6 h-6 rounded-full bg-white/90 blur-[2px] pointer-events-none animate-pulse" />
                <div className="absolute bottom-8 left-4 w-4 h-4 rounded-full bg-[#FEF08A]/80 blur-[2px] pointer-events-none" />
              </div>

              {/* Floating 3D Golden Satellite Spheres (as in reference image) */}
              {/* Sphere 1: Mid-left satellite */}
              <div
                className="absolute top-1/2 -left-2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#FEF08A] to-[#D97706] shadow-[0_0_12px_#F59E0B] pointer-events-none animate-bounce"
                style={{ animationDuration: '4s' }}
              />
              {/* Sphere 2: Top-right satellite */}
              <div
                className="absolute top-12 right-2 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#FEF08A] to-[#D97706] shadow-[0_0_14px_#F59E0B] pointer-events-none animate-bounce"
                style={{ animationDuration: '3.4s', animationDelay: '0.8s' }}
              />
            </div>

            {/* TECH STACK Section below the circle (as in reference image) */}
            <div className="w-full max-w-xl mt-6 sm:mt-8">
              
              {/* Tech Stack Header: TECH STACK —————— */}
              <div className="flex items-center gap-3 mb-4 select-none">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#181410]">
                  TECH STACK
                </span>
                <div className="w-12 sm:w-16 h-[1.5px] bg-[#E58814]" />
              </div>

              {/* 5 Prominent Tech Stack Cards (C, Python, HTML, CSS, JavaScript) */}
              <div className="grid grid-cols-5 gap-2.5 sm:gap-3.5">
                
                {/* 1. C Language Card */}
                <div className="group bg-white rounded-2xl p-3 sm:p-4 border border-[#E8E2D5] hover:border-[#D97706] shadow-sm hover:shadow-[0_8px_20px_rgba(245,158,11,0.25)] transition-all duration-300 flex flex-col items-center justify-center transform hover:-translate-y-1 cursor-default select-none">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center mb-1.5 sm:mb-2">
                    <svg viewBox="0 0 128 128" className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
                      {/* Hexagonal Blue C Icon */}
                      <path
                        d="M115.4 30.7L66.7 2.6c-1.6-.9-3.7-.9-5.3 0L12.6 30.7c-1.6.9-2.6 2.7-2.6 4.5v57.5c0 1.9 1 3.6 2.6 4.5l48.8 28.2c.8.5 1.7.7 2.6.7s1.8-.2 2.6-.7l48.8-28.2c1.6-.9 2.6-2.7 2.6-4.5V35.3c0-1.9-1-3.6-2.6-4.6z"
                        fill="#283593"
                      />
                      <path
                        d="M64 8.5L18.4 34.8v52.6L64 113.8l45.6-26.3V34.8L64 8.5z"
                        fill="#1E88E5"
                      />
                      {/* Stylized 'C' */}
                      <path
                        d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c10.3 0 19.3-5.6 24.1-13.8l-11.4-6.6C73.9 76 69.2 78.8 64 78.8c-8.2 0-14.8-6.6-14.8-14.8s6.6-14.8 14.8-14.8c5.2 0 9.9 2.8 12.7 7.2l11.4-6.6C83.3 41.6 74.3 36 64 36z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1E1B18] group-hover:text-[#D97706] transition-colors">
                    C
                  </span>
                </div>

                {/* 2. Python Card */}
                <div className="group bg-white rounded-2xl p-3 sm:p-4 border border-[#E8E2D5] hover:border-[#D97706] shadow-sm hover:shadow-[0_8px_20px_rgba(245,158,11,0.25)] transition-all duration-300 flex flex-col items-center justify-center transform hover:-translate-y-1 cursor-default select-none">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center mb-1.5 sm:mb-2">
                    <svg viewBox="0 0 128 128" className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
                      {/* Python Top Snake (Blue) */}
                      <path
                        d="M63.2 6.1c-22.9 0-21.5 9.9-21.5 9.9l.1 10.3h22v3.1H32.4s-14.3 1.6-14.3 21.6c0 20.1 12.5 20.9 12.5 20.9h7.5v-10.5s-.4-12.5 12.3-12.5h21.4s11.9.2 11.9-11.6V18.1s1.7-12-20.5-12zm-12.2 6.5c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.4 4.4-4.4z"
                        fill="#387EB8"
                      />
                      {/* Python Bottom Snake (Yellow) */}
                      <path
                        d="M64.8 121.9c22.9 0 21.5-9.9 21.5-9.9l-.1-10.3h-22v-3.1h31.4s14.3-1.6 14.3-21.6c0-20.1-12.5-20.9-12.5-20.9h-7.5v10.5s.4 12.5-12.3 12.5H43.7s-11.9-.2-11.9 11.6v19.3s-1.7 12 20.5 12zm12.2-6.5c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-2 4.4-4.4 4.4z"
                        fill="#FFE052"
                      />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1E1B18] group-hover:text-[#D97706] transition-colors">
                    Python
                  </span>
                </div>

                {/* 3. HTML Card */}
                <div className="group bg-white rounded-2xl p-3 sm:p-4 border border-[#E8E2D5] hover:border-[#D97706] shadow-sm hover:shadow-[0_8px_20px_rgba(245,158,11,0.25)] transition-all duration-300 flex flex-col items-center justify-center transform hover:-translate-y-1 cursor-default select-none">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center mb-1.5 sm:mb-2">
                    <svg viewBox="0 0 128 128" className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
                      {/* Orange Shield */}
                      <path d="M19.4 113.8L9.9 7.4h108.2l-9.5 106.3-44.6 12.4-44.6-12.3z" fill="#E44D26" />
                      <path d="M64 117.7l36.3-10.1 7.9-88.6H64v98.7z" fill="#F16529" />
                      {/* White '5' */}
                      <path
                        d="M64 45.4h-21l-1.5-16.7h45l.9-10.4H30.4l4.3 48.7H64V45.4zm0 37.6l-.1.1-17.7-4.8-1.1-12.8H34.6l2.3 25.4 27.1 7.5V83zm0-17.8h-.1l18.5 0-1.7 19.4-16.7 4.5v11.3l27.8-7.7 3.3-37.5H64v10z"
                        fill="#FFFFFF"
                      />
                      <path d="M64 18.3H87.3l-1.1 10.4H64v16.7h20.6l-2.4 26.8L64 77.7v10.9l20.4-5.6 2.6-29.3H64V18.3z" fill="#EBEBEB" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1E1B18] group-hover:text-[#D97706] transition-colors">
                    HTML
                  </span>
                </div>

                {/* 4. CSS Card */}
                <div className="group bg-white rounded-2xl p-3 sm:p-4 border border-[#E8E2D5] hover:border-[#D97706] shadow-sm hover:shadow-[0_8px_20px_rgba(245,158,11,0.25)] transition-all duration-300 flex flex-col items-center justify-center transform hover:-translate-y-1 cursor-default select-none">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center mb-1.5 sm:mb-2">
                    <svg viewBox="0 0 128 128" className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
                      {/* Blue Shield */}
                      <path d="M19.4 113.8L9.9 7.4h108.2l-9.5 106.3-44.6 12.4-44.6-12.3z" fill="#1572B6" />
                      <path d="M64 117.7l36.3-10.1 7.9-88.6H64v98.7z" fill="#33A9DC" />
                      {/* White '3' */}
                      <path
                        d="M64 45.4H43l-1.5-16.7H87l-.9 10.4H53.4l.7 8.3H64v-2zm0 37.6l-.1.1-17.7-4.8-1.1-12.8H34.6l2.3 25.4 27.1 7.5V83zm0-17.8h-.1l18.5 0-1.7 19.4-16.7 4.5v11.3l27.8-7.7 3.3-37.5H64v10z"
                        fill="#FFFFFF"
                      />
                      <path d="M64 18.3H87.3l-1.1 10.4H64v16.7h20.6l-2.4 26.8L64 77.7v10.9l20.4-5.6 2.6-29.3H64V18.3z" fill="#EBEBEB" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1E1B18] group-hover:text-[#D97706] transition-colors">
                    CSS
                  </span>
                </div>

                {/* 5. JavaScript Card */}
                <div className="group bg-white rounded-2xl p-3 sm:p-4 border border-[#E8E2D5] hover:border-[#D97706] shadow-sm hover:shadow-[0_8px_20px_rgba(245,158,11,0.25)] transition-all duration-300 flex flex-col items-center justify-center transform hover:-translate-y-1 cursor-default select-none">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center mb-1.5 sm:mb-2">
                    <svg viewBox="0 0 128 128" className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
                      {/* Yellow Square */}
                      <rect width="128" height="128" rx="16" fill="#F7DF1E" />
                      {/* Dark JS Lettering */}
                      <path
                        d="M33.6 104.4c2.8 4.7 7.7 7.7 14.7 7.7 8.3 0 13.8-4.2 13.8-13.6V56.8h-11.8v41.6c0 4.3-2.1 6.3-5.8 6.3-3.1 0-5.3-1.6-6.8-4.5l-4.1 4.2zM75.1 103.5c3.7 5.2 9.8 8.6 18.2 8.6 10.5 0 17.5-5.3 17.5-14.7 0-9.2-6.5-13.1-15.5-17.1-6.7-2.9-9.5-4.8-9.5-8.5 0-3.3 2.6-5.8 7-5.8 4.3 0 7.3 1.8 9.5 5.5l9.7-6.2c-4.5-6.9-11.2-9.6-19.3-9.6-10.7 0-17.3 6.1-17.3 15 0 9.4 6 13.4 15.1 17.3 6.8 3 9.8 4.9 9.8 8.9 0 3.8-3.1 6.5-8.3 6.5-6.2 0-10.5-3.3-13.1-7.9l-3.8 7.4z"
                        fill="#000000"
                      />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1E1B18] group-hover:text-[#D97706] transition-colors truncate">
                    JavaScript
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
