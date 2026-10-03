import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EFEBE1] border-t border-[#E0D9CB] py-12 text-[#5C5044]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <span className="font-script text-3xl text-[#181410]">JM</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E59E27]" />
          <span className="text-xs text-[#7A6E62]">
            © {new Date().getFullYear()} Jishnuprem M S. All rights reserved.
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-6 text-xs font-semibold text-[#665A4F]">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#181410] transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="hover:text-[#181410] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="hover:text-[#181410] transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => onNavigate('skills')}
            className="hover:text-[#181410] transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-[#181410] transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-white hover:bg-[#FAF8F5] border border-[#DCD6C9] text-[#181410] shadow-sm transition-all hover:-translate-y-0.5"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
