import { HeroProfile, CareerItem, AwardItem, HeroProjectItem } from '@/types';

export const PROFILE_DATA: HeroProfile = {
  name: '이서정',
  tagline: '사용자 경험을\n설계하는 디자이너',
  birthDate: '1983. 01. 05',
  email: 'you.needgrn@gmail.com',
  phone: '',
  profileImage: '/images/leeseojeong.jpeg',
  education: [
    { year: '2026.03', content: '원티드 포텐업 AI 기반 FE/BE 협업과정 1기 수료' },
    { year: '2026.03', content: '한국방송통신대학교 사회복지학과 재학 중' },
    { year: '2026.02', content: '부천대학교 사회복지학과 전문학사' },
  ],
  focus: ['UX/UI Design', 'Web Publishing', 'Frontend Development', 'Photography'],
  tools: [
    { name: 'Webflow', level: 6 },
    { name: 'Figma', level: 5 },
    { name: 'Photoshop', level: 5 },
    { name: 'Illustrator', level: 5 },
  ],
  social: [
    // { name: 'Behance', url: '#' },
    { name: 'Instagram', url: 'https://www.instagram.com/thirsty.sj' },
  ],
};

export const CAREER_DATA: CareerItem[] = [
  {
    period: '2023. 04 ~ 2024. 08',
    company: '로코티크 주식회사',
    position: '디자인팀 팀장',
    description: [
      'UI/UX 디자인, Webflow, 퍼블리싱(tailwind, svelte, astro), 콘텐츠 기획 및 제작, 브랜딩(로고, 콘텐츠, 정체성 확립) 기획',
    ],
  },
  {
    period: '2018. 06 ~ 2023. 04',
    company: '제누이오 주식회사',
    position: '디자인팀 팀장',
    description: [
      '공식 홈페이지(WordPress) 관리, 웹기획 및 디자인, UI/UX 디자인, 상품 촬영, 모델 촬영, 콘텐츠 기획 및 제작, 소셜미디어 콘텐츠 관리',
      '와디즈 펀딩 콘텐츠 참여, 올리브 오일 수입 및 펀딩 기획, 올리브 오일 론칭, 브랜딩(인쇄물, 리플렛, 쇼룸 인테리어, 패키지 등) 디자인',
    ],
  },
  {
    period: '2017. 03 ~ 2018. 05',
    company: '(주)엘투컴퍼니',
    position: '디자인팀 과장',
    description: [
      '자사 쇼핑몰(카페24) 관리, 상세페이지제작, 배너제작, 이벤트기획, 리뉴얼 작업',
      '광고 DDN/GDN 배너 제작, 상품 단품사진 촬영 / 사진 보정',
      '오픈마켓 상품등록 / 소셜커머스 상품등록 (판매페이지 제작포함)',
    ],
  },
  {
    period: '2010. 09 ~ 2016. 10',
    company: '작은이야기(리틀스토리)',
    position: '디자인팀 대리',
    description: [
      '카다로그(포토북, look book) 디자인 및 제작, 제품 촬영, 자사 쇼핑몰(카페24) 웹사이트 관리, 상세페이지 제작 및 상품 등록/관리, 이벤트 기획 및 편집제작',
      '소셜커머스판매페이지 제작 / 오픈마켓, 소셜커머스 상품등록',
      '거래처 쇼핑몰제작 디자인작업 / 거래처 사이트 유지보수 관리',
    ],
  },
  {
    period: '2008. 02 ~ 2010. 04',
    company: '이소품',
    position: '디자인팀 대리',
    description: [
      '자사 쇼핑몰(메이크샵) 웹사이트 관리',
      '종합몰 및 오픈마켓 상품등록 관리 (플레이오토), 상품 사진촬영 및 보정',
      '상품 상세페이지 제작, 이벤트 기획 및 편집제작',
    ],
  },
  {
    period: '2007. 07 ~ 2007. 10',
    company: '시대일보',
    position: '편집부 사원',
    description: ['페이지메이커, 신문제작, 편집구성'],
  },
  {
    period: '2005. 02 ~ 2007. 02',
    company: '페어차일드코리아반도체',
    position: '구매그룹 사원',
    description: ['PO발행 및 사무업무'],
  },
];

export const HERO_PROJECTS_DATA: HeroProjectItem[] = [
  {
    year: '2025 - 2026',
    title: '숏폼 학습 플랫폼',
    description: 'Next.js/TypeScript 기반 숏폼 LXP 플랫폼, 8인 팀 협업 풀스택 개발',
  },
  {
    year: '2025',
    title: 'LXP 온라인 강의 플랫폼',
    description: 'Vanilla JS 기반 강의 CRUD 플랫폼, 3인 팀 협업 개발 및 배포',
  },
  {
    year: '2025',
    title: '호텔 베딩 프로모션 랜딩페이지',
    description: '호텔 침구 브랜드 시즌 프로모션 이벤트 랜딩페이지 Webflow 퍼블리싱 전담',
  },
  {
    year: '2023 - 2024',
    title: '퍼니처 웹사이트 론칭',
    description: '하이엔드 가구 커머스 플랫폼 UX 설계 및 브랜드 아이덴티티 구축',
  },
  {
    year: '2023 - 2024',
    title: '메인화면 및 콘텐츠 리뉴얼',
    description: '핵심 제품군 중심 UX 구조 개선 및 브랜드 콘텐츠 리뉴얼',
  },
  {
    year: '2023',
    title: '마이페이지 리뉴얼',
    description: 'CX 데이터 기반 셀프 서비스 UX 설계 및 사용자 편의성 개선',
  },
  {
    year: '2022 - 2023',
    title: '와디즈 올리브 오일 펀딩 1억 2천만 원 달성',
    description: '감베로 로쏘 최고 등급 이탈리아 올리브 오일 와디즈 펀딩 기획 및 운영',
  },
  {
    year: '2022',
    title: '블로그 사이트 제작',
    description: '콘텐츠 기반 사용자 정보 제공 및 CX 문의 감소를 위한 블로그 플랫폼 구축',
  },
  {
    year: '2022',
    title: '이벤트 랜딩페이지 제작',
    description: '광고 유입 데이터 분석을 위한 이벤트 랜딩 UX 설계',
  },
  {
    year: '2021 - 2022',
    title: '얼리버드 시스템 론칭',
    description: '수요 기반 선주문 시스템 UX 설계 및 서비스 론칭',
  },
];
