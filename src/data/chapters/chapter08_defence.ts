import { PresentationChapter } from '../../types/presentation';

export const chapter08_defence: PresentationChapter = {
  id: 'defence',
  chapterNumber: '09',
  title: 'Defence & Military Officer Examinations',
  shortTitle: 'Defence',
  description: 'Pathways to commissioned officer ranks across the Indian Army, Indian Navy, Indian Air Force, and Indian Coast Guard.',
  iconName: 'Shield',
  accent: '#EF4444',
  sections: [
    {
      id: 'defence-overview',
      title: 'Commissioned Officer Ranks Architecture',
      shortName: 'Officer Commission Pathways',
      conductingAuthority: 'UPSC, Indian Air Force, Indian Army & Indian Navy',
      badge: 'Presidential Commission',
      description: 'The ethos, structure, and psychological selection criteria of the Indian Armed Forces.',
      slides: [
        {
          id: 'defence-ethos',
          title: 'Commissioned Leadership: A Way of Life',
          subtitle: 'The honor and responsibility of leading men and women in combat and peace',
          kicker: 'Chapter 08 · Section 01',
          layout: 'editorial-concept',
          highlightQuote: 'Officers in the Indian Armed Forces hold a parchment of commission signed by the President of India, symbolizing unconditional devotion to national sovereignty.',
          mainProse: [
            'Unlike civilian government jobs, military service is an institutional ethos defined by honor, physical courage, camaraderie, and selfless leadership under fire.',
            'Entry into officer ranks occurs at two key life junctures:',
            '1. Immediately following Class 12 (10+2) via the National Defence Academy (NDA) or Naval Academy (NA);',
            '2. Following Graduation via the Combined Defence Services (CDS), Air Force Common Admission Test (AFCAT), or Direct Technical Graduate entries.'
          ],
          bulletPoints: [
            { label: 'The Universal Filter: SSB', text: 'All written examinations merely serve as screening filters for the exhaustive 5-Day Services Selection Board (SSB) psychological and leadership evaluation.' },
            { label: 'Equal Opportunity', text: 'Permanent and Short Service Commissions are now open to both male and female candidates across all three branches, including combat aviation and frontline naval ships.' }
          ]
        }
      ]
    },
    {
      id: 'nda-entry',
      title: 'National Defence Academy (NDA & NA)',
      shortName: 'NDA & NA (10+2 Entry)',
      conductingAuthority: 'Union Public Service Commission',
      badge: 'Cradle of Military Leadership',
      description: 'The world’s premier tri-service military academy located at Khadakwasla, Pune.',
      slides: [
        {
          id: 'nda-overview-eligibility',
          title: 'NDA & NA: The 10+2 Cadet Entry',
          subtitle: 'Three years of tri-service military discipline followed by specialized finishing academies',
          kicker: 'NDA · Overview & Eligibility',
          layout: 'eligibility-grid',
          eligibility: [
            {
              category: 'Educational Qualification',
              requirement: 'Passed or appearing in Class 12 (10+2 pattern)',
              note: 'For Army Wing: 12th pass in any stream. For Air Force and Navy Wings: 12th pass with Physics, Chemistry and Mathematics (PCM).'
            },
            {
              category: 'Age Bracket (Strict)',
              requirement: '16.5 to 19.5 Years at commencement of course',
              note: 'Unmarried male and female candidates. Age is calculated strictly based on matriculation certificates with zero relaxation.'
            },
            {
              category: 'Written Examination Pattern',
              requirement: 'Mathematics (300 Marks) + General Ability Test (600 Marks)',
              note: 'Paper 1 (Maths: 120 Qs, 2.5 hrs). Paper 2 (GAT: English 200 Marks + General Knowledge 400 Marks, 2.5 hrs). Total: 900 Marks.'
            },
            {
              category: 'SSB Interview & Medicals',
              requirement: '5-Day SSB Interview (900 Marks) + Strict Military Medical Board',
              note: 'Candidates must score qualifying cutoffs in both written papers and the SSB interview.'
            }
          ]
        }
      ]
    },
    {
      id: 'cds-entry',
      title: 'Combined Defence Services (CDS)',
      shortName: 'UPSC CDS (Graduate Entry)',
      conductingAuthority: 'Union Public Service Commission',
      badge: 'IMA, INA, AFA & OTA',
      description: 'The flagship graduate entry for Indian Military Academy, Indian Naval Academy, Air Force Academy, and Officers Training Academy.',
      slides: [
        {
          id: 'cds-academies-pattern',
          title: 'CDS Examination: Academies & Paper Structure',
          subtitle: 'Tailored pathways for permanent and short service commissions',
          kicker: 'CDS · Structure',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'IMA / INA / AFA',
              title: 'Permanent Commission Academies',
              badge: '3 Papers · 300 Marks',
              description: 'English (100 Marks, 2 hrs), General Knowledge (100 Marks, 2 hrs), and Elementary Mathematics (100 Marks, 2 hrs). Indian Military Academy (Dehradun), Indian Naval Academy (Ezhimala), Air Force Academy (Dundigal).'
            },
            {
              stepNumber: 'OTA Chennai',
              title: 'Officers Training Academy (Short Service)',
              badge: '2 Papers · 200 Marks',
              description: 'English (100 Marks, 2 hrs) and General Knowledge (100 Marks, 2 hrs). Mathematics is exempt for OTA entry. Open to both men and women for 10-to-14-year commissions with permanent options.'
            },
            {
              stepNumber: 'SSB Interview',
              title: '5-Day Psychological & Officer Potential Evaluation',
              badge: '300 Marks (IMA/INA/AFA) / 200 (OTA)',
              description: 'Tests Officer Like Qualities (OLQs) through psychological projective tests, ground group tasks, and direct presidential board interviews.'
            }
          ]
        }
      ]
    },
    {
      id: 'afcat-entry',
      title: 'Air Force Common Admission Test (AFCAT)',
      shortName: 'IAF AFCAT',
      conductingAuthority: 'Indian Air Force, Air Headquarters, New Delhi',
      badge: 'Flying, Technical & Ground Duty Branches',
      description: 'The direct entry examination for officers in the Indian Air Force.',
      slides: [
        {
          id: 'afcat-branches-pattern',
          title: 'AFCAT: Wings of the Indian Air Force',
          subtitle: 'Flying Branch, Technical (Aeronautical Engg), and Non-Technical Ground Duty',
          kicker: 'AFCAT · Overview & Branches',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'Flying Branch',
              title: 'Fighter, Transport & Helicopter Pilots',
              badge: 'Age 20-24 Years · 10+2 with Maths & Physics',
              description: 'Cadets undergo intensive flying training at Air Force Academy Dundigal. Must pass the Computerized Pilot Selection System (CPSS) test, which can only be attempted once in a lifetime.'
            },
            {
              stepNumber: 'Ground Duty (Technical)',
              title: 'Aeronautical Engineering (Electronics & Mechanical)',
              badge: 'Engineering Graduates',
              description: 'In addition to AFCAT, candidates appear for the Engineering Knowledge Test (EKT). Maintains supersonic fighter jets, radar networks, missile systems, and avionics.'
            },
            {
              stepNumber: 'Ground Duty (Non-Tech)',
              title: 'Administration, Logistics, Accounts & Meteorology',
              badge: 'Graduates in Any Discipline / Commerce / Science',
              description: 'Manages airbase security (Garud Commandos), air traffic control, logistics supply chains, and fiscal administration.'
            }
          ]
        }
      ]
    },
    {
      id: 'ssb-evaluation',
      title: 'The 5-Day Services Selection Board (SSB)',
      shortName: 'SSB 5-Day Journey',
      conductingAuthority: 'Services Selection Boards (Army, Navy & Air Force)',
      badge: 'Assessing 15 Officer Like Qualities (OLQs)',
      description: 'The legendary scientific personality evaluation system examining Mind, Action, and Speech.',
      slides: [
        {
          id: 'ssb-five-days',
          title: 'The SSB Journey: Day-by-Day Deconstruction',
          subtitle: 'Screening, Psychological Battery, Ground Tasks, and Conference',
          kicker: 'SSB Anatomy',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'Day 01',
              title: 'Screening Test (Stage 1)',
              badge: 'Officer Intelligence Rating & PPDT',
              description: 'OIR Test (Verbal & Non-verbal reasoning) + Picture Perception & Discussion Test (PPDT). Candidates write a story on a hazy slide, give individual narration, and hold group discussion. Screened-in candidates stay for the remaining 4 days.'
            },
            {
              stepNumber: 'Day 02',
              title: 'Psychological Tests Battery',
              badge: 'The Manasa Dimension',
              description: 'Thematic Apperception Test (TAT - 12 slides), Word Association Test (WAT - 60 words, 15 secs each), Situation Reaction Test (SRT - 60 real dilemmas, 30 mins), and Self Description Test (SD).'
            },
            {
              stepNumber: 'Days 03 & 04',
              title: 'Group Testing Officer (GTO) Tasks',
              badge: 'The Karmana Dimension',
              description: 'Progressive Group Task (PGT), Half Group Task (HGT), Group Obstacle Race (Snake Race), Lecturette, Command Task, and Final Group Task (FGT). Tests practical ingenuity, teamwork, and physical agility under stress.'
            },
            {
              stepNumber: 'Day 05',
              title: 'Personal Interview & Board Conference',
              badge: 'The Vacha Dimension & Final Recommendation',
              description: 'Interviews conducted by the President/Deputy President. Day 5 concludes with the Conference where all assessors pool observations to recommend candidates with high Officer Potential.'
            }
          ]
        }
      ]
    }
  ]
};
