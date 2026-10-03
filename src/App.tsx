import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

  // Monitor scroll for 3D element animations and active navigation section
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, currentScrollY / totalHeight)));
      }

      // Determine active section based on scroll offset
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8F6F0] text-[#1E1B18] overflow-x-hidden selection:bg-[#E59E27]/30 selection:text-[#B45309]">
      {/* 3D Custom Cursor with Red Glowing Ribbon Trail */}
      <CustomCursor />

      {/* Top Navigation Bar matching reference image */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onConnectClick={() => scrollToSection('contact')}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with 3D Typewriter Title & 3D Glowing Black Circle */}
        <HeroSection
          scrollProgress={scrollProgress}
          scrollY={scrollY}
          onViewProjects={() => scrollToSection('projects')}
          onGetInTouch={() => scrollToSection('contact')}
        />

        {/* Detailed About Section */}
        <AboutSection onExploreWork={() => scrollToSection('projects')} />

        {/* Projects & Engineering Showcase */}
        <ProjectsSection />

        {/* Technical Skills & Computer Science Proficiencies */}
        <SkillsSection />

        {/* Contact & Collaboration Section */}
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
