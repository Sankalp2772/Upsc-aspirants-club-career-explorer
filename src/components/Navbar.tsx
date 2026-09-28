import React, { useState } from 'react';
import {
  Compass,
  Scale,
  Sparkles,
  BookOpen,
  Award,
  Bookmark,
  Tv,
  Menu,
  X,
  Search,
  ChevronRight,
  Landmark
} from 'lucide-react';

export type ActiveTab = 'explore' | 'compare' | 'quiz' | 'lbsnaa' | 'analytics' | 'foundations';

interface NavbarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  savedCount: number;
  onOpenSaved: () => void;
  onTogglePresentationMode: () => void;
  onSearchClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  savedCount,
  onOpenSaved,
  onTogglePresentationMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'explore', label: 'Explore Careers', icon: <Compass className="w-4 h-4" /> },
    { id: 'compare', label: 'Compare', icon: <Scale className="w-4 h-4" /> },
    { id: 'quiz', label: 'Career Matcher', icon: <Sparkles className="w-4 h-4 text-amber-500" />, badge: 'Quiz' },
    { id: 'lbsnaa', label: 'LBSNAA Journey', icon: <Award className="w-4 h-4 text-blue-600" /> },
    { id: 'analytics', label: 'Cutoffs & Trends', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'foundations', label: 'Architecture', icon: <Landmark className="w-4 h-4" /> }
  ];

  const handleLinkClick = (tab: ActiveTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Identity */}
          <div
            onClick={() => handleLinkClick('explore')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-base sm:text-lg tracking-wider font-serif">AC</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-base sm:text-lg text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                  CAREER EXPLORER
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  Govt Exams
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                UPSC Aspirants Club · KLE Tech Hubballi
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/80 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Bookmarks Counter Button */}
            <button
              onClick={onOpenSaved}
              className="relative p-2 sm:px-3 sm:py-2 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors flex items-center space-x-1.5 text-xs sm:text-sm font-medium"
              title="Saved / Bookmarked Careers"
            >
              <Bookmark className={`w-4 h-4 ${savedCount > 0 ? 'text-blue-600 fill-blue-600' : 'text-slate-500'}`} />
              <span className="hidden sm:inline">Saved</span>
              {savedCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold bg-blue-600 text-white rounded-full">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Presentation Mode Toggle */}
            <button
              onClick={onTogglePresentationMode}
              className="p-2 sm:px-3 sm:py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white shadow-xs transition-colors flex items-center space-x-1.5 text-xs sm:text-sm font-medium"
              title="Switch to Projector / Slide Deck Mode"
            >
              <Tv className="w-4 h-4 text-sky-400" />
              <span className="hidden md:inline">Projector View</span>
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-5 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="px-2 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Navigation
          </div>
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  {link.icon}
                  <span>{link.label}</span>
                </div>
                {link.badge ? (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">
                    {link.badge}
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between px-2">
            <span className="text-xs text-slate-500 font-medium">Classroom / Seminar?</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onTogglePresentationMode();
              }}
              className="flex items-center space-x-1.5 text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1.5 rounded-md hover:bg-blue-100 transition-colors"
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Open Projector View</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
