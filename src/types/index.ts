export interface Project {
  id: string;
  title: string;
  category: string;
  role: string[];
  imageUrl: string[];
  images?: string[];
  link?: string;
  isExternal?: boolean;
  // 01 프로젝트 소개
  intro: string[];
  projectInfo: string[];
  // 02 프로젝트 개요
  overview: string[];
  // 03 진행한 일
  workDone: string[];
  // 04 과정
  process: string[];
  // 05 결과물
  outcome: string[];
  // 06 성장한 점
  growth: string[];
  // 07 나의 역량
  competency: string;
}

import { LucideIcon } from 'lucide-react';

export interface Skill {
  id: string;
  number: string;
  title: string;
  titleKo: string;
  description: string;
  icon: LucideIcon;
}

export interface PhotoCategory {
  id: string;
  title: string;
  titleKo: string;
  description: string;
  coverImage: string;
  specs: string[];
  images: string[];
}

export interface BrandingProject {
  id: string;
  title: string;
  description: string[];
  images: string[];
  link?: string;
  isExternal?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroProfile {
  name: string;
  tagline: string;
  birthDate: string;
  email: string;
  phone: string;
  profileImage: string;
  education: { year: string; content: string }[];
  focus: string[];
  tools: { name: string; level: number }[];
  social: { name: string; url: string }[];
}

export interface CareerItem {
  period: string;
  company: string;
  position: string;
  description: string[];
  tools?: string[];
}

export interface AwardItem {
  year: string;
  content: string;
}

export interface HeroProjectItem {
  year: string;
  title: string;
  description: string;
}
