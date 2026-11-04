'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Moon,
  Sun,
  Menu,
  X,
  BookOpen,
  GraduationCap,
  Bell,
  Lock,
  ChevronDown,
  Users,
  Briefcase,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { useData } from '@/context/DataContext';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { isAuthenticated } = useData();

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

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Top Academic News Ticker */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white text-[11px] py-1.5 px-4 border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[10px] uppercase shrink-0">
              Admission 2026
            </span>
            <span className="truncate text-slate-200">
              B.Sc in Computer Science & Engineering | B.Sc in Electrical & Electronic Engineering | B.Sc in Civil Engineering | B.Sc in Information & Communication Engineering
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0 font-mono text-emerald-300 font-bold">
            <a href="tel:01714228756" className="hover:underline flex items-center gap-1">
              📞 01714-228756
            </a>
            <span className="text-slate-600">|</span>
            <a href="tel:01855979496" className="hover:underline flex items-center gap-1">
              📞 01855-979496
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 px-4 py-2.5 bg-[var(--neu-bg)]/95 backdrop-blur-md border-b border-[var(--neu-dark)]/30 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Real College Crest & Name */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-sm bg-white border border-slate-200 p-0.5 flex items-center justify-center">
              <img
                src="/logo.jpg"
                alt="Rangpur Engineering College Crest"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%2315803d"/><text x="50" y="65" font-size="40" font-family="sans-serif" font-weight="bold" fill="white" text-anchor="middle">REC</text></svg>';
                }}
              />
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base leading-tight tracking-tight text-[var(--text-main)] group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors uppercase">
                Rangpur Engineering College
              </div>
              <div className="text-[11px] text-[var(--text-muted)] flex items-center gap-1.5 font-medium">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">রংপুর ইঞ্জিনিয়ারিং কলেজ</span>
                <span className="w-1 h-1 rounded-full bg-emerald-600"></span>
                <span>Affiliated by University of Rajshahi</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 text-xs font-semibold">
            <Link href="/" className="neu-btn py-2 px-3">
              Home
            </Link>

            {/* Management Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('management')}
                className="neu-btn py-2 px-3 flex items-center gap-1 cursor-pointer"
              >
                <span>Management</span>
                <ChevronDown className="w-3 h-3 text-[var(--text-muted)]" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 neu-flat p-2 hidden group-hover:flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 bg-[var(--neu-bg)]">
                <Link href="/management#leadership" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)]">
                  Board of Directors & Leadership
                </Link>
                <Link href="/management#chairman" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)]">
                  Chairman's Profile
                </Link>
                <Link href="/management#managingdirector" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)]">
                  Managing Director (MD)
                </Link>
                <Link href="/teachers" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-bold flex items-center justify-between">
                  <span>List of Teachers & Faculty</span>
                  <span className="neu-badge text-[10px]">Real</span>
                </Link>
              </div>
            </div>

            {/* Academics Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('academics')}
                className="neu-btn py-2 px-3 flex items-center gap-1 cursor-pointer"
              >
                <span>Academics</span>
                <ChevronDown className="w-3 h-3 text-[var(--text-muted)]" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 neu-flat p-2 hidden group-hover:flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 bg-[var(--neu-bg)]">
                <Link href="/#departments" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)]">
                  Computer Science & Eng. (CSE)
                </Link>
                <Link href="/#departments" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)]">
                  Electrical & Electronic Eng. (EEE)
                </Link>
                <Link href="/#departments" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)]">
                  Civil Engineering (CE)
                </Link>
                <Link href="/#departments" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)]">
                  Information & Comm. Eng. (ICE)
                </Link>
                <Link href="/teachers#science" className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)]">
                  Basic Science & Mathematics
                </Link>
              </div>
            </div>

            {/* Students */}
            <Link href="/students" className="neu-btn py-2 px-3">
              Students
            </Link>

            {/* Admissions */}
            <Link href="/#admission" className="neu-btn py-2 px-3 text-emerald-700 dark:text-emerald-400 font-bold">
              Admissions 2026
            </Link>

            {/* Notice */}
            <Link href="/#notices" className="neu-btn py-2 px-3 flex items-center gap-1">
              <Bell className="w-3 h-3 text-amber-500" />
              <span>Notice</span>
            </Link>

            {/* Career */}
            <Link href="/career" className="neu-btn py-2 px-3">
              Career
            </Link>

            {/* Alumni */}
            <Link href="/alumni" className="neu-btn py-2 px-3 flex items-center gap-1 text-emerald-700 dark:text-emerald-400">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Alumni</span>
            </Link>

            {/* Security Audit */}
            <Link href="/audit-report" className="neu-btn-danger py-2 px-3 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Audit</span>
            </Link>

            {/* Admin Portal */}
            <Link
              href="/admin"
              className={`neu-btn py-2 px-3 flex items-center gap-1 ${
                isAuthenticated ? 'text-emerald-600 font-bold border-emerald-500' : 'text-slate-600 dark:text-slate-400'
              }`}
              title="Superadmin Control Panel"
            >
              <Lock className="w-3 h-3" />
              <span>{isAuthenticated ? 'Admin Dashboard' : 'Admin'}</span>
            </Link>
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="neu-btn p-2 rounded-xl text-[var(--text-main)]"
              title={isDark ? 'লাইট মোড' : 'ডার্ক মোড'}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <Link
              href="/#admission"
              className="neu-btn-primary text-xs uppercase tracking-wider py-2 px-3 font-bold shrink-0 hidden sm:inline-flex"
            >
              ভর্তি আবেদন
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden neu-btn p-2 rounded-xl text-[var(--text-main)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* 3-Line Mobile Drawer Matching Real Site Image 3 */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 neu-flat p-4 mx-2 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 bg-[var(--neu-bg)] border border-[var(--neu-dark)]/40">
            <div className="flex items-center justify-between border-b border-[var(--neu-dark)]/40 pb-3 mb-1">
              <div className="flex items-center gap-2">
                <img src="/logo.jpg" alt="Logo" className="w-7 h-7 object-contain" />
                <span className="font-bold text-xs uppercase text-[var(--text-main)]">Menu Categories</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="neu-btn p-1.5 rounded-lg">
                <X className="w-4 h-4" />
              </button>
            </div>

            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
              Home (হোম)
            </Link>

            <Link href="/management" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30 flex items-center justify-between">
              <span>Management (ব্যবস্থাপনা পর্ষদ) +</span>
              <span className="text-[10px] text-emerald-600 font-bold">Chairman & MD</span>
            </Link>

            <Link href="/teachers" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30 flex items-center justify-between text-emerald-700 dark:text-emerald-400 font-bold">
              <span>Teachers & Faculty (শিক্ষকমণ্ডলী) +</span>
              <span className="neu-badge text-[10px]">Real Profiles</span>
            </Link>

            <Link href="/#departments" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
              Academics (বিভাগসমূহ - CSE, EEE, CE, ICE) +
            </Link>

            <Link href="/students" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
              Students (শিক্ষার্থী কর্নার)
            </Link>

            <Link href="/#admission" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 font-bold">
              Admissions (ভর্তি যোগ্যতা ও আবেদন) +
            </Link>

            <Link href="/career" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
              Career (চাকরি ও ইন্টার্নশিপ সার্কুলার)
            </Link>

            <Link href="/alumni" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 font-bold">
              Alumni (প্রাক্তন শিক্ষার্থী অ্যাসোসিয়েশন)
            </Link>

            <Link href="/#notices" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
              Notice Board (নোটিশ বোর্ড)
            </Link>

            <Link href="/audit-report" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-bold bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>সাইবার সিকিউরিটি অডিট রিপোর্ট</span>
            </Link>

            <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-lg text-xs font-bold bg-slate-900 text-white flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>Superadmin Portal</span>
              </span>
              <span className="text-[10px] text-emerald-400">super@recr.edu.bd</span>
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
