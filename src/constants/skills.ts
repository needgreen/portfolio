import { Users, PenTool, Palette, Lightbulb } from 'lucide-react';
import { Skill } from '@/types';

export const SKILLS: Skill[] = [
  {
    id: '01',
    number: '01',
    title: 'User-Centered Design',
    titleKo: '사용자 중심 디자인',
    description:
      '사용자의 입장에서 생각하고, 기능적이면서도 즐거운 경험을 제공하는 디자인을 추구합니다.',
    icon: Users,
  },
  {
    id: '02',
    number: '02',
    title: 'Prototyping & Wireframing',
    titleKo: '프로토타이핑 & 와이어프레이밍',
    description:
      '아이디어를 신속하게 프로토타입과 와이어프레임으로 구현해, 디자인 방향성을 빠르게 검토하고 개선합니다.',
    icon: PenTool,
  },
  {
    id: '03',
    number: '03',
    title: 'Visual Design Expertise',
    titleKo: '비주얼 디자인 전문성',
    description:
      '타이포그래피, 컬러, 레이아웃 전반에 걸쳐 시각 디자인의 원칙을 깊이 이해하고 있으며, 이를 통해 기능성과 심미성을 모두 갖춘 디자인을 구현합니다.',
    icon: Palette,
  },
  {
    id: '04',
    number: '04',
    title: 'Design Thinking',
    titleKo: '디자인 씽킹',
    description:
      '사용자에 대한 공감을 바탕으로 문제를 정의하고, 아이디어를 시각화하며, 테스트를 통해 사용자 중심의 실질적인 해결책을 도출합니다.',
    icon: Lightbulb,
  },
];
