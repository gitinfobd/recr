'use client';

import { useData } from '@/context/DataContext';
import { Phone } from 'lucide-react';

export default function MarqueeNotice() {
  const { siteSettings } = useData();

  return (
    <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white border-b border-emerald-800/40 py-1.5 text-xs overflow-hidden relative shadow-inner">
      <div className="flex items-center gap-3">
        
        {/* Left Fixed Badge */}
        <div className="flex items-center gap-1.5 bg-emerald-600 text-white font-black text-[11px] px-3 py-1 rounded-r-md uppercase tracking-wider shrink-0 z-10 shadow">
          <span>ভর্তি ২০২৬</span>
        </div>

        {/* Continuous Smooth Marquee - CSS-only infinite scroll */}
        <div className="flex-1 overflow-hidden relative">
          <div className="marquee-track">
            <span className="marquee-content text-slate-100 font-semibold">
              {siteSettings.marqueeNotice}
            </span>
            <span className="marquee-content text-slate-100 font-semibold" aria-hidden="true">
              {siteSettings.marqueeNotice}
            </span>
          </div>
        </div>

        {/* Right Fixed Direct Helpline */}
        <div className="hidden lg:flex items-center gap-3 shrink-0 font-mono text-[11px] font-bold text-emerald-300 z-10 pr-3">
          <a href={`tel:${siteSettings.helpline1}`} className="hover:text-amber-300 flex items-center gap-1">
            <Phone className="w-3 h-3 text-emerald-400" />
            <span>{siteSettings.helpline1}</span>
          </a>
          <span className="text-slate-600">|</span>
          <a href={`tel:${siteSettings.helpline2}`} className="hover:text-amber-300 flex items-center gap-1">
            <Phone className="w-3 h-3 text-emerald-400" />
            <span>{siteSettings.helpline2}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
