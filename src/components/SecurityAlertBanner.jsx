'use client';

import Link from 'next/link';
import { AlertCircle, ArrowRight, ShieldAlert } from 'lucide-react';

export default function SecurityAlertBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-4">
      <div className="neu-flat border-l-4 border-red-600 bg-red-500/10 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-red-600 text-white shadow-sm mt-0.5">
            <ShieldAlert className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-sm text-red-600 uppercase tracking-wider">
                সিকিউরিটি অ্যালার্ট ও ইনসিডেন্ট রিপোর্ট
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-200 dark:bg-red-900/60 text-red-800 dark:text-red-200 font-semibold">
                আইটি সেল কর্তৃক চিহ্নিত
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 max-w-3xl leading-relaxed">
              কলেজের মূল সার্ভারের <strong>/alumni</strong> পেজে অননুমোদিত ক্ষতিকর জুয়ার বিজ্ঞাপন (HOTDEPO Slot777) ইনজেকশনের ঘটনা সম্পূর্ণ ফরেনসিক স্ক্যান করে কারণ ও পয়েন্ট-টু-পয়েন্ট সমাধানসহ পূর্ণাঙ্গ অডিট রিপোর্ট প্রকাশ করা হয়েছে।
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
          <Link
            href="/audit-report"
            className="neu-btn-danger text-xs font-bold w-full md:w-auto py-2.5 px-4 flex items-center justify-center gap-1.5"
          >
            পূর্ণাঙ্গ অডিট রিপোর্ট ও সমাধান দেখুন
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
