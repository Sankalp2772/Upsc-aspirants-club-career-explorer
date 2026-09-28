import React from 'react';
import { X, Bookmark, ArrowRight, Trash2, Scale } from 'lucide-react';
import { CAREER_PROFILES, CareerProfile } from '../data/careerExplorerData';

interface SavedCareersModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  onRemoveSaved: (id: string) => void;
  onSelectCareer: (id: string) => void;
  onCompareCareers: (ids: string[]) => void;
}

export const SavedCareersModal: React.FC<SavedCareersModalProps> = ({
  isOpen,
  onClose,
  savedIds,
  onRemoveSaved,
  onSelectCareer,
  onCompareCareers
}) => {
  if (!isOpen) return null;

  const savedProfiles = CAREER_PROFILES.filter((c) => savedIds.includes(c.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <Bookmark className="w-4 h-4 fill-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Saved Careers</h3>
              <p className="text-xs text-slate-500">
                {savedProfiles.length} {savedProfiles.length === 1 ? 'career' : 'careers'} bookmarked
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {savedProfiles.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-3">
                <Bookmark className="w-6 h-6" />
              </div>
              <p className="text-slate-800 font-semibold text-sm">No saved careers yet</p>
              <p className="text-slate-500 text-xs mt-1 max-w-xs mx-auto">
                Click the bookmark icon on any career card to save it here for quick access and comparison.
              </p>
            </div>
          ) : (
            savedProfiles.map((career) => (
              <div
                key={career.id}
                className="group relative p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 mb-1">
                      {career.categoryLabel}
                    </span>
                    <h4
                      onClick={() => {
                        onSelectCareer(career.id);
                        onClose();
                      }}
                      className="font-bold text-slate-900 text-sm hover:text-blue-600 cursor-pointer line-clamp-1"
                    >
                      {career.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">{career.payLevel}</p>
                  </div>
                  <button
                    onClick={() => onRemoveSaved(career.id)}
                    className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    title="Remove from bookmarks"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      onSelectCareer(career.id);
                      onClose();
                    }}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {career.stagesCount} Stages
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {savedProfiles.length > 1 && (
          <div className="p-4 border-t border-slate-200 bg-slate-50/80">
            <button
              onClick={() => {
                onCompareCareers(savedProfiles.map((p) => p.id).slice(0, 3));
                onClose();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-xs flex items-center justify-center space-x-2 transition-all"
            >
              <Scale className="w-4 h-4" />
              <span>Compare Selected ({Math.min(savedProfiles.length, 3)})</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
