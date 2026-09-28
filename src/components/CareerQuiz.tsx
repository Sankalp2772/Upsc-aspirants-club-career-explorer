import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  Award,
  Shield,
  Banknote,
  GraduationCap
} from 'lucide-react';
import {
  CAREER_PROFILES,
  CareerProfile,
  QUIZ_QUESTIONS,
  QuizQuestion
} from '../data/careerExplorerData';

interface CareerQuizProps {
  onSelectCareer: (careerId: string) => void;
  onExploreAll: () => void;
}

export const CareerQuiz: React.FC<CareerQuizProps> = ({ onSelectCareer, onExploreAll }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
  };

  // Compute recommended careers
  const getRankedCareers = (): { profile: CareerProfile; score: number; percentage: number }[] => {
    const scores: Record<string, number> = {};

    CAREER_PROFILES.forEach((c) => {
      scores[c.id] = 0;
    });

    QUIZ_QUESTIONS.forEach((q) => {
      const selectedOptionIdx = selectedAnswers[q.id];
      if (selectedOptionIdx !== undefined) {
        const option = q.options[selectedOptionIdx];
        if (option && option.weightMap) {
          Object.entries(option.weightMap).forEach(([careerId, weight]) => {
            if (scores[careerId] !== undefined) {
              scores[careerId] += weight;
            }
          });
        }
      }
    });

    const maxPossibleScore = QUIZ_QUESTIONS.length * 10;

    const sorted = Object.entries(scores)
      .map(([id, score]) => {
        const profile = CAREER_PROFILES.find((c) => c.id === id)!;
        const percentage = Math.min(Math.round((score / maxPossibleScore) * 100), 99);
        return { profile, score, percentage };
      })
      .filter((item) => item.profile !== undefined)
      .sort((a, b) => b.score - a.score);

    return sorted;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Quiz Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
          <span>Interactive Career Matcher Algorithm</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Find Your Ideal Public Service Pathway
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Answer 3 intuitive questions to discover the examinations and civil services that align best with your degree, aspirations, and lifestyle priorities.
        </p>
      </div>

      {!isCompleted ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</span>
              <span>{Math.round(((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Title */}
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {currentQ.question}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {currentQ.subtitle}
            </p>
          </div>

          {/* Options Grid */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentQ.id] === idx;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 sm:p-5 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/70 shadow-xs ring-2 ring-blue-500/20'
                      : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-1 pr-3">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {option.label}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-1 ${
                      isSelected
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nav Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                currentQuestionIndex === 0
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQ.id] === undefined}
              className={`inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedAnswers[currentQ.id] === undefined
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
              }`}
            >
              <span>{currentQuestionIndex === QUIZ_QUESTIONS.length - 1 ? 'See Recommendations' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  Analysis Complete
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Your Top Recommended Career Matches
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Based on your educational degree and career aspirations, these pathways offer the highest institutional fit.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>

            {/* Top 3 Recommended Cards */}
            <div className="space-y-4">
              {getRankedCareers().slice(0, 3).map((result, idx) => (
                <div
                  key={result.profile.id}
                  className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center space-x-2.5">
                      <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                        #{idx + 1}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                        {result.percentage}% Compatibility Match
                      </span>
                      <span className="text-xs font-medium text-slate-500 hidden sm:inline">
                        {result.profile.categoryLabel}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {result.profile.name}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600 mt-0.5">
                        {result.profile.shortName} · {result.profile.conductingAgency}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {result.profile.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2 text-[11px] text-slate-500 font-medium">
                      <span className="bg-slate-200/70 px-2 py-0.5 rounded">
                        Pay: {result.profile.payLevel.split('(')[0]}
                      </span>
                      <span className="bg-slate-200/70 px-2 py-0.5 rounded">
                        Stages: {result.profile.stagesCount}
                      </span>
                      <span className="bg-slate-200/70 px-2 py-0.5 rounded">
                        Stream: {result.profile.streamLabel}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 flex sm:flex-col items-center sm:items-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                    <button
                      onClick={() => onSelectCareer(result.profile.id)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-xs flex items-center justify-center space-x-2 transition-colors"
                    >
                      <span>Explore Pathway</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 text-center">
              <button
                onClick={onExploreAll}
                className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center space-x-1"
              >
                <span>Browse all 12 examination pathways in the catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
