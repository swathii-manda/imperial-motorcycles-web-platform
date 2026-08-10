import React from 'react';
import { X, ChevronLeft, ChevronRight, Tag, Info } from 'lucide-react';

export default function GalleryModal({ item, onClose, onNext, onPrev, hasNext, hasPrev }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-gray-400 hover:text-white bg-[#151515] border border-[#333] rounded-sm transition-colors z-50 cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6 text-[#D4AF37]" />
      </button>

      {/* Navigation Buttons */}
      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 text-white bg-[#151515]/80 hover:bg-[#D4AF37] hover:text-black border border-[#333] rounded-sm transition-all z-50 cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 text-white bg-[#151515]/80 hover:bg-[#D4AF37] hover:text-black border border-[#333] rounded-sm transition-all z-50 cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Content Modal Container */}
      <div className="max-w-5xl w-full bg-[#101010] border border-[#2a2a2a] rounded-sm overflow-hidden flex flex-col lg:flex-row max-h-[90vh]">
        
        {/* Left: Big Image */}
        <div className="lg:w-2/3 bg-black flex items-center justify-center overflow-hidden relative min-h-[300px] sm:min-h-[400px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover max-h-[70vh] lg:max-h-[85vh]"
          />
          <div className="absolute top-3 left-3 bg-[#050505]/80 backdrop-blur-md px-3 py-1 rounded-sm border border-[#D4AF37]/40 flex items-center gap-1.5 text-xs text-[#D4AF37] font-display font-semibold uppercase">
            <Tag className="w-3.5 h-3.5" />
            <span>{item.category}</span>
          </div>
        </div>

        {/* Right: Info Panel */}
        <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-[#222222]">
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] font-display font-bold uppercase block">
              GALLERY SHOWCASE
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="text-xs text-[#E5C45A] font-medium uppercase tracking-wide">
                {item.subtitle}
              </p>
            )}
            <div className="h-[1px] w-12 bg-[#D4AF37] my-3" />
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-[#222222] flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-[#D4AF37]" />
              AD Mechanic Workshop Project
            </span>
            <span className="text-gray-400 font-display">2026 EDITION</span>
          </div>
        </div>
      </div>
    </div>
  );
}
