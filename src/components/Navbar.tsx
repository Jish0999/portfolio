import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onConnectClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onConnectClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F6F0]/90 backdrop-blur-md shadow-sm border-b border-[#E6E1D5]/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Zone 1: Brand Monogram (JM.) in stylish handwriting with amber dot */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="group flex items-center select-none"
        >
          <span className="font-script text-4xl sm:text-5xl text-[#181410] tracking-tight group-hover:text-amber-800 transition-colors">
            JM
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#E59E27] ml-0.5 mt-2 group-hover:scale-125 transition-transform shadow-[0_0_8px_#E59E27]" />
        </a>

        {/* Zone 2: Navigation Links (HOME, ABOUT, PROJECTS, SKILLS, CONTACT) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative py-1 text-xs lg:text-sm tracking-wider font-bold transition-all ${
                  isActive
                    ? 'text-[#E59E27]'
                    : 'text-[#3E342B] hover:text-[#181410]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E59E27] rounded-full shadow-[0_0_6px_#E59E27]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action (LET'S CONNECT →) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onConnectClick}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs lg:text-sm font-extrabold text-[#1A1612] bg-gradient-to-r from-[#FBA438] via-[#F59E0B] to-[#E58814] hover:from-[#F59E0B] hover:to-[#D97706] shadow-[0_4px_18px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>LET'S CONNECT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#2B231D] hover:text-black focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E6E1D5] px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left text-sm font-bold tracking-wider py-1.5 transition-colors ${
                  activeSection === item.id ? 'text-[#E59E27]' : 'text-[#3E342B]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onConnectClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-extrabold text-[#1A1612] bg-gradient-to-r from-[#FBA438] to-[#E58814] shadow-md"
              >
                <span>LET'S CONNECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
