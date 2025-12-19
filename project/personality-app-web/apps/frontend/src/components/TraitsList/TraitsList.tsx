import { PersonalityType } from '@personality-app/types';

interface TraitsListProps {
  personality: PersonalityType;
}

export function TraitsList({ personality }: TraitsListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* Strengths */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">💪</span>
          Strengths
        </h3>
        <ul className="space-y-2">
          {personality.strengths.map((strength, index) => (
            <li 
              key={index}
              className="flex items-start"
            >
              <span 
                className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                style={{ backgroundColor: personality.color }}
              />
              <span className="text-gray-700">{strength}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Weaknesses */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">⚠️</span>
          Weaknesses
        </h3>
        <ul className="space-y-2">
          {personality.weaknesses.map((weakness, index) => (
            <li 
              key={index}
              className="flex items-start"
            >
              <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-gray-400" />
              <span className="text-gray-700">{weakness}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
