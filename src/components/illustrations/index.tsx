interface IllustrationProps {
  className?: string;
}

export function CustomSoftwareIllustration({ className = "" }: IllustrationProps) {
  const BASE = "#1e1b4b";
  const ACCENT = "#818cf8";
  const ACCENT_ALT = "#22d3ee";
  const LIGHT = "#c7d2fe";
  const TINT = "#eef2ff";

  return (
    <svg viewBox="0 0 320 280" fill="none" className={className} aria-hidden="true">
      <circle cx="230" cy="70" r="95" fill={TINT} />
      <circle cx="52" cy="228" r="16" fill={ACCENT} opacity="0.2" />
      <rect x="40" y="58" width="220" height="164" rx="18" fill={BASE} />
      <circle cx="63" cy="82" r="5" fill="#f87171" />
      <circle cx="81" cy="82" r="5" fill="#fbbf24" />
      <circle cx="99" cy="82" r="5" fill="#34d399" />
      <path
        d="M104 132 L84 152 L104 172"
        stroke={ACCENT_ALT}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M178 132 L198 152 L178 172"
        stroke={ACCENT_ALT}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="150" y1="124" x2="132" y2="180" stroke={ACCENT} strokeWidth="7" strokeLinecap="round" />
      <rect x="63" y="188" width="90" height="8" rx="4" fill={LIGHT} opacity="0.7" />
      <rect x="63" y="202" width="58" height="8" rx="4" fill={LIGHT} opacity="0.5" />
      <circle cx="250" cy="204" r="15" fill={ACCENT_ALT} opacity="0.6" />
    </svg>
  );
}

