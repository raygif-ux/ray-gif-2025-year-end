import React from 'react';

interface CharacterAvatarProps {
  type?: string;
}

export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({ type }) => {
  const commonClass = "w-full h-full drop-shadow-xl transition-transform hover:scale-105 duration-300";
  
  switch (type) {
    case 'sun': // 비모
      return (
        <svg viewBox="0 0 100 100" className={commonClass}>
          <defs>
            <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="100%" stopColor="#EAB308" />
            </radialGradient>
          </defs>
          <path d="M50 0 L60 20 L85 10 L75 35 L100 50 L75 65 L85 90 L60 80 L50 100 L40 80 L15 90 L25 65 L0 50 L25 35 L15 10 L40 20 Z" fill="#FDE047" stroke="#F59E0B" strokeWidth="2" className="animate-[spin_10s_linear_infinite]" />
          <circle cx="50" cy="50" r="35" fill="url(#sunGrad)" stroke="#B45309" strokeWidth="2" />
          <path d="M20 35 Q50 20 80 35" fill="none" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" />
          <circle cx="38" cy="48" r="4" fill="#451A03" />
          <circle cx="62" cy="48" r="4" fill="#451A03" />
          <path d="M40 60 Q50 70 60 60" fill="none" stroke="#451A03" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="28" cy="58" rx="5" ry="3" fill="#FCA5A5" opacity="0.8" />
          <ellipse cx="72" cy="58" rx="5" ry="3" fill="#FCA5A5" opacity="0.8" />
          <g transform="rotate(30 85 85)">
             <circle cx="85" cy="85" r="12" fill="none" stroke="#2563EB" strokeWidth="3" />
             <line x1="85" y1="97" x2="85" y2="110" stroke="#1E40AF" strokeWidth="4" />
             <path d="M78 85 H92 M85 78 V92" stroke="#2563EB" strokeWidth="1" />
          </g>
        </svg>
      );
    case 'fire_glasses': // 베이
      return (
        <svg viewBox="0 0 100 100" className={commonClass}>
          <defs>
            <linearGradient id="fireGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="50%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#FCA5A5" />
            </linearGradient>
          </defs>
          <path d="M50 15 Q65 0 75 20 Q90 10 90 40 L10 40 Q10 10 25 20 Q35 0 50 15" fill="url(#fireGrad)" stroke="#991B1B" strokeWidth="2" className="animate-pulse" />
          <rect x="20" y="38" width="60" height="50" rx="15" fill="#FECACA" stroke="#991B1B" strokeWidth="2" />
          <g fill="#FFFFFF" stroke="#111827" strokeWidth="3">
            <circle cx="35" cy="55" r="10" />
            <circle cx="65" cy="55" r="10" />
            <line x1="45" y1="55" x2="55" y2="55" />
          </g>
          <path d="M40 78 Q50 82 60 78" fill="none" stroke="#451A03" strokeWidth="3" strokeLinecap="round" />
          <path d="M85 20 L90 10 L95 20 L90 30 Z" fill="#FDE047" className="animate-bounce" />
        </svg>
      );
    case 'holy': // 치코
      return (
        <svg viewBox="0 0 100 100" className={commonClass}>
           <circle cx="50" cy="50" r="45" fill="#FEF9C3" stroke="#FACC15" strokeWidth="2" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
           <circle cx="50" cy="50" r="40" fill="#FEF3C7" opacity="0.5" />
           <path d="M20 50 Q20 20 50 20 Q80 20 80 50 L80 90 L20 90 Z" fill="#78350F" />
           <ellipse cx="50" cy="60" rx="25" ry="30" fill="#FFE4E6" />
           <path d="M35 75 Q50 95 65 75" fill="#78350F" />
           <path d="M35 75 L42 70 M65 75 L58 70" stroke="#78350F" strokeWidth="2" />
           <path d="M38 55 Q42 52 46 55 M54 55 Q58 52 62 55" fill="none" stroke="#451A03" strokeWidth="2" />
           <path d="M45 80 Q50 82 55 80" fill="none" stroke="#FFF" strokeWidth="2" />
        </svg>
      );
    case 'funny_face': // 에디
      return (
        <svg viewBox="0 0 100 100" className={commonClass}>
          <path d="M20 50 Q20 20 50 15 Q80 20 80 50 Q90 60 85 80 Q50 100 15 80 Q10 60 20 50" fill="#86EFAC" stroke="#166534" strokeWidth="2" />
          <circle cx="35" cy="45" r="8" fill="white" stroke="#166534" strokeWidth="2" />
          <circle cx="35" cy="45" r="3" fill="#166534" />
          <circle cx="65" cy="45" r="12" fill="white" stroke="#166534" strokeWidth="2" />
          <circle cx="65" cy="45" r="4" fill="#166534" />
          <path d="M15 30 L20 20 L25 30 L20 40 Z" fill="#FDE047" className="animate-spin" />
          <path d="M30 70 Q50 90 70 70" fill="#FFF" stroke="#166534" strokeWidth="2" />
          <path d="M30 70 Q50 60 70 70" fill="none" stroke="#166534" strokeWidth="2" />
          <line x1="50" y1="65" x2="50" y2="80" stroke="#166534" strokeWidth="1" />
        </svg>
      );
    case 'angel_elephant': // 이네스
      return (
        <svg viewBox="0 0 100 100" className={commonClass}>
          <path d="M10 40 Q-5 10 30 30 L40 40 Z" fill="#E9D5FF" stroke="#A855F7" strokeWidth="1" />
          <path d="M90 40 Q105 10 70 30 L60 40 Z" fill="#E9D5FF" stroke="#A855F7" strokeWidth="1" />
          <circle cx="50" cy="50" r="30" fill="#F3E8FF" stroke="#9333EA" strokeWidth="2" />
          <ellipse cx="50" cy="15" rx="20" ry="5" fill="none" stroke="#FDE047" strokeWidth="3" />
          <rect x="60" y="60" width="20" height="25" rx="2" fill="#FFF" stroke="#000" strokeWidth="1" transform="rotate(15 70 72.5)" />
          <text x="70" y="78" textAnchor="middle" fontSize="16" fill="#DC2626" fontWeight="bold" transform="rotate(15 70 72.5)">1</text>
          <path d="M45 55 Q50 75 55 65 Q60 60 58 55" fill="#E9D5FF" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" />
          <circle cx="38" cy="45" r="2" fill="#6B21A8" />
          <circle cx="62" cy="45" r="2" fill="#6B21A8" />
        </svg>
      );
    case 'battery': // 루나
      return (
        <svg viewBox="0 0 100 100" className={commonClass}>
          <rect x="30" y="20" width="40" height="70" rx="5" fill="#F3F4F6" stroke="#374151" strokeWidth="3" />
          <rect x="42" y="10" width="16" height="10" rx="2" fill="#374151" />
          <rect x="32" y="75" width="36" height="13" rx="2" fill="#EF4444" className="animate-pulse" />
          <path d="M40 45 L45 50 M55 45 L60 50" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
          <path d="M45 60 Q50 55 55 60" fill="none" stroke="#374151" strokeWidth="2" />
          <path d="M65 30 Q70 25 75 35 Q70 40 65 30" fill="#60A5FA" stroke="#2563EB" strokeWidth="1" />
          <path d="M25 40 Q20 35 15 45 Q20 50 25 40" fill="#60A5FA" stroke="#2563EB" strokeWidth="1" />
        </svg>
      );
    case 'swimmer': // 팽
      return (
        <svg viewBox="0 0 100 100" className={commonClass}>
          <path d="M25 50 Q25 15 50 15 Q75 15 75 50" fill="#2DD4BF" stroke="#0F766E" strokeWidth="2" />
          <path d="M25 50 L75 50" fill="none" stroke="#0F766E" strokeWidth="2" />
          <path d="M25 50 L25 60 Q25 90 50 90 Q75 90 75 60 L75 50" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
          <g fill="#5EEAD4" stroke="#0F766E" strokeWidth="2">
            <ellipse cx="38" cy="50" rx="12" ry="8" />
            <ellipse cx="62" cy="50" rx="12" ry="8" />
          </g>
          <path d="M50 50 L50 48 M26 50 L10 45 M74 50 L90 45" stroke="#0F766E" strokeWidth="3" />
          <circle cx="50" cy="75" r="5" fill="#0F766E" />
          <circle cx="80" cy="80" r="3" fill="#38BDF8" />
          <circle cx="15" cy="70" r="4" fill="#38BDF8" />
        </svg>
      );
    case 'cute_sparkle': // 포니
      return (
        <svg viewBox="0 0 100 100" className={commonClass}>
          <circle cx="50" cy="50" r="40" fill="#FBCFE8" stroke="#DB2777" strokeWidth="2" />
          <g>
             <circle cx="35" cy="45" r="10" fill="#FFF" stroke="#DB2777" strokeWidth="1" />
             <circle cx="35" cy="45" r="5" fill="#DB2777" />
             <circle cx="37" cy="43" r="2" fill="#FFF" />
          </g>
          <g>
             <circle cx="65" cy="45" r="10" fill="#FFF" stroke="#DB2777" strokeWidth="1" />
             <circle cx="65" cy="45" r="5" fill="#DB2777" />
             <circle cx="67" cy="43" r="2" fill="#FFF" />
          </g>
          <ellipse cx="25" cy="55" rx="6" ry="4" fill="#F472B6" opacity="0.6" />
          <ellipse cx="75" cy="55" rx="6" ry="4" fill="#F472B6" opacity="0.6" />
          <path d="M45 65 Q50 70 55 65" fill="none" stroke="#831843" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 20 L15 5 L20 20 L35 25 L20 30 L15 45 L10 30 L-5 25 Z" fill="#F472B6" className="animate-spin" transform="scale(0.5) translate(20,40)" />
          <path d="M80 80 L85 65 L90 80 L105 85 L90 90 L85 105 L80 90 L65 85 Z" fill="#F472B6" className="animate-spin" transform="scale(0.5) translate(140,140)" />
        </svg>
      );
    case 'princess': // 소이
      return (
        <svg viewBox="0 0 100 100" className={commonClass}>
           <path d="M20 90 Q10 50 50 30 Q90 50 80 90" fill="#F0ABFC" stroke="#A21CAF" strokeWidth="2" />
           <ellipse cx="50" cy="60" rx="25" ry="30" fill="#FAE8FF" stroke="#A21CAF" strokeWidth="2" />
           <path d="M30 35 L25 15 L40 25 L50 5 L60 25 L75 15 L70 35 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
           <circle cx="50" cy="30" r="3" fill="#EF4444" />
           <circle cx="35" cy="30" r="2" fill="#3B82F6" />
           <circle cx="65" cy="30" r="2" fill="#3B82F6" />
           <path d="M25 90 Q50 100 75 90 L80 100 H20 Z" fill="#E879F9" stroke="#A21CAF" strokeWidth="2" />
           <path d="M35 55 Q40 50 45 55 M33 53 L30 50 M65 55 Q60 50 55 55 M67 53 L70 50" fill="none" stroke="#A21CAF" strokeWidth="2" />
           <path d="M45 75 Q50 78 55 75" fill="none" stroke="#BE185D" strokeWidth="2" />
        </svg>
      );
    case 'cat_wizard': // 티나
      return (
        <svg viewBox="0 0 100 100" className={commonClass}>
          <circle cx="50" cy="60" r="30" fill="#A5F3FC" stroke="#0891B2" strokeWidth="2" />
          <path d="M25 45 L20 20 L40 35" fill="#67E8F9" stroke="#0891B2" strokeWidth="2" />
          <path d="M75 45 L80 20 L60 35" fill="#67E8F9" stroke="#0891B2" strokeWidth="2" />
          <path d="M15 45 L85 45 L50 5 Z" fill="#155E75" stroke="#0E7490" strokeWidth="2" />
          <path d="M10 45 Q50 55 90 45" fill="none" stroke="#0E7490" strokeWidth="3" />
          <circle cx="50" cy="20" r="5" fill="#FDE047" />
          <g fill="none" stroke="#164E63" strokeWidth="2">
            <circle cx="40" cy="60" r="8" />
            <circle cx="60" cy="60" r="8" />
            <line x1="48" y1="60" x2="52" y2="60" />
          </g>
          <line x1="30" y1="65" x2="15" y2="60" stroke="#164E63" strokeWidth="1" />
          <line x1="30" y1="70" x2="15" y2="75" stroke="#164E63" strokeWidth="1" />
          <line x1="70" y1="65" x2="85" y2="60" stroke="#164E63" strokeWidth="1" />
          <line x1="70" y1="70" x2="85" y2="75" stroke="#164E63" strokeWidth="1" />
        </svg>
      );
    case 'driver_cool': // 조이
      return (
        <svg viewBox="0 0 100 100" className={commonClass}>
          <rect x="25" y="25" width="50" height="60" rx="15" fill="#BEF264" stroke="#4D7C0F" strokeWidth="2" />
          <defs>
            <linearGradient id="glassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#374151" />
            </linearGradient>
          </defs>
          <path d="M25 45 L75 45 L75 55 Q75 65 65 65 L35 65 Q25 65 25 55 Z" fill="url(#glassGrad)" stroke="#000" strokeWidth="1" />
          <line x1="25" y1="45" x2="15" y2="40" stroke="#000" strokeWidth="3" />
          <line x1="75" y1="45" x2="85" y2="40" stroke="#000" strokeWidth="3" />
          <circle cx="50" cy="100" r="35" fill="none" stroke="#1F2937" strokeWidth="6" />
          <line x1="50" y1="100" x2="50" y2="65" stroke="#1F2937" strokeWidth="6" />
          <path d="M20 75 L10 60 L25 50" fill="none" stroke="#4D7C0F" strokeWidth="4" strokeLinecap="round" />
          <path d="M80 75 L90 60 L75 50" fill="none" stroke="#4D7C0F" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'ai_wizard': // 레이 (NEW)
      return (
        <svg viewBox="0 0 100 100" className={commonClass}>
          {/* 마법사 모자 */}
          <path d="M20 50 L80 50 L50 10 Z" fill="#F97316" stroke="#C2410C" strokeWidth="2" />
          <path d="M10 50 Q50 60 90 50" fill="none" stroke="#C2410C" strokeWidth="3" />
          {/* 얼굴 */}
          <circle cx="50" cy="65" r="25" fill="#FFEDD5" stroke="#C2410C" strokeWidth="2" />
          {/* 눈 (웃음) */}
          <path d="M40 60 Q45 55 50 60 M50 60 Q55 55 60 60" fill="none" stroke="#431407" strokeWidth="2" />
          {/* 입 (큰 웃음) */}
          <path d="M35 70 Q50 85 65 70" fill="#431407" />
          {/* 확성기 (목소리) */}
          <path d="M75 70 L95 60 L95 80 Z" fill="#9CA3AF" stroke="#4B5563" strokeWidth="2" />
          <path d="M80 70 Q85 70 90 70" fill="none" stroke="#4B5563" strokeWidth="2" className="animate-ping" />
          {/* 반짝이 */}
          <path d="M20 20 L25 10 L30 20 L25 30 Z" fill="#FDBA74" className="animate-spin" />
        </svg>
      );
    default:
      return null;
  }
};