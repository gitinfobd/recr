'use client';

import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { FacebookIcon, YoutubeIcon, LinkedinIcon } from '@/components/SocialIcons';
import { useData } from '@/context/DataContext';

export default function Footer() {
  const { siteSettings } = useData();

  return (
    <footer id="contact" className="mt-16 border-t border-[var(--neu-dark)]/40 bg-[var(--neu-bg)] text-[var(--text-main)] py-12 px-4 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        
        {/* Col 1: Brand & Affiliation */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-slate-200 p-0.5 flex items-center justify-center shadow-sm">
              <img
                src={siteSettings?.logoUrl || '/logo.jpg'}
                alt="REC Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/logo.jpg';
                }}
              />
            </div>
            <div>
              <div className="font-black text-base leading-tight uppercase">
                {siteSettings?.siteTitle || 'Rangpur Engineering College'}
              </div>
              <div className="text-[11px] text-[var(--text-muted)] font-semibold">
                {siteSettings?.siteTitleBn || 'রংপুর ইঞ্জিনিয়ারিং কলেজ'}
              </div>
            </div>
          </div>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-1">
            রাজশাহী বিশ্ববিদ্যালয়ের প্রকৌশল ও প্রযুক্তি অনুষদ অধিভুক্ত রংপুর বিভাগের প্রথম বেসরকারি প্রকৌশল মহাবিদ্যালয়।
          </p>
          <div className="neu-badge self-start text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
            অধিভুক্তি কোড: ১১০৪ (RU)
          </div>
        </div>

        {/* Col 2: Important Academic Links */}
        <div>
          <h4 className="font-bold text-sm mb-3 text-[var(--text-main)]">গুরুত্বপূর্ণ লিঙ্কসমূহ</h4>
          <ul className="flex flex-col gap-2 text-xs text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-emerald-600 transition-colors">
                হোমপেজ (Home)
              </Link>
            </li>
            <li>
              <Link href="/management" className="hover:text-emerald-600 transition-colors">
                ব্যবস্থাপনা পর্ষদ ও নেতৃত্ব (Management)
              </Link>
            </li>
            <li>
              <Link href="/teachers" className="hover:text-emerald-600 transition-colors font-medium">
                শিক্ষকমণ্ডলী তালিকা (Faculty Members)
              </Link>
            </li>
            <li>
              <Link href="/#departments" className="hover:text-emerald-600 transition-colors">
                প্রকৌশল বিভাগসমূহ (Departments)
              </Link>
            </li>
            <li>
              <Link href="/#notices" className="hover:text-emerald-600 transition-colors">
                সর্বশেষ নোটিশ বোর্ড (Notice Board)
              </Link>
            </li>
            <li>
              <Link href="/alumni" className="hover:text-emerald-600 transition-colors font-medium text-emerald-700 dark:text-emerald-400">
                অ্যালামনাই নেটওয়ার্ক (Alumni Network)
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Departments */}
        <div>
          <h4 className="font-bold text-sm mb-3 text-[var(--text-main)]">বিএসসি ডিগ্রি প্রোগ্রাম</h4>
          <ul className="flex flex-col gap-2 text-xs text-[var(--text-muted)]">
            <li>B.Sc. in Computer Science & Engineering (CSE)</li>
            <li>B.Sc. in Electrical & Electronic Engineering (EEE)</li>
            <li>B.Sc. in Civil Engineering (CE)</li>
            <li>B.Sc. in Information & Communication Eng. (ICE)</li>
            <li className="pt-1 text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">
              ডিগ্রি প্রদানকারী: রাজশাহী বিশ্ববিদ্যালয় (RU)
            </li>
          </ul>
        </div>

        {/* Col 4: Campus Contact & Social Hub */}
        <div>
          <h4 className="font-bold text-sm mb-3 text-[var(--text-main)]">ক্যাম্পাস ও সোশ্যাল হাব</h4>
          <div className="flex flex-col gap-2.5 text-xs text-[var(--text-muted)]">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="font-medium">
                {siteSettings?.location || 'জি. এল. রায় রোড, দখিগঞ্জ, মাহিগঞ্জ, রংপুর-৫৪০৩, বাংলাদেশ'}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="flex flex-col font-mono text-[11px] font-bold">
                <a href={`tel:${siteSettings?.helpline1 || '01714228756'}`} className="hover:underline text-[var(--text-main)]">
                  {siteSettings?.helpline1 || '০১৭১৪-২২৮৭৫৬'}
                </a>
                <a href={`tel:${siteSettings?.helpline2 || '01855979496'}`} className="hover:underline text-[var(--text-main)]">
                  {siteSettings?.helpline2 || '০১৮৫৫-৯৭৯৪৯৬'}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
              <a href={`mailto:${siteSettings?.email || 'info@recr.edu.bd'}`} className="hover:underline font-mono">
                {siteSettings?.email || 'info@recr.edu.bd'}
              </a>
            </div>

            {/* Social Media Link Cards (Facebook, YouTube, LinkedIn) */}
            <div className="mt-3 pt-3 border-t border-[var(--neu-dark)]/40 flex items-center gap-2.5">
              <a
                href={siteSettings?.facebookUrl || 'https://web.facebook.com/recr.edu.bd'}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn p-2 rounded-xl text-[#1877F2] hover:scale-105 transition-transform"
                title="Official Facebook Page"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={siteSettings?.youtubeUrl || 'https://youtube.com/@recr'}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn p-2 rounded-xl text-[#FF0000] hover:scale-105 transition-transform"
                title="Official YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>

              <a
                href={siteSettings?.linkedinUrl || 'https://linkedin.com/school/recr'}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn p-2 rounded-xl text-[#0A66C2] hover:scale-105 transition-transform"
                title="Official LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-[var(--neu-dark)]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
        <div>
          © ২০২৬ রংপুর ইঞ্জিনিয়ারিং কলেজ (RECR)। সর্বস্বত্ব সংরক্ষিত।
        </div>
        <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>শিক্ষা মন্ত্রণালয় ও রাজশাহী বিশ্ববিদ্যালয় অনুষদভুক্ত</span>
        </div>
      </div>
    </footer>
  );
}
