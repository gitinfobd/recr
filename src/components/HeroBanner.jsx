'use client';

import Link from 'next/link';
import { ArrowRight, Award, ShieldCheck, CheckCircle2, Sparkles, Building2, Users2, Compass } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative px-4 py-8 md:py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Slogan, 11 Years of Success & CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-1.5 neu-badge text-emerald-800 dark:text-emerald-300 font-bold text-xs bg-emerald-500/10 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>11 Years of Academic Excellence (Est. 2014)</span>
            </div>
            <div className="inline-flex items-center gap-1.5 neu-badge text-blue-800 dark:text-blue-300 font-bold text-xs">
              <span>রাজশাহী বিশ্ববিদ্যালয় অধিভুক্ত</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-main)] leading-[1.2]">
            Build Your Engineering Career With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-700">
              Rangpur Engineering College
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl font-medium">
            উত্তরবঙ্গের প্রথম ও সর্ববৃহৎ বেসরকারি প্রকৌশল মহাবিদ্যালয়। রাজশাহী বিশ্ববিদ্যালয়ের প্রকৌশল ও প্রযুক্তি অনুষদ কর্তৃক প্রদত্ত সিলেবাসে আধুনিক ল্যাব, অভিজ্ঞ শিক্ষকমণ্ডলী এবং ওয়াইফাইযুক্ত ডিজিটাল ক্যাম্পাসে ৪ বছর মেয়াদী বিএসসি ইঞ্জিনিয়ারিং (CSE, EEE, CE, ICE)।
          </p>

          {/* Quick Perks */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-main)]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>রাবি ও রুয়েট স্ট্যান্ডার্ড পাঠ্যক্রম</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-main)]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>ওয়াইফাইযুক্ত নিজস্ব ক্যাম্পাস</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-main)]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>ছাত্র ও ছাত্রী পৃথক হোস্টেল</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/#admission"
              className="neu-btn-primary text-xs sm:text-sm py-3 px-6 flex items-center gap-2 font-bold"
            >
              <span>অনলাইন ভর্তি আবেদন ২০২৬</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/teachers"
              className="neu-btn text-xs sm:text-sm py-3 px-5 flex items-center gap-2 font-bold text-emerald-700 dark:text-emerald-400"
            >
              <Users2 className="w-4 h-4" />
              <span>শিক্ষকমণ্ডলী দেখুন</span>
            </Link>

            <Link
              href="/audit-report"
              className="neu-btn text-xs sm:text-sm py-3 px-4 flex items-center gap-1.5 font-bold text-red-600 dark:text-red-400"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>সাইবার অডিট</span>
            </Link>
          </div>
        </div>

        {/* Right Column: REAL Campus Building Showcase from Image 3 */}
        <div className="lg:col-span-5">
          <div className="neu-flat p-4 md:p-5 relative group overflow-hidden">
            {/* Real Campus Visual Container */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-inner bg-slate-900 border border-slate-700/50 flex flex-col justify-between p-5 text-white">
              
              {/* Real College Building Photo */}
              <img
                src="/rec-head.jpg"
                alt="Rangpur Engineering College Campus Real Photo"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/campus-slide.png';
                }}
              />

              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Top Badges */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-600 text-white shadow-md uppercase tracking-wider flex items-center gap-1">
                  <span>★</span>
                  <span>11 Years of Success</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md border border-white/30 text-white">
                  RU Affiliated
                </span>
              </div>

              {/* Bottom Campus Info */}
              <div className="relative z-10">
                <div className="text-[11px] text-emerald-300 font-bold uppercase tracking-wider">Official Main Campus</div>
                <h3 className="text-xl font-black text-white leading-tight">রংপুর ইঞ্জিনিয়ারিং কলেজ</h3>
                <p className="text-xs text-slate-200 mt-1">জি. এল. রায় রোড, ধোকীগঞ্জ, মাহিগঞ্জ, রংপুর-৫৪০৩</p>
                <div className="mt-3 flex items-center gap-2 text-xs flex-wrap">
                  <span className="bg-emerald-600/90 text-white px-2.5 py-0.5 rounded-md font-semibold">৪টি ইঞ্জিনিয়ারিং বিভাগ</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-md font-semibold">১০০০+ সফল গ্র্যাজুয়েট</span>
                </div>
              </div>
            </div>

            {/* Metrics Row below Real Image */}
            <div className="grid grid-cols-3 gap-2.5 mt-3.5">
              <div className="neu-pressed p-2.5 text-center">
                <div className="text-lg font-black text-emerald-700 dark:text-emerald-400">৪টি</div>
                <div className="text-[10px] font-bold text-[var(--text-muted)] mt-0.5">বিএসসি বিভাগ</div>
              </div>
              <div className="neu-pressed p-2.5 text-center">
                <div className="text-lg font-black text-emerald-700 dark:text-emerald-400">১২০০+</div>
                <div className="text-[10px] font-bold text-[var(--text-muted)] mt-0.5">শিক্ষার্থী</div>
              </div>
              <div className="neu-pressed p-2.5 text-center">
                <div className="text-lg font-black text-emerald-700 dark:text-emerald-400">১০০%</div>
                <div className="text-[10px] font-bold text-[var(--text-muted)] mt-0.5">রাবি সনদ</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
