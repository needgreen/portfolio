'use client';

import React from 'react';
import { Mail, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-foreground text-background">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-3">이서정</h3>
              <p className="text-sm uppercase tracking-widest text-background/60">
                Web & UI/UX Designer
              </p>
            </div>
            <p className="text-background/70 leading-relaxed max-w-sm">
              사용자의 입장에서 생각하고, 기능적이면서도 즐거운 경험을 제공하는 디자인을 추구합니다.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest text-background/60 font-medium">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:need.green.jei@gmail.com"
                  className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors duration-200 group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10 group-hover:bg-primary/20 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span>need.green.jei@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-background/80">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span>Seoul, South Korea</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest text-background/60 font-medium">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Skillset', href: '#skillset' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Photography', href: '#photography' },
                { label: 'Branding', href: '#branding' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-background/70 hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary transition-all duration-200 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} Lee Seojeong. All rights reserved.
          </p>

          {/* Scroll to Top */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-background/60 hover:text-background hover:bg-background/10 gap-2"
          >
            <span className="text-sm">Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="currentColor" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </footer>
  );
}
