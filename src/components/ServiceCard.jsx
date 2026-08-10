import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

export default function ServiceCard({ service, index = 0 }) {
  // Dynamically resolve icon from lucide-react
  const IconComponent = Icons[service.icon] || Icons.Wrench;

  return (
    <div className="group bg-[#151515] hover:bg-[#1a1a1a] border border-[#242424] hover:border-[#D4AF37] p-6 sm:p-7 rounded-sm transition-all duration-300 flex flex-col justify-between gold-glow-hover transform hover:-translate-y-1 relative overflow-hidden">
      
      {/* Top subtle gold corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-[#D4AF37]" />
        <div className="absolute top-0 right-0 h-full w-[2px] bg-[#D4AF37]" />
      </div>

      <div>
        {/* Gold Line Icon */}
        <div className="w-12 h-12 rounded-sm bg-[#0a0a0a] border border-[#2a2a2a] group-hover:border-[#D4AF37]/50 flex items-center justify-center mb-5 text-[#D4AF37] transition-colors">
          <IconComponent className="w-6 h-6 stroke-[1.5]" />
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#D4AF37] tracking-wider uppercase mb-2.5 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      {/* Footer / Price & Details Link */}
      <div className="pt-4 border-t border-[#222222] flex items-center justify-between text-xs">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-display">Starting From</span>
          <span className="font-display font-bold text-sm text-[#D4AF37]">${service.startingPrice}</span>
        </div>

        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center gap-1.5 font-display font-semibold text-xs tracking-wider text-white group-hover:text-[#D4AF37] transition-colors"
        >
          <span>DETAILS</span>
          <Icons.ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
