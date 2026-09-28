import React from 'react';
import { ALL_CHAPTERS } from '../data/presentationRegistry';
import { ChapterIcon, X, ChevronRight, Scale } from './IconHelper';

interface LandscapeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (chapterId: string) => void;
}

export const LandscapeModal: React.FC<LandscapeModalProps> = ({
  isOpen,
  onClose,
  onSelectChapter
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md overflow-y-auto p-4 sm:p-8 animate-in fade-in duration-200 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 px-6 sm:px-8 py-5 bg-slate-50/70 shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl overflow-hidden p-1 bg-white border border-slate-200/90 shadow-sm shrink-0 flex items-center justify-center">
              <img src="/images/club_logo.jpg" alt="UPSC Aspirants Club Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#0066FF] uppercase tracking-wider font-bold mb-0.5">
                <span className="w-2 h-2 rounded-full bg-[#00C2FF]" />
                <span>FIRST GLIMPSE · Master Landscape</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-950">
                The Indian Government Recruitment Landscape
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                One Country. Many Examinations. Countless Pathways. Click any family to explore its complete isolated journey.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 border border-slate-200 rounded-full transition-colors cursor-pointer shadow-xs"
          >
            <span>Close</span>
            <X className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>

        {/* Content Grid */}
        <div className="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ALL_CHAPTERS.map(ch => (
            <div
              key={ch.id}
              onClick={() => {
                onSelectChapter(ch.id);
                onClose();
              }}
              className="group p-5 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-sky-400 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-mono text-xs font-bold text-[#0066FF] bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    CHAPTER {ch.chapterNumber}
                  </span>
                  <ChapterIcon name={ch.iconName} className="w-4 h-4 text-slate-400 group-hover:text-[#0066FF] transition-colors" />
                </div>

                <h3 className="font-display text-base font-bold text-slate-950 group-hover:text-[#0066FF] transition-colors mb-1">
                  {ch.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {ch.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60">
                <div className="text-[10px] font-mono text-slate-400 font-bold uppercase mb-1.5">
                  Key Streams:
                </div>
                <div className="flex flex-wrap gap-1 mb-3.5">
                  {ch.sections.map(s => (
                    <span
                      key={s.id}
                      className="text-[10px] px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-medium"
                    >
                      {s.shortName}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-xs font-semibold text-[#0066FF] gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Enter {ch.shortTitle} Exploration</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
