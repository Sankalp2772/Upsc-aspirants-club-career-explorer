import React, { useState } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Scale,
  Sparkles,
  Shield,
  Award,
  Landmark,
  Building2,
  CheckCircle2,
  Calendar,
  Clock,
  BookOpen,
  GraduationCap,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Info,
  Banknote,
  Users,
  MapPin,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { CareerProfile } from '../data/careerExplorerData';
import { ALL_CHAPTERS } from '../data/presentationRegistry';
import { PresentationChapter, SlideContent } from '../types/presentation';

interface CareerDetailViewProps {
  career: CareerProfile;
  onBack: () => void;
  onCompare: (careerId: string) => void;
  onBookmarkToggle: (careerId: string) => void;
  isSaved: boolean;
  isComparing: boolean;
  onSelectAnotherCareer: (careerId: string) => void;
}

export const CareerDetailView: React.FC<CareerDetailViewProps> = ({
  career,
  onBack,
  onCompare,
  onBookmarkToggle,
  isSaved,
  isComparing,
  onSelectAnotherCareer
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'eligibility' | 'stages' | 'papers' | 'cutoffs' | 'hierarchy'>('overview');

  // Match the chapter from the registry
  const chapter: PresentationChapter | undefined = ALL_CHAPTERS.find(
    (ch) => ch.id === career.chapterId
  );

  // Extract all slides from this chapter
  const allSlides: SlideContent[] = chapter
    ? chapter.sections.flatMap((sec) => sec.slides)
    : [];

  // Extract specific structured data if present
  const stageSlide = allSlides.find((s) => s.stages && s.stages.length > 0);
  const eligibilitySlide = allSlides.find((s) => s.eligibility && s.eligibility.length > 0);
  const papersSlide = allSlides.find((s) => s.papers && s.papers.length > 0);
  const cutoffSlide = allSlides.find((s) => s.cutoffData);
  const weightageSlide = allSlides.find((s) => s.subjectWeightageData);
  const topperSlide = allSlides.find((s) => s.topperData);
  const pyqSlide = allSlides.find((s) => s.pyqItems && s.pyqItems.length > 0);
  const answerSlide = allSlides.find((s) => s.answerComparison);
  const careerPathSlide = allSlides.find((s) => s.careerPaths && s.careerPaths.length > 0);

  const tabs: { id: typeof activeTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview & Perks', icon: <Landmark className="w-4 h-4" /> },
    { id: 'eligibility', label: 'Eligibility & Limits', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'stages', label: 'Exam Process', icon: <Clock className="w-4 h-4" /> },
    { id: 'papers', label: 'Papers & Pattern', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'cutoffs', label: 'Cutoffs & Trends', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'hierarchy', label: 'Career Ladder', icon: <Award className="w-4 h-4" /> }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Top Breadcrumb & Action Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 sm:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Career Explorer</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onBookmarkToggle(career.id)}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                isSaved
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'border-slate-200 hover:bg-slate-100 text-slate-700'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-blue-600 text-blue-600' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Bookmarked' : 'Save'}</span>
            </button>

            <button
              onClick={() => onCompare(career.id)}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                isComparing
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'border-slate-200 hover:bg-slate-100 text-slate-700'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isComparing ? 'Comparing' : 'Compare'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner Header */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img src={career.image} alt={career.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-md text-xs font-bold bg-blue-500/20 text-sky-400 border border-blue-400/30">
                {career.categoryLabel}
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                {career.badge}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {career.name}
            </h1>
            <p className="text-base sm:text-lg text-sky-200 font-semibold mt-1">
              {career.shortName} · {career.conductingAgency}
            </p>

            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              {career.summary}
            </p>

            {/* Quick Metadata Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/10 text-xs">
              <div className="bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                <span className="text-slate-400 block mb-0.5">Pay Scale & CTC</span>
                <span className="text-white font-bold">{career.payLevel.split('(')[0]}</span>
                <span className="text-sky-300 block text-[11px] truncate">{career.startingInHand.split('+')[0]}</span>
              </div>
              <div className="bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                <span className="text-slate-400 block mb-0.5">Eligibility</span>
                <span className="text-white font-bold">{career.streamLabel}</span>
                <span className="text-slate-300 block text-[11px]">Age: {career.ageLimit.split('·')[0]}</span>
              </div>
              <div className="bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                <span className="text-slate-400 block mb-0.5">Selection Pattern</span>
                <span className="text-white font-bold">{career.stagesCount} Stages</span>
                <span className="text-slate-300 block text-[11px]">{career.frequency.split('(')[0]}</span>
              </div>
              <div className="bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                <span className="text-slate-400 block mb-0.5">Apex Ceiling</span>
                <span className="text-amber-300 font-bold truncate block">{career.careerCeiling.split('(')[0]}</span>
                <span className="text-slate-300 block text-[11px]">National Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Tabs Navigation */}
      <div className="sticky top-[110px] sm:top-[128px] z-20 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 sm:space-x-4 overflow-x-auto scrollbar-none py-2.5">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* 1. OVERVIEW & PERKS */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Tagline Highlight Banner */}
            <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-6 sm:p-8 flex items-start space-x-4">
              <div className="p-3 bg-blue-600 text-white rounded-xl shrink-0 hidden sm:block">
                <Shield className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                  Constitutional Role & Ethos
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {career.tagline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {career.summary}
                </p>
              </div>
            </div>

            {/* Key Postings & Designations */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  Prestigious Designations & Command Postings
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {career.topPosts.map((post, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/40 hover:border-blue-200 transition-colors flex items-start space-x-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{post}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        High executive responsibility with statutory decision-making powers.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifestyle, Perks & Official Quarters */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Landmark className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-bold text-slate-900">
                    Official Quarters, Transport & State Privileges
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                  State Protocol Entitlement
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-3">
                  {career.perks.map((perk, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-medium">{perk}</span>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block">Starting In-Hand</span>
                      <span className="text-slate-900 font-bold text-sm">{career.startingInHand.split('+')[0]}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block">Housing Entitlement</span>
                      <span className="text-slate-900 font-bold text-sm">Type VI / Heritage</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200 relative group">
                  <img
                    src={career.image}
                    alt="Official Residence"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <p className="text-xs text-white font-medium">
                      Official accommodation entitlement for inducted officers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. ELIGIBILITY & LIMITS */}
        {activeTab === 'eligibility' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  Eligibility Criteria & Attempt Rules
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Educational Degree
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{career.streamLabel}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {career.qualification}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Age Limits by Category
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{career.ageLimit}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    General: 21–32 yrs · OBC: Up to 35 yrs (+3 yrs) · SC/ST: Up to 37 yrs (+5 yrs) · PwBD: Up to 42 yrs (+10 yrs).
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Number of Attempts
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{career.attempts}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An attempt is officially counted only if a candidate appears in at least one paper of the Preliminary examination.
                  </p>
                </div>
              </div>

              {/* Detailed eligibility items from chapter if available */}
              {eligibilitySlide?.eligibility && (
                <div className="mt-8 pt-6 border-t border-slate-200 space-y-3">
                  <h4 className="font-bold text-slate-900 text-sm">Official Eligibility Matrix</h4>
                  <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
                    {eligibilitySlide.eligibility.map((item, idx) => (
                      <div key={idx} className="p-4 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs gap-1">
                        <span className="font-bold text-slate-800">{item.category}</span>
                        <span className="text-slate-600 font-medium sm:text-right">{item.requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3. EXAM PROCESS & STAGES */}
        {activeTab === 'stages' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">
                    Step-by-Step Examination Stages & Timeline
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                  {career.stagesCount} Rigorous Stages
                </span>
              </div>

              {stageSlide?.stages ? (
                <div className="space-y-4">
                  {stageSlide.stages.map((st, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:shadow-xs transition-all space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex items-center space-x-3">
                          <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center">
                            {st.stepNumber}
                          </span>
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm">{st.title}</h4>
                            {st.subtitle && <p className="text-xs text-slate-500">{st.subtitle}</p>}
                          </div>
                        </div>
                        {st.badge && (
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200 shrink-0">
                            {st.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>

                      {st.details && st.details.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                          {st.details.map((d, dIdx) => (
                            <div key={dIdx} className="flex items-center space-x-1.5 text-xs text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="w-6 h-6 rounded-md bg-blue-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                    <h4 className="font-bold text-slate-900 text-sm">Preliminary Exam</h4>
                    <p className="text-xs text-slate-600">Objective MCQ screening test testing general studies, mental aptitude and core concepts.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="w-6 h-6 rounded-md bg-blue-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                    <h4 className="font-bold text-slate-900 text-sm">Mains Examination</h4>
                    <p className="text-xs text-slate-600">Descriptive written examination evaluating analytical thinking, essay formulation, and subject mastery.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="w-6 h-6 rounded-md bg-blue-600 text-white text-xs font-bold flex items-center justify-center">3</span>
                    <h4 className="font-bold text-slate-900 text-sm">Interview / Personality Test</h4>
                    <p className="text-xs text-slate-600">In-depth board interview testing integrity, mental alert, balanced judgment, and administrative leadership.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 4. PAPERS & PATTERN */}
        {activeTab === 'papers' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">
                    Examination Papers & Marks Breakdown
                  </h3>
                </div>
              </div>

              {papersSlide?.papers && papersSlide.papers.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3">Paper Name</th>
                        <th className="p-3">Evaluation Type</th>
                        <th className="p-3">Maximum Marks</th>
                        <th className="p-3">Duration</th>
                        <th className="p-3">Subject Scope</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {papersSlide.papers.map((p, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/60">
                          <td className="p-3 font-bold text-slate-900">{p.name}</td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                p.type === 'Merit'
                                  ? 'bg-blue-100 text-blue-800'
                                  : p.type === 'Qualifying'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              {p.type}
                            </span>
                          </td>
                          <td className="p-3 font-semibold text-slate-800">{p.marks}</td>
                          <td className="p-3 text-slate-600">{p.duration}</td>
                          <td className="p-3 text-slate-600 max-w-xs">{p.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-6 rounded-xl bg-slate-50 text-center text-slate-500 text-xs">
                  Detailed syllabus papers information is structured in the official notification. Check official commission portal for notifications.
                </div>
              )}
            </div>
          </div>
        )}

        {/* 5. CUTOFFS & TRENDS */}
        {activeTab === 'cutoffs' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  Cutoff Trends & Subject Scoring Dynamics
                </h3>
              </div>

              {cutoffSlide?.cutoffData ? (
                <div className="space-y-4">
                  <p className="text-xs text-slate-500">
                    Official minimum qualifying marks released by commission: {cutoffSlide.cutoffData.qualifyingRuleNotice}
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-3">Year / Exam Cycle</th>
                          <th className="p-3">Exam Basis</th>
                          <th className="p-3">General Cutoff</th>
                          <th className="p-3">OBC Cutoff</th>
                          <th className="p-3">EWS Cutoff</th>
                          <th className="p-3">SC / ST Cutoff</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {cutoffSlide.cutoffData.years.map((yr, idx) => {
                          const gen = yr.categories.find((c) => c.category === 'General');
                          const obc = yr.categories.find((c) => c.category === 'OBC');
                          const ews = yr.categories.find((c) => c.category === 'EWS');
                          const sc = yr.categories.find((c) => c.category === 'SC');

                          return (
                            <tr key={idx} className="hover:bg-slate-50/60">
                              <td className="p-3 font-bold text-slate-900">{yr.year}</td>
                              <td className="p-3 text-slate-500">{yr.examBasis}</td>
                              <td className="p-3 font-bold text-blue-700">{gen?.cutoff || '—'}</td>
                              <td className="p-3 font-semibold text-slate-700">{obc?.cutoff || '—'}</td>
                              <td className="p-3 font-semibold text-slate-700">{ews?.cutoff || '—'}</td>
                              <td className="p-3 text-slate-600">{sc?.cutoff || '—'}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-xl bg-slate-50 text-slate-600 text-xs">
                  Historical cutoff marks vary based on difficulty levels and vacancy counts. Typically, achieving 45% - 50% of total aggregate marks secures a top gazetted rank.
                </div>
              )}
            </div>
          </div>
        )}

        {/* 6. CAREER LADDER & HIERARCHY */}
        {activeTab === 'hierarchy' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">
                    Lifetime Promotion Timeline & Career Apex
                  </h3>
                </div>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Apex: {career.careerCeiling.split('(')[0]}
                </span>
              </div>

              <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8 my-4">
                <div className="relative">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-xs" />
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Years 0 - 4 (Induction & Field Charge)</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5">Junior Time Scale / Assistant Collector / Sub-Divisional Magistrate</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Foundation training at academy, followed by Sub-Divisional charge with direct magisterial and revenue adjudication authority.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-xs" />
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Years 5 - 9 (Senior Time Scale)</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5">District Magistrate & Collector / Superintendent of Police / Director</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Full executive head of a district governing 2 to 3 million citizens, controlling law and order, disaster relief, and district development.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-xs" />
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Years 14 - 20 (Selection Grade & Super Time Scale)</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5">Divisional Commissioner / Inspector General (IG) / Joint Secretary to Govt</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Command over multiple districts, or heading crucial divisions in Central Ministries (Finance, Home, Commerce, External Affairs).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 border-white shadow-xs" />
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">Years 30 - 36 (Apex Scale)</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5">{career.careerCeiling}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    The highest civil servant of the Republic, chief coordinator of Union Ministries, and ex-officio Chairman of the Civil Services Board.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
