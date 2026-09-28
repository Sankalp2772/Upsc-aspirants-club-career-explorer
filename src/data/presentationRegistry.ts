import { chapter01_foundations } from './chapters/chapter01_foundations';
import { chapter02_upsc } from './chapters/chapter02_upsc';
import { chapter02b_lbsnaa } from './chapters/chapter02b_lbsnaa';
import { chapter03_statepsc } from './chapters/chapter03_statepsc';
import { chapter04_ssc } from './chapters/chapter04_ssc';
import { chapter05_banking } from './chapters/chapter05_banking';
import { chapter06_railways } from './chapters/chapter06_railways';
import { chapter07_engineering } from './chapters/chapter07_engineering';
import { chapter08_defence } from './chapters/chapter08_defence';
import { chapter09_scitech } from './chapters/chapter09_scitech';
import { chapter10_other } from './chapters/chapter10_other';
import { chapter12_difference } from './chapters/chapter12_difference';
import { PresentationChapter, SlideContent, ExamSection, NavigationPosition } from '../types/presentation';

export const ALL_CHAPTERS: PresentationChapter[] = [
  chapter01_foundations,
  chapter02_upsc,
  chapter02b_lbsnaa,
  chapter03_statepsc,
  chapter04_ssc,
  chapter05_banking,
  chapter06_railways,
  chapter07_engineering,
  chapter08_defence,
  chapter09_scitech,
  chapter10_other,
  chapter12_difference
];

export interface FlattenedSlideEntry {
  chapter: PresentationChapter;
  section: ExamSection;
  slide: SlideContent;
  globalIndex: number;
  totalGlobalSlides: number;
  chapterIndex: number;
  sectionIndex: number;
  slideIndex: number;
  sectionSlideIndex: number;
  totalSectionSlides: number;
  chapterSlideIndex: number;
  totalChapterSlides: number;
}

export function getAllFlattenedSlides(): FlattenedSlideEntry[] {
  const result: FlattenedSlideEntry[] = [];
  let globalCount = 0;

  // Pre-calculate totals
  const totalGlobal = ALL_CHAPTERS.reduce((sum, ch) => {
    return sum + ch.sections.reduce((secSum, sec) => secSum + sec.slides.length, 0);
  }, 0);

  ALL_CHAPTERS.forEach((chapter, cIdx) => {
    const totalChapterSlides = chapter.sections.reduce((sum, sec) => sum + sec.slides.length, 0);
    let chSlideCounter = 0;

    chapter.sections.forEach((section, sIdx) => {
      const totalSectionSlides = section.slides.length;

      section.slides.forEach((slide, slIdx) => {
        result.push({
          chapter,
          section,
          slide,
          globalIndex: globalCount,
          totalGlobalSlides: totalGlobal,
          chapterIndex: cIdx,
          sectionIndex: sIdx,
          slideIndex: slIdx,
          sectionSlideIndex: slIdx + 1,
          totalSectionSlides,
          chapterSlideIndex: chSlideCounter + 1,
          totalChapterSlides
        });
        globalCount++;
        chSlideCounter++;
      });
    });
  });

  return result;
}

export const FLATTENED_SLIDES = getAllFlattenedSlides();

export function getSlideAtPosition(pos: NavigationPosition): FlattenedSlideEntry {
  const entry = FLATTENED_SLIDES.find(
    e => e.chapterIndex === pos.chapterIndex &&
         e.sectionIndex === pos.sectionIndex &&
         e.slideIndex === pos.slideIndex
  );
  return entry || FLATTENED_SLIDES[0];
}

export function getNextPosition(currentPos: NavigationPosition): NavigationPosition {
  const currentIdx = FLATTENED_SLIDES.findIndex(
    e => e.chapterIndex === currentPos.chapterIndex &&
         e.sectionIndex === currentPos.sectionIndex &&
         e.slideIndex === currentPos.slideIndex
  );

  if (currentIdx >= 0 && currentIdx < FLATTENED_SLIDES.length - 1) {
    const nextEntry = FLATTENED_SLIDES[currentIdx + 1];
    return {
      chapterIndex: nextEntry.chapterIndex,
      sectionIndex: nextEntry.sectionIndex,
      slideIndex: nextEntry.slideIndex
    };
  }

  return currentPos;
}

export function getPrevPosition(currentPos: NavigationPosition): NavigationPosition {
  const currentIdx = FLATTENED_SLIDES.findIndex(
    e => e.chapterIndex === currentPos.chapterIndex &&
         e.sectionIndex === currentPos.sectionIndex &&
         e.slideIndex === currentPos.slideIndex
  );

  if (currentIdx > 0) {
    const prevEntry = FLATTENED_SLIDES[currentIdx - 1];
    return {
      chapterIndex: prevEntry.chapterIndex,
      sectionIndex: prevEntry.sectionIndex,
      slideIndex: prevEntry.slideIndex
    };
  }

  return currentPos;
}

export function findPositionBySlideId(slideId: string): NavigationPosition | null {
  const entry = FLATTENED_SLIDES.find(e => e.slide.id === slideId);
  if (!entry) return null;
  return {
    chapterIndex: entry.chapterIndex,
    sectionIndex: entry.sectionIndex,
    slideIndex: entry.slideIndex
  };
}

export function findPositionByChapterId(chapterId: string): NavigationPosition {
  const entry = FLATTENED_SLIDES.find(e => e.chapter.id === chapterId);
  if (entry) {
    return {
      chapterIndex: entry.chapterIndex,
      sectionIndex: entry.sectionIndex,
      slideIndex: entry.slideIndex
    };
  }
  return { chapterIndex: 0, sectionIndex: 0, slideIndex: 0 };
}

export function findPositionBySectionId(chapterId: string, sectionId: string): NavigationPosition {
  const entry = FLATTENED_SLIDES.find(e => e.chapter.id === chapterId && e.section.id === sectionId);
  if (entry) {
    return {
      chapterIndex: entry.chapterIndex,
      sectionIndex: entry.sectionIndex,
      slideIndex: entry.slideIndex
    };
  }
  return findPositionByChapterId(chapterId);
}
