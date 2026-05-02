interface LogoProps {
  className?: string;
  color?: string;
}

export function Logo({ className, color = "#0F4C4A" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Stylized fingernail silhouette */}
      <path d="M20 5 C26 5 29 9 29 16 L29 28 C29 32 25 35 20 35 C15 35 11 32 11 28 L11 16 C11 9 14 5 20 5 Z" />
      {/* Cuticle line / moon */}
      <path d="M13 14 C16 12 24 12 27 14" />
      {/* Subtle shine accent */}
      <path d="M17 19 L17 27" opacity="0.55" />
    </svg>
  );
}
