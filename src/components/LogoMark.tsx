import { useId } from "react";

interface LogoMarkProps {
  className?: string;
  squareColor?: string;
  lineColor?: string;
}

/**
 * IUDPR contour-line mark. Colors default to the theme's fg/bg tokens so the
 * mark auto-inverts with light/dark mode; pass explicit colors for surfaces
 * (like the footer) that don't flip with the theme.
 */
export function LogoMark({
  className = "w-9 h-9",
  squareColor = "var(--iudpr-fg)",
  lineColor = "var(--iudpr-bg)",
}: LogoMarkProps) {
  const clipId = useId();

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="IUDPR"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width="100" height="100" rx="10" />
        </clipPath>
      </defs>
      <rect x="0" y="0" width="100" height="100" rx="10" fill={squareColor} />
      <g
        clipPath={`url(#${clipId})`}
        fill="none"
        stroke={lineColor}
        strokeWidth="7"
        strokeLinecap="round"
      >
        <path d="M-10 18 C 10 4, 25 32, 45 18 S 80 4, 110 18" />
        <path d="M-10 42 C 8 30, 28 54, 48 42 S 82 28, 110 42" />
        <path d="M-10 66 C 12 52, 24 78, 50 66 S 84 50, 110 66" />
        <path d="M-10 90 C 10 78, 30 100, 52 90 S 84 76, 110 90" />
      </g>
    </svg>
  );
}
