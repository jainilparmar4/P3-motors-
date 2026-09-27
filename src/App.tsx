/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, JobCardStatus } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { ServicesBento } from './components/ServicesBento';
import { CostEstimator } from './components/CostEstimator';
import { ServicePackages } from './components/ServicePackages';
import { TrackStatus } from './components/TrackStatus';
import { BookingForm } from './components/BookingForm';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';

const STORAGE_KEY = 'p3_motors_user_bookings';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [userBookings, setUserBookings] = useState<JobCardStatus[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Prefill states when user selects a service or estimate
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledVehicleType, setPrefilledVehicleType] = useState<string>('');
  const [prefilledEstimate, setPrefilledEstimate] = useState<number | undefined>(undefined);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'hi' ? 'en' : 'hi'));
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookFromService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    scrollToSection('book');
  };

  const handleBookWithEstimate = (carType: string, selectedItems: string[], totalCost: number) => {
    setPrefilledVehicleType(carType);
    setPrefilledService(selectedItems.join(', '));
    setPrefilledEstimate(totalCost);
    scrollToSection('book');
  };

  const handleSelectPackage = (packageName: string, price: number) => {
    setPrefilledService(`Package: ${packageName}`);
    setPrefilledEstimate(price);
    scrollToSection('book');
  };

  const handleBookingSuccess = (newJobCard: JobCardStatus) => {
    setUserBookings((prev) => {
      const updated = [newJobCard, ...prev];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-orange-600 selection:text-white">
      {/* Top Navigation */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onNavigate={scrollToSection}
        onBookClick={() => scrollToSection('book')}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onBookClick={() => scrollToSection('book')}
          onExploreServices={() => scrollToSection('services')}
          onOpenEstimator={() => scrollToSection('estimator')}
        />

        {/* 24/7 Roadside Emergency Banner */}
        <EmergencyBanner lang={lang} />

        {/* Workshop Core Services Bento Grid */}
        <ServicesBento
          lang={lang}
          onSelectServiceToBook={handleBookFromService}
        />

        {/* Interactive Cost Estimator */}
        <CostEstimator
          lang={lang}
          onBookWithEstimate={handleBookWithEstimate}
        />

        {/* Periodic Service Packages */}
        <ServicePackages
          lang={lang}
          onSelectPackage={handleSelectPackage}
        />

        {/* Real-time Vehicle Job Card Tracking */}
        <TrackStatus
          lang={lang}
          userBookings={userBookings}
        />

        {/* Online Appointment Booking Form */}
        <BookingForm
          lang={lang}
          prefilledService={prefilledService}
          prefilledVehicleType={prefilledVehicleType}
          prefilledEstimate={prefilledEstimate}
          onBookingSuccess={handleBookingSuccess}
          onNavigateToTrack={() => scrollToSection('track')}
        />

        {/* Testimonials and Proof */}
        <Testimonials lang={lang} />

        {/* Contact and Workshop Location */}
        <ContactSection lang={lang} />
      </main>

      {/* Clean Footer */}
      <Footer lang={lang} onNavigate={scrollToSection} />

      {/* Floating 1-tap call button */}
      <FloatingCallButton lang={lang} />
    </div>
  );
}
