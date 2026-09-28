import React from 'react';
import {
  Landmark,
  Shield,
  Award,
  BookOpen,
  Scale,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface FoundationsViewProps {
  onSelectCareer: (careerId: string) => void;
}

export const FoundationsView: React.FC<FoundationsViewProps> = ({ onSelectCareer }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 mb-3">
          <Landmark className="w-3.5 h-3.5" />
          <span>Constitutional Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Articles 308 to 323: The Steel Frame of India
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Understanding Part XIV of the Constitution of India, the constitutional mandate of the Union Public Service Commission, and the classification of public services.
        </p>
      </div>

      {/* Sardar Patel's Vision */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-4">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
          Sardar Vallabhbhai Patel · Constituent Assembly (1949)
        </span>
        <blockquote className="text-lg sm:text-xl font-serif italic text-slate-200 leading-relaxed border-l-4 border-amber-400 pl-4 sm:pl-6">
          "You will not have a united India if you have not a good all-India service which has the independence to speak out its mind, which has a sense of security that you will stand by your work... That is the steel frame which will hold the Union together."
        </blockquote>
      </div>

      {/* 3 Tiers of Public Services */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          The Three Structural Tiers of Indian Bureaucracy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tier 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded text-xs font-bold bg-blue-100 text-blue-800">
                Article 312
              </span>
              <h3 className="font-bold text-slate-900 text-lg">All-India Services (AIS)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Common to both Union and States. Officers are recruited by UPSC, appointed by the President, but serve in State Cadres with central deputation rights.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Indian Administrative Service (IAS)</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Indian Police Service (IPS)</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Indian Forest Service (IFoS)</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onSelectCareer('upsc-cse')}
              className="w-full py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs transition-colors flex items-center justify-center space-x-1"
            >
              <span>Explore AIS Pathways</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Tier 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded text-xs font-bold bg-purple-100 text-purple-800">
                Union Lists & Ministries
              </span>
              <h3 className="font-bold text-slate-900 text-lg">Central Civil Services (Group A)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Serve exclusively under the Union Government. Subject to nationwide and international postings in diplomacy, taxation, audit, and central administration.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>Indian Foreign Service (IFS)</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>Indian Revenue Service (IRS IT & Customs)</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>Indian Audit & Accounts Service (IA&AS)</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onSelectCareer('ssc-cgl')}
              className="w-full py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold text-xs transition-colors flex items-center justify-center space-x-1"
            >
              <span>Explore Central Services</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Tier 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded text-xs font-bold bg-amber-100 text-amber-800">
                Article 315 & State Lists
              </span>
              <h3 className="font-bold text-slate-900 text-lg">State Civil Services (SCS)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Administered by respective State Governments. Handle grassroots sub-divisional executive magistracy, land disputes, and local development with promotion to IAS.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Karnataka Administrative Service (KAS)</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>State Police Service (DySP)</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Commercial Tax Officers / Tehsildars</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onSelectCareer('state-psc')}
              className="w-full py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 font-semibold text-xs transition-colors flex items-center justify-center space-x-1"
            >
              <span>Explore State Services</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Constitutional Safeguards (Article 311) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center space-x-2.5">
          <Shield className="w-6 h-6 text-emerald-600" />
          <h3 className="font-bold text-slate-900 text-lg">
            Article 311: Constitutional Protection & Security of Tenure
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          No civil servant can be dismissed, removed, or reduced in rank by an authority subordinate to that by which they were appointed. Moreover, no penalty can be imposed without a formal departmental inquiry where the officer is given a reasonable opportunity to defend themselves. This constitutional guarantee ensures fearlessness and institutional integrity.
        </p>
      </div>
    </div>
  );
};
