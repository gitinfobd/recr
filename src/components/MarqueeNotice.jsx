'use client';

import { useData } from '@/context/DataContext';
import { Bell, Phone, Flame } from 'lucide-react';

export default function MarqueeNotice() {
  const { siteSettings } = useData();

  return (
    <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white border-b border-emerald-800/40 py-2 px-3 text-xs overflow-hidden relative shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        
        {/* Left Fixed Badge */}
        <div className="flex items-center gap-1.5 bg-emerald-600 text-white font-black text-[11px] px-3 py-1 rounded-md uppercase tracking-wider shrink-0 z-10 shadow">
          <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span>জরুরি নোটিশ</span>
        </div>

        {/* Continuous Smooth Marquee Running Right to Left */}
        <div className="flex-1 overflow-hidden relative h-5">
          <div className="animate-marquee text-slate-100 font-semibold cursor-default">
            {siteSettings.marqueeNotice}
          </div>
        </div>

        {/* Right Fixed Direct Helpline */}
        <div className="hidden lg:flex items-center gap-3 shrink-0 font-mono text-[11px] font-bold text-emerald-300 z-10">
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
