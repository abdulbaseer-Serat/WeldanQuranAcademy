'use client';
import React from 'react';

interface PrayerTimesSectionProps {
  t: Record<string, any>;
}

const prayerTimes = [
  { key: 'fajr', time: '05:12', arabic: 'الفجر' },
  { key: 'dhuhr', time: '12:28', arabic: 'الظهر' },
  { key: 'asr', time: '15:45', arabic: 'العصر', active: true },
  { key: 'maghrib', time: '18:22', arabic: 'المغرب' },
  { key: 'isha', time: '19:48', arabic: 'العشاء' },
];

export default function PrayerTimesSection({ t }: PrayerTimesSectionProps) {
  const prayer = t.prayer;
  const stats = t.stats;

  return (
    <section className="relative bg-card border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-islamic-pattern opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Prayer Times */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div>
                <p className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-1">{prayer.title}</p>
                <p className="text-muted-foreground text-xs sm:text-sm">Tuesday, August 25, 2026</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-accent font-bold text-xl sm:text-2xl">09:26 AM</p>
                <p className="text-muted-foreground text-xs">{prayer.localTime}</p>
              </div>
            </div>
            {/* Prayer grid: 3+2 on mobile, 5 on sm+ */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {prayerTimes.map((p) => (
                <button
                  key={p.key}
                  className={`relative flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 md:p-4 rounded-xl transition-all duration-300 ${
                    p.active
                      ? 'border border-accent bg-accent/10 shadow-lg'
                      : 'border border-border hover:border-accent/40 hover:bg-muted/50'
                  }`}
                >
                  {p.active && (
                    <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-1.5 h-1.5 rounded-full bg-accent animate-pulse-gold" />
                  )}
                  <span className="text-muted-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    {prayer[p.key]}
                  </span>
                  <span className="text-foreground font-mono font-bold text-sm sm:text-base md:text-lg">{p.time}</span>
                  <span className="text-accent text-xs sm:text-sm" style={{ fontFamily: 'serif' }}>{p.arabic}</span>
                </button>
              ))}
            </div>
            <p className="text-muted-foreground text-xs mt-3 opacity-60">{prayer.note}</p>
          </div>

          {/* Academy Stats */}
          <div className="lg:col-span-5">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 sm:mb-6">{stats.title}</p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { value: '3,200+', label: stats.studentsEnrolled },
                { value: '45+', label: stats.countriesServed },
                { value: '28', label: stats.expertTeachers },
                { value: '12+', label: stats.yearsExcellence },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-3 sm:p-4 hover-lift">
                  <p className="font-display text-accent font-bold text-xl sm:text-2xl md:text-3xl">{stat.value}</p>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest mt-1 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
