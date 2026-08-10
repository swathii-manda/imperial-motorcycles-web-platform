import React from 'react';

export default function PageHero({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1920&auto=format&fit=crop'
}) {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#050505] border-b border-[#222222] overflow-hidden">
      {/* Background Image with Dark Vignette & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
        <span className="text-[#D4AF37] font-display font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase block">
          AD MECHANIC WORKSHOP — JAGTIAL
        </span>
        
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase drop-shadow-lg">
          {title}
        </h1>

        <div className="flex items-center justify-center gap-3 my-2">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {subtitle && (
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-body">
            "{subtitle}"
          </p>
        )}
      </div>
    </div>
  );
}
