import React, { useState } from 'react';
import {
  TrendingUp,
  Award,
  BookOpen,
  Scale,
  Calendar,
  ChevronRight,
  Info,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { chapter02_upsc } from '../data/chapters/chapter02_upsc';

interface CutoffsAnalyticsViewProps {
  onSelectCareer: (careerId: string) => void;
}

export const CutoffsAnalyticsView: React.FC<CutoffsAnalyticsViewProps> = ({ onSelectCareer }) => {
  const [activeSection, setActiveSection] = useState<'cutoffs' | 'weightage' | 'toppers'>('cutoffs');

  // Find cutoff slide from chapter 2
  const cutoffSlide = chapter02_upsc.sections
    .flatMap((sec) => sec.slides)
    .find((s) => s.cutoffData);

  // Find weightage slide from chapter 2
  const weightageSlide = chapter02_upsc.sections
    .flatMap((sec) => sec.slides)
    .find((s) => s.subjectWeightageData);

  // Find topper slide from chapter 2
  const topperSlide = chapter02_upsc.sections
    .flatMap((sec) => sec.slides)
    .find((s) => s.topperData);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Historical Examination Analytics</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Cutoffs, Subject Weightages & Topper Benchmarks
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Deconstruct real score distributions, qualifying thresholds, and strategic topic weightages verified against official commission gazettes.
        </p>

        {/* Tab switchers */}
        <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
          <button
            onClick={() => setActiveSection('cutoffs')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeSection === 'cutoffs'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Cutoff Trends
          </button>
          <button
            onClick={() => setActiveSection('weightage')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeSection === 'weightage'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Prelims Subject Weightage
          </button>
          <button
            onClick={() => setActiveSection('toppers')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeSection === 'toppers'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Topper Marksheets
          </button>
        </div>
      </div>

      {/* 1. CUTOFFS TAB */}
      {activeSection === 'cutoffs' && cutoffSlide?.cutoffData && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {cutoffSlide.cutoffData.examName} - Minimum Qualifying Marks
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {cutoffSlide.cutoffData.qualifyingRuleNotice}
              </p>
            </div>
            <span className="px-3 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
              Official Commission Data
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3 sm:p-4">Exam Cycle</th>
                  <th className="p-3 sm:p-4">Exam Basis</th>
                  <th className="p-3 sm:p-4">General</th>
                  <th className="p-3 sm:p-4">EWS</th>
                  <th className="p-3 sm:p-4">OBC</th>
                  <th className="p-3 sm:p-4">SC</th>
                  <th className="p-3 sm:p-4">ST</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {cutoffSlide.cutoffData.years.map((yearData, idx) => {
                  const getCat = (catName: string) =>
                    yearData.categories.find((c) => c.category.toLowerCase().includes(catName.toLowerCase()))?.cutoff || '—';

                  return (
                    <tr key={idx} className="hover:bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">{yearData.year}</td>
                      <td className="p-3 sm:p-4 text-slate-500 text-xs">{yearData.examBasis}</td>
                      <td className="p-3 sm:p-4 font-bold text-blue-600">{getCat('General')}</td>
                      <td className="p-3 sm:p-4 font-semibold text-slate-700">{getCat('EWS')}</td>
                      <td className="p-3 sm:p-4 font-semibold text-slate-700">{getCat('OBC')}</td>
                      <td className="p-3 sm:p-4 text-slate-600">{getCat('SC')}</td>
                      <td className="p-3 sm:p-4 text-slate-600">{getCat('ST')}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
            <span className="font-bold text-slate-800 block">Strategic Insight:</span>
            <p>
              In UPSC CSE Prelims (Paper 1), qualifying cutoff has typically hovered between <strong>75.41 and 98 marks out of 200</strong> (37% to 49%). In CSAT (Paper 2), candidates only need 33% (66 marks) to qualify. The key to clearing Prelims is high accuracy rather than blind guesswork!
            </p>
          </div>
        </div>
      )}

      {/* 2. WEIGHTAGE TAB */}
      {activeSection === 'weightage' && weightageSlide?.subjectWeightageData && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8 animate-in fade-in duration-200">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              UPSC Prelims GS-1 Subject Distribution Trends
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Historical breakdown of 100 questions across Economy, Polity, History, Environment, Science & Geography.
            </p>
          </div>

          {weightageSlide.subjectWeightageData.years.map((y, yIdx) => (
            <div key={yIdx} className="space-y-3 pb-6 border-b border-slate-100 last:border-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">Year: {y.year}</span>
                <span className="text-xs font-mono text-slate-500">{y.totalQuestions} Questions</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {y.subjects.map((sub, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-xs font-semibold text-slate-700 block truncate" title={sub.subject}>
                      {sub.subject}
                    </span>
                    <div className="flex items-baseline space-x-1.5">
                      <span className="text-base font-extrabold text-blue-600">{sub.questions}</span>
                      <span className="text-[10px] text-slate-400">questions</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono block">
                      {sub.percentage} of paper
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {weightageSlide.subjectWeightageData.macroObservations && (
            <div className="p-5 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-slate-700 space-y-2">
              <span className="font-bold text-blue-900 block text-sm">Macro Observations:</span>
              <ul className="space-y-1.5 list-disc list-inside">
                {weightageSlide.subjectWeightageData.macroObservations.map((obs, oIdx) => (
                  <li key={oIdx} className="leading-relaxed">{obs}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* 3. TOPPERS TAB */}
      {activeSection === 'toppers' && topperSlide?.topperData && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8 animate-in fade-in duration-200">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              All India Rank 1 & Top Rankers Scorecard Analysis
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real marks break-up across Essay, General Studies 1-4, Optional Papers, and Interview.
            </p>
          </div>

          {topperSlide.topperData.years.map((y, yIdx) => (
            <div key={yIdx} className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                CSE {y.year} · Source: {y.officialSource}
              </span>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Rank & Name</th>
                      <th className="p-3">Essay (250)</th>
                      <th className="p-3">GS 1-4 Total (1000)</th>
                      <th className="p-3">Optional Subject</th>
                      <th className="p-3">Optional Total (500)</th>
                      <th className="p-3">Interview (275)</th>
                      <th className="p-3">Final Total (2025)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {y.candidates.map((cand, cIdx) => (
                      <tr key={cIdx} className="hover:bg-slate-50/70">
                        <td className="p-3">
                          <span className="font-bold text-slate-900 block">{cand.name}</span>
                          <span className="text-[10px] text-blue-600 font-semibold">{cand.rank}</span>
                        </td>
                        <td className="p-3 font-semibold text-slate-800">{cand.essay}</td>
                        <td className="p-3 font-semibold text-slate-800">
                          {cand.gs1 + cand.gs2 + cand.gs3 + cand.gs4}
                        </td>
                        <td className="p-3 text-slate-600">{cand.optionalSubject}</td>
                        <td className="p-3 font-bold text-emerald-600">{cand.optional1 + cand.optional2}</td>
                        <td className="p-3 font-bold text-purple-600">{cand.interview}</td>
                        <td className="p-3 font-extrabold text-blue-700 text-sm">{cand.finalTotal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {topperSlide.topperData.archetypes && (
            <div className="mt-6 pt-6 border-t border-slate-200 space-y-4">
              <h4 className="font-bold text-slate-900 text-sm">Strategic Scoring Archetypes</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topperSlide.topperData.archetypes.map((arch, aIdx) => (
                  <div key={aIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-blue-600">{arch.archetype}</span>
                    <h5 className="font-bold text-slate-900 text-sm">{arch.title}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">{arch.description}</p>
                    <div className="text-[11px] font-mono text-emerald-700 bg-emerald-50 p-2 rounded">
                      Insight: {arch.strategicInsight}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
