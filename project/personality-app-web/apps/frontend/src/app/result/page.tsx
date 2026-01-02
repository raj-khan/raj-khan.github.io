'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTestStore } from '@/store/testStore';
import { PersonalityCard } from '@/components/PersonalityCard/PersonalityCard';
import { DimensionChart } from '@/components/DimensionChart/DimensionChart';
import { TraitsList } from '@/components/TraitsList/TraitsList';
import { ResultActions } from '@/components/ResultActions/ResultActions';

export default function ResultPage() {
  const router = useRouter();
  const { result, isComplete } = useTestStore();

  useEffect(() => {
    // Redirect to test if no result
    if (!isComplete || !result) {
      router.push('/test');
    }
  }, [isComplete, result, router]);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-analyst mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Your Personality Profile
          </h1>
          <p className="text-gray-600">
            Discover what makes you unique
          </p>
        </div>

        {/* Main result card - for download */}
        <div id="result-card" className="mb-8 animate-slide-up">
          <PersonalityCard personality={result.personality} />
        </div>

        {/* Dimension scores */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <DimensionChart scores={result.dimensionScores} />
        </div>

        {/* Traits */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <TraitsList personality={result.personality} />
        </div>

        {/* Actions */}
        <div className="animate-slide-up" style={{ animationDelay: '600ms' }}>
          <ResultActions 
            personalityCode={result.personalityCode}
            personalityName={result.personality.name}
          />
        </div>

        {/* Back to home */}
        <div className="text-center mt-8">
          <button
            onClick={() => router.push('/')}
            className="text-gray-600 hover:text-gray-800 underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
