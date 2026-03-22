'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Skill } from '@/types';
import { SKILLS } from '@/constants/skills';

export default function SkillsetSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skillset" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div
            className={cn('flex items-center gap-3 mb-4 opacity-0', isVisible && 'animate-fade-in')}
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Proficiency
            </span>
          </div>

          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-bold text-foreground opacity-0',
              isVisible && 'animate-fade-in animation-delay-100',
            )}
          >
            My Skillset
          </h2>

          <p
            className={cn(
              'mt-4 text-lg text-muted-foreground max-w-2xl opacity-0',
              isVisible && 'animate-fade-in animation-delay-200',
            )}
          >
            다양한 프로젝트 경험을 통해 쌓아온 핵심 역량입니다.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILLS.map((skill: Skill, index: number) => (
            <div
              key={skill.id}
              className={cn('group relative opacity-0', isVisible && 'animate-fade-in')}
              style={{
                animationDelay: isVisible ? `${(index + 3) * 100}ms` : '0ms',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={cn(
                  'relative h-full p-6 md:p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500',
                  'hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5',
                  hoveredIndex === index && 'scale-[1.02]',
                )}
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4">
                  <div
                    className={cn(
                      'flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-background border border-border shadow-sm transition-all duration-300',
                      'group-hover:border-primary/50 group-hover:shadow-md group-hover:shadow-primary/10',
                    )}
                  >
                    <span className="text-lg md:text-xl font-bold text-foreground/50 hover:text-primary">
                      {skill.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-4 md:pt-6">
                  {/* Icon */}
                  <div
                    className={cn(
                      'inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5 transition-all duration-300',
                      'group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110',
                    )}
                  >
                    <skill.icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{skill.titleKo}</p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>

                {/* Decorative Corner */}
                <div
                  className={cn(
                    'absolute bottom-0 right-0 w-24 h-24 opacity-0 transition-opacity duration-500',
                    'group-hover:opacity-100',
                  )}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full text-primary/10">
                    <circle cx="100" cy="100" r="80" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
