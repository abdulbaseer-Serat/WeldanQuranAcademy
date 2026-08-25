'use client';
import React, { useState } from 'react';

interface ContactSectionProps {
  t: Record<string, any>;
}

export default function ContactSection({ t }: ContactSectionProps) {
  const contact = t.contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-14 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left side */}
          <div className="space-y-6 sm:space-y-8 reveal-hidden">
            <div className="space-y-2 sm:space-y-3">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.4em]">{contact.badge}</span>
              <h2 className="font-display text-section-xl text-foreground">
                {contact.title1}{' '}
                <span className="text-gradient-gold">{contact.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-md">
                {contact.description}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 sm:gap-4 glass-card rounded-xl p-3 sm:p-4">
                <span className="text-xl sm:text-2xl">📱</span>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest font-semibold">{contact.whatsapp}</p>
                  <a
                    href="https://wa.me/15552345678"
                    className="text-foreground text-sm font-medium hover:text-accent transition-colors"
                  >
                    +1 (555) 234-5678
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 glass-card rounded-xl p-3 sm:p-4">
                <span className="text-xl sm:text-2xl">✉️</span>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest font-semibold">{contact.email}</p>
                  <a
                    href="mailto:enroll@weldanquran.com"
                    className="text-foreground text-sm font-medium hover:text-accent transition-colors break-all"
                  >
                    enroll@weldanquran.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 glass-card rounded-xl p-3 sm:p-4">
                <span className="text-xl sm:text-2xl">🕐</span>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest font-semibold">{contact.available}</p>
                  <p className="text-foreground text-sm font-medium">{contact.hours}</p>
                </div>
              </div>
            </div>

            {/* Bismillah */}
            <div className="relative h-32 sm:h-40 overflow-hidden rounded-2xl border border-border">
              <div className="absolute inset-0 gradient-gold opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <p className="text-accent font-display text-3xl sm:text-4xl" style={{ fontFamily: 'serif' }}>
                    {contact.bismillah}
                  </p>
                  <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                    {contact.bismillahTranslation}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-hidden">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 border border-border"
            >
              <div className="space-y-1">
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">{contact.form.title}</h3>
                <p className="text-muted-foreground text-sm">{contact.form.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5">
                  <label className="text-foreground text-xs font-semibold uppercase tracking-wider">
                    {contact.form.fullName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={contact.form.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-foreground text-xs font-semibold uppercase tracking-wider">
                    {contact.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={contact.form.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5">
                  <label className="text-foreground text-xs font-semibold uppercase tracking-wider">
                    {contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    placeholder={contact.form.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-foreground text-xs font-semibold uppercase tracking-wider">
                    {contact.form.program}
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                    style={{ appearance: 'none' }}
                  >
                    <option value="">{contact.form.programDefault}</option>
                    <option value="quran-recitation">{contact.form.programs.recitation}</option>
                    <option value="tajweed">{contact.form.programs.tajweed}</option>
                    <option value="hifz">{contact.form.programs.hifz}</option>
                    <option value="islamic-studies">{contact.form.programs.islamic}</option>
                    <option value="arabic">{contact.form.programs.arabic}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-foreground text-xs font-semibold uppercase tracking-wider">
                  {contact.form.message}
                </label>
                <textarea
                  rows={4}
                  placeholder={contact.form.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 text-sm font-bold text-accent-foreground gradient-gold rounded-xl hover:opacity-90 transition-opacity duration-200 tracking-wide"
              >
                {contact.form.submit}
              </button>

              <p className="text-muted-foreground text-xs text-center">
                {contact.form.privacy}{' '}
                <a href="#" className="text-accent hover:underline">{contact.form.privacyLink}</a>
                {contact.form.privacyEnd}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
