import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MEMBERS } from './constants';
import { IntroSlide } from './components/IntroSlide';
import { RetroCard } from './components/RetroCard';
import { SectionSlide } from './components/SectionSlide';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < MEMBERS.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        // Only next if not at the end
        if (currentIndex < MEMBERS.length - 1) {
            e.preventDefault(); // Prevent scroll on space
            handleNext();
        }
      }
      if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
            handlePrev();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const currentMember = MEMBERS[currentIndex];

  const renderContent = () => {
    if (currentMember.type === 'intro') {
      return (
        <IntroSlide 
          isActive={true} 
          onStart={handleNext} 
          motto={currentMember.desc.replace('가훈 : ', '')} 
        />
      );
    }
    
    if (currentMember.type === 'section') {
      return (
        <SectionSlide
          member={currentMember}
          isActive={true}
        />
      );
    }

    return (
      <RetroCard 
        member={currentMember} 
        isActive={true} 
      />
    );
  };

  return (
    // 무지개 그라데이션 배경
    <div className="min-h-screen overflow-hidden flex flex-col font-sans"
         style={{ background: 'linear-gradient(180deg, #EF4444, #F97316, #F59E0B, #22C55E, #3B82F6, #6366F1, #8B5CF6)' }}>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
      
      {/* 노이즈 필터 효과 */}
      <div className="fixed inset-0 opacity-20 pointer-events-none mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 상단 전광판 스타일 헤더 */}
      <div className="relative z-50 bg-black text-yellow-300 p-2 border-b-4 border-white shadow-lg overflow-hidden">
        <div className="whitespace-nowrap animate-[marquee_10s_linear_infinite] font-mono font-bold text-xl">
          ★★★ 환영합니다 ★★★ 이동프로덕트실 마스디자인팀 오타쿠 설명회에 오신 것을 환영합니다 ★★★ 서로의 덕력을 뽐내보세요 ★★★
        </div>
      </div>

      {/* 메인 컨텐츠 영역 */}
      <div className="flex-1 flex items-center justify-center relative z-10 p-4 pb-20">
        {renderContent()}
      </div>

      {/* 하단 네비게이션 컨트롤 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-sm border-t-4 border-black flex justify-between items-center z-50">
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`p-3 bg-white border-2 border-black shadow-[4px_4px_0_#000] font-bold text-black hover:bg-gray-100 disabled:opacity-50 disabled:shadow-none transition-all flex items-center gap-2`}
        >
          <ChevronLeft /> 이전
        </button>

        <div className="bg-black text-white px-6 py-2 font-mono text-xl border-2 border-white shadow-[0_0_10px_#fff] rounded-full">
          {currentIndex === 0 ? 'READY' : `${currentIndex} / ${MEMBERS.length - 1}`}
        </div>

        <button 
          onClick={handleNext}
          disabled={currentIndex === MEMBERS.length - 1}
          className={`p-3 bg-white border-2 border-black shadow-[4px_4px_0_#000] font-bold text-black hover:bg-gray-100 disabled:opacity-50 disabled:shadow-none transition-all flex items-center gap-2`}
        >
          다음 <ChevronRight />
        </button>
      </div>
    </div>
  );
}