import React, { useState, useEffect } from 'react';
import { Member } from '../types';
import { CharacterAvatar } from './CharacterAvatar';
import { ExplosionTitle } from './ExplosionTitle';
import { RetroStatBar } from './RetroStatBar';

interface RetroCardProps {
  member: Member;
  isActive: boolean;
}

export const RetroCard: React.FC<RetroCardProps> = ({ member, isActive }) => {
  const [imgError, setImgError] = useState(false);

  // Reset error state when member changes
  useEffect(() => {
    setImgError(false);
  }, [member.id]);

  if (!member) return null;

  return (
    <div className={`w-full max-w-4xl mx-auto transition-all duration-300 ${isActive ? 'scale-100 rotate-0' : 'scale-50 rotate-12 opacity-0 absolute'}`}>
      
      {/* 촌스러운 그라데이션 테두리 */}
      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 p-3 rounded-none shadow-[10px_10px_0_rgba(0,0,0,0.5)] border-4 border-white">
        <div className="bg-white border-4 border-black p-4 md:p-8 relative overflow-hidden">
          
          {/* 배경 장식 패턴 */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>

          <div className="relative z-10">
            {/* Header: 이름과 칭호 */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b-4 border-black pb-4 border-dashed">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-blue-700 tracking-tighter" style={{ 
                  textShadow: '3px 3px 0 #fff, 5px 5px 0 #000',
                  fontFamily: '"Gowun Batang", serif' 
                }}>
                  {member.koreanName}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                    <div className="text-xl font-bold text-gray-500 font-mono bg-yellow-200 inline-block px-2 transform -rotate-2">
                        CodeName: {member.name}
                    </div>
                    {member.role && (
                        <div className="text-sm font-bold text-white font-mono bg-black inline-block px-2 py-1 transform rotate-1">
                            담당: {member.role}
                        </div>
                    )}
                </div>
              </div>
              
              {/* 폭발 모양 타이틀 */}
              <div className="hidden md:block transform rotate-12 hover:scale-110 transition-transform">
                <ExplosionTitle text={member.tags?.[0].replace('#', '특:\n') || ''} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              
              {/* 왼쪽: 캐릭터 이미지 & 설명 */}
              <div className="flex-1 space-y-6">
                
                {/* 싸이월드 스타일 사진 프레임 */}
                <div className="bg-gray-200 p-4 border-2 border-gray-400 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)] mb-4 transform -rotate-1 relative group">
                  <div className="bg-white border border-gray-400 h-64 md:h-80 flex items-center justify-center overflow-hidden relative">
                    
                    {/* Main Photo Logic: Try Image -> Fallback to Avatar */}
                    {!imgError && member.imageUrl ? (
                        <img 
                            src={member.imageUrl} 
                            alt={member.name} 
                            onError={() => setImgError(true)}
                            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                        />
                    ) : (
                        <div className="w-40 h-40 md:w-56 md:h-56 transform hover:scale-110 transition-transform duration-500">
                           <CharacterAvatar type={member.avatarType} />
                        </div>
                    )}

                    {/* Avatar Badge/Sticker: Show only if Real Image is successfully displayed */}
                    {!imgError && member.imageUrl && (
                         <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                             <CharacterAvatar type={member.avatarType} />
                         </div>
                    )}
                    
                    <div className="absolute bottom-2 left-2 text-xs text-white bg-black/50 px-1 font-mono">
                      img_{member.name.toLowerCase()}.jpg
                    </div>
                  </div>
                  <div className="text-center mt-2 font-serif text-sm text-gray-600">
                    ▲ {member.name}의 실체.jpg
                  </div>
                </div>

                 {/* 메인 타이틀 박스 */}
                <div className="bg-black text-white p-4 shadow-[5px_5px_0_#888] transform rotate-1">
                  <h3 className="text-xl font-bold text-yellow-300 text-center animate-pulse">
                    ★ {member.title} ★
                  </h3>
                </div>

                {/* 태그 모음 */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {member.tags?.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold border-2 border-black rounded-full shadow-[2px_2px_0_#000] text-sm transform hover:scale-110 transition-transform cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 오른쪽: 스탯, 스킬, 설명 */}
              <div className="flex-1 flex flex-col gap-6">
                
                {/* 설명 말풍선 */}
                <div className="relative bg-white border-4 border-black p-4 shadow-[5px_5px_0_rgba(0,0,0,0.2)]">
                   <div className="absolute -top-4 left-6 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-black"></div>
                   <div className="absolute -top-[13px] left-[26px] w-0 h-0 border-l-[13px] border-l-transparent border-r-[13px] border-r-transparent border-b-[17px] border-b-white"></div>
                   <p className="text-lg font-bold leading-relaxed whitespace-pre-line font-serif text-gray-800">
                     {member.desc}
                   </p>
                </div>

                <div className="bg-gray-100 border-4 border-black p-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] flex-1">
                  <div className="text-center font-black text-xl mb-4 bg-red-500 text-white py-1 border-2 border-black transform rotate-1">
                    POWER STATUS
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {member.stats?.map((stat, idx) => (
                      <RetroStatBar key={idx} {...stat} />
                    ))}
                  </div>

                  <div className="space-y-3">
                    <div className="font-bold text-black border-b-2 border-black pb-1 mb-2">▼ SPECIAL SKILLS</div>
                    {member.skills?.map((skill, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm md:text-base font-bold text-blue-800">
                        <span className="text-red-500">▶</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};