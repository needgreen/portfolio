'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Layers, Images } from 'lucide-react';
import GalleryModal from '@/components/ui/GalleryModal';
import { AdCreative } from '@/types';
import { AD_CREATIVES } from '@/constants/adCreatives';

export default function AdCreativesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCreative, setSelectedCreative] = useState<AdCreative | null>(null);
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

  const handleCreativeClick = (creative: AdCreative) => {
    setSelectedCreative(creative);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCreative(null);
  };

  return (
    <section id="ad-creatives" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div
            className={cn('flex items-center gap-3 mb-4 opacity-0', isVisible && 'animate-fade-in')}
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Ad Creatives
            </span>
          </div>

          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-bold text-foreground opacity-0',
              isVisible && 'animate-fade-in animation-delay-100',
            )}
          >
            Ad Creatives
          </h2>

          <p
            className={cn(
              'mt-4 text-lg text-muted-foreground max-w-3xl opacity-0',
              isVisible && 'animate-fade-in animation-delay-200',
            )}
          >
            브랜드의 메시지를 효과적으로 전달하는 광고 소재와 기획전 배너를 기획하고 디자인합니다.
            타겟 오디언스의 시선을 사로잡는 비주얼과 명확한 CTA로 전환율을 높이는 콘텐츠를
            제작합니다.
          </p>
        </div>

        {/* Ad Creatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {AD_CREATIVES.map((creative: AdCreative, index: number) => (
            <div
              key={creative.id}
              className={cn('group cursor-pointer opacity-0', isVisible && 'animate-fade-in')}
              style={{
                animationDelay: isVisible ? `${(index + 3) * 100}ms` : '0ms',
              }}
              onClick={() => handleCreativeClick(creative)}
            >
              <div className="relative h-full rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                {/* Image Container */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={creative.coverImage}
                    alt={creative.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Category Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Layers className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Image Count Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <Images className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">{creative.images.length}</span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-2">
                      <span className="text-sm text-white/70">{creative.description}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {creative.title}
                    </h3>
                    <p className="text-white/80">{creative.titleKo}</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-6 py-3 rounded-full bg-white text-foreground font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View More
                    </div>
                  </div>
                </div>

                {/* Tags Preview */}
                <div className="p-5 md:p-6 bg-card">
                  <div className="flex flex-wrap gap-2">
                    {creative.tags.slice(0, 3).map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {creative.tags.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                        +{creative.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedCreative && (
        <GalleryModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedCreative.title}
          description={selectedCreative.description}
          specs={selectedCreative.tags}
          images={selectedCreative.images}
        />
      )}
    </section>
  );
}
