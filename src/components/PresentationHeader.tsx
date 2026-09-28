import React from 'react';
import { FlattenedSlideEntry } from '../data/presentationRegistry';
import { Menu, Grid, Maximize2, Minimize2, ChevronRight, Tv, Monitor } from './IconHelper';

interface PresentationHeaderProps {
  currentEntry: FlattenedSlideEntry;
  onGoHome: () => void;
  onOpenChapterMenu: () => void;
  onOpenLandscape: () => void;
  onJumpToChapter: (chapterId: string) => void;
  onJumpToSection: (chapterId: string, sectionId: string) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  currentEntry,
  onGoHome,
  onOpenChapterMenu,
  onOpenLandscape,
  onJumpToChapter,
  onJumpToSection,
  isFullscreen,
  onToggleFullscreen
}) => {
  const { chapter, section, slide } = currentEntry;

  return (
    <div className="sticky top-0 z-40 w-full px-3 sm:px-6 pt-3 pb-2 pointer-events-none">
      <header className="pointer-events-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1640px] mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 bg-[#0A0D14] text-white rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.25)] border border-slate-800/90 backdrop-blur-md transition-all select-none">
        {/* Zone 1: Club Brand with Official Logo */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onGoHome}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none rounded-full"
            title="Return to Presentation Cover"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden p-0.5 bg-white ring-1 ring-sky-400/50 shadow-[0_0_12px_rgba(0,194,255,0.4)] group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
              <img src="/images/club_logo.jpg" alt="UPSC Aspirants Club Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-sm md:text-base font-extrabold tracking-tight text-white group-hover:text-sky-300 transition-colors whitespace-nowrap leading-tight">
                First Glimpse
              </span>
              <span className="text-[9px] font-mono text-sky-400/90 font-bold tracking-wider uppercase hidden sm:inline">
                UPSC Aspirants Club · KLE Tech
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Breadcrumbs (High-Visibility for Projectors) */}
        <nav aria-label="Presentation Breadcrumb" className="hidden md:flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 overflow-x-auto py-1 max-w-[50vw]">
          <button
            onClick={onGoHome}
            className="hover:text-white transition-colors whitespace-nowrap font-semibold text-slate-400"
          >
            Home
          </button>

          <span className="text-slate-600 font-light select-none">/</span>

          <button
            onClick={() => onJumpToChapter(chapter.id)}
            className="hover:text-sky-300 transition-colors whitespace-nowrap font-bold text-slate-200"
            title={`Jump to Chapter ${chapter.chapterNumber}`}
          >
            {chapter.chapterNumber}. {chapter.shortTitle}
          </button>

          <span className="text-slate-600 font-light select-none">/</span>

          <button
            onClick={() => onJumpToSection(chapter.id, section.id)}
            className="hover:text-white transition-colors whitespace-nowrap font-semibold text-slate-300 truncate max-w-[160px]"
            title={section.title}
          >
            {section.shortName}
          </button>

          <span className="text-slate-600 font-light select-none">/</span>

          <span className="text-sky-400 font-bold whitespace-nowrap truncate max-w-[200px]">
            {slide.title}
          </span>
        </nav>

        {/* Zone 3: Actions - Projector Badge, Landscape + Chapters Index + Fullscreen */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-sky-400 bg-sky-950/70 border border-sky-800/80 rounded-full select-none">
            <Tv className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>Projector Fullscreen View</span>
          </div>

          <button
            onClick={onOpenLandscape}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-colors whitespace-nowrap cursor-pointer"
            title="Open Examination Landscape"
          >
            <Grid className="w-3.5 h-3.5 text-sky-400" />
            <span>Landscape</span>
          </button>

          {/* Crisp White Pill Action Button */}
          <button
            onClick={onOpenChapterMenu}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-full transition-all shadow-md active:scale-95 whitespace-nowrap cursor-pointer"
            title="Open Chapter Index (Press Escape)"
          >
            <Menu className="w-3.5 h-3.5 text-slate-900" />
            <span>Chapters</span>
            <kbd className="hidden lg:inline-block ml-0.5 px-1.5 py-0.5 text-[9px] text-slate-600 bg-slate-100 border border-slate-300 rounded font-mono font-bold">
              ESC
            </kbd>
          </button>

          <button
            onClick={onToggleFullscreen}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-full transition-colors hidden sm:inline-flex cursor-pointer"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Projector Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>
    </div>
  );
};
