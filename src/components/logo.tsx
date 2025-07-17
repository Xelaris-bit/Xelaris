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
                <stop offset="100%" style={{ stopColor: "hsl(var(--primary) / 0.7)" }} />
            </linearGradient>
            <linearGradient id="logoAccentGradient" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "hsl(var(--accent))" }} />
                <stop offset="100%" style={{ stopColor: "hsl(var(--accent) / 0.7)" }} />
            </linearGradient>
            <filter id="logoDropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="2" dy="3" result="offsetblur" />
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g style={{ filter: "url(#logoDropShadow)" }}>
            {/* First checkmark, in primary color */}
            <path
                d="M24 68 L52 96 L104 24 L88 12 L52 64 L40 52 Z"
                fill="url(#logoPrimaryGradient)"
            />
            {/* Second, overlapping checkmark in accent color, creating an 'X' shape */}
            <path
                d="M24 36 L52 64 L104 116 L88 128 L52 76 L40 88 Z"
                fill="url(#logoAccentGradient)"
                transform="translate(0, -12)"
            />
        </g>
    </svg>
);