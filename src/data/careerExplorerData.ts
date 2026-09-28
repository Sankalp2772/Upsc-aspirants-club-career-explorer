export interface CareerProfile {
  id: string;
  chapterId: string;
  name: string;
  shortName: string;
  conductingAgency: string;
  category: 'all-india' | 'central' | 'state' | 'banking' | 'technical' | 'defence' | 'specialized';
  categoryLabel: string;
  stream: 'any' | 'engineering' | 'science' | 'commerce' | 'defence';
  streamLabel: string;
  payLevel: string;
  startingInHand: string;
  ageLimit: string;
  attempts: string;
  qualification: string;
  stagesCount: number;
  badge: string;
  accent: string;
  image: string;
  tagline: string;
  summary: string;
  topPosts: string[];
  perks: string[];
  powerAndAuthority: number; // 1-5
  workLifeBalance: number; // 1-5
  technicalFocus: number; // 1-5
  careerCeiling: string;
  fieldOfWork: string;
  selectionRatio: string;
  frequency: string;
}

export const CAREER_PROFILES: CareerProfile[] = [
  {
    id: 'upsc-cse',
    chapterId: 'upsc',
    name: 'UPSC Civil Services Examination (CSE)',
    shortName: 'IAS · IPS · IFS · IRS',
    conductingAgency: 'Union Public Service Commission (UPSC)',
    category: 'all-india',
    categoryLabel: 'All-India & Central Services',
    stream: 'any',
    streamLabel: 'Any Bachelor Degree',
    payLevel: 'Level 10 (₹56,100 - ₹2,50,000)',
    startingInHand: '₹85,000 - ₹1,05,000 + Heritage Quarters',
    ageLimit: '21 to 32 Years (General) · 35 (OBC) · 37 (SC/ST)',
    attempts: '6 (General) · 9 (OBC) · Unlimited (SC/ST)',
    qualification: 'Any recognized Bachelor\'s Degree (Arts, Science, Commerce, Engg, Medical)',
    stagesCount: 3,
    badge: 'Constitutional Executive Leadership',
    accent: '#0066FF',
    image: '/images/ias_dm_bungalow.jpg',
    tagline: 'Sovereign Executive Administration, Law & Order, and National Policymaking',
    summary: 'The premier competitive examination of the Republic of India. Inducts officers into the Indian Administrative Service (IAS), Police Service (IPS), Foreign Service (IFS), Revenue Service (IRS), and 20+ central cadres.',
    topPosts: [
      'District Magistrate & Collector (DM)',
      'Superintendent of Police (SP / SSP)',
      'Ambassador / High Commissioner (IFS)',
      'Cabinet Secretary of India'
    ],
    perks: [
      'Colonial Heritage Official Bungalow with camp office',
      'Dedicated Chauffeur-driven official vehicle with Flag & Beacon provision',
      'Personal security staff & executive domestic support',
      'Diplomatic immunity (IFS) or Magisterial powers under CrPC/BNSS'
    ],
    powerAndAuthority: 5,
    workLifeBalance: 2,
    technicalFocus: 2,
    careerCeiling: 'Cabinet Secretary of India (Apex Scale ₹2,50,000 fixed)',
    fieldOfWork: 'Public Administration, Diplomacy, Public Finance & Law Enforcement',
    selectionRatio: '1 in 1,000 (0.1% selection rate)',
    frequency: 'Annual (Prelims in May/June, Mains in Sept, Interviews in Feb-April)'
  },
  {
    id: 'upsc-ifos',
    chapterId: 'upsc',
    name: 'Indian Forest Service (IFoS)',
    shortName: 'IFoS Officer',
    conductingAgency: 'Union Public Service Commission (UPSC)',
    category: 'all-india',
    categoryLabel: 'All-India Green Cadre',
    stream: 'science',
    streamLabel: 'Science / Engineering / Agriculture',
    payLevel: 'Level 10 (₹56,100 - ₹2,25,000)',
    startingInHand: '₹85,000 - ₹1,00,000 + Forest Estate Residence',
    ageLimit: '21 to 32 Years (General) · 35 (OBC) · 37 (SC/ST)',
    attempts: '6 (General) · 9 (OBC) · Unlimited (SC/ST)',
    qualification: 'Degree with at least one subject: Animal Husbandry, Botany, Chemistry, Geology, Math, Physics, Statistics, Zoology, Agriculture, Forestry, or Engineering',
    stagesCount: 3,
    badge: 'All-India Constitutional Service',
    accent: '#059669',
    image: '/images/ifos_forest_bungalow.jpg',
    tagline: 'Custodianship of 24% of India\'s Landmass, Wildlife Corridors & Ecological Security',
    summary: 'The third All-India Service established alongside IAS and IPS. Mandated under the Constitution to manage India\'s forest reserves, wildlife sanctuaries, national parks, and environmental diplomacy.',
    topPosts: [
      'Divisional Forest Officer (DFO)',
      'Chief Conservator of Forests (CCF)',
      'Field Director (Project Tiger / Elephant)',
      'Principal Chief Conservator of Forests (PCCF - Head of Forest Force)'
    ],
    perks: [
      'Expansive British-era colonial forest rest houses & sprawling estates',
      '4x4 Mahindra Thar/Scorpio field safari vehicles',
      'Magisterial powers under Wildlife Protection & Forest Acts',
      'Command over armed forest range strike forces'
    ],
    powerAndAuthority: 4,
    workLifeBalance: 4,
    technicalFocus: 4,
    careerCeiling: 'Director General of Forests & Special Secretary to Govt of India (₹2,25,000)',
    fieldOfWork: 'Forestry, Wildlife Governance, Climate Policy & Bio-Diversity',
    selectionRatio: '1 in 800 (Top ~110-150 ranks nationally)',
    frequency: 'Annual (Shared Prelims with CSE, Separate Mains & Interview)'
  },
  {
    id: 'state-psc',
    chapterId: 'statepsc',
    name: 'State Public Service Commission (KPSC / KAS / State Civil Services)',
    shortName: 'KAS · State Civil Services',
    conductingAgency: 'Karnataka PSC / Respective State PSCs (UPPSC, MPSC, BPSC)',
    category: 'state',
    categoryLabel: 'State Administrative Leadership',
    stream: 'any',
    streamLabel: 'Any Bachelor Degree (Local Language Proficiency)',
    payLevel: 'Group A (₹52,650 - ₹1,65,000+ depending on state rules)',
    startingInHand: '₹75,000 - ₹95,000 + Sub-Divisional Quarters',
    ageLimit: '21 to 38/40 Years (State-specific relaxations)',
    attempts: 'State regulated (Typically 5 to Unlimited)',
    qualification: 'Any recognized Bachelor\'s Degree + State Language competency',
    stagesCount: 3,
    badge: 'Grassroots Provincial Administration',
    accent: '#D97706',
    image: '/images/vidhana_soudha_kas.jpg',
    tagline: 'Grassroots State Governance, Land Revenue Adjudication & Sub-Divisional Command',
    summary: 'The elite provincial executive service of the state government. Inducts officers as Sub-Divisional Magistrates (SDM/Assistant Commissioner), DySP, and Commercial Tax Officers with guaranteed promotion pipeline to IAS/IPS cadre.',
    topPosts: [
      'Assistant Commissioner & Sub-Divisional Magistrate (KAS)',
      'Deputy Superintendent of Police (State Police Service)',
      'Tahsildar / Grade-1 Executive Magistrate',
      'Conferred IAS / IPS Officer (Promoted to Union Cadre)'
    ],
    perks: [
      'Official sub-divisional residency & government staff',
      'Official vehicle with government designation plates',
      'Direct land revenue dispute adjudication powers',
      'Guaranteed promotion into the Indian Administrative Service (IAS) cadre'
    ],
    powerAndAuthority: 4,
    workLifeBalance: 3,
    technicalFocus: 2,
    careerCeiling: 'Conferred IAS Principal Secretary / Divisional Commissioner',
    fieldOfWork: 'State Land Administration, Law & Order, Welfare Implementation',
    selectionRatio: '1 in 600',
    frequency: 'State dependent (Annual to Biennial)'
  },
  {
    id: 'ssc-cgl',
    chapterId: 'ssc',
    name: 'Staff Selection Commission - Combined Graduate Level (SSC CGL)',
    shortName: 'ASO · ITI · GST · CBI SI',
    conductingAgency: 'Staff Selection Commission (SSC)',
    category: 'central',
    categoryLabel: 'Central Government Ministries',
    stream: 'any',
    streamLabel: 'Any Bachelor Degree',
    payLevel: 'Level 7 & Level 8 (₹44,900 - ₹1,51,100)',
    startingInHand: '₹68,000 - ₹82,000 in Metro Cities (X Category)',
    ageLimit: '18 to 30/32 Years (Relaxable)',
    attempts: 'Unlimited within age limit',
    qualification: 'Bachelor\'s Degree in any discipline from a recognized University',
    stagesCount: 2,
    badge: 'Central Secretariat & Enforcement Cadres',
    accent: '#2563EB',
    image: '/images/income_tax_chamber.jpg',
    tagline: 'Power in the Central Secretariat, Investigation Agencies & Revenue Enforcement',
    summary: 'Recruits executive and non-executive officers into the Central Secretariat (CSS/MEA), Intelligence agencies (IB, CBI), and Revenue enforcement wings (GST & Customs, Income Tax, Enforcement Directorate).',
    topPosts: [
      'Assistant Section Officer (ASO) in MEA (Foreign Postings in Indian Embassies)',
      'Assistant Section Officer (ASO) in Central Secretariat (CSS)',
      'Inspector of Central Goods & Service Tax (GST Inspector)',
      'Sub-Inspector in Central Bureau of Investigation (CBI)'
    ],
    perks: [
      'Prestigious South Block / North Block New Delhi posting or foreign embassies',
      'Generous Foreign Allowance in USD for MEA postings (₹3L-5L/month tax-free)',
      'Enforcement powers, arrest warrants & search operations (CBI/ED/GST)',
      'Predictable 9-to-5 working hours with zero weekend stress for ASO desk posts'
    ],
    powerAndAuthority: 3,
    workLifeBalance: 5,
    technicalFocus: 2,
    careerCeiling: 'Director / Joint Secretary in Central Ministries',
    fieldOfWork: 'Secretariat Policymaking, Foreign Affairs, Taxation & Criminal Investigation',
    selectionRatio: '1 in 300 (8,000 to 15,000 vacancies per year)',
    frequency: 'Annual (Tier 1 CBT MCQ + Tier 2 CBT MCQ & Typing)'
  },
  {
    id: 'banking-rbi',
    chapterId: 'banking',
    name: 'Reserve Bank of India & Banking Regulators (RBI Grade B / SEBI)',
    shortName: 'RBI Grade B · SEBI · SBI PO',
    conductingAgency: 'Reserve Bank of India (RBI) Services Board / SEBI / IBPS',
    category: 'banking',
    categoryLabel: 'Financial & Regulatory Leadership',
    stream: 'commerce',
    streamLabel: 'Any Degree (Preference for Eco/Finance/Engg)',
    payLevel: 'Grade B (Basic ₹55,200 with Total CTC ~₹30+ LPA)',
    startingInHand: '₹1,15,000 - ₹1,30,000 / month + Prime Metro Lease',
    ageLimit: '21 to 30 Years (Relaxations for OBC/SC/ST/PhD)',
    attempts: '6 Attempts for General (Unlimited for OBC/SC/ST)',
    qualification: 'Graduation with minimum 60% marks (50% for SC/ST/PwBD)',
    stagesCount: 3,
    badge: 'Premier Central Banking Cadre',
    accent: '#0284C7',
    image: '/images/central_secretariat.jpg',
    tagline: 'Macroeconomic Governance, Monetary Policy Formulation & Market Regulation',
    summary: 'The elite financial regulator of India. Regulates currency issuance, foreign exchange reserves, monetary interest rates, and banking oversight with unparalleled corporate-grade packages in prime metros.',
    topPosts: [
      'Assistant Manager / Manager (RBI Grade B)',
      'Assistant General Manager (Monetary Policy / Supervision)',
      'Chief General Manager (CGM)',
      'Executive Director & Deputy Governor of RBI'
    ],
    perks: [
      'Highest compensation package in the Indian public sector (~₹30 LPA CTC)',
      'Prime residential colonies in Mumbai (Nariman Point), Delhi, Bengaluru',
      'Generous children education allowance, petrol allowances (up to 300L/mo)',
      'Deputation to International Monetary Fund (IMF), World Bank & BIS'
    ],
    powerAndAuthority: 4,
    workLifeBalance: 4,
    technicalFocus: 4,
    careerCeiling: 'Deputy Governor of RBI / SEBI Chairman',
    fieldOfWork: 'Monetary Policy, Capital Markets, Banking Regulation, Financial Analytics',
    selectionRatio: '1 in 800 (150-250 Grade B vacancies per year)',
    frequency: 'Annual (Phase 1 MCQ + Phase 2 Descriptive & Objective + Interview)'
  },
  {
    id: 'engineering-ese',
    chapterId: 'engineering',
    name: 'UPSC Engineering Services Examination (ESE / IES)',
    shortName: 'UPSC IES · ESE Officer',
    conductingAgency: 'Union Public Service Commission (UPSC)',
    category: 'technical',
    categoryLabel: 'Technical Executive Cadre',
    stream: 'engineering',
    streamLabel: 'B.E / B.Tech (Civil, Mech, Electrical, E&T)',
    payLevel: 'Level 10 (₹56,100 - ₹2,25,000)',
    startingInHand: '₹85,000 - ₹1,00,000 + Engineering Enclave Quarters',
    ageLimit: '21 to 30 Years (Relaxable)',
    attempts: 'Unlimited within age limit',
    qualification: 'Degree in Engineering (Civil, Mechanical, Electrical, or Electronics & Telecom)',
    stagesCount: 3,
    badge: 'Class-1 Gazetted Technical Leadership',
    accent: '#7C3AED',
    image: '/images/central_secretariat.jpg',
    tagline: 'Technical Authority Over India\'s National Infrastructure, Defence & Capital Works',
    summary: 'India\'s most prestigious examination for engineers. Commissioned officers execute mega-infrastructure, defence bases, border roads, electrical grids, and telecommunication systems with immense budgetary command.',
    topPosts: [
      'Assistant Executive Engineer (AEE)',
      'Executive Engineer (EE)',
      'Superintending Engineer (SE)',
      'Director General (CPWD / MES / CWC - Apex Scale ₹2,25,000)'
    ],
    perks: [
      'Control over capital infrastructure budgets worth thousands of crores',
      'Official transport, inspection bungalows across the country',
      'Technical autonomy with direct gazetted authority',
      'Exemption from political interference typical of generalist administrative posts'
    ],
    powerAndAuthority: 4,
    workLifeBalance: 4,
    technicalFocus: 5,
    careerCeiling: 'Director General of CPWD / Member, Railway Board / Secretary (Power)',
    fieldOfWork: 'Mega Infrastructure, Border Infrastructure, Energy Grids, Naval Bases',
    selectionRatio: '1 in 400 (Engineering graduates only)',
    frequency: 'Annual (Prelims GS & Tech + Mains Conventional Tech + Interview)'
  },
  {
    id: 'defence-services',
    chapterId: 'defence',
    name: 'Combined Defence Services & Armed Forces (UPSC CDS / AFCAT / NDA)',
    shortName: 'Indian Army · Navy · Air Force',
    conductingAgency: 'Union Public Service Commission (UPSC) & Service Selection Board (SSB)',
    category: 'defence',
    categoryLabel: 'Armed Forces Officer Cadre',
    stream: 'defence',
    streamLabel: '12th (NDA) / Any Degree (IMA/OTA) / Engg/Physics (AFA/INA)',
    payLevel: 'Level 10 (₹56,100 - ₹2,50,000) + Military Service Pay ₹15,500/mo',
    startingInHand: '₹95,000 - ₹1,20,000 + Rations, Cantonment Villa & Field Allowance',
    ageLimit: '19 to 24/25 Years',
    attempts: 'Unlimited within age window',
    qualification: 'Graduation for CDS (IMA/OTA/AFA/INA); 12th for NDA',
    stagesCount: 3,
    badge: 'Commissioned Officer in Armed Forces',
    accent: '#DC2626',
    image: '/images/club_logo.jpg',
    tagline: 'Combat Leadership, Strategic Deterrence, Honor & Sovereign Defense',
    summary: 'Commissioning into the Indian Army, Navy, or Air Force as a Lieutenant, Sub-Lieutenant, or Flying Officer. Combines combat command, tactical aviation, naval warships, adventure, and supreme national honor.',
    topPosts: [
      'Lieutenant / Captain / Major / Colonel (Army)',
      'Flying Officer / Flight Lieutenant / Wing Commander (Air Force)',
      'Sub-Lieutenant / Lieutenant Commander / Captain (Navy)',
      'Chief of Defence Staff (CDS) / General / Air Chief Marshal / Admiral'
    ],
    perks: [
      'Military Service Pay (MSP) of ₹15,500 per month additional',
      'Subsidized CSD Canteen, elite cantonment clubs, golf courses, equestrian stables',
      'Full military medical healthcare for entire family for lifetime',
      'Direct command over soldiers, combat aircraft, submarines or battle tanks'
    ],
    powerAndAuthority: 5,
    workLifeBalance: 3,
    technicalFocus: 3,
    careerCeiling: 'General / Chief of Army Staff / Chief of Defence Staff (CDS)',
    fieldOfWork: 'Combat Operations, Tactical Aviation, Naval Fleet Command, National Defense',
    selectionRatio: '1 in 500 (Rigorous 5-Day SSB Psychological & Physical Testing)',
    frequency: 'Biannual (CDS 1 & 2 every year)'
  },
  {
    id: 'scitech-isro-drdo',
    chapterId: 'scitech',
    name: 'Scientific & Space Research Organizations (ISRO, DRDO & BARC)',
    shortName: 'ISRO · DRDO · BARC Scientist',
    conductingAgency: 'ISRO Centralised Recruitment Board (ICRB) / RAC-DRDO / BARC OCES',
    category: 'technical',
    categoryLabel: 'Space & Strategic Defense Tech',
    stream: 'engineering',
    streamLabel: 'B.Tech / M.Sc in Aerospace, CS, Mech, ECE, Physics, Chemistry',
    payLevel: 'Level 10 (₹56,100 - ₹2,18,200) + Professional Update Allowance',
    startingInHand: '₹85,000 - ₹98,000 + Space City / Township Quarters',
    ageLimit: '28 to 35 Years (Relaxable)',
    attempts: 'Unlimited within age limit',
    qualification: 'First Class B.E / B.Tech or equivalent with aggregate 65% / 6.84 CGPA',
    stagesCount: 2,
    badge: 'Premier Strategic Research Cadre',
    accent: '#4F46E5',
    image: '/images/central_secretariat.jpg',
    tagline: 'Lunar & Interplanetary Missions, Strategic Missiles & Clean Nuclear Energy',
    summary: 'Work at the forefront of human discovery. Design launch vehicles (LVM3, Gaganyaan), intercontinental ballistic missiles (Agni-V), stealth radar systems, and advanced nuclear reactors.',
    topPosts: [
      'Scientist / Engineer \'SC\' (Entry Level)',
      'Scientist \'SD\' / \'SE\' / \'SF\' (Project Director / Group Head)',
      'Outstanding Scientist / Distinguished Scientist',
      'Chairman of ISRO / Secretary, Department of Space'
    ],
    perks: [
      'Self-contained green townships (ISRO Space City, DRDO Kanchenjunga Colony)',
      'Generous Professional Update Allowances & Patent Bonuses',
      'Access to supercomputers, clean rooms & launch facilities',
      'Immense national pride representing India\'s space & missile milestones'
    ],
    powerAndAuthority: 3,
    workLifeBalance: 4,
    technicalFocus: 5,
    careerCeiling: 'Chairman of ISRO / Secretary, Dept of Atomic Energy (₹2,25,000)',
    fieldOfWork: 'Rocket Propulsion, Satellite Telemetry, Radar Tech, Nuclear Physics',
    selectionRatio: '1 in 500 (Written Examination / GATE Score + Technical Interview)',
    frequency: 'Annual / Requirement based'
  },
  {
    id: 'railways-irms',
    chapterId: 'railways',
    name: 'Indian Railways Leadership (IRMS & RRB NTPC)',
    shortName: 'IRMS · Railway Officer',
    conductingAgency: 'Union Public Service Commission (IRMS) & Railway Recruitment Boards (RRB)',
    category: 'central',
    categoryLabel: 'National Transportation Lifeline',
    stream: 'any',
    streamLabel: 'Any Degree (IRMS-Commerce/Engg/Civil)',
    payLevel: 'Level 10 (₹56,100 - ₹2,50,000)',
    startingInHand: '₹85,000 - ₹1,00,000 + Railway Colony Bungalow',
    ageLimit: '21 to 32 Years (IRMS) · 18 to 33 (RRB)',
    attempts: '6 (General) for IRMS',
    qualification: 'Bachelor\'s Degree in any discipline / Engineering degree for technical cadres',
    stagesCount: 3,
    badge: 'Management of World\'s 4th Largest Rail Network',
    accent: '#0891B2',
    image: '/images/central_secretariat.jpg',
    tagline: 'Operational Leadership Over 13,000 Daily Trains, Freight Corridors & Vande Bharat',
    summary: 'The unified managerial cadre of Indian Railways. Controls passenger operations, high-speed rail corridors, locomotive manufacture, and mega terminal management across 68 railway divisions.',
    topPosts: [
      'Assistant Operations Manager (AOM) / Assistant Commercial Manager (ACM)',
      'Divisional Railway Manager (DRM - Command over an entire rail division)',
      'General Manager (GM - Head of an entire Railway Zone, e.g. Western Railway)',
      'Chairman & Chief Executive Officer (CEO), Railway Board'
    ],
    perks: [
      'Complimentary 1st AC First Class Railway Duty & Privilege Passes for family anywhere in India',
      'Heritage Railway Officers\' rest houses in hill stations (Shimla, Ooty, Darjeeling)',
      'Substantial executive discretion over passenger safety and freight logistics',
      'Direct command over dedicated railway protection forces and engineering staff'
    ],
    powerAndAuthority: 4,
    workLifeBalance: 3,
    technicalFocus: 3,
    careerCeiling: 'Chairman & CEO, Railway Board (Apex Scale ₹2,50,000)',
    fieldOfWork: 'High-Speed Rail Logistics, Train Operations, Railway Infrastructure',
    selectionRatio: '1 in 700',
    frequency: 'Annual'
  },
  {
    id: 'specialized-agencies',
    chapterId: 'other',
    name: 'Specialized Regulatory & Intelligence (EPFO APFC, IB ACIO, CAPF AC)',
    shortName: 'EPFO APFC · IB ACIO · CAPF AC',
    conductingAgency: 'UPSC (EPFO & CAPF) & Ministry of Home Affairs (IB)',
    category: 'specialized',
    categoryLabel: 'Specialized & Intelligence Wings',
    stream: 'any',
    streamLabel: 'Any Bachelor Degree',
    payLevel: 'Level 8 & Level 10 (₹47,600 - ₹1,77,500)',
    startingInHand: '₹75,000 - ₹95,000 + Special Security Allowance',
    ageLimit: '20 to 30/35 Years (Cadre dependent)',
    attempts: 'Category dependent',
    qualification: 'Bachelor\'s Degree from a recognized University in any discipline',
    stagesCount: 3,
    badge: 'Internal Security & Statutory Adjudication',
    accent: '#B45309',
    image: '/images/central_secretariat.jpg',
    tagline: 'Internal Intelligence, Border Vigilance (CAPF) & Provident Fund Adjudication',
    summary: 'Prestigious direct-entry statutory and security cadres. Includes Assistant Provident Fund Commissioner (quasi-judicial power over social security), Intelligence Bureau Assistant Central Intelligence Officer, and CAPF Assistant Commandant.',
    topPosts: [
      'Assistant Provident Fund Commissioner (APFC - EPFO)',
      'Assistant Central Intelligence Officer (ACIO Grade II - IB)',
      'Assistant Commandant (CAPF - BSF / CRPF / CISF / ITBP / SSB)',
      'Central Provident Fund Commissioner (CPFC) / Director of IB'
    ],
    perks: [
      'Quasi-judicial court authority with power to issue summons and attach bank accounts (EPFO)',
      '20% Special Security Allowance (SSA) over basic pay (Intelligence Bureau)',
      'Direct command of a 135-soldier armed combat company (CAPF AC)',
      'Exceptional career security under statutory protection'
    ],
    powerAndAuthority: 4,
    workLifeBalance: 3,
    technicalFocus: 2,
    careerCeiling: 'Director General / Additional Secretary level',
    fieldOfWork: 'Counter-Terrorism Intelligence, Social Security Law, Border Security',
    selectionRatio: '1 in 450',
    frequency: 'Periodic / Annual notifications'
  }
];

