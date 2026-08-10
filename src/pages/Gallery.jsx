import React from 'react';
import PageHero from '../components/PageHero';
import GalleryGrid from '../components/GalleryGrid';
import SectionHeading from '../components/SectionHeading';
import { PrimaryButton } from '../components/Button';

export default function Gallery() {
  return (
    <div className="bg-[#050505] text-white">
      <PageHero
        title="OUR GALLERY"
        subtitle="Behind the scenes at AD Mechanic Workshop — Jagtial"
        backgroundImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <SectionHeading
          subtitle="MOTORSPORT & WORKSHOP SHOWCASE"
          title="WORKSHOP & CUSTOM BUILDS"
          description="Click any photograph to view high-resolution details, technical specifications, and project story."
        />

        <GalleryGrid />

        <div className="mt-16 bg-[#101010] border border-[#222222] p-8 sm:p-12 text-center rounded-sm space-y-4">
          <h3 className="font-display font-bold text-2xl text-white uppercase">
            HAVE A CUSTOM BUILD OR REPAIR IN MIND?
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto">
            Discuss your motorcycle vision with our master fabrication team and mechanics today.
          </p>
          <div className="pt-2">
            <PrimaryButton to="/contact">
              START YOUR CUSTOM PROJECT
            </PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
