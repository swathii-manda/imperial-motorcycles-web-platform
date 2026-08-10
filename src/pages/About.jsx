import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { PrimaryButton } from '../components/Button';
import { WORKSHOP_INFO } from '../data/workshopInfo';
import { Wrench, ShieldCheck, DollarSign, Flame, HeartHandshake, CheckCircle2, Phone, MapPin } from 'lucide-react';

export default function About() {
  const whyChooseUs = [
    {
      icon: Wrench,
      title: "EXPERT MECHANICS",
      desc: "Factory-trained technicians with 5 years of hands-on experience across Japanese superbikes, European exotics, and American V-Twins."
    },
    {
      icon: ShieldCheck,
      title: "PREMIUM PARTS",
      desc: "We stock only authentic OEM components, Motul synthetic lubricants, Brembo brake pads, and high-flow filters."
    },
    {
      icon: DollarSign,
      title: "TRANSPARENT PRICING",
      desc: "No hidden fees or surprise bill items. Detailed digital quotes provided prior to wrenching on your machine."
    },
    {
      icon: Flame,
      title: "PERFORMANCE EXPERTISE",
      desc: "Dyno tuning, ECU remapping, desmodromic valve setup, and custom track-day preparation."
    },
    {
      icon: HeartHandshake,
      title: "CUSTOMER FIRST",
      desc: "Direct communication with master mechanics, video progress updates, and a rider-first warranty policy."
    }
  ];

  return (
    <div className="bg-[#050505] text-white">
      <PageHero
        title="ABOUT US"
        subtitle="Passion for Bikes. Commitment to Excellence."
        backgroundImage="https://images.unsplash.com/photo-1515777315835-281b94c9589f?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Main Story & Workshop Overview */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="space-y-6">
            <span className="text-[#D4AF37] font-display font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase block">
              OUR WORKSHOP STORY
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-tight">
              CRAFTING PERFORMANCE & TRUST ON TWO WHEELS
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm sm:text-base leading-relaxed font-body">
              AD Mechanic Workshop in Jagtial was built with a clear purpose: to provide motorcycle riders with an uncompromising workshop where precision engineering, honest guidance, and rider passion come together.
            </p>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-body">
              We handle all motorcycle brands and models — from everyday commuters and scooters to high-performance superbikes, adventure machines, and custom cafe racers.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-300">
                  <strong className="text-white font-display uppercase tracking-wider">OUR MISSION:</strong> To deliver uncompromising mechanical quality, maximum power, and complete safety for every bike that enters our bay.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-300">
                  <strong className="text-white font-display uppercase tracking-wider">OUR GUARANTEE:</strong> Transparent diagnostics, genuine parts, fair upfront quotes, and a 90-day warranty on all repairs.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group rounded-sm overflow-hidden border border-[#2a2a2a] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop"
              alt="AD Mechanic Workshop"
              className="w-full h-[450px] sm:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-[#050505]/90 border border-[#D4AF37] p-4 rounded-sm backdrop-blur-md">
              <span className="font-display font-bold text-xs text-[#D4AF37] uppercase tracking-wider block">
                AD MECHANIC WORKSHOP - JAGTIAL
              </span>
              <p className="text-xs text-gray-300 mt-1">
                Precision Repairs & Performance Tuning Facility
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0a0a0a] border-y border-[#222222] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {WORKSHOP_INFO.stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <span className="font-display font-extrabold text-3xl sm:text-5xl text-[#D4AF37] block">
                {stat.value}
              </span>
              <span className="text-xs text-gray-300 font-display font-bold uppercase tracking-widest block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          subtitle="OUR PROMISE"
          title="WHY CHOOSE US"
          description="We treat every motorcycle with the same extreme care and attention to detail as if it were our own personal machine."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#121212] border border-[#222222] hover:border-[#D4AF37] p-7 rounded-sm space-y-4 transition-all duration-300 gold-glow-hover"
              >
                <div className="w-12 h-12 rounded-sm bg-[#0a0a0a] border border-[#2a2a2a] flex items-center justify-center text-[#D4AF37]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>
            );
          })}

          {/* Master Mechanic Card */}
          <div className="bg-[#121212] border border-[#D4AF37] p-7 rounded-sm space-y-4 gold-glow">
            <div className="w-12 h-12 rounded-sm bg-[#D4AF37] text-black flex items-center justify-center">
              <Wrench className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide">
              LEAD MECHANIC: B. ADHARSH
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
              Head of AD Mechanic Workshop in Jagtial. Specialist in ECU tuning, engine valve timing, and quick-turnaround repairs.
            </p>
          </div>
        </div>

        <div className="mt-14 text-center">
          <PrimaryButton to="/contact">
            BOOK A SERVICE WITH OUR TEAM
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
}
