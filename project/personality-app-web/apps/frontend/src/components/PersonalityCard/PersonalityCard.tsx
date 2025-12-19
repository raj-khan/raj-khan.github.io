import { PersonalityType } from '@personality-app/types';

interface PersonalityCardProps {
  personality: PersonalityType;
}

export function PersonalityCard({ personality }: PersonalityCardProps) {
  return (
    <div 
      className="card text-center max-w-2xl mx-auto"
      style={{ borderTop: `4px solid ${personality.color}` }}
    >
      {/* Role badge */}
      <div className="mb-4">
        <span 
          className="inline-block px-4 py-1 rounded-full text-white font-semibold text-sm"
          style={{ backgroundColor: personality.color }}
        >
          {personality.role}
        </span>
      </div>

      {/* Personality code */}
      <div 
        className="text-6xl font-bold mb-2"
        style={{ color: personality.color }}
      >
        {personality.code}
      </div>

      {/* Name */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        The {personality.name}
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
        {personality.description}
      </p>

      {/* Role description */}
      <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
        {personality.roleDescription}
      </div>
    </div>
  );
}
