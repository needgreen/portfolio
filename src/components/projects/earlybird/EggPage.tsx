'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  Search,
  Heart,
  ShoppingBag,
  X,
  ChevronLeft,
  ChevronRight,
  CircleUser,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ============================================
   EGG PAGE - Client Component
   원본 UI 완벽 재현: https://jeis-site.webflow.io/egg
   ============================================ */

// =============================================
// TYPES
// =============================================
interface Comment {
  id: string;
  content: string;
}

interface Product {
  id: string;
  name: string;
  nameKo: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  requestCount: number;
  step: number;
  openDate: string | null;
  commentCount: number;
  comments: Comment[];
}

interface FilterTag {
  id: string;
  label: string;
}

interface EggPageClientProps {
  initialProducts: Product[];
  filterTags: FilterTag[];
}

// =============================================
// CONSTANTS
// =============================================
const stepImages = [
  'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66727c0479cb5cdba51a6ed1_new-step-1.svg',
  'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66727c0479cb5cdba51a6ec9_new-step-2.svg',
  'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66727c0379cb5cdba51a6ec2_new-step-3.svg',
  'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66727c0479cb5cdba51a6ecd_new-step-4.svg',
];

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
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300',
        isScrolled && 'shadow-sm',
      )}
    >
      <div className="flex items-center justify-between h-[60px] px-5">
        {/* Left: Menu */}
        <button onClick={onMenuOpen} className="w-10 h-10 flex items-center justify-center">
          <Menu className="w-6 h-6 stroke-[1.5]" />
        </button>

        {/* Center: Search + Logo + Heart */}
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <Link href="/" className="flex items-center">
            <img
              src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/663c6d56e1bb6ee7775d86c7_genuio_logo_b.svg"
              alt="GENUIO"
              className="h-5"
            />
          </Link>
          <Link href="/my-earlybird" className="w-10 h-10 flex items-center justify-center">
            <Heart className="w-5 h-5 stroke-[1.5]" />
          </Link>
        </div>

        {/* Right: Cart */}
        <button className="w-10 h-10 flex items-center justify-center">
          <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
        </button>
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
        className={cn(
          'fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 w-[320px] max-w-[85vw] bg-white z-[70] transform transition-transform duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-5 h-[60px] border-b border-[#eee]">
            {activeSubmenu ? (
              <button
                onClick={() => setActiveSubmenu(null)}
                className="flex items-center gap-2 text-sm"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>전체 메뉴</span>
              </button>
            ) : (
              <Link href="/">
                <img
                  src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/663c6d55e1bb6ee7775d869e_GENUIO_emblem.png"
                  alt="GENUIO"
                  className="w-10 h-10"
                />
              </Link>
            )}
            <button onClick={onClose} className="w-10 h-10 flex items-center justify-center">
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Menu List */}
          <div className="flex-1 overflow-y-auto">
            {!activeSubmenu ? (
              <ul className="py-2">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    {item.hasSubmenu ? (
                      <button
                        onClick={() => setActiveSubmenu('men')}
                        className="w-full flex items-center justify-between px-5 py-4 text-[15px] hover:bg-gray-50"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block px-5 py-4 text-[15px] hover:bg-gray-50"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <div className="px-5 py-3 text-xs text-gray-400 uppercase tracking-wider">men</div>
                <ul>
                  {subMenuItems.map((item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.replace(' ', '-')}`}
                        onClick={onClose}
                        className="block px-5 py-4 text-[15px] hover:bg-gray-50"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-[#eee] p-5">
            <p className="text-sm text-gray-600 mb-4">
              제누이오 회원이 되어보세요. 특별한 혜택을 드립니다.
            </p>
            <div className="flex gap-2 mb-5">
              <Link
                href="/register"
                className="flex-1 h-[44px] bg-black text-white text-sm flex items-center justify-center"
              >
                회원 가입
              </Link>
              <Link
                href="/login"
                className="flex-1 h-[44px] border border-black text-sm flex items-center justify-center"
              >
                로그인
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
              <Link href="/my-earlybird" className="hover:text-black">
                나의 얼리버드
              </Link>
              <Link href="/cart" className="hover:text-black">
                쇼핑백
              </Link>
              <Link href="/orders" className="hover:text-black">
                주문배송
              </Link>
              <Link href="/help" className="hover:text-black">
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
// EGG PRODUCT CARD COMPONENT (원본 UI 정확히 재현)
// =============================================
interface EggProductCardProps {
  product: Product;
}

const EggProductCard: React.FC<EggProductCardProps> = ({ product }) => {
  const [showComments, setShowComments] = useState(false);

  const formatPrice = (price: number) => price.toLocaleString('ko-KR');

  return (
    <div className="bg-white">
      {/* Image */}
      <Link href="/egg-detail" className="block relative">
        <div className="aspect-square bg-[#f5f5f5] overflow-hidden">
          <img src={product.image} alt={product.nameKo} className="w-full h-full object-cover" />
        </div>

        {/* Step Badge - 좌상단 */}
        <div className="absolute top-3 left-3 flex items-center">
          <img
            src={stepImages[product.step - 1]}
            alt={`Step ${product.step}`}
            className="w-[38px] h-[38px]"
          />
          <span className="ml-2 bg-white/90 px-2 py-1 text-[13px] font-medium">
            {product.requestCount}
          </span>
        </div>

        {/* Open Date Badge - 우상단 */}
        {product.openDate && (
          <div className="absolute top-3 right-3 bg-black text-white text-[11px] px-3 py-1.5">
            {product.openDate}
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="pt-4 pb-5 px-0">
        {/* Product Name */}
        <h3 className="text-[18px] font-medium mb-0.5">{product.name}</h3>
        <p className="text-[13px] text-[#666] leading-[1.5] mb-3 line-clamp-2">{product.nameKo}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          {product.price > 0 ? (
            <>
              <span className="text-[16px] font-semibold">{formatPrice(product.price)}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-[13px] text-[#999] line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="text-[#e74c3c] text-[13px] font-bold">{product.discount}%</span>
                </>
              )}
            </>
          ) : (
            <span className="text-[#999] text-[14px]">가격 미정</span>
          )}
        </div>

        {/* CTA Button */}
        <Link
          href="/egg-detail"
          className="block w-full h-[48px] bg-black text-white text-[14px] font-medium flex items-center justify-center hover:bg-[#333] transition-colors"
        >
          오픈요청 & 40% 혜택받기
        </Link>

        {/* Comments */}
        <div className="mt-4">
          <button
            onClick={() => setShowComments(!showComments)}
            className="text-[13px] text-[#888] hover:text-black transition-colors"
          >
            댓글 {product.commentCount}개
          </button>

          {showComments && product.comments.length > 0 && (
            <div className="mt-3 space-y-2">
              {product.comments.map((comment) => (
                <div key={comment.id} className="flex items-start gap-2">
                  <CircleUser className="w-[18px] h-[18px] text-[#ccc] flex-shrink-0 mt-0.5" />
                  <p className="text-[13px] text-[#666] line-clamp-1">{comment.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// =============================================
// FILTER BAR COMPONENT (원본 UI 재현)
// =============================================
interface FilterBarProps {
  tags: FilterTag[];
  activeTag: string;
  onTagChange: (tagId: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ tags, activeTag, onTagChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="sticky top-[60px] z-30 bg-white">
      {/* Filter Header - 검정 배경 */}
      <div className="bg-black text-white px-5 py-3 flex items-center justify-between">
        <span className="text-[13px]">옥스포드</span>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 text-[13px]"
        >
          {isFilterOpen ? (
            <>
              <img
                src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/663c72697c9667c5d9e9e847_close_outline-white.svg"
                alt="Close"
                className="w-4 h-4"
              />
            </>
          ) : (
            <>
              <img
                src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66727bf4ed6126ebf1152aec_filter_w.svg"
                alt="Filter"
                className="w-4 h-4"
              />
              <span>필터</span>
            </>
          )}
        </button>
      </div>

      {/* Filter Tags */}
      {isFilterOpen && (
        <div className="bg-black px-5 pb-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => onTagChange(tag.id)}
                className={cn(
                  'px-4 py-2 text-[13px] border transition-colors',
                  activeTag === tag.id
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white border-white/30 hover:border-white',
                )}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// =============================================
// PAGINATION COMPONENT (원본 UI 재현)
// =============================================
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-6 py-10 border-t border-[#eee]">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          'flex items-center gap-2 text-[14px]',
          currentPage === 1 ? 'text-[#ccc] cursor-not-allowed' : 'text-[#333] hover:text-black',
        )}
      >
        <img
          src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66727c0379cb5cdba51a6e80_left-aaa.svg"
          alt="Back"
          className="w-5 h-5"
          style={{ opacity: currentPage === 1 ? 0.3 : 1 }}
        />
        <span>Back</span>
      </button>

      <span className="text-[14px]">
        <span className="font-medium">{currentPage}</span>
        <span className="text-[#999]"> / {totalPages}</span>
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          'flex items-center gap-2 text-[14px]',
          currentPage === totalPages
            ? 'text-[#ccc] cursor-not-allowed'
            : 'text-[#333] hover:text-black',
        )}
      >
        <span>Next</span>
        <img
          src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66727c0379cb5cdba51a6ead_right-aaa.svg"
          alt="Next"
          className="w-5 h-5"
          style={{ opacity: currentPage === totalPages ? 0.3 : 1 }}
        />
      </button>
    </div>
  );
};

// =============================================
// FOOTER COMPONENT (원본 UI 재현)
// =============================================
const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      {/* Benefits Bar */}
      <div className="border-t border-b border-[#eee]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="flex items-center gap-3 px-5 py-5 border-b md:border-b-0 md:border-r border-[#eee]">
            <img
              src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/663c6d68e7cd8c86a6b576f9_truck2.svg"
              alt=""
              className="w-7 h-7"
            />
            <span className="text-[12px] text-[#333]">전 상품 무료배송</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-5 border-b md:border-b-0 md:border-r border-[#eee]">
            <img
              src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/663c6d68e7cd8c86a6b576f5_arrows.svg"
              alt=""
              className="w-7 h-7"
            />
            <span className="text-[12px] text-[#333]">무료교환 & 무료반품</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-5 border-b md:border-b-0 md:border-r border-[#eee]">
            <img
              src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/663c6d68e7cd8c86a6b576e4_welcome.svg"
              alt=""
              className="w-7 h-7"
            />
            <span className="text-[12px] text-[#333] leading-tight">
              회원가입 시 10,000원 쿠폰 & 수신동의 시 10% 쿠폰
            </span>
          </div>
          <div className="flex items-center gap-3 px-5 py-5">
            <img
              src="https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/663c6d68e7cd8c86a6b576ef_easypay.svg"
              alt=""
              className="w-7 h-7"
            />
            <span className="text-[12px] text-[#333]">모바일 간편결제</span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[13px]">
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
            <h4 className="text-[11px] text-[#888] uppercase tracking-wider mb-2">SHOE CARE</h4>
            <Link href="/shoe-care" className="text-[13px] hover:underline">
              올바른 가죽 관리 방법에 대해 확인해보세요.
            </Link>
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com/genuio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-black"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/genuio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-black"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Customer Center */}
          <div>
            <h4 className="text-[11px] text-[#888] uppercase tracking-wider mb-2">
              CUSTOMER CENTER
            </h4>
            <p className="text-[24px] font-light mb-2">1661-3593</p>
            <p className="text-[11px] text-[#888] leading-relaxed">
              상담시간 : 월~금 AM 10:00 ~ PM 5:00
              <br />
              점심 PM 12:00 ~ PM 1:00 ｜ 토요일, 일요일, 공휴일 휴무
            </p>
          </div>

          {/* Bank Info */}
          <div>
            <h4 className="text-[11px] text-[#888] uppercase tracking-wider mb-2">BANK INFO</h4>
            <p className="text-[13px]">우리은행 │ 1006-801-503643 │ 제누이오(주)</p>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="border-t border-[#eee] px-5 py-6">
        <p className="text-[11px] text-[#888] leading-relaxed">
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
        <p className="text-[11px] text-[#bbb] mt-4">Hosted by Amazon AWS</p>
      </div>
    </footer>
  );
};

// =============================================
// MAIN CLIENT COMPONENT
// =============================================
const EggPageClient: React.FC<EggPageClientProps> = ({ initialProducts, filterTags }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTag, setActiveTag] = useState('all');
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 5;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Header Spacer */}
      <div className="h-[60px]" />

      {/* ===== HERO SECTION ===== */}
      <section className="pt-16 pb-12 px-5 text-center">
        <h2 className="text-[13px] text-[#888] tracking-wider mb-6">Egg</h2>
        <h1 className="text-[28px] md:text-[36px] font-light leading-[1.3] mb-5">
          얼리버드로
          <br />
          탄생시킬 Egg를 선택하세요.
        </h1>
        <p className="text-[14px] text-[#666] leading-[1.7]">
          에그는 제누이오가 새롭게 선보이는 스타일입니다.
          <br />
          300개의 오픈요청이 모이면 얼리버드가 오픈됩니다.
        </p>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="px-5 py-10 border-t border-b border-[#eee]">
        <div className="grid md:grid-cols-2 gap-10 max-w-[800px] mx-auto">
          <div className="text-center md:text-left">
            <h3 className="text-[16px] font-medium mb-2">혜택 1. 얼리버드 오픈알림</h3>
            <p className="text-[13px] text-[#666] leading-[1.8]">
              얼리버드는 한정수량으로 진행됩니다.
              <br />
              원하시는 얼리버드를 놓치지 않도록
              <br />
              오픈 1일 전, 오픈 시 알림을 드립니다.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-[16px] font-medium mb-2">혜택 2. 얼리버드 40% 할인</h3>
            <p className="text-[13px] text-[#666] leading-[1.8]">
              오픈요청 시 얼리버드 쿠폰을 드립니다.
              <br />
              얼리버드 주문 시 쿠폰을 사용하시면
              <br />
              정가 대비 40% 혜택을 받을 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FILTER BAR ===== */}
      <FilterBar tags={filterTags} activeTag={activeTag} onTagChange={setActiveTag} />

      {/* ===== PRODUCTS GRID ===== */}
      <section className="px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          {initialProducts.map((product) => (
            <EggProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EggPageClient;
