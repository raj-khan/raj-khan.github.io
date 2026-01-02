import { Question } from '@personality-app/types';
import clsx from 'clsx';

interface QuestionCardProps {
  question: Question;
  onAnswer: (optionId: string) => void;
  selectedOptionId?: string;
}

export function QuestionCard({ 
  question, 
  onAnswer, 
  selectedOptionId 
}: QuestionCardProps) {
  return (
    <div className="card max-w-2xl mx-auto animate-slide-up">
      {/* Category badge */}
      <div className="text-center mb-4">
        <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600 capitalize">
          {question.category}
        </span>
      </div>

      {/* Question text */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-balance">
        {question.text}
      </h2>

      {/* Answer options */}
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => onAnswer(option.id)}
            className={clsx(
              'w-full p-5 rounded-xl border-2 transition-all duration-200',
              'hover:scale-[1.02] hover:shadow-lg',
              'focus:outline-none focus:ring-2 focus:ring-analyst/50',
              selectedOptionId === option.id
                ? 'border-analyst bg-gradient-to-r from-analyst/10 to-analyst/5 font-semibold'
                : 'border-gray-200 hover:border-analyst/50 bg-white'
            )}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <span className="text-lg">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
