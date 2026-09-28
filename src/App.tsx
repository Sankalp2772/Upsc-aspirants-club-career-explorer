import React, { useState, useEffect, useCallback } from 'react';
import {
  ALL_CHAPTERS,
  FLATTENED_SLIDES,
  getSlideAtPosition,
  getNextPosition,
  getPrevPosition,
  findPositionByChapterId,
  findPositionBySectionId
} from './data/presentationRegistry';
import { NavigationPosition } from './types/presentation';
import { PresentationHeader } from './components/PresentationHeader';
import { PresentationFooter } from './components/PresentationFooter';
import { SlideRenderer } from './components/SlideRenderer';
import { ChapterNavigatorModal } from './components/ChapterNavigatorModal';
import { LandscapeModal } from './components/LandscapeModal';

export default function App() {
  const [currentPos, setCurrentPos] = useState<NavigationPosition>({
    chapterIndex: 0,
    sectionIndex: 0,
    slideIndex: 0
  });

  const [isChapterMenuOpen, setIsChapterMenuOpen] = useState<boolean>(false);
  const [isLandscapeOpen, setIsLandscapeOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const currentEntry = getSlideAtPosition(currentPos);

  const currentFlattenedIndex = FLATTENED_SLIDES.findIndex(
    e =>
      e.chapterIndex === currentPos.chapterIndex &&
      e.sectionIndex === currentPos.sectionIndex &&
      e.slideIndex === currentPos.slideIndex
  );

  const canPrev = currentFlattenedIndex > 0;
  const canNext = currentFlattenedIndex < FLATTENED_SLIDES.length - 1;

  const handleNext = useCallback(() => {
    setCurrentPos(prev => getNextPosition(prev));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentPos(prev => getPrevPosition(prev));
  }, []);

  const handleGoHome = useCallback(() => {
    setCurrentPos({ chapterIndex: 0, sectionIndex: 0, slideIndex: 0 });
    setIsChapterMenuOpen(false);
    setIsLandscapeOpen(false);
  }, []);

  const handleJumpToChapter = useCallback((chapterId: string) => {
    const pos = findPositionByChapterId(chapterId);
    setCurrentPos(pos);
    setIsChapterMenuOpen(false);
    setIsLandscapeOpen(false);
  }, []);

  const handleJumpToSection = useCallback((chapterId: string, sectionId: string) => {
    const pos = findPositionBySectionId(chapterId, sectionId);
    setCurrentPos(pos);
    setIsChapterMenuOpen(false);
    setIsLandscapeOpen(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If an input is somehow focused, ignore
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === ' ' && !isChapterMenuOpen && !isLandscapeOpen) {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        if (isLandscapeOpen) {
          setIsLandscapeOpen(false);
        } else {
          setIsChapterMenuOpen(prev => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isChapterMenuOpen, isLandscapeOpen]);

  // Fullscreen toggle handler
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-sky-500/20 selection:text-sky-950 font-sans relative overflow-x-hidden">
      {/* Floating Dark Pill Top Bar with Breadcrumbs & Actions */}
      <PresentationHeader
        currentEntry={currentEntry}
        onGoHome={handleGoHome}
        onOpenChapterMenu={() => setIsChapterMenuOpen(true)}
        onOpenLandscape={() => setIsLandscapeOpen(true)}
        onJumpToChapter={handleJumpToChapter}
        onJumpToSection={handleJumpToSection}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* Main Presentation Stage with the Vivid Blue Silk Wave Backdrop */}
      <main className="flex-1 flex items-center justify-center relative py-4 sm:py-6 overflow-x-hidden overflow-y-auto w-full">
        {/* Subtle mesh & radiant blue ambient glows */}
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-sky-50/50 via-white to-transparent pointer-events-none" />
        
        {/* Glowing electric blue & cyan ambient orbs */}
        <div className="absolute bottom-10 -left-40 w-[600px] h-[450px] rounded-full bg-gradient-to-tr from-[#0052CC] via-[#0066FF] to-[#00D2FF] opacity-35 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 -right-40 w-[700px] h-[500px] rounded-full bg-gradient-to-tl from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] opacity-30 blur-[100px] pointer-events-none" />

        {/* 3D Fluid Silk Wave Ribbons across lower half (matching reference image) */}
        <div className="absolute bottom-0 inset-x-0 h-[480px] pointer-events-none overflow-hidden z-0">
          <svg
            className="w-full h-full object-cover opacity-90"
            viewBox="0 0 1440 480"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="waveGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.85" />
                <stop offset="45%" stopColor="#0066FF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#003D99" stopOpacity="0.98" />
              </linearGradient>
              <linearGradient id="waveGradSecondary" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#0284C7" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0369A1" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="silkHighlight" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#00C2FF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0052CC" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Back ambient wave layer */}
            <path
              d="M0 340 C 300 240, 600 400, 950 280 C 1200 200, 1380 260, 1440 280 L 1440 480 L 0 480 Z"
              fill="url(#waveGradSecondary)"
            />

            {/* Main sweeping foreground silk ribbon */}
            <path
              d="M-50 260 C 220 180, 520 340, 850 210 C 1120 110, 1350 220, 1490 190 L 1490 480 L -50 480 Z"
              fill="url(#waveGradPrimary)"
            />

            {/* Subtle illuminated crest highlight */}
            <path
              d="M-50 260 C 220 180, 520 340, 850 210 C 1120 110, 1350 220, 1490 190"
              stroke="url(#silkHighlight)"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>

        <SlideRenderer
          currentEntry={currentEntry}
          onNext={handleNext}
          onJumpToChapter={handleJumpToChapter}
          onJumpToSection={handleJumpToSection}
          onOpenLandscape={() => setIsLandscapeOpen(true)}
        />
      </main>

      {/* Persistent Progress Footer & Controls */}
      <PresentationFooter
        currentEntry={currentEntry}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenChapterMenu={() => setIsChapterMenuOpen(true)}
        canPrev={canPrev}
        canNext={canNext}
      />

      {/* Full-Screen Chapter Index Navigator */}
      <ChapterNavigatorModal
        isOpen={isChapterMenuOpen}
        onClose={() => setIsChapterMenuOpen(false)}
        currentChapterId={currentEntry.chapter.id}
        onSelectChapter={handleJumpToChapter}
        onSelectSection={handleJumpToSection}
      />

      {/* Examination Landscape Overview Modal */}
      <LandscapeModal
        isOpen={isLandscapeOpen}
        onClose={() => setIsLandscapeOpen(false)}
        onSelectChapter={handleJumpToChapter}
      />
    </div>
  );
}
