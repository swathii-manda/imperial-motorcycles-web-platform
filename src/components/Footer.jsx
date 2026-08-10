import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, Wrench, Shield, CheckCircle } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { WORKSHOP_INFO } from '../data/workshopInfo';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <footer className="bg-[#050505] text-gray-400 border-t border-[#1a1a1a] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1f1f1f]">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <BrandLogo />
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md pt-2">
              Jagtial's premier motorcycle workshop for performance tuning, carburetor & EFI tuning, custom modifications, and high-precision engine overhauls under Master Mechanic B. Adharsh.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[#D4AF37] text-xs font-display font-medium">
              <Shield className="w-4 h-4" />
              <span>CERTIFIED MASTER MECHANIC & 100% OEM PARTS</span>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={WORKSHOP_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="h-9 px-3 rounded-sm bg-[#121212] border border-[#2a2a2a] flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all text-xs font-display"
                aria-label="Instagram @adharshgoud2512"
              >
                <Instagram className="w-4 h-4 text-[#D4AF37]" />
                <span>@{WORKSHOP_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs tracking-[0.2em] text-white uppercase border-b border-[#222222] pb-2">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> HOME
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> SERVICES
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> GALLERY
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> NEWS & ARTICLES
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs tracking-[0.2em] text-white uppercase border-b border-[#222222] pb-2">
              SERVICES
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/services/general-service" className="hover:text-[#D4AF37] transition-colors">
                  General Service & Safety
                </Link>
              </li>
              <li>
                <Link to="/services/engine-repair" className="hover:text-[#D4AF37] transition-colors">
                  Engine Overhaul & Rebuild
                </Link>
              </li>
              <li>
                <Link to="/services/brake-service" className="hover:text-[#D4AF37] transition-colors">
                  Brake Pad & Fluid Care
                </Link>
              </li>
              <li>
                <Link to="/services/performance" className="hover:text-[#D4AF37] transition-colors">
                  Performance ECU Tuning
                </Link>
              </li>
              <li>
                <Link to="/services/custom-work" className="hover:text-[#D4AF37] transition-colors">
                  Custom Cafe & Track Builds
                </Link>
              </li>
              <li>
                <Link to="/services/oil-change" className="hover:text-[#D4AF37] transition-colors">
                  Synthetic Oil & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 & 5: Locations & Workshop Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs tracking-[0.2em] text-white uppercase border-b border-[#222222] pb-2">
              WORKSHOP & CONTACT
            </h3>

            <div className="space-y-3 text-xs">
              {/* Jagtial AD Mechanic Workshop */}
              <div className="bg-[#0f0f0f] p-3 rounded-sm border border-[#D4AF37]/50 gold-glow">
                <p className="font-display font-bold text-[#D4AF37] text-xs uppercase flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-[#D4AF37]" /> AD MECHANIC WORKSHOP
                </p>
                <p className="text-gray-300 mt-1 text-xs">Master Mechanic: <span className="text-white font-bold">B. ADHARSH</span></p>
                <p className="text-gray-300 mt-1 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Thapovan High School Bypass Rd, Jagtial, Telangana</span>
                </p>
                <a
                  href={`tel:${WORKSHOP_INFO.phone}`}
                  className="text-[#D4AF37] font-extrabold mt-2 flex items-center gap-1.5 hover:underline text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>7386345346</span>
                </a>
              </div>

              <div className="pt-1 text-gray-400 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href="mailto:adharsh@admechanicworkshop.com" className="hover:text-white transition-colors">
                  adharsh@admechanicworkshop.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © 2026 AD Mechanic Workshop (B. Adharsh). All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-gray-400">
              Powered by{' '}
              <a
                href={WORKSHOP_INFO.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#D4AF37] font-semibold hover:underline"
              >
                {WORKSHOP_INFO.company}
              </a>
            </span>
            <span>•</span>
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-gray-300 transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Privacy or Terms */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#121212] border border-[#333] max-w-lg w-full p-6 rounded-sm text-gray-300 relative">
            <h3 className="text-lg font-display font-bold text-white uppercase text-[#D4AF37] mb-3">
              {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              {activeModal === 'privacy'
                ? 'AD Mechanic Workshop (B. Adharsh) is committed to protecting your privacy. Customer service logs, phone numbers, and motorcycle diagnostics data are securely handled solely for repair estimation, warranty tracking, and workshop notifications.'
                : 'All motorcycle service estimates are valid for 14 days. Warranty covers installed parts and technician workmanship for 90 days or 3,000 km. Riders are requested to remove personal belongings from saddlebags prior to service.'}
            </p>
            <div className="text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-[#D4AF37] text-black font-display font-bold px-4 py-1.5 text-xs uppercase rounded-sm hover:bg-[#E5C45A]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
