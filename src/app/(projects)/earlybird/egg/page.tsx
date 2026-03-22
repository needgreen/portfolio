import EggPageClient from '@/components/projects/earlybird/EggPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Egg | GENUIO',
  description:
    '얼리버드로 탄생시킬 Egg를 선택하세요. 300개의 오픈요청이 모이면 얼리버드가 오픈됩니다.',
};

async function getEggProducts() {
  const products = [
    {
      id: 'egg-1',
      name: 'Vince',
      nameKo: '빈체 오프화이트 송아지가죽 스웨이드 스니커즈 스웨이드 스니커즈 스웨이드 스니커즈',
      price: 188000,
      originalPrice: 235000,
      discount: 40,
      image:
        'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66727c0279cb5cdba51a6ca4_102_white_vitello_bianco_01.jpg',
      requestCount: 32,
      step: 1,
      openDate: '12월 오픈예정',
      commentCount: 53,
      comments: [
        { id: '1', content: '이거 빨리 만들어 주세요 ㅠㅠ' },
        { id: '2', content: '커플신발로 너무 구매하고싶어요!!!!' },
      ],
    },
    {
      id: 'egg-2',
      name: 'Vince',
      nameKo: '빈체 허니화이트 송아지가죽 스웨이드 스니커즈',
      price: 0,
      originalPrice: 0,
      discount: 0,
      image:
        'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/663c72677c9667c5d9e9e6ea_102_honey_vitello_bianco_03.jpg',
      requestCount: 176,
      step: 2,
      openDate: null,
      commentCount: 25,
      comments: [
        { id: '1', content: '벌써 기대됩니다. 색상과 느낌이 너무 좋네요!' },
        { id: '2', content: '멋지네요 기다려보겠습니다 😁' },
      ],
    },
    {
      id: 'egg-3',
      name: 'Aria',
      nameKo: '아리아 스노우화이트 팜플로나가죽 레이스업 스니커즈',
      price: 188000,
      originalPrice: 235000,
      discount: 40,
      image:
        'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66727c0479cb5cdba51a6ef7_2705_softy_piombo_01.jpg',
      requestCount: 227,
      step: 3,
      openDate: null,
      commentCount: 16,
      comments: [
        { id: '1', content: '특이한 디자인 그래도 너무 예쁘네요' },
        { id: '2', content: '몽크스트랩 너무 예쁘네요' },
      ],
    },
    {
      id: 'egg-4',
      name: 'Albero',
      nameKo: '알베로 브라운 크러스트가죽 캡토 더비',
      price: 188000,
      originalPrice: 235000,
      discount: 40,
      image:
        'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66727c0279cb5cdba51a6c90_3900_crust_brandy_01.jpg',
      requestCount: 308,
      step: 4,
      openDate: null,
      commentCount: 77,
      comments: [
        { id: '1', content: '이거 빨리 만들어 주세요 ㅠㅠ' },
        { id: '2', content: '커플신발로 너무 구매하고싶어요!!!!' },
      ],
    },
    {
      id: 'egg-5',
      name: 'Momento',
      nameKo: '모멘토 네이비 송아지가죽 파티나 플레인 옥스포드',
      price: 188000,
      originalPrice: 235000,
      discount: 40,
      image:
        'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66727c0279cb5cdba51a6cb6_9003_calf_blu_01.jpg',
      requestCount: 57,
      step: 1,
      openDate: null,
      commentCount: 34,
      comments: [
        { id: '1', content: '멋지네요' },
        { id: '2', content: '기대됩니다' },
      ],
    },
    {
      id: 'egg-6',
      name: 'Canto',
      nameKo: '칸토 블랙 송아지가죽 파티나 윙팁 옥스포드',
      price: 188000,
      originalPrice: 235000,
      discount: 40,
      image:
        'https://cdn.prod.website-files.com/663c2611b9904a536d0b50b2/66727c0379cb5cdba51a6d27_55_calf_nero_03.jpg',
      requestCount: 176,
      step: 2,
      openDate: null,
      commentCount: 13,
      comments: [
        { id: '1', content: '이거 빨리 만들어 주세요 ㅠㅠ' },
        { id: '2', content: '몽크스트랩 너무 예쁘네요' },
      ],
    },
  ];

  return products;
}

async function getFilterTags() {
  return [
    { id: 'all', label: 'ALL' },
    { id: 'new', label: 'NEW' },
    { id: 'best', label: 'BEST' },
    { id: 'sneakers', label: '스니커즈' },
    { id: 'driving', label: '드라이빙' },
    { id: 'white', label: '화이트' },
    { id: 'loafer', label: '로퍼' },
    { id: 'ceo', label: 'CEO' },
    { id: 'business', label: '비즈니스룩' },
    { id: 'oxford', label: '옥스포드' },
    { id: 'black', label: '블랙' },
    { id: 'dress', label: '구두' },
  ];
}

export default async function EggPage() {
  const products = await getEggProducts();
  const filterTags = await getFilterTags();

  return <EggPageClient initialProducts={products} filterTags={filterTags} />;
}
