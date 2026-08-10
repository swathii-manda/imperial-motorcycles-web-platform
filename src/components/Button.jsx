import React from 'react';
import { Link } from 'react-router-dom';

export function PrimaryButton({
  children,
  to,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  disabled = false
}) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2.5 
    bg-[#D4AF37] hover:bg-[#E5C45A] text-[#050505] 
    font-display font-bold text-xs sm:text-sm tracking-[0.18em] uppercase
    px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm
    shadow-lg shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/35
    transition-all duration-300 transform active:scale-[0.98]
    disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
  `;

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        {children}
        {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseClasses} ${className}`}>
      {children}
      {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
}

export function SecondaryButton({
  children,
  to,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  disabled = false
}) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2.5 
    bg-[#151515] hover:bg-[#202020] text-white hover:text-[#D4AF37]
    border border-[#333333] hover:border-[#D4AF37]
    font-display font-bold text-xs sm:text-sm tracking-[0.18em] uppercase
    px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm
    transition-all duration-300 transform active:scale-[0.98]
    disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
  `;

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        {children}
        {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseClasses} ${className}`}>
      {children}
      {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
}
