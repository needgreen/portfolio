'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Project } from '@/types';
import { PROJECTS } from '@/constants/projects';
import ProjectDetailModal from '@/components/sections/ProjectDetailModal';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-muted/30"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div
            className={cn('flex items-center gap-3 mb-4 opacity-0', isVisible && 'animate-fade-in')}
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Projects
            </span>
          </div>

          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-bold text-foreground opacity-0',
              isVisible && 'animate-fade-in animation-delay-100',
            )}
          >
            Web Projects
          </h2>

          <p
            className={cn(
              'mt-4 text-lg text-muted-foreground max-w-3xl opacity-0',
              isVisible && 'animate-fade-in animation-delay-200',
            )}
          >
            사용자를 이해하는 일은 곧 디지털 환경을 설계하는 일이라고 믿습니다. 브랜드의 목적과
            사용자 경험을 연결하는 웹 프로젝트들을 담고 있습니다.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project: Project, index: number) => (
            <div
              key={project.id}
              className={cn('group cursor-pointer opacity-0', isVisible && 'animate-fade-in')}
              style={{
                animationDelay: isVisible ? `${(index + 3) * 100}ms` : '0ms',
              }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-full rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                {/* Category Badge */}
                {/* <div className="px-5 pt-5">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-primary/10 rounded-full mb-4">
                    {project.category}
                  </span>
                </div> */}

                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden mt-0">
                  <Image
                    src={
                      project.imageUrl[0]?.toLowerCase().endsWith('.mp4')
                        ? project.imageUrl[1]
                        : project.imageUrl[0]
                    }
                    alt={project.title}
                    fill
                    className="object-cover transition-transfor415m duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-sm font-medium text-white">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" color="white" />
                    </div>
                  </div>

                  {/* Project Number */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-4xl font-bold text-white/80">{project.id}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.intro}</p>

                  {/* Role */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.role.slice(0, 4).map((r: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary"
                      >
                        {r}
                      </span>
                    ))}
                    {project.role.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                        +{project.role.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
}
