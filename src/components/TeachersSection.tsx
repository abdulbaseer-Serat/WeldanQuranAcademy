'use client';
import React from 'react';

interface TeachersSectionProps {
  t: Record<string, any>;
}

const teacherImages = [
{ key: 'omar', flag: '🇪🇬', src: 'https://img.rocket.new/generatedImages/rocket_gen_img_16d8d15dd-1766906480232.png', alt: 'Bearded scholar in white thobe sitting at desk with Quran books, warm library setting' },
{ key: 'fatima', flag: '🇸🇦', src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1628a598e-1774412771188.png', alt: 'Professional Muslim woman educator in hijab smiling warmly' },
{ key: 'bilal', flag: '🇵🇰', src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cffc8c79-1764695703830.png', alt: 'Young male scholar with beard in traditional Islamic clothing' },
{ key: 'amina', flag: '🇲🇾', src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a050cb7c-1772374311063.png', alt: 'Professional Muslim woman academic in hijab at desk with books' }];


export default function TeachersSection({ t }: TeachersSectionProps) {
  const teachers = t.teachers;

  return (
    <section id="teachers" className="py-14 md:py-24 relative overflow-hidden bg-card">
      <div className="absolute inset-0 bg-islamic-pattern opacity-30" />
      <div className="absolute top-0 right-1/4 w-96 h-96 blob-gold opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 reveal-hidden">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.4em]">{teachers.badge}</span>
          <h2 className="font-display text-section-xl text-foreground mt-3">
            {teachers.title1}{' '}
            <span className="text-gradient-gold">{teachers.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mt-4 leading-relaxed text-sm md:text-base">
            {teachers.description}
          </p>
        </div>

        {/* Teacher Cards - 2 cols on mobile, 4 on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {teacherImages.map((teacher, idx) => {
            const info = teachers.items[teacher.key];
            return (
              <div
                key={teacher.key}
                className="reveal-hidden group relative rounded-2xl overflow-hidden border border-border hover-lift cursor-pointer bg-background"
                style={{ transitionDelay: `${idx * 80}ms` }}>
                
                {/* Image */}
                <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={teacher.src}
                    alt={teacher.alt}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 glass-card rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 flex items-center gap-1">
                    <span className="text-accent text-xs">★</span>
                    <span className="text-foreground text-xs font-bold">
                      {teacher.key === 'omar' ? '4.9' : teacher.key === 'fatima' ? '5.0' : teacher.key === 'bilal' ? '4.8' : '4.9'}
                    </span>
                  </div>
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 text-base sm:text-lg">{teacher.flag}</div>
                </div>

                {/* Info */}
                <div className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3">
                  <div>
                    <h3 className="font-display font-bold text-foreground text-sm sm:text-base md:text-lg leading-tight">{info.name}</h3>
                    <p className="text-accent text-xs font-semibold mt-0.5">{info.role}</p>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-muted-foreground text-xs mt-0.5">📚</span>
                      <span className="text-muted-foreground text-xs leading-tight">{info.specialty}</span>
                    </div>
                    <div className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-muted-foreground text-xs mt-0.5">🎓</span>
                      <span className="text-muted-foreground text-xs leading-tight">{info.university}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <p className="text-accent font-bold text-xs sm:text-sm">{info.students}</p>
                      <p className="text-muted-foreground text-xs">{teachers.studentsTaught}</p>
                    </div>
                    <div>
                      <p className="text-foreground font-bold text-xs sm:text-sm">{info.years}</p>
                      <p className="text-muted-foreground text-xs">{teachers.experience}</p>
                    </div>
                  </div>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-16 transition-all duration-500">
                    <a
                      href="#contact"
                      className="flex items-center justify-center gap-2 w-full py-2 sm:py-2.5 mt-1 sm:mt-2 text-xs font-bold text-accent-foreground gradient-gold rounded-xl">
                      {teachers.bookClass}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>);

          })}
        </div>

        {/* Footer note */}
        <div className="text-center mt-8 sm:mt-10 reveal-hidden">
          <p className="text-muted-foreground text-sm mb-4">{teachers.note}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold border border-accent text-accent rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-200">
            {teachers.viewAll}
          </a>
        </div>
      </div>
    </section>);

}
