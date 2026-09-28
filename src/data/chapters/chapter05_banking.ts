import { PresentationChapter } from '../../types/presentation';

export const chapter05_banking: PresentationChapter = {
  id: 'banking-financial',
  chapterNumber: '06',
  title: 'Banking & Financial Examinations',
  shortTitle: 'Banking & Finance',
  description: 'Gateway to the nation’s monetary authorities, regulatory bodies, and premier public sector commercial banks.',
  iconName: 'Coins',
  accent: '#10B981',
  sections: [
    {
      id: 'banking-overview',
      title: 'The Public Financial Architecture',
      shortName: 'Financial Landscape',
      conductingAuthority: 'RBI, SEBI, NABARD, IBPS & SBI',
      badge: 'Monetary & Commercial Cadres',
      description: 'Understanding the distinct tiers of the Indian financial recruitment ecosystem.',
      slides: [
        {
          id: 'financial-tiers',
          title: 'The Financial Recruitment Landscape',
          subtitle: 'From Central Banking Regulation to Commercial Credit Expansion',
          kicker: 'Chapter 05 · Section 01',
          layout: 'editorial-concept',
          highlightQuote: 'Financial sector examinations test speed, quantitative sharpness, macroeconomic comprehension, and data interpretation.',
          mainProse: [
            'India’s public banking and financial sector is among the largest in the world, combining sovereign central bank regulators with robust public commercial banks.',
            'Careers in this sector are broadly categorized into three tiers:',
            '1. Apex Regulatory Bodies (RBI Grade B, SEBI Grade A, NABARD Grade A, IRDAI, PFRDA);',
            '2. Premier Public Commercial Banks (State Bank of India - SBI PO, Specialist Officers);',
            '3. Nationalized Banking Consortium (11 Public Sector Banks recruited via IBPS PO and Specialist Officers).'
          ],
          bulletPoints: [
            { label: 'Unmatched Speed & Cadence', text: 'Banking selection operates on strict annual calendars, with the entire cycle from notification to appointment often completed within 6 to 9 months.' },
            { label: 'High Intellectual Content in Regulators', text: 'RBI and SEBI examinations demand rigorous grasp of Economics, Social Issues, Corporate Finance, Securities Law, and Management.' },
            { label: 'Commercial Banking Growth', text: 'SBI PO and IBPS PO officers manage multi-crore credit portfolios, trade finance, branch networks, and digital payments infrastructure.' }
          ]
        }
      ]
    },
    {
      id: 'rbi-grade-b',
      title: 'Reserve Bank of India: RBI Grade B',
      shortName: 'RBI Grade B Officer',
      conductingAuthority: 'Reserve Bank of India Services Board, Mumbai',
      badge: 'Apex Central Bank Career',
      description: 'The premier regulatory career in Indian macro-finance, monetary policy, and banking supervision.',
      slides: [
        {
          id: 'rbi-overview',
          title: 'RBI Grade B Officer: Profile & Authority',
          subtitle: 'Architects of Monetary Stability and Banking Supervision',
          kicker: 'RBI Grade B · Overview',
          layout: 'editorial-concept',
          highlightQuote: 'Grade B Officers at RBI directly participate in formulating monetary policy, regulating commercial banks, and managing the nation’s foreign exchange reserves.',
          mainProse: [
            'The Reserve Bank of India (RBI) conducts the Grade B (General / DEPR / DSIM) recruitment annually.',
            'As central bankers, Grade B Officers do not handle routine retail customer accounts. Instead, they work in specialized departments such as the Monetary Policy Department, Department of Banking Supervision, Financial Markets Regulation Department, and Foreign Exchange Department.',
            'It represents one of the most prestigious, intellectually stimulating, and well-compensated public careers in India.'
          ],
          keyTakeaways: [
            'Basic Starting Pay scale with generous central bank allowances and housing in major metropolitan reserve bank enclaves',
            'Direct access to macroeconomic data, currency management, and international institutions (IMF, BIS, World Bank)',
            'Clear merit-based career trajectory reaching Executive Director and Deputy Governor ranks'
          ]
        },
        {
          id: 'rbi-pattern',
          title: 'RBI Grade B Examination Pattern',
          subtitle: 'Phase I (Objective Screening), Phase II (Descriptive Written), and Interview',
          kicker: 'RBI Grade B · Pattern',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'Phase I',
              title: 'Objective Online Screening (200 Marks)',
              subtitle: '200 Questions · 120 Minutes',
              badge: 'Screening to Phase II',
              description: 'Four timed sections: General Awareness (80 Qs, 80 Marks), Reasoning (60 Qs, 60 Marks), English Language (30 Qs, 30 Marks), Quantitative Aptitude (30 Qs, 30 Marks). Both sectional and overall cutoffs must be cleared. Negative marking: 1/4th mark.'
            },
            {
              stepNumber: 'Phase II',
              title: 'Descriptive & Objective Written (300 Marks)',
              subtitle: 'Three Dedicated Specialized Papers',
              badge: 'Determines Interview Call',
              description: 'Paper 1: Economic & Social Issues (ESI - 50% Objective, 50% Descriptive, 100 Marks). Paper 2: English Writing Skills (Descriptive, 100 Marks). Paper 3: Finance and Management (FM - 50% Objective, 50% Descriptive, 100 Marks).'
            },
            {
              stepNumber: 'Phase III',
              title: 'Personality Interview (75 Marks)',
              subtitle: 'Board at RBI Services Board',
              badge: 'Final Selection (375 Marks)',
              description: 'Interview assessing economic acumen, banking awareness, leadership aptitude, and analytical depth. Final merit calculated out of 375 marks (300 Phase II + 75 Interview).'
            }
          ]
        },
        {
          id: 'rbi-eligibility',
          title: 'RBI Grade B Eligibility Norms',
          subtitle: 'Academic criteria and strict attempt limits',
          kicker: 'RBI Grade B · Eligibility',
          layout: 'eligibility-grid',
          eligibility: [
            {
              category: 'Educational Qualification',
              requirement: 'Minimum 60% Marks in Graduation (50% for SC/ST/PwBD)',
              note: 'Or minimum 55% marks in Post-Graduation in any discipline from a recognized University or equivalent technical/professional degree.'
            },
            {
              category: 'Age Bracket (as of cut-off date)',
              requirement: '21 to 30 Years (General)',
              note: 'Up to 32 years for candidates holding M.Phil / Ph.D qualifications. Standard relaxations for OBC (33 yrs), SC/ST (35 yrs).'
            },
            {
              category: 'Number of Attempts',
              requirement: 'General Category: Maximum 6 Attempts in Phase I',
              note: 'No attempt restriction applies to candidates belonging to SC / ST / OBC / PwBD / EWS categories.'
            }
          ]
        }
      ]
    },
    {
      id: 'sbi-ibps-po',
      title: 'Commercial Banking: SBI PO & IBPS PO',
      shortName: 'SBI PO & IBPS PO',
      conductingAuthority: 'State Bank of India & Institute of Banking Personnel Selection',
      badge: 'Public Sector Commercial Banking',
      description: 'Probationary Officers driving credit growth, branch operations, and commercial treasury.',
      slides: [
        {
          id: 'sbi-ibps-overview',
          title: 'Probationary Officers: SBI PO vs IBPS PO',
          subtitle: 'The premier entry points to commercial banking leadership',
          kicker: 'Commercial Banking · Overview',
          layout: 'editorial-concept',
          highlightQuote: 'A Probationary Officer starts as an all-round trainee and can rise to become the Chairman or Managing Director of a Fortune 500 bank.',
          mainProse: [
            'State Bank of India (SBI) recruits Probationary Officers independently, offering the most prestigious commercial banking profile in India with specialized global treasury and corporate accounts.',
            'The Institute of Banking Personnel Selection (IBPS) conducts a unified recruitment process for 11 nationalized public sector banks (including Punjab National Bank, Bank of Baroda, Canara Bank, Union Bank of India, Indian Bank, and others).',
            'Both examinations follow a rapid three-stage sequence: Prelims (Objective), Mains (Objective + Descriptive), and Group Discussion / Interview.'
          ],
          bulletPoints: [
            { label: 'Syllabus Focus', text: 'High-speed Quantitative Aptitude (Data Analysis & Interpretation), Reasoning (Puzzles & Seating Arrangements), English, and General/Banking Awareness.' },
            { label: 'Rapid Promotions', text: 'Fast-track promotion channels enable POs to become Scale II (Manager) in 3 years, Scale III (Senior Manager) in 5-6 years, and Assistant General Manager within 12 years.' },
            { label: 'Work Profile', text: 'Advances, Retail Credit sanctioning, Foreign Exchange, NPA recovery, and digital branch operations.' }
          ]
        },
        {
          id: 'sbi-ibps-pattern',
          title: 'Banking PO Examination Structure',
          subtitle: 'Preliminary, Main Examination, and Group Exercise/Interview',
          kicker: 'Banking PO · Examination Stages',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'Stage 1',
              title: 'Preliminary Examination (100 Marks)',
              subtitle: '100 Questions · 60 Minutes (Strict Sectional Timing)',
              badge: 'Screening to Mains',
              description: 'English Language (30 Qs, 20 mins), Quantitative Aptitude (35 Qs, 20 mins), Reasoning Ability (35 Qs, 20 mins). Negative marking: 0.25 marks. Qualifying screening only.'
            },
            {
              stepNumber: 'Stage 2',
              title: 'Main Examination (200 + 50 Marks)',
              subtitle: 'Objective Test (3 Hours) + Descriptive English (30 Mins)',
              badge: 'Determines Interview Shortlist',
              description: 'Objective Test (200 Marks): Reasoning & Computer Aptitude, Data Analysis & Interpretation, General/Economy/Banking Awareness, English. Descriptive Test (50 Marks): Letter writing and essay writing on computer.'
            },
            {
              stepNumber: 'Stage 3',
              title: 'Group Exercise & Interview (50 Marks)',
              subtitle: 'SBI PO: GE (20 Marks) + Interview (30 Marks)',
              badge: 'Final Combined Merit',
              description: 'Evaluates team leadership, case study discussion, communication, ethics, and economic understanding. Normalized combined score determines final appointment.'
            }
          ]
        }
      ]
    },
    {
      id: 'regulatory-bodies',
      title: 'SEBI, NABARD & Financial Regulators',
      shortName: 'SEBI & NABARD Grade A',
      conductingAuthority: 'Securities and Exchange Board of India & NABARD',
      badge: 'Capital Markets & Rural Development',
      description: 'Specialized regulatory oversight of capital markets and agricultural credit refinance.',
      slides: [
        {
          id: 'sebi-nabard-overview',
          title: 'Specialized Regulators: SEBI & NABARD Grade A',
          subtitle: 'Securities Market Oversight and Rural Development Refinancing',
          kicker: 'Financial Regulators',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'SEBI Grade A',
              title: 'Securities and Exchange Board of India (SEBI)',
              badge: 'Capital Markets Regulator',
              description: 'Assistant Manager (Grade A). Regulates stock exchanges, mutual funds, insider trading, and corporate disclosures. Phase 1 & Phase 2 test Commerce, Accountancy, Management, Finance, Costing, Companies Act, and Economics.'
            },
            {
              stepNumber: 'NABARD Grade A',
              title: 'National Bank for Agriculture & Rural Development',
              badge: 'Rural Economy & Agri-Financing',
              description: 'Assistant Manager (Grade A - RDBS). Refinances rural credit institutions, cooperative banks, and agricultural infrastructure projects. Tests Economic & Social Issues (ESI) and Agriculture & Rural Development (ARD).'
            },
            {
              stepNumber: 'IFSCA & IRDAI',
              title: 'IFSCA & Insurance Regulatory Body (IRDAI)',
              badge: 'Offshore Finance & Insurance',
              description: 'Recruits officers for the International Financial Services Centres Authority (GIFT City, Gujarat) and insurance market supervision.'
            }
          ]
        }
      ]
    }
  ]
};
