import { create } from 'zustand';
import { Answer, TestResult, Question } from '@personality-app/types';
import { questions } from '@personality-app/test-data';
import { calculatePersonality } from '@/lib/scoreCalculator';

interface TestState {
  // State
  currentQuestionIndex: number;
  answers: Answer[];
  isComplete: boolean;
  result: TestResult | null;

  // Actions
  answerQuestion: (questionId: string, optionId: string) => void;
  goToPreviousQuestion: () => void;
  resetTest: () => void;

  // Selectors
  getCurrentQuestion: () => Question | undefined;
  getProgress: () => number;
}

export const useTestStore = create<TestState>((set, get) => ({
  // Initial state
  currentQuestionIndex: 0,
  answers: [],
  isComplete: false,
  result: null,

  // Answer a question
  answerQuestion: (questionId: string, optionId: string) => {
    const { answers, currentQuestionIndex } = get();

    // Find the question and selected option
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const option = question.options.find((o) => o.id === optionId);
    if (!option) return;

    // Create the answer
    const newAnswer: Answer = {
      questionId,
      optionId,
      score: option.score,
    };

    // Check if answer already exists (user changing their answer)
    const existingAnswerIndex = answers.findIndex(
      (a) => a.questionId === questionId
    );

    let newAnswers: Answer[];
    if (existingAnswerIndex !== -1) {
      // Update existing answer
      newAnswers = [...answers];
      newAnswers[existingAnswerIndex] = newAnswer;
    } else {
      // Add new answer
      newAnswers = [...answers, newAnswer];
    }

    // Check if test is complete
    const isComplete = newAnswers.length === questions.length;

    // Calculate result if complete
    let result: TestResult | null = null;
    if (isComplete) {
      result = calculatePersonality(newAnswers);
    }

    // Move to next question if not complete and not changing previous answer
    const nextIndex =
      existingAnswerIndex === -1 && !isComplete
        ? currentQuestionIndex + 1
        : currentQuestionIndex;

    set({
      answers: newAnswers,
      currentQuestionIndex: nextIndex,
      isComplete,
      result,
    });
  },

  // Go back to previous question
  goToPreviousQuestion: () => {
    const { currentQuestionIndex } = get();
    if (currentQuestionIndex > 0) {
      set({ currentQuestionIndex: currentQuestionIndex - 1 });
    }
  },

  // Reset the test
  resetTest: () => {
    set({
      currentQuestionIndex: 0,
      answers: [],
      isComplete: false,
      result: null,
    });
  },

  // Get current question
  getCurrentQuestion: () => {
    const { currentQuestionIndex } = get();
    return questions[currentQuestionIndex];
  },

  // Get progress percentage
  getProgress: () => {
    const { answers } = get();
    return Math.round((answers.length / questions.length) * 100);
  },
}));
