import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: '숏폼 학습 플랫폼',
    category: 'Next.js/TypeScript/풀스택 협업',
    role: [
      '프론트엔드',
      '숏폼 플레이어 개발',
      'UI/UX 설계',
      '마이페이지 개발',
      '파일 업로드 아키텍처',
    ],
    imageUrl: [
      '/images/projects/shortudy/shortudy_01.png',
      '/images/projects/shortudy/shortudy_02.png',
      '/images/projects/shortudy/shortudy_03.png',
      '/images/projects/shortudy/shortudy_04.png',
    ],
    link: 'https://github.com/20250915-POTENUP-FE-1/LXP_WeLearn',
    isExternal: true,

    intro: [
      '"The Shortest Path to Growth" - 숏폼 기반의 학습 경험 플랫폼으로, 필요한 순간 즉시 학습할 수 있는 진입점을 제공하는 LXP 서비스입니다.',
    ],

    projectInfo: [
      'Next.js(App Router), TypeScript 기반의 숏폼 학습 플랫폼으로, 프론트엔드 3명과 백엔드 5명이 약 7주간 협업하여 MVP 구축부터 기능 확장까지 진행한 프로젝트',
    ],

    overview: [
      '기존 React/Redux 코드베이스를 Next.js(App Router)와 TypeScript로 마이그레이션',
      'LXP의 정체성을 "깊은 학습으로 들어가기 전의 관문(Gateway)"으로 재정의하고 숏폼 중심 MVP 설계',
      '1단계(MVP): 숏폼 플레이어, 메인 페이지, 회원가입/로그인 구현',
      '2단계(기능 확장): 숏츠 CRUD, 마이페이지, 댓글/좋아요, 플레이리스트 기능 추가',
    ],

    workDone: [
      'Framer Motion 기반 Swipe/Drag 숏폼 플레이어 UI 및 인터랙션 구현',
      '키보드·버튼 네비게이션 지원 및 모바일/데스크톱 반응형 레이아웃 설계',
      '마이페이지 대시보드, 내 숏츠 목록, 좋아요/저장 목록 UI 및 API 연동',
      '숏츠 등록/수정/삭제 폼 개발 및 영상/썸네일 업로드 기능 구현',
      'S3 Presigned URL 기반 파일 업로드 아키텍처 설계 및 적용',
      '메인페이지 카테고리 필터 및 인기 숏츠 슬라이드 기능 구현',
    ],

    process: [
      'Server Action의 1MB Body 제한으로 대용량 파일 업로드 실패 이슈 발생',
      'S3 Presigned URL 방식 도입으로 클라이언트에서 S3로 직접 업로드하는 구조로 전환',
      '3단계 업로드 아키텍처(URL 발급 → S3 직접 PUT → 완료 확정) 설계 및 구현',
      'API 명세서와 실제 응답 불일치 문제를 타입 재정의 및 백엔드 팀과의 동기화 회의로 해결',
      '개별 API 호출 방식에서 리스트 기반 호출로 전환하여 네트워크 요청 최적화',
    ],

    outcome: [
      '숏폼 플레이어 중심의 MVP를 완성하고 실제 사용자 CRUD 기능까지 확장 완료',
      'S3 Presigned URL 도입으로 파일 크기 제한을 1MB에서 100MB로 확장, 서버 부하 제거',
      '프론트엔드 3명 + 백엔드 5명의 8인 팀 협업을 통해 LXP 비전 정립부터 기능 구현까지 완수',
      '서버/클라이언트 컴포넌트 분리, 커스텀 훅 활용 등 확장 가능한 아키텍처 구축',
    ],

    growth: [
      'Server Action의 직렬화 제약을 이해하고 더 나은 아키텍처(S3 Presigned URL)로 해결하는 경험',
      'Next.js App Router의 서버/클라이언트 컴포넌트 역할 분리에 대한 깊은 이해',
      '다른 직군(백엔드)과의 협업에서 기술이 아닌 맥락과 의사결정 과정으로 소통하는 방법 학습',
      '프레임워크의 제약사항을 사전에 파악하고 설계 단계에서 데이터 흐름을 분석하는 습관 형성',
    ],

    competency:
      '이번 프로젝트를 통해 기술적 한계를 회피가 아닌 개선의 기회로 전환하는 경험을 했습니다. 특히 S3 Presigned URL 아키텍처를 학습하고 적용하면서 "문제를 정면으로 해결하는 방법"을 배웠습니다. 앞으로 함께한다면 사용자 경험 중심의 인터랙션 설계와 확장 가능한 프론트엔드 아키텍처 구축에 기여하고 싶습니다.',
  },
  {
    id: '02',
    title: 'LXP 온라인 강의 플랫폼',
    category: 'Vanilla JS/협업 프로젝트',
    role: ['프론트엔드', 'JavaScript', '강좌 등록 기능', '강좌 탐색', 'UX 개선'],
    imageUrl: [
      '/images/projects/potenup/killpo_01.png',
      '/images/projects/potenup/killpo_02.png',
      '/images/projects/potenup/killpo_03.png',
      '/images/projects/potenup/killpo_04.png',
    ],
    link: 'https://20250915-potenup-fe-1.github.io/LXP1-project1_killpo/lectures/',
    isExternal: true,

    intro: [
      '프레임워크 없이 순수 JavaScript로 구현한 온라인 강의 플랫폼으로, 강의 등록/조회/수정/삭제 기능을 갖춘 CRUD 기반 웹 서비스입니다.',
    ],

    projectInfo: [
      'HTML, CSS, Vanilla JavaScript만으로 실제 서비스 수준의 온라인 강의 플랫폼을 3인 팀으로 7일간 개발한 협업 프로젝트',
    ],

    overview: [
      '프레임워크 없이 순수 JavaScript로 강의 플랫폼의 핵심 기능을 구현하여 JS 기초 역량 강화',
      '팀 협업을 통해 Git Flow, 코드 리뷰, 데일리 스크럼 등 실무 프로세스 경험',
    ],

    workDone: [
      '강좌 카드(Course Card) 컴포넌트 개발 및 UI 구현',
      '강좌 등록 폼 개발 (제목, 썸네일, 카테고리 3단계 선택, 난이도 등)',
      'FileReader API를 활용한 이미지 Base64 변환 및 미리보기 기능 구현',
      'localStorage 기반 데이터 저장 로직 설계 참여',
      '헤더 컴포넌트 개발',
      '로고, 파비콘, 메인 컬러, 브랜드 슬로건 등 브랜딩 작업',
      'UX 개선 및 시각적 완성도 향상 작업',
    ],

    process: [
      '카테고리 1차/2차/3차 선택 로직 구현 시 데이터 구조와 UI 매핑의 복잡성 발생',
      'CATEGORY 상수 기반 단계별 옵션 생성 함수 분리로 해결',
      'bindCategorySelect() 함수로 이벤트 흐름 구조화하여 가독성 개선',
      '이미지 업로드 시 File 객체를 Base64로 변환하는 FileReader + Promise 패턴 적용',
    ],

    outcome: [
      'GitHub Pages를 통해 실제 배포된 사이트로 발표 시연 완료',
      '7일이라는 짧은 기간 내 MVP 기능 전체 구현 및 추가 기능까지 완성',
      'Git Flow 전략과 PR 리뷰 문화를 통한 체계적인 협업 프로세스 경험',
    ],

    growth: [
      '순수 JavaScript로 CRUD 기능을 구현하며 프레임워크 없이도 서비스 구현이 가능함을 체득',
      '데이터 구조 설계와 UI 로직 분리의 중요성을 실제 트러블슈팅 과정에서 체감',
      '긍정적인 커뮤니케이션과 코드 리뷰 문화가 협업 생산성을 높인다는 점을 경험',
      '발표 준비 과정에서 스크립트 기반의 체계적인 발표 준비 방법 학습',
    ],

    competency:
      '이번 프로젝트를 통해 컴포넌트 단위의 UI 설계와 이벤트 핸들링에 대한 이해도를 높였으며, 브랜딩과 UX 관점에서 서비스 완성도를 끌어올리는 역할을 수행했습니다. 앞으로 함께한다면 사용자 경험을 고려한 UI 개발과 팀 내 긍정적인 협업 문화 조성에 기여하고 싶습니다.',
  },
  {
    id: '03',
    title: '호텔 베딩 프로모션 랜딩페이지',
    category: 'Webflow/퍼블리싱/이벤트 페이지',
    role: ['UI/UX 디자인', 'Webflow 퍼블리싱', '반응형 레이아웃'],
    imageUrl: [
      '/images/projects/eventpage/landing_bountiful_01.jpeg',
      '/images/projects/eventpage/landing_bountiful_02.jpeg',
      '/images/projects/eventpage/landing_bountiful_03.jpeg',
      '/images/projects/eventpage/landing_bountiful_04.jpeg',
    ],
    link: 'https://project-landing-ab0602.webflow.io/',
    isExternal: true,

    intro: [
      '호텔 침구 브랜드의 시즌 프로모션을 위한 이벤트 랜딩페이지로, Webflow를 활용하여 UI/UX 퍼블리싱을 전담한 프로젝트입니다.',
    ],

    projectInfo: [
      '바운티풀(BOUNTIFUL) 호텔 베딩 브랜드의 "미리 준비하는 편안한 호텔의 따스함" 프로모션 이벤트 랜딩페이지 퍼블리싱',
    ],

    overview: [
      '시즌 프로모션(2025.08.18 ~ 2025.08.31)을 위한 이벤트 전용 랜딩페이지 제작',
      '기획은 참여하지 않고 UI/UX 퍼블리싱만 전담하여 진행',
      '호텔 침구의 고급스러운 무드를 살린 비주얼 중심 레이아웃 구현',
    ],

    workDone: [
      '히어로 섹션: 감성적인 브랜드 스토리텔링과 프로모션 기간 표시',
      '쿠폰 섹션: 20% 할인 쿠폰 및 사은품 증정 혜택 UI 디자인',
      '상품 카테고리별 섹션 구성 (First Night / Next Step / Suite Moment / Complete)',
      '상품 카드 UI: 썸네일, 상품명, 정가, 쿠폰 적용가, 배지(NEW/BEST/20% off) 표시',
      '카카오톡 플러스친구 추가 CTA 섹션 구현',
      '유의사항 섹션 레이아웃 및 타이포그래피 정리',
    ],

    process: [
      '브랜드의 고급스럽고 따뜻한 무드를 살리기 위한 컬러 팔레트(베이지, 골드 톤) 적용',
      'Webflow를 활용한 반응형 레이아웃 설계 및 구현',
      '상품 카드 호버 효과 및 인터랙션 적용으로 사용자 경험 향상',
      '섹션별 스토리 흐름에 맞는 타이포그래피 위계 설정',
    ],

    outcome: [
      '브랜드 무드에 맞는 고급스러운 비주얼의 이벤트 랜딩페이지 완성',
      '상품 등급별(입문 → 중급 → 프리미엄) 스토리텔링 구조로 구매 여정 유도',
      'Webflow 기반 빠른 퍼블리싱으로 프로모션 일정에 맞춘 적시 배포',
    ],

    growth: [
      '기획 없이 주어진 콘텐츠를 UI/UX 관점에서 효과적으로 배치하는 역량 강화',
      'Webflow를 활용한 이벤트/프로모션 랜딩페이지 퍼블리싱 실무 경험',
      '브랜드 톤앤매너를 유지하면서 상품 정보를 명확히 전달하는 레이아웃 설계 경험',
    ],

    competency: '',
  },
  {
    id: '04',
    title: '퍼니처 웹사이트 론칭',
    category: '반응형/CSS/퍼블리싱',
    role: ['UI 디자인', 'UX 설계', '퍼블리싱', '브랜딩'],
    imageUrl: [
      '/images/projects/loqoqo/loqoqo_01.png',
      '/images/projects/loqoqo/loqoqo_02.png',
      '/images/projects/loqoqo/loqoqo_03.png',
      '/images/projects/loqoqo/loqoqo_04.png',
    ],
    link: 'https://loqoqo.com/',
    isExternal: true,

    intro: [
      '다양한 하이엔드 가구 브랜드를 비교하고 합리적인 선택을 할 수 있도록 설계한 커머스 웹사이트입니다.',
    ],

    projectInfo: [
      '세계 각국의 하이엔드 가구를 한 곳에서 비교하고 탐색할 수 있도록 설계한 커머스 플랫폼',
    ],

    overview: [
      ' 신규 사업 확장에 따라 하이엔드 가구 전문 웹사이트를 론칭한 프로젝트 ',
      ' 가격과 디자인을 비교하며 합리적인 소비를 돕는 플랫폼 목표 ',
    ],

    workDone: [
      'Webflow 기반 반응형 웹사이트 디자인 ',
      '메인, 상품 목록, 상세, 구매 흐름까지 사용자 여정 기반 UX 설계',
      '디자인 시스템 구축 및 BI/CI, 로고, 키비주얼 등 브랜드 아이덴티티 설계',
      '하이엔드 가구 큐레이션 및 메인 콘텐츠 구조 기획',
    ],

    process: [
      '프론트/백엔드 1인 개발 구조로 일정 지연 발생',
      '프론트엔드 커뮤니케이션 주도 및 퍼블리싱 참여로 작업 속도 개선',
      '다양한 디바이스 환경 테스트 및 QA 수행',
    ],

    outcome: [
      '웹사이트를 성공적으로 론칭하고 자연 유입을 통해 실제 구매 발생',
      '온라인에서도 하이엔드 가구를 비교하고 구매할 수 있는 브랜드 경험 제공',
    ],

    growth: [
      '퍼블리싱 참여를 통해 디자인 구현 과정에 대한 이해도 향상',
      '일정 관리와 협업 조율을 통해 PM 관점의 프로젝트 운영 경험 확보',
    ],

    competency: '',
  },
  {
    id: '05',
    title: '메인화면 및 콘텐츠 리뉴얼',
    category: '반응형/CSS/퍼블리싱',
    role: ['UX 설계', '퍼블리싱', '콘텐츠 기획', '촬영', 'UI 디자인'],
    imageUrl: [
      '/images/projects/genuio/genuio_01.png',
      '/images/projects/genuio/genuio_02.png',
      '/images/projects/genuio/genuio_03.png',
      '/images/projects/genuio/genuio_04.png',
      '/images/projects/genuio/genuio_08.png',
      '/images/projects/genuio/genuio_09.png',
      '/images/projects/genuio/genuio_10.png',
      '/images/projects/genuio/genuio_11.png',
    ],
    link: 'https://genu.io',
    isExternal: true,

    intro: [
      '핵심 제품군 중심 UX 구조 개선과 콘텐츠 리뉴얼을 함께 진행한 웹사이트 개선 프로젝트입니다.',
    ],

    projectInfo: [
      '핵심 제품군 중심 UX 구조 개선과 브랜드 콘텐츠 무드 통일을 목표로 진행한 메인화면 리뉴얼 프로젝트',
    ],

    overview: [
      '제품 확장 중심 구조에서 핵심 제품군 중심 전략으로 서비스 방향 전환',
      '핵심 제품군의 전문성을 강조하는 메인 화면 UX 및 콘텐츠 구조 리뉴얼',
      '혼재되어 있던 제품 이미지를 정리하고 브랜드 무드를 통일하는 콘텐츠 개선 진행',
    ],

    workDone: [
      'Miro 기반 웹 페이지 구조 설계 및 프론트엔드 개발 커뮤니케이션 주도',
      '핵심 제품군을 강조하는 메인 화면 UX 설계 및 콘텐츠 구조 기획',
      '제품 탐색을 위한 필터 및 검색 기능 구조 개선',
      '콘텐츠 컨셉 기획 및 제품 이미지 촬영·제작·등록 전반 수행',
      '제품 이미지 무드를 통일하여 브랜드 비주얼 일관성 개선',
      'HTML/CSS 퍼블리싱 참여 및 모바일 반응형 최적화',
    ],

    process: [
      'Webflow 기반 퍼블리싱 과정에서 국가 간 서버 위치 차이로 속도 지연 발생',
      '서버 환경에 직접 퍼블리싱을 진행하여 기능 구현 및 성능 최적화',
    ],

    outcome: [
      '핵심 제품군 중심 브랜드 메시지 강화',
      '제품 이미지 무드 통일을 통해 브랜드 비주얼 일관성 개선',
      '기존 사용자 대상 주요 제품군 인지도 향상 및 매출 상승 기여',
    ],

    growth: [
      '콘텐츠 기획부터 촬영·제작까지 수행하며 브랜드 콘텐츠 제작 경험 확장',
      '서버 환경에서 직접 퍼블리싱을 진행하며 웹 성능 최적화 이해도 향상',
      '사업 전략 변화에 맞춘 핵심 제품 중심 UX 설계 경험 확보',
    ],

    competency: '',
  },
  {
    id: '06',
    title: '마이페이지 리뉴얼',
    category: '반응형/CSS/퍼블리싱',
    role: ['UI 디자인', 'UX 설계', '기획', '퍼블리싱'],
    imageUrl: [
      '/images/projects/mypage/mypage_01.png',
      '/images/projects/mypage/mypage_02.png',
      '/images/projects/mypage/mypage_03.png',
      '/images/projects/mypage/mypage_04.png',
      '/images/projects/mypage/mypage_05.png',
      '/images/projects/mypage/mypage_06.png',
      '/images/projects/mypage/mypage_07.png',
      '/images/projects/mypage/mypage_08.png',
      '/images/projects/mypage/mypage_09.png',
      '/images/projects/mypage/mypage_10.png',
      '/images/projects/mypage/mypage_11.png',
      '/images/projects/mypage/mypage_12.png',
    ],
    link: '#',
    isExternal: false,

    intro: ['사용자 편의성을 개선하기 위해 마이페이지 UX 구조를 재설계한 리뉴얼 프로젝트입니다.'],

    projectInfo: ['사용자 활동 관리 기능을 중심으로 UX를 개선한 마이페이지 리뉴얼 프로젝트'],

    overview: [
      '기존 워드프레스 기본 UI 구조에서 주문, 취소, 환불 등 사용자 작업의 불편함 발생',
      '사용자가 상담 없이 스스로 문제를 해결할 수 있는 셀프 서비스 UX 설계 목표',
      '브랜드 톤앤매너에 맞춘 직관적인 마이페이지 UI 리뉴얼 진행',
    ],

    workDone: [
      '사용자 관점 기반 마이페이지 UX 구조 및 페이지 플로우 설계',
      '주문 조회, 취소/반품, 상담 내역, 알림 신청, 내 정보 관리 등 사용자 활동 구조 개선',
      '상담 요청 없이 문제를 해결할 수 있는 버튼 및 인터랙션 설계',
      'CX 팀 고객 문의 데이터를 분석하여 UX 개선 포인트 도출',
      '웹사이트 리뉴얼 기획 및 UI 디자인 주도',
      'HTML/CSS 퍼블리싱 참여 및 반응형 구조 구현',
      '프론트엔드 개발 커뮤니케이션 및 QA 수행',
    ],

    process: [
      '신규 기능 구현을 포함한 13개 페이지 리뉴얼로 일정 관리 필요',
      '핵심 기능 중심 MVP 범위를 설정하고 단계적으로 리뉴얼 적용',
    ],

    outcome: [
      '핵심 마이페이지 기능을 중심으로 UX 구조 개선',
      '서비스 제공 이후 CX 팀 고객 문의 감소',
    ],

    growth: [
      'CX 데이터 기반 UX 문제를 분석하고 개선하는 경험 확보',
      'MVP 기반 단계적 리뉴얼을 통해 서비스 개선 프로세스 이해',
      '여러 업무와 병행하는 프로젝트에서 일정 관리의 중요성 인식',
    ],

    competency: '',
  },

  {
    id: '07',
    title: '와디즈 올리브 오일 펀딩 1억 2천만 원 달성',
    category: '와디즈/크라우드펀딩/기획',
    role: ['펀딩 스토리 기획 및 작성', '콘텐츠 제작', '상품 촬영', '이벤트 기획', '광고 기획'],
    imageUrl: ['/images/projects/wadiz/wadiz_oliveoil_01.jpg'],
    link: 'https://www.wadiz.kr/web/campaign/detail/163975',
    isExternal: true,

    intro: [
      '이탈리아 현지인이 즐기는 감베로 로쏘 최고 등급 올리브 오일의 와디즈 펀딩 캠페인으로, 스토리 기획부터 광고 기획까지 전반을 담당하여 1억 2천만 원을 달성한 프로젝트입니다.',
    ],

    projectInfo: [
      '감베로 로쏘 최고 등급 이탈리아 올리브 오일의 와디즈 크라우드펀딩 캠페인 기획 및 운영 프로젝트 (2022.02 ~ 2023.02)',
    ],

    overview: [
      '"이탈리아 현지인끼리만 먹는 올리브 오일"이라는 차별화된 스토리로 제품 희소성 강조',
      '상품 촬영 및 콘텐츠 제작을 통해 프리미엄 식품 브랜드 이미지 구축',
      '광고 기획을 통한 타겟 고객 유입 및 펀딩 목표 초과 달성',
    ],

    workDone: [
      '와디즈 펀딩 스토리 기획 및 작성',
      '올리브 오일 제품 콘텐츠 제작',
      '상품 촬영 진행',
      '펀딩 기간 내 이벤트 기획 및 운영',
      '광고 기획 및 집행',
    ],

    process: [
      '감베로 로쏘 수상이라는 공신력 있는 스펙을 스토리의 핵심 근거로 활용',
      '이탈리아 현지 분위기를 담은 비주얼 콘텐츠로 프리미엄 식품 이미지 구현',
      '광고 타겟팅 전략을 통해 식품 관심 고객층으로 유입 집중',
      '친환경 컬러, 종이 재질, 타이포, 일러스트를 활용한 고급형 올리브오일 패키지 디자인 — 유리병 파손 위험 감소 및 보관·지속 가능성·고급화 전략 반영',
      '상세페이지 기획·이미지 디렉션·콘텐츠 제작 100% 주도 — 스토리텔링 중심 구성 및 브랜드 아이덴티티 반영',
    ],

    outcome: [
      '와디즈 올리브 오일 펀딩 1억 2천만 원 달성',
      '프리미엄 식품 카테고리에서 브랜드 인지도 확보',
      '광고 기획을 통한 효율적인 고객 유입 및 구매 전환',
    ],

    growth: [
      '식품 카테고리 크라우드펀딩 캠페인 기획 경험 확보',
      '제품의 공신력 있는 스펙을 스토리텔링에 효과적으로 녹이는 역량 강화',
      '광고 기획부터 집행까지 통합 마케팅 역량 확장',
    ],

    competency: '',
  },

  {
    id: '08',
    title: '블로그 사이트 제작',
    category: '반응형/CSS/퍼블리싱',
    role: ['기획', 'UI 디자인', '퍼블리싱'],
    imageUrl: [
      '/images/projects/blog/blog_01.jpeg',
      '/images/projects/blog/blog_02.jpeg',
      '/images/projects/blog/blog_03.jpeg',
      '/images/projects/blog/blog_04.jpeg',
      '/images/projects/blog/blog_05.jpeg',
      '/images/projects/blog/blog_06.jpeg',
      '/images/projects/blog/blog_07.jpeg',
      '/images/projects/blog/blog_08.jpeg',
    ],
    link: 'https://blog.genu.io/',
    isExternal: true,

    intro: ['사용자 정보 제공과 커뮤니티 활성화를 위해 제작한 브랜드 블로그 사이트입니다.'],

    projectInfo: [
      '콘텐츠 기반 사용자 정보 제공과 CX 문의 감소를 목표로 제작한 브랜드 블로그 플랫폼',
    ],

    overview: [
      '수제화, 가죽 관리 등 사용자 정보 제공을 위한 콘텐츠 플랫폼 필요',
      '반복적인 고객 문의를 콘텐츠로 선 해결하는 CX 개선 목적',
      '브랜드 커뮤니티 활성화를 위한 블로그 전용 사이트 구축',
    ],

    workDone: [
      '블로그 전용 사이트 기획 및 UI 디자인 주도',
      '브랜드 키비주얼과 톤앤매너를 유지한 콘텐츠 중심 UI 설계',
      '사용자 목적 기반 페이지 플로우 설계 (Webflow, Figma)',
      'WordPress 기반 블로그 사이트 구축',
      'HTML/CSS 퍼블리싱 및 반응형 구조 구현',
      '블로그 콘텐츠 기획 및 제작',
    ],

    process: [
      'CX 상담 데이터를 분석하여 가장 많은 문의 주제를 콘텐츠로 제작',
      'CX 팀 상담 과정에서 블로그 콘텐츠 링크를 제공하도록 프로세스 연결',
    ],

    outcome: [
      '제품 상세페이지와 블로그 콘텐츠를 연결하여 정보 접근성 개선',
      '반복적인 상담 문의 감소 및 사용자 정보 탐색 경험 개선',
    ],

    growth: [
      '기획부터 디자인, 퍼블리싱, 배포까지 1인 체계로 프로젝트 진행',
      'WordPress 기반 콘텐츠 플랫폼 구축 경험 확보',
    ],

    competency: '',
  },
  {
    id: '09',
    title: '이벤트 랜딩페이지 제작',
    category: '반응형/CSS/퍼블리싱',
    role: ['UI 디자인', 'UX 설계', '퍼블리싱'],
    imageUrl: [
      '/images/projects/eventpage/landing_genuio_01.png',
      '/images/projects/eventpage/landing_genuio_02.png',
      '/images/projects/eventpage/landing_genuio_03.png',
      '/images/projects/eventpage/landing_genuio_05.png',
      '/images/projects/eventpage/landing_genuio_04.png',
    ],
    link: '#',
    isExternal: false,

    intro: ['광고 유입 데이터를 분석하기 위한 이벤트 랜딩페이지 제작 프로젝트입니다.'],

    projectInfo: ['광고 유입 기반 사용자 행동 데이터를 추적하기 위한 이벤트 랜딩페이지 제작'],

    overview: [
      '광고 유입 사용자를 위한 전용 랜딩페이지 필요',
      '쿼리 파라미터 기반 클릭률 및 구매율 데이터 추적 목적',
      '페이지 체류 시간 증가와 구매 전환율 개선 목표',
    ],

    workDone: [
      '이벤트 전용 랜딩페이지 UX 구조 설계 및 UI 디자인',
      '사용자 이탈을 줄이기 위한 콘텐츠 흐름 기반 페이지 플로우 설계',
      '이벤트 상품 탐색을 위한 페이지 내 검색 기능 강화',
      'Webflow 기반 반응형 랜딩페이지 디자인 및 퍼블리싱',
      '프론트엔드 개발 커뮤니케이션 진행',
    ],

    process: [
      '상품 데이터베이스 연결 과정에서 개발 일정 지연 발생',
      '핵심 기능 중심 MVP 범위로 기능을 축소하여 서비스 우선 오픈',
    ],

    outcome: [
      '아이캐칭 요소를 활용해 페이지 체류 시간 증가',
      '이벤트 페이지 유입 기반 구매 전환 효과 확인',
    ],

    growth: [
      '랜딩페이지 UX 설계를 통해 사용자 행동 데이터 기반 페이지 구조 이해',
      'MVP 기반 기능 축소 및 빠른 서비스 오픈 경험',
    ],

    competency: '',
  },
  {
    id: '10',
    title: '얼리버드 시스템 론칭',
    category: '반응형/CSS/퍼블리싱',
    role: ['기획', 'UI 디자인', '퍼블리싱', '브랜딩'],
    imageUrl: [
      '/images/projects/earlybird/earlybird_01.png',
      '/images/projects/earlybird/earlybird_02.png',
      '/images/projects/earlybird/earlybird_03.png',
      '/images/projects/earlybird/earlybird_04.png',
      '/images/projects/earlybird/earlybird_05.png',
      '/images/projects/earlybird/earlybird_06.png',
      '/images/projects/earlybird/earlybird_07.png',
      '/images/projects/earlybird/earlybird_08.png',
    ],
    link: '#',
    isExternal: false,

    intro: [
      '사용자 수요 데이터를 기반으로 선주문이 가능한 얼리버드 시스템을 구축한 서비스 론칭 프로젝트입니다.',
    ],

    projectInfo: [
      '관심 상품 알림 → 얼리버드 오픈 → 선주문으로 이어지는 수요 기반 구매 시스템 구축',
    ],

    overview: [
      '회사 정책 변화에 따라 선주문 기반 판매 시스템 도입 필요',
      '사용자가 시스템을 쉽게 이해하고 참여할 수 있는 UX 설계 목표',
      '브랜드 톤앤매너를 유지한 얼리버드 서비스 구조 기획',
    ],

    workDone: [
      '선주문 시스템 UX 구조 기획 및 서비스 플로우 설계',
      'Webflow 기반 얼리버드 시스템 UI 디자인 주도',
      '브랜드 키비주얼 및 톤앤매너를 유지한 서비스 화면 디자인',
      '알림 신청부터 확인 메시지까지 사용자 인터랙션 설계',
      '웹사이트 리뉴얼 기획 및 콘텐츠 제작',
      '프론트엔드 개발 커뮤니케이션 및 퍼블리싱 참여',
    ],

    process: [
      '개발 기능 구현과 데이터베이스 설계 변경으로 기획 수정 발생',
      '기능 구현 가능 범위를 고려하여 UX 구조 조정',
      '마일스톤을 설정하여 서비스 오픈 일정 관리',
      '제품 생산 일정 이슈로 선주문 정책 변경 및 UI 개선 적용',
    ],

    outcome: [
      '관심 상품 알림 데이터를 기반으로 얼리버드 제품 오픈 시스템 구축',
      '선주문 참여 고객에게 혜택 제공 구조 설계',
      '서비스 론칭 이후 사용자 피드백을 반영해 UX 지속 개선',
      '직관적인 UI를 통해 선주문 참여 경험을 개선하고 매출 상승에 기여',
    ],

    growth: [
      '기획 단계부터 참여하여 서비스 론칭까지 전 과정 경험',
      '서비스 운영 과정에서 사용자 피드백 기반 UX 개선 경험 확보',
      '지속적인 개선을 통해 서비스 성장 과정 경험',
    ],

    competency: '',
  },

  {
    id: '11',
    title: '와디즈 펀딩 18억 원 달성',
    category: '와디즈/크라우드펀딩/기획',
    role: ['펀딩 스토리 기획 및 작성', '콘텐츠 제작', '상품 촬영', '모델 촬영', '이벤트 기획'],
    imageUrl: [
      '/images/projects/loqoqo/loqoqo_01.png',
      '/images/projects/loqoqo/loqoqo_02.png',
      '/images/projects/loqoqo/loqoqo_03.png',
      '/images/projects/loqoqo/loqoqo_04.png',
    ],
    link: 'https://www.wadiz.kr/web/campaign/detail/48033',
    isExternal: true,

    intro: [
      '이탈리아 명품 스니커즈 브랜드 페르페토의 와디즈 펀딩 캠페인으로, 스토리 기획부터 콘텐츠 제작, 촬영, 이벤트 기획까지 전반을 담당하여 18억 원을 달성한 프로젝트입니다.',
    ],

    projectInfo: [
      '이탈리아 명품 스니커즈 브랜드 페르페토의 와디즈 크라우드펀딩 캠페인 기획 및 운영 프로젝트 (2020.04 ~ 2020.06)',
    ],

    overview: [
      '2억 원 달성 프로젝트의 성과를 기반으로 한 후속 캠페인으로, 더욱 정교한 스토리텔링 전략 적용',
      '상품 및 모델 촬영을 통한 프리미엄 비주얼 콘텐츠 제작',
      '이벤트 기획을 통한 펀딩 참여 유도로 18억 원이라는 대규모 성과 달성',
    ],

    workDone: [
      '와디즈 펀딩 스토리 기획 및 작성',
      '제품 소개 콘텐츠 제작',
      '상품 및 모델 촬영 진행',
      '펀딩 기간 내 이벤트 기획 및 운영',
    ],

    process: [
      '이전 캠페인 데이터를 분석하여 개선된 스토리 구조 설계',
      '고객 반응 기반 콘텐츠 전략 고도화',
      '프리미엄 브랜드 이미지를 강조하는 비주얼 방향성 수립',
    ],

    outcome: [
      '와디즈 펀딩 18억 원 달성',
      '브랜드 인지도 및 팬층 확대',
      '성공적인 캠페인 운영으로 브랜드 신뢰도 제고',
    ],

    growth: [
      '이전 캠페인 대비 성과를 9배 이상 성장시키며 데이터 기반 전략 개선의 효과 체감',
      '대규모 크라우드펀딩 캠페인 운영 경험 확보',
      '고객 심리와 구매 여정을 고려한 스토리텔링 역량 심화',
    ],

    competency: '',
  },
  {
    id: '12',
    title: '와디즈 펀딩 2억 원 달성',
    category: '와디즈/크라우드펀딩/기획',
    role: ['펀딩 스토리 기획 및 작성', '콘텐츠 제작', '상품 촬영', '모델 촬영', '이벤트 기획'],
    imageUrl: [
      '/images/projects/loqoqo/loqoqo_01.png',
      '/images/projects/loqoqo/loqoqo_02.png',
      '/images/projects/loqoqo/loqoqo_03.png',
      '/images/projects/loqoqo/loqoqo_04.png',
    ],
    link: 'https://www.wadiz.kr/web/campaign/detail/61505',
    isExternal: true,

    intro: [
      '이탈리아 명품 스니커즈 브랜드의 와디즈 펀딩 캠페인으로, 스토리 기획부터 콘텐츠 제작, 촬영, 이벤트 기획까지 전반을 담당하여 목표 금액 대비 2억 원을 달성한 프로젝트입니다.',
    ],

    projectInfo: [
      '이탈리아 명품 스니커즈 브랜드의 와디즈 크라우드펀딩 캠페인 기획 및 운영 프로젝트 (2019.11 ~ 2020.02)',
    ],

    overview: [
      '펀딩 스토리 기획 및 작성을 통해 제품의 가치와 브랜드 스토리를 효과적으로 전달',
      '상품 촬영 및 모델 촬영을 통한 고퀄리티 비주얼 콘텐츠 제작',
      '이벤트 기획을 통한 펀딩 참여 유도 및 목표 금액 달성',
    ],

    workDone: [
      '와디즈 펀딩 스토리 기획 및 작성',
      '제품 소개 콘텐츠 제작',
      '상품 및 모델 촬영 진행',
      '펀딩 기간 내 이벤트 기획 및 운영',
    ],

    process: [
      '제품의 이탈리아 명품 스니커즈라는 차별점을 중심으로 스토리 구성',
      '타겟 고객의 구매 심리를 고려한 콘텐츠 흐름 설계',
      '촬영 기획부터 후반 작업까지 직접 수행하여 브랜드 무드 일관성 유지',
    ],

    outcome: ['와디즈 펀딩 목표 대비 2억 원 달성', '브랜드 인지도 향상 및 초기 고객 확보'],

    growth: [
      '크라우드펀딩 캠페인 기획의 전반적인 프로세스 이해',
      '타겟 고객을 설득하는 스토리텔링 역량 강화',
      '촬영 기획 및 콘텐츠 제작 실무 경험 확보',
    ],

    competency: '',
  },
];
