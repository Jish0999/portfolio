import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, X, Wifi, Zap, Activity, Users, MessageSquare, Bot, Cpu } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  details: {
    overview: string;
    features: string[];
    role: string;
  };
}

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'medi-aura',
      title: 'Medi Aura',
      description: 'An AI-powered health assistant web application for personalized health guidance.',
      tags: ['HTML', 'CSS', 'JavaScript', 'AI'],
      githubUrl: 'https://github.com/jishnupremms',
      liveUrl: 'https://github.com/jishnupremms',
      details: {
        overview:
          'Medi Aura is an intelligent digital health assistant designed to make preventative healthcare and daily wellness guidance accessible to everyone. Powered by artificial intelligence, it provides empathetic triage conversational interactions, symptom evaluation, and personalized lifestyle recommendations.',
        features: [
          'Conversational AI health guidance with instant symptom context analysis',
          'Responsive, soothing interface designed for stress-free interaction',
          'Preventative health tips, medication scheduling, and vital logging',
          'Privacy-focused client-side data handling for user discretion',
        ],
        role: 'Sole Developer & UI Designer',
      },
    },
    {
      id: 'iot-electricity',
      title: 'IoT Smart Electricity Consumption Monitoring System',
      description: 'Real-time monitoring of electricity usage using ESP32 with IoT and data visualization.',
      tags: ['ESP32', 'IoT', 'Blynk', 'Embedded C'],
      githubUrl: 'https://github.com/jishnupremms',
      liveUrl: 'https://github.com/jishnupremms',
      details: {
        overview:
          'A hardware and software IoT solution providing real-time telemetry on household and industrial electricity consumption. By pairing an ESP32 microcontroller with high-accuracy voltage and current sensors, it streams metrics to cloud dashboards to pinpoint wastage and forecast utility costs.',
        features: [
          'Sub-second voltage (228.4V), current (0.86A), and real power (196.5W) sampling',
          'Blynk IoT cloud integration with automated threshold notifications',
          'Interactive dynamic graphical charts illustrating load trends over time',
          'Fail-safe firmware written in Embedded C with Wi-Fi auto-reconnection',
        ],
        role: 'IoT Hardware Prototyper & Firmware Engineer',
      },
    },
    {
      id: 'coders-arena',
      title: 'Coders Arena',
      description: 'A Discord community for developers to learn, collaborate, and grow together.',
      tags: ['Community', 'Discord', 'Growth', 'Content'],
      githubUrl: 'YOUR_GITHUB_REPO',
      liveUrl: 'https://discord.gg/n2dtNdrHGd',
      details: {
        overview:
          'Coders Arena is a developer collective and tech incubator hosted on Discord. Built to bridge the gap between novice programmers and industry practitioners, it hosts regular code challenges, open-source project sprints, peer code reviews, and technical workshops.',
        features: [
          'Structured skill channels covering Web Development, Systems, and AI',
          'Automated community bots for coding challenges, leaderboard tracking, and role verification',
          'Weekly collaborative hack-nights and voice room study sessions',
          'Curated resource libraries for interview prep and open-source contributions',
        ],
        role: 'Community Founder & Lead Organizer',
      },
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#F8F6F0] overflow-hidden border-t border-[#EAE5DA]">
      
      {/* Background Golden Silk Waves & Light Beams */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        {/* Soft background ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#F6F3EB] to-[#EFEBE1]" />

        {/* Golden Silk Wave along the bottom */}
        <svg
          className="absolute w-[150%] -left-[25%] bottom-[-5%] h-[50%] opacity-85 filter drop-shadow-[0_-10px_25px_rgba(245,158,11,0.15)]"
          viewBox="0 0 1440 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="projSilkWave" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0.1" />
              <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#FEF08A" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="projSilkLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0 320 C 350 260, 700 420, 1050 220 C 1240 120, 1360 160, 1500 100 L 1500 500 L 0 500 Z"
            fill="url(#projSilkWave)"
          />
          <path
            d="M0 320 C 350 260, 700 420, 1050 220 C 1240 120, 1360 160, 1500 100"
            stroke="url(#projSilkLine)"
            strokeWidth="3"
            fill="none"
            filter="drop-shadow(0 0 8px #F59E0B)"
          />
        </svg>

        {/* Ambient Top Glow */}
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/20 via-yellow-100/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* SECTION HEADER ROW */}
        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 sm:pb-16">
          
          {/* Left: 02 —— SELECTED : Projects. */}
          <div className="max-w-2xl">
            {/* Section Tag matching reference: 02 ———— */}
            <div className="flex items-center gap-3">
              <span className="font-sans font-extrabold text-sm sm:text-base text-[#E58814] tracking-wider">
                02
              </span>
              <div className="w-10 sm:w-14 h-[1.5px] bg-[#E58814]" />
            </div>

            {/* S E L E C T E D : */}
            <div className="mt-1 flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#1E1B18]">
                SELECTED
              </span>
              <span className="flex flex-col gap-0.5 ml-0.5">
                <span className="w-1 h-1 rounded-full bg-[#E58814]" />
                <span className="w-1 h-1 rounded-full bg-[#E58814]" />
              </span>
            </div>

            {/* Headline with Golden Swoosh Arc extending from "Projects." */}
            <div className="relative mt-2 sm:mt-3 inline-flex items-center">
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#14110E] tracking-tight">
                Projects.
              </h2>

              {/* Elegant curved golden swoosh extending from the dot */}
              <div className="w-28 sm:w-44 h-8 ml-2 -mt-4 sm:-mt-6 relative overflow-hidden pointer-events-none hidden sm:block">
                <svg
                  viewBox="0 0 180 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]"
                >
                  <defs>
                    <linearGradient id="projDotSwoosh" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#D97706" />
                      <stop offset="45%" stopColor="#F59E0B" />
                      <stop offset="85%" stopColor="#FEF08A" />
                      <stop offset="100%" stopColor="#D97706" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M4 24 C 50 16, 110 4, 176 10 C 120 18, 60 26, 4 24 Z"
                    fill="url(#projDotSwoosh)"
                  />
                </svg>
              </div>
            </div>

            {/* Subtitle description from reference image */}
            <p className="mt-3 text-sm sm:text-base text-[#4E443A] leading-relaxed max-w-xl font-normal">
              A collection of projects where I've learned, built, and explored ideas using technology.
            </p>
          </div>

          {/* Right: Golden Glowing Rings, "Ideas into Reality" script, & Floating Spheres */}
          <div className="relative flex items-center justify-center lg:justify-end select-none pointer-events-none">
            
            {/* Top-Right Background Grid Matrix Dots (5x5 dots) */}
            <div className="absolute -top-10 -right-2 grid grid-cols-5 gap-2.5 opacity-35">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={`proj-dot-tr-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#786C60]" />
              ))}
            </div>

            {/* Concentric Golden Glowing Orbital Arcs & Script Text */}
            <div className="relative w-72 sm:w-80 h-36 sm:h-44 flex items-center justify-center">
              
              {/* Outer Golden Arcs */}
              <div className="absolute inset-0 rounded-full border border-amber-400/40 shadow-[0_0_35px_rgba(245,158,11,0.2)] transform -rotate-12" />
              <div className="absolute inset-3 rounded-full border border-[#F59E0B]/30 transform rotate-6" />

              {/* Script Cursive: "Ideas into Reality" */}
              <div className="relative z-10 text-center transform -rotate-6">
                <span className="font-script text-4xl sm:text-5xl text-[#92551A] tracking-wider block filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                  Ideas
                </span>
                <span className="font-script text-4xl sm:text-5xl text-[#B87023] tracking-wider block -mt-1 sm:-mt-2 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                  into Reality
                </span>

                {/* Golden swoosh underline */}
                <div className="w-32 sm:w-40 h-2.5 mt-0.5 mx-auto relative overflow-hidden">
                  <svg
                    viewBox="0 0 160 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(217,119,6,0.4)]"
                  >
                    <path
                      d="M2 9 C 35 3, 90 2, 156 6 C 110 9, 55 10, 2 9 Z"
                      fill="#D97706"
                    />
                  </svg>
                </div>
              </div>

              {/* Floating Golden Satellite Spheres */}
              <div
                className="absolute -top-3 left-6 w-5 h-5 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#FEF08A] to-[#D97706] shadow-[0_0_12px_#F59E0B] animate-bounce"
                style={{ animationDuration: '4.2s' }}
              />
              <div
                className="absolute top-1/2 -right-3 w-5 h-5 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#FEF08A] to-[#D97706] shadow-[0_0_12px_#F59E0B] animate-bounce"
                style={{ animationDuration: '3.6s', animationDelay: '1s' }}
              />
              <div
                className="absolute -bottom-2 right-12 w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#FEF08A] to-[#D97706] shadow-[0_0_8px_#F59E0B] animate-bounce"
                style={{ animationDuration: '4.8s', animationDelay: '2s' }}
              />
            </div>

          </div>

        </div>

        {/* 3 FEATURED PROJECT CARDS GRID */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          
          {/* ========================================================================= */}
          {/* CARD 1: Medi Aura */}
          {/* ========================================================================= */}
          <div
            onClick={() => setSelectedProject(projects[0])}
            className="group relative bg-[#FAF8F5] rounded-3xl p-5 sm:p-6 border border-[#E8E2D5] hover:border-[#D97706] shadow-sm hover:shadow-[0_12px_32px_rgba(245,158,11,0.22)] transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
          >
            <div>
              {/* Thumbnail Container: Medi Aura Mockup with 3D White Healthcare Robot */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFF5EC] via-[#FCEFE3] to-[#F5E2CE] p-4 flex flex-col justify-between border border-[#EAE3D5] shadow-inner select-none">
                
                {/* Mockup Header Bar */}
                <div className="flex items-center justify-between text-xs text-[#7A6E62]">
                  <div className="flex items-center gap-1.5 font-bold text-[#1E1B18]">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>Medi Aura</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A89F95]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A89F95]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A89F95]" />
                  </div>
                </div>

                {/* Center Content: Tagline + Cute 3D Healthcare Robot */}
                <div className="relative my-auto flex items-center justify-between px-2">
                  <div className="max-w-[55%]">
                    <div className="inline-block p-1 bg-amber-500/10 rounded-md text-[10px] font-bold text-[#D97706] mb-1">
                      Healthcare AI
                    </div>
                    <h4 className="font-display font-black text-sm sm:text-base leading-tight text-[#181410]">
                      Let AI assist your health
                    </h4>
                    <p className="text-[10px] text-[#7A6E62] mt-1 leading-snug">
                      Personalized 24/7 wellness triage
                    </p>
                  </div>

                  {/* 3D Stylized Healthcare Companion Robot Illustration */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]">
                    <svg viewBox="0 0 140 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <radialGradient id="robotBody" cx="40%" cy="30%" r="70%">
                          <stop offset="0%" stopColor="#FFFFFF" />
                          <stop offset="70%" stopColor="#E2E8F0" />
                          <stop offset="100%" stopColor="#CBD5E1" />
                        </radialGradient>
                        <linearGradient id="robotScreen" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#0B132B" />
                          <stop offset="100%" stopColor="#1C2541" />
                        </linearGradient>
                        <radialGradient id="robotEyeGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#67E8F9" />
                          <stop offset="60%" stopColor="#06B6D4" />
                          <stop offset="100%" stopColor="#0891B2" />
                        </radialGradient>
                      </defs>

                      {/* Floating Shadow */}
                      <ellipse cx="70" cy="132" rx="42" ry="7" fill="#000" opacity="0.12" />

                      {/* Ear Pods */}
                      <rect x="18" y="52" width="10" height="24" rx="5" fill="#3B82F6" />
                      <rect x="112" y="52" width="10" height="24" rx="5" fill="#3B82F6" />

                      {/* Head Chassis */}
                      <rect x="24" y="28" width="92" height="74" rx="36" fill="url(#robotBody)" stroke="#E2E8F0" strokeWidth="1.5" />

                      {/* Black Glass Face Visor */}
                      <rect x="36" y="42" width="68" height="46" rx="20" fill="url(#robotScreen)" />

                      {/* Glowing Blue AI Visor Eyes */}
                      <ellipse cx="54" cy="64" rx="9" ry="12" fill="url(#robotEyeGlow)" />
                      <ellipse cx="86" cy="64" rx="9" ry="12" fill="url(#robotEyeGlow)" />
                      <circle cx="56" cy="60" r="3" fill="#FFFFFF" />
                      <circle cx="88" cy="60" r="3" fill="#FFFFFF" />

                      {/* Torso / Collar Pod */}
                      <path d="M48 104 C 48 100, 92 100, 92 104 L 84 126 C 84 128, 56 128, 56 126 Z" fill="url(#robotBody)" />
                      <circle cx="70" cy="116" r="4" fill="#3B82F6" />
                    </svg>
                  </div>
                </div>

                {/* Subtle soft bottom reflection */}
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#E8DEC8] to-transparent opacity-60" />
              </div>

              {/* Title & Description */}
              <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold text-[#14110E] group-hover:text-[#D97706] transition-colors">
                {projects[0].title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#4E443A] leading-relaxed">
                {projects[0].description}
              </p>

              {/* Tags: HTML, CSS, JavaScript, AI */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {projects[0].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F4EFE6] border border-[#E4DDD0] text-[#332A22]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions Row: View Project → and [↗] */}
            <div className="mt-6 pt-4 border-t border-[#EAE4D7] flex items-center justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-[#D97706] group-hover:text-[#B45309] flex items-center gap-1.5 transition-colors">
                View Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>

              <div
                className="p-1.5 rounded-lg text-[#1E1B18] hover:text-[#D97706] hover:bg-[#F2ECE1] transition-colors"
                title="Open details"
              >
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CARD 2: IoT Smart Electricity Consumption Monitoring System */}
          {/* ========================================================================= */}
          <div
            onClick={() => setSelectedProject(projects[1])}
            className="group relative bg-[#FAF8F5] rounded-3xl p-5 sm:p-6 border border-[#E8E2D5] hover:border-[#D97706] shadow-sm hover:shadow-[0_12px_32px_rgba(245,158,11,0.22)] transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
          >
            <div>
              {/* Thumbnail Container: Dark IoT Telemetry Screen + ESP32 Microcontroller Board */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#0A0F1D] p-3.5 sm:p-4 flex flex-col justify-between border border-[#1E293B] shadow-inner select-none">
                
                {/* Header: Title + Glowing Cyan Wi-Fi */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-[11px] font-bold text-slate-100 tracking-tight">
                      Smart Electricity Monitoring
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <Wifi className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="text-[9px] font-mono text-cyan-300">ESP32</span>
                  </div>
                </div>

                {/* Dashboard Metrics Widgets + ESP32 PCB preview */}
                <div className="grid grid-cols-12 gap-2 my-auto items-center">
                  
                  {/* Left 8 columns: 3 Metric cards + Waveform Chart */}
                  <div className="col-span-8 space-y-1.5">
                    {/* 3 Metric Cards */}
                    <div className="grid grid-cols-3 gap-1">
                      <div className="bg-[#131C31] p-1.5 rounded-lg border border-[#1E293B]">
                        <span className="text-[8px] text-slate-400 block">Voltage</span>
                        <span className="text-[10px] font-mono font-bold text-cyan-300">228.4 V</span>
                      </div>
                      <div className="bg-[#131C31] p-1.5 rounded-lg border border-[#1E293B]">
                        <span className="text-[8px] text-slate-400 block">Current</span>
                        <span className="text-[10px] font-mono font-bold text-emerald-400">0.86 A</span>
                      </div>
                      <div className="bg-[#131C31] p-1.5 rounded-lg border border-[#1E293B]">
                        <span className="text-[8px] text-slate-400 block">Power</span>
                        <span className="text-[10px] font-mono font-bold text-amber-400">196.5 W</span>
                      </div>
                    </div>

                    {/* Real-time Oscillating Waveform Chart */}
                    <div className="relative h-12 w-full bg-[#10172A] rounded-lg p-1 border border-[#1E293B] overflow-hidden flex items-end">
                      <svg viewBox="0 0 120 40" className="w-full h-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="cyanChartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area */}
                        <path
                          d="M0 35 Q 20 12, 35 25 T 70 15 T 100 28 T 120 18 L 120 40 L 0 40 Z"
                          fill="url(#cyanChartGrad)"
                        />
                        {/* Line */}
                        <path
                          d="M0 35 Q 20 12, 35 25 T 70 15 T 100 28 T 120 18"
                          stroke="#22D3EE"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Right 4 columns: Stylized ESP32 Microcontroller Board */}
                  <div className="col-span-4 flex items-center justify-center">
                    <div className="relative w-16 h-24 bg-[#141E28] rounded-md border border-[#334155] p-1 flex flex-col justify-between shadow-lg">
                      {/* Gold ESP antenna top */}
                      <div className="w-full h-3.5 bg-[#B45309] rounded-sm flex items-center justify-center">
                        <div className="w-10 h-1.5 border border-amber-300 rounded-[1px]" />
                      </div>
                      {/* Metal Shield / IC */}
                      <div className="w-full h-10 bg-[#334155] rounded flex items-center justify-center border border-[#475569]">
                        <span className="text-[7px] font-mono text-slate-300">ESP-WROOM</span>
                      </div>
                      {/* GPIO Pin rails left & right */}
                      <div className="flex justify-between w-full px-0.5">
                        <div className="flex flex-col gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className="w-1.5 h-0.5 bg-amber-400" />
                          ))}
                        </div>
                        <div className="flex flex-col gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className="w-1.5 h-0.5 bg-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 border-t border-[#1E293B] pt-1">
                  <span>TELEMETRY: ONLINE</span>
                  <span className="text-emerald-400">SYNC: 100%</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold text-[#14110E] group-hover:text-[#D97706] transition-colors">
                {projects[1].title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#4E443A] leading-relaxed">
                {projects[1].description}
              </p>

              {/* Tags: ESP32, IoT, Blynk, Embedded C */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {projects[1].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F4EFE6] border border-[#E4DDD0] text-[#332A22]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions Row: View Project → and [↗] */}
            <div className="mt-6 pt-4 border-t border-[#EAE4D7] flex items-center justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-[#D97706] group-hover:text-[#B45309] flex items-center gap-1.5 transition-colors">
                View Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>

              <div
                className="p-1.5 rounded-lg text-[#1E1B18] hover:text-[#D97706] hover:bg-[#F2ECE1] transition-colors"
                title="Open details"
              >
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CARD 3: Coders Arena */}
          {/* ========================================================================= */}
          <div
            onClick={() => setSelectedProject(projects[2])}
            className="group relative bg-[#FAF8F5] rounded-3xl p-5 sm:p-6 border border-[#E8E2D5] hover:border-[#D97706] shadow-sm hover:shadow-[0_12px_32px_rgba(245,158,11,0.22)] transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
          >
            <div>
              {/* Thumbnail Container: Discord Developer Community Workspace Dashboard */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#111217] p-3.5 sm:p-4 flex flex-col justify-between border border-[#23242E] shadow-inner select-none">
                
                {/* Header: Coders Arena + Search Mock */}
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span>Coders Arena</span>
                  </div>
                  <div className="w-24 h-4 bg-[#1E1F29] rounded text-[9px] px-2 flex items-center text-slate-400">
                    Search...
                  </div>
                </div>

                {/* Main Arena Workspace with Sidebar & Center Hero */}
                <div className="grid grid-cols-12 gap-2 my-auto items-center">
                  
                  {/* Left 4 columns: Channels Sidebar */}
                  <div className="col-span-4 bg-[#1E1F29] p-2 rounded-lg space-y-1 text-[8px] font-semibold text-slate-400 border border-[#2E303E]">
                    <div className="text-white flex items-center gap-1"># general</div>
                    <div className="flex items-center gap-1 text-slate-300"># resources</div>
                    <div className="flex items-center gap-1"># challenges</div>
                    <div className="flex items-center gap-1 text-indigo-400 font-bold"># projects</div>
                    <div className="flex items-center gap-1">🔊 voice-hub</div>
                  </div>

                  {/* Right 8 columns: Discord Robot Mascot & Slogan */}
                  <div className="col-span-8 flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br from-[#1E1F2E] to-[#161722] border border-[#2E303E] text-center">
                    
                    {/* Glowing Purple Discord / Game Mascot */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#5865F2] to-[#7289DA] flex items-center justify-center shadow-[0_0_15px_rgba(88,101,242,0.6)] mb-1">
                      <svg viewBox="0 0 128 128" className="w-6 h-6 text-white" fill="currentColor">
                        <path d="M107.7 20.3A94.4 94.4 0 0 0 83.5 13c-.9 1.7-2 4-2.7 5.7a87.3 87.3 0 0 0-27.6 0c-.7-1.7-1.8-4-2.7-5.7A94 94 0 0 0 26.3 20.3C11 43.1 7 65.4 9 87.3a94.8 94.8 0 0 0 29.5 14.8c2.4-3.3 4.5-6.7 6.4-10.4-3.4-1.3-6.6-3-9.6-4.9.8-.6 1.6-1.2 2.4-1.8 19 8.8 39.5 8.8 58.2 0 .8.6 1.6 1.2 2.4 1.8-3 2-6.2 3.6-9.6 4.9 1.9 3.7 4 7.1 6.4 10.4A94.7 94.7 0 0 0 125 87.3c2.4-25.2-4.1-47.3-17.3-67zm-63.5 53.6c-5.5 0-10.1-5-10.1-11.2s4.4-11.2 10.1-11.2c5.7 0 10.3 5 10.1 11.2 0 6.2-4.4 11.2-10.1 11.2zm45.6 0c-5.5 0-10.1-5-10.1-11.2s4.4-11.2 10.1-11.2c5.7 0 10.3 5 10.1 11.2 0 6.2-4.4 11.2-10.1 11.2z" />
                      </svg>
                    </div>

                    <h5 className="font-display font-bold text-xs text-white">
                      Coders Arena
                    </h5>
                    <p className="text-[8px] text-indigo-300 font-medium">
                      Connect. Code. Grow.
                    </p>

                    {/* Badges */}
                    <div className="flex items-center gap-1 mt-1.5">
                      <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[7px] font-bold">
                        Community
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[7px] font-bold">
                        Growth
                      </span>
                    </div>
                  </div>

                </div>

                {/* Footer status */}
                <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-[#23242E] pt-1">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Active Devs Online
                  </span>
                  <span className="text-indigo-400">Join Community →</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold text-[#14110E] group-hover:text-[#D97706] transition-colors">
                {projects[2].title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#4E443A] leading-relaxed">
                {projects[2].description}
              </p>

              {/* Tags: Community, Discord, Growth, Content */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {projects[2].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F4EFE6] border border-[#E4DDD0] text-[#332A22]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions Row: View Project → and [↗] */}
            <div className="mt-6 pt-4 border-t border-[#EAE4D7] flex items-center justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-[#D97706] group-hover:text-[#B45309] flex items-center gap-1.5 transition-colors">
                View Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>

              <div
                className="p-1.5 rounded-lg text-[#1E1B18] hover:text-[#D97706] hover:bg-[#F2ECE1] transition-colors"
                title="Open details"
              >
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>

        {/* DETAILED PROJECT MODAL (WHEN A USER CLICKS ANY PROJECT) */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl border border-[#E6E1D5] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#EAE5DA] hover:bg-[#DCD6C9] text-[#2B231D] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#D97706] tracking-wider uppercase">
                  <span>Featured Project</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.details.role}</span>
                </div>

                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-[#1A1612]">
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-medium text-[#574C41] leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Overview Paragraph */}
                <div className="mt-6 p-5 rounded-2xl bg-white border border-[#EAE4D7] shadow-sm">
                  <h4 className="text-xs font-bold text-[#8A7D70] uppercase tracking-wider mb-2">
                    Project Architecture & Story
                  </h4>
                  <p className="text-sm text-[#3E342B] leading-relaxed">
                    {selectedProject.details.overview}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-[#8A7D70] uppercase tracking-wider mb-3">
                    Core Capabilities & Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.details.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#4E443A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies / Tags */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-[#8A7D70] uppercase tracking-wider mb-2.5">
                    Stack & Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white border border-[#DCD6C9] text-xs font-semibold text-[#2B231D]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="mt-8 pt-6 border-t border-[#E6E1D5] flex items-center justify-end gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#1A1612] bg-[#EAE5DA] hover:bg-[#DCD6C9] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Link</span>
                  </a>
                  <a
                    href="mailto:jishnupremms2025@gmail.com?subject=Inquiry regarding project"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-extrabold text-[#1A1612] bg-gradient-to-r from-[#FBA438] to-[#E58814] shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Inquire / Collaborate</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
