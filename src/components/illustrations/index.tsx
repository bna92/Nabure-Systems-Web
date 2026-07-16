interface IllustrationProps {
  className?: string;
}

const NAVY = "#18181b";
const MUTED_NAVY = "#52525b";
const CYAN = "#a1a1aa";
const BLUE = "#3f3f46";
const LIGHT_BLUE = "#d4d4d8";
const TINT = "#f4f4f5";

export function CustomSoftwareIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 280" fill="none" className={className} aria-hidden="true">
      <circle cx="230" cy="70" r="95" fill={TINT} />
      <circle cx="52" cy="228" r="16" fill={BLUE} opacity="0.15" />
      <rect x="40" y="58" width="220" height="164" rx="18" fill={NAVY} />
      <circle cx="63" cy="82" r="5" fill={CYAN} />
      <circle cx="81" cy="82" r="5" fill={LIGHT_BLUE} />
      <circle cx="99" cy="82" r="5" fill={MUTED_NAVY} />
      <path
        d="M104 132 L84 152 L104 172"
        stroke={CYAN}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M178 132 L198 152 L178 172"
        stroke={CYAN}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="150" y1="124" x2="132" y2="180" stroke={BLUE} strokeWidth="7" strokeLinecap="round" />
      <rect x="63" y="188" width="90" height="8" rx="4" fill={MUTED_NAVY} />
      <rect x="63" y="202" width="58" height="8" rx="4" fill={MUTED_NAVY} />
      <circle cx="250" cy="204" r="15" fill={CYAN} opacity="0.55" />
    </svg>
  );
}

export function WebsiteIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 280" fill="none" className={className} aria-hidden="true">
      <circle cx="90" cy="80" r="90" fill={TINT} />
      <rect x="45" y="55" width="230" height="168" rx="18" fill="#ffffff" stroke={NAVY} strokeWidth="3" />
      <rect x="45" y="55" width="230" height="34" rx="18" fill={NAVY} />
      <circle cx="66" cy="72" r="4.5" fill={CYAN} />
      <circle cx="82" cy="72" r="4.5" fill={LIGHT_BLUE} />
      <rect x="105" y="66" width="120" height="12" rx="6" fill={MUTED_NAVY} />
      <rect x="65" y="106" width="190" height="52" rx="10" fill={CYAN} opacity="0.85" />
      <rect x="65" y="168" width="88" height="34" rx="8" fill={TINT} />
      <rect x="167" y="168" width="88" height="34" rx="8" fill={TINT} />
      <circle cx="252" cy="214" r="20" fill={BLUE} />
      <path d="M244 214 L250 220 L262 206" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function PosIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 280" fill="none" className={className} aria-hidden="true">
      <circle cx="220" cy="90" r="92" fill={TINT} />
      <rect x="75" y="70" width="140" height="170" rx="20" fill={NAVY} />
      <rect x="92" y="90" width="106" height="70" rx="8" fill={CYAN} />
      <rect x="106" y="106" width="34" height="8" rx="4" fill={NAVY} opacity="0.6" />
      <rect x="106" y="122" width="60" height="8" rx="4" fill={NAVY} opacity="0.4" />
      <rect x="92" y="176" width="30" height="14" rx="4" fill={LIGHT_BLUE} />
      <rect x="128" y="176" width="30" height="14" rx="4" fill={LIGHT_BLUE} />
      <rect x="164" y="176" width="34" height="14" rx="4" fill={BLUE} />
      <rect x="150" y="40" width="70" height="46" rx="8" fill="#ffffff" stroke={NAVY} strokeWidth="3" transform="rotate(-8 150 40)" />
      <rect x="160" y="52" width="24" height="16" rx="3" fill={CYAN} transform="rotate(-8 150 40)" />
      <circle cx="60" cy="150" r="14" fill={BLUE} opacity="0.35" />
      <circle cx="245" cy="205" r="10" fill={CYAN} opacity="0.6" />
    </svg>
  );
}

export function WhatsappIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 280" fill="none" className={className} aria-hidden="true">
      <circle cx="100" cy="90" r="92" fill={TINT} />
      <rect x="90" y="45" width="130" height="200" rx="24" fill={NAVY} />
      <rect x="100" y="65" width="110" height="150" rx="10" fill="#ffffff" />
      <path
        d="M118 96 h60 a10 10 0 0 1 10 10 v22 a10 10 0 0 1 -10 10 h-38 l-16 14 v-14 h-6 a10 10 0 0 1 -10 -10 v-22 a10 10 0 0 1 10 -10 z"
        fill={CYAN}
      />
      <circle cx="140" cy="117" r="4" fill={NAVY} />
      <circle cx="154" cy="117" r="4" fill={NAVY} />
      <circle cx="168" cy="117" r="4" fill={NAVY} />
      <rect x="118" y="160" width="70" height="9" rx="4.5" fill="#e0e3e5" />
      <rect x="118" y="176" width="46" height="9" rx="4.5" fill="#e0e3e5" />
      <circle cx="155" cy="234" r="8" fill={LIGHT_BLUE} />
      <circle cx="245" cy="120" r="24" fill={BLUE} />
      <path d="M234 120 L242 128 L258 108" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="52" cy="200" r="12" fill={CYAN} opacity="0.5" />
    </svg>
  );
}

export function AdminSystemIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 280" fill="none" className={className} aria-hidden="true">
      <circle cx="220" cy="70" r="90" fill={TINT} />
      <rect x="45" y="60" width="220" height="160" rx="18" fill="#ffffff" stroke={NAVY} strokeWidth="3" />
      <rect x="70" y="150" width="26" height="42" rx="5" fill={LIGHT_BLUE} />
      <rect x="106" y="120" width="26" height="72" rx="5" fill={BLUE} />
      <rect x="142" y="100" width="26" height="92" rx="5" fill={CYAN} />
      <rect x="178" y="134" width="26" height="58" rx="5" fill={LIGHT_BLUE} />
      <circle cx="222" cy="146" r="30" fill="none" stroke={NAVY} strokeWidth="10" strokeDasharray="47 141" strokeLinecap="round" />
      <circle cx="222" cy="146" r="30" fill="none" stroke={CYAN} strokeWidth="10" strokeDasharray="94 141" strokeDashoffset="-47" strokeLinecap="round" />
      <circle cx="60" cy="230" r="14" fill={BLUE} opacity="0.3" />
      <rect x="200" y="215" width="46" height="10" rx="5" fill={MUTED_NAVY} opacity="0.25" />
    </svg>
  );
}

export function OtherProjectsIllustration({ className = "" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 280" fill="none" className={className} aria-hidden="true">
      <circle cx="160" cy="90" r="95" fill={TINT} />
      <rect x="100" y="150" width="120" height="70" rx="14" fill={NAVY} />
      <path
        d="M160 40 a34 34 0 0 1 34 34 c0 18 -14 24 -20 36 a14 14 0 0 1 -28 0 c-6 -12 -20 -18 -20 -36 a34 34 0 0 1 34 -34 z"
        fill={CYAN}
      />
      <rect x="144" y="112" width="32" height="14" rx="4" fill={MUTED_NAVY} />
      <circle cx="90" cy="180" r="16" fill={BLUE} opacity="0.3" />
      <circle cx="238" cy="170" r="10" fill={CYAN} opacity="0.55" />
      <rect x="126" y="170" width="68" height="10" rx="5" fill={LIGHT_BLUE} opacity="0.6" />
      <rect x="126" y="188" width="46" height="10" rx="5" fill={LIGHT_BLUE} opacity="0.4" />
    </svg>
  );
}
