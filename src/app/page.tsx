'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Language, getTranslations, getLanguageDir } from '../lib/i18n';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PrayerTimesSection from '../components/PrayerTimesSection';
import ProgramsSection from '../components/ProgramsSection';
import TeachersSection from '../components/TeachersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const t = getTranslations(language);
  const dir = getLanguageDir(language);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.reveal-hidden');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <div dir={dir} className="relative min-h-screen bg-background overflow-x-hidden">
      <Header t={t} language={language} setLanguage={setLanguage} isScrolled={isScrolled} />
      <HeroSection t={t} />
      <PrayerTimesSection t={t} />
      <ProgramsSection t={t} />
      <TeachersSection t={t} />
      <TestimonialsSection t={t} />
      <PricingSection t={t} />
      <ContactSection t={t} />
      <FooterSection t={t} />
      <WhatsAppButton t={t} />
    </div>
  );
}
