// Personality dimensions (MBTI)
export type Dimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

// Personality type codes
export type PersonalityCode = 
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'  // Analysts
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'  // Diplomats
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'  // Sentinels
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP'; // Explorers

// Role categories
export type Role = 'Analysts' | 'Diplomats' | 'Sentinels' | 'Explorers';

// Answer option with scoring
export interface AnswerOption {
  id: string;
  text: string;
  score: Partial<Record<Dimension, number>>;
}

// Question structure
export interface Question {
  id: string;
  text: string;
  category: string; // For grouping questions (optional)
  dimension: string; // Which dimension this question tests (e.g., 'E-I')
  options: AnswerOption[];
}

// Personality type definition
export interface PersonalityType {
  code: PersonalityCode;
  name: string;
  role: Role;
  roleDescription: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  color: string; // Hex color for the card
}

// Test configuration
export interface TestConfig {
  id: string;
  name: string;
  description: string;
  version: string;
  questions: Question[];
  personalities: PersonalityType[];
}

// User's answer
export interface Answer {
  questionId: string;
  optionId: string;
  score: Partial<Record<Dimension, number>>;
}

// Test result calculation
export interface DimensionScore {
  dimension: Dimension;
  score: number;
  percentage: number; // 0-100
}

export interface TestResult {
  personalityCode: PersonalityCode;
  personality: PersonalityType;
  dimensionScores: DimensionScore[];
  answers: Answer[];
  completedAt: Date;
}

// API Response types (for future backend integration)
export interface ApiResponse<T> {
  data: T;
  error?: string;
  timestamp: string;
}

export interface TestProgressState {
  currentQuestionIndex: number;
  answers: Answer[];
  totalQuestions: number;
  isComplete: boolean;
}
