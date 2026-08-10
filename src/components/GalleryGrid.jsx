import React, { useState } from 'react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';
import { Maximize2, Tag } from 'lucide-react';
import GalleryModal from './GalleryModal';

export default function GalleryGrid({ initialCategory = 'ALL', limit }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Filter items
  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'ALL' ? true : item.category === activeCategory
  );

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < displayItems.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {GALLERY_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`font-display font-bold text-xs tracking-[0.18em] uppercase px-4 sm:px-5 py-2.5 rounded-sm transition-all duration-300 cursor-pointer ${
              activeCategory === category
                ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 font-extrabold'
                : 'bg-[#151515] text-gray-300 hover:text-white hover:bg-[#202020] border border-[#2a2a2a]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedImageIndex(index)}
            className="group relative bg-[#121212] border border-[#222222] hover:border-[#D4AF37] rounded-sm overflow-hidden cursor-pointer shadow-xl transition-all duration-500 gold-glow-hover"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-black">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Badge Top Left */}
              <div className="absolute top-3 left-3 bg-[#050505]/80 backdrop-blur-md px-2.5 py-1 rounded-sm border border-[#D4AF37]/30 text-[10px] font-display font-semibold text-[#D4AF37] tracking-wider uppercase flex items-center gap-1.5">
                <Tag className="w-3 h-3" />
                <span>{item.category}</span>
              </div>

              {/* Hover View Icon Center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-sm bg-[#D4AF37] text-black flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

              {/* Bottom Details Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#D4AF37] tracking-wide uppercase transition-colors">
                  {item.title}
                </h4>
                {item.subtitle && (
                  <p className="text-xs text-gray-300 mt-1 line-clamp-1 font-body">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <GalleryModal
          item={displayItems[selectedImageIndex]}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={selectedImageIndex < displayItems.length - 1}
          hasPrev={selectedImageIndex > 0}
        />
      )}
    </div>
  );
}
