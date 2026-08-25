'use client';
import React, { useState } from 'react';

interface TestimonialsSectionProps {
  t: Record<string, any>;
}

const testimonialImages = {
  aisha: { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_107bcec45-1773085527984.png', alt: 'British woman with warm smile in professional setting' },
  ahmad: { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_12039f805-1763295833472.png', alt: 'Middle Eastern man with beard, professional portrait' },
  maria: { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1da5d9a93-1763299105159.png', alt: 'Latina woman with hijab, warm confident smile' },
  yusuf: { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_15a96c0f9-1763292513314.png', alt: 'South Asian man in business casual attire' }
};

const testimonialKeys = ['aisha', 'ahmad', 'maria', 'yusuf'] as const;

export default function TestimonialsSection({ t }: TestimonialsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const testimonials = t.testimonials;
  const activeKey = testimonialKeys[activeIdx];
  const activeTestimonial = testimonials.items[activeKey];
  const activeImage = testimonialImages[activeKey];

  return (
    <section id="testimonials" className="py-14 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 blob-gold opacity-10 bottom-0 right-1/3 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 reveal-hidden">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.4em]">{testimonials.badge}</span>
          <h2 className="font-display text-section-xl text-foreground mt-3">
            {testimonials.title1}{' '}
            <span className="text-gradient-gold">{testimonials.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-start reveal-hidden">
          {/* Main testimonial */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="glass-card rounded-3xl p-5 sm:p-7 md:p-10 relative overflow-hidden border border-border">
              <div
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-accent opacity-10 font-display font-black"
                style={{ fontSize: 'clamp(4rem, 15vw, 8rem)', lineHeight: 1 }}>
                &ldquo;
              </div>
              <div className="flex gap-1 mb-4 sm:mb-5">
                {[...Array(5)].map((_, i) =>
                <span key={i} className="text-accent text-base sm:text-lg">★</span>
                )}
              </div>
              <blockquote className="text-foreground text-sm sm:text-base md:text-xl leading-relaxed font-medium relative z-10">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 sm:gap-4 mt-5 sm:mt-7 pt-4 sm:pt-6 border-t border-border">
                <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-accent shrink-0">
                  <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="w-full h-full object-cover"
                    loading="lazy" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-foreground font-bold text-sm sm:text-base truncate">{activeTestimonial.name}</p>
                    <span className="text-base sm:text-lg shrink-0">
                      {activeKey === 'aisha' ? '🇬🇧' : activeKey === 'ahmad' ? '🇨🇦' : activeKey === 'maria' ? '🇦🇺' : '🇦🇪'}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm">{activeTestimonial.location}</p>
                </div>
                <div className="text-right hidden sm:block shrink-0">
                  <p className="text-accent text-xs font-bold uppercase tracking-wider">{activeTestimonial.program}</p>
                  {activeTestimonial.duration &&
                  <p className="text-muted-foreground text-xs">{activeTestimonial.duration}</p>
                  }
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-3 justify-center">
              {testimonialKeys.map((_, i) =>
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`transition-all duration-300 rounded-full ${
                activeIdx === i ? 'w-8 h-2 bg-accent' : 'w-2 h-2 bg-border hover:bg-muted-foreground'}`
                }
                aria-label={`Testimonial ${i + 1}`} />
              )}
            </div>
          </div>

          {/* Sidebar list - horizontal scroll on mobile, vertical on lg */}
          <div className="lg:col-span-5">
            <div className="flex lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 lg:overflow-x-visible snap-x snap-mandatory lg:snap-none">
              {testimonialKeys.map((key, i) => {
                const item = testimonials.items[key];
                const img = testimonialImages[key];
                const isActive = activeIdx === i;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveIdx(i)}
                    className={`shrink-0 w-64 sm:w-72 lg:w-full text-left rounded-2xl p-3 sm:p-4 transition-all duration-300 border snap-start ${
                    isActive ?
                    'border-accent glass-card shadow-lg' :
                    'border-border hover:border-accent/40 hover:bg-muted/30'}`
                    }>
                    <div className="flex items-center gap-3">
                      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 border border-border">
                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-foreground text-sm font-semibold truncate">{item.name}</p>
                          <span className="text-sm shrink-0">
                            {key === 'aisha' ? '🇬🇧' : key === 'ahmad' ? '🇨🇦' : key === 'maria' ? '🇦🇺' : '🇦🇪'}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-xs truncate">{item.program}</p>
                      </div>
                      <div className="flex gap-0.5 shrink-0">
                        {[...Array(5)].map((_, j) =>
                        <span key={j} className="text-accent text-xs">★</span>
                        )}
                      </div>
                    </div>
                    {isActive &&
                    <p className="text-muted-foreground text-xs mt-2 leading-relaxed line-clamp-2">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    }
                  </button>);
              })}
            </div>
          </div>
        </div>
      </div>
    </section>);

}
