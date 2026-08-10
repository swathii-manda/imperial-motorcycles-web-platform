import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Instagram, Phone, Menu, X, Wrench } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { WORKSHOP_INFO } from '../data/workshopInfo';

export default function Navbar({ onOpenBooking = () => {} }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'NEWS', path: '/news' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#0d0d0d] border-b border-[#262626] shadow-2xl'
          : 'bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-4">
          <BrandLogo />
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `font-display font-medium text-xs tracking-[0.2em] transition-all duration-200 relative py-1 hover:text-[#D4AF37] ${
                  isActive
                    ? 'text-[#D4AF37] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#D4AF37]'
                    : 'text-gray-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: Social Icons + Quick Phone */}
        <div className="hidden lg:flex items-center space-x-5">
          <a
            href={`tel:${WORKSHOP_INFO.phone}`}
            className="flex items-center gap-2 text-xs font-display tracking-wider text-gray-300 hover:text-[#D4AF37] bg-[#151515] px-3.5 py-2 rounded-sm border border-[#2a2a2a] transition-colors"
            title="AD Mechanic Workshop Hotline"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{WORKSHOP_INFO.phone}</span>
          </a>

          <div className="h-4 w-[1px] bg-[#333333]" />

          <a
            href={WORKSHOP_INFO.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram: @adharshgoud2512"
            title="Instagram: @adharshgoud2512"
            className="text-gray-400 hover:text-[#D4AF37] transition-colors p-1.5 hover:bg-[#151515] rounded-full flex items-center gap-1 text-xs"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={`tel:${WORKSHOP_INFO.phone}`}
            className="p-2.5 text-[#D4AF37] bg-[#1a1a1a] border border-[#333333] rounded-sm active:bg-[#252525]"
            aria-label="Call Workshop Hotline"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-gray-200 hover:text-[#D4AF37] focus:outline-none bg-[#1a1a1a] border border-[#333333] rounded-sm active:bg-[#252525]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - Opaque, fixed top anchor */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed left-0 right-0 top-[68px] bottom-0 bg-[#0d0d0d] z-50 flex flex-col justify-between p-5 border-t border-[#262626] overflow-y-auto shadow-2xl">
          <div className="space-y-3 pt-1">
            <div className="px-3 py-1.5 text-[10px] tracking-[0.25em] text-[#D4AF37] font-display font-bold uppercase border-b border-[#222222] flex items-center justify-between">
              <span>NAVIGATION MENU</span>
              <span className="text-gray-500 font-mono">JAGTIAL</span>
            </div>
            <div className="flex flex-col space-y-1.5 pt-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-base font-display tracking-[0.2em] py-3 px-4 rounded-sm transition-all ${
                      isActive
                        ? 'text-[#D4AF37] bg-[#1a1a1a] border-l-4 border-[#D4AF37] font-bold shadow-sm'
                        : 'text-gray-200 hover:text-white hover:bg-[#151515] font-medium'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-4 mt-4 border-t border-[#222222]">
            <a
              href={`tel:${WORKSHOP_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 text-sm text-[#0d0d0d] bg-[#D4AF37] hover:bg-[#e2bd47] font-display font-bold py-2.5 px-3 rounded-sm transition-colors shadow-md"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>CALL HOTLINE: {WORKSHOP_INFO.phone}</span>
            </a>

            <div className="flex items-center justify-between text-gray-400 px-1 pt-1">
              <span className="text-[10px] tracking-widest text-gray-500 font-display uppercase">INSTAGRAM</span>
              <a
                href={WORKSHOP_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#D4AF37] flex items-center gap-1.5 text-xs text-gray-300 font-medium py-1 px-2 rounded hover:bg-[#1a1a1a] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#D4AF37]" />
                <span>@{WORKSHOP_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
