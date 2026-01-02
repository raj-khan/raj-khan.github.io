interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      {/* Progress text */}
      <div className="flex justify-between mb-2 text-sm text-gray-600">
        <span>Question Progress</span>
        <span className="font-semibold">{current} / {total}</span>
      </div>

      {/* Progress bar */}
      <div 
        className="w-full bg-gray-200 rounded-full h-3 overflow-hidden"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Test progress"
      >
        <div
          className="h-full bg-gradient-to-r from-analyst to-diplomat transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Percentage */}
      <div className="text-center mt-2 text-xs text-gray-500">
        {percentage}% Complete
      </div>
    </div>
  );
}
