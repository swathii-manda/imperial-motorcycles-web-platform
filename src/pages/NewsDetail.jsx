import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { NEWS_ARTICLES } from '../data/news';
import PageHero from '../components/PageHero';
import NewsCard from '../components/NewsCard';
import SectionHeading from '../components/SectionHeading';
import { Calendar, User, ArrowLeft, Clock, Share2, Tag, CheckCircle2 } from 'lucide-react';
import { PrimaryButton } from '../components/Button';

export default function NewsDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = NEWS_ARTICLES.find((a) => a.slug === slug) || NEWS_ARTICLES[0];
  const relatedArticles = NEWS_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="bg-[#050505] text-white">
      <PageHero
        title={article.title}
        subtitle={`${article.category} • By ${article.author}`}
        backgroundImage={article.image}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
        
        {/* Back Link */}
        <button
          onClick={() => navigate('/news')}
          className="inline-flex items-center gap-2 text-xs font-display font-semibold text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL ARTICLES</span>
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-y border-[#222222] py-4 text-xs text-gray-400 font-display">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-white">
              <User className="w-4 h-4 text-[#D4AF37]" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              {article.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#D4AF37] bg-[#121212] px-3 py-1 rounded-sm border border-[#2a2a2a]">
            <Tag className="w-3.5 h-3.5" />
            <span className="uppercase">{article.category}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-sm overflow-hidden border border-[#262626] shadow-2xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[350px] sm:h-[450px] object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed font-body border-b border-[#222222] pb-12">
          {article.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3
                  key={idx}
                  className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wider text-[#D4AF37] pt-4"
                >
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              return (
                <ul key={idx} className="space-y-2 pl-4">
                  {paragraph.split('\n').map((line, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                      <span>{line.replace('- ', '')}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>

        {/* Author Bio Box */}
        <div className="bg-[#121212] border border-[#2a2a2a] p-6 sm:p-8 rounded-sm flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-black font-display font-extrabold flex items-center justify-center text-xl shrink-0">
            IM
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-[#D4AF37] font-display font-bold uppercase tracking-widest block">
              WRITTEN BY MECHANIC TEAM
            </span>
            <h4 className="font-display font-bold text-lg text-white uppercase">
              {article.author}
            </h4>
            <p className="text-xs text-gray-400">
              Senior technician at AD Mechanic Workshop (B. Adharsh). Certified on high-performance engine overhauls & motorcycle tuning.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="pt-12">
          <SectionHeading subtitle="KEEP READING" title="MORE GUIDES & ARTICLES" align="left" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
