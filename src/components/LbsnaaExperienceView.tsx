import React from 'react';
import {
  Award,
  Clock,
  Compass,
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles,
  BookOpen,
  ArrowRight,
  Shield
} from 'lucide-react';
import { chapter02b_lbsnaa } from '../data/chapters/chapter02b_lbsnaa';

interface LbsnaaExperienceViewProps {
  onExploreCareers: () => void;
  onSelectCareer: (careerId: string) => void;
}

export const LbsnaaExperienceView: React.FC<LbsnaaExperienceViewProps> = ({
  onExploreCareers,
  onSelectCareer
}) => {
  // Extract schedule items from the LBSNAA chapter
  const scheduleSlide = chapter02b_lbsnaa.sections
    .flatMap((sec) => sec.slides)
    .find((s) => s.daySchedule && s.daySchedule.length > 0);

  const schedule = scheduleSlide?.daySchedule || [
    {
      timeSlot: '05:30 AM – 06:45 AM',
      period: 'Morning',
      title: 'Morning Physical Training (PT) & Equitation',
      description: 'Cross-country hill runs through Himalayan mist, calisthenics, and horse riding at Happy Valley ground.',
      badge: 'Discipline',
      coreElements: ['Hill runs', 'Horse riding', 'Drill protocol']
    },
    {
      timeSlot: '09:00 AM – 01:00 PM',
      period: 'Day',
      title: 'Academic Plenary Sessions & Constitutional Law',
      description: 'Lectures on public administration, law, economics, and case discussions led by senior secretaries and domain experts.',
      badge: 'Academics',
      coreElements: ['Constitutional Law', 'Macroeconomics', 'Public Policy']
    },
    {
      timeSlot: '01:00 PM – 02:00 PM',
      period: 'Afternoon',
      title: 'Formal Officers\' Mess Lunch',
      description: 'Lounge protocol, cross-service peer bonding across IAS, IPS, and IFS trainees under strict mess etiquette.',
      badge: 'Esprit de Corps',
      coreElements: ['Mess etiquette', 'Inter-service camaraderie']
    },
    {
      timeSlot: '05:00 PM – 07:00 PM',
      period: 'Evening',
      title: 'Sports, Clubs & Society Activities',
      description: 'Trekking club, photography, film society, debating council, and adventure expeditions.',
      badge: 'Extracurricular',
      coreElements: ['Himalayan treks', 'Fine arts', 'Debate society']
    },
    {
      timeSlot: '08:00 PM – 10:30 PM',
      period: 'Night',
      title: 'Formal Dining-In & Guest Lectures',
      description: 'Black-tie / Bandhgala formal dinners, talks by visiting dignitaries, library reading, and night study.',
      badge: 'Tradition',
      coreElements: ['Formal attire', 'Guest scholars', 'Library study']
    }
  ];

  return (
    <div className="w-full bg-slate-50 pb-20">
      {/* Hero Banner */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/lbsnaa_campus.jpg"
            alt="LBSNAA Mussoorie"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-sky-300 text-xs font-bold border border-blue-400/30 mb-6">
            <Award className="w-4 h-4 text-sky-400" />
            <span>Motto: Sheelam Param Bhushanam (Character is the Highest Virtue)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            LBSNAA Mussoorie
          </h1>
          <p className="text-base sm:text-xl text-sky-200 font-semibold mt-2">
            The Cradle of Indian Civil Servants · Happy Valley, Uttarakhand
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Perched at 6,580 feet in the Garhwal Himalayas, the Lal Bahadur Shastri National Academy of Administration transforms qualified graduates into leaders of constitutional governance.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => onSelectCareer('upsc-cse')}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-500/20 transition-all"
            >
              Explore UPSC CSE Path
            </button>
            <button
              onClick={onExploreCareers}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
            >
              All Examination Pathways
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* Core Training Phases */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              The Metamorphosis
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Phases of Officer Trainee Development
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              From the joint Foundation Course to ground-level district governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                15-Week Foundation Course
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Shared joint training for IAS, IPS, IFS, and Central Service officers. Fosters lifelong cross-service networks and mutual administrative trust.
              </p>
              <div className="pt-2 text-xs font-medium text-blue-600 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Inter-disciplinary curriculum</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Bharat Darshan & Village Visit
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                2 months of pan-India attachments: military border posts, navy warships, tribal villages, and rural panchayats to witness grassroots reality.
              </p>
              <div className="pt-2 text-xs font-medium text-amber-600 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>National experiential study</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                District Training (1 Year)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Independent administrative charge in allocated cadre state as Assistant Collector, BDO, and Sub-Divisional Magistrate handling real court cases.
              </p>
              <div className="pt-2 text-xs font-medium text-emerald-600 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Cadre state immersion</span>
              </div>
            </div>
          </div>
        </div>

        {/* 24-Hour Daily Schedule Timeline */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                A Day in the Life
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                The 24-Hour Officer Trainee Routine
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              From 05:30 AM Bugle Call to Midnight Study
            </span>
          </div>

          <div className="space-y-4">
            {schedule.map((item: any, idx: number) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:shadow-xs transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 font-bold block">
                      {item.timeSlot}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 md:justify-end shrink-0">
                  {item.coreElements &&
                    item.coreElements.map((el: string, eIdx: number) => (
                      <span
                        key={eIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-white border border-slate-200 text-slate-700"
                      >
                        {el}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traditions & Officers' Mess */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Heritage & Etiquette
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Legendary Officers' Mess & Mussoorie Traditions
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Dating back to the British Imperial Civil Service and reshaped by Sardar Vallabhbhai Patel, the academy cultivates strict decorum, secular constitutional values, intellectual fearlessness, and lifelong loyalty to the Republic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="font-bold text-white block">Sampoornanand Auditorium</span>
              <p className="text-slate-400">Hosting national leaders, Supreme Court judges, Nobel laureates, and foreign heads of state.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="font-bold text-white block">Gandhi Smriti Library</span>
              <p className="text-slate-400">Over 1,75,000 volumes on administrative law, history, political science, and regional land codes.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="font-bold text-white block">Inter-Service Sports Meet</span>
              <p className="text-slate-400">Tennis courts, Olympic gymnasium, badminton arena, and horse riding stables in Happy Valley.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
