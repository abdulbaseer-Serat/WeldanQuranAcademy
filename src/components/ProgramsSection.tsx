'use client';
import React from 'react';

interface ProgramsSectionProps {
  t: Record<string, any>;
}

export default function ProgramsSection({ t }: ProgramsSectionProps) {
  const programs = t.programs;

  return (
    <section id="programs" className="py-14 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 blob-green opacity-30 top-1/2 -translate-y-1/2 left-1/4" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-14 reveal-hidden">
          <div className="space-y-2 sm:space-y-3">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.4em]">{programs.badge}</span>
            <h2 className="font-display text-section-xl text-foreground">
              {programs.title1}{' '}
              <span className="text-gradient-gold">{programs.titleHighlight}</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed text-sm md:text-base">
            {programs.description}
          </p>
        </div>

        {/* Grid - stacks on mobile, complex grid on md+ */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-4">
          {/* Featured - Quran Recitation */}
          <div className="md:col-span-8 md:row-span-2 reveal-hidden group relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[460px] hover-lift cursor-pointer border border-border">
            <img
              src="https://images.unsplash.com/photo-1585555689348-f677658518ad"
              alt="Open Quran with Arabic calligraphy on wooden stand, warm candlelight"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 md:p-8">
              <div className="flex items-start justify-between">
                <span className="px-3 py-1 glass-card rounded-full text-xs font-bold text-accent uppercase tracking-widest">
                  {programs.featured}
                </span>
                <span className="text-muted-foreground text-sm font-display hidden sm:block" style={{ fontFamily: 'serif' }}>
                  تلاوة القرآن
                </span>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <h3 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  {programs.items.recitation.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-md leading-relaxed">
                  {programs.items.recitation.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-1 sm:mt-2">
                  <span className="glass-card px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold text-foreground">
                    ⏱ {programs.items.recitation.duration}
                  </span>
                  <span className="glass-card px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold text-foreground">
                    📖 {programs.items.recitation.level}
                  </span>
                  <span className="glass-card px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold text-foreground">
                    👥 {programs.items.recitation.students}
                  </span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-1 sm:mt-2 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-bold text-accent-foreground gradient-gold rounded-full hover:opacity-90 transition-opacity">
                  {programs.enrollNow}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Tajweed */}
          <div className="md:col-span-4 reveal-hidden group relative rounded-2xl overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px] hover-lift cursor-pointer border border-border">
            <img
              src="https://images.unsplash.com/photo-1710871570173-1b2be29b8230"
              alt="Islamic calligraphy book with Arabic text, dim library setting"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5">
              <span className="text-accent text-xs font-bold uppercase tracking-widest">أحكام التجويد</span>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1">{programs.items.tajweed.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{programs.items.tajweed.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-accent text-xs font-semibold">{programs.items.tajweed.students}</span>
                  <span className="text-border">·</span>
                  <span className="text-muted-foreground text-xs">{programs.items.tajweed.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hifz */}
          <div className="md:col-span-4 reveal-hidden group relative rounded-2xl overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px] hover-lift cursor-pointer border border-border">
            <img
              src="https://images.unsplash.com/photo-1562732425-21ac7a7aaf73"
              alt="Mosque interior with dramatic arched ceiling, dim atmospheric golden light"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5">
              <span className="text-accent text-xs font-bold uppercase tracking-widest">برنامج الحفظ</span>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1">{programs.items.hifz.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{programs.items.hifz.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-accent text-xs font-semibold">{programs.items.hifz.students}</span>
                  <span className="text-border">·</span>
                  <span className="text-muted-foreground text-xs">{programs.items.hifz.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Islamic Studies */}
          <div className="md:col-span-6 reveal-hidden group relative rounded-2xl overflow-hidden min-h-[160px] sm:min-h-[180px] hover-lift cursor-pointer border border-border">
            <img
              src="https://images.unsplash.com/photo-1560530569-2ac3709546c2"
              alt="Mosque at dusk silhouette against deep blue sky, atmospheric twilight"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 md:p-6">
              <span className="text-accent text-xs font-bold uppercase tracking-widest">الدراسات الإسلامية</span>
              <div className="flex items-end justify-between gap-3 sm:gap-4">
                <div>
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1">{programs.items.islamic.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 max-w-xs">{programs.items.islamic.description}</p>
                </div>
                <div className="glass-card rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-center shrink-0">
                  <p className="text-accent font-bold text-base sm:text-lg">{programs.items.islamic.students}</p>
                  <p className="text-muted-foreground text-xs">{programs.items.islamic.studentsLabel}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arabic Language */}
          <div className="md:col-span-6 reveal-hidden group relative rounded-2xl overflow-hidden min-h-[160px] sm:min-h-[180px] hover-lift cursor-pointer border border-border">
            <img
              src="https://images.unsplash.com/photo-1494797132951-4809bb905510"
              alt="Arabic calligraphy art on textured paper, warm dim lighting"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 md:p-6">
              <span className="text-accent text-xs font-bold uppercase tracking-widest">اللغة العربية</span>
              <div className="flex items-end justify-between gap-3 sm:gap-4">
                <div>
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1">{programs.items.arabic.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 max-w-xs">{programs.items.arabic.description}</p>
                </div>
                <div className="glass-card rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-center shrink-0">
                  <p className="text-accent font-bold text-base sm:text-lg">{programs.items.arabic.students}</p>
                  <p className="text-muted-foreground text-xs">{programs.items.arabic.studentsLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
