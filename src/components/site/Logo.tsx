interface LogoProps {
  className?: string;
  color?: string;
}

export function Logo({ className, color = "#0F4C4A" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Finger outline */}
      <path d="M16 44 L16 22 C16 13 19 7 24 7 C29 7 32 13 32 22 L32 44" />

      {/* Nail plate — clear almond shape sitting on the finger tip */}
      <path
        d="M17.5 20 C17.5 13 20 9 24 9 C28 9 30.5 13 30.5 20 C30.5 24 28.5 27 24 27 C19.5 27 17.5 24 17.5 20 Z"
        fill={color}
        fillOpacity="0.08"
      />

      {/* Lunula (half-moon at the cuticle base) */}
      <path d="M20 22.5 C21.2 24 26.8 24 28 22.5" />

      {/* Nail tip highlight — the French-tip crescent */}
      <path d="M19 13.5 C21 11 27 11 29 13.5" strokeWidth="1.4" />

      {/* Subtle shine accent */}
      <path d="M21.5 16.5 L21.5 19.5" opacity="0.5" strokeWidth="1.2" />
    </svg>
  );
}
