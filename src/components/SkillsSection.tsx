import React, { useState } from 'react';

interface SkillItem {
  id: string;
  name: string;
  description: string;
  percentage: number;
  icon: React.ReactNode;
}

export const SkillsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const skills: SkillItem[] = [
    {
      id: 'c',
      name: 'C',
      description: 'Strong understanding of core programming concepts and problem solving.',
      percentage: 82,
      icon: (
        <svg viewBox="0 0 128 128" className="w-14 h-14 sm:w-16 sm:h-16 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
          <path
            d="M115.4 30.7L66.7 2.6c-1.6-.9-3.7-.9-5.3 0L12.6 30.7c-1.6.9-2.6 2.7-2.6 4.5v57.5c0 1.9 1 3.6 2.6 4.5l48.8 28.2c.8.5 1.7.7 2.6.7s1.8-.2 2.6-.7l48.8-28.2c1.6-.9 2.6-2.7 2.6-4.5V35.3c0-1.9-1-3.6-2.6-4.6z"
            fill="#283593"
          />
          <path
            d="M64 8.5L18.4 34.8v52.6L64 113.8l45.6-26.3V34.8L64 8.5z"
            fill="#1E88E5"
          />
          <path
            d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c10.3 0 19.3-5.6 24.1-13.8l-11.4-6.6C73.9 76 69.2 78.8 64 78.8c-8.2 0-14.8-6.6-14.8-14.8s6.6-14.8 14.8-14.8c5.2 0 9.9 2.8 12.7 7.2l11.4-6.6C83.3 41.6 74.3 36 64 36z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      id: 'python',
      name: 'Python',
      description: 'Used for problem solving, scripting, and building small projects.',
      percentage: 76,
      icon: (
        <svg viewBox="0 0 128 128" className="w-14 h-14 sm:w-16 sm:h-16 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
          <path
            d="M63.2 6.1c-22.9 0-21.5 9.9-21.5 9.9l.1 10.3h22v3.1H32.4s-14.3 1.6-14.3 21.6c0 20.1 12.5 20.9 12.5 20.9h7.5v-10.5s-.4-12.5 12.3-12.5h21.4s11.9.2 11.9-11.6V18.1s1.7-12-20.5-12zm-12.2 6.5c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.4 4.4-4.4z"
            fill="#387EB8"
          />
          <path
            d="M64.8 121.9c22.9 0 21.5-9.9 21.5-9.9l-.1-10.3h-22v-3.1h31.4s14.3-1.6 14.3-21.6c0-20.1-12.5-20.9-12.5-20.9h-7.5v10.5s.4 12.5-12.3 12.5H43.7s-11.9-.2-11.9 11.6v19.3s-1.7 12 20.5 12zm12.2-6.5c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-4.4 2-4.4 4.4z"
            fill="#FFE052"
          />
        </svg>
      ),
    },
    {
      id: 'html',
      name: 'HTML',
      description: 'Build responsive and structured web pages.',
      percentage: 88,
      icon: (
        <svg viewBox="0 0 128 128" className="w-14 h-14 sm:w-16 sm:h-16 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
          <path d="M19.4 113.8L9.9 7.4h108.2l-9.5 106.3-44.6 12.4-44.6-12.3z" fill="#E44D26" />
          <path d="M64 117.7l36.3-10.1 7.9-88.6H64v98.7z" fill="#F16529" />
          <path
            d="M64 45.4h-21l-1.5-16.7h45l.9-10.4H30.4l4.3 48.7H64V45.4zm0 37.6l-.1.1-17.7-4.8-1.1-12.8H34.6l2.3 25.4 27.1 7.5V83zm0-17.8h-.1l18.5 0-1.7 19.4-16.7 4.5v11.3l27.8-7.7 3.3-37.5H64v10z"
            fill="#FFFFFF"
          />
          <path d="M64 18.3H87.3l-1.1 10.4H64v16.7h20.6l-2.4 26.8L64 77.7v10.9l20.4-5.6 2.6-29.3H64V18.3z" fill="#EBEBEB" />
        </svg>
      ),
    },
    {
      id: 'css',
      name: 'CSS',
      description: 'Design clean and modern user interfaces with responsive layouts.',
      percentage: 82,
      icon: (
        <svg viewBox="0 0 128 128" className="w-14 h-14 sm:w-16 sm:h-16 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
          <path d="M19.4 113.8L9.9 7.4h108.2l-9.5 106.3-44.6 12.4-44.6-12.3z" fill="#1572B6" />
          <path d="M64 117.7l36.3-10.1 7.9-88.6H64v98.7z" fill="#33A9DC" />
          <path
            d="M64 45.4H43l-1.5-16.7H87l-.9 10.4H53.4l.7 8.3H64v-2zm0 37.6l-.1.1-17.7-4.8-1.1-12.8H34.6l2.3 25.4 27.1 7.5V83zm0-17.8h-.1l18.5 0-1.7 19.4-16.7 4.5v11.3l27.8-7.7 3.3-37.5H64v10z"
            fill="#FFFFFF"
          />
          <path d="M64 18.3H87.3l-1.1 10.4H64v16.7h20.6l-2.4 26.8L64 77.7v10.9l20.4-5.6 2.6-29.3H64V18.3z" fill="#EBEBEB" />
        </svg>
      ),
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      description: 'Add interactivity and dynamic functionality to web applications.',
      percentage: 78,
      icon: (
        <svg viewBox="0 0 128 128" className="w-14 h-14 sm:w-16 sm:h-16 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
          <rect width="128" height="128" rx="16" fill="#F7DF1E" />
          <path
            d="M33.6 104.4c2.8 4.7 7.7 7.7 14.7 7.7 8.3 0 13.8-4.2 13.8-13.6V56.8h-11.8v41.6c0 4.3-2.1 6.3-5.8 6.3-3.1 0-5.3-1.6-6.8-4.5l-4.1 4.2zM75.1 103.5c3.7 5.2 9.8 8.6 18.2 8.6 10.5 0 17.5-5.3 17.5-14.7 0-9.2-6.5-13.1-15.5-17.1-6.7-2.9-9.5-4.8-9.5-8.5 0-3.3 2.6-5.8 7-5.8 4.3 0 7.3 1.8 9.5 5.5l9.7-6.2c-4.5-6.9-11.2-9.6-19.3-9.6-10.7 0-17.3 6.1-17.3 15 0 9.4 6 13.4 15.1 17.3 6.8 3 9.8 4.9 9.8 8.9 0 3.8-3.1 6.5-8.3 6.5-6.2 0-10.5-3.3-13.1-7.9l-3.8 7.4z"
            fill="#000000"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#F8F6F0] overflow-hidden border-t border-[#EAE5DA]">
      
      {/* Background Golden Silk Waves & Light Beams */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        {/* Soft background ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#F6F3EB] to-[#EFEBE1]" />

        {/* Ambient Top Glow */}
        <div className="absolute top-12 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/20 via-yellow-100/10 to-transparent rounded-full blur-3xl" />

        {/* Golden Wave with Floating Golden Spheres (matching reference image) */}
        <svg
          className="absolute w-[160%] -left-[30%] bottom-[-8%] h-[55%] opacity-85 filter drop-shadow-[0_-10px_25px_rgba(245,158,11,0.18)]"
          viewBox="0 0 1440 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="skillSilkWave" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0.1" />
              <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#FEF08A" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="skillSilkLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0 340 C 350 280, 700 440, 1050 240 C 1240 140, 1360 180, 1500 120 L 1500 500 L 0 500 Z"
            fill="url(#skillSilkWave)"
          />
          <path
            d="M0 340 C 350 280, 700 440, 1050 240 C 1240 140, 1360 180, 1500 120"
            stroke="url(#skillSilkLine)"
            strokeWidth="3"
            fill="none"
            filter="drop-shadow(0 0 8px #F59E0B)"
          />
        </svg>

        {/* Apex Sphere perched on center wave trajectory */}
        <div className="absolute top-[28%] left-[58%] w-6 h-6 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#FEF08A] to-[#D97706] shadow-[0_0_16px_#F59E0B] animate-pulse hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* SECTION HEADER ROW */}
        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 sm:pb-16">
          
          {/* Left: 03 —— M Y : Skills. */}
          <div className="max-w-2xl">
            {/* Section Tag: 03 ———— */}
            <div className="flex items-center gap-3">
              <span className="font-sans font-extrabold text-sm sm:text-base text-[#E58814] tracking-wider">
                03
              </span>
              <div className="w-10 sm:w-14 h-[1.5px] bg-[#E58814]" />
            </div>

            {/* M Y : */}
            <div className="mt-1 flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#1E1B18]">
                M Y
              </span>
              <span className="flex flex-col gap-0.5 ml-0.5">
                <span className="w-1 h-1 rounded-full bg-[#E58814]" />
                <span className="w-1 h-1 rounded-full bg-[#E58814]" />
              </span>
            </div>

            {/* Display Title: Skills. */}
            <div className="mt-2 sm:mt-3 flex items-baseline">
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#14110E] tracking-tight">
                Skills<span className="text-[#D97706] filter drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]">.</span>
              </h2>
            </div>

            {/* Subtitle description from reference image */}
            <p className="mt-3 text-sm sm:text-base text-[#4E443A] leading-relaxed max-w-xl font-normal">
              Technologies I work with and continue to explore, build, and improve.
            </p>
          </div>

          {/* Right: Golden Arcs, "Skills Build Better Ideas." script, & Floating Spheres */}
          <div className="relative flex items-center justify-center lg:justify-end select-none pointer-events-none">
            
            {/* Top-Right Background Grid Matrix Dots (5x5 dots) */}
            <div className="absolute -top-10 -right-2 grid grid-cols-5 gap-2.5 opacity-35">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={`skill-dot-tr-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#786C60]" />
              ))}
            </div>

            {/* Concentric Golden Glowing Arcs & Script Text */}
            <div className="relative w-80 sm:w-96 h-40 sm:h-48 flex items-center justify-center">
              
              {/* Outer Golden Glowing Orbital Ring */}
              <div className="absolute inset-0 rounded-full border border-amber-400/35 shadow-[0_0_35px_rgba(245,158,11,0.2)] transform -rotate-12" />

              {/* Script Cursive: "Skills Build Better Ideas." */}
              <div className="relative z-10 text-center transform -rotate-6">
                <span className="font-script text-4xl sm:text-5xl text-[#92551A] tracking-wider block filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                  Skills
                </span>
                <span className="font-script text-4xl sm:text-5xl text-[#B87023] tracking-wider block -mt-1 sm:-mt-2 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                  Build
                </span>
                <span className="font-script text-4xl sm:text-5xl text-[#D97706] tracking-wider block -mt-1 sm:-mt-2 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                  Better Ideas.
                </span>

                {/* Golden swoosh underline */}
                <div className="w-36 sm:w-48 h-2.5 mt-0.5 mx-auto relative overflow-hidden">
                  <svg
                    viewBox="0 0 180 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(217,119,6,0.4)]"
                  >
                    <path
                      d="M2 9 C 40 3, 100 2, 176 6 C 120 9, 60 10, 2 9 Z"
                      fill="#D97706"
                    />
                  </svg>
                </div>
              </div>

              {/* Floating Golden Satellite Spheres */}
              <div
                className="absolute top-2 -left-2 w-5 h-5 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#FEF08A] to-[#D97706] shadow-[0_0_12px_#F59E0B] animate-bounce"
                style={{ animationDuration: '4s' }}
              />
              <div
                className="absolute -bottom-2 right-8 w-4 h-4 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#FEF08A] to-[#D97706] shadow-[0_0_10px_#F59E0B] animate-bounce"
                style={{ animationDuration: '3.6s', animationDelay: '1.2s' }}
              />
            </div>

          </div>

        </div>

        {/* 5 SKILL CARDS ROW (C, Python, HTML, CSS, JavaScript) */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              onMouseEnter={() => setHoveredCard(skill.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#E8E2D5] hover:border-[#D97706] shadow-sm hover:shadow-[0_12px_32px_rgba(245,158,11,0.22)] transition-all duration-300 flex flex-col justify-between items-center text-center transform hover:-translate-y-1.5 cursor-default select-none"
            >
              <div className="w-full flex flex-col items-center">
                
                {/* Logo with delicate golden orbital wireframe rings & satellite nodes */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-4">
                  
                  {/* Outer Orbital Wireframe Ring */}
                  <div className="absolute inset-0 rounded-full border border-amber-400/40 group-hover:border-amber-500/70 transition-colors pointer-events-none" />

                  {/* Tilted Elliptical Orbital Wireframe */}
                  <div className="absolute inset-2 rounded-full border border-[#D97706]/30 transform -rotate-12 pointer-events-none" />

                  {/* Micro Golden Satellite Nodes */}
                  <div className="absolute top-1 right-3 w-2 h-2 rounded-full bg-gradient-to-tr from-[#F59E0B] to-[#FEF08A] shadow-[0_0_6px_#F59E0B]" />
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-[#F59E0B] to-[#FEF08A] shadow-[0_0_6px_#F59E0B]" />
                  <div className="absolute top-1/2 -right-1 w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-[#F59E0B] to-[#FEF08A]" />

                  {/* Central Tech Icon Badge */}
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#14110E] group-hover:text-[#D97706] transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-[0.82rem] text-[#554A40] leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress / Proficiency Bar matching reference image */}
              <div className="w-full mt-6 pt-2">
                <div className="w-full h-2 bg-[#E9E3D6] rounded-full overflow-hidden p-[1px]">
                  <div
                    className="h-full bg-gradient-to-r from-[#FBA438] via-[#F59E0B] to-[#E58814] rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)] transition-all duration-700 ease-out"
                    style={{
                      width: `${skill.percentage}%`,
                    }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM AREA: Tagline Lockup (Left) & Dot Matrix (Right) */}
        <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 select-none">
          
          {/* Left Tagline Lockup: Vertical golden pin with circular node + 3-line statement */}
          <div className="flex items-center gap-3.5">
            {/* Vertical Pin Line with Center Golden Node */}
            <div className="relative h-12 w-[1.5px] bg-[#E58814]/70 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-white border-2 border-[#E58814] shadow-[0_0_6px_#E58814]" />
            </div>
            <div className="text-xs font-semibold text-[#665A4F] leading-tight space-y-0.5">
              <span className="block text-[#1E1B18] font-bold">Constantly learning.</span>
              <span className="block">Always building.</span>
              <span className="block">Ready for what's next.</span>
            </div>
          </div>

          {/* Right Bottom Dot Matrix Pattern (4x4 dots) */}
          <div className="grid grid-cols-4 gap-2.5 opacity-35 self-end sm:self-center">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={`skill-dot-br-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#786C60]" />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
