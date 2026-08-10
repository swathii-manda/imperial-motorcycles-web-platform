import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ review }) {
  return (
    <div className="bg-[#121212] border border-[#222222] hover:border-[#D4AF37]/60 p-6 sm:p-8 rounded-sm relative flex flex-col justify-between transition-all duration-300 gold-glow-hover">
      
      <div className="space-y-4">
        {/* Star Rating */}
        <div className="flex items-center space-x-1 text-[#D4AF37]">
          {[...Array(review.rating || 5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic relative z-10 font-body">
          "{review.comment}"
        </p>
      </div>

      {/* Customer Info */}
      <div className="pt-6 mt-6 border-t border-[#1f1f1f] flex items-center justify-between">
        <div>
          <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
            {review.name}
          </h4>
          <p className="text-xs text-[#D4AF37] font-display font-medium mt-0.5">
            {review.bike}
          </p>
        </div>

        <div className="text-right text-[10px] text-gray-500 uppercase tracking-widest font-display">
          <span>{review.location}</span>
        </div>
      </div>
    </div>
  );
}
