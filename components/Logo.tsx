type LogoVariant = "nav" | "hero" | "footer";

type LogoProps = {
  variant?: LogoVariant;
  size?: number;
  className?: string;
};

const palettes: Record<
  LogoVariant,
  { gradId: string; rays: string; curve: string; line: string }
> = {
  nav: { gradId: "sunNav", rays: "#E88A5A", curve: "#1E3A5F", line: "#3E7C86" },
  hero: { gradId: "sunHero", rays: "#F0A05C", curve: "#FFFFFF", line: "#8FB4BC" },
  footer: {
    gradId: "sunFoot",
    rays: "#F0A05C",
    curve: "#8FB4BC",
    line: "#5E8791",
  },
};

const defaultSizes: Record<LogoVariant, number> = {
  nav: 42,
  hero: 200,
  footer: 38,
};

export function Logo({ variant = "nav", size, className }: LogoProps) {
  const { gradId, rays, curve, line } = palettes[variant];
  const dim = size ?? defaultSizes[variant];
  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 120 120"
      fill="none"
      aria-label="Horizonte"
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F5B45E" />
          <stop offset="1" stopColor="#E07A5F" />
        </linearGradient>
      </defs>
      <g stroke={rays} strokeWidth="5.5" strokeLinecap="round">
        <line x1="60" y1="8" x2="60" y2="19" />
        <line x1="34" y1="16" x2="40" y2="26" />
        <line x1="86" y1="16" x2="80" y2="26" />
        <line x1="17" y1="35" x2="27" y2="41" />
        <line x1="103" y1="35" x2="93" y2="41" />
      </g>
      <circle cx="60" cy="52" r="22" fill={`url(#${gradId})`} />
      <path
        d="M26 84 Q60 112 94 84"
        stroke={curve}
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      <line
        x1="46"
        y1="102"
        x2="74"
        y2="102"
        stroke={line}
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}
