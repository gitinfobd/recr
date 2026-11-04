'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Moon, Sun, Menu, X, BookOpen, GraduationCap, Bell, AlertTriangle, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('recr-theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('recr-theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('recr-theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 px-4 py-3 bg-[var(--neu-bg)]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* College Crest & Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl text-white bg-gradient-to-br from-emerald-600 to-green-800 shadow-md transition-transform group-hover:scale-105">
            REC
          </div>
          <div>
            <div className="font-bold text-lg leading-tight tracking-tight text-[var(--text-main)] group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
              রংপুর ইঞ্জিনিয়ারিং কলেজ
            </div>
            <div className="text-xs text-[var(--text-muted)] flex items-center gap-1.5 font-medium">
              <span>Rangpur Engineering College</span>
              <span className="w-1 h-1 rounded-full bg-emerald-600"></span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Affiliated with RU</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link href="/" className="neu-btn text-xs uppercase tracking-wider py-2 px-3">
            হোম (Home)
          </Link>
          <Link href="#departments" className="neu-btn text-xs uppercase tracking-wider py-2 px-3 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            বিভাগসমূহ
          </Link>
          <Link href="#notices" className="neu-btn text-xs uppercase tracking-wider py-2 px-3 flex items-center gap-1.5">
            <Bell className="w-3.5 h-3.5 text-amber-500" />
            নোটিশ বোর্ড
          </Link>
          <Link href="/alumni" className="neu-btn text-xs uppercase tracking-wider py-2 px-3 flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
            <GraduationCap className="w-3.5 h-3.5" />
            অ্যালামনাই নেটওয়ার্ক
          </Link>
          <Link href="/audit-report" className="neu-btn-danger text-xs uppercase tracking-wider py-2 px-3 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            সিকিউরিটি অডিট
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="neu-btn p-2 rounded-xl text-[var(--text-main)]"
            title={isDark ? 'লাইট মোড চালু করুন' : 'ডার্ক মোড চালু করুন'}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Admission CTA */}
          <Link
            href="#admission"
            className="hidden sm:inline-flex neu-btn-primary text-xs uppercase tracking-wider py-2 px-4"
          >
            ভর্তি ২০২৬ (Apply)
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden neu-btn p-2 rounded-xl"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 neu-flat p-4 mx-2 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30 flex items-center gap-2"
          >
            হোম (Home)
          </Link>
          <Link
            href="#departments"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30 flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-emerald-600" />
            বিভাগসমূহ (Departments)
          </Link>
          <Link
            href="#notices"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30 flex items-center gap-2"
          >
            <Bell className="w-4 h-4 text-amber-500" />
            নোটিশ বোর্ড (Notice Board)
          </Link>
          <Link
            href="/alumni"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30 flex items-center gap-2 text-emerald-700 dark:text-emerald-400"
          >
            <GraduationCap className="w-4 h-4" />
            অ্যালামনাই পোর্টাল (Alumni Portal)
          </Link>
          <Link
            href="/audit-report"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 rounded-lg text-sm font-bold bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400 flex items-center gap-2"
          >
            <AlertTriangle className="w-4 h-4" />
            সাইবার সিকিউরিটি অডিট রিপোর্ট
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30 flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-blue-600" />
            যোগাযোগ (Contact)
          </Link>
        </div>
      )}
    </header>
  );
}
