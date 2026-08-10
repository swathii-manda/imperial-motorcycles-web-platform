import React from 'react';
import * as Icons from 'lucide-react';

export default function FeatureItem({ icon = 'Wrench', title, description, showBorder = true }) {
  const IconComponent = Icons[icon] || Icons.Wrench;

  return (
    <div className={`relative px-4 sm:px-6 py-6 sm:py-8 flex items-start gap-4 ${showBorder ? 'lg:border-r lg:border-[#222222]' : ''}`}>
      <div className="shrink-0 w-11 h-11 rounded-sm bg-[#151515] border border-[#2a2a2a] flex items-center justify-center text-[#D4AF37]">
        <IconComponent className="w-5 h-5 stroke-[1.5]" />
      </div>

      <div className="space-y-1">
        <h4 className="font-display font-bold text-sm tracking-wider text-white uppercase">
          {title}
        </h4>
        <p className="text-gray-400 text-xs sm:text-xs leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
