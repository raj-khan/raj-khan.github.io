import {
  Answer,
  Dimension,
  TestResult,
  DimensionScore,
  PersonalityCode,
} from '@personality-app/types';
import { personalityTypes } from '@personality-app/test-data';

// Dimension pairs
const DIMENSION_PAIRS: [Dimension, Dimension][] = [
  ['E', 'I'],
  ['S', 'N'],
  ['T', 'F'],
  ['J', 'P'],
];

/**
 * Calculate personality type from user answers
 */
export function calculatePersonality(answers: Answer[]): TestResult {
  // Calculate scores for each dimension
  const dimensionScores = calculateDimensionScores(answers);

  // Determine personality code from dimension scores
  const personalityCode = determinePersonalityCode(dimensionScores);

  // Find the matching personality type
  const personality = personalityTypes.find((p) => p.code === personalityCode);

  if (!personality) {
    throw new Error(`Personality type ${personalityCode} not found`);
  }

  return {
    personalityCode,
    personality,
    dimensionScores,
    answers,
    completedAt: new Date(),
  };
}

/**
 * Calculate scores for all dimensions
 */
function calculateDimensionScores(answers: Answer[]): DimensionScore[] {
  // Initialize scores for all dimensions
  const scores: Record<Dimension, number> = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  // Sum up scores from all answers
  answers.forEach((answer) => {
    Object.entries(answer.score).forEach(([dimension, score]) => {
      scores[dimension as Dimension] += score;
    });
  });

  // Calculate percentages for each dimension pair
  const dimensionScores: DimensionScore[] = [];

  DIMENSION_PAIRS.forEach(([dim1, dim2]) => {
    const score1 = scores[dim1];
    const score2 = scores[dim2];
    const total = score1 + score2;

    // Calculate percentage (handle division by zero)
    const percentage1 = total > 0 ? (score1 / total) * 100 : 50;
    const percentage2 = total > 0 ? (score2 / total) * 100 : 50;

    dimensionScores.push({
      dimension: dim1,
      score: score1,
      percentage: Math.round(percentage1),
    });

    dimensionScores.push({
      dimension: dim2,
      score: score2,
      percentage: Math.round(percentage2),
    });
  });

  return dimensionScores;
}

/**
 * Determine personality code from dimension scores
 */
function determinePersonalityCode(
  dimensionScores: DimensionScore[]
): PersonalityCode {
  let code = '';

  DIMENSION_PAIRS.forEach(([dim1, dim2]) => {
    const score1 =
      dimensionScores.find((s) => s.dimension === dim1)?.score || 0;
    const score2 =
      dimensionScores.find((s) => s.dimension === dim2)?.score || 0;

    // Choose dimension with higher score (default to first if equal)
    code += score1 >= score2 ? dim1 : dim2;
  });

  return code as PersonalityCode;
}

/**
 * Get personality type by code
 */
export function getPersonalityByCode(
  code: PersonalityCode
): (typeof personalityTypes)[0] | undefined {
  return personalityTypes.find((p) => p.code === code);
}

/**
 * Get all personalities by role
 */
export function getPersonalitiesByRole(role: string) {
  return personalityTypes.filter((p) => p.role === role);
}
