'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/constants/projects';
import { PROFILE_DATA, CAREER_DATA, HERO_PROJECTS_DATA } from '@/constants/hero';
import { Project, CareerItem } from '@/types';
import ProjectDetailModal from '@/components/sections/ProjectDetailModal';

function calculateTotalCareer(careers: CareerItem[]): string {
  const now = new Date();
  let totalMonths = 0;

  careers.forEach((career) => {
    const parts = career.period.split('~').map((s) => s.trim());
    if (parts.length !== 2) return;

    const parseDate = (str: string): Date | null => {
      if (str === '재직 중') return now;
      const match = str.match(/(\d{4})\.\s*(\d{2})/);
      if (!match) return null;
      return new Date(parseInt(match[1]), parseInt(match[2]) - 1);
    };

    const start = parseDate(parts[0]);
    const end = parseDate(parts[1]);
    if (!start || !end) return;

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    totalMonths += Math.max(0, months);
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return months === 0 ? `${years}년` : `${years}년 ${months}개월`;
}

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalSlides = 1;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleProjectClick = (idx: number) => {
    setSelectedProject(PROJECTS[idx] ?? null);
    setIsModalOpen(true);
  };

  const renderToolLevel = (level: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className={cn(
              'w-2 h-2 rounded-full transition-colors',
              idx < level ? 'bg-foreground' : 'bg-border',
            )}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="relative min-h-screen pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-background" />

      {/* Main Content - 3 Column Layout */}
      <div className="container-custom pb-8 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[calc(100vh-160px)]">
          {/* Column 1: Profile */}
          <div
            className={cn(
              'lg:col-span-4 p-2 md:p-6 xl:p-10border-b lg:border-b-0 lg:border-r border-border opacity-0',
              isLoaded && 'animate-fade-in',
            )}
          >
            {/* Profile Header */}
            <div className="flex items-center gap-5 mb-10">
              {/* Profile Image */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={PROFILE_DATA.profileImage}
                  alt={PROFILE_DATA.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Tagline */}
              <div className="flex">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                  {PROFILE_DATA.tagline}
                </h1>
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-6">
              {/* Name & Contact */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {PROFILE_DATA.name}
                </h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{PROFILE_DATA.birthDate}</p>
                  <p>{PROFILE_DATA.email}</p>
                  <p>{PROFILE_DATA.phone}</p>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-2 pb-2">
                {PROFILE_DATA.education.map((edu, idx) => (
                  <div key={idx} className="flex gap-3 text-sm">
                    <span className="text-muted-foreground w-12">{edu.year}</span>
                    <span className="text-foreground">{edu.content}</span>
                  </div>
                ))}
              </div>

              {/* Focus & Tools */}
              <div className="grid grid-cols-2 gap-8">
                {/* Focus */}
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Focus
                  </h3>
                  <ul className="space-y-1.5">
                    {PROFILE_DATA.focus.map((item, idx) => (
                      <li key={idx} className="text-sm text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Tool
                  </h3>
                  <ul className="space-y-2.5">
                    {PROFILE_DATA.tools.map((tool, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="text-sm text-foreground w-16">{tool.name}</span>
                        {renderToolLevel(tool.level)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Active
                </h3>
                <div className="flex gap-3">
                  {PROFILE_DATA.social.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-medium hover:bg-primary transition-colors"
                    >
                      {social.name.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Career  */}
          <div
            className={cn(
              'lg:col-span-3 p-2 md:p-6 xl:p-10 border-b lg:border-b-0 lg:border-r border-border opacity-0',
              isLoaded && 'animate-fade-in animation-delay-100',
            )}
          >
            {/* Career */}
            <div className="mb-12">
              <div className="flex items-baseline gap-3 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Career</h2>
                <span className="text-sm md:text-xs xl:text-sm text-muted-foreground text-right w-full">
                  총 {calculateTotalCareer(CAREER_DATA)}
                </span>
              </div>

              <div className="space-y-2">
                {CAREER_DATA.map((career, idx) => (
                  <div key={idx} className="py-4 border-b border-border last:border-0 m-0">
                    <div className="flex flex-col sm:gap-4 mb-0">
                      <span className="text-xs text-muted-foreground mb-0 sm:mb-0">
                        {career.period}
                      </span>
                      <div>
                        <span className="text-sm text-foreground font-semibold">
                          {career.company}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">
                          {career.position}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-1 pl-0 sm:pl- line-clamp-2">
                      {career.description.map((desc, dIdx) => (
                        <li key={dIdx} className="text-xs text-muted-foreground leading-relaxed ">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Projects */}
          <div
            className={cn(
              'lg:col-span-5 p-2 md:p-6 xl:p-10 opacity-0',
              isLoaded && 'animate-fade-in animation-delay-200',
            )}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Projects</h2>

            <div className="space-y-0">
              {HERO_PROJECTS_DATA.map((project, idx) => (
                <div
                  key={idx}
                  className="group py-5 border-b border-border last:border-0 cursor-pointer hover:bg-muted/30 -mx-4 px-4 transition-colors"
                  onClick={() => handleProjectClick(idx)}
                >
                  <div className="flex gap-6">
                    {/* Year */}
                    <span className="text-sm text-muted-foreground w-24 flex-shrink-0">
                      {project.year}
                    </span>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-8">
              <button
                onClick={() => {
                  const el = document.querySelector('#portfolio');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
              >
                <span>전체 보기</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
}
