'use client';
import React, { useState } from 'react';
import { Language, SUPPORTED_LANGUAGES } from '../lib/i18n';

interface HeaderProps {
  t: Record<string, any>;
  language: Language;
  setLanguage: (lang: Language) => void;
  isScrolled: boolean;
}

export default function Header({ t, language, setLanguage, isScrolled }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const nav = t.nav;
  const currentLang = SUPPORTED_LANGUAGES.find(l => l.code === language);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-card/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-20">
            {/* Logo */}
            <a className="flex items-center gap-2 sm:gap-3 group" href="/">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground font-bold text-xs sm:text-sm font-display">W</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-foreground text-sm sm:text-base leading-tight tracking-tight">Weldan</span>
                <span className="text-accent text-[10px] sm:text-xs font-semibold tracking-widest uppercase leading-tight">Quran Academy</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {['programs', 'teachers', 'pricing', 'contact'].map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200 tracking-wide"
                >
                  {nav[key]}
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-muted-foreground border border-border rounded-full hover:border-accent hover:text-accent transition-all duration-200"
                >
                  <span>{currentLang?.nativeLabel}</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {langOpen && (
                  <div className="absolute top-full mt-2 right-0 glass-card-dark rounded-xl border border-border overflow-hidden z-50 min-w-[120px]">
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors duration-200 ${
                          language === lang.code ? 'text-accent bg-accent/10' : 'text-muted-foreground hover:text-accent hover:bg-muted/30'
                        }`}
                      >
                        <span className="block">{lang.nativeLabel}</span>
                        <span className="block text-muted-foreground opacity-60" style={{fontSize:'10px'}}>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-semibold text-accent-foreground gradient-gold rounded-full hover:opacity-90 transition-opacity duration-200 tracking-wide"
              >
                {nav.enrollNow}
              </a>
            </div>

            {/* Mobile right: lang + hamburger */}
            <div className="flex md:hidden items-center gap-2">
              {/* Mobile Language Compact */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-muted-foreground border border-border rounded-full hover:border-accent hover:text-accent transition-all duration-200"
                >
                  <span>{currentLang?.nativeLabel}</span>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {langOpen && (
                  <div className="absolute top-full mt-2 right-0 glass-card-dark rounded-xl border border-border overflow-hidden z-50 min-w-[110px]">
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors duration-200 ${
                          language === lang.code ? 'text-accent bg-accent/10' : 'text-muted-foreground hover:text-accent hover:bg-muted/30'
                        }`}
                      >
                        <span className="block">{lang.nativeLabel}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Hamburger */}
              <button
                className="flex flex-col gap-1.5 p-2 z-50 relative"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open menu"
              >
                <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backdropFilter: 'blur(20px)', background: 'rgba(10,26,15,0.97)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 pt-14 px-6">
          {['programs', 'teachers', 'pricing', 'contact'].map((key, i) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl sm:text-3xl font-semibold text-foreground hover:text-accent transition-colors duration-200 py-2"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {nav[key]}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-8 py-3.5 text-base font-semibold text-accent-foreground gradient-gold rounded-full w-full max-w-xs text-center"
          >
            {nav.enrollNow}
          </a>
        </div>
      </div>
    </>
  );
}
