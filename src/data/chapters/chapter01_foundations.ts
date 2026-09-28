import { PresentationChapter } from '../../types/presentation';

export const chapter01_foundations: PresentationChapter = {
  id: 'foundations',
  chapterNumber: '01',
  title: 'Understanding Government Examinations',
  shortTitle: 'Foundations',
  description: 'The constitutional architecture, classification of public services, and the national recruitment ecosystem.',
  iconName: 'Landmark',
  accent: '#C5A059',
  sections: [
    {
      id: 'vision-and-landscape',
      title: 'Opening & The National Landscape',
      shortName: 'Opening Overview',
      conductingAuthority: 'KLE Technological University, Hubballi',
      badge: 'Curated by UPSC Aspirants Club',
      description: 'An introduction to the breadth of public service recruitment pathways in India.',
      slides: [
        {
          id: 'opening-hero',
          title: 'FIRST GLIMPSE',
          subtitle: 'Government Examinations & Careers Explorer',
          kicker: 'UPSC Aspirants Club · KLE Technological University, Hubballi',
          layout: 'hero',
          highlightQuote: 'Explore the examinations. Understand the pathways. Discover the possibilities.',
          mainProse: [
            'Public service in India represents one of the most impactful, institutionally respected career paths available to young graduates.',
            'Yet for many aspirants, the sheer diversity of examinations, conducting commissions, eligibility criteria, and examination stages creates confusion.',
            'FIRST GLIMPSE was designed by the UPSC Aspirants Club at KLE Technological University to bring absolute clarity, structural depth, and strategic insight to every serious aspirant.'
          ],
          keyTakeaways: [
            'Clear demarcation between Union, State, Specialized and Defence recruitment systems',
            'Step-by-step deconstruction of stages, papers, patterns and eligibility',
            'Realistic career pathways and institutional hierarchies post-selection'
          ]
        },
        {
          id: 'one-country-pathways',
          title: 'One Country. Many Examinations. Countless Pathways.',
          subtitle: 'The recruitment architecture of the Indian Republic',
          kicker: 'The Core Premise',
          layout: 'landscape',
          highlightQuote: 'Government recruitment is not one examination or one career. It is an interlocking matrix of constitutional commissions, statutory boards, and institutional bodies.',
          mainProse: [
            'A common misconception among beginners is conflating all public sector tests under a single umbrella or assuming that preparing for one automatically qualifies an aspirant for another.',
            'Each examination system serves distinct constitutional functions, administrative tiers, and technical specializations. Understanding their boundaries is the first requirement of any disciplined preparation.'
          ],
          stages: [
            {
              stepNumber: '01',
              title: 'Union Constitutional (UPSC)',
              badge: 'Articles 315-323',
              description: 'Selects the top administrative, diplomatic, police, and specialized technical officers for the Union and All India Services.'
            },
            {
              stepNumber: '02',
              title: 'State Public Service (e.g. KPSC)',
              badge: 'State Administration',
              description: 'Recruits officers for state administrative machinery, regional revenue leadership, and state executive departments.'
            },
            {
              stepNumber: '03',
              title: 'Staff Selection (SSC)',
              badge: 'Group B & C Non-Gazetted',
              description: 'Provides executive backbone and inspectorate cadres across Central Government Ministries and attached offices.'
            },
            {
              stepNumber: '04',
              title: 'Banking & Financial (RBI, IBPS, SBI)',
              badge: 'Monetary & Commercial',
              description: 'Drives national monetary policy, rural developmental financing, and public sector commercial banking operations.'
            },
            {
              stepNumber: '05',
              title: 'Defence & Security (UPSC, AFCAT, SSB)',
              badge: 'National Security',
              description: 'Commissions military officers across Army, Navy, Air Force, and paramilitary commanders in Central Armed Forces.'
            },
            {
              stepNumber: '06',
              title: 'Technical & Scientific (ISRO, DRDO, PSUs)',
              badge: 'Technological Sovereignty',
              description: 'Recruits engineers and research scientists for strategic space missions, defence labs, and energy corporations.'
            }
          ]
        },
        {
          id: 'constitutional-framework',
          title: 'The Constitutional Architecture',
          subtitle: 'Articles 308 to 323 of the Constitution of India',
          kicker: 'Constitutional Mandate',
          layout: 'editorial-concept',
          highlightQuote: 'Civil servants are instruments of constitutional governance, bound by the rule of law and political neutrality.',
          imageBanner: {
            url: '/images/central_secretariat.jpg',
            caption: 'North & South Block / Central Secretariat, Kartavya Path, New Delhi',
            tag: 'CONSTITUTIONAL APPARATUS OF THE REPUBLIC'
          },
          mainProse: [
            'Part XIV of the Indian Constitution governs Services under the Union and the States.',
            'Article 312 provides for the creation of All India Services (IAS, IPS, IFoS) which are common to both the Union and the States, functioning as the connective administrative tissue of the federation.',
            'Articles 315 to 323 establish the Union Public Service Commission and State Public Service Commissions as autonomous constitutional watchdogs to conduct examinations free from political interference.'
          ],
          bulletPoints: [
            { label: 'Article 311', text: 'Constitutional safeguards against arbitrary dismissal or reduction in rank of civil servants without formal inquiry.' },
            { label: 'Article 312', text: 'Empowers Parliament (via Rajya Sabha resolution) to create new All India Services in the national interest.' },
            { label: 'Article 315', text: 'Mandatory establishment of a Public Service Commission for the Union and for each State.' },
            { label: 'Article 320', text: 'Defines the constitutional functions: examinations for appointment, and mandatory consultation on disciplinary matters.' }
          ]
        },
        {
          id: 'service-classifications',
          title: 'Classification of Public Services',
          subtitle: 'Hierarchies, Cadres, and Gazetted Status',
          kicker: 'Structure & Status',
          layout: 'stages-process',
          mainProse: [
            'Public posts under the Government of India are classified into four distinct classes based on administrative responsibility, decision-making authority, and rank in the Warrant of Precedence.'
          ],
          stages: [
            {
              stepNumber: 'Group A',
              title: 'Group A (Class I Gazetted)',
              badge: 'Highest Policy & Executive',
              description: 'Includes All India Services (IAS, IPS, IFoS) and Central Services (IRS, IFS, IA&AS, ESE, Scientists). Appointed under the authority of the President of India. Officers exercise statutory and judicial powers.'
            },
            {
              stepNumber: 'Group B',
              title: 'Group B (Gazetted & Non-Gazetted)',
              badge: 'Middle Management & Inspection',
              description: 'Section Officers, Assistant Section Officers in Ministries, Inspectors of Central Tax, CBI Sub-Inspectors, and State Sub-Divisional Officers. Directly recruited via SSC CGL, State PSCs, or promoted from Group C.'
            },
            {
              stepNumber: 'Group C',
              title: 'Group C (Operative & Clerical)',
              badge: 'Operational Backbone',
              description: 'Secretariat assistants, Data Entry Operators, Multi-Tasking Staff, and railway technical operators. Recruited via SSC CHSL, MTS, and Railway Recruitment Boards.'
            },
            {
              stepNumber: 'Group D',
              title: 'Group D (Merged with Group C)',
              badge: 'Support Staff',
              description: 'Ancillary office support, maintenance, and logistics staff. Virtually all Central Group D posts have been upgraded into skilled Multi-Tasking Staff (MTS).'
            }
          ]
        },
        {
          id: 'aspirant-mindset',
          title: 'The Aspirant’s Strategic Framework',
          subtitle: 'Navigating selection ratios, syllabus overlap, and preparation horizons',
          kicker: 'Strategy & Realism',
          layout: 'editorial-concept',
          highlightQuote: 'Preparation for government examinations requires intellectual endurance, syllabus discipline, and emotional stability.',
          mainProse: [
            'Every year, over 10 lakh candidates apply for UPSC CSE, 30+ lakh for SSC CGL, and 15+ lakh for public sector banking examinations.',
            'Success is never an outcome of cramming fragmented facts. It requires mastering fundamental concepts, cultivating analytical precision, and building rigorous answer-writing capabilities.',
            'Before committing years of your youth to preparation, understand the exact demands of each examination: its syllabus scope, time investment, and career realities.'
          ],
          keyTakeaways: [
            'Focus on foundational conceptual clarity before test-series specialization',
            'Map the syllabus overlap across examinations to build viable career redundancies',
            'Develop newspaper reading, objective elimination logic, and descriptive articulation concurrently',
            'Maintain psychological resilience: view each stage not merely as a hurdle, but as a filter of administrative temperament'
          ]
        }
      ]
    }
  ]
};
