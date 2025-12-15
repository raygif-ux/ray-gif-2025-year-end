import React from 'react';

interface RetroStatBarProps {
  label: string;
  value: number;
  suffix?: string;
}

export const RetroStatBar: React.FC<RetroStatBarProps> = ({ label, value, suffix = '' }) => (
  <div className="mb-4">
    <div className="flex justify-between text-lg font-bold text-black mb-1 font-serif">
      <span className="bg-blue-100 px-2 border-2 border-black shadow-[2px_2px_0_#000]">{label}</span>
      <span className="font-mono">{value}{suffix}</span>
    </div>
    <div className="h-6 w-full bg-white border-2 border-black p-0.5 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2)]">
      <div 
        className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border-r-2 border-black"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);