export function WebsiteIllustration({ className = "" }: IllustrationProps) {
  const BASE = "#1e3a8a";
  const ACCENT = "#3b82f6";
  const ACCENT_DARK = "#2563eb";
  const LIGHT = "#93c5fd";
  const TINT = "#eff6ff";

  return (
    <svg viewBox="0 0 320 280" fill="none" className={className} aria-hidden="true">
      <circle cx="90" cy="80" r="90" fill={TINT} />
      <rect x="45" y="55" width="230" height="168" rx="18" fill="#ffffff" stroke={BASE} strokeWidth="3" />
      <rect x="45" y="55" width="230" height="34" rx="18" fill={BASE} />
      <circle cx="66" cy="72" r="4.5" fill="#f87171" />
      <circle cx="82" cy="72" r="4.5" fill="#fbbf24" />
      <rect x="105" y="66" width="120" height="12" rx="6" fill={LIGHT} />
      <rect x="65" y="106" width="190" height="52" rx="10" fill={ACCENT} opacity="0.9" />
      <rect x="65" y="168" width="88" height="34" rx="8" fill={TINT} />
      <rect x="167" y="168" width="88" height="34" rx="8" fill={TINT} />
      <circle cx="252" cy="214" r="20" fill={ACCENT_DARK} />
      <path d="M244 214 L250 220 L262 206" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function PosIllustration({ className = "" }: IllustrationProps) {
  const BASE = "#064e3b";
  const ACCENT = "#34d399";
  const ACCENT_DARK = "#059669";
  const LIGHT = "#a7f3d0";
  const TINT = "#ecfdf5";

  return (
    <svg viewBox="0 0 320 280" fill="none" className={className} aria-hidden="true">
      <circle cx="220" cy="90" r="92" fill={TINT} />
      <rect x="75" y="70" width="140" height="170" rx="20" fill={BASE} />
      <rect x="92" y="90" width="106" height="70" rx="8" fill={ACCENT} />
      <rect x="106" y="106" width="34" height="8" rx="4" fill={BASE} opacity="0.5" />
      <rect x="106" y="122" width="60" height="8" rx="4" fill={BASE} opacity="0.35" />
      <rect x="92" y="176" width="30" height="14" rx="4" fill={LIGHT} />
      <rect x="128" y="176" width="30" height="14" rx="4" fill={LIGHT} />
      <rect x="164" y="176" width="34" height="14" rx="4" fill={ACCENT_DARK} />
      <rect x="150" y="40" width="70" height="46" rx="8" fill="#ffffff" stroke={BASE} strokeWidth="3" transform="rotate(-8 150 40)" />
      <rect x="160" y="52" width="24" height="16" rx="3" fill={ACCENT} transform="rotate(-8 150 40)" />
      <circle cx="60" cy="150" r="14" fill={ACCENT_DARK} opacity="0.35" />
      <circle cx="245" cy="205" r="10" fill={ACCENT} opacity="0.6" />
    </svg>
  );
}

export function WhatsappIllustration({ className = "" }: IllustrationProps) {
  const BASE = "#075e54";
  const ACCENT = "#25d366";
  const ACCENT_DARK = "#128c7e";
  const LIGHT = "#a7f3d0";
  const TINT = "#e7fbf0";

  return (
    <svg viewBox="0 0 320 280" fill="none" className={className} aria-hidden="true">
      <circle cx="100" cy="90" r="92" fill={TINT} />
      <rect x="90" y="45" width="130" height="200" rx="24" fill={BASE} />
      <rect x="100" y="65" width="110" height="150" rx="10" fill="#ffffff" />
      <path
        d="M118 96 h60 a10 10 0 0 1 10 10 v22 a10 10 0 0 1 -10 10 h-38 l-16 14 v-14 h-6 a10 10 0 0 1 -10 -10 v-22 a10 10 0 0 1 10 -10 z"
        fill={ACCENT}
      />
      <circle cx="140" cy="117" r="4" fill="#ffffff" />
      <circle cx="154" cy="117" r="4" fill="#ffffff" />
      <circle cx="168" cy="117" r="4" fill="#ffffff" />
      <rect x="118" y="160" width="70" height="9" rx="4.5" fill="#e0e3e5" />
      <rect x="118" y="176" width="46" height="9" rx="4.5" fill="#e0e3e5" />
      <circle cx="155" cy="234" r="8" fill={LIGHT} />
      <circle cx="245" cy="120" r="24" fill={ACCENT_DARK} />
      <path d="M234 120 L242 128 L258 108" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="52" cy="200" r="12" fill={ACCENT} opacity="0.5" />
    </svg>
  );
}

export function AdminSystemIllustration({ className = "" }: IllustrationProps) {
  const BASE = "#78350f";
  const ACCENT = "#f59e0b";
  const ACCENT_DARK = "#d97706";
  const LIGHT = "#fde68a";
  const TINT = "#fffbeb";

  return (
    <svg viewBox="0 0 320 280" fill="none" className={className} aria-hidden="true">
      <circle cx="220" cy="70" r="90" fill={TINT} />
      <rect x="45" y="60" width="220" height="160" rx="18" fill="#ffffff" stroke={BASE} strokeWidth="3" />
      <rect x="70" y="150" width="26" height="42" rx="5" fill={LIGHT} />
      <rect x="106" y="120" width="26" height="72" rx="5" fill={ACCENT_DARK} />
      <rect x="142" y="100" width="26" height="92" rx="5" fill={ACCENT} />
      <rect x="178" y="134" width="26" height="58" rx="5" fill={LIGHT} />
      <circle cx="222" cy="146" r="30" fill="none" stroke={BASE} strokeWidth="10" strokeDasharray="47 141" strokeLinecap="round" />
      <circle cx="222" cy="146" r="30" fill="none" stroke={ACCENT} strokeWidth="10" strokeDasharray="94 141" strokeDashoffset="-47" strokeLinecap="round" />
      <circle cx="60" cy="230" r="14" fill={ACCENT_DARK} opacity="0.3" />
      <rect x="200" y="215" width="46" height="10" rx="5" fill={BASE} opacity="0.25" />
    </svg>
  );
}

export function OtherProjectsIllustration({ className = "" }: IllustrationProps) {
  const BASE = "#4c0519";
  const ACCENT = "#fb7185";
  const LIGHT = "#fecdd3";
  const TINT = "#fff1f2";

  return (
    <svg viewBox="0 0 320 280" fill="none" className={className} aria-hidden="true">
      <circle cx="160" cy="90" r="95" fill={TINT} />
      <rect x="100" y="150" width="120" height="70" rx="14" fill={BASE} />
      <path
        d="M160 40 a34 34 0 0 1 34 34 c0 18 -14 24 -20 36 a14 14 0 0 1 -28 0 c-6 -12 -20 -18 -20 -36 a34 34 0 0 1 34 -34 z"
        fill={ACCENT}
      />
      <rect x="144" y="112" width="32" height="14" rx="4" fill={BASE} opacity="0.7" />
      <circle cx="90" cy="180" r="16" fill={ACCENT} opacity="0.3" />
      <circle cx="238" cy="170" r="10" fill={ACCENT} opacity="0.55" />
      <rect x="126" y="170" width="68" height="10" rx="5" fill={LIGHT} opacity="0.8" />
      <rect x="126" y="188" width="46" height="10" rx="5" fill={LIGHT} opacity="0.6" />
    </svg>
  );
}
