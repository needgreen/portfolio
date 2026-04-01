'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Skillset', href: '#skillset' },
  { label: 'Projects', href: '#projects' },
  { label: 'Photography', href: '#photography' },
  // { label: "Branding", href: "#branding" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent',
        'border-b border-border',
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="relative group"
          >
            <span className="text-xl md:text-2xl font-display font-semibold text-foreground tracking-tight">
              이서정
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
                </button>
              </li>
            ))}
          </ul>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              onClick={() => {
                const footer = document.querySelector('#contact');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMobileMenuOpen ? 'max-h-80 pb-6' : 'max-h-0',
          )}
        >
          <ul className="flex flex-col gap-1 pt-4">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className={cn(
                  'opacity-0 -translate-x-4 transition-all duration-300',
                  isMobileMenuOpen && 'opacity-100 translate-x-0',
                )}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : '0ms',
                }}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li
              className={cn(
                'opacity-0 -translate-x-4 transition-all duration-300 pt-2',
                isMobileMenuOpen && 'opacity-100 translate-x-0',
              )}
              style={{
                transitionDelay: isMobileMenuOpen ? `${navItems.length * 75}ms` : '0ms',
              }}
            >
              <Button
                variant="default"
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const footer = document.querySelector('#contact');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
