import { PresentationChapter } from '../../types/presentation';

export const chapter04_ssc: PresentationChapter = {
  id: 'ssc',
  chapterNumber: '05',
  title: 'Staff Selection Commission (SSC)',
  shortTitle: 'SSC',
  description: 'The premier recruiting body for Group B (Non-Gazetted) and Group C executive cadres across Central Government Ministries.',
  iconName: 'Award',
  accent: '#F472B6',
  sections: [
    {
      id: 'ssc-overview',
      title: 'Introduction to Staff Selection Commission',
      shortName: 'What is SSC?',
      conductingAuthority: 'Staff Selection Commission, CGO Complex, Lodhi Road, New Delhi',
      badge: 'Attached Office of DoPT',
      description: 'The operational machinery recruiting thousands of executive officers for the Union.',
      slides: [
        {
          id: 'ssc-mandate',
          title: 'What is the Staff Selection Commission?',
          subtitle: 'The Executive Engine of Central Civil Administration',
          kicker: 'Chapter 05 · Section 01',
          layout: 'editorial-concept',
          highlightQuote: 'While UPSC selects policy directors, SSC recruits the operational officers and investigative inspectors who execute policy across India.',
          imageBanner: {
            url: '/images/central_secretariat.jpg',
            caption: 'Central Secretariat, Kartavya Path & Union Ministries, New Delhi',
            tag: 'CENTRAL EXECUTIVE ENGINE'
          },
          mainProse: [
            'Established in 1975, the Staff Selection Commission (SSC) is an attached office of the Department of Personnel and Training (DoPT).',
            'SSC is tasked with recruiting staff for Group B (Non-Gazetted) and Group C (Non-Technical) posts in all Ministries, Departments of the Government of India, and their Subordinate Offices.',
            'It conducts nationwide computer-based examinations (CBT) serving tens of thousands of annual vacancies with pan-India competitive merit ranking.'
          ],
          bulletPoints: [
            { label: 'Massive Reach', text: 'Conducts computer-based tests for over 1.5 crore candidates annually across hundreds of accredited testing centers.' },
            { label: 'Distinct Educational Tiers', text: 'Recruitment is tiered strictly according to qualification: Graduate (CGL), 10+2 Higher Secondary (CHSL), Matriculation (MTS), and Technical Engineering (JE).' },
            { label: 'Zero Subjective Bias', text: 'All modern SSC exams are objective computer-based tests with automated normalization of scores across multi-shift sessions.' }
          ]
        },
        {
          id: 'ssc-exam-families',
          title: 'The SSC Examination Portfolio',
          subtitle: 'Distinct gateways for different educational milestones',
          kicker: 'SSC Spectrum',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: '01',
              title: 'SSC Combined Graduate Level (CGL)',
              badge: 'Graduate Degree',
              description: 'Premier test for Assistant Section Officers in Ministries (CSS, MEA, MoD), Inspectors (GST, Income Tax, Preventive, Examiner), and Sub-Inspectors (CBI, NIA).'
            },
            {
              stepNumber: '02',
              title: 'SSC Combined Higher Secondary Level (CHSL)',
              badge: 'Class 12 (10+2)',
              description: 'Recruits Lower Division Clerks (LDC), Junior Secretariat Assistants (JSA), and Data Entry Operators (DEO) in central departments.'
            },
            {
              stepNumber: '03',
              title: 'SSC Central Police Organization (CPO)',
              badge: 'Graduate Degree',
              description: 'Selects Sub-Inspectors in Delhi Police and Central Armed Police Forces (BSF, CISF, CRPF, ITBP, SSB).'
            },
            {
              stepNumber: '04',
              title: 'SSC Junior Engineer (JE)',
              badge: 'Diploma / Degree in Engg',
              description: 'Technical recruitment for Junior Engineers (Civil, Electrical, Mechanical) in CPWD, MES, and Border Roads Organisation.'
            },
            {
              stepNumber: '05',
              title: 'SSC Multi-Tasking Staff (MTS) & Havaldar',
              badge: 'Class 10 (Matriculation)',
              description: 'General Central Service Group C non-gazetted, non-ministerial positions in central ministries and CBIC/CBN.'
            }
          ]
        }
      ]
    },
    {
      id: 'ssc-cgl',
      title: 'SSC Combined Graduate Level (CGL)',
      shortName: 'SSC CGL',
      conductingAuthority: 'Staff Selection Commission',
      badge: 'Group B & C Graduate Level',
      description: 'The most popular national graduate examination for central ministries and investigative agencies.',
      slides: [
        {
          id: 'cgl-overview',
          title: 'SSC CGL: Overview & Purpose',
          subtitle: 'The "Mini-Civil Services" of the Central Government',
          kicker: 'SSC CGL · Overview',
          layout: 'editorial-concept',
          highlightQuote: 'SSC CGL provides a stable, influential central government career with rapid promotions, metropolitan postings, and direct investigative powers.',
          mainProse: [
            'The Combined Graduate Level (CGL) examination is SSC’s flagship annual recruitment drive.',
            'Successful candidates are appointed to Group B (Gazetted & Non-Gazetted) and Group C posts in central ministries like External Affairs, Home Affairs, Defence, Finance, and premier enforcement agencies like CBI, Enforcement Directorate (ED), and Narcotics Control Bureau (NCB).',
            'Following the major syllabus overhaul, the exam is now completed in two streamlined computer-based tiers with zero interview stage.'
          ],
          keyTakeaways: [
            'No interview stage: final merit is determined strictly on Tier-II Computer Based Test performance',
            'Posting opportunities in New Delhi Central Secretariat as well as field customs and taxation ports nationwide',
            'Pay Level 7 (Basic ₹44,900) to Pay Level 4 (Basic ₹25,500) with complete Central Government allowances'
          ]
        },
        {
          id: 'cgl-eligibility',
          title: 'SSC CGL Eligibility Criteria',
          subtitle: 'Academic requirements, age brackets, and physical qualifications',
          kicker: 'SSC CGL · Eligibility',
          layout: 'eligibility-grid',
          eligibility: [
            {
              category: 'Educational Qualification',
              requirement: 'Bachelor Degree in any discipline from a recognized University',
              note: 'For Junior Statistical Officer (JSO): Degree with 60% in Maths at 10+2 level OR Degree with Statistics as a subject.'
            },
            {
              category: 'Age Profile (Post-Dependent)',
              requirement: '18 to 27 Years / 18 to 30 Years / 18 to 32 Years',
              note: 'Inspectors & ASO posts generally permit up to 30 years. Standard relaxations: OBC (3 yrs), SC/ST (5 yrs), PwBD (10 yrs).'
            },
            {
              category: 'Nationality',
              requirement: 'Citizen of India or subject of Nepal/Bhutan',
              note: 'Subject to standard Union Government nationality declarations.'
            },
            {
              category: 'Physical Standards (Select Posts)',
              requirement: 'Required for Inspector CGST/Customs, Sub-Inspector CBI/NIA',
              note: 'Minimum height (Male 157.5 cm, Female 152 cm), chest expansion, and basic physical endurance test (walking/cycling).'
            }
          ]
        },
        {
          id: 'cgl-pattern',
          title: 'SSC CGL 2-Tier Examination Pattern',
          subtitle: 'Tier I (Qualifying CBT) and Tier II (Merit CBT & Skill Test)',
          kicker: 'SSC CGL · Exam Pattern',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'Tier I',
              title: 'Computer Based Test (Qualifying)',
              subtitle: '200 Marks · 100 Questions · 60 Minutes',
              badge: 'Screening to Tier II',
              description: 'Four sections (25 Qs / 50 Marks each): 1. General Intelligence & Reasoning; 2. General Awareness; 3. Quantitative Aptitude; 4. English Comprehension. Negative marking: 0.50 marks per wrong answer. Marks are normalized.',
              metrics: [{ label: 'Questions', value: '100 MCQs' }, { label: 'Time', value: '60 Minutes' }, { label: 'Status', value: 'Qualifying' }]
            },
            {
              stepNumber: 'Tier II',
              title: 'Computer Based Test (Merit Ranking)',
              subtitle: '390 Marks · Session I (2 Hrs 15 Mins) + Session II (DEST)',
              badge: 'Determines Final Rank',
              description: 'Section I: Mathematical Abilities (30 Qs) + Reasoning (30 Qs) = 180 Marks. Section II: English Language (45 Qs) + General Awareness (25 Qs) = 210 Marks. Total Merit = 390 Marks. Negative marking: 1 mark per wrong answer.',
              metrics: [{ label: 'Merit Marks', value: '390' }, { label: 'Time', value: '135 Mins' }, { label: 'Status', value: 'Rank Deciding' }]
            },
            {
              stepNumber: 'Tier II (Mod)',
              title: 'Qualifying Modules in Tier II',
              subtitle: 'Computer Knowledge & Data Entry Speed',
              badge: 'Mandatory Qualifying',
              description: 'Module 1: Computer Knowledge Test (20 Qs, 60 Marks, 15 Mins, qualifying). Module 2: Data Entry Speed Test (DEST) - 2000 key depressions in 15 minutes. Candidate must qualify both to be eligible for any post.',
              metrics: [{ label: 'Computer Qs', value: '20' }, { label: 'Typing Speed', value: '27 WPM' }]
            }
          ]
        },
        {
          id: 'cgl-career-posts',
          title: 'Top Career Posts in SSC CGL',
          subtitle: 'The coveted roles and ministries',
          kicker: 'SSC CGL · Career Opportunities',
          layout: 'career-pathway',
          careerPaths: [
            {
              role: 'Assistant Section Officer (ASO) in MEA',
              department: 'Ministry of External Affairs',
              nature: 'Diplomatic Secretariat (Pay Level 7)',
              description: 'Handles international cables, foreign policy files, and receives foreign postings with generous diplomatic foreign allowances.',
              imageUrl: '/images/mea_diplomat_residence.jpg',
              imageCaption: 'Indian Embassy & Diplomatic Representation Abroad with Official Flag Car',
              hierarchy: ['Assistant Section Officer', 'Section Officer', 'Under Secretary', 'Deputy Secretary', 'Director']
            },
            {
              role: 'Inspector of Income Tax (CBDT)',
              department: 'Central Board of Direct Taxes, Ministry of Finance',
              nature: 'Direct Tax Assessment & Chamber Authority (Pay Level 7)',
              description: 'Executes assessments, survey and summons powers, search-and-seizure verifications, and scrutinizes corporate balance sheets under the Income Tax Act.',
              imageUrl: '/images/income_tax_chamber.jpg',
              imageCaption: 'Direct Taxes Assessment Chamber & Officer Authority with National Emblem',
              hierarchy: ['Inspector of Income Tax', 'Income Tax Officer (ITO - Gazetted)', 'Assistant Commissioner of Income Tax (IRS Cadre Feeder)']
            },
            {
              role: 'Inspector of Central Tax (CGST & Central Excise)',
              department: 'Central Board of Indirect Taxes and Customs (CBIC)',
              nature: 'Tax Enforcement & Audit (Pay Level 7)',
              description: 'Conducts GST audits, search and seizure operations, anti-evasion raids, and inspection of manufacturing units across India.',
              hierarchy: ['Inspector (Central Tax)', 'Superintendent (Gazetted)', 'Assistant Commissioner (IRS Cadre Feeder)']
            },
            {
              role: 'Sub-Inspector in Central Bureau of Investigation (CBI)',
              department: 'DoPT / CBI',
              nature: 'Elite Criminal & Corruption Investigation',
              description: 'Conducts investigations into high-profile corruption cases, economic offences, and multi-state crimes under the Delhi Special Police Establishment Act.'
            },
            {
              role: 'Assistant Enforcement Officer (AEO) in ED',
              department: 'Directorate of Enforcement, Ministry of Finance',
              nature: 'Financial Intelligence (PMLA & FEMA)',
              description: 'Investigates money laundering syndicates, hawala networks, and foreign exchange violations, freezing illicit cross-border assets.'
            }
          ]
        }
      ]
    },
    {
      id: 'ssc-chsl-other',
      title: 'Other Major SSC Examinations',
      shortName: 'CHSL, CPO, JE & MTS',
      conductingAuthority: 'Staff Selection Commission',
      badge: 'Specialized & 10+2 Level',
      description: 'Dedicated recruitment streams for higher secondary graduates, police officers, and engineers.',
      slides: [
        {
          id: 'ssc-chsl-overview',
          title: 'SSC CHSL (10+2): Secretariat & Data Cadres',
          subtitle: 'Combined Higher Secondary Level Examination',
          kicker: 'SSC CHSL · Overview',
          layout: 'editorial-concept',
          highlightQuote: 'CHSL provides an early entry point into the Central Government immediately after Class 12, with structured departmental promotional pathways.',
          mainProse: [
            'The SSC Combined Higher Secondary Level (CHSL) is conducted for students who have completed Class 12 (10+2).',
            'Posts include Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), and Data Entry Operator (DEO) in Central Government Ministries and attached offices.',
            'The exam pattern mirrors SSC CGL with Tier 1 (qualifying objective test) and Tier 2 (merit test covering Maths, Reasoning, English, GA, Computer, and Typing).'
          ],
          bulletPoints: [
            { label: 'Educational Eligibility', text: 'Must have passed 12th Standard or equivalent examination from a recognized Board.' },
            { label: 'Age Limit', text: '18 to 27 years (with standard category relaxations for OBC/SC/ST).' },
            { label: 'Typing Test', text: 'Typing speed of 35 words per minute in English or 30 words per minute in Hindi on computer.' }
          ]
        },
        {
          id: 'ssc-cpo-je-overview',
          title: 'SSC CPO & SSC Junior Engineer (JE)',
          subtitle: 'Uniformed Sub-Inspectors & Core Technical Engineers',
          kicker: 'SSC Specialized',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'SSC CPO',
              title: 'Sub-Inspector in Delhi Police & CAPFs',
              badge: 'Uniformed Graduate Entry',
              description: 'Paper 1 (Reasoning, GK, Maths, English - 200 Marks) -> Physical Standard & Physical Endurance Test (PST/PET) -> Paper 2 (English Comprehension - 200 Marks) -> Medical Examination. Recruits Sub-Inspectors in Delhi Police, BSF, CRPF, CISF, ITBP, and SSB.'
            },
            {
              stepNumber: 'SSC JE',
              title: 'Junior Engineer (Civil, Electrical, Mechanical)',
              badge: 'Engineering Diploma / B.E.',
              description: 'Paper 1 (Computer Based Test: General Intelligence, General Awareness, Core Engineering - 200 Marks) -> Paper 2 (CBT in specialized branch of engineering - 300 Marks). Recruits for CPWD, MES, CWC, and BRO.'
            },
            {
              stepNumber: 'SSC MTS',
              title: 'Multi-Tasking Staff & Havaldar',
              badge: 'Matriculation (10th Pass)',
              description: 'Computer-based exam in numerical ability, reasoning, general awareness, and English language. Non-technical administrative operations and security oversight.'
            }
          ]
        }
      ]
    }
  ]
};
