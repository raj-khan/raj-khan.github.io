import { Question } from '@personality-app/types';

export const questions: Question[] = [
  // Extraversion (E) vs Introversion (I) - 15 questions
  {
    id: 'q1',
    text: 'You regularly make new friends',
    category: 'social',
    dimension: 'E-I',
    options: [
      { id: 'q1-a', text: 'Agree', score: { E: 2 } },
      { id: 'q1-b', text: 'Neutral', score: {} },
      { id: 'q1-c', text: 'Disagree', score: { I: 2 } }
    ]
  },
  {
    id: 'q2',
    text: 'You often spend time exploring unrealistic yet intriguing ideas',
    category: 'thinking',
    dimension: 'S-N',
    options: [
      { id: 'q2-a', text: 'Agree', score: { N: 2 } },
      { id: 'q2-b', text: 'Neutral', score: {} },
      { id: 'q2-c', text: 'Disagree', score: { S: 2 } }
    ]
  },
  {
    id: 'q3',
    text: 'You find it easy to stay relaxed and focused even when there is some pressure',
    category: 'stress',
    dimension: 'T-F',
    options: [
      { id: 'q3-a', text: 'Agree', score: { T: 2 } },
      { id: 'q3-b', text: 'Neutral', score: {} },
      { id: 'q3-c', text: 'Disagree', score: { F: 2 } }
    ]
  },
  {
    id: 'q4',
    text: 'You do not usually initiate conversations',
    category: 'social',
    dimension: 'E-I',
    options: [
      { id: 'q4-a', text: 'Agree', score: { I: 2 } },
      { id: 'q4-b', text: 'Neutral', score: {} },
      { id: 'q4-c', text: 'Disagree', score: { E: 2 } }
    ]
  },
  {
    id: 'q5',
    text: 'You complete things methodically without jumping ahead',
    category: 'work',
    dimension: 'J-P',
    options: [
      { id: 'q5-a', text: 'Agree', score: { J: 2 } },
      { id: 'q5-b', text: 'Neutral', score: {} },
      { id: 'q5-c', text: 'Disagree', score: { P: 2 } }
    ]
  },
  {
    id: 'q6',
    text: 'You are very sentimental',
    category: 'emotion',
    dimension: 'T-F',
    options: [
      { id: 'q6-a', text: 'Agree', score: { F: 2 } },
      { id: 'q6-b', text: 'Neutral', score: {} },
      { id: 'q6-c', text: 'Disagree', score: { T: 2 } }
    ]
  },
  {
    id: 'q7',
    text: 'You enjoy vibrant social events with lots of people',
    category: 'social',
    dimension: 'E-I',
    options: [
      { id: 'q7-a', text: 'Agree', score: { E: 2 } },
      { id: 'q7-b', text: 'Neutral', score: {} },
      { id: 'q7-c', text: 'Disagree', score: { I: 2 } }
    ]
  },
  {
    id: 'q8',
    text: 'You prefer to stick to familiar topics and routines',
    category: 'thinking',
    dimension: 'S-N',
    options: [
      { id: 'q8-a', text: 'Agree', score: { S: 2 } },
      { id: 'q8-b', text: 'Neutral', score: {} },
      { id: 'q8-c', text: 'Disagree', score: { N: 2 } }
    ]
  },
  {
    id: 'q9',
    text: 'Your personal work style is closer to spontaneous bursts of energy than organized and steady',
    category: 'work',
    dimension: 'J-P',
    options: [
      { id: 'q9-a', text: 'Agree', score: { P: 2 } },
      { id: 'q9-b', text: 'Neutral', score: {} },
      { id: 'q9-c', text: 'Disagree', score: { J: 2 } }
    ]
  },
  {
    id: 'q10',
    text: 'You rarely worry about how your actions affect other people',
    category: 'emotion',
    dimension: 'T-F',
    options: [
      { id: 'q10-a', text: 'Agree', score: { T: 2 } },
      { id: 'q10-b', text: 'Neutral', score: {} },
      { id: 'q10-c', text: 'Disagree', score: { F: 2 } }
    ]
  },
  {
    id: 'q11',
    text: 'You prefer to completely finish one project before starting another',
    category: 'work',
    dimension: 'J-P',
    options: [
      { id: 'q11-a', text: 'Agree', score: { J: 2 } },
      { id: 'q11-b', text: 'Neutral', score: {} },
      { id: 'q11-c', text: 'Disagree', score: { P: 2 } }
    ]
  },
  {
    id: 'q12',
    text: 'You are drawn to various forms of creative expression',
    category: 'thinking',
    dimension: 'S-N',
    options: [
      { id: 'q12-a', text: 'Agree', score: { N: 2 } },
      { id: 'q12-b', text: 'Neutral', score: {} },
      { id: 'q12-c', text: 'Disagree', score: { S: 2 } }
    ]
  },
  {
    id: 'q13',
    text: 'You often feel overwhelmed',
    category: 'stress',
    dimension: 'T-F',
    options: [
      { id: 'q13-a', text: 'Agree', score: { F: 2 } },
      { id: 'q13-b', text: 'Neutral', score: {} },
      { id: 'q13-c', text: 'Disagree', score: { T: 2 } }
    ]
  },
  {
    id: 'q14',
    text: 'You value stability more than spontaneity',
    category: 'work',
    dimension: 'J-P',
    options: [
      { id: 'q14-a', text: 'Agree', score: { J: 2 } },
      { id: 'q14-b', text: 'Neutral', score: {} },
      { id: 'q14-c', text: 'Disagree', score: { P: 2 } }
    ]
  },
  {
    id: 'q15',
    text: 'You rarely second-guess the choices you have made',
    category: 'decision',
    dimension: 'T-F',
    options: [
      { id: 'q15-a', text: 'Agree', score: { T: 2 } },
      { id: 'q15-b', text: 'Neutral', score: {} },
      { id: 'q15-c', text: 'Disagree', score: { F: 2 } }
    ]
  },
  {
    id: 'q16',
    text: 'After a long week, you prefer staying in rather than going out',
    category: 'social',
    dimension: 'E-I',
    options: [
      { id: 'q16-a', text: 'Agree', score: { I: 2 } },
      { id: 'q16-b', text: 'Neutral', score: {} },
      { id: 'q16-c', text: 'Disagree', score: { E: 2 } }
    ]
  },
  {
    id: 'q17',
    text: 'You enjoy philosophical discussions',
    category: 'thinking',
    dimension: 'S-N',
    options: [
      { id: 'q17-a', text: 'Agree', score: { N: 2 } },
      { id: 'q17-b', text: 'Neutral', score: {} },
      { id: 'q17-c', text: 'Disagree', score: { S: 2 } }
    ]
  },
  {
    id: 'q18',
    text: 'You prioritize facts over feelings when making decisions',
    category: 'decision',
    dimension: 'T-F',
    options: [
      { id: 'q18-a', text: 'Agree', score: { T: 2 } },
      { id: 'q18-b', text: 'Neutral', score: {} },
      { id: 'q18-c', text: 'Disagree', score: { F: 2 } }
    ]
  },
  {
    id: 'q19',
    text: 'You often make decisions on the spur of the moment',
    category: 'decision',
    dimension: 'J-P',
    options: [
      { id: 'q19-a', text: 'Agree', score: { P: 2 } },
      { id: 'q19-b', text: 'Neutral', score: {} },
      { id: 'q19-c', text: 'Disagree', score: { J: 2 } }
    ]
  },
  {
    id: 'q20',
    text: 'You enjoy being the center of attention',
    category: 'social',
    dimension: 'E-I',
    options: [
      { id: 'q20-a', text: 'Agree', score: { E: 2 } },
      { id: 'q20-b', text: 'Neutral', score: {} },
      { id: 'q20-c', text: 'Disagree', score: { I: 2 } }
    ]
  },
  {
    id: 'q21',
    text: 'You focus on the big picture rather than details',
    category: 'thinking',
    dimension: 'S-N',
    options: [
      { id: 'q21-a', text: 'Agree', score: { N: 2 } },
      { id: 'q21-b', text: 'Neutral', score: {} },
      { id: 'q21-c', text: 'Disagree', score: { S: 2 } }
    ]
  },
  {
    id: 'q22',
    text: "You try to avoid drawing attention to yourself",
    category: 'social',
    dimension: 'E-I',
    options: [
      { id: 'q22-a', text: 'Agree', score: { I: 2 } },
      { id: 'q22-b', text: 'Neutral', score: {} },
      { id: 'q22-c', text: 'Disagree', score: { E: 2 } }
    ]
  },
  {
    id: 'q23',
    text: 'You believe efficiency is more important than perfection',
    category: 'work',
    dimension: 'T-F',
    options: [
      { id: 'q23-a', text: 'Agree', score: { T: 2 } },
      { id: 'q23-b', text: 'Neutral', score: {} },
      { id: 'q23-c', text: 'Disagree', score: { F: 2 } }
    ]
  },
  {
    id: 'q24',
    text: 'You like to have a detailed plan before starting any project',
    category: 'work',
    dimension: 'J-P',
    options: [
      { id: 'q24-a', text: 'Agree', score: { J: 2 } },
      { id: 'q24-b', text: 'Neutral', score: {} },
      { id: 'q24-c', text: 'Disagree', score: { P: 2 } }
    ]
  }
];
