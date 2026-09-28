import { PresentationChapter } from '../../types/presentation';

export const chapter10_other: PresentationChapter = {
  id: 'other-examinations',
  chapterNumber: '11',
  title: 'Specialized Government Examinations & Synthesis',
  shortTitle: 'Specialized & Synthesis',
  description: 'Intelligence, judicial, insurance, and statutory regulatory pathways, concluding with the Aspirant’s Strategic Decision Matrix.',
  iconName: 'Compass',
  accent: '#14B8A6',
  sections: [
    {
      id: 'specialized-cadres',
      title: 'Specialized National Recruitment Gateways',
      shortName: 'Specialized Gateways',
      conductingAuthority: 'Ministry of Home Affairs, Supreme Court/High Courts, LIC & FSSAI',
      badge: 'Group A & B Specialized',
      description: 'Crucial government services operating outside standard commission frameworks.',
      slides: [
        {
          id: 'specialized-matrix',
          title: 'Specialized Government Career Gateways',
          subtitle: 'Intelligence, Judiciary, Insurance, and Food Regulation',
          kicker: 'Chapter 10 · Section 01',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'IB ACIO',
              title: 'Intelligence Bureau: ACIO Grade II / Executive',
              badge: 'Ministry of Home Affairs · Intelligence Cadre',
              description: 'Assistant Central Intelligence Officer. Gathers counter-intelligence, investigates domestic terror networks, monitors border security threats, and drafts classified briefings for the National Security Council. Tier 1 (CBT) -> Tier 2 (Descriptive English) -> Tier 3 (Interview).'
            },
            {
              stepNumber: 'Judiciary',
              title: 'State Judicial Services (Civil Judge Junior Division)',
              badge: 'High Courts & State Public Service',
              description: 'For Law graduates (LL.B). Appointed directly as Judicial Magistrates / Civil Judges. Adjudicates civil suits, criminal charges, and protects fundamental rights in district courts with independent judicial immunity.'
            },
            {
              stepNumber: 'LIC AAO',
              title: 'Life Insurance Corporation: Assistant Administrative Officer',
              badge: 'Public Sector Financial Giant',
              description: 'AAO (Generalist / IT / CA / Actuarial). Administers policy underwriting, corporate investments, and insurance claims. Offers metropolitan stability, high compensation, and balanced work life.'
            },
            {
              stepNumber: 'FSSAI',
              title: 'Food Safety and Standards Authority of India',
              badge: 'Central Food Safety & Technical Officers',
              description: 'Statutory authority under Ministry of Health. Inspects food processing manufacturing standards, imports at seaports/airports, and enforces food safety regulations.'
            }
          ]
        }
      ]
    },
    {
      id: 'synthesis-strategy',
      title: 'The Aspirant’s Strategic Decision Matrix',
      shortName: 'Strategy & Conclusion',
      conductingAuthority: 'UPSC Aspirants Club, KLE Technological University, Hubballi',
      badge: 'Closing Strategic Synthesis',
      description: 'How to choose your examination path, build syllabus synergies, and execute a disciplined multi-year preparation plan.',
      slides: [
        {
          id: 'decision-matrix',
          title: 'The Aspirant’s Decision Matrix',
          subtitle: 'Aligning your personality, educational background, and risk appetite',
          kicker: 'Strategic Guidance',
          layout: 'stages-process',
          mainProse: [
            'No government examination is intrinsically superior to another. The right examination is the one whose demands, syllabus, and eventual career realities align with your intellect and aspirations.'
          ],
          stages: [
            {
              stepNumber: 'Profile A',
              title: 'The Generalist & Policy Aspirant',
              badge: 'UPSC CSE & State PSC (KAS)',
              description: 'High reading endurance, deep interest in history, economics, polity, and social justice. Desires field executive authority, district leadership, and diverse policy impact.'
            },
            {
              stepNumber: 'Profile B',
              title: 'The Core Engineer & Technologist',
              badge: 'GATE (PSUs), ESE, ISRO, DRDO',
              description: 'Strong mathematical rigor and mastery of core engineering disciplines. Desires to design infrastructure, launch satellites, or manage heavy industrial plants.'
            },
            {
              stepNumber: 'Profile C',
              title: 'The High-Speed Analytical Mind',
              badge: 'RBI Grade B, SBI PO, SSC CGL',
              description: 'Excels at rapid objective problem solving, quantitative aptitude, financial markets, and logical reasoning under intense time pressure.'
            },
            {
              stepNumber: 'Profile D',
              title: 'The Action-Oriented Leader',
              badge: 'NDA, CDS, AFCAT, CAPF AC',
              description: 'High physical stamina, mental toughness, instinct for team camaraderie, and desire to lead troops under the national flag.'
            }
          ]
        },
        {
          id: 'closing-words',
          title: 'The Road Ahead: Discipline, Patience & Purpose',
          subtitle: 'Concluding reflections from the UPSC Aspirants Club',
          kicker: 'KLE Technological University, Hubballi',
          layout: 'editorial-concept',
          highlightQuote: 'Success in competitive examinations is not a sprint of months, but a marathon of character, consistency, and quiet conviction.',
          mainProse: [
            'Every senior officer who today signs orders shaping the lives of millions was once an anxious student standing where you stand today.',
            'They did not possess superhuman intellect. They possessed clarity of purpose, unflagging syllabus discipline, and the humility to learn from setbacks.',
            'We hope FIRST GLIMPSE has demystified the horizon for you. Choose your path with deliberation, prepare with dedication, and serve the nation with honor.'
          ],
          keyTakeaways: [
            'Clarity precedes competence: know the rules, pattern, and syllabus of your target examination before buying a single book.',
            'Build consistency over intensity: 6 hours of focused daily study for 18 months outperforms sporadic 14-hour bursts.',
            'Preserve your physical and mental well-being throughout the journey.'
          ],
          verifiedNotice: 'Created with pride by the UPSC Aspirants Club · KLE Technological University, Vidyanagar, Hubballi, Karnataka.'
        }
      ]
    }
  ]
};
