import React from 'react';
import { Member } from '../types';

interface SectionSlideProps {
  member: Member;
  isActive: boolean;
}

export const SectionSlide: React.FC<SectionSlideProps> = ({ member, isActive }) => {
  return (
    <div className={`w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[50vh] transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
      
      {/* Warning Stripe Tape */}
      <div className="w-full bg-yellow-400 h-8 mb-8 overflow-hidden border-y-4 border-black shadow-lg transform -rotate-1">
         <div className="flex animate-[marquee_2s_linear_infinite] whitespace-nowrap font-black text-black items-center h-full">
            {Array(20).fill(`⚠ SECTION: ${member.role} ⚠ `).join(' ')}
         </div>
      </div>

      {/* Main Card */}
      <div className={`bg-black border-8 border-white p-8 md:p-16 shadow-[20px_20px_0_rgba(0,0,0,0.4)] text-center relative overflow-hidden group transform rotate-1 transition-transform hover:rotate-0`}>
        
        {/* Background Pattern */}
        <div className={`absolute inset-0 opacity-30 ${member.bg || 'bg-gray-800'}`}></div>
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>

        <div className="relative z-10">
            <div className="inline-block bg-white text-black font-mono font-bold px-4 py-1 mb-6 border-2 border-black shadow-[4px_4px_0_#000]">
                MISSION START
            </div>

            <h2 className="text-white font-black text-5xl md:text-8xl mb-6 font-serif tracking-tighter uppercase leading-none" style={{ textShadow: '6px 6px 0 #000' }}>
                {member.name}
            </h2>
            
            <div className="h-4 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mb-8"></div>

            <p className="text-xl md:text-3xl text-yellow-300 font-bold font-serif whitespace-pre-line leading-relaxed drop-shadow-md">
                {member.desc}
            </p>
        </div>
      </div>
      
       <div className="mt-12 animate-bounce">
        <span className="bg-black text-white px-6 py-2 rounded-full font-bold border-2 border-white">
            ▼ NEXT TEAM
        </span>
      </div>

    </div>
  );
};