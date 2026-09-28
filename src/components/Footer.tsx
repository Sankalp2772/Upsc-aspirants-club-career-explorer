import React from 'react';
import { Landmark, Award, Shield, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: any) => void;
  onSelectCareer: (careerId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onSelectCareer }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 mt-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white font-serif font-bold text-lg shadow-md">
                AC
              </div>
              <div>
                <h3 className="text-white font-bold text-lg tracking-tight">CAREER EXPLORER</h3>
                <p className="text-xs text-slate-400">Government Examinations & Public Services</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An initiative by the <strong>UPSC Aspirants Club</strong> at <strong>KLE Technological University, Hubballi</strong>. Designed to empower students with structural clarity, comprehensive career pathways, and strategic insights for Indian public administration.
            </p>
            <div className="flex items-center space-x-3 text-xs text-slate-400 pt-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                <Shield className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
                Constitutional Cadres
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                <Award className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                Gazetted Services
              </span>
            </div>
          </div>

          {/* Premier Examinations */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Premier Exams
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onSelectCareer('upsc-cse')}
                  className="hover:text-white transition-colors text-left"
                >
                  UPSC Civil Services (IAS/IPS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCareer('upsc-ifos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Indian Forest Service (IFoS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCareer('state-psc')}
                  className="hover:text-white transition-colors text-left"
                >
                  State PSC (KPSC / KAS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCareer('ssc-cgl')}
                  className="hover:text-white transition-colors text-left"
                >
                  SSC CGL (ASO / GST / ITI)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCareer('banking-rbi')}
                  className="hover:text-white transition-colors text-left"
                >
                  RBI Grade B & Regulators
                </button>
              </li>
            </ul>
          </div>

          {/* Technical & Specialist */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Technical & Defence
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onSelectCareer('engineering-ese')}
                  className="hover:text-white transition-colors text-left"
                >
                  UPSC ESE / IES (Engineering)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCareer('defence-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Defence Forces (CDS / AFCAT)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCareer('scitech-isro-drdo')}
                  className="hover:text-white transition-colors text-left"
                >
                  ISRO & DRDO Scientist Cadre
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCareer('railways-irms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Indian Railways (IRMS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCareer('specialized-agencies')}
                  className="hover:text-white transition-colors text-left"
                >
                  EPFO APFC & Intelligence
                </button>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Interactive Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onSelectTab('compare')}
                  className="hover:text-white transition-colors text-left"
                >
                  Career Comparison Tool
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('quiz')}
                  className="hover:text-white transition-colors text-left"
                >
                  Career Matcher Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('lbsnaa')}
                  className="hover:text-white transition-colors text-left"
                >
                  LBSNAA Mussoorie Life
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('analytics')}
                  className="hover:text-white transition-colors text-left"
                >
                  Cutoffs & Subject Trends
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('foundations')}
                  className="hover:text-white transition-colors text-left"
                >
                  Constitutional Articles
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} UPSC Aspirants Club, KLE Technological University, Hubballi.
          </p>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center">
              Built with diligence for civil service aspirants
            </span>
            <span>·</span>
            <span>Verified against Official UPSC & Staff Selection Commission Notifications</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
