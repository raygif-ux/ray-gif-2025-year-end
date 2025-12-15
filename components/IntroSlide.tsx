import React from 'react';
import { ExplosionTitle } from './ExplosionTitle';

interface IntroSlideProps {
  isActive: boolean;
  onStart: () => void;
  motto: string;
}

export const IntroSlide: React.FC<IntroSlideProps> = ({ isActive, onStart, motto }) => (
  <div className={`flex flex-col items-center justify-center min-h-[60vh] text-center p-4 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
    
    <div className="mb-8 transform hover:scale-110 transition-transform duration-300">
       <div className="relative">
         <div className="absolute inset-0 bg-yellow-400 blur-xl animate-pulse"></div>
         <ExplosionTitle text="충격!\n능력자\n실존" />
       </div>
    </div>

    <div className="bg-white border-8 border-double border-blue-600 p-8 shadow-[10px_10px_0_rgba(0,0,0,0.5)] mb-12 rotate-2">
      <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-green-600 to-blue-600 mb-4 tracking-tighter"
          style={{ 
            textShadow: '4px 4px 0px #000',
            fontFamily: '"Gowun Batang", serif' 
          }}>
        내가 사랑했던<br/>11명의 사람들
      </h1>
      <div className="flex flex-col gap-2 items-center">
        <div className="text-xl md:text-2xl font-bold bg-black text-yellow-300 px-4 py-2 inline-block transform -rotate-2 font-mono">
            마스디자인 오타쿠 설명회
        </div>
        {motto && (
             <div className="text-lg md:text-xl font-bold text-blue-800 font-serif bg-white border-2 border-blue-800 px-4 py-1 mt-2 transform rotate-1 shadow-[3px_3px_0_rgba(0,0,0,0.2)]">
                가훈 : {motto}
             </div>
        )}
      </div>
    </div>

    <button 
      onClick={onStart}
      className="group relative px-12 py-6 bg-red-600 text-white font-black text-3xl border-4 border-white shadow-[0_0_0_4px_#000,8px_8px_0_4px_#000] hover:translate-y-1 hover:shadow-[0_0_0_4px_#000,4px_4px_0_4px_#000] active:translate-y-2 active:shadow-[0_0_0_4px_#000,0_0_0_4px_#000] transition-all"
    >
      <span className="flex items-center gap-2 animate-pulse">
        입장하기 <span className="text-yellow-300">Click!</span>
      </span>
    </button>
  </div>
);