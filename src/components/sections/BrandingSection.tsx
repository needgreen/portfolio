'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Palette, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GalleryModal from '@/components/ui/GalleryModal';
import { BrandingProject } from '@/types';
import { BRANDING_PROJECTS } from '@/constants/branding';

export default function BrandingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<BrandingProject | null>(null);
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

  const handleProjectClick = (project: BrandingProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleViewWebsite = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="branding"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-muted/30"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div
            className={cn('flex items-center gap-3 mb-4 opacity-0', isVisible && 'animate-fade-in')}
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Branding
            </span>
          </div>

          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-bold text-foreground opacity-0',
              isVisible && 'animate-fade-in animation-delay-100',
            )}
          >
            Branding
          </h2>

          <p
            className={cn(
              'mt-4 text-lg text-muted-foreground max-w-3xl opacity-0',
              isVisible && 'animate-fade-in animation-delay-200',
            )}
          >
            브랜딩은 단순한 로고나 시각 요소를 넘어{' '}
            <span className="text-foreground font-medium">
              사용자와 브랜드 사이의 &apos;일관된 감정과 신뢰&apos;를 설계하는 작업
            </span>
            이라 생각합니다. 네이밍, 톤앤매너, 무드보드, 시각 언어의 정의를 포함하며 콘텐츠 제작,
            서비스 UI 전반에 걸쳐 통합된 브랜드 경험을 구축하는 기반이 됩니다.
          </p>
        </div>

        {/* Branding Projects */}
        <div className="space-y-8 lg:space-y-12">
          {BRANDING_PROJECTS.map((project: BrandingProject, index: number) => (
            <div
              key={project.id}
              className={cn('group opacity-0', isVisible && 'animate-fade-in')}
              style={{
                animationDelay: isVisible ? `${(index + 3) * 100}ms` : '0ms',
              }}
            >
              <div className="relative rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Images Side */}
                  <div
                    className="relative cursor-pointer"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="grid grid-cols-2 gap-1 p-1">
                      {project.images.slice(0, 2).map((image: string, idx: number) => (
                        <div
                          key={idx}
                          className="relative aspect-square overflow-hidden rounded-xl"
                        >
                          <Image
                            src={image}
                            alt={`${project.title} - ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center rounded-xl m-1">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                        <div className="px-6 py-3 rounded-full bg-white text-foreground font-medium shadow-lg">
                          View Gallery
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    {/* Icon Badge */}
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                        <Palette className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description List */}
                    <ul className="space-y-3 mb-6">
                      {project.description.map((desc: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <Button
                        variant="outline"
                        onClick={() => handleProjectClick(project)}
                        className="gap-2"
                      >
                        <span>View Gallery</span>
                      </Button>

                      {project.isExternal && project.link && (
                        <Button onClick={() => handleViewWebsite(project.link!)} className="gap-2">
                          <span>View Page</span>
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div
          className={cn(
            'mt-20 flex items-center justify-center gap-2 opacity-0',
            isVisible && 'animate-fade-in animation-delay-500',
          )}
        >
          <div className="w-2 h-2 rounded-full bg-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="w-2 h-2 rounded-full bg-primary/30" />
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedProject && (
        <GalleryModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedProject.title}
          description={selectedProject.description.join(' / ')}
          images={selectedProject.images}
        />
      )}
    </section>
  );
}
