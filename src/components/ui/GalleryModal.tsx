'use client';

import React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  specs?: string[];
  images: string[];
}

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

export default function GalleryModal({
  isOpen,
  onClose,
  title,
  description,
  specs,
  images,
}: GalleryModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
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
              <div key={index} className="break-inside-avoid">
                <div className="relative overflow-hidden rounded-lg bg-muted">
                  {isVideo(image) ? (
                    <video
                      src={image}
                      className="w-full h-auto object-cover"
                      style={{ display: 'block' }}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                    />
                  ) : (
                    <Image
                      src={image}
                      alt={`${title} - ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                      style={{ display: 'block' }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
