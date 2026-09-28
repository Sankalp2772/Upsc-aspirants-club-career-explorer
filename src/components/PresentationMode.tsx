import React, { useState, useEffect, useCallback } from 'react';
import {
  ALL_CHAPTERS,
  FLATTENED_SLIDES,
  getSlideAtPosition,
  getNextPosition,
  getPrevPosition,
  findPositionByChapterId,
  findPositionBySectionId
} from '../data/presentationRegistry';
import { NavigationPosition } from '../types/presentation';
import { PresentationHeader } from './PresentationHeader';
import { PresentationFooter } from './PresentationFooter';
import { SlideRenderer } from './SlideRenderer';
import { ChapterNavigatorModal } from './ChapterNavigatorModal';
import { LandscapeModal } from './LandscapeModal';
import { ArrowLeft, Monitor } from 'lucide-react';

interface PresentationModeProps {
  onExit: () => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({ onExit }) => {
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
    (e) =>
      e.chapterIndex === currentPos.chapterIndex &&
      e.sectionIndex === currentPos.sectionIndex &&
      e.slideIndex === currentPos.slideIndex
  );

  const canPrev = currentFlattenedIndex > 0;
  const canNext = currentFlattenedIndex < FLATTENED_SLIDES.length - 1;

  const handleNext = useCallback(() => {
    setCurrentPos((prev) => getNextPosition(prev));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentPos((prev) => getPrevPosition(prev));
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
        } else if (isChapterMenuOpen) {
          setIsChapterMenuOpen(false);
        } else {
          onExit();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isChapterMenuOpen, isLandscapeOpen, onExit]);

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
    <div className="fixed inset-0 z-50 bg-white text-slate-900 flex flex-col justify-between selection:bg-sky-500/20 selection:text-sky-950 font-sans overflow-x-hidden overflow-y-auto">
      {/* Exit Banner on top */}
      <div className="bg-slate-900 text-white px-4 py-1.5 flex items-center justify-between text-xs z-50">
        <div className="flex items-center space-x-2">
          <Monitor className="w-3.5 h-3.5 text-sky-400" />
          <span className="font-semibold">Projector / Slide Deck Presentation Mode</span>
          <span className="text-slate-400 hidden sm:inline">(Use Arrow Keys or Spacebar to navigate)</span>
        </div>
        <button
          onClick={onExit}
          className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          <span>Exit to Website View</span>
        </button>
      </div>

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

      {/* Main Presentation Stage */}
      <main className="flex-1 flex items-center justify-center relative py-4 sm:py-6 overflow-x-hidden overflow-y-auto w-full">
        {/* Subtle mesh & radiant blue ambient glows */}
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-sky-50/50 via-white to-transparent pointer-events-none" />

        <div className="absolute bottom-10 -left-40 w-[600px] h-[450px] rounded-full bg-gradient-to-tr from-[#0052CC] via-[#0066FF] to-[#00D2FF] opacity-35 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 -right-40 w-[700px] h-[500px] rounded-full bg-gradient-to-tl from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] opacity-30 blur-[100px] pointer-events-none" />

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
};
