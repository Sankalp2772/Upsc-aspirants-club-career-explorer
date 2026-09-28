import { PresentationChapter } from '../../types/presentation';

export const chapter02_upsc: PresentationChapter = {
  id: 'upsc',
  chapterNumber: '02',
  title: 'Union Public Service Commission (UPSC)',
  shortTitle: 'UPSC CSE & IFoS',
  description: 'The premier constitutional recruiting agency of India for All India Services, Central Civil Services, and scientific forestry leadership.',
  iconName: 'ShieldAlert',
  accent: '#E5C378',
  sections: [
    // -------------------------------------------------------------
    // Section 1: Introduction & Constitutional Mandate
    // -------------------------------------------------------------
    {
      id: 'upsc-overview',
      title: 'Introduction to UPSC',
      shortName: 'Constitutional Stature',
      conductingAuthority: 'Union Public Service Commission, Dholpur House, New Delhi',
      badge: 'Constitutional Body · Art. 315',
      description: 'Understanding the constitutional mandate and institutional stature of UPSC.',
      slides: [
        {
          id: 'upsc-mandate',
          title: 'The Constitutional Mandate of UPSC',
          subtitle: 'Guardian of the Merit System in Indian Public Administration',
          kicker: 'Chapter 02 · Section 01',
          layout: 'editorial-concept',
          highlightQuote: 'UPSC operates not under any Ministry, but as an autonomous constitutional organ reporting directly to the President of India.',
          mainProse: [
            'Established under Article 315 of the Constitution of India, the Union Public Service Commission (UPSC) is headquartered at Dholpur House, Shahjahan Road, New Delhi.',
            'Its constitutional mission is to conduct examinations for appointment to the services of the Union, ensuring that the civil service remains politically independent, competent, and representative of the nation’s merit.',
            'Its recommendations on appointments and disciplinary matters carry immense constitutional weight, with annual reports laid directly before both Houses of Parliament.'
          ],
          bulletPoints: [
            { label: 'Autonomous Tenure', text: 'Commission Members hold fixed constitutional tenures of 6 years or until age 65, protected by judicial removal processes.' },
            { label: 'Strict Impartiality', text: 'Examinations are conducted nationwide with double-blind evaluation, code-sheet masking, and decentralized evaluation centers.' },
            { label: 'Broad Portfolio', text: 'Conducts examinations ranging from administrative generalists (CSE) to specialized engineers (ESE), doctors (CMS), and military officers (NDA/CDS).' }
          ]
        },
        {
          id: 'upsc-exam-spectrum',
          title: 'Major Examinations Conducted by UPSC',
          subtitle: 'The full array of national recruitment programs',
          kicker: 'UPSC Portfolio',
          layout: 'stages-process',
          mainProse: [
            'While the Civil Services Examination attracts the widest public attention, UPSC conducts over a dozen premier national selection processes every year.'
          ],
          stages: [
            {
              stepNumber: '01',
              title: 'Civil Services Examination (CSE)',
              badge: 'Flagship Examination',
              description: 'Selects officers for IAS, IPS, IFS, IRS, and 20+ premier central civil services.'
            },
            {
              stepNumber: '02',
              title: 'Indian Forest Service (IFoS)',
              badge: 'All India Service',
              description: 'Scientific forestry and wildlife administration across state forest cadres.'
            },
            {
              stepNumber: '03',
              title: 'Engineering Services Examination (ESE)',
              badge: 'Technical Class 1',
              description: 'Technical executive leaders for CPWD, Military Engineer Services, Central Water Commission, and Railways.'
            },
            {
              stepNumber: '04',
              title: 'Defence Examinations (NDA & CDS)',
              badge: 'Military Commission',
              description: 'Recruits officers for the National Defence Academy, IMA, Naval Academy, Air Force Academy, and OTA.'
            },
            {
              stepNumber: '05',
              title: 'Central Armed Police Forces (CAPF AC)',
              badge: 'Assistant Commandants',
              description: 'Direct entry officer selection for BSF, CRPF, CISF, ITBP, and SSB.'
            },
            {
              stepNumber: '06',
              title: 'Specialized Technical Services',
              badge: 'Scientific & Medical',
              description: 'Combined Medical Services (CMS), Combined Geo-Scientist, and Indian Statistical/Economic Services (ISS/IES).'
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: UPSC CSE Foundations & Eligibility
    // -------------------------------------------------------------
    {
      id: 'upsc-cse-foundations',
      title: 'UPSC Civil Services Examination (CSE)',
      shortName: 'CSE Architecture',
      conductingAuthority: 'Union Public Service Commission',
      badge: 'All India & Central Services',
      description: 'The definitive journey to the Indian Administrative Service, Indian Police Service, and allied central cadres.',
      slides: [
        {
          id: 'cse-why-what',
          title: 'Why CSE? What is the Civil Services Examination?',
          subtitle: 'The crucible of Indian public governance and leadership',
          kicker: 'UPSC CSE · Overview',
          layout: 'editorial-concept',
          highlightQuote: 'CSE is not merely a job recruitment test. It is a selection mechanism for policy formulators, district administrators, and judicial magistrates.',
          imageBanner: {
            url: '/images/ias_dm_bungalow.jpg',
            caption: 'District Magistrate Heritage Residence & Executive Command Vehicle with National Emblem Flag',
            tag: 'CRUCIBLE OF SOVEREIGN GOVERNANCE'
          },
          mainProse: [
            'The Civil Services Examination (CSE) is widely considered one of the most intellectually demanding competitive examinations in the world.',
            'Through a unified three-tier process, the nation selects leaders who will administer districts, manage law and order, shape external diplomatic relations, collect national revenues, and implement multi-billion-rupee welfare interventions.',
            'The examination tests not just memory, but analytical balance, ethical fortitude, linguistic clarity, and multidisciplinary perspective.'
          ],
          keyTakeaways: [
            'Direct administrative authority from Day 1 of district field postings',
            'Opportunities to influence policy across health, education, infrastructure, and international diplomacy',
            'National recognition, institutional authority, and unparalleled scope of public service'
          ]
        },
        {
          id: 'cse-eligibility',
          title: 'Who Can Apply? Eligibility Architecture',
          subtitle: 'Nationality, educational qualifications, age brackets, and attempt limits',
          kicker: 'UPSC CSE · Eligibility',
          layout: 'eligibility-grid',
          eligibility: [
            {
              category: 'Educational Qualification',
              requirement: 'Graduate Degree in any discipline',
              note: 'Must hold a degree from an incorporated university or institution recognized by UGC. Final-year students can appear for Prelims provided they produce proof of passing before Mains.'
            },
            {
              category: 'Age Limit (as of August 1)',
              requirement: 'Minimum 21 Years · Maximum 32 Years (General/EWS)',
              note: 'Relaxations apply: OBC (35 Years), SC/ST (37 Years), PwBD (up to 42 Years depending on category).'
            },
            {
              category: 'Number of Attempts',
              requirement: 'General / EWS: 6 Attempts',
              note: 'OBC: 9 Attempts · SC/ST: Unlimited attempts up to age ceiling · PwBD: 9 attempts for Gen/OBC, unlimited for SC/ST.'
            },
            {
              category: 'Nationality',
              requirement: 'IAS, IPS & IFS require Indian Citizenship',
              note: 'For other central services, citizens of Nepal, Bhutan, and eligible Tibetan refugees/migrants may also apply under specific statutory conditions.'
            }
          ]
        },
        {
          id: 'cse-journey-pipeline',
          title: 'The Examination Journey',
          subtitle: 'A 12-month marathon across three distinct evolutionary stages',
          kicker: 'UPSC CSE · 3-Stage Pipeline',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'Stage 1',
              title: 'Preliminary Examination (Prelims)',
              subtitle: 'Objective Screening Test',
              badge: 'Qualifying Filter',
              description: 'Two objective papers (General Studies 1 & CSAT Paper 2) conducted on a single day. Marks do not count towards the final rank list, but determine eligibility for Mains.',
              metrics: [{ label: 'Format', value: 'MCQ (OMR)' }, { label: 'Applicants', value: '~10,00,000' }, { label: 'Filtered', value: '~13,000' }]
            },
            {
              stepNumber: 'Stage 2',
              title: 'Main Examination (Mains)',
              subtitle: 'Written Descriptive Test',
              badge: '1750 Marks for Merit',
              description: 'Nine subjective, descriptive papers written over five consecutive days. Tests deep analytical insight, ethical reasoning, essay composition, and specialized optional subject expertise.',
              metrics: [{ label: 'Format', value: 'Subjective Pen & Paper' }, { label: 'Duration', value: '5 Days' }, { label: 'Filtered', value: '~2,800' }]
            },
            {
              stepNumber: 'Stage 3',
              title: 'Personality Test (Interview)',
              subtitle: 'Oral Board Evaluation',
              badge: '275 Marks for Merit',
              description: 'Conducted before a distinguished board at Dholpur House. Assesses intellectual alertness, critical assimilation, integrity, balance of judgment, and suitability for public service.',
              metrics: [{ label: 'Format', value: 'Board Interview' }, { label: 'Duration', value: '30-45 mins' }, { label: 'Final Selected', value: '~1,000' }]
            },
            {
              stepNumber: 'Stage 4',
              title: 'Final Allocation & Training',
              subtitle: 'LBSNAA & Academy Foundation',
              badge: 'Presidential Appointment',
              description: 'Rank calculated out of 2025 Marks (1750 Mains + 275 Interview). Candidates undergo the Foundation Course at Lal Bahadur Shastri National Academy of Administration (LBSNAA), Mussoorie.',
              metrics: [{ label: 'Total Merit', value: '2025 Marks' }, { label: 'Cadre Rule', value: 'Zonal System' }]
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 3: Prelims 3-Year Analysis (Cutoffs, Weightage & Evolution) - REQ 1
    // -------------------------------------------------------------
    {
      id: 'upsc-prelims-analysis',
      title: 'UPSC CSE Prelims: 3-Year Analysis',
      shortName: 'Prelims 3-Yr Deep Dive',
      conductingAuthority: 'UPSC Examination Analysis',
      badge: 'Official Cutoffs & PYQ Data',
      description: 'Comprehensive 3-year statistical breakdown of Prelims cutoffs, subject weightages, and structural question evolution.',
      slides: [
        {
          id: 'prelims-structure-rule',
          title: 'Stage 1: Preliminary Examination Structure',
          subtitle: 'GS Paper I (Cutoff Determining) vs CSAT Paper II (Qualifying Threshold)',
          kicker: 'UPSC CSE · Prelims Breakdown',
          layout: 'papers-table',
          papers: [
            {
              name: 'General Studies Paper I',
              type: 'Merit',
              marks: '200 Marks (100 Questions)',
              duration: '2 Hours (Morning Session: 09:30 AM – 11:30 AM)',
              description: 'Exclusively determines whether a candidate clears the Prelims Cut-off for Mains qualification. 1/3rd negative marking (-0.66 marks per wrong answer).',
              subjects: [
                'Current events of national & international importance',
                'History of India & Indian National Movement',
                'Indian & World Geography (Physical, Social, Economic)',
                'Indian Polity & Governance (Constitution, Panchayati Raj, Public Policy)',
                'Economic & Social Development (Sustainable development, Poverty, Demographics)',
                'Environmental Ecology, Biodiversity & Climate Change (no subject specialization)',
                'General Science and Emerging Technologies'
              ]
            },
            {
              name: 'CSAT (General Studies Paper II)',
              type: 'Qualifying',
              marks: '200 Marks (80 Questions)',
              duration: '2 Hours (Afternoon Session: 02:30 PM – 04:30 PM)',
              description: 'Purely Qualifying Paper: Candidates must score at least 33% (66 Marks out of 200). CSAT marks do NOT contribute to cutoff rank, but failing to clear 66 marks results in instant elimination.',
              subjects: [
                'Reading Comprehension (complex inference passages)',
                'Interpersonal skills including communication skills',
                'Logical reasoning & analytical ability',
                'Decision-making & problem-solving scenarios',
                'General mental ability',
                'Basic numeracy (numbers, orders of magnitude, Class X level)',
                'Data interpretation (charts, graphs, tables, Class X level)'
              ]
            }
          ]
        },
        {
          id: 'prelims-cutoff-table-3yr',
          title: 'UPSC CSE Prelims: 3-Year Cut-off Analysis',
          subtitle: 'Visual category-wise cut-off trends across 2025, 2024, and 2023',
          kicker: 'Prelims Empirical Data · Req 1.A',
          layout: 'cutoff-table',
          cutoffData: {
            examName: 'Civil Services (Preliminary) Examination',
            qualifyingRuleNotice: 'Prelims cut-off is based solely on GS Paper-I (200 marks). CSAT Paper-II is qualifying at 33% (66 marks). UPSC official notifications confirm this architecture.',
            years: [
              {
                year: '2025',
                examBasis: 'GS Paper-I (200 Marks) · CSAT Qualifying (66/200)',
                officialNotice: 'Provisional/Official range benchmark based on difficulty indices',
                categories: [
                  { category: 'General (UR)', cutoff: 89.20, note: 'Stable high-yield threshold' },
                  { category: 'EWS', cutoff: 81.50, note: '7.7 marks below General' },
                  { category: 'OBC', cutoff: 88.10, note: 'Close parity with General (<1.1 marks)' },
                  { category: 'SC', cutoff: 75.30, note: 'Moderate upward consolidation' },
                  { category: 'ST', cutoff: 70.80, note: 'Consistent baseline above 70' },
                  { category: 'PwBD-1', cutoff: 61.20, note: 'Locomotor disability' },
                  { category: 'PwBD-2', cutoff: 65.50, note: 'Visual impairment' },
                  { category: 'PwBD-3', cutoff: 41.50, note: 'Hearing impairment' },
                  { category: 'PwBD-5', cutoff: 36.20, note: 'Multiple disabilities' }
                ]
              },
              {
                year: '2024',
                examBasis: 'GS Paper-I (200 Marks) · CSAT Qualifying (66/200)',
                officialNotice: 'Official Cutoff Released by UPSC',
                categories: [
                  { category: 'General (UR)', cutoff: 87.98, note: 'Rebound of 12.57 marks over 2023' },
                  { category: 'EWS', cutoff: 80.76, note: 'Stabilized above 80' },
                  { category: 'OBC', cutoff: 87.32, note: 'Separated by only 0.66 marks from General' },
                  { category: 'SC', cutoff: 74.00, note: 'Upward jump of 14.75 marks' },
                  { category: 'ST', cutoff: 69.34, note: 'Upward jump of 21.52 marks' },
                  { category: 'PwBD-1', cutoff: 59.88, note: 'Substantial increase' },
                  { category: 'PwBD-2', cutoff: 64.21, note: 'Second highest PwBD threshold' },
                  { category: 'PwBD-3', cutoff: 40.40, note: 'Stable threshold' },
                  { category: 'PwBD-5', cutoff: 35.12, note: 'Baseline category' }
                ]
              },
              {
                year: '2023',
                examBasis: 'GS Paper-I (200 Marks) · CSAT Qualifying (66/200)',
                officialNotice: 'Official Cutoff Released by UPSC',
                categories: [
                  { category: 'General (UR)', cutoff: 75.41, note: 'Historic all-time low due to pairing options' },
                  { category: 'EWS', cutoff: 68.02, note: 'Dip below 70 marks' },
                  { category: 'OBC', cutoff: 74.75, note: 'Within 0.66 marks of General' },
                  { category: 'SC', cutoff: 59.25, note: 'Lowest SC cutoff in recent memory' },
                  { category: 'ST', cutoff: 47.82, note: 'Below 50 marks threshold' },
                  { category: 'PwBD-1', cutoff: 40.40, note: 'Historic dip' },
                  { category: 'PwBD-2', cutoff: 47.13, note: 'Historic dip' },
                  { category: 'PwBD-3', cutoff: 40.40, note: 'Baseline threshold' },
                  { category: 'PwBD-5', cutoff: 33.68, note: 'Bare minimum clearance' }
                ]
              }
            ]
          }
        },
        {
          id: 'prelims-subject-weightage-3yr',
          title: 'Prelims Subject-Wise Weightage (3 Years)',
          subtitle: 'Actual question counts and percentage distribution from official PYQ papers',
          kicker: 'PYQ Subject Distribution · Req 1.B',
          layout: 'subject-weightage'
        },
        {
          id: 'prelims-what-changed-3yr',
          title: 'What Changed Across 3 Years? (2023 → 2024 → 2025)',
          subtitle: 'Changing emphasis, option architecture, and question characteristics',
          kicker: 'Trend Visualisation · Req 1.C',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: '2023',
              title: 'The Elimination Disruption',
              badge: 'Cut-off: 75.41 (All-Time Low)',
              subtitle: 'Neutralization of Coaching Elimination Tricks',
              description: 'UPSC introduced 47+ questions with "Only one pair / Only two pairs / All three / None", eliminating traditional 50:50 elimination methods. CSAT difficulty reached record levels with advanced combinatorics and number theory.',
              metrics: [
                { label: 'Pair Questions', value: '47 Questions' },
                { label: 'Cutoff Impact', value: '-12.8 Marks' },
                { label: 'CSAT Math Focus', value: 'Number Systems' }
              ]
            },
            {
              stepNumber: '2024',
              title: 'The Methodical Rebalancing',
              badge: 'Cut-off: 87.98 (+12.57 Rebound)',
              subtitle: 'Return of Classic Options & NCERT Grounding',
              description: 'UPSC dialed back the extreme pair-matching questions, returning to classic multiple-statement options. Questions rewarded students with rock-solid NCERT fundamentals and standard textbook clarity. Cutoff normalized back to ~88 marks.',
              metrics: [
                { label: 'Pair Questions', value: 'Reduced to ~12' },
                { label: 'Cutoff Impact', value: '+12.57 Marks' },
                { label: 'Core Textbooks', value: 'NCERT Centric' }
              ]
            },
            {
              stepNumber: '2025',
              title: 'The Analytical Synthesis',
              badge: 'Cut-off: ~89.20 (Consolidation)',
              subtitle: 'Interdisciplinary Linkages & Applied Science Depth',
              description: 'Questions synthesize multiple domains simultaneously (e.g. Geography linked to critical mineral geopolitics; Environmental treaties linked to WTO carbon border adjustments). Technology questions probe deep mechanisms (AI, Quantum, mRNA) rather than superficial terms.',
              metrics: [
                { label: 'Synthesis Depth', value: 'Cross-Domain' },
                { label: 'Cutoff Band', value: '~88–90 Marks' },
                { label: 'CSAT Balance', value: 'Structured Prep' }
              ]
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 4: UPSC CSE Mains — 3-Year Topper Analysis - REQ 2
    // -------------------------------------------------------------
    {
      id: 'upsc-mains-topper-analysis',
      title: 'UPSC CSE Mains: 3-Year Topper Analysis',
      shortName: 'Mains Topper Analysis',
      conductingAuthority: 'UPSC Official Recommended Candidate Archives',
      badge: 'Official Marks Data',
      description: 'Official marks analysis of recommended toppers across 3 years with diverse high-scoring profile archetypes.',
      slides: [
        {
          id: 'cse-mains-overview',
          title: 'Stage 2: Main Examination Architecture',
          subtitle: 'The 1750-mark intellectual evaluation across 9 papers',
          kicker: 'UPSC CSE · Mains Breakdown',
          layout: 'papers-table',
          papers: [
            {
              name: 'Paper A: Indian Language',
              type: 'Qualifying',
              marks: '300 Marks (Qualifying at 25% = 75 Marks)',
              duration: '3 Hours',
              description: 'Any language from the 8th Schedule. Must pass; marks not counted in merit list.'
            },
            {
              name: 'Paper B: English Comprehension',
              type: 'Qualifying',
              marks: '300 Marks (Qualifying at 25% = 75 Marks)',
              duration: '3 Hours',
              description: 'Precis writing, reading comprehension, vocabulary, and short essay.'
            },
            {
              name: 'Paper I: Essay',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Two analytical / philosophical essays chosen from Section A and Section B (1000–1200 words each).'
            },
            {
              name: 'Paper II: General Studies I',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Indian Heritage & Culture, History & Geography of the World, and Society.'
            },
            {
              name: 'Paper III: General Studies II',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Governance, Constitution, Polity, Social Justice and International Relations.'
            },
            {
              name: 'Paper IV: General Studies III',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Technology, Economic Development, Biodiversity, Environment, Security and Disaster Management.'
            },
            {
              name: 'Paper V: General Studies IV',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Ethics, Integrity, and Aptitude (including situational case studies).'
            },
            {
              name: 'Papers VI & VII: Optional Subject (Papers 1 & 2)',
              type: 'Merit',
              marks: '250 + 250 = 500 Marks',
              duration: '3 Hours each',
              description: 'Two specialized papers in the candidate’s chosen discipline from the official optional list.'
            }
          ]
        },
        {
          id: 'topper-marks-archive-3yr',
          title: 'Mains Topper Marks Analysis (3 Years)',
          subtitle: 'Official marks data for 5 top-ranking candidates across CSE 2023, 2022, and 2021',
          kicker: 'Official UPSC Archives · Req 2',
          layout: 'topper-analysis'
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 5: Mains Paper-by-Paper Question Showcase - REQ 3
    // -------------------------------------------------------------
    {
      id: 'upsc-mains-pyq-showcase',
      title: 'Mains: Paper-by-Paper Question Showcase',
      shortName: 'PYQ Showcase & Analysis',
      conductingAuthority: 'Official UPSC CSE Question Papers',
      badge: 'Actual PYQs · 7 Competitive Papers',
      description: 'Actual questions from each of the 7 merit papers with deep analytical breakdown of what UPSC is really testing.',
      slides: [
        {
          id: 'mains-pyq-showcase-all',
          title: 'What Does UPSC Actually Ask? Question Showcase',
          subtitle: 'Examine actual previous-year questions from all 7 competitive Mains papers',
          kicker: 'Examiner Mindset · Req 3',
          layout: 'pyq-showcase',
          pyqItems: [
            {
              paperTitle: 'Essay (Paper I)',
              paperCode: 'Essay',
              year: '2023',
              marks: '125 Marks · 1000–1200 Words',
              questionText: 'Thinking is like a game, it does not begin unless there is an opposite team.',
              testingDimensions: ['Philosophical Abstraction', 'Critical Dialectics', 'Multidisciplinary Synthesis', 'Contemporary Anchoring'],
              testingAnalysis: 'UPSC is testing whether the candidate possesses the intellectual maturity to unpack a philosophical aphorism into multiple human dimensions (individual introspection, scientific paradigm shifts via Popperian falsification, democratic checks & balances, and geopolitical diplomacy). It tests dialectical thinking: showing how opposition and intellectual resistance forge clarity.',
              coreKeyTakeaway: 'Avoid writing a purely abstract essay. Ground abstract ideas in historical moments, scientific milestones, constitutional design, and administrative governance.'
            },
            {
              paperTitle: 'General Studies I (Paper II)',
              paperCode: 'GS-I',
              year: '2023',
              marks: '10 Marks · 150 Words',
              questionText: 'Explain the role of geographical factors towards the development of Ancient India.',
              testingDimensions: ['Knowledge & Memory', 'Interlinking Geography with History', 'Spatial Analysis', 'Concrete Examples'],
              testingAnalysis: 'This question tests the student’s ability to transcend rote chronological history and explain structural causality. Why did Magadha rise as the paramount Mahajanapada? (Iron ore deposits in Rajgir/Singhbhum, dense timber for chariots, fertile alluvial plains of Ganga-Son). How did Himalayan barriers and monsoon wind currents shape maritime trade with Southeast Asia and Rome?',
              coreKeyTakeaway: 'UPSC rewards candidates who use annotated maps and establish direct causal links between physical terrain and human civilization.'
            },
            {
              paperTitle: 'General Studies II (Paper III)',
              paperCode: 'GS-II',
              year: '2023',
              marks: '15 Marks · 250 Words',
              questionText: 'The Constitution of India is a living instrument with capabilities which are enormous to its interpretation. Discuss in the context of the expanding scope of Article 21.',
              testingDimensions: ['Constitutional Jurisprudence', 'Case-Law Application', 'Critical Evaluation', 'Rights Evolution'],
              testingAnalysis: 'Tests deep constitutional literacy. Moves beyond textbook Article 21 to evaluate transformative judicial doctrine: from AK Gopalan (procedural restriction) to Maneka Gandhi (procedure established by law must be just, fair and reasonable) to KS Puttaswamy (Right to Privacy), Subhash Kumar (Right to clean environment), and Common Cause (Right to die with dignity).',
              coreKeyTakeaway: 'GS-II demands constitutional articles, landmark Supreme Court precedents, and institutional doctrine rather than generic political commentary.'
            },
            {
              paperTitle: 'General Studies III (Paper IV)',
              paperCode: 'GS-III',
              year: '2023',
              marks: '15 Marks · 250 Words',
              questionText: 'What are the direct and indirect subsidies provided to the farm sector in India? Discuss the issues raised by the WTO in relation to these subsidies.',
              testingDimensions: ['Economic Policy Literacy', 'WTO Classification Rules', 'Critical Analysis', 'Trade Negotiations'],
              testingAnalysis: 'Tests clear fiscal categorization (Direct subsidies: PM-KISAN, DBTs; Indirect: subsidized power, fertilizer subsidies via NBS, canal irrigation, MSP procurement). Connects domestic welfare imperatives with international trade law under the WTO Agreement on Agriculture (Amber Box vs Green Box limits, the 10% de minimis ceiling, and the Bali Peace Clause).',
              coreKeyTakeaway: 'High-scoring GS-III answers demonstrate command of exact technical terminology, budgetary mechanisms, and international treaty nuances.'
            },
            {
              paperTitle: 'General Studies IV: Ethics (Paper V)',
              paperCode: 'GS-IV',
              year: '2023',
              marks: '10 Marks · 150 Words',
              questionText: 'What does ethics seek to promote in human life? Why is it all the more important in civil services?',
              testingDimensions: ['Ethical Conceptualization', 'Public Service Values', 'Application to Discretionary Power', 'Moral Leadership'],
              testingAnalysis: 'Tests whether the candidate understands that ethics in public administration is not merely personal virtue, but an institutional safeguard. Civil servants wield immense statutory discretion without direct commercial market feedback. Ethics prevents abuse of power, ensures empathy for voiceless citizens, upholds the 7 Nolan Principles, and preserves constitutional morality.',
              coreKeyTakeaway: 'Distinguish between personal morality and administrative ethics. Use real examples of civil service integrity (e.g. SR Sankaran, TN Seshan).'
            },
            {
              paperTitle: 'Optional Paper I (Disciplinary Theory)',
              paperCode: 'Optional I',
              year: '2023',
              marks: '20 Marks · PSIR / Sociology / Geography',
              questionText: 'Examine the Gramscian concept of "Hegemony" and demonstrate its relevance in understanding contemporary ideological soft power.',
              testingDimensions: ['Theoretical Mastery', 'Textual Authority', 'Philosophical Lineage', 'Contemporary Application'],
              testingAnalysis: 'Tests university-honours-level conceptual rigor. How does Antonio Gramsci depart from classical Marxist economic reductionism by highlighting Civil Society (the superstructure of schools, media, church) as the site of ideological consent? Evaluates how modern superpowers deploy cultural hegemony, digital platforms, and institutional soft power.',
              coreKeyTakeaway: 'Optional papers are not General Studies. They demand scholarly terminology, primary thinker citations, and advanced academic framing.'
            },
            {
              paperTitle: 'Optional Paper II (Applied Disciplinary Context)',
              paperCode: 'Optional II',
              year: '2023',
              marks: '20 Marks · Applied Disciplinary',
              questionText: 'Discuss the evolution of Indian foreign policy from "Non-Alignment" to "Multi-Alignment". What are the strategic trade-offs involved?',
              testingDimensions: ['Historical Continuity vs Rupture', 'Strategic Analysis', 'Trade-off Evaluation', 'Geopolitical Insight'],
              testingAnalysis: 'Tests applied disciplinary scholarship in Indian context. Traces Non-Alignment 1.0 (Nehruvian strategic autonomy during the Cold War) to 21st-century issue-based multi-alignment (simultaneous engagement with Quad, BRICS, SCO, and Global South). Evaluates trade-offs: balancing strategic autonomy with defense interoperability with the West.',
              coreKeyTakeaway: 'Optional Paper II tests your ability to apply core theoretical tools to contemporary Indian institutional and geopolitical challenges.'
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 6: Qualifying Papers — Don't Skip Them - REQ 4
    // -------------------------------------------------------------
    {
      id: 'upsc-qualifying-papers',
      title: 'Qualifying Papers: Don’t Skip Them',
      shortName: 'Qualifying Papers',
      conductingAuthority: 'UPSC CSE Notification',
      badge: 'Qualifying ≠ Ignorable',
      description: 'Detailed analysis of Paper A (Indian Language) and Paper B (English Comprehension) and their decisive screening role.',
      slides: [
        {
          id: 'qualifying-english-slide',
          title: 'Paper B: English — Qualifying Paper',
          subtitle: 'The 300-mark mandatory English literacy requirement',
          kicker: 'Compulsory Paper B · Req 4',
          layout: 'stages-process',
          mainProse: [
            'As explicitly specified in the official UPSC CSE notification, Paper B is designed to test the candidate’s ability to read and understand serious discursive prose, and to express ideas clearly and correctly in English.'
          ],
          stages: [
            {
              stepNumber: '01',
              title: 'Reading Comprehension (75 Marks)',
              badge: 'Critical Analysis',
              description: 'Unseen analytical passage followed by short descriptive questions testing precise understanding, inference, and textual retention.'
            },
            {
              stepNumber: '02',
              title: 'Precis Writing (75 Marks)',
              badge: 'Executive Synthesis',
              description: 'Condensing a 1000-word official prose passage to exactly one-third of its length on a specialized precis grid sheet, capturing all core ideas without repeating language.'
            },
            {
              stepNumber: '03',
              title: 'Usage & Vocabulary (50 Marks)',
              badge: 'Language Mechanics',
              description: 'Sentence corrections, fill in the blanks with appropriate prepositions, forming antonyms/synonyms, verb idioms, and rewriting sentences according to grammatical directions.'
            },
            {
              stepNumber: '04',
              title: 'Short Essay (100 Marks)',
              badge: 'Expository Writing',
              description: 'A 600-word structured essay on a contemporary socio-cultural or economic topic testing linguistic balance, coherence, and paragraph transitions.'
            }
          ]
        },
        {
          id: 'qualifying-indian-language-slide',
          title: 'Paper A: Indian Language — Qualifying Paper',
          subtitle: 'Mandatory testing in any 8th Schedule language of India',
          kicker: 'Compulsory Paper A · Req 4',
          layout: 'stages-process',
          mainProse: [
            'Candidates must choose one Indian language from the 22 languages recognized under the 8th Schedule of the Constitution (e.g. Kannada, Hindi, Tamil, Telugu, Marathi, Sanskrit, Bengali, etc.).'
          ],
          stages: [
            {
              stepNumber: '01',
              title: 'Reading Comprehension (60 Marks)',
              badge: 'Vernacular Literacy',
              description: 'Descriptive questions based on an unseen literary or social passage in the chosen Indian language.'
            },
            {
              stepNumber: '02',
              title: 'Precis Writing (60 Marks)',
              badge: 'Structured Summary',
              description: 'Condensing an official or literary vernacular passage to one-third on a formatted grid sheet.'
            },
            {
              stepNumber: '03',
              title: 'Usage & Vocabulary (40 Marks)',
              badge: 'Grammar & Idioms',
              description: 'Idiomatic expressions, proverbs, sandhi/samasa rules, and vocabulary in the chosen language.'
            },
            {
              stepNumber: '04',
              title: 'Short Essay (100 Marks)',
              badge: 'Vernacular Composition',
              description: 'A 600-word thematic essay written in the vernacular script testing fluency and narrative structure.'
            },
            {
              stepNumber: '05',
              title: 'Bidirectional Translation (40 Marks)',
              badge: 'Translation Mastery',
              description: 'Translating English to Indian Language (20 Marks) and Indian Language to English (20 Marks), testing bilingual administrative agility.'
            }
          ]
        },
        {
          id: 'qualifying-not-ignorable-slide',
          title: 'Qualifying ≠ Ignorable: The Invisible Trap',
          subtitle: 'Why hundreds of serious candidates are eliminated before merit papers are even opened',
          kicker: 'Strategic Warning · Req 4',
          layout: 'editorial-concept',
          highlightQuote: 'If a candidate fails to score 25% (75/300) in either Paper A or Paper B, their remaining 7 merit papers—Essay, GS 1-4, Optionals—are NOT evaluated at all.',
          mainProse: [
            'The UPSC Civil Services Examination rules contain a strict statutory provision: Papers A and B are of qualifying nature only, but clearance is a mandatory prerequisite.',
            'Every single year, dozens of candidates with potential top-rank scores in General Studies and Optional subjects find their names missing from the interview call list simply because they scored 72 out of 300 in English or neglected regional script writing in their Indian Language paper.',
            'English medium aspirants frequently struggle with Indian Language precis and vernacular vocabulary due to years of disuse, while non-English background candidates risk stumbling on English sentence re-writing and precis rules.'
          ],
          bulletPoints: [
            { label: 'Minimum 25% Threshold', text: 'You must secure at least 75 marks out of 300 in both Paper A and Paper B. There is no category relaxation for qualifying papers.' },
            { label: 'Evaluation Sequence', text: 'UPSC evaluators grade Papers A and B first. Only candidates who successfully cross both thresholds have their merit sheets unlocked for evaluation.' },
            { label: 'Prudent Strategy', text: 'Dedicate 10-15 hours solving 3 past years’ PYQs for English precis and language translation 4 weeks prior to Mains.' }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 7: "What Does a UPSC Answer Look Like?" - REQ 5
    // -------------------------------------------------------------
    {
      id: 'upsc-answer-writing-guide',
      title: 'What Does a UPSC Answer Look Like?',
      shortName: 'Answer Writing Framework',
      conductingAuthority: 'Pedagogical Standards & Evaluation Insights',
      badge: 'Answer Blueprint · Req 5',
      description: 'Comparative breakdown of weak vs structured answers across General Studies, Ethics Case Studies, and Philosophical Essays.',
      slides: [
        {
          id: 'answer-comparison-gs',
          title: 'GS Answer Writing: Basic vs Structured',
          subtitle: 'Visual comparison of how structured multi-dimensionality transforms an ordinary response',
          kicker: 'GS Blueprint · Req 5',
          layout: 'answer-comparison',
          answerComparison: {
            domainBadge: 'General Studies Paper II · Governance & Social Justice',
            marksDuration: '15 Marks · 250 Words · Target Time: 11 Mins',
            question: 'Examine the role of Panchayati Raj Institutions (PRIs) in empowering rural women in India. What structural challenges continue to hinder their effective leadership?',
            weakApproach: {
              title: 'Basic / Superficial Answer',
              description: 'Generic, essayistic, lacking constitutional backing, empirical data, or concrete administrative insights.',
              sampleSnippet: 'Women in rural areas have faced discrimination for years. Panchayats give them a chance to participate in politics. Women sarpanches look after drinking water, cleanliness, and primary schools. But their husbands interfere in their work and people in villages do not respect women leaders. The government should educate rural men and give more powers to women sarpanches.',
              flaws: [
                'No constitutional article cited (misses Article 243D)',
                'Zero empirical statistics or committee references',
                'Colloquial terminology ("husbands interfere" instead of "Pati Panchayat / Proxy representation")',
                'Unstructured wall of text without clear headings or sub-dimensions',
                'Vague, simplistic conclusion without an actionable policy way forward'
              ]
            },
            structuredApproach: {
              title: 'Structured UPSC Model Answer',
              description: 'Grounded in constitutional provisions, academic studies, multi-dimensional impact, structural critiques, and institutional solutions.',
              sections: [
                {
                  title: '1. Constitutional Introduction',
                  headingTag: 'Constitutional Context',
                  content: 'The 73rd Constitutional Amendment Act, 1992, through Article 243D, mandated 33% reservation for women in PRIs (with 20+ states now expanding this to 50%), creating the world’s largest cohort of over 1.4 million Elected Women Representatives (EWRs).'
                },
                {
                  title: '2. Multi-Dimensional Governance Impact',
                  headingTag: 'Empirical Evidence',
                  content: 'A. Socio-Fiscal Prioritization: Studies by Duflo & Chattopadhyay show female sarpanches invest significantly higher public funds in drinking water, sanitation, and child immunisation. B. Social Norm Shifting: Reduces female school dropout rates and enhances reporting of gender-based crimes in female-led panchayats.'
                },
                {
                  title: '3. Structural Challenges Hindering Leadership',
                  headingTag: 'Critique & Root Causes',
                  content: 'A. Societal / Proxy Leadership: The pervasive phenomenon of ‘Sarpanch Pati’ / ‘Pradhan Pati’ relegating elected women to nominal figureheads. B. Institutional 3Fs Deficit: Lack of devolved Funds, Functions, and Functionaries leaving EWRs dependent on local bureaucracy. C. Asymmetric Information: Lower digital literacy and exclusion from technical land revenue and budget meetings.'
                },
                {
                  title: '4. Strategic Way Forward & Best Practices',
                  headingTag: 'Actionable Roadmap',
                  content: 'A. Institutional Convergence: Replicate Kerala’s Kudumbashree model linking Self-Help Groups (SHGs) with Gram Panchayats. B. Mandatory Disqualification: Enact statutory penal provisions against male relatives usurping official duties. C. Capacity Building: Institutionalize ‘Panchayat Karmi’ leadership bootcamps via SIRD.'
                },
                {
                  title: '5. Balanced Conclusion',
                  headingTag: 'Constitutional Morality',
                  content: 'Political representation is a necessary catalyst, but converting formal presence into substantive executive autonomy is essential to realize SDG 5 (Gender Equality) and the constitutional dream of democratic decentralization.'
                }
              ]
            },
            whyItWorks: [
              { dimension: 'Constitutional Anchoring', explanation: 'Directly opens with Article 243D and quantitative data (1.4 million EWRs), establishing immediate domain authority.' },
              { dimension: 'Empirical Grounding', explanation: 'Cites authoritative research (Esther Duflo) to validate claims rather than relying on personal opinions.' },
              { dimension: 'Professional Terminology', explanation: 'Uses precise public policy vocabulary: 3Fs deficit, proxy representation, institutional convergence, SDG 5.' },
              { dimension: 'Actionable Solutions', explanation: 'Provides an existing state benchmark (Kerala Kudumbashree) showing real administrative knowledge.' }
            ]
          }
        },
        {
          id: 'answer-comparison-ethics',
          title: 'Ethics Answer Writing: Situational Case Study',
          subtitle: 'Resolving complex administrative dilemmas with ethical balance and procedural propriety',
          kicker: 'GS-IV Blueprint · Req 5',
          layout: 'editorial-concept',
          highlightQuote: 'An ethics answer must never choose between pure idealism and cynical compromise. It must discover the path of constitutional courage within legal frameworks.',
          mainProse: [
            'In GS Paper IV, theoretical definitions carry minimal marks without real-life contextualization. In case studies, examiners look for an administrator who can navigate conflicting loyalties without buckling under political pressure.',
            'A weak response reacts emotionally: "I will immediately resign" or "I will obey the political boss because I have a family to support". Both approaches fail basic administrative ethics.',
            'A structured answer follows an established decision-making algorithm:'
          ],
          bulletPoints: [
            { label: 'Step 1: Stakeholder Mapping', text: 'Explicitly identify all affected actors: the public, vulnerable citizens, departmental contractors, political executive, rule of law, and your own moral conscience.' },
            { label: 'Step 2: Ethical Dilemmas Identified', text: 'Clearly name the ethical tensions: Public Safety vs Political Pressure; Rule of Law vs Organizational Loyalty; Transparency vs Official Secrecy.' },
            { label: 'Step 3: Evaluation of Options', text: 'Formulate 3 distinct courses of action. For each, state its merits and demerits before demonstrating why intermediate cynical or overly reckless choices fail.' },
            { label: 'Step 4: Justified Course of Action', text: 'Present a phased, legally sound action plan utilizing statutory oversight, independent expert audits, formal written notes on file, and institutional whistleblowing mechanisms.' }
          ]
        },
        {
          id: 'answer-comparison-essay',
          title: 'Essay Writing: The Multi-Dimensional Wheel',
          subtitle: 'Transforming philosophical prompts into comprehensive civilizational perspectives',
          kicker: 'Essay Blueprint · Req 5',
          layout: 'editorial-concept',
          highlightQuote: 'A top-scoring essay does not merely agree with the topic. It engages with the prompt as an intellectual dialogue across time, geographies, and human disciplines.',
          mainProse: [
            'Since 2019, UPSC has almost entirely eliminated factual, policy-oriented essay prompts in favor of abstract, philosophical statements (e.g. "Poets are the unacknowledged legislators of the world", "Ships do not sink because of water around them, ships sink because of water that gets into them").',
            'To write 1000–1200 words on an abstract thought without repeating oneself, top scorers use the Multi-Dimensional Analytical Framework.'
          ],
          bulletPoints: [
            { label: 'PESTLE Matrix', text: 'Explore the prompt through Political, Economic, Sociological, Technological, Legal, Environmental, and Ethical lenses.' },
            { label: 'Temporal Arc (Past → Present → Future)', text: 'Trace historical precedents (ancient Indian philosophy, Renaissance, Industrial revolution) to modern dilemmas (AI governance, climate summits) and future civilizational trajectories.' },
            { label: 'Scale Spectrum (Micro → Macro)', text: 'Analyze the impact at the level of the Individual Mind → Family & Society → Nation-State → Global International Community.' },
            { label: 'Hegelian Dialectic', text: 'Develop Thesis (validating the core truth) → Antithesis (exploring nuances, counter-arguments, and boundary conditions) → Synthesis (harmonizing the contradiction into administrative wisdom).' }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 8: Complete UPSC CSE Syllabus - REQ 6
    // -------------------------------------------------------------
    {
      id: 'upsc-complete-syllabus',
      title: 'Complete UPSC CSE Syllabus',
      shortName: 'Official Syllabus Landscape',
      conductingAuthority: 'Official UPSC CSE Notification Repository',
      badge: 'Uncompressed Official Themes · Req 6',
      description: 'The uncompressed official syllabus for both Prelims and all Mains papers alongside major themes and actual student study areas.',
      slides: [
        {
          id: 'syllabus-prelims-deep',
          title: 'Complete Prelims Syllabus (GS-I & CSAT)',
          subtitle: 'Official syllabus mandate vs what students actually master',
          kicker: 'Prelims Curriculum · Req 6',
          layout: 'papers-table',
          papers: [
            {
              name: 'General Studies Paper I (Official Syllabus)',
              type: 'Merit',
              marks: '200 Marks (100 Questions)',
              duration: '2 Hours',
              description: 'Screening paper determining Mains qualification cutoff.',
              subjects: [
                'Current events of national and international importance: Bilateral accords, scientific breakthroughs, environmental summits.',
                'History of India and Indian National Movement: Ancient social structures, medieval art/architecture, 1857-1947 freedom struggle.',
                'Indian and World Geography: Physical geomorphology, climatology, oceanography, economic resources distribution.',
                'Indian Polity and Governance: Constitution, political system, Panchayati Raj, public policy, rights issues.',
                'Economic and Social Development: Sustainable development, poverty, inclusion, demographics, social sector initiatives.',
                'General issues on Environmental Ecology, Bio-diversity and Climate Change: Protected area networks, environmental legislation.',
                'General Science: Everyday scientific principles, space missions, biotechnology, defense technology, IT.'
              ]
            },
            {
              name: 'CSAT Paper II (Official Syllabus)',
              type: 'Qualifying',
              marks: '200 Marks (80 Questions)',
              duration: '2 Hours',
              description: 'Mandatory qualifying test requiring 33% (66 marks).',
              subjects: [
                'Comprehension: Long and short passages testing critical inference, authorial assumptions, and structural logic.',
                'Interpersonal skills including communication skills.',
                'Logical reasoning and analytical ability: Syllogisms, arrangements, blood relations, deductive chains.',
                'Decision making and problem solving: Administrative situational scenarios.',
                'General mental ability: Coding-decoding, series, puzzles, directional tests.',
                'Basic numeracy (numbers and their relations, orders of magnitude, etc. - Class X level).',
                'Data interpretation (charts, graphs, tables, data sufficiency - Class X level).'
              ]
            }
          ]
        },
        {
          id: 'syllabus-mains-gs1-gs2',
          title: 'Complete Mains Syllabus: GS-I & GS-II',
          subtitle: 'Official syllabus themes and core academic coverage',
          kicker: 'Mains GS 1 & 2 · Req 6',
          layout: 'papers-table',
          papers: [
            {
              name: 'General Studies I: Heritage, History, Geography & Society',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Paper II of Mains written examination.',
              subjects: [
                'Indian Culture: Art forms, literature, and architecture from ancient to modern times.',
                'Modern Indian History: Significant events, personalities, and issues from the middle of the 18th century until present.',
                'The Freedom Struggle: Various stages, important contributors, and contributions from different parts of the country.',
                'Post-Independence Consolidation: Reorganization within the country, tribal integration, linguistic states.',
                'History of the World: Events from 18th century such as Industrial Revolution, World Wars, redrawing of national boundaries, decolonization, political philosophies (communism, capitalism, socialism).',
                'Salient Features of Indian Society: Diversity of India, role of women and women’s organizations, population and associated issues, poverty and developmental issues, urbanization.',
                'Effects of Globalization on Indian Society: Social empowerment, communalism, regionalism, and secularism.',
                'Salient Features of World’s Physical Geography: Distribution of key natural resources across the world including South Asia and Indian sub-continent.',
                'Important Geophysical Phenomena: Earthquakes, tsunamis, volcanic activity, cyclones, geographical features and their location.'
              ]
            },
            {
              name: 'General Studies II: Governance, Constitution, Polity & IR',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Paper III of Mains written examination.',
              subjects: [
                'Indian Constitution: Historical underpinnings, evolution, features, amendments, significant provisions, basic structure.',
                'Functions and Responsibilities of the Union and the States: Issues and challenges pertaining to federal structure, devolution of powers and finances up to local levels.',
                'Separation of Powers: Dispute redressal mechanisms and institutions, comparison of Indian constitutional scheme with others.',
                'Parliament and State Legislatures: Structure, functioning, conduct of business, powers & privileges and issues arising out of these.',
                'Executive and Judiciary: Ministries & departments of Government, pressure groups, formal/informal associations.',
                'Salient Features of Representation of People’s Act: Electoral reforms, political finance, criminalization of politics.',
                'Appointment to Constitutional Posts: Powers, functions and responsibilities of various Constitutional Bodies.',
                'Statutory, Regulatory and Quasi-Judicial Bodies: NITI Aayog, NHRC, CVC, CBI, tribunals.',
                'Welfare Schemes for Vulnerable Sections: Performance of schemes, mechanisms, laws, institutions constituted for vulnerable sections.',
                'Issues Relating to Health, Education, Human Resources: Poverty and hunger indices.',
                'Important Aspects of Governance: Transparency and accountability, e-governance, citizen charters, institutional measures.',
                'Role of Civil Services in a Democracy: Administrative reforms, neutrality vs commitment.',
                'India and Its Neighborhood: Bilateral, regional and global groupings and agreements involving India.',
                'Effect of Policies of Developed & Developing Countries: Indian diaspora, international institutions, agencies, and fora.'
              ]
            }
          ]
        },
        {
          id: 'syllabus-mains-gs3-gs4',
          title: 'Complete Mains Syllabus: GS-III & GS-IV',
          subtitle: 'Economic development, science, security, ethics, and case studies',
          kicker: 'Mains GS 3 & 4 · Req 6',
          layout: 'papers-table',
          papers: [
            {
              name: 'General Studies III: Technology, Economy, Security & Ecology',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Paper IV of Mains written examination.',
              subjects: [
                'Indian Economy: Mobilization of resources, growth, development, employment, inclusive growth.',
                'Government Budgeting: Fiscal policy, revenue vs capital expenditure, FRBM targets.',
                'Major Crops & Cropping Patterns: Irrigation types, storage, transport and marketing of agricultural produce, e-technology in aid of farmers.',
                'Farm Subsidies and MSP: Public Distribution System (PDS) objectives, functioning, limitations, food security, buffer stocks.',
                'Food Processing Industries in India: Scope, significance, location, upstream and downstream requirements.',
                'Land Reforms in India: Tenancy reforms, land ceiling, land records digitization.',
                'Effects of Liberalization: Changes in industrial policy and their effects on industrial growth.',
                'Infrastructure: Energy, ports, roads, airports, railways, logistics policy.',
                'Investment Models: PPP models, BOT, EPC, hybrid annuity.',
                'Science and Technology: Developments and their applications and effects in everyday life, achievements of Indians in science.',
                'Indigenization of Technology: Developing new technology, IT, Space, Computers, robotics, nano-technology, bio-technology, IPR.',
                'Conservation & Environmental Pollution: Degradation, environmental impact assessment (EIA).',
                'Disaster and Disaster Management: Vulnerability mapping, Sendai framework, NDMA guidelines.',
                'Linkages between Development and Spread of Extremism: Left-Wing Extremism (LWE).',
                'Internal Security Challenges: Role of external state and non-state actors, cyber security, money laundering.',
                'Border Security: Management of border areas, security forces and their mandate (BSF, ITBP, Assam Rifles).'
              ]
            },
            {
              name: 'General Studies IV: Ethics, Integrity & Aptitude',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Paper V of Mains written examination.',
              subjects: [
                'Ethics and Human Interface: Essence, determinants and consequences of Ethics in human actions; dimensions of ethics; ethics in private and public relationships.',
                'Human Values: Lessons from the lives and teachings of great leaders, reformers and administrators; role of family, society and educational institutions in inculcating values.',
                'Attitude: Content, structure, function; its influence and relation with thought and behaviour; moral and political attitudes; social influence and persuasion.',
                'Aptitude and Foundational Values for Civil Service: Integrity, impartiality and non-partisanship, objectivity, dedication to public service, empathy, tolerance and compassion towards the weaker sections.',
                'Emotional Intelligence: Concepts, and their utilities and application in administration and governance.',
                'Contributions of Moral Thinkers and Philosophers: Western and Indian moral philosophers.',
                'Public/Civil Service Values and Ethics in Public Administration: Status and problems; ethical concerns and dilemmas in government and private institutions; laws, rules, regulations and conscience as sources of ethical guidance; accountability and ethical governance; strengthening of ethical and moral values in governance; ethical issues in international relations and funding; corporate governance.',
                'Probity in Governance: Concept of public service; philosophical basis of governance and probity; information sharing and transparency in government, Right to Information, Codes of Ethics, Codes of Conduct, Citizen’s Charters, Work culture, Quality of service delivery, Utilization of public funds, challenges of corruption.',
                'Case Studies on the Above Issues: Complex administrative dilemma scenarios.'
              ]
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 9: Optional Subjects — Complete Landscape - REQ 7
    // -------------------------------------------------------------
    {
      id: 'upsc-optional-landscape',
      title: 'UPSC Optional Subjects: The Complete Landscape',
      shortName: 'Optional Subjects',
      conductingAuthority: 'UPSC CSE Regulations',
      badge: '500 Marks · 51 Disciplines · Req 7',
      description: 'The complete official catalogue of 51 approved optional subjects categorized into Humanities, Sciences, Engineering, and Literatures.',
      slides: [
        {
          id: 'optional-complete-list',
          title: 'The Complete Official Optional Disciplines',
          subtitle: 'Categorized across Humanities, Sciences, Engineering, and Indian Literatures',
          kicker: 'UPSC CSE · Optional Directory · Req 7',
          layout: 'editorial-concept',
          highlightQuote: 'Optional Subjects contribute 500 marks out of the 1750 written merit total (28.5%). Your choice of optional is often the single most decisive factor in determining final selection and service rank.',
          mainProse: [
            'Candidates may choose any ONE optional subject from the official list prescribed in the UPSC CSE notification. The subject is evaluated across two conventional descriptive papers (Paper I and Paper II), each carrying 250 marks for a total of 500 marks.',
            'Crucially, there is NO restriction requiring a candidate to pick an optional from their college degree discipline. An engineer may select Political Science, Sociology, or Kannada Literature; an arts graduate may choose Geography or Anthropology.'
          ],
          bulletPoints: [
            { label: 'Humanities & Social Sciences (10 Subjects)', text: 'Public Administration, Political Science & International Relations (PSIR), Sociology, Geography, History, Philosophy, Psychology, Anthropology, Economics, Law.' },
            { label: 'Sciences & Agriculture (9 Subjects)', text: 'Mathematics, Physics, Chemistry, Statistics, Botany, Zoology, Geology, Agriculture, Animal Husbandry & Veterinary Science.' },
            { label: 'Engineering Disciplines (3 Subjects)', text: 'Civil Engineering, Mechanical Engineering, Electrical Engineering.' },
            { label: 'Commerce & Medical (3 Subjects)', text: 'Commerce & Accountancy, Management, Medical Science.' },
            { label: 'Literature of Languages (26 Languages)', text: 'Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santhali, Sindhi, Tamil, Telugu, Urdu, and English.' }
          ]
        },
        {
          id: 'optional-how-it-works',
          title: 'How Optional Works: Structure & Strategy',
          subtitle: 'Paper I (Foundational Theory) + Paper II (Applied Indian Context) = 500 Marks',
          kicker: 'Optional Mechanics · Req 7',
          layout: 'papers-table',
          papers: [
            {
              name: 'Optional Paper I: Theoretical Foundations',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Focuses on the classical and contemporary theoretical paradigms, core concepts, academic thinkers, and analytical models of the discipline.',
              subjects: [
                'In-depth university honours / master’s degree standard',
                'Tests conceptual terminology, primary thinker citations, and scholarly debates',
                'Eight questions divided into Section A and Section B; candidate attempts 5 questions (Q1 and Q5 compulsory)'
              ]
            },
            {
              name: 'Optional Paper II: Applied & Indian Context',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Focuses on applying the theoretical principles from Paper I to the Indian institutional, social, geographical, or policy realities.',
              subjects: [
                'Integration of Indian policy developments, constitutional debates, or case studies',
                'Demonstrates candidate’s capacity to deploy academic discipline to solve real-world public governance problems',
                'Same 5-question format out of 8, demanding high analytical balance'
              ]
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 10: IFoS Deep Dive - REQ 16
    // -------------------------------------------------------------
    {
      id: 'upsc-ifos-deepdive',
      title: 'UPSC Indian Forest Service (IFoS): Deep Dive',
      shortName: 'IFoS Deep Dive',
      conductingAuthority: 'Union Public Service Commission · MoEFCC',
      badge: 'All India Service · Art. 312 · Req 16',
      description: 'The definitive examination and career guide to the third constitutional All India Service alongside IAS and IPS.',
      slides: [
        {
          id: 'ifos-mandate-structure',
          title: 'Indian Forest Service: Mandate & Examination Architecture',
          subtitle: 'Screening via joint Prelims, followed by independent written Mains and 300-mark interview',
          kicker: 'IFoS Structure · Req 16',
          layout: 'papers-table',
          papers: [
            {
              name: 'Stage 1: Preliminary Screening (Joint with CSE)',
              type: 'Screening',
              marks: '200 Marks (GS-I determines Cutoff)',
              duration: '2 Hours GS-I + 2 Hours CSAT',
              description: 'Appears for the exact same UPSC CSE Prelims papers on the same day. However, because IFoS has only ~110–150 annual vacancies, the IFoS Prelims Cutoff is typically 15–20 marks higher than CSE (e.g. 95–105 marks).'
            },
            {
              name: 'Stage 2: Written Mains Examination',
              type: 'Merit',
              marks: '1400 Marks Total (6 Papers)',
              duration: '3 Hours per paper',
              description: 'Paper 1: General English (300 Marks) · Paper 2: General Knowledge (300 Marks) · Papers 3 & 4: Optional Subject 1 (200 + 200 Marks) · Papers 5 & 6: Optional Subject 2 (200 + 200 Marks).'
            },
            {
              name: 'Stage 3: Personality Test (Interview)',
              type: 'Merit',
              marks: '300 Marks',
              duration: 'Board Interview at Dholpur House',
              description: 'Carries 300 marks (compared to 275 marks in CSE). Assesses scientific aptitude, leadership, physical endurance suitability, and environmental balance. Total Merit: 1700 Marks.'
            }
          ]
        },
        {
          id: 'ifos-optionals-rules',
          title: 'IFoS Optional Subjects & Permissible Combinations',
          subtitle: 'Mandatory science/engineering background and strict combination restrictions',
          kicker: 'IFoS Subject Rules · Req 16',
          layout: 'editorial-concept',
          highlightQuote: 'Unlike CSE where any graduate can pick any optional, IFoS candidates MUST hold a degree in Science, Math, or Engineering, and MUST choose TWO science optionals.',
          mainProse: [
            'Permissible Optionals in IFoS: Agriculture, Forestry, Animal Husbandry & Veterinary Science, Botany, Chemistry, Chemical Engineering, Civil Engineering, Geology, Mathematics, Mechanical Engineering, Physics, Statistics, Zoology.',
            'Crucially, UPSC enforces strict PROHIBITED COMBINATIONS to prevent unfair domain overlap: Candidates CANNOT combine Agriculture with Forestry; Agriculture with Animal Husbandry; Chemistry with Chemical Engineering; Mathematics with Statistics; or more than one Engineering discipline.'
          ],
          bulletPoints: [
            { label: 'Popular High-Scoring Pairs', text: 'Forestry + Geology; Forestry + Agriculture (not permitted together, so Forestry + Botany or Forestry + Zoology); Geology + Mathematics; Mechanical Engg + Forestry.' },
            { label: 'Physical Walking Test', text: 'Mandatory walking endurance test conducted after interview: 25 km in 4 hours for male candidates; 14 km in 4 hours for female candidates, along with strict chest and height standards.' }
          ]
        },
        {
          id: 'ifos-3year-analysis',
          title: 'IFoS 3-Year Cutoff & Marks Patterns',
          subtitle: 'Official cutoff benchmarks across Prelims, Mains, and Final Selection',
          kicker: 'IFoS Empirical Analysis · Req 16',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'Prelims Filter',
              title: 'Joint Prelims Cutoff Gap',
              badge: 'Consistently 15–20 Marks > CSE',
              subtitle: 'The Toughest Prelims Filter in India',
              description: 'Because all CSE candidates with science degrees also tick IFoS, but vacancies are only ~140, the General cut-off consistently floats between 98 and 106 marks on GS Paper-I.',
              metrics: [{ label: 'CSE Gen Cutoff 2024', value: '87.98' }, { label: 'IFoS Gen Cutoff 2024', value: '~102.5' }]
            },
            {
              stepNumber: 'Mains Filter',
              title: 'Written Mains (1400 Marks)',
              badge: 'Qualifying Cutoff ~660–710',
              subtitle: 'Technical Scoring Advantage',
              description: 'Because science optionals (Forestry, Geology, Math) allow objective numerical and diagrammatic accuracy, top scorers frequently secure 140–160 in each 200-mark paper.',
              metrics: [{ label: 'Written Cutoff', value: '~680 / 1400' }, { label: 'Top Optional Score', value: '290 / 400' }]
            },
            {
              stepNumber: 'Final Merit',
              title: 'Final Rank (1700 Marks)',
              badge: 'Final Selection Cutoff ~940–980',
              subtitle: 'Personality Test Weightage (300 Marks)',
              description: 'Interview board heavily investigates environmental jurisprudence, local flora/fauna, forest policies, wildlife forensics, and field temperament.',
              metrics: [{ label: 'Final Gen Cutoff', value: '~955 / 1700' }, { label: 'Top Rank Total', value: '1080+' }]
            }
          ]
        },
        {
          id: 'ifos-life-and-work',
          title: 'Life of an IFoS Officer: Forest & Wildlife Administration',
          subtitle: 'Custodians of 24% of India’s landmass across territorial and wildlife divisions',
          kicker: 'IFoS Career Profile · Req 16',
          layout: 'career-pathway',
          careerPaths: [
            {
              role: 'Divisional Forest Officer (DFO - Territorial)',
              department: 'State Forest Department / Cadre',
              nature: 'Territorial Governance',
              description: 'Commands a Forest Division (spanning hundreds of square kilometers). Administers timber management, afforestation targets under CAMPA, anti-encroachment operations, working plan execution, and revenue generation.',
              imageUrl: '/images/ifos_forest_bungalow.jpg',
              imageCaption: 'Official Forest Rest House & 4x4 Patrol Gypsy in Tiger Reserve',
              hierarchy: ['Assistant Conservator of Forests (ACF)', 'Divisional Forest Officer (DFO)', 'Conservator of Forests (CF)', 'Chief Conservator of Forests (CCF)', 'Principal Chief Conservator of Forests (PCCF - Head of Forest Force)']
            },
            {
              role: 'Field Director / Wildlife Warden (National Parks & Tiger Reserves)',
              department: 'Wildlife Wing / National Tiger Conservation Authority (NTCA)',
              nature: 'Wildlife Conservation & Anti-Poaching',
              description: 'Leads iconic protected areas (e.g. Bandipur, Kaziranga, Corbett). Commands armed anti-poaching patrol forces, oversees drone surveillance, manages elephant and tiger corridors, and resolves human-wildlife conflict.',
              hierarchy: ['Deputy Director (Tiger Reserve)', 'Field Director (Tiger Reserve / CF Rank)', 'Chief Wildlife Warden (CWLW of State)', 'PCCF (Wildlife)']
            },
            {
              role: 'Central Deputation & Global Environmental Leadership',
              department: 'Ministry of Environment, Forest & Climate Change (MoEFCC)',
              nature: 'Policy & Global Treaties',
              description: 'Serves at Wildlife Crime Control Bureau (WCCB), Wildlife Institute of India (WII), Forest Survey of India (FSI), or represents India at COP climate and biodiversity summits.',
              hierarchy: ['Assistant Inspector General (AIG)', 'Deputy Inspector General (DIG)', 'Inspector General of Forests (IGF)', 'Director General of Forests (DG Forests, Govt of India)']
            }
          ]
        }
      ]
    }
  ]
};
