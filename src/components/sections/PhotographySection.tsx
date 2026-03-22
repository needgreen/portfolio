'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Camera, Images } from 'lucide-react';
import GalleryModal from '@/components/ui/GalleryModal';
import { PhotoCategory } from '@/types';
import { PHOTO_CATEGORIES } from '@/constants/photography';

export default function PhotographySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory | null>(null);
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

  const handleCategoryClick = (category: PhotoCategory) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <section id="photography" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div
            className={cn('flex items-center gap-3 mb-4 opacity-0', isVisible && 'animate-fade-in')}
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Photography
            </span>
          </div>

          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-bold text-foreground opacity-0',
              isVisible && 'animate-fade-in animation-delay-100',
            )}
          >
            Photography
          </h2>

          <p
            className={cn(
              'mt-4 text-lg text-muted-foreground max-w-3xl opacity-0',
              isVisible && 'animate-fade-in animation-delay-200',
            )}
          >
            사용자 경험을 설계하는 디자이너로서 사진은 제품의 가치를 시각적으로 설득하는 강력한
            도구입니다. 이 작업들은 디자인 리서치와 무드 디벨롭, 그리고 콘텐츠 구성의 시각적
            자료로도 적극 활용됩니다.
          </p>
        </div>

        {/* Photo Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PHOTO_CATEGORIES.map((category: PhotoCategory, index: number) => (
            <div
              key={category.id}
              className={cn('group cursor-pointer opacity-0', isVisible && 'animate-fade-in')}
              style={{
                animationDelay: isVisible ? `${(index + 3) * 100}ms` : '0ms',
              }}
              onClick={() => handleCategoryClick(category)}
            >
              <div className="relative h-full rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                {/* Image Container */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={category.coverImage}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Category Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Image Count Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <Images className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">{category.images.length}</span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-2">
                      <span className="text-sm text-white/70">{category.description}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {category.title}
                    </h3>
                    <p className="text-white/80">{category.titleKo}</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-6 py-3 rounded-full bg-white text-foreground font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View More
                    </div>
                  </div>
                </div>

                {/* Specs Preview */}
                <div className="p-5 md:p-6 bg-card">
                  <div className="flex flex-wrap gap-2">
                    {category.specs.slice(0, 3).map((spec: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                    {category.specs.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                        +{category.specs.length - 3} more
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
      {selectedCategory && (
        <GalleryModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedCategory.title}
          description={selectedCategory.description}
          specs={selectedCategory.specs}
          images={selectedCategory.images}
        />
      )}
    </section>
  );
}
