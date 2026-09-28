import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  Bookmark,
  Scale,
  ArrowRight,
  Sparkles,
  Shield,
  Award,
  Landmark,
  Building2,
  CheckCircle2,
  TrendingUp,
  X,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Banknote,
  Users
} from 'lucide-react';
import { CAREER_PROFILES, CareerProfile } from '../data/careerExplorerData';

interface CareerExplorerHomeProps {
  onSelectCareer: (careerId: string) => void;
  onCompareCareer: (careerId: string) => void;
  onBookmarkToggle: (careerId: string) => void;
  savedIds: string[];
  comparingIds: string[];
  onStartQuiz: () => void;
  onSelectTab: (tab: any) => void;
}

export const CareerExplorerHome: React.FC<CareerExplorerHomeProps> = ({
  onSelectCareer,
  onCompareCareer,
  onBookmarkToggle,
  savedIds,
  comparingIds,
  onStartQuiz,
  onSelectTab
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStream, setSelectedStream] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const streamOptions = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'any', label: 'Any Bachelor Degree' },
    { id: 'engineering', label: 'Engineering (B.E/B.Tech)' },
    { id: 'commerce', label: 'Commerce & Economics' },
    { id: 'science', label: 'Pure Science & Forestry' },
    { id: 'defence', label: 'Defence & 12th+' }
  ];

  const categoryOptions = [
    { id: 'all', label: 'All Services' },
    { id: 'all-india', label: 'All-India Cadres' },
    { id: 'central', label: 'Central Ministries' },
    { id: 'state', label: 'State PSC / KAS' },
    { id: 'banking', label: 'Banking & Regulators' },
    { id: 'technical', label: 'Engineering & Tech' },
    { id: 'defence', label: 'Armed Forces' }
  ];

  const filteredCareers = useMemo(() => {
    return CAREER_PROFILES.filter((career) => {
      // Search text match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        career.name.toLowerCase().includes(query) ||
        career.shortName.toLowerCase().includes(query) ||
        career.conductingAgency.toLowerCase().includes(query) ||
        career.tagline.toLowerCase().includes(query) ||
        career.topPosts.some((p) => p.toLowerCase().includes(query)) ||
        career.qualification.toLowerCase().includes(query);

      // Stream filter
      const matchesStream =
        selectedStream === 'all' ||
        career.stream === selectedStream ||
        (selectedStream === 'any' && (career.stream === 'any' || career.stream === 'commerce'));

      // Category filter
      const matchesCategory = selectedCategory === 'all' || career.category === selectedCategory;

      return matchesSearch && matchesStream && matchesCategory;
    });
  }, [searchQuery, selectedStream, selectedCategory]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-slate-900 to-slate-950 text-white pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8">
        {/* Glow ambient background effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sky-300 text-xs sm:text-sm font-medium mb-6">
            <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
            <span>Republic of India · Public Recruitment & Examination Architecture</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
            Discover Your Career in <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-300 to-amber-300">
              Indian Public Administration
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Curated by <strong>UPSC Aspirants Club, KLE Technological University</strong>. Explore 12+ premier civil, technical, regulatory, and defence career pathways with verified eligibility, pay scales, perks, and selection pipelines.
          </p>

          {/* Search Bar */}
          <div className="mt-8 sm:mt-10 max-w-2xl mx-auto">
            <div className="relative flex items-center bg-white rounded-2xl shadow-xl shadow-slate-950/40 p-1.5 sm:p-2 border border-slate-200">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by exam, post (e.g. IAS, SP, RBI, ASO, ESE), or stream..."
                className="w-full px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-hidden text-sm sm:text-base font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 mr-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => {}}
                className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shrink-0"
              >
                Search
              </button>
            </div>
          </div>

          {/* Quick Filters Row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <span className="text-xs text-slate-400 mr-1 font-medium hidden sm:inline">Degree:</span>
            {streamOptions.map((st) => (
              <button
                key={st.id}
                onClick={() => setSelectedStream(st.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedStream === st.id
                    ? 'bg-sky-400 text-slate-950 font-bold shadow-xs'
                    : 'bg-white/10 hover:bg-white/20 text-slate-300 border border-white/10'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>

          {/* Career Matcher CTA Pill */}
          <div className="mt-8 flex items-center justify-center">
            <button
              onClick={onStartQuiz}
              className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 hover:scale-105 transition-transform"
            >
              <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
              <span>Not sure which exam suits you? Take the 2-Minute Career Matcher Quiz →</span>
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="max-w-6xl mx-auto mt-12 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">12+</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Recruitment Systems</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">60+</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Prestigious Posts</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">Level 7 - 10+</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Starting Pay Scales</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">100%</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Official Syllabi & Cutoffs</div>
          </div>
        </div>
      </section>

      {/* Main Exploration Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Civil, Technical & Regulatory Career Pathways
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Showing {filteredCareers.length} {filteredCareers.length === 1 ? 'pathway' : 'pathways'} matching your criteria
            </p>
          </div>

          {/* Category Filter Pills (Horizontal scrollable on mobile) */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none">
            {categoryOptions.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        {filteredCareers.length === 0 ? (
          <div className="py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No careers match your search</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              Try adjusting your search keywords or resetting the stream and category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedStream('all');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-blue-50 text-blue-600 text-xs font-semibold hover:bg-blue-100 transition-colors"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {filteredCareers.map((career) => {
              const isSaved = savedIds.includes(career.id);
              const isComparing = comparingIds.includes(career.id);

              return (
                <div
                  key={career.id}
                  className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Card Top Image Thumbnail */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={career.image}
                      alt={career.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/90 backdrop-blur-md text-slate-800 shadow-xs">
                        {career.categoryLabel}
                      </span>
                    </div>

                    {/* Bookmark action on top right */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookmarkToggle(career.id);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                        isSaved
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-black/30 hover:bg-black/50 text-white/90'
                      }`}
                      title={isSaved ? 'Remove from saved' : 'Save career'}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
                    </button>

                    {/* Pay badge on bottom */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-600/90 backdrop-blur-xs flex items-center space-x-1">
                        <Banknote className="w-3 h-3" />
                        <span>{career.payLevel.split('(')[0].trim()}</span>
                      </span>
                      <span className="text-[11px] font-mono text-slate-200">
                        {career.stagesCount} Stages · {career.frequency.split('(')[0].trim()}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Agency Name */}
                      <span className="text-[11px] font-semibold text-blue-600 tracking-wider uppercase">
                        {career.conductingAgency}
                      </span>

                      {/* Title */}
                      <h3
                        onClick={() => onSelectCareer(career.id)}
                        className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer mt-0.5 leading-snug line-clamp-1"
                      >
                        {career.name}
                      </h3>

                      {/* Short name / key acronyms */}
                      <p className="text-xs font-semibold text-slate-500 tracking-wide mt-0.5">
                        {career.shortName}
                      </p>

                      {/* Tagline / Summary */}
                      <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                        {career.tagline}
                      </p>

                      {/* Top Posts Pill Chips */}
                      <div className="mt-3.5 flex flex-wrap gap-1.5">
                        {career.topPosts.slice(0, 3).map((post, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-700"
                          >
                            {post}
                          </span>
                        ))}
                        {career.topPosts.length > 3 && (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-500">
                            +{career.topPosts.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Eligibility & Attempts Quick Strip */}
                    <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Min. Qualification:</span>
                        <span className="font-medium text-slate-800 text-right truncate max-w-[170px]" title={career.qualification}>
                          {career.streamLabel}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Age Bracket:</span>
                        <span className="font-medium text-slate-800">{career.ageLimit.split('·')[0].trim()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-5 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectCareer(career.id)}
                      className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs flex items-center justify-center space-x-1.5 transition-colors"
                    >
                      <span>Explore Career Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onCompareCareer(career.id)}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center space-x-1 transition-colors ${
                        isComparing
                          ? 'bg-amber-50 border-amber-300 text-amber-800'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-100/60'
                      }`}
                      title={isComparing ? 'Currently comparing' : 'Add to comparator'}
                    >
                      <Scale className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{isComparing ? 'Comparing' : 'Compare'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Why Choose Public Service Feature Section */}
      <section className="bg-slate-50 border-y border-slate-200 py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              The Architecture of Public Administration
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Why Choose a Career in Indian Governance?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Beyond salaries and perks, public service offers sovereign constitutional authority and an unmatched canvas to impact millions of lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Constitutional Authority</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Officers exercise statutory powers directly derived from Acts of Parliament, the Code of Criminal Procedure, and State Legislatures.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Grassroots Human Impact</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct authority over district healthcare, schools, land disputes, and welfare funds, touching the lives of 2 to 3 million citizens daily.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Unmatched Tenure Security</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Protected by Article 311 of the Constitution of India. Shielded from arbitrary dismissals and guaranteed life-long medical & pension security.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">National Prestige & Perks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Heritage official residences, executive transport, domestic staff, and apex diplomatic or policy leadership at the highest tables of the Republic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LBSNAA Feature Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800">
          <div className="absolute inset-0 opacity-25">
            <img
              src="/images/lbsnaa_campus.jpg"
              alt="LBSNAA Mussoorie"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-sky-400 border border-blue-500/30">
              Lal Bahadur Shastri National Academy of Administration
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Life at Mussoorie: The Cradle of Indian Civil Servants
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Step inside the legendary campus where dreamers become officers. Explore the 15-week Foundation Course, 05:30 AM PT drills, Bharat Darshan, Village Attachments, and the prestigious Officers' Mess.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onSelectTab('lbsnaa')}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-500/20"
              >
                <span>Experience the LBSNAA Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
