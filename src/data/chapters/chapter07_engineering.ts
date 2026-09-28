import { PresentationChapter } from '../../types/presentation';

export const chapter07_engineering: PresentationChapter = {
  id: 'engineering-technical',
  chapterNumber: '08',
  title: 'Engineering & Technical Government Careers',
  shortTitle: 'Engineering & Tech',
  description: 'The engineer’s gateway to sovereign infrastructure leadership, UPSC ESE, Maharatna/Navratna PSUs, and technical governance.',
  iconName: 'Cpu',
  accent: '#06B6D4',
  sections: [
    // -------------------------------------------------------------
    // Section 1: UPSC Engineering Services Examination (ESE) — DEEP DIVE - REQ 17
    // -------------------------------------------------------------
    {
      id: 'upsc-ese-deepdive',
      title: 'UPSC Engineering Services Examination (ESE)',
      shortName: 'UPSC ESE Deep Dive',
      conductingAuthority: 'Union Public Service Commission, Dholpur House',
      badge: 'Group A Gazetted Technical Leadership · Req 17',
      description: 'The pinnacle competitive examination for engineering graduates in India. Class 1 executive technical governance across 4 branches.',
      slides: [
        {
          id: 'ese-who-and-disciplines',
          title: 'UPSC ESE: Who is it for? The 4 Disciplines',
          subtitle: 'Formerly Indian Engineering Services (IES) · The technical masterminds of the Republic',
          kicker: 'UPSC ESE Architecture · Req 17',
          layout: 'editorial-concept',
          highlightQuote: 'ESE recruits the elite technical leadership who design, build, and oversee India’s mega dams, border strategic tunnels, naval dockyards, and power grids.',
          mainProse: [
            'The Engineering Services Examination (ESE) is conducted annually by UPSC to recruit Group A Class 1 Gazetted engineers for the Government of India.',
            'Who is it for? Graduate engineers holding a degree in engineering (B.E. / B.Tech) or who have passed Sections A & B of the Institution Examinations (AMIE). Age limit: 21 to 30 years (with standard category relaxations for OBC, SC, ST, and PwBD).',
            'Recruitment is conducted strictly across FOUR recognized engineering disciplines:'
          ],
          bulletPoints: [
            { label: '1. Civil Engineering (CE)', text: 'Constructs national highways, railway alignments, strategic bridges, airports, mega dams, presidential estates, and border roads.' },
            { label: '2. Mechanical Engineering (ME)', text: 'Oversees locomotive manufacturing plants, heavy defense armament factories, naval auxiliary systems, and hydro-electric turbines.' },
            { label: '3. Electrical Engineering (EE)', text: 'Manages national ultra-high-voltage power grids, railway electrification systems, naval electrical networks, and central power generation stations.' },
            { label: '4. Electronics & Telecommunication (E&T)', text: 'Administers defense radar stations, satellite communication uplinks, naval missile guidance systems, and central telecommunication networks.' }
          ]
        },
        {
          id: 'ese-3stage-marks-structure',
          title: 'ESE Examination Pattern & 1300-Mark Architecture',
          subtitle: 'Stage 1 (Prelims 500M) → Stage 2 (Mains 600M) → Stage 3 (Personality Test 200M)',
          kicker: 'Examination Architecture · Req 17',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'Stage 1',
              title: 'Preliminary Examination (500 Marks)',
              subtitle: 'Objective MCQ Format with 1/3rd Negative Marking',
              badge: 'Screening to Mains',
              description: 'Paper 1: General Studies & Engineering Aptitude (200 Marks, 2 Hours, 100 Qs). Paper 2: Specialized Engineering Discipline (300 Marks, 3 Hours, 150 Qs). Evaluated on OMR; marks count towards final selection merit.',
              metrics: [{ label: 'Paper 1 GS', value: '200 Marks' }, { label: 'Paper 2 Technical', value: '300 Marks' }, { label: 'Total Stage 1', value: '500 Marks' }]
            },
            {
              stepNumber: 'Stage 2',
              title: 'Main Examination (600 Marks)',
              subtitle: 'Conventional Descriptive Engineering Papers',
              badge: 'Descriptive Core Engineering',
              description: 'Two conventional technical papers in the chosen branch of engineering (300 Marks each, 3 Hours each). Tests deep mathematical derivations, structural design, thermodynamics, and circuit schematics.',
              metrics: [{ label: 'Paper 1 Technical', value: '300 Marks' }, { label: 'Paper 2 Technical', value: '300 Marks' }, { label: 'Total Stage 2', value: '600 Marks' }]
            },
            {
              stepNumber: 'Stage 3',
              title: 'Personality Test / Interview (200 Marks)',
              subtitle: 'Board Evaluation at Dholpur House, New Delhi',
              badge: 'Final Selection (1300 Marks Total)',
              description: 'Conducted before a distinguished board of senior engineers, former technical members, and UPSC commission members. Evaluates engineering judgment, integrity, leadership, and field resourcefulness.',
              metrics: [{ label: 'Written Total', value: '1100 Marks' }, { label: 'Interview', value: '200 Marks' }, { label: 'Grand Total', value: '1300 Marks' }]
            }
          ]
        },
        {
          id: 'ese-gs-and-technical-syllabus',
          title: 'General Studies & Engineering Aptitude: The Decisive Paper',
          subtitle: 'The 10 non-technical subjects in Paper 1 that separate toppers from the rest',
          kicker: 'Curriculum Breakdown · Req 17',
          layout: 'stages-process',
          mainProse: [
            'While engineering graduates are comfortable with core branch subjects, Paper 1 (General Studies and Engineering Aptitude - 200 Marks) is the ultimate differentiator in ESE Prelims.'
          ],
          stages: [
            {
              stepNumber: 'Domain 01',
              title: 'Engineering Ethics & Professional Values',
              badge: 'Statutory Responsibility',
              description: 'Codes of ethics, whistleblower protections, conflict of interest in government tenders, environmental liability, and safety standards.'
            },
            {
              stepNumber: 'Domain 02',
              title: 'Project Management & Quality Control',
              badge: 'Infrastructure Execution',
              description: 'CPM/PERT network analysis, earned value management, Total Quality Management (TQM), ISO certifications, and life-cycle costing.'
            },
            {
              stepNumber: 'Domain 03',
              title: 'Environmental Ecology & Climate Conservation',
              badge: 'Green Engineering',
              description: 'Environmental Impact Assessment (EIA), carbon footprint abatement, renewable energy systems, and solid waste recycling.'
            },
            {
              stepNumber: 'Domain 04',
              title: 'Information & Communication Technologies (ICT)',
              badge: 'Digital Governance',
              description: 'E-governance architectures, cyber security protocols, cloud systems, smart grids, and IoT sensor arrays in public infrastructure.'
            },
            {
              stepNumber: 'Domain 05',
              title: 'Material Science & Engineering Drawing',
              badge: 'Fundamental Principles',
              description: 'Crystal structures, phase diagrams, nanomaterials, polymers, orthographic projections, and CAD/CAM fundamentals.'
            }
          ]
        },
        {
          id: 'ese-3year-cutoff-and-pyqs',
          title: 'ESE 3-Year Cutoff Analysis & Actual PYQ Showcase',
          subtitle: 'Discipline-wise cutoff thresholds (out of 1300) and real technical questions',
          kicker: 'Empirical ESE Data · Req 17',
          layout: 'pyq-showcase',
          pyqItems: [
            {
              paperTitle: 'Civil Engineering (Conventional Mains)',
              paperCode: 'CE Mains',
              year: '2023',
              marks: '20 Marks · Design Analysis',
              questionText: 'A prestressed concrete beam of rectangular cross-section 300 mm x 600 mm is subjected to a tendon with an initial force of 900 kN at an eccentricity of 100 mm. Calculate the extreme fiber stresses at transfer and service load stages.',
              testingDimensions: ['Structural Mechanics', 'Prestressed Design', 'Mathematical Accuracy', 'IS Code Provisions'],
              testingAnalysis: 'Tests rigorous structural mechanics and stress distribution algorithms. Civil engineers in CPWD and MES routinely approve high-load prestressed bridges where failure in tendon stress calculations can cause catastrophic bridge collapses.',
              coreKeyTakeaway: 'Conventional ESE Mains demands step-by-step mathematical proofs with explicit free-body diagrams and code citations.'
            },
            {
              paperTitle: 'Mechanical Engineering (Conventional Mains)',
              paperCode: 'ME Mains',
              year: '2023',
              marks: '20 Marks · Thermodynamics',
              questionText: 'Derive the thermal efficiency expression for a gas turbine plant operating on an ideal Brayton cycle with regeneration, intercooling, and reheating. Show the cycle on T-s and P-v coordinates.',
              testingDimensions: ['Thermodynamic Derivation', 'Cycle Synthesis', 'Graphical Schematics', 'Energy Optimization'],
              testingAnalysis: 'Tests fundamental power plant thermodynamics. Mechanical officers in defense production and power stations design combined-cycle turbines where regeneration and intercooling balance thermal efficiency against mechanical complexity.',
              coreKeyTakeaway: 'Full credit requires clean, accurately labeled T-s and P-v thermodynamic diagrams alongside algebraic derivations.'
            },
            {
              paperTitle: 'Electrical Engineering (Conventional Mains)',
              paperCode: 'EE Mains',
              year: '2023',
              marks: '20 Marks · Power Systems',
              questionText: 'Derive the Swing Equation for a synchronous machine connected to an infinite bus. Explain how the Equal Area Criterion is applied to determine critical clearing angle for a transient three-phase fault.',
              testingDimensions: ['Power Grid Stability', 'Differential Equations', 'Transient Dynamics', 'Grid Security'],
              testingAnalysis: 'Tests transient dynamic stability in electrical power transmission. Engineers in the Central Electricity Authority (CEA) and Power Grid oversee national transmission lines where delayed fault clearing can cause nationwide grid blackouts.',
              coreKeyTakeaway: 'UPSC evaluates whether the candidate understands the physical reality of grid inertia behind the mathematical differential equations.'
            },
            {
              paperTitle: 'GS & Engineering Aptitude (Prelims)',
              paperCode: 'GS Aptitude',
              year: '2024',
              marks: '2 Marks · Objective MCQ',
              questionText: 'In the context of public infrastructure procurement, explain Life Cycle Costing (LCC) and how initial capital expenditure trade-offs impact operational sustainability over a 50-year horizon.',
              testingDimensions: ['Infrastructure Economics', 'Life-Cycle Analysis', 'Sustainable Public Procurement', 'Project Finance'],
              testingAnalysis: 'Tests whether the future executive engineer realizes that lowest immediate bid (L-1) is not always the best economic choice. High-quality corrosion-resistant materials may cost 15% more initially but save 60% in maintenance over a 50-year service life.',
              coreKeyTakeaway: 'Paper 1 tests managerial and techno-commercial wisdom, not just pure textbook science.'
            }
          ]
        },
        {
          id: 'life-after-ese',
          title: 'Life After ESE: Cadres & Technical Administration',
          subtitle: 'Where do ESE Officers serve and what do they actually do in government?',
          kicker: 'Cadres & Executive Authority · Req 17',
          layout: 'career-pathway',
          highlightQuote: 'An ESE officer is not a draftsman or contractor. They are executive government authorities who sanction multi-billion-rupee infrastructure, approve safety certifications, and lead thousands of personnel.',
          careerPaths: [
            {
              role: 'Central Public Works Department (CPWD)',
              department: 'Ministry of Housing and Urban Affairs (MoHUA)',
              nature: 'National Built Infrastructure Authority',
              description: 'Designs, constructs, and maintains sovereign infrastructure: the New Parliament Complex, Rashtrapati Bhavan, Supreme Court, Central Vista, national highways in difficult terrains, and diplomatic embassy campuses abroad.',
              hierarchy: ['Assistant Executive Engineer (AEE)', 'Executive Engineer (EE)', 'Superintending Engineer (SE)', 'Chief Engineer (CE)', 'Director General (DG), CPWD']
            },
            {
              role: 'Military Engineer Services (MES) & Naval Armament',
              department: 'Ministry of Defence / Indian Armed Forces',
              nature: 'Defence Strategic Works & Base Infrastructure',
              description: 'Builds military air bases, submarine pens, underground missile silos, military cantonments, and forward border roads. Naval armament engineers design and inspect missile guidance, torpedoes, and warship weaponry.',
              hierarchy: ['Assistant Executive Engineer (MES)', 'Garrison Engineer (GE)', 'Commander Works Engineers (CWE)', 'Chief Engineer (Zone)', 'Engineer-in-Chief (E-in-C)']
            },
            {
              role: 'Central Water Commission (CWC) & Central Power Engg',
              department: 'Ministry of Jal Shakti / Ministry of Power',
              nature: 'National Water Resources & Energy Grids',
              description: 'Plans multi-purpose river valley projects, national dam safety inspections, inter-basin river linkings, national flood forecasting networks, and designs central renewable energy transmission grids.',
              hierarchy: ['Assistant Director (CWC)', 'Deputy Director', 'Director', 'Chief Engineer', 'Chairman, Central Water Commission']
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: GATE as a Public Sector (PSU) Gateway
    // -------------------------------------------------------------
    {
      id: 'gate-psus',
      title: 'GATE as a Public Sector (PSU) Gateway',
      shortName: 'GATE & PSU Recruitment',
      conductingAuthority: 'IITs / IISc & Respective Public Sector Enterprises',
      badge: 'Maharatna & Navratna PSUs',
      description: 'How the Graduate Aptitude Test in Engineering serves as the direct pipeline to executive engineer recruitment in public corporations.',
      slides: [
        {
          id: 'gate-psu-framework',
          title: 'The GATE-to-PSU Recruitment Model',
          subtitle: 'Direct Executive Trainee appointments in India’s industrial giants',
          kicker: 'PSU Recruitment Model',
          layout: 'editorial-concept',
          highlightQuote: 'A top 500 GATE rank in core branches (Mechanical, Electrical, Civil, Chemical, Electronics, CS) opens direct recruitment doors to Fortune 500 equivalent enterprises.',
          mainProse: [
            'Rather than conducting independent technical examinations, over 50 Central Public Sector Enterprises (CPSEs) utilize valid GATE scores for initial shortlisting.',
            'Selected engineers join as Executive Trainees / Graduate Engineer Trainees (GET) at Pay Scale E-2 / E-3 with industry-leading compensation (CTC ₹14 Lakh to ₹24 Lakh per annum), executive medical care, and family housing in premier townships.',
            'Prominent recruiters include Maharatna corporations: ONGC, IOCL, NTPC, BHEL, GAIL, HPCL, Power Grid Corporation (PGCIL), and Coal India Limited (CIL).'
          ],
          bulletPoints: [
            { label: 'Evaluation Weightage', text: 'Typically: 70% to 85% weightage for GATE Score + 15% to 30% for Group Discussion (GD), Group Task (GT), and Personal Interview (PI).' },
            { label: 'Techno-Commercial Leadership', text: 'Engineers lead offshore oil drilling rigs, 4000 MW thermal super-stations, trans-continental gas pipelines, and smart electrical grids.' }
          ]
        },
        {
          id: 'psu-selection-journey',
          title: 'PSU Selection Framework',
          subtitle: 'From GATE application to Corporate Boardroom Offer',
          kicker: 'PSU Selection Journey',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'Step 01',
              title: 'GATE Score Achievement (February)',
              badge: 'Normalized Score (out of 1000)',
              description: 'Candidate appears in their branch of engineering. Top percentiles achieve AIR (All India Rank) required for cutoff thresholds.'
            },
            {
              stepNumber: 'Step 02',
              title: 'PSU Application Window (March - May)',
              badge: 'Direct Portal Registration',
              description: 'Candidates register on individual PSU portals with their GATE registration number and branch credentials.'
            },
            {
              stepNumber: 'Step 03',
              title: 'Group Discussion & Personal Interview',
              badge: 'Leadership & Domain Knowledge',
              description: 'Testing core engineering principles, situational engineering problem-solving, project work, and teamwork dynamics.'
            },
            {
              stepNumber: 'Step 04',
              title: 'Executive Trainee Induction',
              badge: 'Class 1 Equivalent Corporate Cadre',
              description: 'Comprehensive 1-year training across manufacturing units, field operations, and corporate headquarters.'
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 3: State Engineering Services (AE & AEE)
    // -------------------------------------------------------------
    {
      id: 'state-engineering',
      title: 'State Engineering Services (AE & AEE)',
      shortName: 'State AE & AEE',
      conductingAuthority: 'State Public Service Commissions (e.g. KPSC / State PWD Boards)',
      badge: 'Assistant Executive Engineer (Group A / B)',
      description: 'Direct recruitment of graduate engineers for state public works, irrigation, rural water, and power utilities.',
      slides: [
        {
          id: 'state-ae-aee-overview',
          title: 'State Public Works & Irrigation: AE and AEE Cadres',
          subtitle: 'Leading state public infrastructure projects',
          kicker: 'State Technical Cadres',
          layout: 'editorial-concept',
          highlightQuote: 'Assistant Executive Engineers (AEE) in state departments hold statutory sanctioning powers for road networks, bridges, canal systems, and public buildings.',
          mainProse: [
            'State Public Service Commissions (such as KPSC in Karnataka) conduct direct recruitment for Assistant Executive Engineers (AEE - Group A) and Assistant Engineers (AE - Group B).',
            'Major recruiting departments include Public Works Department (PWD), Water Resources Department (Irrigation), Rural Drinking Water and Sanitation Department (RDWSD), and Minor Irrigation.',
            'State Electricity Supply Companies (such as BESCOM, HESCOM, KPTCL in Karnataka) similarly recruit Assistant Engineers for state power transmission and distribution networks.'
          ],
          bulletPoints: [
            { label: 'Examination Pattern', text: 'Typically consists of two papers: Paper 1 (General Studies) and Paper 2 (Core Technical Engineering - Civil, Mechanical, or Electrical).' },
            { label: 'Executive Sanctions', text: 'Officers prepare detailed project estimates, verify contractor bills, supervise quality assurance, and administer public tenders.' }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 4: Patent Office & Standards Bodies
    // -------------------------------------------------------------
    {
      id: 'patent-examiners',
      title: 'Patent Office & Standards Bodies (BIS & CGPDTM)',
      shortName: 'Patent Examiners & BIS',
      conductingAuthority: 'Ministry of Commerce & Industry / Bureau of Indian Standards',
      badge: 'Intellectual Property & National Standards',
      description: 'Evaluating national inventions, intellectual property patents, and conformity standards.',
      slides: [
        {
          id: 'patent-examiner-overview',
          title: 'Examiner of Patents and Designs (CGPDTM) & BIS',
          subtitle: 'The interface between cutting-edge technology and legal intellectual property',
          kicker: 'Intellectual Property Cadres',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'CGPDTM',
              title: 'Examiner of Patents and Designs',
              badge: 'Group A Gazetted (Pay Level 10)',
              description: 'Conducted under the Controller General of Patents, Designs and Trade Marks (Ministry of Commerce). Evaluates international and domestic patent claims for novel scientific inventions across Bio-tech, Computer Science, Mechanical, and Chemical disciplines.'
            },
            {
              stepNumber: 'BIS',
              title: 'Bureau of Indian Standards (Scientist B)',
              badge: 'National Standards Body',
              description: 'Formulates Indian Standards (IS), runs conformity testing labs, and inspects industrial goods for ISI certification marks to ensure consumer protection and national safety.'
            }
          ]
        }
      ]
    }
  ]
};
