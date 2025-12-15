import { Member } from './types';

export const MEMBERS: Member[] = [
  {
    id: 'intro',
    type: 'intro',
    name: '마스디자인팀',
    title: '내가 사랑했던 11명의 사람들',
    desc: '가훈 : 조금 일하고 많이 벌게 해 주세요',
    color: 'from-violet-600 to-fuchsia-600'
  },
  {
    id: 'section-taxi',
    type: 'section',
    name: '택시 파트',
    role: '택시',
    title: 'TAXI',
    desc: '가장 빠르고 편안한 이동\n택시를 책임지는 어벤져스',
    bg: 'bg-purple-600'
  },
  {
    id: 'ines',
    name: 'INES',
    koreanName: '이네스',
    role: '택시',
    title: '감미로운 목소리 & 전략가',
    tags: ['#천사', '#보드게임고수', '#레간자'],
    stats: [
      { label: '치유력', value: 100 },
      { label: '전략', value: 99 },
      { label: '목소리', value: 95 },
    ],
    desc: '나긋나긋한 목소리의 이야기꾼이자 확신의 맏며느리상.\n평소엔 천사 같지만 보드게임과 마니또에서는\n소리 없이 강한 "레간자"급 전략가.\n5층 아이들의 환대를 받는 "라온이 엄마".',
    skills: [
      '패시브: 조곤조곤 팩폭',
      '궁극기: 소리없는 승리'
    ],
    bg: 'bg-purple-400',
    iconColor: 'text-purple-700',
    avatarType: 'angel_elephant',
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 'chico',
    name: 'CHICO',
    koreanName: '치코',
    role: '택시',
    title: '근엄한 큐티, 치코코',
    tags: ['#예수님?', '#푸틴마니또', '#츤데레'],
    stats: [
      { label: '츤데레', value: 100 },
      { label: '마니또력', value: 99 },
      { label: '귀차니즘', value: 85 },
    ],
    desc: '만사 귀찮아 보이지만 은근 챙겨주는 츤데레 아빠.\n푸틴 짤과 찬물 샤워를 권하는 엉뚱함의 소유자.\n묵묵히 퇴직연금과 비염을 챙겨주는\n마스팀의 듬직한 대장 햄토리.',
    skills: [
      '패시브: 찬물샤워 권유',
      '궁극기: 숨겨진 모성애(?)'
    ],
    bg: 'bg-blue-500',
    iconColor: 'text-blue-700',
    avatarType: 'holy',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 'luna',
    name: 'LUNA',
    koreanName: '루나',
    role: '택시',
    title: '따수운 말을 차갑게 하는 루나',
    tags: ['#노력하는I', '#안경모범생', '#6시방전'],
    stats: [
      { label: '낮에너지', value: 95 },
      { label: '밤에너지', value: 10 },
      { label: '눈썰미', value: 90 },
    ],
    desc: '털털한 반응 속에 따스함이 묻어나는 반전 매력.\n일할 땐 안경 쓰고 모범생 모드가 되지만,\n사실은 6시만 되면 급속 방전되는 확신의 I.\n엉뚱한 유머 감각의 소유자.',
    skills: [
      '패시브: 툭툭 던지는 유머',
      '궁극기: 칼퇴근 방전'
    ],
    bg: 'bg-gray-400',
    iconColor: 'text-gray-700',
    avatarType: 'battery',
    imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 'section-rent',
    type: 'section',
    name: '렌트카 파트',
    role: '렌트카',
    title: 'RENT',
    desc: '자유로운 이동의 시작\n설렘을 디자인하다',
    bg: 'bg-yellow-500'
  },
  {
    id: 'bimo',
    name: 'BEEMO',
    koreanName: '비모',
    role: '렌트카',
    title: '햇살같은 도파민 요정',
    tags: ['#인간시