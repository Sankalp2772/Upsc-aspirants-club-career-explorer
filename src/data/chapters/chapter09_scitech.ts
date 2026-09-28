import { PresentationChapter } from '../../types/presentation';

export const chapter09_scitech: PresentationChapter = {
  id: 'science-tech',
  chapterNumber: '10',
  title: 'Science & Technology Government Careers',
  shortTitle: 'Science & Tech',
  description: 'Pathways across India’s strategic scientific institutions: space exploration, defence research, atomic energy, and industrial laboratories.',
  iconName: 'Atom',
  accent: '#8B5CF6',
  sections: [
    {
      id: 'isro-recruitment',
      title: 'Indian Space Research Organisation (ISRO)',
      shortName: 'ISRO ICRB Recruitment',
      conductingAuthority: 'ISRO Centralised Recruitment Board (ICRB), Antariksh Bhavan, Bengaluru',
      badge: 'Scientist / Engineer ‘SC’',
      description: 'Designing launch vehicles, interplanetary probes, cryogenic engines, and satellite constellations.',
      slides: [
        {
          id: 'isro-scientist-sc',
          title: 'ISRO Scientist/Engineer ‘SC’ Selection',
          subtitle: 'Joining the ranks of Vikram Sarabhai and APJ Abdul Kalam',
          kicker: 'ISRO · Overview & Pipeline',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'Eligibility',
              title: 'First Class B.E. / B.Tech or Equivalent',
              badge: 'Min 65% Marks or 6.84/10 CGPA',
              description: 'Graduates in Mechanical, Electrical, Electronics, Computer Science, or Civil Engineering. Age limit typically 28 years (with statutory relaxations).'
            },
            {
              stepNumber: 'Stage 1: Written',
              title: 'ICRB Written Examination (Online/Offline)',
              badge: 'Core Branch Technical Focus',
              description: '80 objective questions based strictly on core branch syllabus (e.g. thermodynamics, signal processing, structures, algorithms). 1/3rd negative marking. Filters candidates in a 1:5 ratio for interview.'
            },
            {
              stepNumber: 'Stage 2: Interview',
              title: 'Comprehensive Technical Board Interview',
              badge: '100 Marks (Min 60% to Qualify)',
              description: 'Conducted before senior ISRO scientists. Tests foundational physics, derivation intuition, final year engineering project, and practical troubleshooting.'
            },
            {
              stepNumber: 'Centers',
              title: 'Postings across India’s Space Hubs',
              badge: 'Strategic Centers',
              description: 'VSSC Thiruvananthapuram (Rockets), URSC Bengaluru (Satellites), SDSC SHAR Sriharikota (Launchport), LPSC Valiamala (Liquid Propulsion), SAC Ahmedabad (Payloads).'
            }
          ]
        }
      ]
    },
    {
      id: 'drdo-recruitment',
      title: 'Defence Research & Development Organisation (DRDO)',
      shortName: 'DRDO RAC Scientist ‘B’',
      conductingAuthority: 'Recruitment & Assessment Centre (RAC), DRDO, Delhi',
      badge: 'Scientist ‘B’ (Group A Gazetted)',
      description: 'Developing hypersonic missiles, radar arrays, combat aircraft, submarines, and electronic warfare suites.',
      slides: [
        {
          id: 'drdo-scientist-b',
          title: 'DRDO Scientist ‘B’ Selection Framework',
          subtitle: 'Dual selection streams: Valid GATE score shortlisting or RAC written test',
          kicker: 'DRDO · Overview & Channels',
          layout: 'editorial-concept',
          highlightQuote: 'DRDO scientists enjoy Class 1 Gazetted status, intellectual freedom, and access to some of the most classified defence facilities in Asia.',
          mainProse: [
            'DRDO operates over 50 specialized laboratories across India (such as DRDL Hyderabad for missiles, ADE Bengaluru for aeronautics, LRDE for radars, and DMRL for defence metallurgy).',
            'Recruitment to Scientist ‘B’ (Pay Level 10 - ₹56,100 basic) is conducted annually by the Recruitment and Assessment Centre (RAC).',
            'Candidates are primarily shortlisted based on valid GATE scores in relevant disciplines, followed by an intensive personal interview before a subject-matter board.'
          ],
          bulletPoints: [
            { label: 'Selection Weightage', text: 'Typically: 80% weightage for GATE Score + 20% weightage for Personal Interview (or 100% interview score for candidates clearing written test).' },
            { label: 'Strategic Disciplines', text: 'Mechanical, Electronics & Communication, Computer Science, Aeronautical, Chemical, Material Science, Metallurgy, and Physics/Chemistry.' }
          ]
        }
      ]
    },
    {
      id: 'barc-scientific-officer',
      title: 'Bhabha Atomic Research Centre (BARC)',
      shortName: 'BARC OCES / DGFS',
      conductingAuthority: 'Bhabha Atomic Research Centre, Trombay, Mumbai',
      badge: 'Scientific Officer (Group A Gazetted)',
      description: 'Nuclear energy, reactor physics, radioisotopes, and sovereign atomic research.',
      slides: [
        {
          id: 'barc-oces-overview',
          title: 'BARC OCES/DGFS: Scientific Officer Selection',
          subtitle: 'The premier atomic research training school established by Homi Bhabha',
          kicker: 'BARC · Nuclear Energy',
          layout: 'stages-process',
          stages: [
            {
              stepNumber: 'Channels',
              title: 'Two Parallel Shortlisting Channels',
              badge: 'BARC Online Exam OR GATE Score',
              description: 'Candidates can qualify for the interview through either the BARC Computer-Based Screening Test OR an eligible valid GATE Score.'
            },
            {
              stepNumber: 'Interview',
              title: 'Legendary 1-to-2 Hour Technical Interview',
              badge: 'Deep Conceptual Examination',
              description: 'Famous for testing fundamental physics and engineering from first principles on a whiteboard. Board members guide the candidate into unknown problems to evaluate thinking agility.'
            },
            {
              stepNumber: 'Training',
              title: '1-Year Orientation Course (OCES) / DGFS Fellowship',
              badge: 'Homi Bhabha National Institute (HBNI)',
              description: 'Comprehensive training with monthly stipend at BARC Training School Mumbai, IGCAR Kalpakkam, RRCAT Indore, or NFC Hyderabad, culminating in appointment as Scientific Officer C.'
            }
          ]
        }
      ]
    }
  ]
};
