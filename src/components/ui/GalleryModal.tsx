'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import FullscreenViewer from '@/components/ui/FullscreenViewer';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  specs?: string[];
  images: string[];
}

export default function GalleryModal({
  isOpen,
  onClose,
  title,
  description,
  specs,
  images,
}: GalleryModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseFullview = () => {
    setSelectedImageIndex(null);
    setSlideDirection(null);
  };

  const navigate = (direction: 'left' | 'right') => {
    if (selectedImageIndex === null || isAnimating) return;
    setSlideDirection(direction);
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedImageIndex((prev) => {
        if (prev === null) return prev;
        return direction === 'right'
          ? prev < images.length - 1
            ? prev + 1
            : 0
          : prev > 0
            ? prev - 1
            : images.length - 1;
      });
      setSlideDirection(null);
      setIsAnimating(false);
    }, 250);
  };

  const handlePrevImage = () => navigate('left');
  const handleNextImage = () => navigate('right');

  const navigateToIndex = (index: number) => {
    if (isAnimating || index === selectedImageIndex || selectedImageIndex === null) return;
    const direction = index > selectedImageIndex ? 'right' : 'left';
    setSlideDirection(direction);
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedImageIndex(index);
      setSlideDirection(null);
      setIsAnimating(false);
    }, 250);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImageIndex !== null) {
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'Escape') handleCloseFullview();
    }
  };

  return (
    <>
      {/* Main Gallery Modal */}
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent
          className={`max-w-6xl max-h-[90vh] overflow-hidden flex flex-col${selectedImageIndex !== null ? ' pointer-events-none select-none' : ''}`}
          onKeyDown={handleKeyDown}
        >
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="text-2xl md:text-3xl font-bold">{title}</DialogTitle>
            {description && (
              <DialogDescription className="text-base text-muted-foreground">
                {description}
              </DialogDescription>
            )}
          </DialogHeader>

          {/* Specs */}
          {specs && specs.length > 0 && (
            <div className="flex-shrink-0 flex flex-wrap gap-2 py-3 border-b border-border">
              {specs.map((spec, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full"
                >
                  {spec}
                </span>
              ))}
            </div>
          )}

          {/* Masonry Gallery */}
          <div className="flex-1 overflow-y-auto mt-4 pr-2">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  <div className="relative overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={image}
                      alt={`${title} - ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ display: 'block' }}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          <ZoomIn className="w-5 h-5 text-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Fullscreen Image Viewer */}
      {selectedImageIndex !== null && typeof document !== 'undefined' && createPortal(
        <FullscreenViewer
          images={images}
          title={title}
          selectedIndex={selectedImageIndex}
          slideDirection={slideDirection}
          onClose={handleCloseFullview}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
          onSelect={navigateToIndex}
          onKeyDown={handleKeyDown}
        />,
        document.body,
      )}
    </>
  );
}