export interface QuizQuestion {
  id: string;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    tags: string[];
    weightMap: Record<string, number>; // careerId -> score weight
  }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'education',
    question: 'What is your educational background or highest qualification?',
    subtitle: 'This determines your direct statutory eligibility for specific service examinations.',
    options: [
      {
        label: 'Engineering / Technology (B.E / B.Tech / M.Tech)',
        description: 'Eligible for all civil services plus technical engineering services & space tech.',
        tags: ['Engineering', 'Tech'],
        weightMap: {
          'engineering-ese': 10,
          'scitech-isro-drdo': 10,
          'upsc-cse': 7,
          'banking-rbi': 7,
          'railways-irms': 7,
          'defence-services': 7,
          'state-psc': 6,
          'ssc-cgl': 6
        }
      },
      {
        label: 'Arts, Humanities, Social Sciences, Law (B.A / LL.B)',
        description: 'Ideal foundation for generalist governance, diplomacy, state civil services, and law enforcement.',
        tags: ['Generalist', 'Policy'],
        weightMap: {
          'upsc-cse': 10,
          'state-psc': 10,
          'ssc-cgl': 8,
          'specialized-agencies': 7,
          'defence-services': 6,
          'banking-rbi': 5
        }
      },
      {
        label: 'Commerce, Economics, Finance, Management (B.Com / BBA / MBA)',
        description: 'Exceptional fit for monetary regulatory bodies, audit & revenue services, and capital markets.',
        tags: ['Finance', 'Economics'],
        weightMap: {
          'banking-rbi': 10,
          'ssc-cgl': 9,
          'upsc-cse': 8,
          'specialized-agencies': 8,
          'state-psc': 6
        }
      },
      {
        label: 'Pure Science, Forestry, Agriculture, Medicine (B.Sc / MBBS)',
        description: 'Specially eligible for Indian Forest Service (IFoS), scientific bodies, and public health cadres.',
        tags: ['Science', 'Forestry'],
        weightMap: {
          'upsc-ifos': 10,
          'upsc-cse': 8,
          'scitech-isro-drdo': 8,
          'state-psc': 7,
          'defence-services': 6
        }
      }
    ]
  },
  {
    id: 'aspiration',
    question: 'What is your primary career aspiration in public life?',
    subtitle: 'Choose what excites you the most about joining government service.',
    options: [
      {
        label: 'Maximum Administrative Power, District Magistracy & Policy Impact',
        description: 'You want to govern a district, direct welfare programs, control law & order, and shape national policy.',
        tags: ['Executive', 'Power'],
        weightMap: {
          'upsc-cse': 10,
          'state-psc': 8,
          'upsc-ifos': 6,
          'specialized-agencies': 5
        }
      },
      {
        label: 'High Corporate-Grade Pay, Metro Living & Work-Life Balance',
        description: 'You prefer stable 9-to-5 desk hours in Mumbai/Delhi, top CTC (₹30+ LPA), and international travel.',
        tags: ['WorkLife', 'MetroPay'],
        weightMap: {
          'banking-rbi': 10,
          'ssc-cgl': 9,
          'scitech-isro-drdo': 6
        }
      },
      {
        label: 'Pure Technical Innovation, Mega Infrastructure & Space Exploration',
        description: 'You want to build launch rockets, satellites, clean energy, or national expressways and bridges.',
        tags: ['Technology', 'R&D'],
        weightMap: {
          'scitech-isro-drdo': 10,
          'engineering-ese': 10,
          'railways-irms': 7
        }
      },
      {
        label: 'Uniform, Tactical Combat Leadership, Adventure & National Defense',
        description: 'You want to wear stars and badges, lead troops in the field, command warships or fighter jets.',
        tags: ['Uniform', 'Honor'],
        weightMap: {
          'defence-services': 10,
          'upsc-cse': 7, // IPS
          'specialized-agencies': 8, // CAPF AC
          'upsc-ifos': 5
        }
      },
      {
        label: 'Grassroots Service in Home State with Zero Out-of-State Transfers',
        description: 'You want to serve in your native linguistic region, resolve local land disputes, and stay near family.',
        tags: ['HomeState', 'Grassroots'],
        weightMap: {
          'state-psc': 10,
          'ssc-cgl': 5
        }
      }
    ]
  },
  {
    id: 'workstyle',
    question: 'How do you prefer your day-to-day work environment to look?',
    subtitle: 'Every cadre offers a distinct work rhythm, pace, and lifestyle.',
    options: [
      {
        label: 'Dynamic, high-pressure field inspections with 24/7 public emergency command',
        description: 'Active, high-adrenalin work resolving crises, disaster management, and public grievances.',
        tags: ['Dynamic', 'Field'],
        weightMap: {
          'upsc-cse': 10,
          'state-psc': 8,
          'defence-services': 8,
          'specialized-agencies': 7
        }
      },
      {
        label: 'Peaceful natural forests, wildlife preservation, and quiet green campuses',
        description: 'Working amidst flora, fauna, safari reserves, eco-tourism, and tranquil forest headquarters.',
        tags: ['Nature', 'Peaceful'],
        weightMap: {
          'upsc-ifos': 10,
          'scitech-isro-drdo': 5
        }
      },
      {
        label: 'Analytical desk research, economic reports, and regulatory oversight in AC towers',
        description: 'Deep intellect, market surveillance, financial data modeling, and policy drafting.',
        tags: ['Research', 'Analytical'],
        weightMap: {
          'banking-rbi': 10,
          'ssc-cgl': 8,
          'specialized-agencies': 6
        }
      },
      {
        label: 'Laboratory / site construction projects with specialized technical teams',
        description: 'Hands-on engineering drawings, wind tunnels, cleanrooms, and high-capital project delivery.',
        tags: ['Labs', 'Engineering'],
        weightMap: {
          'scitech-isro-drdo': 10,
          'engineering-ese': 10,
          'railways-irms': 7
        }
      }
    ]
  }
];

