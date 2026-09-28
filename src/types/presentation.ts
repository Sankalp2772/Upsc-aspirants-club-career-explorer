export type SlideLayout =
  | 'hero'
  | 'landscape'
  | 'stages-process'
  | 'timeline'
  | 'eligibility-grid'
  | 'papers-table'
  | 'career-pathway'
  | 'editorial-concept'
  | 'comparison'
  | 'roadmap'
  | 'cutoff-table'
  | 'subject-weightage'
  | 'topper-analysis'
  | 'pyq-showcase'
  | 'answer-comparison'
  | 'lbsnaa-day'
  | 'journey-flow';

export interface StageStep {
  stepNumber: string;
  title: string;
  subtitle?: string;
  badge?: string;
  description: string;
  details?: string[];
  metrics?: { label: string; value: string }[];
}

export interface EligibilityItem {
  category: string;
  requirement: string;
  note?: string;
}

export interface ExamPaper {
  name: string;
  type: 'Qualifying' | 'Merit' | 'Screening';
  marks: string | number;
  duration: string;
  description: string;
  subjects?: string[];
}

export interface CareerPathItem {
  role: string;
  department: string;
  nature: string;
  description: string;
  hierarchy?: string[];
  imageUrl?: string;
  imageCaption?: string;
}

export interface CutoffCategoryEntry {
  category: string;
  cutoff: string | number;
  note?: string;
}

export interface CutoffYearData {
  year: string;
  examBasis: string;
  officialNotice?: string;
  categories: CutoffCategoryEntry[];
}

export interface CutoffTableData {
  examName: string;
  qualifyingRuleNotice: string;
  years: CutoffYearData[];
}

export interface SubjectWeightEntry {
  subject: string;
  questions: number;
  percentage: string;
  variation?: string;
  trend: 'up' | 'down' | 'steady';
  keyThemes?: string;
}

export interface SubjectWeightageYear {
  year: string;
  totalQuestions: number;
  subjects: SubjectWeightEntry[];
  summaryNote?: string;
}

export interface SubjectWeightageData {
  years: SubjectWeightageYear[];
  macroObservations?: string[];
}

export interface CandidateMarkRecord {
  rank: string;
  name: string;
  rollNo?: string;
  essay: number;
  gs1: number;
  gs2: number;
  gs3: number;
  gs4: number;
  optional1: number;
  optional2: number;
  optionalSubject: string;
  writtenTotal: number;
  interview: number;
  finalTotal: number;
}

export interface TopperYearData {
  year: string;
  officialSource: string;
  candidates: CandidateMarkRecord[];
}

export interface TopperProfileArchetype {
  title: string;
  archetype: string;
  description: string;
  scorePattern: string;
  strategicInsight: string;
}

export interface TopperAnalysisData {
  years: TopperYearData[];
  archetypes: TopperProfileArchetype[];
}

export interface PyqItem {
  paperTitle: string;
  paperCode: string;
  year: string;
  questionNumber?: string;
  marks?: string;
  questionText: string;
  testingDimensions: string[];
  testingAnalysis: string;
  coreKeyTakeaway: string;
}

export interface AnswerSection {
  title: string;
  headingTag?: string;
  content: string;
  annotation?: string;
}

export interface AnswerComparisonData {
  question: string;
  marksDuration: string;
  domainBadge: string;
  weakApproach: {
    title: string;
    description: string;
    flaws: string[];
    sampleSnippet: string;
  };
  structuredApproach: {
    title: string;
    description: string;
    sections: AnswerSection[];
  };
  whyItWorks: {
    dimension: string;
    explanation: string;
  }[];
}

export interface DayScheduleItem {
  timeSlot: string;
  period: 'Morning' | 'Day' | 'Afternoon' | 'Evening' | 'Night';
  title: string;
  description: string;
  badge: string;
  coreElements: string[];
}

export interface JourneyStepItem {
  order: string;
  stageName: string;
  subTitle?: string;
  badge?: string;
  summary: string;
  keyActions: string[];
  outcome: string;
}

export interface WhatChangedVisual {
  fromYear: string;
  midYear: string;
  toYear: string;
  stages: {
    year: string;
    title: string;
    subtitle: string;
    features: string[];
    impact: string;
  }[];
}

export interface SlideContent {
  id: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  layout: SlideLayout;
  highlightQuote?: string;
  mainProse?: string[];
  stages?: StageStep[];
  eligibility?: EligibilityItem[];
  papers?: ExamPaper[];
  careerPaths?: CareerPathItem[];
  keyTakeaways?: string[];
  verifiedNotice?: string;
  bulletPoints?: { label: string; text: string }[];
  accentColor?: string;
  cutoffData?: CutoffTableData;
  subjectWeightageData?: SubjectWeightageData;
  topperData?: TopperAnalysisData;
  pyqItems?: PyqItem[];
  answerComparison?: AnswerComparisonData;
  daySchedule?: DayScheduleItem[];
  journeySteps?: JourneyStepItem[];
  whatChangedVisual?: WhatChangedVisual;
  imageBanner?: {
    url: string;
    caption?: string;
    tag?: string;
  };
}

export interface ExamSection {
  id: string;
  title: string;
  shortName: string;
  conductingAuthority?: string;
  badge?: string;
  description: string;
  slides: SlideContent[];
}

export interface PresentationChapter {
  id: string;
  chapterNumber: string; // e.g. "01", "02"
  title: string;
  shortTitle: string;
  description: string;
  iconName: string;
  accent: string;
  sections: ExamSection[];
}

export interface NavigationPosition {
  chapterIndex: number;
  sectionIndex: number;
  slideIndex: number;
}
