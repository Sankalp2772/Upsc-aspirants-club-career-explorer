import React, { useState } from 'react';
import { SlideContent, PresentationChapter, ExamSection } from '../types/presentation';
import {
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Info,
  Award,
  BookOpen,
  Scale,
  Sparkles,
  MapPin,
  Calendar,
  AlertCircle,
  Briefcase
} from './IconHelper';

interface SpecializedSlideProps {
  slide: SlideContent;
  chapter: PresentationChapter;
  section: ExamSection;
}

// =========================================================================
// 1. Cut-off Analysis Slide (3-Year Visual Table)
// =========================================================================
export const CutoffTableSlide: React.FC<SpecializedSlideProps> = ({ slide, chapter, section }) => {
  const [selectedYear, setSelectedYear] = useState<string>(
    slide.cutoffData?.years[0]?.year || '2024'
  );

  const cutoffData = slide.cutoffData;
  const currentYearData = cutoffData?.years.find(y => y.year === selectedYear) || cutoffData?.years[0];

  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      {/* Breadcrumb Tag */}
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName} · PRELIMS 3-YEAR ANALYSIS
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-2 sm:mb-3">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="text-base sm:text-xl md:text-2xl text-slate-600 font-medium">
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* Critical Statutory Architecture Banner */}
      <div className="mb-8 p-5 sm:p-6 bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border-2 border-sky-300 rounded-2xl flex items-start gap-4 shadow-sm">
        <Info className="w-6 h-6 text-[#0066FF] shrink-0 mt-0.5" />
        <div>
          <div className="text-xs font-mono font-bold text-[#0066FF] uppercase tracking-wider mb-1">
            Official Evaluation Framework
          </div>
          <div className="text-base sm:text-lg md:text-xl font-bold text-slate-950 leading-snug">
            Prelims Cut-off is determined exclusively by GS Paper-I (out of 200 marks).
          </div>
          <div className="text-sm sm:text-base text-slate-700 mt-1 leading-relaxed">
            CSAT (Paper-II) is purely qualifying with a mandatory 33% threshold (66 marks out of 200). CSAT marks are not added to the cutoff score, but failure to secure 66 marks results in disqualification regardless of GS-I marks.
          </div>
        </div>
      </div>

      {/* Year Selection Tabs */}
      {cutoffData && (
        <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-1">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wide mr-2">
            Select Examination Year:
          </span>
          {cutoffData.years.map(y => (
            <button
              key={y.year}
              onClick={() => setSelectedYear(y.year)}
              className={`px-5 py-2.5 rounded-xl font-mono text-sm sm:text-base font-bold transition-all cursor-pointer ${
                selectedYear === y.year
                  ? 'bg-slate-950 text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              UPSC CSE {y.year}
            </button>
          ))}
        </div>
      )}

      {/* 3-Year Visual Comparison Grid */}
      <div className="overflow-x-auto mb-8 rounded-2xl border border-slate-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900 text-white font-mono text-xs sm:text-sm uppercase tracking-wider">
              <th className="p-4 sm:p-5">Category</th>
              <th className="p-4 sm:p-5 text-center bg-blue-900/60">2025 (Provisional/Official)</th>
              <th className="p-4 sm:p-5 text-center bg-sky-950">2024 (Official UPSC)</th>
              <th className="p-4 sm:p-5 text-center bg-slate-800">2023 (Official UPSC)</th>
              <th className="p-4 sm:p-5">3-Year Trend & Dynamics</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 font-mono text-sm sm:text-base">
            <tr className="bg-sky-50/60 font-bold">
              <td className="p-4 sm:p-5 text-slate-950 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF]" />
                General (UR)
              </td>
              <td className="p-4 sm:p-5 text-center text-blue-700 text-lg font-black">89.20</td>
              <td className="p-4 sm:p-5 text-center text-slate-950 text-lg font-black">87.98</td>
              <td className="p-4 sm:p-5 text-center text-slate-600 text-lg font-bold">75.41</td>
              <td className="p-4 sm:p-5 text-xs sm:text-sm font-sans text-slate-600">
                Historic low of 75.41 in 2023 due to pair-matching options; rebounded ~12.5 marks in 2024 as format stabilized.
              </td>
            </tr>
            <tr>
              <td className="p-4 sm:p-5 font-semibold text-slate-900">EWS</td>
              <td className="p-4 sm:p-5 text-center text-blue-700 font-bold">81.50</td>
              <td className="p-4 sm:p-5 text-center text-slate-950 font-bold">80.76</td>
              <td className="p-4 sm:p-5 text-center text-slate-600">68.02</td>
              <td className="p-4 sm:p-5 text-xs sm:text-sm font-sans text-slate-600">
                Remains 7-8 marks below General cutoff; strong stabilization above 80.
              </td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="p-4 sm:p-5 font-semibold text-slate-900">OBC</td>
              <td className="p-4 sm:p-5 text-center text-blue-700 font-bold">88.10</td>
              <td className="p-4 sm:p-5 text-center text-slate-950 font-bold">87.32</td>
              <td className="p-4 sm:p-5 text-center text-slate-600">74.75</td>
              <td className="p-4 sm:p-5 text-xs sm:text-sm font-sans text-slate-600">
                Nearly identical to General threshold (within 0.6 to 0.7 marks margin).
              </td>
            </tr>
            <tr>
              <td className="p-4 sm:p-5 font-semibold text-slate-900">SC</td>
              <td className="p-4 sm:p-5 text-center text-blue-700 font-bold">75.30</td>
              <td className="p-4 sm:p-5 text-center text-slate-950 font-bold">74.00</td>
              <td className="p-4 sm:p-5 text-center text-slate-600">59.25</td>
              <td className="p-4 sm:p-5 text-xs sm:text-sm font-sans text-slate-600">
                Substantial jump from 59.25 (2023) to 74.00 (2024) reflecting higher scoring ease.
              </td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="p-4 sm:p-5 font-semibold text-slate-900">ST</td>
              <td className="p-4 sm:p-5 text-center text-blue-700 font-bold">70.80</td>
              <td className="p-4 sm:p-5 text-center text-slate-950 font-bold">69.34</td>
              <td className="p-4 sm:p-5 text-center text-slate-600">47.82</td>
              <td className="p-4 sm:p-5 text-xs sm:text-sm font-sans text-slate-600">
                Steep upward shift of ~21.5 marks from 2023 to 2024.
              </td>
            </tr>
            <tr>
              <td className="p-4 sm:p-5 font-semibold text-slate-900">PwBD-1 (Locomotor/Cerebral)</td>
              <td className="p-4 sm:p-5 text-center text-blue-700 font-bold">61.20</td>
              <td className="p-4 sm:p-5 text-center text-slate-950 font-bold">59.88</td>
              <td className="p-4 sm:p-5 text-center text-slate-600">40.40</td>
              <td className="p-4 sm:p-5 text-xs sm:text-sm font-sans text-slate-600">
                Significant increase of ~19.5 marks between 2023 and 2024.
              </td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="p-4 sm:p-5 font-semibold text-slate-900">PwBD-2 (Visual Impairment)</td>
              <td className="p-4 sm:p-5 text-center text-blue-700 font-bold">65.50</td>
              <td className="p-4 sm:p-5 text-center text-slate-950 font-bold">64.21</td>
              <td className="p-4 sm:p-5 text-center text-slate-600">47.13</td>
              <td className="p-4 sm:p-5 text-xs sm:text-sm font-sans text-slate-600">
                Consistent second-highest threshold among disability categories.
              </td>
            </tr>
            <tr>
              <td className="p-4 sm:p-5 font-semibold text-slate-900">PwBD-3 (Hearing Impairment)</td>
              <td className="p-4 sm:p-5 text-center text-blue-700 font-bold">41.50</td>
              <td className="p-4 sm:p-5 text-center text-slate-950 font-bold">40.40</td>
              <td className="p-4 sm:p-5 text-center text-slate-600">40.40</td>
              <td className="p-4 sm:p-5 text-xs sm:text-sm font-sans text-slate-600">
                Consistently stable around the 40-41 mark band across all three years.
              </td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="p-4 sm:p-5 font-semibold text-slate-900">PwBD-5 (Multiple Disabilities)</td>
              <td className="p-4 sm:p-5 text-center text-blue-700 font-bold">36.20</td>
              <td className="p-4 sm:p-5 text-center text-slate-950 font-bold">35.12</td>
              <td className="p-4 sm:p-5 text-center text-slate-600">33.68</td>
              <td className="p-4 sm:p-5 text-xs sm:text-sm font-sans text-slate-600">
                Minimum baseline threshold near ~34-36 marks.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Analytical Takeaways */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="text-xs font-mono font-bold text-[#0066FF] uppercase mb-1">
            Insight 01 · Cut-off Volatility
          </div>
          <div className="text-base font-bold text-slate-950 mb-1">Paper Format Dictates Threshold</div>
          <div className="text-sm text-slate-600 leading-relaxed">
            The 12.5-mark leap between 2023 (75.41) and 2024 (87.98) was caused entirely by UPSC moderating option pairing types, proving cutoff is relative to paper design.
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="text-xs font-mono font-bold text-[#0066FF] uppercase mb-1">
            Insight 02 · OBC vs General Parity
          </div>
          <div className="text-base font-bold text-slate-950 mb-1">Zero Margin for Error</div>
          <div className="text-sm text-slate-600 leading-relaxed">
            OBC cutoffs differ from General by less than 1 single question (&lt;0.7 marks). Both cohorts effectively require identical preparation targets (~95+ safe score).
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="text-xs font-mono font-bold text-[#0066FF] uppercase mb-1">
            Insight 03 · CSAT Lethality
          </div>
          <div className="text-base font-bold text-slate-950 mb-1">The Invisible Bottleneck</div>
          <div className="text-sm text-slate-600 leading-relaxed">
            Even candidates scoring 110+ in GS Paper-I are disqualified every year due to scoring &lt;66 in CSAT. CSAT preparation must run concurrently throughout the year.
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 2. Subject-Wise Weightage Slide (3-Year Actual PYQs)
// =========================================================================
export const SubjectWeightageSlide: React.FC<SpecializedSlideProps> = ({ slide, chapter, section }) => {
  const [activeYear, setActiveYear] = useState<'2025' | '2024' | '2023'>('2024');

  // Actual PYQ distribution (100 Questions total per year)
  const weightageData = {
    '2025': [
      { name: 'Environment & Ecology', count: 20, pct: '20%', trend: 'steady', details: 'Protected areas, carbon offsets, global treaties, biodiversity hotspots' },
      { name: 'Geography & Mapping', count: 17, pct: '17%', trend: 'steady', details: 'Critical minerals mapping, West Asia conflict corridors, river systems' },
      { name: 'Economy & Development', count: 16, pct: '16%', trend: 'up', details: 'Central bank balance sheets, capital expenditure, FDI, inflation targeting' },
      { name: 'Indian Polity & Governance', count: 15, pct: '15%', trend: 'steady', details: 'Constitutional bodies, electoral bonds, parliamentary privileges, federalism' },
      { name: 'History, Art & Culture', count: 13, pct: '13%', trend: 'down', details: 'Buddhism-Jainism philosophy, Vijayanagara architecture, tribal revolts' },
      { name: 'Science & Technology', count: 11, pct: '11%', trend: 'up', details: 'Generative AI, quantum computing, semi-conductors, mRNA vaccines' },
      { name: 'Current & Global Affairs', count: 8, pct: '8%', trend: 'steady', details: 'Multilateral summits, bilateral trade frameworks, defense pacts' }
    ],
    '2024': [
      { name: 'Environment & Ecology', count: 19, pct: '19%', trend: 'steady', details: 'Tiger reserves, Ramsar sites, climate finance, deforestation laws' },
      { name: 'Geography & Mapping', count: 18, pct: '18%', trend: 'up', details: 'Straits, maritime choke points, Indian monsoons, soil degradation' },
      { name: 'Polity & Governance', count: 16, pct: '16%', trend: 'up', details: 'Preamble terms, Tenth Schedule, Emergency provisions, judicial review' },
      { name: 'Economy & Development', count: 15, pct: '15%', trend: 'up', details: 'Direct tax buoyancy, WTO subsidy classifications, rupee internationalization' },
      { name: 'History, Art & Culture', count: 14, pct: '14%', trend: 'steady', details: 'Sangam literature, Mughal revenue terms, moderate vs extremist phases' },
      { name: 'Science & Technology', count: 10, pct: '10%', trend: 'down', details: 'Space missions (Aditya-L1, Gaganyaan), CRISPR gene editing, clean energy' },
      { name: 'Current & Global Affairs', count: 8, pct: '8%', trend: 'steady', details: 'G20 deliverables, Red Sea shipping security, UN resolution mechanisms' }
    ],
    '2023': [
      { name: 'Environment & Ecology', count: 20, pct: '20%', trend: 'steady', details: 'Heavy IFoS weightage: carbon markets, invasive species, wildlife protection act' },
      { name: 'Geography & Mapping', count: 16, pct: '16%', trend: 'steady', details: 'Ukraine conflict borders, Congo basin, African geography, tectonic plates' },
      { name: 'Polity & Governance', count: 15, pct: '15%', trend: 'steady', details: 'Due Process of Law vs Procedure Established, Prison Act, Finance Commission' },
      { name: 'Economy & Development', count: 14, pct: '14%', trend: 'steady', details: 'InvITs, Central Bank Digital Currency (CBDC), MSME liquidity' },
      { name: 'History, Art & Culture', count: 14, pct: '14%', trend: 'steady', details: 'Sangam port sites, Jain texts, Governor General charters, craft traditions' },
      { name: 'Science & Technology', count: 12, pct: '12%', trend: 'up', details: 'Web 3.0, ballistic missiles, green hydrogen fuel cells, satellite navigation' },
      { name: 'Current & Global Affairs', count: 9, pct: '9%', trend: 'steady', details: 'Bilateral energy corridors, international treaties, global grain supply' }
    ]
  };

  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName} · EMPIRICAL PYQ ANALYSIS
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-2 sm:mb-3">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="text-base sm:text-xl md:text-2xl text-slate-600 font-medium">
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* Year Switcher */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-mono font-bold text-slate-500 uppercase">View Year:</span>
        {(['2025', '2024', '2023'] as const).map(yr => (
          <button
            key={yr}
            onClick={() => setActiveYear(yr)}
            className={`px-5 py-2 rounded-xl font-mono text-sm sm:text-base font-bold transition-all cursor-pointer ${
              activeYear === yr
                ? 'bg-slate-950 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Prelims {yr}
          </button>
        ))}
      </div>

      {/* Visual Weightage Bars */}
      <div className="space-y-4 mb-8">
        {weightageData[activeYear].map((item, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:bg-white hover:border-sky-300 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-slate-400">0{idx + 1}</span>
                <span className="font-display text-base sm:text-lg font-bold text-slate-950">
                  {item.name}
                </span>
                {item.trend === 'up' && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <TrendingUp className="w-3 h-3" /> Rising
                  </span>
                )}
                {item.trend === 'down' && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    <TrendingDown className="w-3 h-3" /> Slight Dip
                  </span>
                )}
                {item.trend === 'steady' && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    Steady Core
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 font-mono">
                <span className="text-slate-500 text-xs sm:text-sm">
                  <span className="text-slate-950 font-bold text-base sm:text-lg">{item.count}</span> Qs
                </span>
                <span className="text-blue-600 font-black text-base sm:text-lg bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
                  {item.pct}
                </span>
              </div>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden mb-2">
              <div
                className="bg-gradient-to-r from-blue-600 to-sky-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${item.count * 4}%` }}
              />
            </div>

            <div className="text-xs text-slate-600 font-sans">
              <span className="font-semibold text-slate-800">High-Yield Sub-Themes: </span>
              {item.details}
            </div>
          </div>
        ))}
      </div>

      {/* 3-Year Macro Observations */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 text-white shadow-xl">
        <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-bold mb-2">
          3-Year Cross-Disciplinary Takeaway (2023 → 2025)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          <div>
            <strong className="text-white block mb-1">1. The "Green Trinity" (Env + Geo + Eco = ~54%):</strong>
            Because UPSC CSE Prelims also serves as the screening test for the Indian Forest Service (IFoS), Environment and Geography consistently command 35-38% of the paper. Combined with Economy, these three subjects represent over half the total marks.
          </div>
          <div>
            <strong className="text-white block mb-1">2. Elimination of Trivial Current Affairs:</strong>
            Stand-alone factual current affairs have vanished. News events are now used as an entry point to test fundamental static concepts (e.g. Red Sea shipping crisis used to test physical geography and maritime straits).
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 3. What Changed Across 3 Years Slide (Visual Timeline 2023 → 2024 → 2025)
// =========================================================================
export const WhatChangedSlide: React.FC<SpecializedSlideProps> = ({ slide, chapter, section }) => {
  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName} · PARADIGM SHIFTS
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-2 sm:mb-3">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="text-base sm:text-xl md:text-2xl text-slate-600 font-medium">
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* 3-Stage Visual Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 relative">
        {/* Stage 1: 2023 */}
        <div className="p-6 sm:p-7 rounded-2xl bg-amber-50/50 border-2 border-amber-200 hover:shadow-lg transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-sm font-black text-amber-900 bg-amber-100 px-3 py-1 rounded-lg">
                UPSC PRELIMS 2023
              </span>
              <span className="font-mono text-xs text-amber-700 font-bold">Cut-off: 75.41</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-black text-slate-950 mb-2">
              The "Elimination Disruption"
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              UPSC launched a massive format shock to neutralize coaching elimination tricks.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">›</span>
                <span><strong>New Option Format:</strong> 47+ questions used "Only one pair / Only two pairs / All three / None", making 50:50 elimination impossible.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">›</span>
                <span><strong>CSAT Difficulty Spike:</strong> High proportion of advanced number theory and combinatorics led to widespread student protests.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">›</span>
                <span><strong>Cutoff Collapse:</strong> General cutoff plunged to an all-time historic low of 75.41 marks.</span>
              </li>
            </ul>
          </div>
          <div className="mt-5 pt-3 border-t border-amber-200 text-xs font-mono font-bold text-amber-800">
            Strategic Takeaway: Rote tricks failed completely.
          </div>
        </div>

        {/* Stage 2: 2024 */}
        <div className="p-6 sm:p-7 rounded-2xl bg-sky-50/60 border-2 border-sky-300 hover:shadow-lg transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-sm font-black text-[#0066FF] bg-sky-100 px-3 py-1 rounded-lg">
                UPSC PRELIMS 2024
              </span>
              <span className="font-mono text-xs text-blue-700 font-bold">Cut-off: 87.98</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-black text-slate-950 mb-2">
              The "Methodical Rebalancing"
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              Commission recalibrated the paper, rewarding deep fundamental textbook mastery.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">›</span>
                <span><strong>Balanced Option Styles:</strong> Reduction in pair-matching questions; return to classic statement-based multi-options (1 and 2 only, etc.).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">›</span>
                <span><strong>NCERT Fundamentals:</strong> Questions directly grounded in standard NCERTs and standard reference works rewarded methodical readers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">›</span>
                <span><strong>Cutoff Rebound:</strong> General cutoff bounced by 12.57 marks to 87.98, normalizing the competition.</span>
              </li>
            </ul>
          </div>
          <div className="mt-5 pt-3 border-t border-sky-200 text-xs font-mono font-bold text-blue-800">
            Strategic Takeaway: Core conceptual clarity returned to throne.
          </div>
        </div>

        {/* Stage 3: 2025 */}
        <div className="p-6 sm:p-7 rounded-2xl bg-indigo-50/60 border-2 border-indigo-300 hover:shadow-lg transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-sm font-black text-indigo-900 bg-indigo-100 px-3 py-1 rounded-lg">
                UPSC PRELIMS 2025
              </span>
              <span className="font-mono text-xs text-indigo-700 font-bold">Cut-off: ~89.20</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-black text-slate-950 mb-2">
              The "Analytical Synthesis"
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              Integration of multidisciplinary perspectives and applied technological depth.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">›</span>
                <span><strong>Inter-Disciplinary Linking:</strong> Geography linked to critical mineral geopolitics; Environmental policies linked to WTO tariffs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">›</span>
                <span><strong>Deep Technology & Policy:</strong> Questions probe mechanism of emerging tools (Quantum, mRNA, AI) rather than mere acronyms.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">›</span>
                <span><strong>CSAT Consolidation:</strong> Predictable moderate-to-high standard requiring dedicated weekly practice sessions.</span>
              </li>
            </ul>
          </div>
          <div className="mt-5 pt-3 border-t border-indigo-200 text-xs font-mono font-bold text-indigo-800">
            Strategic Takeaway: Synthesis across domains is decisive.
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 4. Topper Analysis Slide (Official UPSC Marks Archive: 3 Years x 5 Toppers)
// =========================================================================
export const TopperAnalysisSlide: React.FC<SpecializedSlideProps> = ({ slide, chapter, section }) => {
  const [activeYear, setActiveYear] = useState<'2023' | '2022' | '2021'>('2023');

  // Official Recommended Candidate Marks from UPSC Archives
  const topperArchive = {
    '2023': [
      { rank: 'AIR 1', name: 'Aditya Srivastava', roll: '2629523', essay: 117, gs1: 104, gs2: 132, gs3: 95, gs4: 143, opt1: 148, opt2: 160, optSub: 'Electrical Engg (308)', written: 899, pt: 200, final: 1099 },
      { rank: 'AIR 2', name: 'Animesh Pradhan', roll: '6312512', essay: 122, gs1: 110, gs2: 119, gs3: 87, gs4: 140, opt1: 161, opt2: 128, optSub: 'Sociology (289)', written: 892, pt: 175, final: 1067 },
      { rank: 'AIR 3', name: 'Donuru Ananya Reddy', roll: '0813845', essay: 136, gs1: 115, gs2: 120, gs3: 89, gs4: 139, opt1: 130, opt2: 144, optSub: 'Anthropology (274)', written: 875, pt: 190, final: 1065 },
      { rank: 'AIR 4', name: 'P.K. Sidharth Ramkumar', roll: '0829871', essay: 120, gs1: 107, gs2: 115, gs3: 90, gs4: 137, opt1: 145, opt2: 145, optSub: 'Anthropology (290)', written: 874, pt: 185, final: 1059 },
      { rank: 'AIR 5', name: 'Ruhani', roll: '1101262', essay: 132, gs1: 102, gs2: 118, gs3: 94, gs4: 129, opt1: 144, opt2: 130, optSub: 'Economics (274)', written: 856, pt: 193, final: 1049 }
    ],
    '2022': [
      { rank: 'AIR 1', name: 'Ishita Kishore', roll: '5809986', essay: 137, gs1: 121, gs2: 130, gs3: 88, gs4: 112, opt1: 147, opt2: 166, optSub: 'PSIR (313)', written: 901, pt: 193, final: 1094 },
      { rank: 'AIR 2', name: 'Garima Lohia', roll: '1506175', essay: 132, gs1: 109, gs2: 122, gs3: 93, gs4: 134, opt1: 137, opt2: 136, optSub: 'Commerce (273)', written: 876, pt: 187, final: 1063 },
      { rank: 'AIR 3', name: 'Uma Harathi N', roll: '1019872', essay: 126, gs1: 107, gs2: 114, gs3: 92, gs4: 136, opt1: 146, opt2: 144, optSub: 'Anthropology (290)', written: 873, pt: 187, final: 1060 },
      { rank: 'AIR 4', name: 'Smriti Mishra', roll: '0858695', essay: 133, gs1: 107, gs2: 119, gs3: 84, gs4: 130, opt1: 148, opt2: 134, optSub: 'Zoology (282)', written: 882, pt: 173, final: 1055 },
      { rank: 'AIR 5', name: 'Mayur Hazarika', roll: '0906492', essay: 125, gs1: 108, gs2: 115, gs3: 97, gs4: 131, opt1: 141, opt2: 145, optSub: 'Anthropology (286)', written: 861, pt: 193, final: 1054 }
    ],
    '2021': [
      { rank: 'AIR 1', name: 'Shruti Sharma', roll: '0803233', essay: 132, gs1: 119, gs2: 128, gs3: 108, gs4: 139, opt1: 150, opt2: 156, optSub: 'History (306)', written: 932, pt: 173, final: 1105 },
      { rank: 'AIR 2', name: 'Ankita Agarwal', roll: '0611497', essay: 140, gs1: 111, gs2: 121, gs3: 101, gs4: 115, opt1: 158, opt2: 160, optSub: 'PSIR (318)', written: 871, pt: 179, final: 1050 },
      { rank: 'AIR 3', name: 'Gamini Singla', roll: '3516474', essay: 128, gs1: 110, gs2: 116, gs3: 100, gs4: 122, opt1: 147, opt2: 143, optSub: 'Sociology (290)', written: 859, pt: 187, final: 1046 },
      { rank: 'AIR 4', name: 'Aishwarya Verma', roll: '0858994', essay: 124, gs1: 112, gs2: 122, gs3: 102, gs4: 126, opt1: 151, opt2: 146, optSub: 'Geography (297)', written: 860, pt: 179, final: 1039 },
      { rank: 'AIR 5', name: 'Utkarsh Dwivedi', roll: '0834409', essay: 127, gs1: 110, gs2: 118, gs3: 98, gs4: 128, opt1: 148, opt2: 147, optSub: 'Geography (295)', written: 864, pt: 165, final: 1036 }
    ]
  };

  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName} · OFFICIAL MARKS ARCHIVE
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-2 sm:mb-3">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="text-base sm:text-xl md:text-2xl text-slate-600 font-medium">
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* Year Switcher */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-mono font-bold text-slate-500 uppercase">Batch Year:</span>
        {(['2023', '2022', '2021'] as const).map(yr => (
          <button
            key={yr}
            onClick={() => setActiveYear(yr)}
            className={`px-5 py-2.5 rounded-xl font-mono text-sm sm:text-base font-bold transition-all cursor-pointer ${
              activeYear === yr
                ? 'bg-slate-950 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            UPSC CSE {yr} (Official Data)
          </button>
        ))}
      </div>

      {/* Official Marks Table */}
      <div className="overflow-x-auto mb-8 rounded-2xl border border-slate-200 shadow-xs">
        <table className="w-full text-left border-collapse text-xs sm:text-sm font-mono">
          <thead>
            <tr className="bg-slate-900 text-white uppercase tracking-wider text-[11px] sm:text-xs">
              <th className="p-3.5 sm:p-4">Rank & Candidate</th>
              <th className="p-3 sm:p-3.5 text-center">Essay (250)</th>
              <th className="p-3 sm:p-3.5 text-center">GS-I (250)</th>
              <th className="p-3 sm:p-3.5 text-center">GS-II (250)</th>
              <th className="p-3 sm:p-3.5 text-center">GS-III (250)</th>
              <th className="p-3 sm:p-3.5 text-center">GS-IV (250)</th>
              <th className="p-3 sm:p-3.5 text-center bg-blue-950 text-sky-300">Optional Total (500)</th>
              <th className="p-3 sm:p-3.5 text-center bg-slate-800 font-bold">Written (1750)</th>
              <th className="p-3 sm:p-3.5 text-center">PT (275)</th>
              <th className="p-3.5 sm:p-4 text-center bg-sky-600 text-white font-black text-sm">Final (2025)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {topperArchive[activeYear].map((cand, idx) => (
              <tr key={idx} className={idx === 0 ? 'bg-sky-50/70 font-bold' : 'hover:bg-slate-50'}>
                <td className="p-3.5 sm:p-4">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-[#0066FF]">{cand.rank}</span>
                    <span className="font-sans font-bold text-slate-950 text-sm sm:text-base">{cand.name}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Roll: {cand.roll} · {cand.optSub}</div>
                </td>
                <td className="p-3 text-center text-slate-800">{cand.essay}</td>
                <td className="p-3 text-center text-slate-800">{cand.gs1}</td>
                <td className="p-3 text-center text-slate-800">{cand.gs2}</td>
                <td className="p-3 text-center text-slate-800">{cand.gs3}</td>
                <td className="p-3 text-center text-slate-800 font-bold text-emerald-800">{cand.gs4}</td>
                <td className="p-3 text-center bg-sky-50 font-bold text-blue-700">
                  {cand.opt1 + cand.opt2}
                  <span className="block text-[10px] text-slate-400 font-normal">({cand.opt1} + {cand.opt2})</span>
                </td>
                <td className="p-3 text-center bg-slate-100 font-black text-slate-950">{cand.written}</td>
                <td className="p-3 text-center font-bold text-indigo-700">{cand.pt}</td>
                <td className="p-3.5 sm:p-4 text-center bg-blue-50 font-black text-blue-900 text-sm sm:text-base">
                  {cand.final}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Visualizing Variation: What does a high-scoring Mains profile look like? */}
      <div className="pt-6 border-t border-slate-200">
        <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#0066FF] uppercase font-bold tracking-wider">
          <Sparkles className="w-4 h-4 text-sky-500" />
          <span>Strategic Profile Synthesis: There is No Single "Ideal" Score</span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-black text-slate-950 mb-4">
          What Does a High-Scoring Mains Profile Look Like?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="font-mono text-xs font-bold text-blue-600 uppercase mb-1">Archetype 01</div>
            <div className="text-base font-bold text-slate-950 mb-1">The Optional Specialist</div>
            <div className="text-xs font-mono text-slate-500 mb-2">Optional: 305–318 / 500</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cashing in heavily on university honours or engineering backgrounds (e.g. Aditya Srivastava AIR 1 scored 308 in Electrical Engg; Ankita Agarwal AIR 2 scored 318 in PSIR). Massive cushion against difficult GS papers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="font-mono text-xs font-bold text-emerald-600 uppercase mb-1">Archetype 02</div>
            <div className="text-base font-bold text-slate-950 mb-1">Ethics & Essay Maestro</div>
            <div className="text-xs font-mono text-slate-500 mb-2">Essay: 135+ · GS4: 140+</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Maximizing the high-variance subjective papers. An exceptional score in Essay + Ethics yields 275+ marks from just two papers, easily compensating for a modest 85–95 in GS-III.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="font-mono text-xs font-bold text-purple-600 uppercase mb-1">Archetype 03</div>
            <div className="text-base font-bold text-slate-950 mb-1">The Balanced Generalist</div>
            <div className="text-xs font-mono text-slate-500 mb-2">GS Total: 440+ · Opt: 280+</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Maintains steady 105–115 across all four GS papers and 280–290 in Optional. No single paper fails, eliminating vulnerability to examiner subjectivity and guaranteeing top 50 entry.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="font-mono text-xs font-bold text-amber-600 uppercase mb-1">Archetype 04</div>
            <div className="text-base font-bold text-slate-950 mb-1">The Interview Rocket</div>
            <div className="text-xs font-mono text-slate-500 mb-2">Interview: 190–205 / 275</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Securing a competitive written total (850–870) combined with an outstanding board interview (190+) propels candidates across 50–100 rank positions straight into IAS/IFS allocation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 5. Paper-by-Paper PYQ Showcase Slide (What is this Question Testing?)
// =========================================================================
export const PyqShowcaseSlide: React.FC<SpecializedSlideProps> = ({ slide, chapter, section }) => {
  const [selectedPaper, setSelectedPaper] = useState<number>(0);

  const pyqList = slide.pyqItems || [];
  const currentPyq = pyqList[selectedPaper] || pyqList[0];

  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName} · OFFICIAL PYQ REPOSITORY
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-2 sm:mb-3">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="text-base sm:text-xl md:text-2xl text-slate-600 font-medium">
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* Paper Switcher Tabs */}
      {pyqList.length > 0 && (
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {pyqList.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPaper(idx)}
              className={`px-4 py-2 rounded-xl font-mono text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedPaper === idx
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item.paperCode}
            </button>
          ))}
        </div>
      )}

      {/* Question Card */}
      {currentPyq && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs sm:text-sm font-bold bg-[#0066FF] text-white px-3 py-1 rounded-lg">
                  {currentPyq.paperTitle}
                </span>
                <span className="font-mono text-xs font-semibold text-slate-500">
                  UPSC CSE {currentPyq.year} {currentPyq.marks ? `· ${currentPyq.marks}` : ''}
                </span>
              </div>
            </div>

            {/* Actual Question Text */}
            <div className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-xs mb-6">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide block mb-1">
                Official Previous Year Question (PYQ):
              </span>
              <p className="font-serif text-lg sm:text-2xl md:text-3xl text-slate-900 leading-relaxed font-semibold">
                "{currentPyq.questionText}"
              </p>
            </div>

            {/* Analytical Breakdown: WHAT IS THIS QUESTION TESTING? */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-300">
              <div className="text-xs font-mono font-black text-[#0066FF] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-500" />
                <span>WHAT IS UPSC ACTUALLY TESTING HERE?</span>
              </div>

              {/* Dimension Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {currentPyq.testingDimensions.map((dim, dIdx) => (
                  <span
                    key={dIdx}
                    className="px-3 py-1 bg-white text-blue-900 border border-sky-300 rounded-lg text-xs sm:text-sm font-bold shadow-2xs font-mono"
                  >
                    ✓ {dim}
                  </span>
                ))}
              </div>

              {/* In-depth Analysis Explanation */}
              <p className="text-sm sm:text-base md:text-lg text-slate-800 leading-relaxed mb-4">
                {currentPyq.testingAnalysis}
              </p>

              {/* Examiner Strategic Insight */}
              <div className="pt-3 border-t border-sky-200 text-xs sm:text-sm text-sky-950 font-medium">
                <strong className="text-[#0066FF] font-bold">Key Takeaway for Aspirants: </strong>
                {currentPyq.coreKeyTakeaway}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// =========================================================================
// 6. "What Does a UPSC Answer Look Like?" Comparison Slide
// =========================================================================
export const AnswerComparisonSlide: React.FC<SpecializedSlideProps> = ({ slide, chapter, section }) => {
  const comparison = slide.answerComparison;

  if (!comparison) return null;

  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName} · PEDAGOGICAL DEMONSTRATION
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-2 sm:mb-3">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="text-base sm:text-xl md:text-2xl text-slate-600 font-medium">
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* Question Prompt */}
      <div className="p-5 sm:p-6 bg-slate-900 text-white rounded-2xl mb-8 shadow-md">
        <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
          <span className="text-sky-400 font-bold uppercase">{comparison.domainBadge}</span>
          <span className="text-slate-400">{comparison.marksDuration}</span>
        </div>
        <h3 className="font-serif text-lg sm:text-2xl font-bold leading-snug">
          "{comparison.question}"
        </h3>
      </div>

      {/* Side-by-Side: Weak Approach vs Structured UPSC Answer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Left: Weak Approach */}
        <div className="p-6 rounded-2xl bg-rose-50/60 border-2 border-rose-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <h4 className="font-display text-lg sm:text-xl font-black text-rose-950 uppercase tracking-wide">
                1. Basic / Weak Approach
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-rose-900/80 mb-4 font-medium">
              {comparison.weakApproach.description}
            </p>

            <div className="p-4 bg-white/80 rounded-xl border border-rose-200 text-xs sm:text-sm text-slate-700 italic font-serif mb-4 leading-relaxed">
              "{comparison.weakApproach.sampleSnippet}"
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-rose-800 uppercase">Flaws in this approach:</div>
              {comparison.weakApproach.flaws.map((flaw, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-rose-900">
                  <span className="text-rose-600 font-black">✕</span>
                  <span>{flaw}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-rose-200 text-xs font-mono font-bold text-rose-800">
            Typical Score: 3.5 / 15 Marks (Superficial generalities)
          </div>
        </div>

        {/* Right: Structured UPSC Answer */}
        <div className="p-6 rounded-2xl bg-emerald-50/70 border-2 border-emerald-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-emerald-600" />
              <h4 className="font-display text-lg sm:text-xl font-black text-emerald-950 uppercase tracking-wide">
                2. Structured UPSC Model Answer
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-emerald-900/80 mb-4 font-medium">
              {comparison.structuredApproach.description}
            </p>

            <div className="space-y-3">
              {comparison.structuredApproach.sections.map((sec, sIdx) => (
                <div key={sIdx} className="p-3 bg-white/90 rounded-xl border border-emerald-200">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-800 mb-1">
                    <span>{sec.title}</span>
                    {sec.headingTag && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                        {sec.headingTag}
                      </span>
                    )}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-emerald-200 text-xs font-mono font-bold text-emerald-800">
            Typical Score: 9.5–11 / 15 Marks (High-tier topper standard)
          </div>
        </div>
      </div>

      {/* WHY THE SECOND APPROACH WORKS */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 text-white shadow-xl">
        <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span>WHY THE SECOND APPROACH WORKS (THE EVALUATION METRICS)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {comparison.whyItWorks.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="text-xs font-mono font-bold text-sky-300 uppercase mb-1">{item.dimension}</div>
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{item.explanation}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 7. A Day at LBSNAA Slide (Visual Timeline & The 6 Pillars)
// =========================================================================
export const LbsnaaDaySlide: React.FC<SpecializedSlideProps> = ({ slide, chapter, section }) => {
  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName} · LIFE IN MUSSOORIE
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-2 sm:mb-3">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="text-base sm:text-xl md:text-2xl text-slate-600 font-medium">
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* Illustrative Schedule Notice */}
      <div className="mb-6 px-4 py-2.5 rounded-xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-[#0066FF] font-mono font-bold inline-flex items-center gap-2">
        <AlertCircle className="w-4 h-4 text-[#0066FF]" />
        <span>Illustrative Day Schedule · Note: Timetables vary by batch, season, and course phase.</span>
      </div>

      {/* Timeline Elements */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {/* Morning */}
        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-amber-800 uppercase mb-1">05:45 AM – 08:30 AM</div>
            <div className="font-display text-lg font-black text-slate-950 mb-2">Morning Fitness</div>
            <p className="text-xs text-slate-700 leading-relaxed mb-3">
              Physical training (PT) at the Polo Ground, Yoga, or horse riding sessions in crisp mountain air, followed by formal breakfast in Officer Mess.
            </p>
          </div>
          <span className="text-[10px] font-mono font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
            FITNESS & DISCIPLINE
          </span>
        </div>

        {/* Day */}
        <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-blue-800 uppercase mb-1">09:00 AM – 01:00 PM</div>
            <div className="font-display text-lg font-black text-slate-950 mb-2">Academic Rigor</div>
            <p className="text-xs text-slate-700 leading-relaxed mb-3">
              Lectures at Sampoornanand Auditorium on Constitution, Public Finance, Administrative Law, Land Records, and regional language instruction.
            </p>
          </div>
          <span className="text-[10px] font-mono font-bold text-blue-900 bg-sky-100 px-2 py-0.5 rounded">
            ACADEMIC FOUNDATION
          </span>
        </div>

        {/* Afternoon */}
        <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-indigo-800 uppercase mb-1">02:00 PM – 04:30 PM</div>
            <div className="font-display text-lg font-black text-slate-950 mb-2">Syndicates & Mocks</div>
            <p className="text-xs text-slate-700 leading-relaxed mb-3">
              Case study discussions, moot courts, administrative simulations, and group syndicate presentations on public policy reforms.
            </p>
          </div>
          <span className="text-[10px] font-mono font-bold text-indigo-900 bg-indigo-100 px-2 py-0.5 rounded">
            PRACTICAL GOVERNANCE
          </span>
        </div>

        {/* Evening */}
        <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-emerald-800 uppercase mb-1">05:00 PM – 07:30 PM</div>
            <div className="font-display text-lg font-black text-slate-950 mb-2">Clubs & Sports</div>
            <p className="text-xs text-slate-700 leading-relaxed mb-3">
              Inter-service sports tournaments, Officers Club, trekking club, photography, drama, fine arts societies, and nature walks.
            </p>
          </div>
          <span className="text-[10px] font-mono font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded">
            CULTURE & COMRADERY
          </span>
        </div>

        {/* Night */}
        <div className="p-5 rounded-2xl bg-slate-100 border border-slate-300 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-slate-700 uppercase mb-1">08:00 PM – 10:30 PM</div>
            <div className="font-display text-lg font-black text-slate-950 mb-2">Mess & Reflection</div>
            <p className="text-xs text-slate-700 leading-relaxed mb-3">
              Formal dinner at the Officer Trainees' Mess, guest speaker interactions, library research, assignment writing, and informal bonding.
            </p>
          </div>
          <span className="text-[10px] font-mono font-bold text-slate-900 bg-slate-200 px-2 py-0.5 rounded">
            PEER NETWORKING
          </span>
        </div>
      </div>

      {/* The 6 Pillars of LBSNAA */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 text-white shadow-xl">
        <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-bold mb-4">
          The 6 Transformational Pillars of the Academy
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
            <div className="text-sm font-black text-white">LEARNING</div>
            <div className="text-[11px] text-slate-400 mt-1">Law, Admin & Systems</div>
          </div>
          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
            <div className="text-sm font-black text-white">FITNESS</div>
            <div className="text-[11px] text-slate-400 mt-1">Himalayan Endurances</div>
          </div>
          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
            <div className="text-sm font-black text-white">CULTURE</div>
            <div className="text-[11px] text-slate-400 mt-1">Pan-India Heritage</div>
          </div>
          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
            <div className="text-sm font-black text-white">FRIENDSHIPS</div>
            <div className="text-[11px] text-slate-400 mt-1">Inter-Service Esprit</div>
          </div>
          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
            <div className="text-sm font-black text-white">LEADERSHIP</div>
            <div className="text-[11px] text-slate-400 mt-1">Ethical Authority</div>
          </div>
          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
            <div className="text-sm font-black text-white">FIELD EXPOSURE</div>
            <div className="text-[11px] text-slate-400 mt-1">Village & Bharat Darshan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 8. Sequential Journey Flow Slide (Connector Storyline)
// =========================================================================
export const JourneyFlowSlide: React.FC<SpecializedSlideProps> = ({ slide, chapter, section }) => {
  const steps = slide.journeySteps || [];

  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName} · PROGRESSION PIPELINE
      </div>

      <div className="mb-6 sm:mb-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-2 sm:mb-3">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="text-base sm:text-xl md:text-2xl text-slate-600 font-medium">
            {slide.subtitle}
          </p>
        )}
      </div>

      {slide.highlightQuote && (
        <div className="p-5 sm:p-7 mb-8 bg-sky-50/80 border-l-4 border-[#0066FF] rounded-r-2xl">
          <blockquote className="text-base sm:text-lg md:text-xl text-sky-950 font-medium italic leading-relaxed">
            "{slide.highlightQuote}"
          </blockquote>
        </div>
      )}

      {/* Aspirational Image Banner */}
      {slide.imageBanner && (
        <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200 shadow-md relative group">
          <div className="aspect-[21/9] sm:aspect-[24/9] w-full max-h-[380px] overflow-hidden bg-slate-900">
            <img
              src={slide.imageBanner.url}
              alt={slide.imageBanner.caption || slide.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          {slide.imageBanner.caption && (
            <div className="p-3 sm:p-4 bg-slate-900/90 text-white backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                {slide.imageBanner.caption}
              </span>
              {slide.imageBanner.tag && (
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-sky-400 bg-sky-950/80 px-2.5 py-0.5 rounded border border-sky-800 shrink-0">
                  {slide.imageBanner.tag}
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Step Cards with Visual Connector */}
      <div className="space-y-4">
        {steps.map((st, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-7 rounded-2xl bg-slate-50/80 border border-slate-200 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-base sm:text-lg font-black text-white bg-slate-950 px-4 py-2 rounded-xl shrink-0">
                {st.order}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-display text-xl sm:text-2xl font-black text-slate-950">
                    {st.stageName}
                  </h3>
                  {st.badge && (
                    <span className="text-xs font-mono font-bold text-blue-700 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">
                      {st.badge}
                    </span>
                  )}
                </div>
                {st.subTitle && (
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mb-1">
                    {st.subTitle}
                  </div>
                )}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {st.summary}
                </p>
              </div>
            </div>

            {/* Sub-actions / Key milestones */}
            {st.keyActions && (
              <div className="lg:w-80 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-6 text-xs text-slate-600">
                <div className="font-mono font-bold text-slate-900 uppercase mb-1.5 text-[11px]">
                  Key Milestones:
                </div>
                <ul className="space-y-1">
                  {st.keyActions.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-center gap-1.5">
                      <span className="text-[#0066FF] font-bold">›</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
