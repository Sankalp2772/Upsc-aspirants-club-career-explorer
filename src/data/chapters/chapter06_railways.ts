import { PresentationChapter } from '../../types/presentation';

export const chapter06_railways: PresentationChapter = {
  id: 'railways',
  chapterNumber: '07',
  title: 'Railways Recruitment System',
  shortTitle: 'Railways',
  description: 'Pathways across the world’s fourth-largest railway network: administrative, operational, locomotive, and technical infrastructure cadres.',
  iconName: 'Train',
  accent: '#F59E0B',
  sections: [
    {
      id: 'railway-ecosystem',
      title: 'The Indian Railways Recruitment Architecture',
      shortName: 'Railway Landscape',
      conductingAuthority: 'Railway Recruitment Control Board (RRB / RRC) & UPSC',
      badge: 'Ministry of Railways',
      description: 'Understanding the operational, non-technical, and engineering recruitment pathways.',
      slides: [
        {
          id: 'railway-overview',
          title: 'Indian Railways: World’s Largest Transport Lifeline',
          subtitle: 'The multi-tiered recruitment framework governing 13 lakh railway employees',
          kicker: 'Chapter 06 · Section 01',
          layout: 'editorial-concept',
          highlightQuote: 'Recruitment in Indian Railways spans from apex management cadres (IRMS via UPSC) to frontline operational masters (RRB NTPC) and technical crews (RRB ALP & JE).',
          mainProse: [
            'Indian Railways operates across 17 Railway Zones and 68 Operating Divisions, maintaining over 68,000 route kilometers of track.',
            'To maintain this critical national transport infrastructure, recruitment is strictly categorized into:',
            '1. Group A Management: Indian Railway Management Service (IRMS), recruited via UPSC;',
            '2. Group B: Gazetted managerial posts filled via departmental promotion of Group C officers;',
            '3. Group C Non-Technical (RRB NTPC): Station Masters, Goods Train Managers, Commercial Apprentices;',
            '4. Group C Technical (RRB ALP & RRB JE): Assistant Loco Pilots, Technicians, and Junior Engineers.'
          ],
          bulletPoints: [
            { label: 'Centralized Computer-Based Testing', text: 'All modern RRB examinations use normalized multi-shift Computer Based Tests (CBT) across 21 Railway Recruitment Boards.' },
            { label: 'Stringent Medical Standards', text: 'Operational railway posts enforce strict medical vision standards (A-1 for Loco Pilots, A-2 for Station Masters) with zero allowance for refractive eye surgery.' }
          ]
        }
      ]
    },
    {
      id: 'rrb-ntpc',
      title: 'RRB NTPC (Non-Technical Popular Categories)',
      shortName: 'RRB NTPC',
      conductingAuthority: 'Railway Recruitment Boards (RRBs)',
      badge: 'Graduate & Undergraduate Non-Technical',
      description: 'Crucial operational and commercial positions managing stations, trains, and passenger revenue.',
      slides: [
        {
          id: 'ntpc-overview',
          title: 'RRB NTPC: Roles & Examination Journey',
          subtitle: 'Station Masters, Goods Train Managers, and Commercial Executives',
          kicker: 'RRB NTPC · Overview',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'CBT 1',
              title: 'First Stage Computer Based Test (Screening)',
              subtitle: '100 Questions · 90 Minutes · Common for all posts',
              badge: 'Screening to CBT 2',
              description: 'General Awareness (40 Qs), Mathematics (30 Qs), General Intelligence & Reasoning (30 Qs). Negative marking: 1/3rd mark. Normalized score filters candidates in a 1:20 ratio.'
            },
            {
              stepNumber: 'CBT 2',
              title: 'Second Stage Computer Based Test (Merit)',
              subtitle: '120 Questions · 90 Minutes · Level-Specific',
              badge: 'Merit Determining',
              description: 'General Awareness (50 Qs), Mathematics (35 Qs), General Intelligence & Reasoning (35 Qs). Separate tests for Pay Levels 2, 3, 4, 5, and 6.'
            },
            {
              stepNumber: 'CBAT / Typing',
              title: 'Skill Test & Computer Based Aptitude Test',
              subtitle: 'Role-Specific Assessment',
              badge: 'Qualifying or 30% Weightage',
              description: 'Station Masters undergo the Computer Based Aptitude Test (CBAT - 30% weightage in final merit). Clerks and assistants undergo typing skill tests.'
            },
            {
              stepNumber: 'Verification',
              title: 'Document Verification & Strict Medical Test',
              subtitle: 'Vision & Physical Fitness',
              badge: 'Final Appointment',
              description: 'Strict A-2 medical fitness test (distant vision 6/9, 6/9 without glasses, mandatory color vision & night vision tests).'
            }
          ]
        }
      ]
    },
    {
      id: 'rrb-technical',
      title: 'Technical Railways: RRB ALP & RRB JE',
      shortName: 'RRB ALP & RRB JE',
      conductingAuthority: 'Railway Recruitment Boards',
      badge: 'Technical & Locomotive Cadres',
      description: 'Locomotive pilots, rolling stock specialists, and track infrastructure engineers.',
      slides: [
        {
          id: 'alp-je-overview',
          title: 'RRB ALP (Assistant Loco Pilot) & RRB Junior Engineer',
          subtitle: 'Driving the nation’s locomotives and engineering railway safety',
          kicker: 'Railway Technical Cadres',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'RRB ALP',
              title: 'Assistant Loco Pilot (ALP)',
              badge: 'Matriculation + ITI / Diploma / Degree in Engg',
              description: 'CBT 1 (Screening) -> CBT 2 (Part A: Merit 100 Qs; Part B: Qualifying Trade Test 75 Qs) -> Computer Based Aptitude Test (CBAT) -> Medical Category A-1 (6/6 distant vision without glasses). Responsible for driving electric and diesel locomotives.'
            },
            {
              stepNumber: 'RRB JE',
              title: 'Junior Engineer (Civil, Mechanical, Electrical, S&T)',
              badge: 'Diploma / Degree in Engineering',
              description: 'CBT 1 (Maths, Reasoning, GA, General Science - 100 Qs) -> CBT 2 (Technical Abilities, Physics & Chemistry, Basics of Environment & Computers - 150 Qs). Supervises track maintenance, signaling networks, and overhead catenary equipment.'
            }
          ]
        }
      ]
    }
  ]
};
