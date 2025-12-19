import { PersonalityType } from '@personality-app/types';

export const personalityTypes: PersonalityType[] = [
  // ANALYSTS - Intuitive (N) and Thinking (T)
  {
    code: 'INTJ',
    name: 'Architect',
    role: 'Analysts',
    roleDescription: 'Intuitive (N) and Thinking (T) personality types, known for their rationality, impartiality, and intellectual excellence.',
    description: 'Imaginative and strategic thinkers, with a plan for everything.',
    strengths: ['Strategic thinking', 'Independent', 'High standards', 'Determined', 'Insightful'],
    weaknesses: ['Arrogant', 'Dismissive of emotions', 'Overly critical', 'Combative'],
    color: '#88619A'
  },
  {
    code: 'INTP',
    name: 'Logician',
    role: 'Analysts',
    roleDescription: 'Intuitive (N) and Thinking (T) personality types, known for their rationality, impartiality, and intellectual excellence.',
    description: 'Innovative inventors with an unquenchable thirst for knowledge.',
    strengths: ['Analytical', 'Original', 'Open-minded', 'Objective', 'Honest'],
    weaknesses: ['Disconnected', 'Insensitive', 'Dissatisfied', 'Impatient'],
    color: '#88619A'
  },
  {
    code: 'ENTJ',
    name: 'Commander',
    role: 'Analysts',
    roleDescription: 'Intuitive (N) and Thinking (T) personality types, known for their rationality, impartiality, and intellectual excellence.',
    description: 'Bold, imaginative and strong-willed leaders, always finding a way – or making one.',
    strengths: ['Efficient', 'Energetic', 'Self-confident', 'Strong-willed', 'Strategic'],
    weaknesses: ['Stubborn', 'Intolerant', 'Impatient', 'Arrogant', 'Poor handling of emotions'],
    color: '#88619A'
  },
  {
    code: 'ENTP',
    name: 'Debater',
    role: 'Analysts',
    roleDescription: 'Intuitive (N) and Thinking (T) personality types, known for their rationality, impartiality, and intellectual excellence.',
    description: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
    strengths: ['Quick thinker', 'Charismatic', 'Energetic', 'Knowledgeable', 'Original'],
    weaknesses: ['Argumentative', 'Insensitive', 'Intolerant', 'Difficulty focusing'],
    color: '#88619A'
  },

  // DIPLOMATS - Intuitive (N) and Feeling (F)
  {
    code: 'INFJ',
    name: 'Advocate',
    role: 'Diplomats',
    roleDescription: 'Intuitive (N) and Feeling (F) personality types, known for their empathy, diplomatic skills, and passionate idealism.',
    description: 'Quiet and mystical, yet very inspiring and tireless idealists.',
    strengths: ['Creative', 'Insightful', 'Principled', 'Passionate', 'Altruistic'],
    weaknesses: ['Sensitive to criticism', 'Reluctant to open up', 'Perfectionistic', 'Avoiding the ordinary'],
    color: '#33A474'
  },
  {
    code: 'INFP',
    name: 'Mediator',
    role: 'Diplomats',
    roleDescription: 'Intuitive (N) and Feeling (F) personality types, known for their empathy, diplomatic skills, and passionate idealism.',
    description: 'Poetic, kind and altruistic people, always eager to help a good cause.',
    strengths: ['Empathetic', 'Generous', 'Open-minded', 'Creative', 'Passionate'],
    weaknesses: ['Unrealistic', 'Self-isolating', 'Unfocused', 'Emotionally vulnerable'],
    color: '#33A474'
  },
  {
    code: 'ENFJ',
    name: 'Protagonist',
    role: 'Diplomats',
    roleDescription: 'Intuitive (N) and Feeling (F) personality types, known for their empathy, diplomatic skills, and passionate idealism.',
    description: 'Charismatic and inspiring leaders, able to mesmerize their listeners.',
    strengths: ['Tolerant', 'Reliable', 'Charismatic', 'Altruistic', 'Natural leaders'],
    weaknesses: ['Overly idealistic', 'Too selfless', 'Too sensitive', 'Fluctuating self-esteem'],
    color: '#33A474'
  },
  {
    code: 'ENFP',
    name: 'Campaigner',
    role: 'Diplomats',
    roleDescription: 'Intuitive (N) and Feeling (F) personality types, known for their empathy, diplomatic skills, and passionate idealism.',
    description: 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.',
    strengths: ['Curious', 'Observant', 'Energetic', 'Enthusiastic', 'Excellent communicators'],
    weaknesses: ['Poor practical skills', 'Difficulty focusing', 'Overthinking', 'Stressed easily'],
    color: '#33A474'
  },

  // SENTINELS - Observant (S) and Judging (J)
  {
    code: 'ISTJ',
    name: 'Logistician',
    role: 'Sentinels',
    roleDescription: 'Observant (S) and Judging (J) personality types, known for their practicality and focus on order, security, and stability.',
    description: 'Practical and fact-minded individuals, whose reliability cannot be doubted.',
    strengths: ['Honest', 'Direct', 'Strong-willed', 'Dutiful', 'Responsible'],
    weaknesses: ['Stubborn', 'Insensitive', 'By-the-book', 'Judgmental', 'Unreasonably blame themselves'],
    color: '#4298B4'
  },
  {
    code: 'ISFJ',
    name: 'Defender',
    role: 'Sentinels',
    roleDescription: 'Observant (S) and Judging (J) personality types, known for their practicality and focus on order, security, and stability.',
    description: 'Very dedicated and warm protectors, always ready to defend their loved ones.',
    strengths: ['Supportive', 'Reliable', 'Patient', 'Imaginative', 'Observant'],
    weaknesses: ['Humble', 'Shy', 'Overload themselves', 'Reluctant to change', 'Too altruistic'],
    color: '#4298B4'
  },
  {
    code: 'ESTJ',
    name: 'Executive',
    role: 'Sentinels',
    roleDescription: 'Observant (S) and Judging (J) personality types, known for their practicality and focus on order, security, and stability.',
    description: 'Excellent administrators, unsurpassed at managing things – or people.',
    strengths: ['Dedicated', 'Strong-willed', 'Direct', 'Honest', 'Loyal'],
    weaknesses: ['Inflexible', 'Uncomfortable with unconventional situations', 'Judgmental', 'Difficulty expressing emotion'],
    color: '#4298B4'
  },
  {
    code: 'ESFJ',
    name: 'Consul',
    role: 'Sentinels',
    roleDescription: 'Observant (S) and Judging (J) personality types, known for their practicality and focus on order, security, and stability.',
    description: 'Extraordinarily caring, social and popular people, always eager to help.',
    strengths: ['Strong practical skills', 'Strong sense of duty', 'Loyal', 'Sensitive', 'Warm'],
    weaknesses: ['Worried about social status', 'Inflexible', 'Reluctant to innovate', 'Too selfless'],
    color: '#4298B4'
  },

  // EXPLORERS - Observant (S) and Prospecting (P)
  {
    code: 'ISTP',
    name: 'Virtuoso',
    role: 'Explorers',
    roleDescription: 'Observant (S) and Prospecting (P) personality types, known for their spontaneity, ingenuity, and flexibility.',
    description: 'Bold and practical experimenters, masters of all kinds of tools.',
    strengths: ['Optimistic', 'Energetic', 'Creative', 'Practical', 'Spontaneous'],
    weaknesses: ['Stubborn', 'Insensitive', 'Private', 'Easily bored', 'Risky behavior'],
    color: '#E4AE3A'
  },
  {
    code: 'ISFP',
    name: 'Adventurer',
    role: 'Explorers',
    roleDescription: 'Observant (S) and Prospecting (P) personality types, known for their spontaneity, ingenuity, and flexibility.',
    description: 'Flexible and charming artists, always ready to explore and experience something new.',
    strengths: ['Charming', 'Sensitive to others', 'Imaginative', 'Passionate', 'Curious'],
    weaknesses: ['Fiercely independent', 'Unpredictable', 'Easily stressed', 'Overly competitive'],
    color: '#E4AE3A'
  },
  {
    code: 'ESTP',
    name: 'Entrepreneur',
    role: 'Explorers',
    roleDescription: 'Observant (S) and Prospecting (P) personality types, known for their spontaneity, ingenuity, and flexibility.',
    description: 'Smart, energetic and very perceptive people, who truly enjoy living on the edge.',
    strengths: ['Bold', 'Rational', 'Practical', 'Original', 'Perceptive'],
    weaknesses: ['Insensitive', 'Impatient', 'Risk-prone', 'Unstructured', 'Defiant'],
    color: '#E4AE3A'
  },
  {
    code: 'ESFP',
    name: 'Entertainer',
    role: 'Explorers',
    roleDescription: 'Observant (S) and Prospecting (P) personality types, known for their spontaneity, ingenuity, and flexibility.',
    description: 'Spontaneous, energetic and enthusiastic people – life is never boring around them.',
    strengths: ['Bold', 'Original', 'Practical', 'Observant', 'Excellent people skills'],
    weaknesses: ['Sensitive', 'Conflict-averse', 'Easily bored', 'Poor long-term planners'],
    color: '#E4AE3A'
  }
];
