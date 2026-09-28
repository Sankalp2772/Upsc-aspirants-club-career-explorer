import React from 'react';
import { FlattenedSlideEntry } from '../data/presentationRegistry';
import { ArrowLeft, ArrowRight, BookOpen, Layers } from './IconHelper';

interface PresentationFooterProps {
  currentEntry: FlattenedSlideEntry;
  onPrev: () => void;
  onNext: () => void;
  onOpenChapterMenu: () => void;
  canPrev: boolean;
  canNext: boolean;
}

export const PresentationFooter: React.FC<PresentationFooterProps> = ({
  currentEntry,
  onPrev,
  onNext,
  onOpenChapterMenu,
  canPrev,
  canNext
}) => {
  const { chapter, section, sectionSlideIndex, totalSectionSlides, globalIndex, totalGlobalSlides } = currentEntry;
  const progressPercent = Math.round(((globalIndex + 1) / totalGlobalSlides) * 100);

  return (
    <footer className="sticky bottom-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-4 md:px-8 py-2.5 flex flex-col gap-2 select-none shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      {/* Sleek Horizontal Reading Progress Bar with Electric Blue Gradient */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#00C2FF] via-[#0066FF] to-[#2563EB] transition-all duration-300 ease-out shadow-[0_0_8px_rgba(0,102,255,0.4)]"
          style={{ width: `${progressPercent}%` }}
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        {/* Left Indicator: Current Chapter and Section with Section Slide Count */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenChapterMenu}
            className="flex items-center gap-2.5 text-left group hover:opacity-90 transition-opacity cursor-pointer"
            title="Open Chapter Navigator"
          >
            <div className="w-3 h-3 rounded-full bg-[#0066FF] shadow-[0_0_10px_rgba(0,102,255,0.7)] animate-pulse" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                <span className="text-[#0066FF] font-extrabold">CH {chapter.chapterNumber}</span>
                <span className="text-slate-300">·</span>
                <span className="truncate max-w-[140px] sm:max-w-[260px] text-slate-950 font-extrabold">{chapter.shortTitle}</span>
                <span className="text-slate-300 hidden sm:inline">·</span>
                <span className="text-slate-600 text-xs hidden sm:inline truncate max-w-[180px] font-semibold">{section.shortName}</span>
              </div>
            </div>
          </button>

          {/* Section slide count badge */}
          <div className="text-xs sm:text-sm font-mono tabular-nums text-slate-800 bg-slate-100 border border-slate-300 px-2.5 py-0.5 rounded-lg font-bold">
            <span className="text-[#0066FF] font-black">{String(sectionSlideIndex).padStart(2, '0')}</span>
            <span className="text-slate-400 mx-1">/</span>
            <span>{String(totalSectionSlides).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Center: Global Progress (Desktop) & Keyboard Tips */}
        <div className="hidden lg:flex items-center gap-3 text-xs sm:text-sm text-slate-500 font-mono">
          <span className="tabular-nums text-slate-700 font-bold">
            Slide {globalIndex + 1} of {totalGlobalSlides} ({progressPercent}%)
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600 text-xs font-sans flex items-center gap-1.5 font-medium">
            <kbd className="px-2 py-0.5 bg-slate-100 border border-slate-300 rounded text-xs text-slate-700 font-mono font-bold">←</kbd>
            <kbd className="px-2 py-0.5 bg-slate-100 border border-slate-300 rounded text-xs text-slate-700 font-mono font-bold">→</kbd>
            <span>Navigate</span>
            <span className="text-slate-300 mx-1">·</span>
            <kbd className="px-2 py-0.5 bg-slate-100 border border-slate-300 rounded text-xs text-slate-700 font-mono font-bold">Space</kbd>
            <span>Next</span>
          </span>
        </div>

        {/* Right: Previous and Next controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onPrev}
            disabled={!canPrev}
            className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold rounded-full border transition-all ${
              canPrev
                ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 cursor-pointer shadow-sm active:scale-95'
                : 'bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed'
            }`}
            title="Previous Slide (Left Arrow)"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <button
            onClick={onNext}
            disabled={!canNext}
            className={`flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-extrabold rounded-full border transition-all ${
              canNext
                ? 'bg-[#0A0D14] hover:bg-slate-800 text-white border-slate-950 cursor-pointer shadow-md active:scale-95 hover:shadow-lg'
                : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
            }`}
            title="Next Slide (Right Arrow or Space)"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
