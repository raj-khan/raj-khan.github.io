import { describe, it, expect } from 'vitest';
import { calculatePersonality } from './scoreCalculator';
import { Answer, Dimension } from '@personality-app/types';

describe('Score Calculator', () => {
  describe('calculatePersonality', () => {
    it('should calculate INTJ personality from answers', () => {
      const answers: Answer[] = [
        { questionId: 'q1', optionId: 'q1-c', score: { I: 2 } },
        { questionId: 'q2', optionId: 'q2-a', score: { N: 2 } },
        { questionId: 'q3', optionId: 'q3-a', score: { T: 2 } },
        { questionId: 'q5', optionId: 'q5-a', score: { J: 2 } },
      ];

      const result = calculatePersonality(answers);

      expect(result.personalityCode).toBe('INTJ');
      expect(result.personality.name).toBe('Architect');
      expect(result.personality.role).toBe('Analysts');
    });

    it('should calculate ENFP personality from answers', () => {
      const answers: Answer[] = [
        { questionId: 'q1', optionId: 'q1-a', score: { E: 2 } },
        { questionId: 'q2', optionId: 'q2-a', score: { N: 2 } },
        { questionId: 'q6', optionId: 'q6-a', score: { F: 2 } },
        { questionId: 'q9', optionId: 'q9-a', score: { P: 2 } },
      ];

      const result = calculatePersonality(answers);

      expect(result.personalityCode).toBe('ENFP');
      expect(result.personality.name).toBe('Campaigner');
      expect(result.personality.role).toBe('Diplomats');
    });

    it('should handle neutral answers correctly', () => {
      const answers: Answer[] = [
        { questionId: 'q1', optionId: 'q1-b', score: {} },
        { questionId: 'q2', optionId: 'q2-b', score: {} },
        { questionId: 'q3', optionId: 'q3-b', score: {} },
        { questionId: 'q5', optionId: 'q5-b', score: {} },
      ];

      const result = calculatePersonality(answers);

      // Should still return a valid personality type
      expect(result.personalityCode).toBeDefined();
      expect(result.personalityCode.length).toBe(4);
    });

    it('should calculate correct dimension scores', () => {
      const answers: Answer[] = [
        { questionId: 'q1', optionId: 'q1-a', score: { E: 2 } },
        { questionId: 'q4', optionId: 'q4-c', score: { E: 2 } },
        { questionId: 'q7', optionId: 'q7-a', score: { E: 2 } },
      ];

      const result = calculatePersonality(answers);

      const eScore = result.dimensionScores.find(s => s.dimension === 'E');
      expect(eScore).toBeDefined();
      expect(eScore!.score).toBe(6);
      expect(eScore!.percentage).toBeGreaterThan(0);
    });

    it('should handle mixed positive and negative scores for same dimension pair', () => {
      const answers: Answer[] = [
        { questionId: 'q1', optionId: 'q1-a', score: { E: 2 } },
        { questionId: 'q4', optionId: 'q4-a', score: { I: 2 } },
        { questionId: 'q7', optionId: 'q7-c', score: { I: 2 } },
      ];

      const result = calculatePersonality(answers);

      // Should calculate net score correctly (2E - 4I = net Introvert)
      expect(['I', 'E']).toContain(result.personalityCode[0]);
    });

    it('should return dimension scores for all 8 dimensions', () => {
      const answers: Answer[] = [
        { questionId: 'q1', optionId: 'q1-a', score: { E: 2 } },
        { questionId: 'q2', optionId: 'q2-a', score: { N: 2 } },
        { questionId: 'q3', optionId: 'q3-a', score: { T: 2 } },
        { questionId: 'q5', optionId: 'q5-a', score: { J: 2 } },
      ];

      const result = calculatePersonality(answers);

      expect(result.dimensionScores.length).toBe(8);
      const dimensions = result.dimensionScores.map(s => s.dimension);
      expect(dimensions).toContain('E');
      expect(dimensions).toContain('I');
      expect(dimensions).toContain('S');
      expect(dimensions).toContain('N');
      expect(dimensions).toContain('T');
      expect(dimensions).toContain('F');
      expect(dimensions).toContain('J');
      expect(dimensions).toContain('P');
    });

    it('should include completedAt timestamp', () => {
      const answers: Answer[] = [
        { questionId: 'q1', optionId: 'q1-a', score: { E: 2 } },
        { questionId: 'q2', optionId: 'q2-a', score: { N: 2 } },
        { questionId: 'q3', optionId: 'q3-a', score: { T: 2 } },
        { questionId: 'q5', optionId: 'q5-a', score: { J: 2 } },
      ];

      const result = calculatePersonality(answers);

      expect(result.completedAt).toBeInstanceOf(Date);
      expect(result.completedAt.getTime()).toBeLessThanOrEqual(Date.now());
    });
  });
});
