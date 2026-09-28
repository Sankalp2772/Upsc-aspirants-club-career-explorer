import { PresentationChapter } from '../../types/presentation';

export const chapter03_statepsc: PresentationChapter = {
  id: 'state-psc',
  chapterNumber: '04',
  title: 'State Public Service Commissions (State PSCs)',
  shortTitle: 'State PSC & KAS',
  description: 'State-level constitutional recruitment for provincial administration, executive magistracy, and regional development cadres.',
  iconName: 'Building2',
  accent: '#38BDF8',
  sections: [
    {
      id: 'state-psc-concept',
      title: 'The Concept of State PSCs',
      shortName: 'State PSC Role',
      conductingAuthority: 'Respective State Public Service Commissions',
      badge: 'Constitutional Body · Art. 315',
      description: 'Understanding how State PSCs operate in the Indian federal framework.',
      slides: [
        {
          id: 'state-psc-mandate',
          title: 'The Role & Jurisdictions of State PSCs',
          subtitle: 'Article 315 of the Constitution: State Civil Services',
          kicker: 'Federal Architecture',
          layout: 'editorial-concept',
          highlightQuote: 'While UPSC builds the national administrative framework, State PSCs build the grassroots executive machinery governing day-to-day state life.',
          mainProse: [
            'Every State in India has its own constitutional Public Service Commission (e.g. KPSC in Karnataka, MPSC in Maharashtra, TNPSC in Tamil Nadu, UPPSC in Uttar Pradesh).',
            'State PSCs recruit for State Civil Services (Group A and Group B Gazetted posts) such as Assistant Commissioners / Deputy Collectors, Deputy Superintendents of Police, Tehsildars, and Commercial Tax Officers.',
            'Crucially, state service officers form the direct feeder cadre for promotion into the All India Services (IAS and IPS) under the 33.3% state promotion quota after specified years of meritorious service.'
          ],
          bulletPoints: [
            { label: 'State Language Requirement', text: 'Unlike UPSC which allows examination in multiple national languages, State PSCs typically mandate proficiency in the official regional language (e.g. Kannada for KPSC).' },
            { label: 'State Domicile & Reservations', text: 'Recruitment strictly applies state reservation policies (e.g. Category I, IIA, IIB, IIIA, IIIB, SC, ST, Rural, Kannada Medium in Karnataka).' },
            { label: 'Immediate Field Authority', text: 'Recruited officers are posted directly in taluks and sub-divisions, resolving regional citizen grievances and implementing state development schemes.' }
          ]
        },
        {
          id: 'state-psc-vs-upsc',
          title: 'Relation to Other Examinations: State PSC vs UPSC CSE',
          subtitle: 'Structural similarities and critical strategic distinctions',
          kicker: 'Comparative Analysis',
          layout: 'comparison',
          highlightQuote: 'State PSCs often adopt a three-tier pattern inspired by UPSC, but their syllabus centers heavily on regional history, geography, economy, and state legislation.',
          bulletPoints: [
            { label: 'Jurisdiction & Cadre', text: 'UPSC CSE officers are allocated to any state cadre across India. State PSC officers serve exclusively within the territory of that particular State throughout their entire career.' },
            { label: 'Syllabus Focus', text: 'UPSC emphasizes macro-national and geopolitical policy. State PSCs dedicate 35% to 50% of the syllabus to state-specific heritage, regional polity, state budgets, and local geography.' },
            { label: 'Promotion to IAS/IPS', text: 'Meritorious State Civil Service officers (e.g. KAS officers) are eligible for nomination into the IAS/IPS cadre after 8-15 years of service via state-quota induction boards.' }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: KPSC KAS — NOT UPSC CSE (Explicit Separation & Correction)
    // -------------------------------------------------------------
    {
      id: 'kpsc-kas',
      title: 'KPSC KAS — NOT UPSC CSE: Dedicated Deep Dive',
      shortName: 'KPSC KAS (Karnataka)',
      conductingAuthority: 'Karnataka Public Service Commission, Udyoga Soudha, Bengaluru',
      badge: 'Gazetted Probationers (Group A & B) · Req 18 & 19',
      description: 'The premier competitive examination for administrative, police, and fiscal leadership in the Government of Karnataka. Corrected scheme: PT = 25 Marks, Total = 1275 Marks.',
      slides: [
        {
          id: 'kpsc-kas-overview',
          title: 'KPSC KAS — NOT UPSC CSE',
          subtitle: 'The Gazetted Probationers Examination for Karnataka Administrative Leadership',
          kicker: 'State Sovereignty · Req 18',
          layout: 'editorial-concept',
          highlightQuote: 'KPSC KAS is completely distinct from UPSC CSE: It operates under Karnataka Civil Services Rules, focuses on Karnataka administration, and features an amended 1275-mark merit scheme.',
          imageBanner: {
            url: '/images/vidhana_soudha_kas.jpg',
            caption: 'Vidhana Soudha Bengaluru: The Seat of State Executive Power & KAS Administrative Leadership',
            tag: 'KARNATAKA ADMINISTRATIVE SERVICE'
          },
          mainProse: [
            'Conducted by the Karnataka Public Service Commission (KPSC) headquartered at Udyoga Soudha, Bengaluru, the Gazetted Probationers Examination is Karnataka’s sovereign leadership selection mechanism.',
            'It selects young leaders for Group A posts (such as Assistant Commissioner in the Revenue Department and Deputy Superintendent of Police in Karnataka State Police) and Group B posts (such as Tehsildar, Commercial Tax Officer, and Assistant Director).',
            'Crucial Correction: Under the official Karnataka Civil Services (Gazetted Probationers Rules) Amendment, the Personality Test / Interview carries 25 Marks (not 200 marks, not 50 marks). Combined with the 1250 marks descriptive Mains, the Final Merit list is prepared out of 1275 Marks.'
          ],
          keyTakeaways: [
            'Direct magisterial authority over taluks and revenue sub-divisions across Karnataka’s 31 districts',
            'Official 1275-Mark Merit Scheme (1250 Written Mains + 25 Personality Test)',
            'Mandatory qualifying Kannada language paper ensures fluent administrative literacy',
            'Direct statutory feeder cadre for promotion into IAS (Karnataka Cadre) and IPS (Karnataka Cadre)'
          ]
        },
        {
          id: 'kpsc-kas-eligibility',
          title: 'KPSC KAS Eligibility & Domicile Norms',
          subtitle: 'Age limits, educational criteria, attempt limits, and Kannada requirements',
          kicker: 'KPSC KAS · Eligibility',
          layout: 'eligibility-grid',
          eligibility: [
            {
              category: 'Educational Qualification',
              requirement: 'Bachelor Degree in any discipline',
              note: 'Must hold a degree from a university incorporated by an Act of Central or State Legislature or recognized by UGC. Final-year students can appear for Prelims.'
            },
            {
              category: 'Age Bracket (as of notification date)',
              requirement: 'Minimum 21 Years · Maximum 38 Years (General Merit)',
              note: 'Category 2A, 2B, 3A, 3B: Maximum 41 Years · SC, ST, Category 1: Maximum 43 Years · PwBD: Up to 48 Years.'
            },
            {
              category: 'Number of Attempts',
              requirement: 'General Merit: 5 Attempts',
              note: 'OBC (Cat 2A/2B/3A/3B): 7 Attempts · SC / ST / Cat-1: Unlimited attempts until reaching the age ceiling.'
            },
            {
              category: 'Compulsory Kannada Language Paper',
              requirement: 'Qualifying Kannada Paper (150 Marks)',
              note: 'Must score minimum 35% (52.5 marks). Candidates who passed Class 10 (SSLC) with Kannada as first or second language or studied in Kannada medium are exempted.'
            }
          ]
        },
        {
          id: 'kpsc-kas-pipeline',
          title: 'KPSC KAS Examination Journey: 4-Stage Pipeline',
          subtitle: 'Prelims → Mains → Personality Test (25 Marks) → Final Selection (1275 Marks)',
          kicker: 'Corrected Merit Architecture · Req 18',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'Stage 1',
              title: 'Preliminary Examination (400 Marks)',
              subtitle: 'Objective OMR Screening Filter',
              badge: 'Screening to Mains (1:20 Ratio)',
              description: 'Paper 1 (GS, Humanities & Karnataka Heritage - 200 Marks, 100 Qs) and Paper 2 (GS, General Science, Aptitude - 200 Marks, 100 Qs). Negative marking of 0.25 marks per wrong answer. Marks are not added to the final merit list.',
              metrics: [{ label: 'Format', value: 'Objective MCQs' }, { label: 'Paper 1', value: '200 Marks' }, { label: 'Paper 2', value: '200 Marks' }]
            },
            {
              stepNumber: 'Stage 2',
              title: 'Main Examination (1250 Marks for Merit)',
              subtitle: 'Descriptive Pen & Paper Papers',
              badge: 'Merit Determining (1250M)',
              description: 'Two qualifying language papers (Kannada & English - 150 Marks each, qualifying at 35%) + 1 Essay Paper (250 Marks) + 4 Compulsory Descriptive General Studies Papers (250 Marks each).',
              metrics: [{ label: 'Language Papers', value: 'Qualifying (35%)' }, { label: 'Merit Papers', value: '5 Papers (1250M)' }, { label: 'Interview Ratio', value: '1:3 for PT' }]
            },
            {
              stepNumber: 'Stage 3',
              title: 'Personality Test / Interview (25 Marks)',
              subtitle: 'Oral Board at Udyoga Soudha, Bengaluru',
              badge: '25 Marks (Official Statutory Scheme)',
              description: 'Conducted before a KPSC Board assessing administrative temperament, field pragmatism, local language fluency, and grasp of Karnataka developmental and fiscal challenges.',
              metrics: [{ label: 'Interview Marks', value: '25 Marks' }, { label: 'Duration', value: '20-30 Mins' }]
            },
            {
              stepNumber: 'Stage 4',
              title: 'Final Selection & Service Allotment',
              subtitle: 'Consolidated Merit List out of 1275 Marks',
              badge: 'Total Merit: 1275 Marks',
              description: 'Final rank list prepared strictly on 1250 Written Mains + 25 Personality Test = 1275 Marks. Candidates are allocated to Group A (AC, DySP) and Group B (Tehsildar, CTO, etc.) posts.',
              metrics: [{ label: 'Written Total', value: '1250 Marks' }, { label: 'Interview', value: '25 Marks' }, { label: 'Grand Total', value: '1275 Marks' }]
            }
          ]
        },
        {
          id: 'kpsc-kas-mains-papers',
          title: 'KPSC KAS Mains Papers Structure',
          subtitle: 'The 1250-mark descriptive syllabus breakdown',
          kicker: 'KPSC KAS · Mains Papers',
          layout: 'papers-table',
          papers: [
            {
              name: 'Qualifying Kannada & English Papers',
              type: 'Qualifying',
              marks: '150 + 150 Marks (Min 35% to pass)',
              duration: '3 Hours each',
              description: 'Reading comprehension, precis writing, vocabulary, grammar, and English-Kannada bidirectional translation. Marks not added to merit rank.'
            },
            {
              name: 'Paper I: Essay',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Two compulsory essays (125 marks each): Section 1 on National or International socio-economic issues; Section 2 on Karnataka State or Regional issues.'
            },
            {
              name: 'Paper II: General Studies 1',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'History & Cultural Heritage of India & Karnataka, Social & Political Perspective of Karnataka, Rural Development & Panchayat Raj.'
            },
            {
              name: 'Paper III: General Studies 2',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Physical & Human Geography of India & Karnataka, Overview of Indian Constitution & Public Administration, State Government Machinery.'
            },
            {
              name: 'Paper IV: General Studies 3',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Science & Technology in Rural Development, Environmental Hygiene & Biodiversity, Indian & Karnataka Economy, Planning & Fiscal Reforms.'
            },
            {
              name: 'Paper V: General Studies 4',
              type: 'Merit',
              marks: '250 Marks',
              duration: '3 Hours',
              description: 'Ethics, Integrity, Aptitude, Public Service Values, and Case Studies rooted in Karnataka State and Local Administration.'
            }
          ]
        },
        {
          id: 'kpsc-kas-posts-deepdive',
          title: 'KAS Posts / Services: Role & Responsibility Architecture',
          subtitle: 'POST → DEPARTMENT → ROLE → RESPONSIBILITY (Beyond mere job titles)',
          kicker: 'Cadres & Operational Reality · Req 18',
          layout: 'career-pathway',
          careerPaths: [
            {
              role: 'Assistant Commissioner (KAS Junior Scale - Group A)',
              department: 'Revenue Department, Government of Karnataka',
              nature: 'Sub-Divisional Executive Magistrate & Feeder to IAS',
              description: 'Heads a Revenue Sub-Division (encompassing 3 to 5 taluks). Exercises executive magisterial powers under CrPC, presides over the Sub-Divisional Revenue Appellate Court (disputes on land records, mutation appeals, SC/ST PTCL Act), coordinates district elections as Returning Officer (RO), and manages flood/drought disaster operations.',
              imageUrl: '/images/vidhana_soudha_kas.jpg',
              imageCaption: 'Sub-Divisional Executive Magistracy & State Administrative Stature at Vidhana Soudha',
              hierarchy: ['Assistant Commissioner (AC)', 'Senior Assistant Commissioner', 'Additional Deputy Commissioner (ADC)', 'Nomination to IAS (Deputy Commissioner)']
            },
            {
              role: 'Deputy Superintendent of Police (DySP - Group A)',
              department: 'Home Department / Karnataka State Police (KSP)',
              nature: 'Sub-Divisional Police Officer (SDPO) & Feeder to IPS',
              description: 'Supervises 4 to 6 police stations (Law & Order and Traffic) in a police sub-division. Personally investigates grave crimes (homicides, dacoities, atrocities), oversees intelligence operations, commands armed police reserves during communal bandobast, and liaises directly with the SP.',
              hierarchy: ['Deputy Superintendent of Police (DySP)', 'Additional Superintendent of Police', 'Nomination to IPS (Superintendent of Police)']
            },
            {
              role: 'Assistant Commissioner of Commercial Taxes (ACCT - Group A)',
              department: 'Finance Department (Commercial Taxes Department)',
              nature: 'State Tax Executive & Fiscal Intelligence',
              description: 'Enforces Karnataka Goods and Services Tax (KGST) and Integrated GST across commercial districts. Directs intelligence raids on tax evasion, audits corporate financial balance sheets, oversees high-value recovery, and adjudicates tax dispute appeals.',
              hierarchy: ['Assistant Commissioner (Commercial Taxes)', 'Deputy Commissioner (CT)', 'Joint Commissioner (CT)', 'Additional Commissioner of Commercial Taxes']
            },
            {
              role: 'Assistant Director, Food & Civil Supplies (Group A)',
              department: 'Food, Civil Supplies & Consumer Affairs Department',
              nature: 'Public Distribution System (PDS) & Food Security',
              description: 'Administers the statewide Anna Bhagya subsidized food scheme. Manages food grains logistics from Karnataka Food & Civil Supplies Corporation (KFCSC) godowns, inspects fair price shops, investigates illegal hoarding, and enforces the Essential Commodities Act.',
              hierarchy: ['Assistant Director', 'Deputy Director', 'Joint Director of Food & Civil Supplies']
            },
            {
              role: 'Tehsildar (KAS - Group B)',
              department: 'Revenue Department',
              nature: 'Taluk Executive Magistrate & Grassroots Apex Officer',
              description: 'The premier ground-level officer for citizens. Heads the Taluk administration, issues statutory caste and income certificates, manages RTC land mutations, supervises Village Accountants and Revenue Inspectors, presides over local dispute conciliations, and acts as Incident Commander during natural disasters.',
              hierarchy: ['Tehsildar Grade II', 'Tehsildar Grade I', 'Assistant Commissioner (Promoted)']
            },
            {
              role: 'Assistant Director, Social Welfare / Tribal Welfare (Group B)',
              department: 'Social Welfare Department',
              nature: 'Vulnerable Community Welfare Administration',
              description: 'Administers government pre-matric and post-matric hostels across the district, disburses SC/ST scholarships, implements the Special Component Plan (SCP) and Tribal Sub-Plan (TSP), and coordinates legal assistance under the PoA Atrocities Act.',
              hierarchy: ['Assistant Director', 'Deputy Director', 'Joint Director of Social Welfare']
            },
            {
              role: 'Chief Officer, Municipalities / City Municipal Councils (Group B)',
              department: 'Directorate of Municipal Administration (DMA) / Urban Development',
              nature: 'Urban Governance & Civic Infrastructure',
              description: 'Executive head of Town Municipal Councils (TMC) and City Municipal Councils (CMC). Enforces building bylaws, oversees municipal solid waste management, manages drinking water utility lines, collects property taxes, and executes urban poverty eradication missions.',
              hierarchy: ['Chief Officer Grade II', 'Chief Officer Grade I', 'Municipal Commissioner (KAS)']
            }
          ]
        },
        {
          id: 'kas-career-visual-operational',
          title: 'What Does a KAS Officer Actually Do? Operational Visual',
          subtitle: 'The 8 core domains of day-to-day governance in Karnataka',
          kicker: 'Field Governance Matrix · Req 19',
          layout: 'editorial-concept',
          highlightQuote: 'A KAS officer is not an armchair theorist. They are on the move every single day: from conducting land court hearings to inspecting water treatment plants and calming local agitations.',
          mainProse: [
            'Instead of viewing KAS solely through the lens of exam preparation, students must understand the real operational matrix of an officer serving across Karnataka:'
          ],
          bulletPoints: [
            { label: '1. Revenue & Land Governance', text: 'Presiding over land mutation hearings, investigating bogus RTC records, surveying village commons (Gomala), and protecting government encroached properties.' },
            { label: '2. Law & Order and Magistracy', text: 'Promulgating prohibitory orders under Section 144 CrPC during communal tensions, supervising police bandobast for festivals, and verifying arms licenses.' },
            { label: '3. Rural Development & Panchayats', text: 'Executing water watershed schemes, inspecting MGNREGA rural check dams, verifying beneficiary selection for housing schemes, and attending Taluk Panchayat meetings.' },
            { label: '4. Urban Municipal Administration', text: 'Coordinating city solid waste management, modernizing property tax collection through GIS, clearing illegal building deviations, and upgrading storm water drains.' },
            { label: '5. Social Welfare & Direct Benefits', text: 'Supervising state welfare hostels, ensuring nutrition standards in government residential schools (Morarji Desai Vidyalayas), and disbursing widow and elderly pensions.' },
            { label: '6. Regulatory & Market Oversight', text: 'Inspecting Fair Price Shops, raiding adulterated pesticide depots, monitoring APMC agricultural markets, and enforcing minimum support prices for farmers.' },
            { label: '7. District Field Administration', text: 'Directing flood relief boats, organizing drought cattle camps, leading rescue operations during building collapses, and acting as frontline disaster commanders.' },
            { label: '8. Policy Implementation & Citizen Redressal', text: 'Conducting weekly "Jana Spandana" grievance redressal camps, settling decades-old land disputes on the spot, and reporting ground feedback to the State Secretariat.' }
          ]
        }
      ]
    }
  ]
};
