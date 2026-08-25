'use client';
import React from 'react';

interface FooterSectionProps {
  t: Record<string, any>;
}

export default function FooterSection({ t }: FooterSectionProps) {
  const footer = t.footer;
  const nav = t.nav;

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col items-center gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <a className="flex items-center gap-3" href="/">
            <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
              <span className="text-accent-foreground font-bold text-xs font-display">W</span>
            </div>
            <span className="font-display font-semibold text-foreground text-sm tracking-tight">
              Weldan Quran Academy
            </span>
          </a>

          {/* Nav - wraps on mobile */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-2 text-sm font-medium text-muted-foreground">
            <a href="#programs" className="hover:text-accent transition-colors duration-200">{nav.programs}</a>
            <a href="#teachers" className="hover:text-accent transition-colors duration-200">{nav.teachers}</a>
            <a href="#pricing" className="hover:text-accent transition-colors duration-200">{nav.pricing}</a>
            <a href="#contact" className="hover:text-accent transition-colors duration-200">{nav.contact}</a>
            <a href="#" className="hover:text-accent transition-colors duration-200">{footer.privacy}</a>
            <a href="#" className="hover:text-accent transition-colors duration-200">{footer.terms}</a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200"
              aria-label="WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200"
              aria-label="Facebook"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-xs text-muted-foreground">
          <p className="text-center sm:text-left">{footer.copyright}</p>
          <p className="opacity-60 text-center sm:text-right">{footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
