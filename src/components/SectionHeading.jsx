import React from 'react';

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  className = ''
}) {
  const alignClasses =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto';

  return (
    <div className={`flex flex-col ${alignClasses} max-w-3xl mb-12 sm:mb-16 ${className}`}>
      {subtitle && (
        <span className="text-[#D4AF37] font-display font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-2">
          {subtitle}
        </span>
      )}
      
      <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-wide text-white uppercase relative">
        {title}
      </h2>

      {/* Gold decorative line & icon divider matching reference image */}
      <div className="flex items-center gap-3 my-3">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
        <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
      </div>

      {description && (
        <p className="text-gray-400 text-xs sm:text-sm sm:text-base leading-relaxed mt-1 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
