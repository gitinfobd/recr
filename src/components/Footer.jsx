'use client';

import Link from 'next/link';
import { ShieldCheck, MapPin, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-[var(--neu-dark)]/40 bg-[var(--neu-bg)] text-[var(--text-main)] py-12 px-4 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        
        {/* Col 1: Brand & Affiliation */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white bg-gradient-to-br from-emerald-600 to-green-800 shadow-sm">
              REC
            </div>
            <div>
              <div className="font-bold text-base leading-tight">রংপুর ইঞ্জিনিয়ারিং কলেজ</div>
              <div className="text-[11px] text-[var(--text-muted)]">Rangpur Engineering College</div>
            </div>
          </div>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-1">
            রাজশাহী বিশ্ববিদ্যালয়ের প্রকৌশল ও প্রযুক্তি অনুষদ অধিভুক্ত রংপুর বিভাগের প্রথম বেসরকারি প্রকৌশল মহাবিদ্যালয়।
          </p>
          <div className="neu-badge self-start text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
            অধিভুক্তি কোড: ১১০৪ (RU)
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-bold text-sm mb-3">গুরুত্বপূর্ণ লিঙ্কসমূহ</h4>
          <ul className="flex flex-col gap-2 text-xs text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
                <span>হোমপেজ (Home)</span>
              </Link>
            </li>
            <li>
              <Link href="#departments" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
                <span>প্রকৌশল বিভাগসমূহ</span>
              </Link>
            </li>
            <li>
              <Link href="#notices" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
                <span>সর্বশেষ নোটিশ বোর্ড</span>
              </Link>
            </li>
            <li>
              <Link href="/alumni" className="hover:text-emerald-600 transition-colors flex items-center gap-1">
                <span>অফিসিয়াল অ্যালামনাই নেটওয়ার্ক</span>
              </Link>
            </li>
            <li>
              <Link href="/audit-report" className="text-red-600 dark:text-red-400 font-bold hover:underline flex items-center gap-1">
                <span>সাইবার সিকিউরিটি অডিট রিপোর্ট</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Departments */}
        <div>
          <h4 className="font-bold text-sm mb-3">ডিগ্রি প্রোগ্রাম</h4>
          <ul className="flex flex-col gap-2 text-xs text-[var(--text-muted)]">
            <li>B.Sc. in Computer Science & Engineering (CSE)</li>
            <li>B.Sc. in Electrical & Electronic Engineering (EEE)</li>
            <li>B.Sc. in Civil Engineering (CE)</li>
            <li>B.Sc. in Information & Communication Eng. (ICE)</li>
            <li className="pt-1 text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
              ডিগ্রি প্রদানকারী: রাজশাহী বিশ্ববিদ্যালয় (RU)
            </li>
          </ul>
        </div>

        {/* Col 4: Campus Contact Info */}
        <div>
          <h4 className="font-bold text-sm mb-3">ক্যাম্পাস ও যোগাযোগ</h4>
          <div className="flex flex-col gap-2.5 text-xs text-[var(--text-muted)]">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>জি. এল. রায় রোড, ধোকীগঞ্জ, মাহিগঞ্জ / কামাল কাছনা, রংপুর-৫৪০০, বাংলাদেশ</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="flex flex-col font-mono text-[11px]">
                <a href="tel:01714228756" className="hover:underline">০১৭১৪-২২৮৭৫৬</a>
                <a href="tel:01855979496" className="hover:underline">০১৮৫৫-৯৭৯৪৯৬</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
              <a href="mailto:info@recr.edu.bd" className="hover:underline">info@recr.edu.bd</a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>https://www.recr.edu.bd</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-[var(--neu-dark)]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
        <div>
          © ২০২৬ রংপুর ইঞ্জিনিয়ারিং কলেজ (RECR)। সর্বস্বত্ব সংরক্ষিত।
        </div>
        <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Vercel Edge আর্কিটেকচার দ্বারা ১০০% হ্যাক-প্রুফ ও সুরক্ষিত</span>
        </div>
      </div>
    </footer>
  );
}
