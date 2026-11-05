'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Moon,
  Sun,
  ChevronDown,
  Lock,
  GraduationCap,
  Bell,
  Briefcase,
  Users2
} from 'lucide-react';
import { useData } from '@/context/DataContext';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);
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

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220);
  };

  const toggleDropdown = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="sticky top-0 z-40 bg-[var(--neu-bg)]/95 backdrop-blur-md border-b border-[var(--neu-dark)]/30 shadow-sm overflow-visible">
      <div className="max-w-7xl mx-auto px-3 py-2 flex flex-col md:flex-row md:items-center justify-between gap-2 overflow-visible">

        {/* Top / Left: Brand & Theme + Admin Login button */}
        <div className="flex items-center justify-between gap-2 shrink-0">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-white border border-slate-200 p-0.5 flex items-center justify-center shadow-sm">
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
              <div className="font-black text-xs leading-tight uppercase text-[var(--text-main)]">
                {siteSettings?.siteTitle || 'Rangpur Engineering College'}
              </div>
              <div className="text-[9px] text-[var(--text-muted)] font-semibold leading-tight">
                {siteSettings?.siteTitleBn || 'রংপুর ইঞ্জিনিয়ারিং কলেজ'} • Affiliated with RU
              </div>
            </div>
          </Link>

          {/* Theme & Admin Login buttons (in place of 3-line menu) */}
          <div className="flex items-center gap-1.5 md:order-last">
            <button
              onClick={toggleTheme}
              className="neu-btn p-1.5 rounded-lg text-[var(--text-main)] cursor-pointer"
              title={isDark ? 'লাইট মোড' : 'ডার্ক মোড'}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
            </button>

            {/* Admin Login Button */}
            <Link
              href="/admin"
              className={`neu-btn py-1.5 px-3 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                isAuthenticated
                  ? 'neu-pressed text-emerald-700 dark:text-emerald-400 border border-emerald-500/50'
                  : 'text-slate-700 dark:text-slate-300 hover:border-emerald-500'
              }`}
              title="Superadmin Portal"
            >
              <Lock className={`w-3.5 h-3.5 ${isAuthenticated ? 'text-emerald-500' : 'text-slate-500'}`} />
              <span>{isAuthenticated ? 'Admin Dashboard' : 'Admin Login'}</span>
            </Link>
          </div>
        </div>

        {/* Navigation Categories - overflow-visible ensures dropdowns are NEVER clipped */}
        <nav className="flex items-center gap-1.5 flex-wrap overflow-visible">
          {/* Home */}
          <Link href="/" className="neu-btn py-1.5 px-2.5 text-[11px] shrink-0 cursor-pointer">
            Home
          </Link>

          {/* 1. Management Dropdown */}
          <div
            className="relative shrink-0 overflow-visible"
            onMouseEnter={() => handleMouseEnter('management')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => toggleDropdown('management')}
              className={`neu-btn py-1.5 px-2.5 flex items-center gap-1 text-[11px] cursor-pointer ${
                activeDropdown === 'management' ? 'neu-pressed text-emerald-700 dark:text-emerald-400' : ''
              }`}
            >
              <span>Management</span>
              <ChevronDown
                className={`w-3 h-3 text-[var(--text-muted)] transition-transform duration-200 ${
                  activeDropdown === 'management' ? 'rotate-180 text-emerald-600' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {activeDropdown === 'management' && (
              <div
                className="absolute top-full left-0 pt-1 w-60 z-50 animate-in fade-in slide-in-from-top-1"
                onMouseEnter={() => handleMouseEnter('management')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="neu-flat p-2 bg-[var(--neu-bg)] border border-[var(--neu-dark)]/50 shadow-2xl rounded-xl flex flex-col gap-0.5">
                  <Link
                    href="/management#leadership"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs font-semibold cursor-pointer block transition-colors"
                  >
                    Board of Directors & Leadership
                  </Link>
                  <Link
                    href="/management#chairman"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs font-semibold cursor-pointer block transition-colors"
                  >
                    Chairman&apos;s Profile
                  </Link>
                  <Link
                    href="/management#managingdirector"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs font-semibold cursor-pointer block transition-colors"
                  >
                    Managing Director (MD)
                  </Link>
                  <Link
                    href="/teachers"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-bold text-xs flex items-center justify-between cursor-pointer block transition-colors"
                  >
                    <span>Teachers & Faculty</span>
                    <span className="neu-badge text-[9px]">Real</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 2. Academics Dropdown */}
          <div
            className="relative shrink-0 overflow-visible"
            onMouseEnter={() => handleMouseEnter('academics')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => toggleDropdown('academics')}
              className={`neu-btn py-1.5 px-2.5 flex items-center gap-1 text-[11px] cursor-pointer ${
                activeDropdown === 'academics' ? 'neu-pressed text-emerald-700 dark:text-emerald-400' : ''
              }`}
            >
              <span>Academics</span>
              <ChevronDown
                className={`w-3 h-3 text-[var(--text-muted)] transition-transform duration-200 ${
                  activeDropdown === 'academics' ? 'rotate-180 text-emerald-600' : ''
                }`}
              />
            </button>

            {activeDropdown === 'academics' && (
              <div
                className="absolute top-full left-0 pt-1 w-64 z-50 animate-in fade-in slide-in-from-top-1"
                onMouseEnter={() => handleMouseEnter('academics')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="neu-flat p-2 bg-[var(--neu-bg)] border border-[var(--neu-dark)]/50 shadow-2xl rounded-xl flex flex-col gap-0.5">
                  <Link
                    href="/#departments"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs font-semibold cursor-pointer block transition-colors"
                  >
                    Computer Science & Eng. (CSE)
                  </Link>
                  <Link
                    href="/#departments"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs font-semibold cursor-pointer block transition-colors"
                  >
                    Electrical & Electronic Eng. (EEE)
                  </Link>
                  <Link
                    href="/#departments"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs font-semibold cursor-pointer block transition-colors"
                  >
                    Civil Engineering (CE)
                  </Link>
                  <Link
                    href="/#departments"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs font-semibold cursor-pointer block transition-colors"
                  >
                    Information & Comm. Eng. (ICE)
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 3. Students Dropdown (Contains Students & Alumni) */}
          <div
            className="relative shrink-0 overflow-visible"
            onMouseEnter={() => handleMouseEnter('students')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => toggleDropdown('students')}
              className={`neu-btn py-1.5 px-2.5 flex items-center gap-1 text-[11px] cursor-pointer ${
                activeDropdown === 'students' ? 'neu-pressed text-emerald-700 dark:text-emerald-400' : ''
              }`}
            >
              <span>Students</span>
              <ChevronDown
                className={`w-3 h-3 text-[var(--text-muted)] transition-transform duration-200 ${
                  activeDropdown === 'students' ? 'rotate-180 text-emerald-600' : ''
                }`}
              />
            </button>

            {activeDropdown === 'students' && (
              <div
                className="absolute top-full left-0 pt-1 w-56 z-50 animate-in fade-in slide-in-from-top-1"
                onMouseEnter={() => handleMouseEnter('students')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="neu-flat p-2 bg-[var(--neu-bg)] border border-[var(--neu-dark)]/50 shadow-2xl rounded-xl flex flex-col gap-0.5">
                  <Link
                    href="/students"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Users2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Students Information</span>
                  </Link>
                  <Link
                    href="/alumni"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                    <span>Alumni Network</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 4. Notice Dropdown (Contains Notice & Career) */}
          <div
            className="relative shrink-0 overflow-visible"
            onMouseEnter={() => handleMouseEnter('notice')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => toggleDropdown('notice')}
              className={`neu-btn py-1.5 px-2.5 flex items-center gap-1 text-[11px] cursor-pointer ${
                activeDropdown === 'notice' ? 'neu-pressed text-emerald-700 dark:text-emerald-400' : ''
              }`}
            >
              <Bell className="w-3 h-3 text-amber-500" />
              <span>Notice</span>
              <ChevronDown
                className={`w-3 h-3 text-[var(--text-muted)] transition-transform duration-200 ${
                  activeDropdown === 'notice' ? 'rotate-180 text-emerald-600' : ''
                }`}
              />
            </button>

            {activeDropdown === 'notice' && (
              <div
                className="absolute top-full left-0 pt-1 w-56 z-50 animate-in fade-in slide-in-from-top-1"
                onMouseEnter={() => handleMouseEnter('notice')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="neu-flat p-2 bg-[var(--neu-bg)] border border-[var(--neu-dark)]/50 shadow-2xl rounded-xl flex flex-col gap-0.5">
                  <Link
                    href="/#notices"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Bell className="w-3.5 h-3.5 text-amber-500" />
                    <span>Notice Board</span>
                  </Link>
                  <Link
                    href="/career"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--text-main)] text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                    <span>Career & Placement</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 5. Admissions 2026 Direct CTA */}
          <Link
            href="/#admission"
            className="neu-btn py-1.5 px-2.5 text-emerald-700 dark:text-emerald-400 font-bold text-[11px] shrink-0 cursor-pointer"
          >
            Admissions 2026
          </Link>
        </nav>

      </div>
    </header>
  );
}
