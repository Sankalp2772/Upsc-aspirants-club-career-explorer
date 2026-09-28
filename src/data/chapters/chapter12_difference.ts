import { PresentationChapter } from '../../types/presentation';

export const chapter12_difference: PresentationChapter = {
  id: 'see-the-difference',
  chapterNumber: '12',
  title: 'See the Difference: Four Distinct Career Journeys',
  shortTitle: 'See the Difference',
  description: 'Not a comparison table. Four separate, sovereign journeys from examination hall to administrative leadership.',
  iconName: 'Compass',
  accent: '#10B981',
  sections: [
    {
      id: 'four-distinct-journeys',
      title: 'Four Distinct Pathways of Indian Public Service',
      shortName: 'Four Journeys',
      conductingAuthority: 'Constitutional & Statutory Career Systems',
      badge: 'Intuitive Trajectories · Req 20',
      description: 'Understanding the distinct ethos, institutional environments, and lifetime missions of UPSC CSE, IFoS, ESE, and KAS.',
      slides: [
        {
          id: 'see-difference-prologue',
          title: 'See the Difference: One Nation, Four Sovereign Callings',
          subtitle: 'Why government leadership is not a generic monolith, but specialized evolutionary journeys',
          kicker: 'Strategic Epilogue · Req 20',
          layout: 'editorial-concept',
          highlightQuote: 'Too many students treat government exams as interchangeable lotteries. In reality, each examination inducts you into an entirely distinct way of living, thinking, and serving the Republic.',
          mainProse: [
            'Throughout this presentation, we have deconstructed the architectural details of India’s premier competitive recruitment frameworks.',
            'Now, we strip away coaching noise and tabular comparisons to observe the four major examinations as what they truly are: four separate lifespans of public service.',
            'Whether managing 3 million citizens as a District Magistrate, safeguarding tiger reserves as an IFoS Conservator, building mega-railways as an ESE Chief Engineer, or solving grassroots land disputes as a KAS Assistant Commissioner—each path demands its own unique temperament, intellect, and courage.'
          ],
          keyTakeaways: [
            'UPSC CSE: Generalist constitutional policy, executive magistracy, and national coordination',
            'IFoS: Custodianship of India’s 24% forest cover, wildlife preservation, and ecological security',
            'UPSC ESE: High-capital engineering execution, mega-infrastructure, defense bases, and technical authority',
            'KPSC KAS: Grassroots provincial leadership, land revenue adjudication, and state development execution'
          ]
        },
        {
          id: 'journey-upsc-cse',
          title: 'Journey 1: UPSC Civil Services (CSE)',
          subtitle: 'Examination → All India / Central Service → Mussoorie Induction → Sovereign Executive Administration',
          kicker: 'Trajectory 01 · UPSC CSE',
          layout: 'journey-flow',
          highlightQuote: 'The CSE officer operates at the intersection of law, politics, social justice, and executive power—the ultimate coordinator of public governance.',
          imageBanner: {
            url: '/images/ias_dm_bungalow.jpg',
            caption: 'District Magistrate Official Heritage Residence & Executive Command Vehicle with National Emblem Flag',
            tag: 'SOVEREIGN EXECUTIVE TRAJECTORY'
          },
          journeySteps: [
            {
              order: '01',
              stageName: 'THE EXAMINATION CRUCIBLE',
              subTitle: 'Prelims (GS + CSAT) → 1750M Mains (9 Papers) → 275M Interview',
              badge: 'All India Generalist Selection',
              summary: 'Tests multi-disciplinary perspective, ethical integrity, analytical writing under severe time pressure, and administrative composure.',
              keyActions: ['Filtering 10,00,000 applicants to ~1,000 recommendations', 'Evaluation across 4 GS papers, Essay, and Optional subject'],
              outcome: 'AIR Rank out of 2025 Marks'
            },
            {
              order: '02',
              stageName: 'SERVICE & CADRE DESTINY',
              subTitle: 'Allocation to IAS, IPS, IFS, IRS + State Cadre Allotment',
              badge: 'Presidential Appointment',
              summary: 'DoPT applies the 5-factor matrix (Rank + Category + Preferences + Medical + Vacancies) and assigns State Cadre via the 5-Zone policy.',
              keyActions: ['All India Service induction', 'Cadre roster binding for 35 years'],
              outcome: 'Allotment to Service & State Cadre'
            },
            {
              order: '03',
              stageName: 'THE ACADEMY APPRENTICESHIP',
              subTitle: 'LBSNAA Mussoorie (FC + Phase-I) → Bharat Darshan → 52-Wk District Training → Phase-II',
              badge: 'Charleville Estate Mussoorie',
              summary: 'Two years of intense professional forging: learning criminal law, land codes, regional vernacular, village immersion, and hands-on taluk magistracy.',
              keyActions: ['Inter-service camaraderie at LBSNAA', 'Independent charge as Tehsildar / BDO in allotted district'],
              outcome: 'Confirmed Sub-Divisional Magistrate'
            },
            {
              order: '04',
              stageName: 'LIFETIME OF GENERALIST GOVERNANCE',
              subTitle: 'SDM (Taluks) → DM / DC (Districts) → Commissioner → Chief Secretary / Union Cabinet Secretary',
              badge: 'District to Apex Policy',
              summary: 'Governing millions directly: managing law & order, running parliamentary elections, implementing welfare schemes, and drafting national economic policy.',
              keyActions: ['District Magistrate of 3 million citizens', 'Secretariat policy formulation across Union Ministries'],
              outcome: 'Supreme Administrative Authority of the Republic'
            }
          ]
        },
        {
          id: 'journey-ifos',
          title: 'Journey 2: Indian Forest Service (IFoS)',
          subtitle: 'Joint Prelims → 1400M Science Mains → IGNFA Dehradun → Forest & Wildlife Cadre Command',
          kicker: 'Trajectory 02 · IFoS',
          layout: 'journey-flow',
          highlightQuote: 'The IFoS officer walks where roads end: governing India’s wild landscapes, endangered fauna, tribal peripheries, and global climate commitments.',
          imageBanner: {
            url: '/images/ifos_forest_bungalow.jpg',
            caption: 'Official Forest Rest House & 4x4 Patrol Gypsy in Tiger Reserve Ecosystem',
            tag: 'WILDLIFE & ECOLOGICAL CUSTODIANSHIP'
          },
          journeySteps: [
            {
              order: '01',
              stageName: 'THE TECHNICAL SCREENING',
              subTitle: 'Joint CSE Prelims (Higher Cut-off) → 1400M Science Mains → 300M Interview',
              badge: 'Science & Engineering Mandate',
              summary: 'Requires bachelor’s degree in sciences or engineering. Demands solving advanced conventional papers in two technical science optionals (Forestry, Geology, Math, etc.).',
              keyActions: ['Surpassing high ~100+ Prelims cutoff', 'Rigorous 25 km / 14 km physical endurance walking test'],
              outcome: 'Selection to the 3rd All India Service'
            },
            {
              order: '02',
              stageName: 'IGNFA DEHRADUN & FIELD TRAINING',
              subTitle: 'Indira Gandhi National Forest Academy → National Park Attachments',
              badge: 'Dehradun Forest Campus',
              summary: 'Two years of specialized training in silviculture, forest inventory, wildlife forensics, GIS remote sensing, weapon handling, and wildlife conservation law.',
              keyActions: ['Trekking pristine biosphere reserves', 'Weapons training and anti-poaching operations'],
              outcome: 'Assistant Conservator of Forests (ACF)'
            },
            {
              order: '03',
              stageName: 'TERRITORIAL & WILDLIFE LEADERSHIP',
              subTitle: 'Divisional Forest Officer (DFO) → Field Director (Tiger Reserve) → Chief Wildlife Warden',
              badge: 'Field Cadre Command',
              summary: 'Commands an entire forest division or national park: managing armed forest guard squads, stopping wildlife poaching, securing elephant corridors, and mitigating man-animal conflict.',
              keyActions: ['Field command over thousands of sq. km.', 'Joint Forest Management with tribal fringe communities'],
              outcome: 'Ecological Sovereignty & Species Survival'
            },
            {
              order: '04',
              stageName: 'NATIONAL & GLOBAL ENVIRONMENTAL POLICY',
              subTitle: 'PCCF (Head of Forest Force) → MoEFCC → International Climate Negotiations',
              badge: 'Apex Forest Leadership',
              summary: 'Serves as Principal Chief Conservator of Forests (PCCF) heading the state forest force, directs national agencies (WCCB, NTCA, FSI), or represents India at UN climate and biodiversity COPs.',
              keyActions: ['CAMPA multi-thousand-crore afforestation funds', 'Global treaty formulation under Paris Agreement & CBD'],
              outcome: 'Preservation of India’s Natural Capital for Generations'
            }
          ]
        },
        {
          id: 'journey-ese',
          title: 'Journey 3: Engineering Services (ESE)',
          subtitle: 'Objective Prelims (500M) → Conventional Mains (600M) → Technical Interview → Executive Engineering Leadership',
          kicker: 'Trajectory 03 · UPSC ESE',
          layout: 'journey-flow',
          highlightQuote: 'The ESE officer does not shuffle paper; they erect steel, pour concrete, stabilize power grids, and engineer the strategic backbone of the nation.',
          journeySteps: [
            {
              order: '01',
              stageName: 'THE RIGOROUS TECHNICAL TEST',
              subTitle: 'Prelims (GS & Aptitude 200M + Tech 300M) → Mains (2 Conventional Papers 600M) → PT (200M)',
              badge: 'Pinnacle for Core Engineers',
              summary: 'Evaluates graduate engineers across Civil, Mechanical, Electrical, and Electronics & Telecommunication branches on deep mathematical problem-solving and engineering ethics.',
              keyActions: ['Mastering 10 non-technical aptitude domains', '6 hours of conventional descriptive engineering derivations'],
              outcome: 'Class 1 Gazetted Technical Commission'
            },
            {
              order: '02',
              stageName: 'CENTRAL ENGINEERING INDUCTION',
              subTitle: 'Allotment to CPWD, MES, CWES, Indian Naval Armament, CEA',
              badge: 'Departmental Training Academies',
              summary: 'One year of intensive techno-administrative training: public procurement codes (GFR), contract arbitration, life-cycle structural safety, and high-tech defense systems.',
              keyActions: ['Attachment to national mega-project sites', 'Statutory financial sanctioning protocols'],
              outcome: 'Assistant Executive Engineer (AEE)'
            },
            {
              order: '03',
              stageName: 'INFRASTRUCTURE FIELD COMMAND',
              subTitle: 'Executive Engineer (EE) → Superintending Engineer (SE) → Chief Engineer (Zone)',
              badge: 'Mega-Project Sanctioning',
              summary: 'Directly executes and sanctions multi-hundred-crore infrastructure: border tunnels, naval submarine bases, river dams, central hospitals, and presidential estates.',
              keyActions: ['Signing structural safety certificates', 'Commanding contractor execution and quality control'],
              outcome: 'Mastery of Public Civil & Defense Works'
            },
            {
              order: '04',
              stageName: 'APEX TECHNICAL POLICY OF THE UNION',
              subTitle: 'Director General (CPWD) / Engineer-in-Chief (MES) / Chairman (CWC) / Union Power Grid',
              badge: 'National Infrastructure Summit',
              summary: 'Heads premier engineering organizations of India, advising Union Cabinets on national dam safety, trans-continental transport corridors, and defense manufacturing.',
              keyActions: ['Directing organizations of 30,000+ technical personnel', 'Formulating national building & design standards (BIS/IRC)'],
              outcome: 'The Master Builders of Modern India'
            }
          ]
        },
        {
          id: 'journey-kpsc-kas',
          title: 'Journey 4: Karnataka Administrative Service (KPSC KAS)',
          subtitle: 'KPSC Prelims (400M) → 1250M Mains (5 Papers) → 25M Interview → Grassroots State Leadership',
          kicker: 'Trajectory 04 · KPSC KAS',
          layout: 'journey-flow',
          highlightQuote: 'The KAS officer is the frontline sovereign presence in Karnataka: resolving land disputes, commanding local disasters, and executing state policy at the doorstep of the citizen.',
          imageBanner: {
            url: '/images/vidhana_soudha_kas.jpg',
            caption: 'Vidhana Soudha, Bengaluru & State Leadership Executive Vehicle with Karnataka Emblem',
            tag: 'PROVINCIAL STATE LEADERSHIP'
          },
          journeySteps: [
            {
              order: '01',
              stageName: 'THE PROVINCIAL EXAMINATION CRUCIBLE',
              subTitle: 'Prelims (400M OMR) → Mains (1250M Descriptive) → Personality Test (25M)',
              badge: 'Corrected 1275-Mark Scheme',
              summary: 'Strictly separated from UPSC CSE. Tests deep awareness of Karnataka’s history, regional polity, state economy, rural development, and mandatory qualifying Kannada literacy.',
              keyActions: ['1250 Marks across Essay and 4 GS papers', 'Personality Test carries 25 Marks at Udyoga Soudha'],
              outcome: 'State Gazetted Merit List out of 1275 Marks'
            },
            {
              order: '02',
              stageName: 'ADMINISTRATIVE TRAINING INSTITUTE (ATI MYSURU)',
              subTitle: 'Foundational State Induction & District Field Attachment',
              badge: 'Chamundi Hills Campus Mysuru',
              summary: 'Induction training in Karnataka Civil Services Rules (KCSR), Karnataka Land Revenue Act (1964), state budget procedures, e-governance (Bhoomi, Kaveri), and field internships.',
              keyActions: ['Village stays across North and South Karnataka', 'Practical attachment with Sub-Divisional Magistrates'],
              outcome: 'Gazetted Probationer Confirmation'
            },
            {
              order: '03',
              stageName: 'GRASSROOTS REVENUE & POLICE LEADERSHIP',
              subTitle: 'Tehsildar (Taluk) → Assistant Commissioner (Sub-Division) / DySP (Police Circle)',
              badge: 'Sub-Divisional Command',
              summary: 'Immediate field authority: presiding over revenue courts, inspecting hostels, settling mutation claims, enforcing Section 144 CrPC, and directing taluk disaster relief.',
              keyActions: ['Direct public interface in Weekly Jana Spandana', 'Appellate authority for land disputes across 3–5 taluks'],
              outcome: 'The Administrative Backbone of Karnataka'
            },
            {
              order: '04',
              stageName: 'STATE SECRETARIAT & ELEVATION TO IAS / IPS',
              subTitle: 'Additional Deputy Commissioner → Head of State Departments → Induction into IAS/IPS',
              badge: '33.3% State Promotion Quota',
              summary: 'Heads major state directorates (Municipalities, Social Welfare, Commercial Taxes) or serves as Additional DC. Meritorious officers are promoted into the IAS/IPS Karnataka Cadre after 8–15 years.',
              keyActions: ['Statewide policy execution from Vidhana Soudha', 'Appointment as Deputy Commissioner (District Magistrate)'],
              outcome: 'Sovereign Provincial Authority & IAS Induction'
            }
          ]
        },
        {
          id: 'student-decision-compass',
          title: 'The Student Decision Compass: Where Do You Belong?',
          subtitle: 'Aligning your personality, academic strengths, and personal vision with the right pathway',
          kicker: 'Self-Discovery Matrix · Req 20',
          layout: 'editorial-concept',
          highlightQuote: 'Success in competitive examinations begins not with reading books, but with self-honesty: Which battlefield calls to your temperament?',
          mainProse: [
            'Do not choose an examination based on social prestige alone. Choose based on how you want to spend the next 35 years of your daily waking life:'
          ],
          bulletPoints: [
            { label: 'Choose UPSC CSE if:', text: 'You possess broad intellectual curiosity, thrive on multi-disciplinary synthesis (law, economics, history, ethics), enjoy managing diverse political and public stakeholders, and desire generalist executive authority over districts and national ministries.' },
            { label: 'Choose IFoS if:', text: 'You have a background in science or engineering, love the natural world, possess high outdoor endurance, thrive in non-urban wilderness environments, and want to dedicate your career to wildlife conservation, climate resilience, and forest administration.' },
            { label: 'Choose UPSC ESE if:', text: 'You are deeply in love with core engineering principles, excel in rigorous mathematical derivations, want to design and supervise mega-infrastructure projects directly, and prefer technical executive authority over generalist paper pushing.' },
            { label: 'Choose KPSC KAS if:', text: 'You are deeply connected to Karnataka’s culture and people, speak and write fluent Kannada, desire immediate high-impact field authority at the taluk/sub-division level without leaving Karnataka, and value the opportunity to rise to IAS via state quota.' }
          ]
        }
      ]
    }
  ]
};
