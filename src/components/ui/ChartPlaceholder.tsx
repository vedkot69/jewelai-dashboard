import { BarChart3 } from "lucide-react";

interface ChartPlaceholderProps {
  title?: string;
  height?: "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
}

const heightClasses = {
  sm: "h-48",
  md: "h-64",
  lg: "h-80",
  xl: "h-96",
};

export default function ChartPlaceholder({
  title,
  height = "md",
  children,
}: ChartPlaceholderProps) {
  return (
    <div className={`card-dark p-6 ${heightClasses[height]}`}>
      {title && (
        <h3 className="text-lg font-bold text-color-text-primary mb-4">
          {title}
        </h3>
      )}
      {children ? (
        children
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-color-text-secondary opacity-40 mx-auto mb-3" />
            <p className="text-color-text-secondary text-sm">
              Chart placeholder - integrate with charting library
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
