import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';
import { SERVICES } from '../data/services';
import { Search, Wrench, Shield, CheckCircle } from 'lucide-react';
import { PrimaryButton } from '../components/Button';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = SERVICES.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#050505] text-white">
      <PageHero
        title="OUR SERVICES"
        subtitle="From routine maintenance to full custom builds, we do it all."
        backgroundImage="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="w-5 h-5 text-[#D4AF37] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. oil, engine, brake, custom...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#121212] border border-[#2a2a2a] focus:border-[#D4AF37] focus:outline-none pl-11 pr-4 py-3.5 rounded-sm text-sm text-white placeholder-gray-500 transition-colors"
            />
          </div>
        </div>

        <SectionHeading
          subtitle="COMPLETE WORKSHOP CAPABILITIES"
          title="ALL MOTORCYCLE SERVICES"
          description="Every service includes a complimentary multi-point safety check and digital health report."
        />

        {/* Services Grid (12 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p>No services found matching "{searchTerm}". Try another search term or view all services.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 text-[#D4AF37] underline font-display text-xs uppercase"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Workshop Guarantee Banner */}
        <div className="mt-20 bg-[#101010] border border-[#262626] p-8 sm:p-10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 gold-glow">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#D4AF37] font-display font-bold text-xs uppercase">
              <Shield className="w-5 h-5" />
              <span>THE AD MECHANIC WORKSHOP GUARANTEE</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl text-white uppercase">
              ALL WORK IS BACKED BY A 90-DAY / 3,000 KM WARRANTY
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl">
              We stand behind our work 100%. If any issue arises after your service, bring your motorcycle back and our senior mechanics will resolve it immediately.
            </p>
          </div>

          <PrimaryButton to="/contact">
            BOOK A SERVICE NOW
          </PrimaryButton>
        </div>

      </section>
    </div>
  );
}
