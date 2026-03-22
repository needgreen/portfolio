'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface FullscreenViewerProps {
  images: string[];
  title: string;
  selectedIndex: number;
  slideDirection: 'left' | 'right' | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export default function FullscreenViewer({
  images,
  title,
  selectedIndex,
  slideDirection,
  onClose,
  onPrev,
  onNext,
  onSelect,
  onKeyDown,
}: FullscreenViewerProps) {
  const thumbnailStripRef = useRef<HTMLDivElement>(null);
  const activeThumbnailRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    activeThumbnailRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [selectedIndex]);

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (!thumbnailStripRef.current) return;
    thumbnailStripRef.current.scrollBy({ left: direction === 'right' ? 120 : -120, behavior: 'smooth' });
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      {/* Close Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Image Counter */}
      <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
        {selectedIndex + 1} / {images.length}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image */}
      <div
        className={cn(
          'relative max-w-[90vw] max-h-[85vh] transition-all duration-250',
          slideDirection === 'right' && 'translate-x-[-20px] opacity-0',
          slideDirection === 'left' && 'translate-x-[20px] opacity-0',
          !slideDirection && 'translate-x-0 opacity-100',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[selectedIndex]}
          alt={`${title} - ${selectedIndex + 1}`}
          width={1200}
          height={800}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
          priority
        />
      </div>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 max-w-[90vw]">
        <button
          onClick={(e) => { e.stopPropagation(); scrollThumbnails('left'); }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div
          ref={thumbnailStripRef}
          className="flex gap-2 px-4 py-2 rounded-xl bg-black/50 backdrop-blur-sm overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((image, index) => (
            <button
              key={index}
              ref={selectedIndex === index ? activeThumbnailRef : null}
              onClick={(e) => { e.stopPropagation(); onSelect(index); }}
              className={cn(
                'flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200',
                selectedIndex === index
                  ? 'border-white scale-110'
                  : 'border-transparent opacity-60 hover:opacity-100',
              )}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); scrollThumbnails('right'); }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
