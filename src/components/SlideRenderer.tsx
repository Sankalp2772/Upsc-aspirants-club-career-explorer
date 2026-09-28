import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FlattenedSlideEntry } from '../data/presentationRegistry';
import {
  ChapterIcon,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Briefcase,
  Scale,
  GraduationCap,
  Layers,
  ChevronRight,
  Info
} from './IconHelper';

import {
  CutoffTableSlide,
  SubjectWeightageSlide,
  WhatChangedSlide,
  TopperAnalysisSlide,
  PyqShowcaseSlide,
  AnswerComparisonSlide,
  LbsnaaDaySlide,
  JourneyFlowSlide
} from './SpecializedSlides';

interface SlideRendererProps {
  currentEntry: FlattenedSlideEntry;
  onNext: () => void;
  onJumpToChapter: (chapterId: string) => void;
  onJumpToSection: (chapterId: string, sectionId: string) => void;
  onOpenLandscape: () => void;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  currentEntry,
  onNext,
  onJumpToChapter,
  onJumpToSection,
  onOpenLandscape
}) => {
  const { chapter, section, slide } = currentEntry;

  return (
    <div className="relative w-full min-h-[calc(100vh-140px)] flex flex-col justify-center px-2 sm:px-4 md:px-8 lg:px-12 py-4 sm:py-6 max-w-[96vw] 2xl:max-w-[1720px] mx-auto z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {/* Render layout based on slide.layout */}
          {slide.layout === 'hero' && (
            <HeroSlide
              slide={slide}
              chapter={chapter}
              onBegin={onNext}
              onOpenLandscape={onOpenLandscape}
            />
          )}

          {slide.layout === 'landscape' && (
            <LandscapeOverviewSlide
              slide={slide}
              chapter={chapter}
              section={section}
              onJumpToChapter={onJumpToChapter}
            />
          )}

          {slide.layout === 'stages-process' && (
            <StagesProcessSlide slide={slide} chapter={chapter} section={section} />
          )}

          {slide.layout === 'eligibility-grid' && (
            <EligibilityGridSlide slide={slide} chapter={chapter} section={section} />
          )}

          {slide.layout === 'papers-table' && (
            <PapersTableSlide slide={slide} chapter={chapter} section={section} />
          )}

          {slide.layout === 'career-pathway' && (
            <CareerPathwaySlide slide={slide} chapter={chapter} section={section} />
          )}

          {slide.layout === 'editorial-concept' && (
            <EditorialConceptSlide slide={slide} chapter={chapter} section={section} />
          )}

          {slide.layout === 'comparison' && (
            <ComparisonSlide slide={slide} chapter={chapter} section={section} />
          )}

          {slide.layout === 'cutoff-table' && (
            <CutoffTableSlide slide={slide} chapter={chapter} section={section} />
          )}

          {slide.layout === 'subject-weightage' && (
            <SubjectWeightageSlide slide={slide} chapter={chapter} section={section} />
          )}

          {slide.layout === 'topper-analysis' && (
            <TopperAnalysisSlide slide={slide} chapter={chapter} section={section} />
          )}

          {slide.layout === 'pyq-showcase' && (
            <PyqShowcaseSlide slide={slide} chapter={chapter} section={section} />
          )}

          {slide.layout === 'answer-comparison' && (
            <AnswerComparisonSlide slide={slide} chapter={chapter} section={section} />
          )}

          {slide.layout === 'lbsnaa-day' && (
            <LbsnaaDaySlide slide={slide} chapter={chapter} section={section} />
          )}

          {slide.layout === 'journey-flow' && (
            <JourneyFlowSlide slide={slide} chapter={chapter} section={section} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// -------------------------------------------------------------
// Layout 1: Hero Opening Slide (Projector-Grade Typography & Widescreen)
// -------------------------------------------------------------
const HeroSlide: React.FC<{
  slide: any;
  chapter: any;
  onBegin: () => void;
  onOpenLandscape: () => void;
}> = ({ slide, onBegin, onOpenLandscape }) => {
  const [activeTab, setActiveTab] = useState<'outcomes' | 'principles' | 'coverage'>('outcomes');

  return (
    <div className="flex flex-col items-center text-center max-w-6xl 2xl:max-w-7xl mx-auto py-6 sm:py-10">
      {/* Official Institutional Crest / Club Logo */}
      <div className="mb-6 flex flex-col items-center group">
        <div className="relative">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-3xl overflow-hidden p-2.5 bg-white border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(0,102,255,0.25)] group-hover:shadow-[0_25px_60px_-10px_rgba(0,102,255,0.38)] group-hover:scale-105 transition-all duration-500">
            <img
              src="/images/club_logo.jpg"
              alt="UPSC Aspirants Club · KLE Technological University"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#0066FF] to-[#00C2FF] opacity-20 blur-xl -z-10 group-hover:opacity-35 transition-opacity" />
        </div>
      </div>

      {/* Institutional Crest / Attribution */}
      <div className="inline-flex items-center gap-2.5 mb-5 px-4 sm:px-5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs sm:text-sm font-bold text-[#0066FF] shadow-xs">
        <img src="/images/club_logo.jpg" alt="Logo" className="w-5 h-5 rounded-full object-cover border border-sky-300" />
        <span className="tracking-wide">UPSC Aspirants Club · KLE Technological University, Hubballi</span>
      </div>

      {/* Main Headline - Massive, bold, projector-scale */}
      <h1 className="font-display text-5xl sm:text-7xl md:text-8xl 2xl:text-9xl font-black tracking-tight text-slate-950 text-balance mb-4 leading-none">
        FIRST GLIMPSE
      </h1>

      {/* Subtitle */}
      <p className="text-xl sm:text-3xl lg:text-4xl text-slate-700 font-semibold max-w-4xl mb-3 tracking-tight">
        Government Examinations & Careers Explorer
      </p>

      <p className="text-base sm:text-xl lg:text-2xl text-slate-500 max-w-3xl mb-10 leading-relaxed">
        From 390+ slides to clear, structured, intelligent visual insights. Explore every examination journey with absolute clarity.
      </p>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        <button
          onClick={onBegin}
          className="flex items-center gap-3 px-8 sm:px-10 py-4 text-base sm:text-lg font-bold text-white bg-[#0A0D14] hover:bg-slate-800 rounded-full shadow-xl hover:shadow-2xl active:scale-95 transition-all cursor-pointer"
        >
          <span>Begin Exploration</span>
          <ArrowRight className="w-5 h-5 text-sky-400" />
        </button>

        <button
          onClick={onOpenLandscape}
          className="px-7 sm:px-9 py-4 text-base sm:text-lg font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
        >
          Master Landscape
        </button>
      </div>

      {/* Floating White Outcome Card (Widescreen format) */}
      <div className="w-full text-left bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.22)] p-6 sm:p-10 lg:p-12 transition-all">
        {/* Card Header */}
        <div className="text-xs sm:text-sm font-mono text-[#0066FF] font-bold tracking-wider mb-2">
          # KLE TECHNOLOGICAL UNIVERSITY / CAREER GUIDANCE INITIATIVE
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-950 mb-4">
          Presentation Architecture & Strategic Clarity
        </h2>

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 mb-6 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <img src="/images/club_logo.jpg" alt="UPSC Aspirants Club" className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover shadow-xs" />
            <span className="font-bold text-slate-800">UPSC Aspirants Club</span>
          </div>
          <span>•</span>
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>Interactive Exhibition Mode</span>
          </span>
          <span>•</span>
          <span className="font-semibold text-slate-800">10 Complete Chapters</span>
          <span>•</span>
          <span className="text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full font-bold border border-emerald-200">
            ✓ Zero Exam Mixing
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('outcomes')}
            className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'outcomes'
                ? 'bg-slate-950 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
            }`}
          >
            Key Outcomes
          </button>
          <button
            onClick={() => setActiveTab('principles')}
            className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'principles'
                ? 'bg-slate-950 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
            }`}
          >
            Design Principles
          </button>
          <button
            onClick={() => setActiveTab('coverage')}
            className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'coverage'
                ? 'bg-slate-950 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
            }`}
          >
            Scope & Coverage
          </button>
        </div>

        {/* Tab Content Cards */}
        {activeTab === 'outcomes' && (
          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 bg-slate-50/70 hover:bg-white transition-all">
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-base sm:text-xl font-bold text-slate-900">
                    Demystify Indian Government Recruitment Architecture
                  </div>
                  <div className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
                    Clear demarcation of Constitutional (UPSC/State PSC), Central Executive (SSC), Monetary (RBI), and Technical Gateways.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 bg-slate-50/70 hover:bg-white transition-all">
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-base sm:text-xl font-bold text-slate-900">
                    Eliminate Aspirant Confusion Across Examinations
                  </div>
                  <div className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
                    Every examination maintains its own isolated pipeline, eligibility rules, and papers breakdown.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 bg-slate-50/70 hover:bg-white transition-all">
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-base sm:text-xl font-bold text-slate-900">
                    Actionable Decision Matrix for Students
                  </div>
                  <div className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
                    Tailored alignment based on academic background, cognitive speed, and career lifestyle objectives.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'principles' && (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50/70">
              <div className="text-base sm:text-lg font-bold text-slate-950 mb-1">1. Absolute Examination Isolation</div>
              <div className="text-sm sm:text-base text-slate-600">The presenter and audience will never wonder which commission or tier is currently displayed.</div>
            </div>
            <div className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50/70">
              <div className="text-base sm:text-lg font-bold text-slate-950 mb-1">2. Projector-Grade Typographic Scale</div>
              <div className="text-sm sm:text-base text-slate-600">High-contrast, bold hierarchy visible from the last row of any lecture auditorium.</div>
            </div>
          </div>
        )}

        {activeTab === 'coverage' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {['UPSC (CSE, IFoS, ESE)', 'State PSC (KPSC KAS)', 'SSC (CGL, CHSL, JE)', 'Banking (RBI, SBI, IBPS)', 'Railways (NTPC, ALP)', 'Defence (NDA, CDS, AFCAT)'].map((c, i) => (
              <div key={i} className="p-4 rounded-xl bg-sky-50/80 border border-sky-200 text-sky-950 font-bold text-sm sm:text-base">
                ✓ {c}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Layout 2: Landscape Overview Matrix (Widescreen & Full Coverage)
// -------------------------------------------------------------
const LandscapeOverviewSlide: React.FC<{
  slide: any;
  chapter: any;
  section: any;
  onJumpToChapter: (chapterId: string) => void;
}> = ({ slide, chapter, section, onJumpToChapter }) => {
  const families = [
    { id: 'upsc', title: 'UPSC', authority: 'Constitutional Body', desc: 'Civil Services (IAS/IPS/IFS), Forest Service, Engineering Services (ESE), Defence (CDS/NDA), CAPF.', icon: 'ShieldAlert', badge: 'Apex Union' },
    { id: 'state-psc', title: 'State PSCs (KPSC)', authority: 'State Commissions', desc: 'Karnataka Administrative Service (KAS), Deputy Collectors, DySP, Tehsildars, State Engineering.', icon: 'Building2', badge: 'State Cadres' },
    { id: 'ssc', title: 'SSC', authority: 'Staff Selection Commission', desc: 'Combined Graduate Level (CGL), CHSL (10+2), CPO Sub-Inspectors, Junior Engineers, MTS.', icon: 'Award', badge: 'Central Exec' },
    { id: 'banking-financial', title: 'Banking & Financial', authority: 'RBI, SEBI, NABARD, IBPS, SBI', desc: 'RBI Grade B Officer, SBI PO, IBPS PO & SO, SEBI Grade A, NABARD Rural Development.', icon: 'Coins', badge: 'Monetary' },
    { id: 'railways', title: 'Railways', authority: 'Railway Recruitment Boards', desc: 'RRB NTPC (Station Master), Assistant Loco Pilot (ALP), Railway Junior Engineer, IRMS.', icon: 'Train', badge: 'Infrastructure' },
    { id: 'engineering-technical', title: 'Engineering & Tech', authority: 'GATE PSUs & Technical Bodies', desc: 'Maharatna/Navratna PSUs (ONGC, IOCL, NTPC, BHEL), State AE/AEE, Patent Office (CGPDTM).', icon: 'Cpu', badge: 'PSU Gateways' },
    { id: 'defence', title: 'Defence Forces', authority: 'Armed Forces Boards & UPSC', desc: 'National Defence Academy (NDA), Combined Defence Services (CDS), AFCAT, 5-Day SSB Boards.', icon: 'Shield', badge: 'Commissioned' },
    { id: 'science-tech', title: 'Science & Technology', authority: 'ISRO, DRDO, BARC, CSIR', desc: 'Scientist/Engineer ‘SC’ (ISRO), RAC Scientist ‘B’ (DRDO), Scientific Officer C (BARC).', icon: 'Atom', badge: 'Research' },
    { id: 'other-examinations', title: 'Other Specialized', authority: 'MHA, Judiciary, LIC, FSSAI', desc: 'Intelligence Bureau (IB ACIO), State Judicial Services, LIC AAO, Food Safety Officers.', icon: 'Compass', badge: 'Specialized' }
  ];

  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      {/* Breadcrumb Tag inside card */}
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName}
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
        <div className="p-5 sm:p-6 mb-8 bg-sky-50/80 border-l-4 border-[#0066FF] rounded-r-2xl">
          <p className="text-base sm:text-lg md:text-xl text-sky-950 font-medium italic leading-relaxed">
            "{slide.highlightQuote}"
          </p>
        </div>
      )}

      {/* Interactive Family Grid across widescreen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {families.map((fam) => (
          <button
            key={fam.id}
            onClick={() => onJumpToChapter(fam.id)}
            className="group text-left p-5 sm:p-6 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-sky-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs sm:text-sm font-bold text-[#0066FF] uppercase bg-sky-50 px-3 py-1 rounded-md border border-sky-200">
                  {fam.badge}
                </span>
                <ChapterIcon name={fam.icon} className="w-5 h-5 text-slate-400 group-hover:text-[#0066FF] transition-colors" />
              </div>
              <h3 className="font-display text-lg sm:text-2xl font-black text-slate-900 group-hover:text-[#0066FF] transition-colors mb-1">
                {fam.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mb-3">
                {fam.authority}
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                {fam.desc}
              </p>
            </div>
            <div className="flex items-center text-xs sm:text-sm font-bold text-[#0066FF] gap-1.5 group-hover:translate-x-1 transition-transform pt-3 border-t border-slate-200">
              <span>Open Examination Family</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Layout 3: Stages & Process Flow (Projector-Grade Typography)
// -------------------------------------------------------------
const StagesProcessSlide: React.FC<{ slide: any; chapter: any; section: any }> = ({ slide, chapter, section }) => {
  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName}
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

      {slide.mainProse && (
        <div className="text-slate-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 space-y-3">
          {slide.mainProse.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      {/* Process Pipeline Cards */}
      <div className="space-y-4 sm:space-y-6">
        {slide.stages?.map((stage: any, index: number) => (
          <div
            key={index}
            className="p-5 sm:p-7 lg:p-8 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-8"
          >
            {/* Step Indicator */}
            <div className="flex lg:flex-col items-center lg:items-start gap-3 lg:w-44 shrink-0">
              <span className="font-mono text-sm sm:text-base md:text-lg font-black text-white bg-[#0A0D14] px-4 py-2 rounded-xl shadow-xs">
                {stage.stepNumber}
              </span>
              {stage.badge && (
                <span className="text-xs sm:text-sm text-sky-800 font-bold bg-sky-50 px-3 py-1 rounded-md border border-sky-200">
                  {stage.badge}
                </span>
              )}
            </div>

            {/* Stage Body */}
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950">
                  {stage.title}
                </h3>
                {stage.subtitle && (
                  <span className="text-sm sm:text-base md:text-lg text-slate-500 font-medium">
                    · {stage.subtitle}
                  </span>
                )}
              </div>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-4">
                {stage.description}
              </p>

              {/* Metrics Grid */}
              {stage.metrics && (
                <div className="flex flex-wrap gap-6 sm:gap-8 pt-4 border-t border-slate-200">
                  {stage.metrics.map((m: any, mIdx: number) => (
                    <div key={mIdx}>
                      <span className="text-slate-500 block text-xs sm:text-sm uppercase font-mono font-bold">{m.label}</span>
                      <span className="text-slate-950 font-mono text-lg sm:text-2xl font-black">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Layout 4: Eligibility Requirement Blocks (Widescreen 2-Column Grid)
// -------------------------------------------------------------
const EligibilityGridSlide: React.FC<{ slide: any; chapter: any; section: any }> = ({ slide, chapter, section }) => {
  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {slide.eligibility?.map((item: any, idx: number) => (
          <div
            key={idx}
            className="p-5 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0066FF]" />
                <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#0066FF] font-bold">
                  {item.category}
                </h3>
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 mb-3 leading-snug">
                {item.requirement}
              </p>
            </div>
            {item.note && (
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed border-t border-slate-200 pt-3 mt-3 font-normal">
                {item.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Layout 5: Papers Table / Examination Pattern
// -------------------------------------------------------------
const PapersTableSlide: React.FC<{ slide: any; chapter: any; section: any }> = ({ slide, chapter, section }) => {
  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName}
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

      <div className="space-y-4 sm:space-y-6">
        {slide.papers?.map((paper: any, idx: number) => (
          <div
            key={idx}
            className="p-5 sm:p-7 lg:p-8 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          >
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-black text-slate-950 text-xl sm:text-2xl lg:text-3xl">
                  {paper.name}
                </h3>
                <span
                  className={`text-xs sm:text-sm font-mono px-3 py-1 rounded-lg font-bold border ${
                    paper.type === 'Merit'
                      ? 'bg-sky-50 text-[#0066FF] border-sky-200'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {paper.type}
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mb-3">
                {paper.description}
              </p>

              {paper.subjects && (
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="text-xs sm:text-sm font-mono text-slate-500 mb-2 uppercase tracking-wide font-bold">
                    Syllabus Components:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base md:text-lg text-slate-800">
                    {paper.subjects.map((sub: string, sIdx: number) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="text-[#0066FF] font-black text-lg">›</span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex lg:flex-col items-center lg:items-end justify-between gap-4 shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 pt-3 lg:pt-0 lg:pl-8 text-sm font-mono">
              <div className="text-right">
                <span className="text-slate-400 block text-xs uppercase font-bold">Marks</span>
                <span className="text-slate-950 font-black text-2xl sm:text-3xl lg:text-4xl">{paper.marks}</span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 block text-xs uppercase font-bold">Duration</span>
                <span className="text-slate-700 font-bold text-base sm:text-xl">{paper.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Layout 6: Career Pathways & Cadres (Full Widescreen & Projector-Grade)
// -------------------------------------------------------------
const CareerPathwaySlide: React.FC<{ slide: any; chapter: any; section: any }> = ({ slide, chapter, section }) => {
  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      {/* Breadcrumb Tag */}
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName}
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

      {/* Cadres & Organizations List - Full screen wide cards with large, bold text */}
      <div className="space-y-4 sm:space-y-6">
        {slide.careerPaths?.map((path: any, idx: number) => (
          <div
            key={idx}
            className="p-5 sm:p-7 lg:p-8 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-sky-400 hover:shadow-lg transition-all"
          >
            {/* Top row: Role and Category Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2 sm:mb-3">
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-950">
                {path.role}
              </h3>
              <span className="text-xs sm:text-sm md:text-base font-mono font-bold text-[#0066FF] bg-sky-50 px-3.5 py-1.5 rounded-lg border border-sky-200">
                {path.nature}
              </span>
            </div>

            {/* Department / Ministry */}
            <div className="text-sm sm:text-base md:text-lg text-slate-500 font-medium mb-3 sm:mb-4">
              <span>Department / Ministry: </span>
              <span className="text-slate-950 font-bold">{path.department}</span>
            </div>

            {/* Role Image / Aspirational Asset */}
            {path.imageUrl && (
              <div className="mb-4 sm:mb-5 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group">
                <div className="aspect-[16/8] sm:aspect-[21/8] w-full max-h-[300px] overflow-hidden bg-slate-900">
                  <img
                    src={path.imageUrl}
                    alt={path.imageCaption || path.role}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {path.imageCaption && (
                  <div className="p-2.5 sm:p-3 bg-slate-900/90 text-white backdrop-blur-md flex items-center justify-between gap-3 text-xs">
                    <span className="text-slate-200 font-medium">{path.imageCaption}</span>
                    <span className="font-mono text-sky-400 font-bold text-[10px] bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
                      FIELD REALITY & STATURE
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Full description - Large font for projector visibility */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed mb-4 sm:mb-5 font-normal">
              {path.description}
            </p>

            {/* Promotional Hierarchy */}
            {path.hierarchy && (
              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-wider mb-2.5 font-bold">
                  Promotional Hierarchy:
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg">
                  {path.hierarchy.map((step: string, sIdx: number) => (
                    <React.Fragment key={sIdx}>
                      <span className="px-3.5 sm:px-4 py-1.5 sm:py-2 bg-white text-slate-950 border border-slate-300 rounded-xl font-bold shadow-xs">
                        {step}
                      </span>
                      {sIdx < path.hierarchy.length - 1 && (
                        <span className="text-sky-500 font-black text-lg sm:text-xl">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Layout 7: Editorial Concept (Large Projector Scale)
// -------------------------------------------------------------
const EditorialConceptSlide: React.FC<{ slide: any; chapter: any; section: any }> = ({ slide, chapter, section }) => {
  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName}
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
          <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-sky-950 font-medium italic leading-relaxed">
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

      {slide.mainProse && (
        <div className="text-slate-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4 mb-8">
          {slide.mainProse.map((paragraph: string, idx: number) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      )}

      {slide.bulletPoints && (
        <div className="space-y-3.5 mb-8">
          {slide.bulletPoints.map((bp: any, idx: number) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex items-start gap-4"
            >
              <div className="font-mono text-sm sm:text-base md:text-lg font-bold text-[#0066FF] shrink-0 pt-0.5">
                {bp.label}
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed">
                {bp.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {slide.keyTakeaways && (
        <div className="p-5 sm:p-8 rounded-2xl bg-slate-50/70 border border-slate-200/80">
          <div className="font-mono text-xs sm:text-sm text-slate-950 uppercase tracking-wider mb-4 font-bold">
            Key Strategic Takeaways
          </div>
          <ul className="space-y-3 text-sm sm:text-base md:text-lg lg:text-xl text-slate-800">
            {slide.keyTakeaways.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {slide.verifiedNotice && (
        <div className="mt-8 text-center text-xs sm:text-sm text-slate-400 font-mono">
          {slide.verifiedNotice}
        </div>
      )}
    </div>
  );
};

// -------------------------------------------------------------
// Layout 8: Comparison Slide (Widescreen 2-Column Grid)
// -------------------------------------------------------------
const ComparisonSlide: React.FC<{ slide: any; chapter: any; section: any }> = ({ slide, chapter, section }) => {
  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_25px_70px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-12 2xl:p-14">
      <div className="text-xs sm:text-sm md:text-base font-mono text-[#0066FF] font-bold tracking-wider mb-2">
        # CHAPTER {chapter.chapterNumber} / {section.shortName}
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
          <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-sky-950 font-medium italic leading-relaxed">
            "{slide.highlightQuote}"
          </blockquote>
        </div>
      )}

      {slide.bulletPoints && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {slide.bulletPoints.map((bp: any, idx: number) => (
            <div
              key={idx}
              className="p-5 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-sky-300 transition-all"
            >
              <h3 className="font-mono text-sm sm:text-base md:text-lg uppercase tracking-wider text-[#0066FF] font-black mb-2">
                {bp.label}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                {bp.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
