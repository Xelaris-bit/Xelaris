import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 128 128"
      className={cn("text-primary", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient id="logoPrimaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "hsl(var(--primary))" }} />
                <stop offset="100%" style={{ stopColor: "hsl(var(--primary) / 0.8)" }} />
            </linearGradient>
            <linearGradient id="logoAccentGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "hsl(var(--accent))" }} />
                <stop offset="100%" style={{ stopColor: "hsl(var(--accent) / 0.8)" }} />
            </linearGradient>
            <filter id="logoDropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                <feOffset dx="2" dy="2" result="offsetblur" />
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g style={{ filter: "url(#logoDropShadow)" }}>
            {/* Back part of the 'X' - Primary Color */}
            <path
                d="M32 24 L48 24 L80 96 L64 96 Z"
                fill="url(#logoPrimaryGradient)"
            />
             {/* Front part of 'X' forming a checkmark - Accent Color */}
            <path
                d="M52 24 L104 24 L72 96 L48 96 L80 56 L32 104 L24 96 L72 48 Z"
                fill="url(#logoAccentGradient)"
            />
        </g>
    </svg>
);
