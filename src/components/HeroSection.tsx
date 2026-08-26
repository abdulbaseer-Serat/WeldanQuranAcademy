'use client';
import React, { useState, useEffect } from 'react';

interface HeroSectionProps {
  t: Record<string, any>;
}

const heroImages = [
{
  src: 'https://images.unsplash.com/photo-1578897626389-6fae2c54c21e',
  alt: 'Grand mosque interior with dramatic arched ceilings, dim golden lantern light, deep shadows on stone columns'
},
{
  src: 'https://images.unsplash.com/photo-1714779045989-67a5558a87a5',
  alt: 'Mosque exterior at dusk with silhouetted minarets against deep blue sky'
},
{
  src: 'https://images.unsplash.com/photo-1585555689348-f677658518ad',
  alt: 'Open Quran book on wooden stand with soft candlelight, dark warm atmospheric background'
}];


export default function HeroSection({ t }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hero = t.hero;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      aria-label="Hero section">
      
      {/* Background Images */}
      {heroImages.map((img, i) =>
      <div
        key={i}
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: currentSlide === i ? 1 : 0 }}>
        
          <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover"
          loading={i === 0 ? 'eager' : 'lazy'} />
        
        </div>
      )}

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent z-10" />

      {/* Animated SVG lines */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGold1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(200,150,90,0)" />
              <stop offset="50%" stopColor="rgba(200,150,90,0.6)" />
              <stop offset="100%" stopColor="rgba(200,150,90,0)" />
            </linearGradient>
            <linearGradient id="lineGold2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(200,150,90,0)" />
              <stop offset="50%" stopColor="rgba(200,150,90,0.4)" />
              <stop offset="100%" stopColor="rgba(200,150,90,0)" />
            </linearGradient>
          </defs>
          <line x1="-200" y1="30%" x2="0" y2="30%" stroke="url(#lineGold1)" strokeWidth="1">
            <animate attributeName="x1" values="-200;110%" dur="10s" repeatCount="indefinite" />
            <animate attributeName="x2" values="0;130%" dur="10s" repeatCount="indefinite" />
          </line>
          <line x1="110%" y1="60%" x2="130%" y2="60%" stroke="url(#lineGold1)" strokeWidth="1">
            <animate attributeName="x1" values="110%;-200" dur="13s" repeatCount="indefinite" />
            <animate attributeName="x2" values="130%;0" dur="13s" repeatCount="indefinite" />
          </line>
          <line x1="25%" y1="-200" x2="25%" y2="0" stroke="url(#lineGold2)" strokeWidth="0.5">
            <animate attributeName="y1" values="-200;110%" dur="12s" repeatCount="indefinite" />
            <animate attributeName="y2" values="0;130%" dur="12s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      {/* Blobs - hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-96 h-96 blob-gold z-10 animate-float pointer-events-none" />
      <div className="hidden sm:block absolute bottom-1/3 right-1/4 w-80 h-80 blob-green z-10 animate-float-delayed pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-24 pt-20 sm:pt-28 md:pt-32 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse-gold" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em]">{hero.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-none">
            {hero.title1}{' '}
            <span className="text-gradient-gold">{hero.titleHighlight}</span>
            {hero.title2}
            <br />
            <span className="text-primary-foreground opacity-60">{hero.title3}</span>{' '}
            {hero.title3}
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-md leading-relaxed">
            {hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 pt-1 sm:pt-2">
            <a
              href="#contact"
              className="px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-bold text-accent-foreground gradient-gold rounded-full hover:opacity-90 transition-opacity duration-200 tracking-wide text-center">
              {hero.startTrial}
            </a>
            <a
              href="#programs"
              className="px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-bold text-foreground border border-border rounded-full hover:border-accent hover:text-accent transition-all duration-200 tracking-wide glass-card text-center">
              {hero.viewPrograms}
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-5 sm:gap-8 pt-4 border-t border-border mt-2 sm:mt-4">
            {[
            { value: '3,200+', label: hero.stats.students },
            { value: '45+', label: hero.stats.countries },
            { value: '98%', label: hero.stats.satisfaction }].
            map((stat) =>
            <div key={stat.label} className="space-y-0.5">
                <p className="text-accent font-display font-bold text-xl sm:text-2xl">{stat.value}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest font-semibold">{stat.label}</p>
              </div>
            )}
          </div>
        </div>

        {/* Slide counter */}
        <div className="lg:col-span-5 flex flex-row lg:flex-col items-center lg:items-end gap-3 lg:gap-6">
          <div className="flex items-center gap-3">
            <span className="text-accent font-mono font-bold text-base sm:text-lg">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="text-muted-foreground text-sm">/</span>
            <span className="text-muted-foreground font-mono text-sm">{String(heroImages.length).padStart(2, '0')}</span>
            <div className="flex gap-2 ml-2">
              {heroImages.map((_, i) =>
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`transition-all duration-300 rounded-full ${
                currentSlide === i ? 'w-8 h-2 bg-accent' : 'w-2 h-2 bg-border hover:bg-muted-foreground'}`
                }
                aria-label={`Go to slide ${i + 1}`} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on small mobile */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 animate-float">
        <span className="text-muted-foreground text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>);

}
