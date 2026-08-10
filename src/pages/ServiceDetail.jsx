import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../data/services';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';
import { CheckCircle2, Clock, DollarSign, Wrench, ArrowLeft, ShieldCheck } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../components/Button';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  const scrollToBooking = () => {
    const element = document.getElementById('booking-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#050505] text-white">
      <PageHero
        title={service.title}
        subtitle={service.shortDescription}
        backgroundImage={service.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        
        {/* Back Link */}
        <button
          onClick={() => navigate('/services')}
          className="inline-flex items-center gap-2 text-xs font-display font-semibold text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL SERVICES</span>
        </button>

        {/* Main Service Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Image + Full Description + Included Items) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative rounded-sm overflow-hidden border border-[#2a2a2a] shadow-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[350px] sm:h-[450px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#050505]/90 border border-[#D4AF37] px-3 py-1 rounded-sm text-xs font-display font-bold text-[#D4AF37] uppercase tracking-wider">
                CERTIFIED WORKSHOP PROCEDURE
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide">
                SERVICE OVERVIEW
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-body">
                {service.fullDescription}
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-[#121212] border border-[#242424] p-6 sm:p-8 rounded-sm space-y-4">
              <h3 className="font-display font-bold text-lg text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[#D4AF37]" />
                WHAT'S INCLUDED IN THIS SERVICE
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.includedItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-300 font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Key Details Card & Booking Callout) */}
          <div className="lg:col-span-5 space-y-8 sticky top-24">
            <div className="bg-[#121212] border border-[#D4AF37] p-8 rounded-sm space-y-6 gold-glow">
              <div className="border-b border-[#262626] pb-4">
                <span className="text-[10px] text-[#D4AF37] font-display font-bold uppercase tracking-widest block">
                  SERVICE SUMMARY
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white uppercase mt-1">
                  {service.title}
                </h3>
              </div>

              {/* Price & Time */}
              <div className="grid grid-cols-2 gap-4 bg-[#080808] p-4 rounded-sm border border-[#222]">
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-500 font-display font-semibold uppercase tracking-wider block">
                    STARTING FROM
                  </span>
                  <span className="font-display font-extrabold text-2xl text-[#D4AF37]">
                    ${service.startingPrice}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-gray-500 font-display font-semibold uppercase tracking-wider block">
                    ESTIMATED TIME
                  </span>
                  <span className="font-display font-bold text-base text-white flex items-center gap-1 mt-1">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    {service.estimatedTime}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <PrimaryButton onClick={scrollToBooking} className="w-full">
                  BOOK THIS SERVICE NOW
                </PrimaryButton>
                <SecondaryButton to="/contact" className="w-full">
                  ASK A MECHANIC
                </SecondaryButton>
              </div>

              <div className="pt-2 text-[11px] text-gray-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Includes 42-Point Diagnostic Inspection & Road Test</span>
              </div>
            </div>
          </div>

        </div>

        {/* Booking Form Section */}
        <div id="booking-section" className="pt-12">
          <ContactForm preselectedService={service.id} />
        </div>

        {/* Related Services */}
        <div className="pt-12 border-t border-[#222222]">
          <SectionHeading
            subtitle="EXPLORE MORE"
            title="RELATED SERVICES"
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((s, idx) => (
              <ServiceCard key={s.id} service={s} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
