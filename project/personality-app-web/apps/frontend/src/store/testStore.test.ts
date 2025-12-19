import { describe, it, expect, beforeEach } from 'vitest';
import { useTestStore } from './testStore';
import { questions } from '@personality-app/test-data';

describe('Test Store', () => {
  beforeEach(() => {
    // Reset store before each test
    useTestStore.setState({
      currentQuestionIndex: 0,
      answers: [],
      isComplete: false,
      result: null,
    });
  });

  describe('Initial State', () => {
    it('should have correct initial state', () => {
      const state = useTestStore.getState();

      expect(state.currentQuestionIndex).toBe(0);
      expect(state.answers).toEqual([]);
      expect(state.isComplete).toBe(false);
      expect(state.result).toBeNull();
    });
  });

  describe('answerQuestion', () => {
    it('should add answer and move to next question', () => {
      const state = useTestStore.getState();
      const firstQuestion = questions[0];

      state.answerQuestion(firstQuestion.id, firstQuestion.options[0].id);

      const newState = useTestStore.getState();
      expect(newState.answers.length).toBe(1);
      expect(newState.answers[0].questionId).toBe(firstQuestion.id);
      expect(newState.currentQuestionIndex).toBe(1);
    });

    it('should allow changing answer for current question', () => {
      const state = useTestStore.getState();
      const firstQuestion = questions[0];

      // Answer first time
      state.answerQuestion(firstQuestion.id, firstQuestion.options[0].id);

      // Change answer
      state.answerQuestion(firstQuestion.id, firstQuestion.options[1].id);

      const newState = useTestStore.getState();
      expect(newState.answers.length).toBe(1);
      expect(newState.answers[0].optionId).toBe(firstQuestion.options[1].id);
    });

    it('should mark test as complete when all questions answered', () => {
      const state = useTestStore.getState();

      // Answer all questions
      questions.forEach((question) => {
        state.answerQuestion(question.id, question.options[0].id);
      });

      const newState = useTestStore.getState();
      expect(newState.isComplete).toBe(true);
      expect(newState.result).not.toBeNull();
      expect(newState.result?.personalityCode).toBeDefined();
    });
  });

  describe('goToPreviousQuestion', () => {
    it('should go back to previous question', () => {
      const state = useTestStore.getState();
      const firstQuestion = questions[0];

      // Answer first question
      state.answerQuestion(firstQuestion.id, firstQuestion.options[0].id);

      // Go back
      state.goToPreviousQuestion();

      const newState = useTestStore.getState();
      expect(newState.currentQuestionIndex).toBe(0);
    });

    it('should not go below index 0', () => {
      const state = useTestStore.getState();

      state.goToPreviousQuestion();

      const newState = useTestStore.getState();
      expect(newState.currentQuestionIndex).toBe(0);
    });
  });

  describe('resetTest', () => {
    it('should reset all state to initial values', () => {
      const state = useTestStore.getState();

      // Answer some questions
      questions.slice(0, 3).forEach((question) => {
        state.answerQuestion(question.id, question.options[0].id);
      });

      // Reset
      state.resetTest();

      const newState = useTestStore.getState();
      expect(newState.currentQuestionIndex).toBe(0);
      expect(newState.answers).toEqual([]);
      expect(newState.isComplete).toBe(false);
      expect(newState.result).toBeNull();
    });
  });

  describe('getCurrentQuestion', () => {
    it('should return current question', () => {
      const state = useTestStore.getState();

      const currentQuestion = state.getCurrentQuestion();

      expect(currentQuestion).toBeDefined();
      expect(currentQuestion?.id).toBe(questions[0].id);
    });

    it('should return undefined if no questions', () => {
      const state = useTestStore.getState();
      
      // Manually set invalid index
      useTestStore.setState({ currentQuestionIndex: 999 });

      const currentQuestion = state.getCurrentQuestion();

      expect(currentQuestion).toBeUndefined();
    });
  });

  describe('getProgress', () => {
    it('should calculate correct progress percentage', () => {
      const state = useTestStore.getState();

      // Answer half the questions
      const halfWay = Math.floor(questions.length / 2);
      questions.slice(0, halfWay).forEach((question) => {
        state.answerQuestion(question.id, question.options[0].id);
      });

      const progress = state.getProgress();

      expect(progress).toBeGreaterThan(40);
      expect(progress).toBeLessThan(60);
    });

    it('should return 0 for no answers', () => {
      const state = useTestStore.getState();
      const progress = state.getProgress();

      expect(progress).toBe(0);
    });

    it('should return 100 when complete', () => {
      const state = useTestStore.getState();

      questions.forEach((question) => {
        state.answerQuestion(question.id, question.options[0].id);
      });

      const progress = state.getProgress();

      expect(progress).toBe(100);
    });
  });
});
