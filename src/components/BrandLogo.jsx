import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';

export default function BrandLogo({ variant = 'default', className = '' }) {
  if (variant === 'compact') {
    return (
      <Link to="/" className={`group inline-flex items-center gap-2 ${className}`}>
        <div className="w-8 h-8 rounded-sm bg-[#121212] border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
          <Wrench className="w-4 h-4" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-display font-extrabold text-base text-white tracking-wider group-hover:text-[#D4AF37] transition-colors">
            AD MECHANIC
          </span>
          <span className="font-display font-bold text-[9px] tracking-[0.2em] text-[#D4AF37] uppercase">
            WORKSHOP
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-lg group-hover:border-white transition-colors gold-glow">
        <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display font-black text-lg sm:text-xl text-white tracking-wider uppercase group-hover:text-[#D4AF37] transition-colors">
          AD MECHANIC
        </span>
        <span className="font-display font-extrabold text-[10px] sm:text-xs tracking-[0.32em] text-[#D4AF37] uppercase mt-0.5">
          WORKSHOP
        </span>
      </div>
    </Link>
  );
}
