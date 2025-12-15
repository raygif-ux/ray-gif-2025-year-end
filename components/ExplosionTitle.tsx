import React from 'react';

interface ExplosionTitleProps {
  text: string;
}

export const ExplosionTitle: React.FC<ExplosionTitleProps> = ({ text }) => (
  <div className="relative inline-block animate-bounce" style={{ animationDuration: '2s' }}>
    <svg viewBox="0 0 100 100" className="w-48 h-48 md:w-64 md:h-64 text-yellow-400 drop-shadow-[5px_5px_0_#000]">
      <path 
        fill="currentColor" 
        stroke="red" 
        strokeWidth="2"
        d="M50 0 L63 25 L90 20 L75 45 L100 60 L70 75 L80 100 L55 80 L30 100 L40 70 L10 65 L35 45 L10 25 L45 30 Z" 
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-2xl md:text-3xl font-black text-red-600 text-center leading-tight whitespace-pre-wrap rotate-[-5deg]" style={{ textShadow: '2px 2px 0 #fff' }}>
        {text}
      </span>
    </div>
  </div>
);