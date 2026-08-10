import React from 'react';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import { WORKSHOP_INFO } from '../data/workshopInfo';
import { MapPin, Phone, Mail, Clock, Wrench, ShieldCheck, Navigation, Instagram, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[#050505] text-white">
      <PageHero
        title="CONTACT US"
        subtitle="We'd love to hear from you."
        backgroundImage="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: WORKSHOP CONTACT INFORMATION */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[#D4AF37] font-display font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase block">
                GET IN TOUCH
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-wide mt-1">
                OUR WORKSHOP
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                Visit our Jagtial facility led by Master Mechanic B. Adharsh for service, repairs, engine overhauls, or custom work.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Jagtial AD Mechanic Workshop */}
              <div className="bg-[#121212] border border-[#D4AF37] p-6 rounded-sm space-y-4 relative overflow-hidden gold-glow">
                <div className="flex items-center justify-between border-b border-[#222] pb-3">
                  <h3 className="font-display font-extrabold text-base text-white uppercase tracking-wider flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-[#D4AF37]" /> AD MECHANIC WORKSHOP
                  </h3>
                  <span className="text-[10px] bg-[#D4AF37] text-black px-2.5 py-0.5 rounded-sm font-display font-bold">JAGTIAL HQ</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-display block font-bold">MASTER MECHANIC & OWNER</span>
                    <strong className="text-white text-base font-display uppercase tracking-wide">B. ADHARSH</strong>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-display uppercase">LOCATION ADDRESS</strong>
                      <span className="text-gray-300">Thapovan High School Bypass Road, Jagtial, Telangana</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <div>
                      <strong className="text-white block font-display uppercase">DIRECT PHONE</strong>
                      <a href="tel:7386345346" className="text-[#D4AF37] text-base hover:underline font-extrabold">
                        7386345346
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email & Hours Box */}
              <div className="bg-[#121212] border border-[#262626] p-6 rounded-sm space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <strong className="text-white block font-display uppercase">EMAIL US</strong>
                    <a href={`mailto:${WORKSHOP_INFO.email}`} className="text-gray-300 hover:text-[#D4AF37]">
                      {WORKSHOP_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="border-t border-[#222] pt-3 flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <strong className="text-white block font-display uppercase">INSTAGRAM</strong>
                    <a 
                      href={WORKSHOP_INFO.instagram} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[#D4AF37] font-semibold hover:underline"
                    >
                      @{WORKSHOP_INFO.instagramHandle}
                    </a>
                  </div>
                </div>

                <div className="border-t border-[#222] pt-3 flex items-center gap-3">
                  <Globe className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <strong className="text-white block font-display uppercase">COMPANY WEBSITE</strong>
                    <a 
                      href={WORKSHOP_INFO.companyUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[#D4AF37] font-semibold hover:underline"
                    >
                      {WORKSHOP_INFO.company}
                    </a>
                  </div>
                </div>

                <div className="border-t border-[#222] pt-3 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="text-white block font-display uppercase">OPERATING HOURS</strong>
                    <p className="text-gray-300">{WORKSHOP_INFO.mainBranch.hours.weekday}</p>
                    <p className="text-gray-300">{WORKSHOP_INFO.mainBranch.hours.saturday}</p>
                    <p className="text-gray-500">{WORKSHOP_INFO.mainBranch.hours.sunday}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* BOTTOM: LOCATION MAP SECTION */}
        <div className="pt-12 border-t border-[#222222]">
          <SectionHeading
            subtitle="FIND OUR WORKSHOP"
            title="LOCATION MAP"
            description="Equipped with heavy hydraulic lifts, computerized dynos, and specialized engine overhaul tools."
          />

          <div className="relative rounded-sm overflow-hidden border border-[#2a2a2a] bg-[#0a0a0a] min-h-[350px] sm:min-h-[420px] flex items-center justify-center">
            {/* Styled Map Graphic / Visual Representation */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/90" />

            {/* Interactive Location Pin Card Overlay */}
            <div className="relative z-10 max-w-lg w-full mx-auto p-6 text-center">
              <div className="bg-[#121212]/95 border border-[#D4AF37] p-6 rounded-sm backdrop-blur-md space-y-4 gold-glow shadow-2xl">
                <div className="flex items-center justify-center gap-2 text-[#D4AF37] font-display font-bold text-xs uppercase">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>LOCATION DIRECTIONS</span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-body">
                  Thapovan High School Bypass Road, Jagtial, Telangana
                </p>

                <div className="pt-2 flex items-center justify-center gap-3">
                  <a
                    href="tel:7386345346"
                    className="inline-flex items-center gap-2 text-xs font-display font-extrabold uppercase tracking-widest text-black bg-[#D4AF37] hover:bg-[#E5C45A] px-5 py-2.5 rounded-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>CALL US</span>
                  </a>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-white border border-[#333] hover:border-[#D4AF37] px-5 py-2.5 rounded-sm transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-[#D4AF37]" />
                    <span>GET DIRECTIONS</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
