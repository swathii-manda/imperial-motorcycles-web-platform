import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ArrowRight, Wrench, ShieldCheck, Zap, HeartHandshake, Phone, MapPin, CheckCircle } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../components/Button';
import FeatureItem from '../components/FeatureItem';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';
import TestimonialCard from '../components/TestimonialCard';

import { SERVICES } from '../data/services';
import { REVIEWS } from '../data/reviews';
import { WORKSHOP_INFO } from '../data/workshopInfo';

export default function Home() {
  // Take 8 featured services for the home grid
  const homeServices = SERVICES.slice(0, 8);

  return (
    <div className="bg-[#050505] text-white overflow-hidden">

      {/* ========================================== */}
      {/* 1. CINEMATIC HERO SECTION */}
      {/* ========================================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#222222] overflow-hidden">

        {/* Background Workshop Image with Overlay & Vignette */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 8, ease: 'easeOut' }}
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1920&auto=format&fit=crop"
            alt="AD Mechanic Workshop"
            className="w-full h-full object-cover object-center opacity-40"
          />
          {/* Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.85)_100%)]" />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pt-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            {/* Bold "AD MECHANIC WORKSHOP" Title */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-white tracking-wider uppercase select-none drop-shadow-2xl">
                AD MECHANIC
              </h1>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#D4AF37] tracking-[0.35em] uppercase -mt-1 sm:-mt-3 drop-shadow-md">
                WORKSHOP
              </h2>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto uppercase tracking-wider font-display font-medium leading-relaxed px-4"
          >
            “JAGTIAL’S PREMIER MOTORCYCLE WORKSHOP FOR REPAIRS, SERVICE, ENGINE OVERHAULS & PERFORMANCE TUNING.”
          </motion.p>

          {/* Badge line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 bg-[#111]/90 border border-[#D4AF37]/60 px-4 py-2 rounded-sm text-xs text-gray-200 font-display uppercase tracking-wider gold-glow"
          >
            <span className="text-[#D4AF37] font-bold">EXPERT MOTORCYCLE SERVICE</span>
            <span className="text-gray-500">•</span>
            <span className="text-white font-extrabold">JAGTIAL, TELANGANA</span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <PrimaryButton to="/contact" icon={ArrowRight}>
              LET’S TALK
            </PrimaryButton>
            <SecondaryButton to="/services">
              SERVICES
            </SecondaryButton>
          </motion.div>

          {/* Reviews Star Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-6 inline-flex flex-col items-center space-y-1.5"
          >
            <div className="flex items-center space-x-1.5 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4AF37] drop-shadow" />
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-display font-bold tracking-widest uppercase">
              <span className="text-[#D4AF37]">4.9 AVERAGE RATING</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">FROM OVER 340+ REVIEWS</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 2. FEATURE STRIP (4 BLOCKS BELOW HERO) */}
      {/* ========================================== */}
      <section className="bg-[#0a0a0a] border-b border-[#222222] py-2 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureItem
              icon="Wrench"
              title="EXPERT MECHANICS"
              description="Master mechanic with 5 years of hands-on experience on all Indian & imported bikes."
              showBorder={true}
            />
            <FeatureItem
              icon="ShieldCheck"
              title="QUALITY PARTS"
              description="We use only premium quality OEM parts, fluids, and full-synthetic oils."
              showBorder={true}
            />
            <FeatureItem
              icon="Zap"
              title="PERFORMANCE"
              description="Enhance your bike's power, throttle response, safety, and exhaust sound."
              showBorder={true}
            />
            <FeatureItem
              icon="HeartHandshake"
              title="CUSTOMER CARE"
              description="Transparent quotes, video diagnostics, and true honest care for your ride."
              showBorder={false}
            />
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. SERVICES PREVIEW SECTION */}
      {/* ========================================== */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="WHAT WE DO"
          title="OUR SERVICES"
          description="From routine maintenance to full custom builds, desmodromic valve setups and performance tuning — we do it all."
        />

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-14 text-center">
          <PrimaryButton to="/services" icon={ArrowRight}>
            VIEW ALL SERVICES
          </PrimaryButton>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. ABOUT PREVIEW SECTION (SPLIT) */}
      {/* ========================================== */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a] border-y border-[#222222] px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Image */}
          <div className="relative group rounded-sm overflow-hidden border border-[#262626]">
            <img
              src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop"
              alt="Custom Motorcycle in Workshop"
              className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          {/* Right Text Content */}
          <div className="space-y-6">
            <span className="text-[#D4AF37] font-display font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase block">
              ABOUT AD MECHANIC WORKSHOP
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide uppercase leading-tight">
              EXPERT HANDS.<br />
              <span className="text-gold-gradient">UNMATCHED PERFORMANCE.</span>
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm sm:text-base leading-relaxed font-body">
              AD Mechanic Workshop in Jagtial is trusted by hundreds of motorcycle owners across the region. From daily commuter tune-ups and carburetor adjustments to high-compression engine overhauls and custom modifications, we handle every bike with master craftsmanship.
            </p>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-body">
              Our workshop is fully equipped with hydraulic motorcycle lifts, precision engine teardown tables, digital battery analyzers, and original OEM replacement parts.
            </p>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#222222]">
              {WORKSHOP_INFO.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#D4AF37] block">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-gray-400 font-display font-semibold uppercase tracking-wider block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <PrimaryButton to="/about" icon={ArrowRight}>
                LEARN MORE
              </PrimaryButton>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 4B. AD MECHANIC WORKSHOP / B. ADHARSH SPOTLIGHT */}
      {/* ========================================== */}
      <section className="py-16 bg-[#121212] border-b border-[#222222] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-[#0a0a0a] border border-[#2a2a2a] p-6 sm:p-10 rounded-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 gold-glow">

          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] rounded-sm text-xs font-display font-semibold uppercase">
              <Wrench className="w-3.5 h-3.5" />
              <span>FEATURED WORKSHOP PARTNER BRANCH</span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-wide">
              MASTER CRAFTSMANSHIP & DIAGNOSTICS
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Specializing in high-performance sportbike repairs, custom electrical harness re-wiring, engine overhauls and emergency diagnostics.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
              <a
                href={`tel:${WORKSHOP_INFO.phone}`}
                className="inline-flex items-center gap-2 text-black bg-[#D4AF37] hover:bg-[#E5C45A] font-display font-bold px-4 py-2 rounded-sm transition-colors uppercase"
              >
                <Phone className="w-4 h-4" />
                <span>CALL WORKSHOP: {WORKSHOP_INFO.phone}</span>
              </a>

              <div className="text-gray-400 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Jagtial Bypass Road</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-[#D4AF37] bg-black p-1 flex items-center justify-center relative overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=400&auto=format&fit=crop"
              alt="B. Adharsh AD Mechanic Workshop"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* 5. GALLERY PREVIEW */}
      {/* ========================================== */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="OUR CRAFT"
          title="OUR WORK"
          description="Take a look behind the scenes at our latest custom cafe racer builds, superbike engine rebuilds, and workshop projects."
        />

        <GalleryGrid limit={6} />

        <div className="mt-12 text-center">
          <SecondaryButton to="/gallery" icon={ArrowRight}>
            VIEW FULL GALLERY
          </SecondaryButton>
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. REVIEWS & TESTIMONIALS */}
      {/* ========================================== */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a] border-y border-[#222222] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="TESTIMONIALS"
            title="WHAT RIDERS SAY"
            description="Our reputation is built on rider trust, precision workmanship, and honest pricing."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. CINEMATIC CTA SECTION */}
      {/* ========================================== */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#222222] overflow-hidden text-center">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1920&auto=format&fit=crop"
            alt="Motorcycle on open road"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="text-[#D4AF37] font-display font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase block">
            READY FOR THE ROAD?
          </span>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase leading-tight">
            KEEP YOUR RIDE<br />
            <span className="text-gold-gradient">RUNNING ITS BEST.</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-body">
            Book your next service, oil change, or performance tuning session with AD Mechanic Workshop.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryButton to="/contact" icon={ArrowRight}>
              BOOK A SERVICE
            </PrimaryButton>
            <SecondaryButton to="/contact">
              CONTACT US
            </SecondaryButton>
          </div>
        </div>

      </section>

    </div>
  );
}
