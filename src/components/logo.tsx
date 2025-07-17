import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 128 128"
      className={cn("text-primary", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient id="logoPrimaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary) / 0.8)" />
            </linearGradient>
            <linearGradient id="logoAccentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--accent) / 0.8)" />
            </linearGradient>
             <filter id="logoDropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
                <feOffset dx="2" dy="2" result="offsetblur" />
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g style={{ filter: "url(#logoDropShadow)" }}>
            {/* The first stroke of the 'X', a simple bar in primary color */}
            <path
                d="M24 24 L48 24 L104 104 L80 104 Z"
                fill="url(#logoPrimaryGradient)"
            />
            {/* The second stroke, forming a checkmark in accent color */}
            <path
                d="M48 96 L72 104 L104 48 L80 40 Z"
                transform="translate(8, -8)"
                fill="url(#logoAccentGradient)"
            />
        </g>
    </svg>
);
