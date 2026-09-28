import React, { useState, useEffect } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { Footer } from './components/Footer';
import { CareerExplorerHome } from './components/CareerExplorerHome';
import { CareerDetailView } from './components/CareerDetailView';
import { CareerComparator } from './components/CareerComparator';
import { CareerQuiz } from './components/CareerQuiz';
import { LbsnaaExperienceView } from './components/LbsnaaExperienceView';
import { CutoffsAnalyticsView } from './components/CutoffsAnalyticsView';
import { FoundationsView } from './components/FoundationsView';
import { SavedCareersModal } from './components/SavedCareersModal';
import { PresentationMode } from './components/PresentationMode';
import { CAREER_PROFILES } from './data/careerExplorerData';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('explore');
  const [selectedCareerId, setSelectedCareerId] = useState<string | null>(null);
  const [comparingIds, setComparingIds] = useState<string[]>(['upsc-cse', 'state-psc']);
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('upsc_saved_careers');
      return stored ? JSON.parse(stored) : ['upsc-cse'];
    } catch {
      return ['upsc-cse'];
    }
  });
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  // Sync saved to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('upsc_saved_careers', JSON.stringify(savedIds));
    } catch {
      // Ignore storage errors
    }
  }, [savedIds]);

  // URL Hash routing listener for direct shareable links (e.g. #career/upsc-cse)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) return;

      if (hash.startsWith('career/')) {
        const id = hash.replace('career/', '');
        const exists = CAREER_PROFILES.some((c) => c.id === id);
        if (exists) {
          setSelectedCareerId(id);
          setIsPresentationMode(false);
        }
      } else if (hash === 'compare') {
        setActiveTab('compare');
        setSelectedCareerId(null);
        setIsPresentationMode(false);
      } else if (hash === 'quiz') {
        setActiveTab('quiz');
        setSelectedCareerId(null);
        setIsPresentationMode(false);
      } else if (hash === 'lbsnaa') {
        setActiveTab('lbsnaa');
        setSelectedCareerId(null);
        setIsPresentationMode(false);
      } else if (hash === 'analytics') {
        setActiveTab('analytics');
        setSelectedCareerId(null);
        setIsPresentationMode(false);
      } else if (hash === 'foundations') {
        setActiveTab('foundations');
        setSelectedCareerId(null);
        setIsPresentationMode(false);
      } else if (hash === 'presentation') {
        setIsPresentationMode(true);
      } else if (hash === 'explore') {
        setActiveTab('explore');
        setSelectedCareerId(null);
        setIsPresentationMode(false);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when selecting tab or career
  const handleSelectTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    setSelectedCareerId(null);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCareer = (careerId: string) => {
    setSelectedCareerId(careerId);
    window.location.hash = `career/${careerId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToExplorer = () => {
    setSelectedCareerId(null);
    window.location.hash = activeTab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookmarkToggle = (careerId: string) => {
    setSavedIds((prev) =>
      prev.includes(careerId) ? prev.filter((id) => id !== careerId) : [...prev, careerId]
    );
  };

  const handleCompareToggle = (careerId: string) => {
    setComparingIds((prev) => {
      if (prev.includes(careerId)) {
        return prev.filter((id) => id !== careerId);
      }
      if (prev.length >= 3) {
        return [prev[1], prev[2], careerId];
      }
      return [...prev, careerId];
    });
  };

  const handleAddCareerToCompare = (careerId: string) => {
    setComparingIds((prev) => {
      if (!prev.includes(careerId) && prev.length < 3) {
        return [...prev, careerId];
      }
      return prev;
    });
  };

  const handleRemoveCareerFromCompare = (careerId: string) => {
    setComparingIds((prev) => prev.filter((id) => id !== careerId));
  };

  // If user requested Presentation / Projector mode
  if (isPresentationMode) {
    return (
      <PresentationMode
        onExit={() => {
          setIsPresentationMode(false);
          window.location.hash = activeTab;
        }}
      />
    );
  }

  const selectedCareer = CAREER_PROFILES.find((c) => c.id === selectedCareerId);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-blue-500/20 selection:text-blue-900 font-sans relative overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
        onTogglePresentationMode={() => {
          setIsPresentationMode(true);
          window.location.hash = 'presentation';
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {selectedCareer ? (
          <CareerDetailView
            career={selectedCareer}
            onBack={handleBackToExplorer}
            onCompare={handleCompareToggle}
            onBookmarkToggle={handleBookmarkToggle}
            isSaved={savedIds.includes(selectedCareer.id)}
            isComparing={comparingIds.includes(selectedCareer.id)}
            onSelectAnotherCareer={handleSelectCareer}
          />
        ) : (
          <>
            {activeTab === 'explore' && (
              <CareerExplorerHome
                onSelectCareer={handleSelectCareer}
                onCompareCareer={handleCompareToggle}
                onBookmarkToggle={handleBookmarkToggle}
                savedIds={savedIds}
                comparingIds={comparingIds}
                onStartQuiz={() => handleSelectTab('quiz')}
                onSelectTab={handleSelectTab}
              />
            )}

            {activeTab === 'compare' && (
              <CareerComparator
                comparingIds={comparingIds}
                onRemoveCareer={handleRemoveCareerFromCompare}
                onAddCareer={handleAddCareerToCompare}
                onSelectCareer={handleSelectCareer}
              />
            )}

            {activeTab === 'quiz' && (
              <CareerQuiz
                onSelectCareer={handleSelectCareer}
                onExploreAll={() => handleSelectTab('explore')}
              />
            )}

            {activeTab === 'lbsnaa' && (
              <LbsnaaExperienceView
                onExploreCareers={() => handleSelectTab('explore')}
                onSelectCareer={handleSelectCareer}
              />
            )}

            {activeTab === 'analytics' && (
              <CutoffsAnalyticsView onSelectCareer={handleSelectCareer} />
            )}

            {activeTab === 'foundations' && (
              <FoundationsView onSelectCareer={handleSelectCareer} />
            )}
          </>
        )}
      </main>

      {/* Responsive Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onSelectCareer={handleSelectCareer}
      />

      {/* Saved Bookmarks Drawer */}
      <SavedCareersModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedIds={savedIds}
        onRemoveSaved={handleBookmarkToggle}
        onSelectCareer={handleSelectCareer}
        onCompareCareers={(ids) => {
          setComparingIds(ids);
          handleSelectTab('compare');
        }}
      />
    </div>
  );
}
