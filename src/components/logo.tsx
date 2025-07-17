import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 128 128"
    className={cn("text-primary", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "hsl(var(--primary) / 0.7)", stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="checkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "hsl(var(--accent))" }} />
        <stop offset="100%" style={{ stopColor: "hsl(var(--accent) / 0.8)" }} />
      </linearGradient>
      <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="2" dy="4" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g style={{ filter: "url(#dropShadow)" }}>
      <path
        d="M64 10C28.65 10 10 28.65 10 64V118L64 102L118 118V64C118 28.65 99.35 10 64 10Z"
        fill="url(#shieldGradient)"
      />
      <path
        d="M44 64L58 78L84 52"
        stroke="url(#checkGradient)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  </svg>
);
