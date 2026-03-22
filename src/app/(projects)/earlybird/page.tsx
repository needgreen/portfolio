'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

/* ============================================
   GENUIO EARLYBIRD MAIN PAGE
   - Next.js / TypeScript / Tailwind CSS
   - 메인 화면: https://jeis-site.webflow.io/earlybird-main
   ============================================ */

// =============================================
// ICONS
// =============================================
const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const BagIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const TruckIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const ArrowsExchangeIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

const WelcomeIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CardIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const ShoeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// =============================================
// DATA
// =============================================
const menuItems = [
  { label: 'egg', href: '/egg' },
  { label: 'early bird', href: '/earlybird' },
  { label: 'men', href: '/men', hasSubmenu: true },
  { label: 'women', href: '/women' },
  { label: 'collection', href: '/collection' },
  { label: 'shoe care', href: '/shoe-care' },
  { label: 'reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
];

const subMenuItems = [
  'New in',
  'all shoes',
  'boots',
  'sneakers',
  'loafer',
  'oxford',
  'derby',
  'monk',
  'driving',
  'sandal',
  'slipon',
];

const colorVariants = [
  'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66738936e3ac6f08f63c044c_1680_u1003_grey_01.jpg',
  'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66738935e3ac6f08f63c0404_1680_u1003_yellow_01.jpg',
  'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66738936e3ac6f08f63c0470_1680_u1003_lightgrey_01.jpg',
  'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66738937e3ac6f08f63c04d1_1680_u1003_alluminum_01.jpg',
  'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66738935e3ac6f08f63c03d6_1680_u1003_violet_01.jpg',
];

const featuredProducts = [
  {
    id: 1,
    name: 'Nuvole',
    nameKo: '누볼레 그레이 스웨이드 레이스업 스니커즈',
    image:
      'https://cdn.prod.website-files.com/6017c24454cf53d02e799369/6107462306e4d174c7b45151_2705_softy_piombo_01.jpg',
  },
  {
    id: 2,
    name: 'Lindo',
    nameKo: '린도 다크브라운 크러스트가죽 싱글 몽크',
    image:
      'https://cdn.prod.website-files.com/6017c24454cf53d02e799369/6107462306e4d16cf0b4515b_1863_crust_tmoro_01.jpg',
  },
  {
    id: 3,
    name: 'Fanatico',
    nameKo: '파나티코 보르도 크러스트가죽 파티나 하이탑 스니커즈',
    image:
      'https://cdn.prod.website-files.com/6017c24454cf53d02e799369/6107462306e4d18af6b4514c_5011_crust_rosso_01.jpg',
  },
  {
    id: 4,
    name: 'Vince',
    nameKo: '빈체 허니화이트 송아지가죽 스웨이드 스니커즈',
    image:
      'https://cdn.prod.website-files.com/6017c24454cf53d02e799369/60caf0d46dbc912f1d130889_102_honey_vitello_bianco_01.jpg',
  },
  {
    id: 5,
    name: 'Centro',
    nameKo: '첸트로 브라운 트라이엄프가죽 페니 로퍼',
    image:
      'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66738935e3ac6f08f63c03f4_2715_triumph_brandy_01.jpg',
  },
  {
    id: 6,
    name: 'Centro',
    nameKo: '첸트로 브라운 트라이엄프가죽 페니 로퍼',
    image:
      'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66738936e3ac6f08f63c04a7_POSILLIP_cawash_ottanio_01.jpg',
  },
];

const benefits = [
  { icon: 'truck', title: '전 상품 무료배송' },
  { icon: 'arrows', title: '무료교환 & 무료반품' },
  { icon: 'welcome', title: '회원가입 시 10,000원 쿠폰 & 수신동의 시 10% 쿠폰' },
  { icon: 'card', title: '모바일 간편결제' },
];

// =============================================
// HEADER COMPONENT
// =============================================
const Header: React.FC<{ onMenuOpen: () => void }> = ({ onMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Menu Button */}
          <button
            onClick={onMenuOpen}
            className="p-2 -ml-2 hover:opacity-70 transition-opacity"
            aria-label="메뉴 열기"
          >
            <MenuIcon />
          </button>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase">
              GENUIO
            </span>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              className="p-2 hover:opacity-70 transition-opacity hidden md:block"
              aria-label="검색"
            >
              <SearchIcon />
            </button>
            <Link href="/my-earlybird" className="p-2 hover:opacity-70 transition-opacity">
              <HeartIcon />
            </Link>
            <button className="p-2 hover:opacity-70 transition-opacity" aria-label="장바구니">
              <BagIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// =============================================
// MOBILE MENU COMPONENT
// =============================================
const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed inset-y-0 left-0 w-[320px] max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            {activeSubmenu ? (
              <button
                onClick={() => setActiveSubmenu(null)}
                className="flex items-center gap-2 text-sm"
              >
                <ArrowLeftIcon />
                <span>전체 메뉴</span>
              </button>
            ) : (
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
            )}
            <button onClick={onClose} className="p-2 hover:opacity-70 transition-opacity">
              <CloseIcon />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto">
            {!activeSubmenu ? (
              <nav className="py-4">
                <ul className="space-y-1">
                  {menuItems.map((item) => (
                    <li key={item.label}>
                      {item.hasSubmenu ? (
                        <button
                          onClick={() => setActiveSubmenu('men')}
                          className="w-full flex items-center justify-between px-6 py-3 text-lg hover:bg-gray-50 transition-colors"
                        >
                          <span>{item.label}</span>
                          <ChevronRightIcon />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="block px-6 py-3 text-lg hover:bg-gray-50 transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ) : (
              <nav className="py-4">
                <div className="px-6 py-2 text-sm text-gray-500 uppercase tracking-wider">men</div>
                <ul className="space-y-1">
                  {subMenuItems.map((item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.replace(' ', '-')}`}
                        onClick={onClose}
                        className="block px-6 py-3 text-lg hover:bg-gray-50 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 p-4">
            <p className="text-sm text-gray-600 mb-4">
              제누이오 회원이 되어보세요. 특별한 혜택을 드립니다.
            </p>
            <div className="flex gap-2 mb-4">
              <Link
                href="/register"
                onClick={onClose}
                className="flex-1 bg-black text-white text-center py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                회원 가입
              </Link>
              <Link
                href="/login"
                onClick={onClose}
                className="flex-1 border border-black text-center py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors"
              >
                로그인
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="/my-earlybird" className="text-gray-600 hover:text-black">
                나의 얼리버드
              </Link>
              <Link href="/cart" className="text-gray-600 hover:text-black">
                쇼핑백
              </Link>
              <Link href="/orders" className="text-gray-600 hover:text-black">
                주문배송
              </Link>
              <Link href="/help" className="text-gray-600 hover:text-black">
                고객센터
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// =============================================
// BENEFIT ICON COMPONENT
// =============================================
const BenefitIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'truck':
      return <TruckIcon />;
    case 'arrows':
      return <ArrowsExchangeIcon />;
    case 'welcome':
      return <WelcomeIcon />;
    case 'card':
      return <CardIcon />;
    default:
      return null;
  }
};

// =============================================
// FOOTER COMPONENT
// =============================================
const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      {/* Benefits Bar */}
      <div className="border-t border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                <div className="text-gray-600 flex-shrink-0">
                  <BenefitIcon type={benefit.icon} />
                </div>
                <span className="text-xs md:text-sm text-gray-700 leading-tight">
                  {benefit.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/showroom" className="hover:underline">
              showroom
            </Link>
            <Link href="/blog" className="hover:underline">
              blog
            </Link>
            <Link href="/about" className="hover:underline">
              about
            </Link>
            <Link href="/login" className="hover:underline">
              login
            </Link>
            <Link href="/register" className="hover:underline">
              join us
            </Link>
          </div>

          {/* Shoe Care */}
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-3">SHOE CARE</h4>
            <Link href="/shoe-care" className="text-sm hover:underline">
              올바른 가죽 관리 방법에 대해 확인해보세요.
            </Link>
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com/genuio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com/genuio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Customer Center */}
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-3">CUSTOMER CENTER</h4>
            <p className="text-2xl font-light mb-2">1661-3593</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              상담시간 : 월~금 AM 10:00 ~ PM 5:00
              <br />
              점심 PM 12:00 ~ PM 1:00 ｜ 토요일, 일요일, 공휴일 휴무
            </p>
          </div>

          {/* Bank Info */}
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-3">BANK INFO</h4>
            <p className="text-sm">우리은행 │ 1006-801-503643 │ 제누이오(주)</p>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-6">
          <p className="text-xs text-gray-500 leading-relaxed">
            Company : 제누이오(주) &nbsp;|&nbsp; 대표자 : 성율덕 &nbsp;|&nbsp; 개인정보관리 책임자 :
            성율덕
            <br />
            Address : 서울시 강남구 논현로 117길 8 1층 제누이오(주) &nbsp;|&nbsp; E-Mail :
            support@genu.io
            <br />
            Register Number : 634-87-00589{' '}
            <a
              href="https://www.ftc.go.kr/www/bizCommList.do?key=232"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              [사업자정보확인]
            </a>
            &nbsp;|&nbsp; 통신판매업 신고 : 2017-서울강남-00953 &nbsp;|&nbsp;{' '}
            <Link href="/agreement" className="hover:underline">
              이용약관
            </Link>
            &nbsp;&nbsp;
            <Link href="/privacy" className="hover:underline">
              개인정보 취급방침
            </Link>
          </p>
          <p className="text-xs text-gray-400 mt-4">Hosted by Amazon AWS</p>
        </div>
      </div>
    </footer>
  );
};

// =============================================
// MAIN PAGE COMPONENT
// =============================================
const EarlyBirdMain: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Header Spacer */}
      <div className="h-16 md:h-20" />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            제누이오가 만드는 혁신
          </h1>
          <p
            className={`text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            우리는 기존의 관습화된 틀에서 벗어나 스탠다드한 디자인, 정교한 이탈리아 장인 정신,
            최고급 퀄리티의 재료, 투명한 가격으로 고객이 항상 만족할 수 있는 브랜드를 전개합니다.
          </p>
          <p
            className={`text-gray-500 mt-4 max-w-xl mx-auto transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            우리는 클래식을 현대적으로 재해석합니다. 가장 클래식하지만 시간이 지나도 여전히 트렌디한
            제품. 제누이오는 시간이 지나도 가치 있는 제품을 만듭니다.
          </p>
        </div>
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-40 h-40 bg-gray-300 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-gray-400 rounded-full blur-3xl" />
        </div>
      </section>

      {/* ===== ABOUT IMAGES GRID ===== */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 aspect-square overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66738912e3ac6f08f63bea99_about_2000_01.jpg"
                alt="제누이오 제작 과정"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66738912e3ac6f08f63bea21_about_img_01.jpg"
                alt="가죽 디테일"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66738913e3ac6f08f63beaaa_about_img_02.jpg"
                alt="장인 정신"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="col-span-2 aspect-[2/1] overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66738912e3ac6f08f63bea5d_about_img_03.jpg"
                alt="이탈리아 공방"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ITALIAN LUXURY SECTION ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              이탈리아 럭셔리 스탠다드 그대로
              <br />
              가죽부터 제작까지.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              오랜 세월 동안 손으로 이어진 전통과 이탈리아만의 고유한 기술력은 예술과도 같습니다.
              세계에서 인정받은 이탈리아의 장인 정신과 품질, 제누이오의 모든 제품은 그 실력을
              인정받은 장인분들이 제작합니다.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66738919a076343e2628b508_about_img_10.jpg"
                alt="이탈리아 장인"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66738919a076343e2628b4e0_about_img_20.jpg"
                alt="수제 제작"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66738918a076343e2628b4db_about_img_07.jpg"
                alt="가죽 재료"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICE COMPARISON SECTION ===== */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src="https://cdn.prod.website-files.com/6017c24454cf53d02e799369/6037552ec47ac76b5f5f2c22_about_1000_01.jpg"
                alt="제품 품질"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                퀄리티는 그대로,
                <br />
                가격은 1/3로
              </h2>
              {/* Price Comparison Bars */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm md:text-base">명품브랜드</span>
                  <div className="flex items-center gap-4">
                    <div className="w-32 md:w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gray-400" />
                    </div>
                    <span className="text-base md:text-lg font-medium w-20 md:w-24 text-right">
                      70~100만
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm md:text-base">제누이오</span>
                  <div className="flex items-center gap-4">
                    <div className="w-32 md:w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-black" />
                    </div>
                    <span className="text-base md:text-lg font-medium w-20 md:w-24 text-right">
                      20~30만
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                이탈리아 장인과 한국의 소비자 사이에 있는 복잡한 유통단계를 모두 걷어냈습니다.
                이탈리아 장인과의 직거래로 고퀄리티 신발을 혁신적인 가격에 즐길 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INNOVATION SECTION (BLACK BG) ===== */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
              제누이오가
              <br />
              한 차원 더 높은
              <br />
              혁신에 도전합니다.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-4 text-gray-400">
                <ShoeIcon />
              </div>
              <p className="text-4xl font-light mb-2">500개</p>
              <p className="text-gray-400 text-sm">최근 3년간 선보인 스타일 수</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-4 text-gray-400">
                <ShoeIcon />
              </div>
              <p className="text-4xl font-light mb-2">1,000 개</p>
              <p className="text-gray-400 text-sm">2021년 선보이는 스타일 수</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-light mb-4">매년 1,000개의 새로운 스타일을 선보입니다.</h3>
            <p className="text-gray-400">
              제누이오는 최근 3년간 500개의 제품을 출시했습니다. 올해부터는 그 숫자를 비약적으로
              늘려서 매년 1,000개의 스타일을 선보일 예정입니다.
            </p>
          </div>
        </div>
      </section>

      {/* ===== EARLYBIRD SECTION ===== */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              {/* Earlybird Circle Logo */}
              <div className="w-32 h-32 mx-auto md:mx-0 mb-8 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#000" strokeWidth="0.5" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#000"
                    strokeWidth="0.3"
                    strokeDasharray="2,2"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[8px] tracking-widest uppercase">Earlybird</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                얼리버드 제품을 원가에
                <br />
                구매할 수 있는 기회!
              </h2>
              <p className="text-gray-600">
                얼리버드 제품은 기존 패션 사이클과 달리 선판매 후생산됩니다. 얼리버드 제품을
                주문하는 고객에게는 원가 구매의 기회가 제공됩니다.
              </p>
            </div>
            <div>
              <div className="bg-gray-50 p-8 md:p-12">
                <h3 className="text-xl md:text-2xl font-light mb-4 leading-tight">
                  매주 수요일
                  <br />
                  새로운 스타일이 공개됩니다.
                </h3>
                <p className="text-gray-600 mb-6">
                  마음에 드는 스타일을 찾아서 오픈요청 해보세요. 오픈요청 후 얼리버드 주문 시 정가
                  대비 40% 혜택을 받을 수 있습니다.
                </p>
                <Link
                  href="/earlybird"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  VIEW MORE
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COLOR VARIANTS MARQUEE ===== */}
      <section className="py-12 overflow-hidden">
        <div className="flex gap-4 animate-[marquee_20s_linear_infinite]">
          {[...colorVariants, ...colorVariants].map((img, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-48 md:w-60 md:h-60 bg-gray-100">
              <img
                src={img}
                alt={`Color variant ${(index % colorVariants.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS GRID ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href="/earlybird-detail" className="group">
                <div className="aspect-square bg-white overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.nameKo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-1">{product.nameKo}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARQUEE TEXT ===== */}
      <section className="py-8 bg-black text-white overflow-hidden">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wider mx-8"
            >
              Elegance, Comfort and Luxury
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* ===== GLOBAL STYLES ===== */}
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family:
            'Pretendard',
            -apple-system,
            BlinkMacSystemFont,
            system-ui,
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default EarlyBirdMain;
