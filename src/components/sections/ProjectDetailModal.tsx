'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Project } from '@/types';

interface ProjectDetailModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface SectionProps {
  num: string;
  label: string;
  subtitle: string;
  items: string[];
}

function ProjectSection({ num, label, subtitle, items }: SectionProps) {
  if (!subtitle && items.length === 0) return null;

  return (
    <div className="space-y-1.5">
      <p className="text-sm text-foreground">
        <span className="font-medium">
          · {num} {label}
        </span>
        {subtitle && (
          <>
            <span className="text-muted-foreground"> | </span>
            <span className="font-semibold">{subtitle}</span>
          </>
        )}
      </p>
      {items.map((item, idx) => (
        <p key={idx} className="ml-5 text-sm text-muted-foreground">
          – {item}
        </p>
      ))}
    </div>
  );
}

export default function ProjectDetailModal({
  project,
  open,
  onOpenChange,
}: ProjectDetailModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  const images = project?.images?.length ? project.images : (project?.imageUrl ?? []);
  const total = images.length;

  const isVideo = (src: string) => src.toLowerCase().endsWith('.mp4');

  const handleViewWebsite = (link: string, isExternal: boolean) => {
    if (isExternal && link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        {project && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                  {project.category}
                </span>
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-bold">{project.title}</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">
                {project.intro}
              </DialogDescription>
            </DialogHeader>

            {/* Project Image Carousel */}
            <div className="relative my-4 rounded-xl overflow-hidden bg-muted h-80 md:h-[470px]">
              {isVideo(images[currentIndex]) ? (
                <video
                  key={images[currentIndex]}
                  src={images[currentIndex]}
                  controls
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={images[currentIndex]}
                  alt={`${project.title} - ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                />
              )}

              {/* Counter */}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur-sm">
                {currentIndex + 1} / {total}
              </div>

              {/* Prev / Next */}
              {total > 1 && (
                <>
                  <button
                    onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                    disabled={currentIndex === 0}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm disabled:opacity-30 hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentIndex((i) => Math.min(total - 1, i + 1))}
                    disabled={currentIndex === total - 1}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm disabled:opacity-30 hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Structured Sections */}
            <div className="space-y-5 border border-border/50 rounded-xl p-5 bg-muted/20">
              <ProjectSection
                num="01"
                label="프로젝트 소개"
                subtitle=""
                items={project.projectInfo ?? []}
              />
              <ProjectSection
                num="02"
                label="프로젝트 개요"
                subtitle=""
                items={project.overview ?? []}
              />
              <ProjectSection num="03" label="진행한 일" subtitle="" items={project.workDone} />
              <ProjectSection num="04" label="과정" subtitle="" items={project.process} />
              <ProjectSection num="05" label="결과물" subtitle="" items={project.outcome} />
              <ProjectSection num="06" label="성장한 점" subtitle="" items={project.growth} />
              <ProjectSection
                num="07"
                label="나의 역량"
                subtitle=""
                items={project.competency ? [project.competency] : []}
              />
            </div>

            {/* Action Button */}
            {project.isExternal && project.link && (
              <div className="mt-6 pt-6 border-t border-border">
                <Button
                  onClick={() => handleViewWebsite(project.link!, project.isExternal!)}
                  className="w-full sm:w-auto gap-2"
                >
                  <span>View Website</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