export interface ComparisonDimension {
  title: string;
  field: keyof CareerProfile | 'custom';
  getValue: (p: CareerProfile) => string | number;
}

export const COMPARISON_DIMENSIONS: ComparisonDimension[] = [
  {
    title: 'Conducting Commission',
    field: 'conductingAgency',
    getValue: (p) => p.conductingAgency
  },
  {
    title: 'Entry Pay Scale & Allowances',
    field: 'payLevel',
    getValue: (p) => `${p.payLevel} · In-hand: ${p.startingInHand}`
  },
  {
    title: 'Minimum Degree Requirement',
    field: 'qualification',
    getValue: (p) => p.qualification
  },
  {
    title: 'Age Eligibility (General / Reserved)',
    field: 'ageLimit',
    getValue: (p) => p.ageLimit
  },
  {
    title: 'Attempts Allowed',
    field: 'attempts',
    getValue: (p) => p.attempts
  },
  {
    title: 'Examination Stages & Pattern',
    field: 'stagesCount',
    getValue: (p) => `${p.stagesCount} Stages (${p.frequency})`
  },
  {
    title: 'Executive Power & Field Authority (1-5)',
    field: 'powerAndAuthority',
    getValue: (p) => p.powerAndAuthority
  },
  {
    title: 'Work-Life Balance & Predictability (1-5)',
    field: 'workLifeBalance',
    getValue: (p) => p.workLifeBalance
  },
  {
    title: 'Apex Career Ceiling',
    field: 'careerCeiling',
    getValue: (p) => p.careerCeiling
  },
  {
    title: 'Selection Ratio & Competition',
    field: 'selectionRatio',
    getValue: (p) => p.selectionRatio
  }
];
