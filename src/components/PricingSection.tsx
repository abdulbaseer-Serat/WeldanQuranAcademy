'use client';
import React from 'react';

interface PricingSectionProps {
  t: Record<string, any>;
}

export default function PricingSection({ t }: PricingSectionProps) {
  const pricing = t.pricing;

  const plans = [
    {
      key: 'starter',
      plan: pricing.plans.starter,
      isPopular: false,
      btnText: pricing.getStarted,
      btnClass: 'border-2 border-border text-foreground hover:border-accent hover:text-accent',
    },
    {
      key: 'scholar',
      plan: pricing.plans.scholar,
      isPopular: true,
      btnText: pricing.enrollNow,
      btnClass: 'gradient-gold text-accent-foreground hover:opacity-90',
    },
    {
      key: 'family',
      plan: pricing.plans.family,
      isPopular: false,
      btnText: pricing.contactUs,
      btnClass: 'border-2 border-border text-foreground hover:border-accent hover:text-accent',
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div id="pricing" className="py-14 md:py-24 bg-card border-t border-border">
        <div className="absolute inset-0 bg-islamic-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12 reveal-hidden">
            <div className="space-y-2 sm:space-y-3">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.4em]">{pricing.badge}</span>
              <h2 className="font-display text-section-xl text-foreground">
                {pricing.title1}{' '}
                <span className="text-gradient-gold">{pricing.titleHighlight}</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm md:text-base">
              {pricing.description}
            </p>
          </div>

          {/* Plans - single col on mobile, 3 cols on md+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {plans.map(({ key, plan, isPopular, btnText, btnClass }, idx) => (
              <div
                key={key}
                className={`reveal-hidden relative rounded-2xl border flex flex-col transition-all duration-300 hover-lift ${
                  isPopular
                    ? 'border-accent bg-primary/20 shadow-2xl shadow-accent/10 sm:col-span-2 md:col-span-1'
                    : 'border-border bg-card hover:border-accent/40'
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-gold text-accent-foreground text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                    {pricing.mostPopular}
                  </div>
                )}
                <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-1">
                  <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                    <div>
                      <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">{plan.tier}</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">{plan.name}</h3>
                        <span className="text-accent text-sm" style={{ fontFamily: 'serif' }}>{plan.arabicName}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
                    <div className="flex items-end gap-1">
                      <span className="font-display text-4xl sm:text-5xl font-black text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground text-sm mb-2">{pricing.perMonth}</span>
                    </div>
                  </div>

                  <div className="h-px bg-border mb-5 sm:mb-6" />

                  <ul className="space-y-2.5 sm:space-y-3 flex-1">
                    {plan.features.map((feature: string) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="w-4 h-4 rounded-full gradient-gold flex items-center justify-center text-accent-foreground text-xs font-black shrink-0 mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                    {plan.notIncluded?.map((feature: string) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground opacity-40">
                        <span className="w-4 h-4 rounded-full border border-border flex items-center justify-center text-xs shrink-0 mt-0.5">✕</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-5 sm:mt-6 w-full py-3 sm:py-3.5 text-sm font-bold rounded-xl text-center transition-all duration-200 tracking-wide ${btnClass}`}
                  >
                    {btnText}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 reveal-hidden">
            {Object.values(pricing.guarantees).map((g: any) => (
              <div key={g} className="flex items-center gap-2 text-muted-foreground text-xs">
                <span className="text-accent">✓</span>
                <span>{g}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
