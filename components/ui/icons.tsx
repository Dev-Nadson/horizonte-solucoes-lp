import type { ReactNode, SVGProps } from "react";

type IconProps = {
  size?: number;
  className?: string;
  /** Cor do traço (stroke). Padrão: currentColor. */
  color?: string;
  strokeWidth?: number;
};

function Icon({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className,
  children,
}: IconProps & { children: ReactNode } & Pick<
  SVGProps<SVGSVGElement>,
  "className"
>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

/* ===== Landing Page — Para quem ===== */

export function IconPerson(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21v-1a6 6 0 0 1 12 0v1" />
      <path d="M18 8l3 3-3 3" />
    </Icon>
  );
}

export function IconGraduation(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
    </Icon>
  );
}

export function IconBuilding(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
    </Icon>
  );
}

/* ===== PróVisão — Como funciona ===== */

export function IconMic(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
      <path d="M5 10v2a7 7 0 0 0 14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </Icon>
  );
}

export function IconChip(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
    </Icon>
  );
}

export function IconSpeaker(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M19 5a9 9 0 0 1 0 14" />
    </Icon>
  );
}

/* ===== PróVisão — Benefícios ===== */

export function IconShield(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </Icon>
  );
}

export function IconFlag(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 3v18" />
      <path d="M6 4c4-2 8 2 12 0v8c-4 2-8-2-12 0" />
    </Icon>
  );
}

export function IconClock(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </Icon>
  );
}

export function IconShuffle(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 7h-9" />
      <path d="M14 17H5" />
      <circle cx="17" cy="17" r="3" />
      <circle cx="7" cy="7" r="3" />
    </Icon>
  );
}

/* ===== PróVisão — Para quem (lista) ===== */

export function IconCheck(props: IconProps) {
  return (
    <Icon strokeWidth={3} {...props}>
      <polyline points="20 6 9 17 4 12" />
    </Icon>
  );
}
