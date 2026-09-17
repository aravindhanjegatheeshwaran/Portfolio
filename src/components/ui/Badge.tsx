import type { ReactNode } from "react";

type BadgeVariant =
  | "default"
  | "blue"
  | "emerald"
  | "violet"
  | "orange"
  | "yellow"
  | "slate"
  | "cyan";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md";
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-gray-800 text-gray-300 border-gray-700",
  blue: "bg-blue-950/60 text-blue-300 border-blue-800/50",
  emerald: "bg-emerald-950/60 text-emerald-300 border-emerald-800/50",
  violet: "bg-violet-950/60 text-violet-300 border-violet-800/50",
  orange: "bg-orange-950/60 text-orange-300 border-orange-800/50",
  yellow: "bg-yellow-950/60 text-yellow-300 border-yellow-800/50",
  slate: "bg-slate-800/60 text-slate-300 border-slate-700/50",
  cyan: "bg-cyan-950/60 text-cyan-300 border-cyan-800/50",
};

export function Badge({
  children,
  variant = "default",
  size = "sm",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center border rounded-full font-medium ${
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm"
      } ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
