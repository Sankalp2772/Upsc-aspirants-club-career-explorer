import { PresentationChapter } from '../../types/presentation';

export const chapter02b_lbsnaa: PresentationChapter = {
  id: 'lbsnaa-journey',
  chapterNumber: '03',
  title: 'Life After UPSC: LBSNAA, Allocation & IAS Career',
  shortTitle: 'LBSNAA & IAS Journey',
  description: 'From Dholpur House results to Charleville Mussoorie, service allocation matrices, cadre policy, and 35-year administrative trajectories.',
  iconName: 'Sparkles',
  accent: '#F59E0B',
  sections: [
    // -------------------------------------------------------------
    // Section 1: UPSC → Selection → Training → Service - REQ 8
    // -------------------------------------------------------------
    {
      id: 'selection-to-service-pipeline',
      title: 'UPSC → Selection → Training → Service',
      shortName: 'The Complete Journey',
      conductingAuthority: 'DoPT & Civil Service Induction System',
      badge: 'Visual Storyline · Req 8',
      description: 'The holistic journey from competitive examination to sovereign executive authority in the field.',
      slides: [
        {
          id: 'complete-journey-storyline',
          title: 'From Aspirant to Administrator: The 6-Stage Journey',
          subtitle: 'The holistic lifecycle from examination hall to district leadership',
          kicker: 'Visual Storyline · Req 8',
          layout: 'journey-flow',
          highlightQuote: 'Selection is not the finish line—it is the admission ticket to a rigorous statutory apprenticeship before commanding sovereign authority.',
          journeySteps: [
            {
              order: '01',
              stageName: 'EXAMINATION PIPELINE',
              subTitle: 'Prelims, Mains, and Personality Test',
              badge: 'Screening to Merit',
              summary: '12 months of intellectual rigor across 11 papers and oral interview board at Dholpur House, New Delhi.',
              keyActions: ['Prelims GS + CSAT', 'Descriptive Written Mains (1750M)', 'Personality Test Board (275M)'],
              outcome: 'Consolidated Merit Score out of 2025 Marks'
            },
            {
              order: '02',
              stageName: 'FINAL MERIT RESULT',
              subTitle: 'Presidential Recommendation List',
              badge: 'Public Gazetted List',
              summary: 'UPSC publishes the list of recommended candidates in order of merit, fulfilling announced service vacancies.',
              keyActions: ['Release of AIR Rank List', 'Dossier transfer to DoPT', 'Medical fitness confirmation'],
              outcome: 'Recommendation for Union Appointment'
            },
            {
              order: '03',
              stageName: 'SERVICE ALLOCATION',
              subTitle: 'Rank + Category + DAF Preference Matrix',
              badge: 'DoPT Notification',
              summary: 'Department of Personnel & Training applies the allocation algorithm matching merit rank, reservation quotas, and candidate preference.',
              keyActions: ['Meritorious Reserved Candidate rules', 'DAF service ranking verification', 'Allotment to IAS, IPS, IFS, IRS, etc.'],
              outcome: 'Formal Service Appointment'
            },
            {
              order: '04',
              stageName: 'CADRE ALLOCATION',
              subTitle: 'State Allotment for All India Services',
              badge: '5-Zone Policy',
              summary: 'For IAS, IPS, and IFoS: Service allocation determines WHAT you are; Cadre allocation determines WHERE you will govern for 35 years.',
              keyActions: ['5 Zonal choices applied', '1:2 Insider vs Outsider roster', 'State Government notification'],
              outcome: 'Allotment to State / Joint Cadre'
            },
            {
              order: '05',
              stageName: 'INDUCTION TRAINING',
              subTitle: 'LBSNAA & National Academies',
              badge: 'Mussoorie & State Attachments',
              summary: 'Foundation Course in Mussoorie followed by specialized service academies, Bharat Darshan, and 1 full year of District Training.',
              keyActions: ['15-Week Common Foundation Course', 'Professional Course Phase-I & II', '52-Week District Field Apprenticeship'],
              outcome: 'Confirmation of Gazetted Commission'
            },
            {
              order: '06',
              stageName: 'INDEPENDENT FIELD POSTING',
              subTitle: 'Sub-Divisional Magistrate / ASP',
              badge: 'Sovereign Executive Power',
              summary: 'Officer assumes direct statutory control of a revenue sub-division or police division, exercising executive magistracy from Day 1.',
              keyActions: ['Sub-Divisional Magistrate (SDM)', 'Appellate Land Revenue Court', 'Disaster & Public Order Command'],
              outcome: 'Direct Public Service & District Leadership'
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 2: Life at LBSNAA & Bharat Darshan - REQ 9
    // -------------------------------------------------------------
    {
      id: 'life-at-lbsnaa',
      title: 'LBSNAA: Life After UPSC',
      shortName: 'LBSNAA Academy Life',
      conductingAuthority: 'Lal Bahadur Shastri National Academy of Administration, Mussoorie',
      badge: 'Cradle of Civil Service · Req 9',
      description: 'The premier national academy in Mussoorie: Foundation Course, IAS Phase-I, and the legendary Bharat Darshan.',
      slides: [
        {
          id: 'lbsnaa-selection-mussoorie',
          title: 'Selection → Mussoorie: Charleville Estate',
          subtitle: 'Arrival at 6,500 feet above sea level in the Himalayas',
          kicker: 'LBSNAA Induction · Req 9',
          layout: 'editorial-concept',
          highlightQuote: 'Charleville Estate in Mussoorie is where competitive candidates are forged into constitutional leaders with a pan-Indian consciousness.',
          imageBanner: {
            url: '/images/lbsnaa_campus.jpg',
            caption: 'Lal Bahadur Shastri National Academy of Administration (LBSNAA), Charleville, Mussoorie',
            tag: 'CRADLE OF THE CIVIL SERVICES'
          },
          mainProse: [
            'Upon receiving appointment letters from the President of India, selected officer trainees assemble at the iconic Lal Bahadur Shastri National Academy of Administration (LBSNAA) in Mussoorie, Uttarakhand.',
            'Founded in 1959, LBSNAA trains officers of the All India Services (IAS, IPS, IFoS) and Group A Central Civil Services (IFS, IRS, IA&AS, etc.), instilling the constitutional creed: Sheelam Param Bhushanam (Character is the highest virtue).'
          ],
          bulletPoints: [
            { label: 'The Common Foundation Course (FC)', text: 'A 15-week common training program where officers of all services live, study, dine, and train together, forging lifelong inter-service friendships and eliminating bureaucratic silos.' },
            { label: 'Village Visit (7 Days)', text: 'Trainees are dispatched in small teams to spend an entire week living in remote, underprivileged villages across India, observing grassroots realities without official escort or protocol.' },
            { label: 'Himalayan Trekking Expedition', text: 'Rigorous high-altitude survival trek testing physical stamina, collective camaraderie, emergency response, and leadership under environmental adversity.' }
          ]
        },
        {
          id: 'lbsnaa-phase1-details',
          title: 'IAS Professional Course Phase-I (~20 Weeks)',
          subtitle: 'Rigorous academic and administrative foundations exclusively for IAS Officer Trainees',
          kicker: 'Phase-I Curriculum · Req 9',
          layout: 'stages-process',
          mainProse: [
            'Official LBSNAA guidelines describe Phase-I as an intensive ~20-week program comprising academic instruction, practical simulations, the Winter Study Tour (Bharat Darshan), and block leave.'
          ],
          stages: [
            {
              stepNumber: '01',
              title: 'Administrative Law & Criminal Codes',
              badge: 'Magisterial Powers',
              description: 'Exhaustive training in Criminal Procedure Code (CrPC), Penal Code, Evidence Act (Bharatiya Nyaya & Nagarik Suraksha Sanhita), Land Revenue Codes, and executive injunctions.'
            },
            {
              stepNumber: '02',
              title: 'Public Systems & Financial Management',
              badge: 'Fiscal Accountability',
              description: 'Treasury operations, public procurement rules (GFR, GeM), audit compliance under CAG, central/state finance devolution, and district budgeting.'
            },
            {
              stepNumber: '03',
              title: 'Regional Language Mastery',
              badge: 'Cadre Vernacular',
              description: 'Mandatory instruction in reading, writing, and speaking the official language of the trainee’s allotted state cadre (e.g. Kannada for Karnataka cadre officers).'
            },
            {
              stepNumber: '04',
              title: 'E-Governance & Emerging Public Systems',
              badge: 'Modern Governance',
              description: 'Direct Benefit Transfer (DBT) architectures, GIS mapping for land records, drone data analytics, cyber security protocols, and artificial intelligence in public grievance redressal.'
            }
          ]
        },
        {
          id: 'lbsnaa-bharat-darshan',
          title: 'Bharat Darshan: The Winter Study Tour',
          subtitle: 'LBSNAA → The Length & Breadth of India: Real Institutional Attachments',
          kicker: 'Winter Study Tour · Req 9',
          layout: 'career-pathway',
          highlightQuote: 'Bharat Darshan is an 8-week cross-country immersion connecting officers with India’s borders, villages, high-tech factories, and indigenous communities.',
          careerPaths: [
            {
              role: 'Armed Forces Attachment (Army, Navy, Air Force)',
              department: 'Ministry of Defence / Forward Operational Commands',
              nature: 'Strategic & Military Interface',
              description: 'Living alongside soldiers at forward border outposts (LoC in Kashmir, LAC in Ladakh, or Arunachal Pradesh), experiencing tactical patrolling, winter warfare, and civil-military coordination in conflict zones.',
              hierarchy: ['Border Outpost Living', 'Siachen / High-Altitude Briefings', 'Warship / Air Base Deployment', 'Civil-Military Interoperability']
            },
            {
              role: 'Public & Private Sector Industrial Immersion',
              department: 'Mega-Infrastructure, Ports, Tech Hubs & PSUs',
              nature: 'Industrial & Economic Systems',
              description: 'Attachments at ISRO space launch facilities, major maritime container ports, smart city command centers, and industrial mega-corridors to understand commercial scale and supply chains.',
              hierarchy: ['PSU Production Floors', 'Port & Logistics Hubs', 'Smart City Command Centers', 'Corporate Governance Dialogue']
            },
            {
              role: 'Tribal, Forest & Civil Society Attachments',
              department: 'MoEFCC, Tribal Affairs & Grassroots NGOs',
              nature: 'Community & Grassroots Realities',
              description: 'Immersion with primitive tribal groups in remote forest tracts, studying tribal forest rights implementation, and working alongside pioneering civil society NGOs (e.g. SEWA, Ralegan Siddhi, Kudumbashree).',
              hierarchy: ['Tribal Hamlets Stay', 'Forest Rights Act Audits', 'SHG Model Fieldwork', 'Social Impact Assessment']
            },
            {
              role: 'Urban Local Bodies & Metro Governance',
              department: 'Municipal Corporations & Urban Transit Authorities',
              nature: 'Megacity Administration',
              description: 'Studying solid waste recycling facilities, metropolitan water supply boards, slum rehabilitation authorities, and metro rail operations in India’s largest urban agglomerations.',
              hierarchy: ['Municipal Commissioner Briefings', 'Solid Waste Plant Audits', 'Slum Redevelopment Sites', 'Urban Transit Command']
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 3: "A Day at LBSNAA" - REQ 10
    // -------------------------------------------------------------
    {
      id: 'day-at-lbsnaa',
      title: 'A Day at LBSNAA: The Daily Rhythm',
      shortName: 'A Day at LBSNAA',
      conductingAuthority: 'LBSNAA Campus Life & Officer Trainee Routine',
      badge: 'Illustrative Experience · Req 10',
      description: 'The visual timeline of daily training life in Mussoorie and the 6 foundational transformational pillars.',
      slides: [
        {
          id: 'lbsnaa-daily-timeline',
          title: 'Typical Training-Day Elements at LBSNAA',
          subtitle: 'A balanced visual timeline of learning, fitness, discipline, and camaraderie in Mussoorie',
          kicker: 'Campus Life · Req 10',
          layout: 'lbsnaa-day'
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 4: District Training & Phase-II - REQ 11 & 12
    // -------------------------------------------------------------
    {
      id: 'district-training-phase2',
      title: 'District Training & Return to Academy (Phase-II)',
      shortName: 'District Training & Phase-II',
      conductingAuthority: 'State Cadres & LBSNAA Mussoorie',
      badge: 'Ground Administration · Req 11 & 12',
      description: 'The 52-week ground-level apprenticeship in the allotted state cadre followed by consolidation in Phase-II.',
      slides: [
        {
          id: 'from-academy-to-district',
          title: 'From Academy to District: The 52-Week Field Apprenticeship',
          subtitle: 'Hands-on grassroots governance under the mentorship of the District Magistrate',
          kicker: 'Field Apprenticeship · Req 11',
          layout: 'stages-process',
          highlightQuote: 'District training transforms book learning into real-life administrative wisdom. For 1 full year, the trainee becomes the ground-level face of government.',
          mainProse: [
            'After completing Phase-I in Mussoorie, IAS Officer Trainees depart for their allotted State Cadre for approximately 50 to 52 weeks of rigorous District Training.',
            'Attached as Assistant Collector / Assistant Magistrate (Under Training) in a designated district, the officer rotates through every tier of local governance:'
          ],
          stages: [
            {
              stepNumber: 'Rotation 01',
              title: 'Tehsil & Taluk Attachment',
              badge: 'Land Revenue Core',
              description: 'Shadowing the Tehsildar, learning Record of Rights (RTC), land surveys, mutation dispute courts, caste and income certification, and local public grievances.'
            },
            {
              stepNumber: 'Rotation 02',
              title: 'Block Development Officer (BDO)',
              badge: 'Rural Welfare Schemes',
              description: 'Executing rural employment (MGNREGA), rural housing (PMAY-G), Jal Jeevan Mission drinking water supply, and Gram Panchayat financial devolution.'
            },
            {
              stepNumber: 'Rotation 03',
              title: 'Police & Law-and-Order Rotation',
              badge: 'Public Order Interface',
              description: 'Attachment with Station House Officers (SHO) and Superintendent of Police (SP), observing riot control drills, crime scene investigation, and bandobast.'
            },
            {
              stepNumber: 'Rotation 04',
              title: 'Judiciary & Collectorate Sections',
              badge: 'Legal & Administrative Acumen',
              description: 'Working in the District Treasury, arms licensing branch, disaster control room, and sitting alongside judicial magistrates in court trials.'
            },
            {
              stepNumber: 'Rotation 05',
              title: 'Independent Charge as Tehsildar / BDO',
              badge: 'Real Statutory Responsibility',
              description: 'The trainee is assigned independent statutory executive charge of a real taluk or block for 4–6 weeks, signing legal orders and resolving genuine citizen crises.'
            }
          ]
        },
        {
          id: 'phase2-consolidation',
          title: 'Phase-II: Reflection, Debriefing & Advanced Leadership',
          subtitle: 'Returning to Mussoorie for ~8 weeks to consolidate ground experience into policy vision',
          kicker: 'Return to Academy · Req 12',
          layout: 'editorial-concept',
          highlightQuote: 'Phase-II is where 180 trainees bring their collective district battle-scars back to the classroom, comparing solutions from 28 states.',
          mainProse: [
            'After one intense year in the field, officers return to LBSNAA for approximately 8 weeks of Phase-II training.',
            'Official LBSNAA guidelines describe Phase-II as an intensive consolidation exercise where trainees analyze real administrative crises they handled, share good administrative practices across states, and receive advanced instruction before taking regular sub-divisional postings.'
          ],
          bulletPoints: [
            { label: 'District Training Debriefing & Presentations', text: 'Each trainee submits an exhaustive dissertation and presents specific case studies (e.g. handling a communal flare-up, managing flood evacuations, or detecting a land scam).' },
            { label: 'Cross-Cadre Good Practices Sharing', text: 'Comparing innovations across states: how Tamil Nadu handles public health delivery, how Karnataka manages digitized land records (Bhoomi), or how Odisha achieves zero casualties in cyclones.' },
            { label: 'Preparation for Early-Career Responsibilities', text: 'Specialized masterclasses on public inquiry procedures, executive magisterial trials under CrPC, high-value tender approvals, and interaction with media.' },
            { label: 'Assistant Secretary Attachment (Central Govt)', text: 'Following Phase-II, officers are deployed for 3 months as Assistant Secretaries in Central Government Ministries in New Delhi, interacting directly with Union Joint Secretaries before reporting to their sub-divisions as SDMs.' }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 5: Rank → Service Allocation (The Real Algorithm) - REQ 13
    // -------------------------------------------------------------
    {
      id: 'service-allocation-deepdive',
      title: 'How Does Rank Turn into a Service?',
      shortName: 'Service Allocation Rules',
      conductingAuthority: 'Department of Personnel & Training (DoPT)',
      badge: 'Allocation Mechanics · Req 13',
      description: 'Explaining the real relationship between Final Rank, Category, DAF Preferences, Vacancies, and Reservation Rules.',
      slides: [
        {
          id: 'service-allocation-rules',
          title: 'How Does Rank Turn into a Service? (It’s Not Just Rank = IAS)',
          subtitle: 'The 5-factor statutory matrix governing civil service allocation by DoPT',
          kicker: 'Allocation Algorithm · Req 13',
          layout: 'editorial-concept',
          highlightQuote: 'Do not make the simplistic mistake of assuming Rank 1 = IAS, Rank 2 = IAS. Service allocation depends strictly on preferences, category quotas, medical criteria, and vacancies.',
          mainProse: [
            'Every year, DoPT allocates recommended candidates to services based on the statutory Civil Services Examination Allocation Rules.',
            'The allocation engine operates on FIVE interconnected variables:'
          ],
          bulletPoints: [
            { label: '1. Final Merit Rank', text: 'Overall rank secured out of 2025 marks in the final UPSC merit list.' },
            { label: '2. Candidate Service Preferences (DAF)', text: 'The precise order in which the candidate ranked services in their Detailed Application Form. If AIR 1 gave 1st preference to Indian Foreign Service (IFS), they will be allocated IFS, not IAS!' },
            { label: '3. Category & Constitutional Reservation', text: 'General (UR), EWS, OBC, SC, ST, and PwBD quotas. Each service has a fixed number of seats reserved per category.' },
            { label: '4. Meritorious Reserved Candidate (MRC) Rules', text: 'A reserved category candidate who qualifies on General Merit without availing relaxations can take a General seat, or choose to utilize their category status to secure their top-preferred service (e.g. IAS).' },
            { label: '5. Medical & Functional Fitness', text: 'Services like IPS require strict chest expansion, height (165cm for male, 150cm for female), and color vision standards. A high rank without IPS medical clearance is allocated to their next preferred service.' }
          ]
        },
        {
          id: 'worked-example-service-allocation',
          title: 'Historical Worked Example: CSE Service Cutoffs',
          subtitle: 'Real distribution showing how rank thresholds vary dramatically by category',
          kicker: 'Real Distribution Data · Req 13',
          layout: 'stages-process',
          mainProse: [
            'Consider a typical UPSC CSE batch with ~180 IAS vacancies (General: ~73, EWS: ~18, OBC: ~48, SC: ~27, ST: ~14):'
          ],
          stages: [
            {
              stepNumber: 'General (UR)',
              title: 'IAS Closes Around Rank 75–80',
              badge: 'Top 0.008% of Applicants',
              description: 'Because almost all top 80 General candidates prefer IAS or IFS, the General IAS list typically closes by Rank 78. A General candidate at Rank 82 with IAS as 1st preference is allocated IPS or IFS instead.',
              metrics: [{ label: 'IAS Cutoff', value: '~Rank 78' }, { label: 'IPS Cutoff', value: '~Rank 230' }]
            },
            {
              stepNumber: 'OBC Category',
              title: 'IAS Extends to Rank 350–380',
              badge: 'Category Merit Reservation',
              description: 'An OBC candidate securing Rank 340 gets allocated to IAS because of the 48 reserved OBC vacancies, whereas a General candidate at Rank 85 cannot get IAS.',
              metrics: [{ label: 'IAS Cutoff', value: '~Rank 370' }, { label: 'IPS Cutoff', value: '~Rank 480' }]
            },
            {
              stepNumber: 'SC & ST Cohorts',
              title: 'IAS Extends to Rank 500–600+',
              badge: 'Constitutional Representation',
              description: 'SC candidates frequently secure IAS allocation up to ~Rank 500–530, and ST candidates up to ~Rank 580–620, fulfilling constitutional representation mandates.',
              metrics: [{ label: 'SC IAS Cutoff', value: '~Rank 510' }, { label: 'ST IAS Cutoff', value: '~Rank 600' }]
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 6: Cadre Allocation Policy - REQ 14
    // -------------------------------------------------------------
    {
      id: 'cadre-allocation-policy',
      title: 'Cadre Allocation: Service ≠ Cadre',
      shortName: 'Cadre Allocation Policy',
      conductingAuthority: 'DoPT Cadre Allocation Policy (2017 Onwards)',
      badge: 'Zonal System & Roster · Req 14',
      description: 'Understanding how All India Service officers are assigned to State Cadres using the 5-Zone policy and Insider-Outsider ratio.',
      slides: [
        {
          id: 'service-vs-cadre',
          title: 'SERVICE ≠ CADRE: Understanding the Crucial Distinction',
          subtitle: 'Service determines your administrative power; Cadre determines your geographic destiny',
          kicker: 'Cadre Architecture · Req 14',
          layout: 'editorial-concept',
          highlightQuote: 'Central civil services (IRS, IA&AS) have no state cadre; their officers serve pan-India in central offices. But All India Services (IAS, IPS, IFoS) are permanently allotted to a State or Joint Cadre.',
          mainProse: [
            'When an officer is selected for the Indian Administrative Service (IAS), they do not belong to the Central Government directly. They belong to a specific State Cadre (e.g. Karnataka Cadre, Maharashtra Cadre, Bihar Cadre) or a Joint Cadre (e.g. AGMUT, Assam-Meghalaya).',
            'Throughout their 35-year career, the officer will serve the State Government of that cadre, visiting the Central Government only on temporary Central Deputation tenures.'
          ],
          bulletPoints: [
            { label: 'The 5-Zone Cadre Policy', text: 'India is carved into 5 administrative Zones. Candidates must rank all 5 Zones in order of preference, and rank every state within each zone.' },
            { label: 'The 1:2 Insider vs Outsider Roster', text: 'By law, every state cadre must maintain a 1:2 ratio: for every 1 "Insider" officer from that home state, 2 officers must be "Outsiders" from other states to preserve national integration.' },
            { label: 'No Guarantee of Home State', text: 'Even securing AIR 1 does NOT guarantee your home state if there is no Insider vacancy available in your category for that state in that specific batch year!' }
          ]
        },
        {
          id: 'cadre-zones-worked-example',
          title: 'The 5 Zonal Architecture & Worked Allocation Example',
          subtitle: 'The 5 geographical clusters and how an aspirant from Karnataka is allocated',
          kicker: 'Cadre Algorithm · Req 14',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'Zone I (North)',
              title: 'Northern Frontier & Plains',
              badge: 'AGMUT & North',
              description: 'AGMUT (Arunachal, Goa, Mizoram, Delhi & UTs), Himachal Pradesh, Uttarakhand, Punjab, Rajasthan, Haryana.'
            },
            {
              stepNumber: 'Zone II (North-Central)',
              title: 'Hindi Heartland & East',
              badge: 'Central Plains',
              description: 'Uttar Pradesh, Bihar, Jharkhand, Odisha.'
            },
            {
              stepNumber: 'Zone III (West-Central)',
              title: 'Western Industrial Hubs',
              badge: 'West & Central',
              description: 'Gujarat, Maharashtra, Madhya Pradesh, Chhattisgarh.'
            },
            {
              stepNumber: 'Zone IV (North-East)',
              title: 'Eastern & North-Eastern States',
              badge: 'North-East',
              description: 'West Bengal, Sikkim, Assam-Meghalaya, Manipur, Tripura, Nagaland.'
            },
            {
              stepNumber: 'Zone V (South)',
              title: 'Peninsular South India',
              badge: 'Southern States',
              description: 'Andhra Pradesh, Karnataka, Kerala, Tamil Nadu, Telangana.'
            }
          ]
        }
      ]
    },

    // -------------------------------------------------------------
    // Section 7: "Where Does an IAS Officer Go?" Career Pathway - REQ 15
    // -------------------------------------------------------------
    {
      id: 'where-does-ias-go',
      title: 'Where Does an IAS Officer Go?',
      shortName: 'IAS 35-Year Pathway',
      conductingAuthority: 'All India Service Career Hierarchy',
      badge: 'Career Evolution · Req 15',
      description: 'The factual 35-year administrative journey from Sub-Divisional Magistrate to Cabinet Secretary of India.',
      slides: [
        {
          id: 'ias-career-evolution-pathway',
          title: 'The 35-Year Career Trajectory of an IAS Officer',
          subtitle: 'From Sub-Divisional field magistracy to the apex policymaking sanctum of the Republic',
          kicker: 'Career Pathway · Req 15',
          layout: 'career-pathway',
          highlightQuote: 'The career of an IAS officer is a continuous expansion of responsibility: from governing a taluk to administering a district of 3 million citizens, to shaping national policy for 1.4 billion people.',
          careerPaths: [
            {
              role: 'Sub-Divisional Magistrate (SDM) / Assistant Commissioner',
              department: 'Revenue Sub-Division (Field Administration)',
              nature: 'Years 1 to 4 · Junior Time Scale & Senior Time Scale',
              description: 'Commands a Revenue Sub-Division (spanning 2 to 4 taluks). Exercises executive magisterial powers under CrPC, conducts land revenue dispute courts, maintains law and order, supervises rural welfare schemes, and manages flood/drought relief.',
              hierarchy: ['Assistant Collector (Under Training)', 'Sub-Divisional Magistrate (SDM)', 'Sub-Collector / Assistant Commissioner']
            },
            {
              role: 'District Magistrate (DM) / Deputy Commissioner (DC) / District Collector',
              department: 'District Administration / Revenue & Police Coordination',
              nature: 'Years 4 to 12 · Junior Administrative Grade & Selection Grade',
              description: 'The supreme executive leader of a district of 2 to 4 million people. Head of the District Magistracy, Collector of revenues, Commander of disaster management, coordinator of district police (SP), and Returning Officer for parliamentary elections.',
              imageUrl: '/images/ias_dm_bungalow.jpg',
              imageCaption: 'Official Heritage Residence & District Magistracy Command Vehicle with National Emblem Flag',
              hierarchy: ['Chief Executive Officer (CEO), Zilla Panchayat', 'District Magistrate / Deputy Commissioner', 'District Collector']
            },
            {
              role: 'Director / Commissioner of Departments & State Secretariat',
              department: 'State Government Line Departments (Health, Education, Commercial Tax)',
              nature: 'Years 13 to 22 · Super Time Scale',
              description: 'Heads major state executive directorates (e.g. Commissioner of Commercial Taxes, Director of Health Services, MD of State Power Supply Corporation) or serves as Secretary to State Government formulating statewide sector budgets.',
              hierarchy: ['Managing Director of State PSUs', 'Director / Commissioner of Line Department', 'Secretary to State Government']
            },
            {
              role: 'Principal Secretary & Joint Secretary to Govt of India',
              department: 'Central Ministries (Finance, Home, Commerce) / State Secretariat',
              nature: 'Years 22 to 30 · Higher Administrative Grade (HAG)',
              description: 'High-level policy formulation. As Principal Secretary in the State or Joint Secretary in Central Ministries (on Central Deputation), the officer drafts national legislation, negotiates foreign trade agreements, and controls multi-billion-rupee budgets.',
              hierarchy: ['Joint Secretary (Govt of India)', 'Principal Secretary (State)', 'Additional Secretary (Govt of India)']
            },
            {
              role: 'Chief Secretary of State / Union Secretary / Cabinet Secretary',
              department: 'Apex Governance / Cabinet Secretariat, Rashtrapati Bhavan',
              nature: 'Years 30 to 36 · Apex Scale',
              description: 'The highest administrative summits of India. Chief Secretary heads the entire state civil service; Union Secretary leads critical national ministries (Home, Finance, Defence); Cabinet Secretary is the supreme civil servant of the Republic, reporting directly to the Prime Minister.',
              hierarchy: ['Additional Chief Secretary (State)', 'Chief Secretary of State', 'Secretary to Govt of India', 'Cabinet Secretary of India (Apex)']
            }
          ]
        }
      ]
    }
  ]
};
