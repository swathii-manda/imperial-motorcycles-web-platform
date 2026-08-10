import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import NewsCard from '../components/NewsCard';
import SectionHeading from '../components/SectionHeading';
import { NEWS_ARTICLES } from '../data/news';
import { Search } from 'lucide-react';

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', 'MAINTENANCE', 'SERVICE', 'GUIDES', 'PERFORMANCE'];

  const filteredArticles = NEWS_ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === 'ALL' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#050505] text-white">
      <PageHero
        title="NEWS & GUIDES"
        subtitle="Expert advice, maintenance tips, and workshop stories from our master mechanics"
        backgroundImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#222222]">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-display font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-sm transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-black font-extrabold'
                    : 'bg-[#121212] text-gray-300 hover:text-white border border-[#2a2a2a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-[#D4AF37] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-[#2a2a2a] focus:border-[#D4AF37] focus:outline-none pl-9 pr-3 py-2 rounded-sm text-xs text-white placeholder-gray-500"
            />
          </div>

        </div>

        <SectionHeading
          subtitle="MECHANIC INSIGHTS"
          title="LATEST ARTICLES"
        />

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p>No articles found. Try clearing your search or filter.</p>
          </div>
        )}

      </section>
    </div>
  );
}
