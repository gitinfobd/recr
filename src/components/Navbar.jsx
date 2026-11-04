'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  Lock,
  Phone,
  GraduationCap,
  Bell,
  BookOpen
} from 'lucide-react';
import { useData } from '@/context/DataContext';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { siteSettings, isAuthenticated } = useData();

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
    <header className="sticky top-0 z-40 bg-[var(--neu-bg)]/95 backdrop-blur-md border-b border-[var(--neu-dark)]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-between gap-2">

        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg overflow-hidden bg-white border border-slate-200 p-0.5 flex items-center justify-center shadow-sm">
            <img
              src={siteSettings?.logoUrl || '/logo.jpg'}
              alt="REC Logo"
              className="w-full h-full object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = '/logo.jpg'; }}
            />
          </div>
          <div className="hidden sm:block">
            <div className="font-black text-xs leading-tight uppercase text-[var(--text-main)]">
              {siteSettings?.siteTitle || 'Rangpur Engineering College'}
            </div>
            <div className="text-[9px] text-[var(--text-muted)] font-semibold leading-tight">
              {siteSettings?.siteTitleBn || 'রংপুর ইঞ্জিনিয়ারিং কলেজ'} • Affiliated with RU
            </div>
          </div>
        </Link>

        {/* Desktop Navigation - NO hamburger on desktop */}
        <nav className="hidden lg:flex items-center gap-1 flex-wrap">
          <Link href="/" className="neu-btn py-1.5 px-2.5 text-[11px]">Home</Link>

          {/* Management Dropdown - FIXED hover */}
          <div className="nav-dropdown-trigger">
            <button className="neu-btn py-1.5 px-2.5 flex items-center gap-1 text-[11px]">
              <span>Management</span>
              <ChevronDown className="w-3 h-3 text-[var(--text-muted)]" />
            </button>
            <div className="nav-dropdown-menu w-52">
              <div className="neu-flat p-2 bg-[var(--neu-bg)] border border-[var(--neu-dark)]/40 shadow-lg flex flex-col gap-0.5">
                <Link href="/management#leadership" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs">
                  Board of Directors & Leadership
                </Link>
                <Link href="/management#chairman" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs">
                  Chairman&apos;s Profile
                </Link>
                <Link href="/management#managingdirector" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs">
                  Managing Director (MD)
                </Link>
                <Link href="/teachers" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-bold text-xs">
                  Teachers & Faculty
                </Link>
              </div>
            </div>
          </div>

          {/* Academics Dropdown */}
          <div className="nav-dropdown-trigger">
            <button className="neu-btn py-1.5 px-2.5 flex items-center gap-1 text-[11px]">
              <span>Academics</span>
              <ChevronDown className="w-3 h-3 text-[var(--text-muted)]" />
            </button>
            <div className="nav-dropdown-menu w-56">
              <div className="neu-flat p-2 bg-[var(--neu-bg)] border border-[var(--neu-dark)]/40 shadow-lg flex flex-col gap-0.5">
                <Link href="/#departments" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs">CSE</Link>
                <Link href="/#departments" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs">EEE</Link>
                <Link href="/#departments" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs">Civil Engineering</Link>
                <Link href="/#departments" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs">ICE</Link>
              </div>
            </div>
          </div>

          <Link href="/students" className="neu-btn py-1.5 px-2.5 text-[11px]">Students</Link>

          <Link href="/#admission" className="neu-btn py-1.5 px-2.5 text-emerald-700 dark:text-emerald-400 font-bold text-[11px]">
            Admissions 2026
          </Link>

          <Link href="/#notices" className="neu-btn py-1.5 px-2.5 flex items-center gap-1 text-[11px]">
            <Bell className="w-3 h-3 text-amber-500" />
            <span>Notice</span>
          </Link>

          <Link href="/career" className="neu-btn py-1.5 px-2.5 text-[11px]">Career</Link>

          <Link href="/alumni" className="neu-btn py-1.5 px-2.5 flex items-center gap-1 text-[11px]">
            <GraduationCap className="w-3 h-3" />
            <span>Alumni</span>
          </Link>

          {/* Admin Portal */}
          <Link
            href="/admin"
            className={`neu-btn py-1.5 px-2.5 flex items-center gap-1 text-[11px] ${
              isAuthenticated ? 'text-emerald-600 font-bold border-emerald-500' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Lock className="w-3 h-3" />
            <span>{isAuthenticated ? 'Admin Dashboard' : 'Admin'}</span>
          </Link>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleTheme}
            className="neu-btn p-2 rounded-lg text-[var(--text-main)]"
            title={isDark ? 'লাইট মোড' : 'ডার্ক মোড'}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
          </button>

          {/* Mobile Menu Toggle - ONLY on mobile/tablet */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden neu-btn p-2 rounded-lg text-[var(--text-main)]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel - Only on small screens */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--neu-dark)]/40 bg-[var(--neu-bg)] px-4 py-4 flex flex-col gap-2 max-h-[70vh] overflow-y-auto animate-in fade-in slide-in-from-top-2">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
            হোম (Home)
          </Link>
          <Link href="/management" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
            Management
          </Link>
          <Link href="/teachers" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
            Teachers & Faculty
          </Link>
          <Link href="/students" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
            Students
          </Link>
          <Link href="/#admission" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-bold text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
            ভর্তি ২০২৬ (Admissions)
          </Link>
          <Link href="/#notices" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
            Notice Board (নোটিশ বোর্ড)
          </Link>
          <Link href="/career" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
            Career
          </Link>
          <Link href="/alumni" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
            Alumni
          </Link>
          <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-bold bg-slate-900 text-white flex items-center gap-1.5 mt-1">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Superadmin Portal</span>
          </Link>
        </div>
      )}
    </header>
  );
}
