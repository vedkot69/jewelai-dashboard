interface ProgressBarProps {
  value: number;
  max?: number;
  color?: "gold" | "green" | "red" | "purple" | "blue";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  showLabel?: boolean;
  className?: string;
}

const colorClasses = {
  gold: "bg-color-accent-gold",
  green: "bg-color-accent-green",
  red: "bg-color-accent-red",
  purple: "bg-color-accent-purple",
  blue: "bg-color-accent-blue",
};

const sizeClasses = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-3",
};

export default function ProgressBar({
  value,
  max = 100,
  color = "gold",
  size = "md",
  animated = true,
  showLabel = true,
  className = "",
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={className}>
      <div
        className={`w-full bg-color-border-dark rounded-full overflow-hidden ${sizeClasses[size]}`}
      >
        <div
          className={`${colorClasses[color]} ${sizeClasses[size]} rounded-full transition-all duration-500 ${animated ? "ease-out" : ""}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-color-text-secondary" />
          <span className="text-xs font-semibold text-color-text-primary">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  );
}
