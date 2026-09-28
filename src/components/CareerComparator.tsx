import React, { useState } from 'react';
import {
  Scale,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Shield,
  Award,
  Sparkles,
  Landmark
} from 'lucide-react';
import {
  CAREER_PROFILES,
  CareerProfile,
  COMPARISON_DIMENSIONS
} from '../data/careerExplorerData';

interface CareerComparatorProps {
  comparingIds: string[];
  onRemoveCareer: (careerId: string) => void;
  onAddCareer: (careerId: string) => void;
  onSelectCareer: (careerId: string) => void;
}

export const CareerComparator: React.FC<CareerComparatorProps> = ({
  comparingIds,
  onRemoveCareer,
  onAddCareer,
  onSelectCareer
}) => {
  const selectedProfiles = CAREER_PROFILES.filter((c) => comparingIds.includes(c.id));
  const [selectorOpen, setSelectorOpen] = useState(false);

  // Default presets if less than 2 selected
  const applyPreset = (ids: string[]) => {
    // clear all and add preset
    comparingIds.forEach((id) => onRemoveCareer(id));
    ids.forEach((id) => onAddCareer(id));
  };

  const availableToAdd = CAREER_PROFILES.filter((c) => !comparingIds.includes(c.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 mb-3">
          <Scale className="w-3.5 h-3.5" />
          <span>Interactive Career Decision Matrix</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Compare Public Service Pathways
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Compare examinations, authority, pay scales, work-life balance, and career progression side-by-side to make an informed career decision.
        </p>

        {/* Quick Presets */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-slate-400 font-semibold mr-1">Popular Comparisons:</span>
          <button
            onClick={() => applyPreset(['upsc-cse', 'state-psc'])}
            className="px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-xs font-semibold text-slate-700 transition-colors"
          >
            UPSC CSE vs State PSC (KAS)
          </button>
          <button
            onClick={() => applyPreset(['upsc-cse', 'ssc-cgl', 'banking-rbi'])}
            className="px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-xs font-semibold text-slate-700 transition-colors"
          >
            UPSC vs SSC CGL vs RBI Grade B
          </button>
          <button
            onClick={() => applyPreset(['engineering-ese', 'scitech-isro-drdo'])}
            className="px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-xs font-semibold text-slate-700 transition-colors"
          >
            UPSC ESE vs ISRO / DRDO
          </button>
        </div>
      </div>

      {/* Selected Careers Grid Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            Selected Pathways ({selectedProfiles.length} / 3)
          </h3>
          {selectedProfiles.length < 3 && (
            <div className="relative">
              <button
                onClick={() => setSelectorOpen(!selectorOpen)}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Career to Compare</span>
              </button>

              {/* Dropdown list */}
              {selectorOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-30 max-h-60 overflow-y-auto">
                  {availableToAdd.map((career) => (
                    <button
                      key={career.id}
                      onClick={() => {
                        onAddCareer(career.id);
                        setSelectorOpen(false);
                      }}
                      className="w-full text-left p-2 rounded-lg hover:bg-slate-50 text-xs font-medium text-slate-800 flex items-center justify-between"
                    >
                      <span className="truncate pr-2">{career.name}</span>
                      <Plus className="w-3 h-3 text-blue-600 shrink-0" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {selectedProfiles.length === 0 ? (
          <div className="text-center py-10 text-slate-500 text-sm">
            No careers selected. Click one of the popular comparisons above or click "Add Career to Compare".
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedProfiles.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex items-start justify-between space-x-3"
              >
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
                    {c.categoryLabel}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm">{c.name}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{c.payLevel}</p>
                </div>
                <button
                  onClick={() => onRemoveCareer(c.id)}
                  className="p-1 text-slate-400 hover:text-red-600 rounded-md transition-colors"
                  title="Remove from comparison"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Comparison Table */}
      {selectedProfiles.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 sm:p-5 font-bold text-slate-700 w-1/4 min-w-[180px]">
                    Comparison Dimension
                  </th>
                  {selectedProfiles.map((c) => (
                    <th key={c.id} className="p-4 sm:p-5 font-bold text-slate-900 min-w-[240px]">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-normal text-blue-600 block">{c.shortName}</span>
                          <span className="text-sm font-bold">{c.name}</span>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARISON_DIMENSIONS.map((dim, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-4 sm:p-5 font-bold text-slate-700 bg-slate-50/30">
                      {dim.title}
                    </td>
                    {selectedProfiles.map((c) => {
                      const val = dim.getValue(c);

                      // Custom visual rendering for ratings
                      if (dim.field === 'powerAndAuthority' || dim.field === 'workLifeBalance') {
                        const num = Number(val);
                        return (
                          <td key={c.id} className="p-4 sm:p-5">
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                  <div
                                    key={s}
                                    className={`w-4 h-2 rounded-xs ${
                                      s <= num
                                        ? dim.field === 'powerAndAuthority'
                                          ? 'bg-amber-500'
                                          : 'bg-emerald-500'
                                        : 'bg-slate-200'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="font-bold text-slate-800 text-xs">
                                {num} / 5
                              </span>
                            </div>
                          </td>
                        );
                      }

                      return (
                        <td key={c.id} className="p-4 sm:p-5 text-slate-700 font-medium">
                          {val}
                        </td>
                      );
                    })}
                  </tr>
                ))}

                {/* Direct Action Link Row */}
                <tr className="bg-slate-50">
                  <td className="p-4 sm:p-5 font-bold text-slate-700">Explore Complete Guide</td>
                  {selectedProfiles.map((c) => (
                    <td key={c.id} className="p-4 sm:p-5">
                      <button
                        onClick={() => onSelectCareer(c.id)}
                        className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
