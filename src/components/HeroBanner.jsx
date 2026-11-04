'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Award
} from 'lucide-react';
import { useData } from '@/context/DataContext';

export default function HeroBanner() {
  const { heroData, principalCard } = useData();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = heroData?.carouselImages || [];

  // Auto-play slider
  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="px-4 py-6 md:py-10 max-w-7xl mx-auto">
      
      {/* Dual Column Layout Matching Official Site Standard (Image 1) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* LEFT COLUMN: Interactive Campus Memory Image Carousel */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="neu-flat p-3 sm:p-4 relative group overflow-hidden h-full flex flex-col justify-between">
            
            {/* Image Slide Container */}
            <div className="relative w-full h-[320px] sm:h-[400px] md:h-[440px] rounded-2xl overflow-hidden shadow-inner bg-slate-900 border border-slate-700/50">
              {slides.map((slide, index) => (
                <div
                  key={slide.id || index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={slide.title || 'Rangpur Engineering College Campus'}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/rec-head.jpg';
                    }}
                  />
                  {/* Subtle Dark Gradient at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Slide Title Tag */}
                  <div className="absolute bottom-4 left-4 right-16 z-20 text-white">
                    <span className="neu-badge text-[10px] bg-emerald-600 text-white font-bold mb-1 shadow">
                      রংপুর ইঞ্জিনিয়ারিং কলেজ ক্যাম্পাস
                    </span>
                    <h3 className="text-sm sm:text-base md:text-lg font-black leading-tight drop-shadow-md">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              ))}

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-emerald-600 text-white backdrop-blur-md transition-all cursor-pointer shadow-lg"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-emerald-600 text-white backdrop-blur-md transition-all cursor-pointer shadow-lg"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === currentSlide ? 'w-6 bg-emerald-500' : 'w-2 bg-white/60'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Quick Metrics Bar directly under swiper */}
            <div className="grid grid-cols-3 gap-2 mt-3 pt-1">
              <div className="neu-pressed p-2 text-center">
                <div className="text-base sm:text-lg font-black text-emerald-700 dark:text-emerald-400">
                  {heroData?.deptCount || '৪টি'}
                </div>
                <div className="text-[10px] font-bold text-[var(--text-muted)]">বিএসসি বিভাগ</div>
              </div>
              <div className="neu-pressed p-2 text-center">
                <div className="text-base sm:text-lg font-black text-emerald-700 dark:text-emerald-400">
                  {heroData?.studentCount || '১২০০+'}
                </div>
                <div className="text-[10px] font-bold text-[var(--text-muted)]">শিক্ষার্থী ও গবেষক</div>
              </div>
              <div className="neu-pressed p-2 text-center">
                <div className="text-base sm:text-lg font-black text-emerald-700 dark:text-emerald-400">
                  {heroData?.degreeInfo || '১০০%'}
                </div>
                <div className="text-[10px] font-bold text-[var(--text-muted)]">রাবি ডিগ্রি সনদ</div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Official Principal Photo & Welcome Quote Card (Matches Image 1) */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="neu-flat overflow-hidden flex flex-col justify-between h-full bg-[var(--neu-bg)] border border-[var(--neu-dark)]/50 shadow-md">
            
            {/* Top Solid Blue Header Banner (Image 1 style) */}
            <div className="bg-[#1e3a8a] text-white py-6 px-6 text-center relative shadow-sm">
              <div className="text-xs font-black tracking-widest uppercase text-blue-200">
                {principalCard?.header || 'PRINCIPAL'}
              </div>

              {/* Oval Framed Photo with Golden Border (Image 1 style) */}
              <div className="mt-4 mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl bg-slate-900 relative">
                <img
                  src={principalCard?.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'}
                  alt={principalCard?.name || 'Principal, Rangpur Engineering College'}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80';
                  }}
                />
              </div>

              {/* Decorative underline */}
              <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Principal Quote Text & View More CTA */}
            <div className="p-6 flex-1 flex flex-col justify-between text-center">
              <div>
                <h4 className="font-black text-base sm:text-lg text-[var(--text-main)] uppercase tracking-wider">
                  {principalCard?.title || 'PRINCIPAL'}
                </h4>
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mt-0.5">
                  {principalCard?.name || 'Col. (Retd.) M. A. Baten'}
                </div>

                <p className="text-xs text-[var(--text-muted)] mt-4 leading-relaxed font-medium italic">
                  "{principalCard?.quote || 'As the Principal of Rangpur Engineering College, I warmly welcome you to the inspiring world of science, technology, and innovation. Together, let\'s shape the future..'}"
                </p>
              </div>

              {/* Blue Action Button (Image 1 style) */}
              <div className="mt-6 pt-4 border-t border-[var(--neu-dark)]/40">
                <Link
                  href={principalCard?.buttonLink || '/management#leadership'}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-black uppercase tracking-wider transition-colors shadow-md inline-flex items-center justify-center gap-1.5"
                >
                  <span>{principalCard?.buttonText || 'VIEW MORE'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
