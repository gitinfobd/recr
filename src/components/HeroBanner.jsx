'use client';

import Link from 'next/link';
import { ArrowRight, Award, ShieldCheck, CheckCircle2, Sparkles, Building2, Users2, Compass } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative px-4 py-8 md:py-14 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Slogan & CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 neu-badge self-start text-emerald-700 dark:text-emerald-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>রাজশাহী বিশ্ববিদ্যালয় অধিভুক্ত • প্রথম বেসরকারি প্রকৌশল মহাবিদ্যালয়</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.2]">
            ভবিষ্যতের প্রকৌশলী গড়ার বিশ্বস্ত প্রতিষ্ঠান{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-700">
              রংপুর ইঞ্জিনিয়ারিং কলেজ
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl">
            ২০১৪ সাল থেকে উত্তরবঙ্গের প্রকৌশল শিক্ষায় শীর্ষস্থান ধরে রাখা রংপুর ইঞ্জিনিয়ারিং কলেজ আধুনিক কম্পিউটার ল্যাব, উন্নত ইলেকট্রনিক্স গবেষণাগার এবং অভিজ্ঞ শিক্ষকবৃন্দের মাধ্যমে ৪ বছর মেয়াদী বিএসসি ইন ইঞ্জিনিয়ারিং (CSE, EEE, CE, ICE) ডিগ্রি প্রদান করে আসছে।
          </p>

          {/* Quick Perks */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-main)]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>রুয়েট ও রাবি সমমানের সিলেবাস</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-main)]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>ওয়াইফাইযুক্ত ডিজিটাল ক্যাম্পাস</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-main)]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>নিজস্ব ছাত্র-ছাত্রী হোস্টেল</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#admission"
              className="neu-btn-primary text-sm py-3 px-6 flex items-center gap-2 font-bold"
            >
              <span>অনলাইন ভর্তি আবেদন ২০২৬</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/audit-report"
              className="neu-btn text-sm py-3 px-5 flex items-center gap-2 font-bold text-red-600 dark:text-red-400"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>ওয়েবসাইট অডিট রিপোর্ট দেখুন</span>
            </Link>

            <Link
              href="#departments"
              className="neu-btn text-sm py-3 px-5 flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>বিভাগসমূহ দেখুন</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Neumorphic Campus Showcase Card */}
        <div className="lg:col-span-5">
          <div className="neu-flat p-5 md:p-6 relative group overflow-hidden">
            {/* College Campus Visual Container */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-800 via-green-900 to-slate-900 shadow-inner flex flex-col justify-between p-6 text-white">
              <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80')` }}></div>

              <div className="relative z-10 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md border border-white/30 uppercase tracking-wider">
                  Established 2014
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-md">
                  RU Code: 1104
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold leading-tight">রংপুর ইঞ্জিনিয়ারিং কলেজ</h3>
                <p className="text-xs text-emerald-200 mt-1">জি. এল. রায় রোড, ধোকীগঞ্জ, মাহিগঞ্জ, রংপুর-৫৪০০</p>
                <div className="mt-3 flex items-center gap-3 text-xs">
                  <span className="bg-emerald-600/80 px-2.5 py-1 rounded-lg backdrop-blur-sm">৪টি প্রকৌশল বিভাগ</span>
                  <span className="bg-white/20 px-2.5 py-1 rounded-lg backdrop-blur-sm">১০০০+ গ্র্যাজুয়েট</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Row below Image */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="neu-pressed p-3 text-center">
                <div className="text-xl font-black text-emerald-700 dark:text-emerald-400">৪টি</div>
                <div className="text-[11px] font-medium text-[var(--text-muted)] mt-0.5">বিএসসি বিভাগ</div>
              </div>
              <div className="neu-pressed p-3 text-center">
                <div className="text-xl font-black text-emerald-700 dark:text-emerald-400">১২০০+</div>
                <div className="text-[11px] font-medium text-[var(--text-muted)] mt-0.5">বর্তমান শিক্ষার্থী</div>
              </div>
              <div className="neu-pressed p-3 text-center">
                <div className="text-xl font-black text-emerald-700 dark:text-emerald-400">১০০%</div>
                <div className="text-[11px] font-medium text-[var(--text-muted)] mt-0.5">রাবি ডিগ্রি সনদ</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
