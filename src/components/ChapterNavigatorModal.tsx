import React, { useState } from 'react';
import { ALL_CHAPTERS } from '../data/presentationRegistry';
import { ChapterIcon, X, ChevronRight, Scale, BookOpen } from './IconHelper';

interface ChapterNavigatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapterId: string;
  onSelectChapter: (chapterId: string) => void;
  onSelectSection: (chapterId: string, sectionId: string) => void;
}

export const ChapterNavigatorModal: React.FC<ChapterNavigatorModalProps> = ({
  isOpen,
  onClose,
  currentChapterId,
  onSelectChapter,
  onSelectSection
}) => {
  const [expandedChapterId, setExpandedChapterId] = useState<string>(currentChapterId);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md overflow-y-auto p-4 sm:p-8 animate-in fade-in duration-200 flex items-center justify-center"
    >
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden my-auto">
        {/* Top Bar inside modal */}
        <div className="flex items-center justify-between border-b border-slate-200/80 px-6 sm:px-8 py-5 bg-slate-50/70">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl overflow-hidden p-1 bg-white border border-slate-200/90 shadow-sm shrink-0 flex items-center justify-center">
              <img src="/images/club_logo.jpg" alt="UPSC Aspirants Club Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#0066FF] uppercase tracking-wider font-bold mb-0.5">
                <span className="w-2 h-2 rounded-full bg-[#00C2FF]" />
                <span>FIRST GLIMPSE · Presentation Index</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-950">
                Table of Chapters & Examinations
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 border border-slate-200 rounded-full transition-colors cursor-pointer shadow-xs"
            title="Close Menu (Press Esc)"
          >
            <span>Close</span>
            <kbd className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded border border-slate-300 font-mono text-slate-600">ESC</kbd>
            <X className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>

        {/* 10 Chapters List and Expansion Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Left Column: Chapters 01 to 10 */}
          <div className="lg:col-span-5 space-y-2 max-h-[60vh] overflow-y-auto pr-1">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold mb-3">
              All {ALL_CHAPTERS.length} Comprehensive Chapters:
            </div>
            {ALL_CHAPTERS.map(ch => {
              const isCurrent = ch.id === currentChapterId;
              const isExpanded = ch.id === expandedChapterId;

              return (
                <div
                  key={ch.id}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isExpanded
                      ? 'bg-sky-50/80 border-[#0066FF] shadow-xs text-slate-950'
                      : 'bg-white border-slate-200/80 hover:bg-slate-50 text-slate-700'
                  }`}
                  onClick={() => setExpandedChapterId(ch.id)}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#0066FF]">
                      CH {ch.chapterNumber}
                    </span>
                    <div className="text-left">
                      <div className="text-xs sm:text-sm font-bold flex items-center gap-2 text-slate-900">
                        <span>{ch.title}</span>
                        {isCurrent && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 bg-[#0066FF] text-white rounded font-bold">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate max-w-[220px]">
                        {ch.sections.length} Examination Section{ch.sections.length > 1 ? 's' : ''}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-90 text-[#0066FF]' : ''}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Sections & Quick Jump within Selected Chapter */}
          <div className="lg:col-span-7 bg-slate-50/70 border border-slate-200/80 rounded-xl p-5 sm:p-6 max-h-[60vh] overflow-y-auto">
            {(() => {
              const selectedCh = ALL_CHAPTERS.find(c => c.id === expandedChapterId) || ALL_CHAPTERS[0];
              return (
                <div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                    <div>
                      <span className="font-mono text-xs text-[#0066FF] uppercase font-bold">
                        CHAPTER {selectedCh.chapterNumber}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-950">
                        {selectedCh.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {selectedCh.description}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        onSelectChapter(selectedCh.id);
                        onClose();
                      }}
                      className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0A0D14] hover:bg-slate-800 rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-sm"
                    >
                      Jump to Start
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold">
                      Specific Examinations in this Chapter:
                    </div>

                    {selectedCh.sections.map((section, sIdx) => (
                      <div
                        key={section.id}
                        className="p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-sky-300 transition-all shadow-xs"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                            0{sIdx + 1}. {section.title}
                          </h4>
                          {section.badge && (
                            <span className="text-[11px] text-sky-700 font-medium bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                              {section.badge}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-slate-600 mb-3">
                          {section.description}
                        </p>

                        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                          <span className="text-slate-400 font-mono text-[11px]">
                            {section.slides.length} Slide{section.slides.length > 1 ? 's' : ''} in journey
                          </span>

                          <button
                            onClick={() => {
                              onSelectSection(selectedCh.id, section.id);
                              onClose();
                            }}
                            className="flex items-center gap-1 font-semibold text-[#0066FF] hover:underline cursor-pointer"
                          >
                            <span>Explore Examination</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};
