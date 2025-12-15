export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface Member {
  id: string;
  type?: 'intro' | 'member' | 'section';
  name: string; // Used as title for section
  koreanName?: string;
  role?: string;
  title: string;
  desc: string;
  color?: string; // Gradient class for intro
  tags?: string[];
  stats?: Stat[];
  skills?: string[];
  bg?: string; // Tailwind bg class
  iconColor?: string; // Tailwind text color class
  avatarType?: string;
  imageUrl?: string;
}