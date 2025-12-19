import { DimensionScore } from '@personality-app/types';

interface DimensionChartProps {
  scores: DimensionScore[];
}

export function DimensionChart({ scores }: DimensionChartProps) {
  // Group scores by dimension pairs
  const pairs = [
    { left: 'E', right: 'I', label: 'Energy' },
    { left: 'S', right: 'N', label: 'Information' },
    { left: 'T', right: 'F', label: 'Decisions' },
    { left: 'J', right: 'P', label: 'Lifestyle' }
  ];

  return (
    <div className="card max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Your Personality Dimensions
      </h2>

      <div className="space-y-6">
        {pairs.map((pair) => {
          const leftScore = scores.find(s => s.dimension === pair.left);
          const rightScore = scores.find(s => s.dimension === pair.right);
          
          if (!leftScore || !rightScore) return null;

          const leftPercentage = leftScore.percentage;
          const rightPercentage = rightScore.percentage;

          return (
            <div key={`${pair.left}-${pair.right}`}>
              {/* Labels */}
              <div className="flex justify-between mb-2">
                <div className="text-sm font-semibold text-gray-700">
                  {pair.left} ({leftPercentage}%)
                </div>
                <div className="text-xs text-gray-500">
                  {pair.label}
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  {pair.right} ({rightPercentage}%)
                </div>
              </div>

              {/* Bar */}
              <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 h-full bg-gradient-to-r from-analyst to-diplomat transition-all duration-1000"
                  style={{ width: `${leftPercentage}%` }}
                />
                <div
                  className="absolute right-0 h-full bg-gradient-to-l from-sentinel to-explorer transition-all duration-1000"
                  style={{ width: `${rightPercentage}%` }}
                />
                
                {/* Center line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
          <div>
            <strong>E:</strong> Extraversion<br/>
            <strong>S:</strong> Sensing<br/>
            <strong>T:</strong> Thinking<br/>
            <strong>J:</strong> Judging
          </div>
          <div>
            <strong>I:</strong> Introversion<br/>
            <strong>N:</strong> Intuition<br/>
            <strong>F:</strong> Feeling<br/>
            <strong>P:</strong> Perceiving
          </div>
        </div>
      </div>
    </div>
  );
}
