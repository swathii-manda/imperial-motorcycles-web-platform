import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function NewsCard({ article }) {
  return (
    <article className="group bg-[#121212] border border-[#222222] hover:border-[#D4AF37] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 gold-glow-hover">
      <div>
        {/* Article Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-[#050505]/85 backdrop-blur-md px-2.5 py-1 rounded-sm border border-[#D4AF37]/30 text-[10px] font-display font-semibold text-[#D4AF37] tracking-widest uppercase flex items-center gap-1">
            <Tag className="w-3 h-3" />
            <span>{article.category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-4 text-[11px] text-gray-400 font-display">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-gray-400 truncate">
              <User className="w-3.5 h-3.5 text-[#D4AF37]" />
              {article.author}
            </span>
          </div>

          <h3 className="font-display font-bold text-lg text-white group-hover:text-[#D4AF37] tracking-wide uppercase transition-colors line-clamp-2">
            {article.title}
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Footer link */}
      <div className="px-6 pb-6 pt-2">
        <Link
          to={`/news/${article.slug}`}
          className="inline-flex items-center gap-2 font-display font-bold text-xs tracking-wider text-[#D4AF37] group-hover:text-white transition-colors uppercase"
        >
          <span>READ MORE</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
