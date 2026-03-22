'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const CORE_SKILLS = new Set([
  'Next.js',
  'React',
  'TypeScript',
  'Webflow',
  'Capture One',
  'Photoshop',
]);

const CATEGORIES = [
  {
    title: 'Web & UI',
    skills: ['Webflow', 'Figma', 'WordPress', 'HTML5', 'CSS3'],
  },

  {
    title: 'Design Tools',
    skills: ['Photoshop', 'Illustrator', 'After Effects', 'Premiere'],
  },
  {
    title: 'Frontend Development',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Firebase'],
  },
  {
    title: 'Photography',
    skills: ['Capture One', 'Adobe Lightroom'],
  },
];

export default function TechStackSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech-stack" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div
            className={cn('flex items-center gap-3 mb-4 opacity-0', isVisible && 'animate-fade-in')}
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Tech Stack
            </span>
          </div>

          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-bold text-foreground opacity-0',
              isVisible && 'animate-fade-in animation-delay-100',
            )}
          >
            Tech Stack & Tools
          </h2>

          <p
            className={cn(
              'mt-4 text-lg text-muted-foreground max-w-2xl opacity-0',
              isVisible && 'animate-fade-in animation-delay-200',
            )}
          >
            주로 사용하는 기술과 도구입니다.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {CATEGORIES.map(({ title, skills }, index) => (
            <div
              key={title}
              className={cn('opacity-0', isVisible && 'animate-fade-in')}
              style={{ animationDelay: isVisible ? `${(index + 3) * 100}ms` : '0ms' }}
            >
              <div className="group h-full p-6 rounded-2xl bg-muted/10 border border-border/60 hover:border-border hover:bg-primary/5 transition-all duration-300">
                {/* Category Title */}
                <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">
                  {title}
                </h3>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        'inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200',
                        CORE_SKILLS.has(skill)
                          ? 'bg-transparent border-primary/25 text-primary group-hover:bg-white group-hover:border-primary/40'
                          : 'bg-background border-border/60 text-foreground/80 group-hover:opacity-90',
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
