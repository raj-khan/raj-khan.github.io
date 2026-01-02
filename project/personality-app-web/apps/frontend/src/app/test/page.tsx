'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTestStore } from '@/store/testStore';
import { QuestionCard } from '@/components/QuestionCard/QuestionCard';
import { ProgressBar } from '@/components/ProgressBar/ProgressBar';
import { questions } from '@personality-app/test-data';

export default function TestPage() {
  const router = useRouter();
  const {
    currentQuestionIndex,
    answers,
    answerQuestion,
    goToPreviousQuestion,
    isComplete,
  } = useTestStore();

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion?.id);

  // Redirect to result if complete
  useEffect(() => {
    if (isComplete) {
      router.push('/result');
    }
  }, [isComplete, router]);

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-analyst mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const handleAnswer = (optionId: string) => {
    answerQuestion(currentQuestion.id, optionId);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Personality Test
          </h1>
          <p className="text-gray-600">
            Answer honestly for the most accurate results
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar current={answers.length} total={questions.length} />

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          selectedOptionId={currentAnswer?.optionId}
        />

        {/* Navigation */}
        <div className="flex justify-between mt-8 max-w-2xl mx-auto">
          <button
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed border-gray-300 text-gray-700 hover:border-gray-400"
          >
            ← Back
          </button>

          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to exit? Your progress will be lost.')) {
                router.push('/');
              }
            }}
            className="btn-secondary text-red-600 border-red-300 hover:border-red-400"
          >
            Exit Test
          </button>
        </div>

        {/* Helper text */}
        <div className="text-center mt-6 text-sm text-gray-500">
          {currentAnswer ? (
            'Answer recorded! Continue to next question or go back to change.'
          ) : (
            'Select an option to continue'
          )}
        </div>
      </div>
    </div>
  );
}
