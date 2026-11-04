'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  GraduationCap,
  ShieldCheck,
  Search,
  Filter,
  UserPlus,
  Building,
  MapPin,
  Mail,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Briefcase
} from 'lucide-react';

const ALUMNI_DIRECTORY = [
  {
    id: 1,
    name: 'তানভীর আহমেদ',
    dept: 'CSE',
    batch: '২০১৪-২০১৫ (১ম ব্যাচ)',
    designation: 'Senior Lead Software Engineer',
    company: 'Brain Station 23',
    location: 'ঢাকা, বাংলাদেশ',
    email: 'tanvir.cse@recr-alumni.org'
  },
  {
    id: 2,
    name: 'ফারহানা ইসলাম তমা',
    dept: 'EEE',
    batch: '২০১৫-২০১৬ (২য় ব্যাচ)',
    designation: 'Sub-Divisional Engineer',
    company: 'Power Grid Company of Bangladesh (PGCB)',
    location: 'রংপুর গ্রিড',
    email: 'farhana.eee@recr-alumni.org'
  },
  {
    id: 3,
    name: 'মাহমুদুল হাসান',
    dept: 'CE',
    batch: '২০১৬-২০১৭ (৩য় ব্যাচ)',
    designation: 'Assistant Project Manager',
    company: 'Max Infrastructure Ltd',
    location: 'পায়রা মেগা প্রজেক্ট',
    email: 'mahmud.ce@recr-alumni.org'
  },
  {
    id: 4,
    name: 'আরিফুল হক শুভ',
    dept: 'ICE',
    batch: '২০১৭-২০১৮ (৪র্থ ব্যাচ)',
    designation: 'Core Network Engineer',
    company: 'Banglalink Digital',
    location: 'গুলশান, ঢাকা',
    email: 'ariful.ice@recr-alumni.org'
  },
  {
    id: 5,
    name: 'সাদিয়া সুলতানা',
    dept: 'CSE',
    batch: '২০১৮-২০১৯ (৫ম ব্যাচ)',
    designation: 'Full Stack Cloud Developer',
    company: 'Therap (BD) Ltd',
    location: 'ঢাকা, বাংলাদেশ',
    email: 'sadia.cse@recr-alumni.org'
  },
  {
    id: 6,
    name: 'ইমরান হোসেন ইমন',
    dept: 'EEE',
    batch: '২০১৯-২০২০ (৬ষ্ঠ ব্যাচ)',
    designation: 'Robotics & Automation Engineer',
    company: 'Walton Digi-Tech',
    location: 'চন্দ্রা, গাজীপুর',
    email: 'imran.eee@recr-alumni.org'
  }
];

export default function AlumniPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [showRegModal, setShowRegModal] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);

  const filteredAlumni = ALUMNI_DIRECTORY.filter((item) => {
    const matchesDept = selectedDept === 'ALL' || item.dept === selectedDept;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.batch.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleRegister = (e) => {
    e.preventDefault();
    setRegSuccess(true);
    setTimeout(() => {
      setRegSuccess(false);
      setShowRegModal(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--neu-bg)]">
      <Navbar />

      {/* Security Incident Notice Banner */}
      <div className="max-w-7xl mx-auto px-4 pt-4 w-full">
        <div className="neu-flat border-l-4 border-emerald-600 bg-emerald-500/10 p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-xs sm:text-sm text-[var(--text-main)] font-semibold">
              <span className="font-bold text-emerald-700 dark:text-emerald-400">সুরক্ষিত প্রাতিষ্ঠানিক পোর্টাল:</span> পুরাতন পিএইচপি সাইটের <code>/alumni</code> পেজের ক্ষতিকর জুয়ার স্প্যাম সম্পূর্ণরূপে বর্জন করে এই অফিশিয়াল পেজটি চালু করা হয়েছে।
            </p>
          </div>
          <Link
            href="/audit-report"
            className="neu-btn text-xs font-bold py-2 px-3 flex items-center gap-1.5 shrink-0 text-red-600 dark:text-red-400"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>অডিট রিপোর্ট দেখুন</span>
          </Link>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="neu-badge text-emerald-700 dark:text-emerald-400 font-bold mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>অফিসিয়াল অ্যালামনাই নেটওয়ার্ক</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--text-main)]">
            রংপুর ইঞ্জিনিয়ারিং কলেজ প্রাক্তন শিক্ষার্থী পরিষদ
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
            ২০১৪ সাল থেকে দেশ-বিদেশে প্রতিষ্ঠিত রংপুর ইঞ্জিনিয়ারিং কলেজের সকল গ্র্যাজুয়েট প্রকৌশলীদের ঐক্যবদ্ধ ও প্রাতিষ্ঠানিক যোগাযোগ মাধ্যম
          </p>
        </div>

        {/* Action Bar: Search, Filters & Registration CTA */}
        <div className="neu-flat p-5 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder="নাম, প্রতিষ্ঠান, পদবী বা ব্যাচ খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="neu-input pl-10 text-xs sm:text-sm"
              />
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {['ALL', 'CSE', 'EEE', 'CE', 'ICE'].map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDept(d)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedDept === d
                      ? 'neu-pressed text-emerald-700 dark:text-emerald-400 border border-emerald-500/40'
                      : 'neu-btn text-[var(--text-muted)]'
                  }`}
                >
                  {d === 'ALL' ? 'সকল বিভাগ' : d}
                </button>
              ))}
            </div>

            {/* Register Button */}
            <button
              onClick={() => setShowRegModal(true)}
              className="neu-btn-primary text-xs font-bold py-2.5 px-4 w-full md:w-auto flex items-center justify-center gap-2 shrink-0"
            >
              <UserPlus className="w-4 h-4" />
              <span>অ্যালামনাই রেজিস্ট্রেশন</span>
            </button>
          </div>
        </div>

        {/* Alumni Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumnus) => (
            <div key={alumnus.id} className="neu-flat p-6 flex flex-col justify-between gap-4 hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="neu-badge font-bold text-xs text-emerald-700 dark:text-emerald-400">
                    Dept. of {alumnus.dept}
                  </span>
                  <span className="text-[11px] font-medium text-[var(--text-muted)]">
                    {alumnus.batch}
                  </span>
                </div>

                <h3 className="font-bold text-base sm:text-lg text-[var(--text-main)]">
                  {alumnus.name}
                </h3>

                <div className="mt-3 flex flex-col gap-2 text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-2 font-medium">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-[var(--text-main)] font-semibold">{alumnus.designation}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{alumnus.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{alumnus.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--neu-dark)]/40 flex items-center justify-between text-[11px]">
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> ভেরিফাইড অ্যালামনাই
                </span>
                <a
                  href={`mailto:${alumnus.email}`}
                  className="neu-btn py-1 px-2.5 text-xs font-semibold flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" />
                  <span>যোগাযোগ</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="neu-flat p-10 text-center text-[var(--text-muted)] max-w-md mx-auto my-10">
            <GraduationCap className="w-12 h-12 mx-auto text-slate-400 mb-3" />
            <p className="font-semibold text-sm">কোনো অ্যালামনাই রেকর্ড পাওয়া যায়নি।</p>
            <p className="text-xs mt-1">অন্য কোনো ফিল্টার বা সার্চ কি-ওয়ার্ড দিয়ে চেষ্টা করুন।</p>
          </div>
        )}
      </main>

      {/* Registration Modal */}
      {showRegModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="neu-flat p-6 sm:p-8 max-w-lg w-full bg-[var(--neu-bg)] relative">
            <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">
              অ্যালামনাই নেটওয়ার্ক রেজিস্ট্রেশন
            </h3>
            <p className="text-xs text-[var(--text-muted)] mb-5">
              রংপুর ইঞ্জিনিয়ারিং কলেজের প্রাক্তন শিক্ষার্থী হিসেবে অফিশিয়াল ডাটাবেজে অন্তর্ভুক্ত হতে আপনার তথ্য প্রদান করুন।
            </p>

            {regSuccess ? (
              <div className="neu-pressed p-6 text-center text-emerald-700 dark:text-emerald-400 font-bold text-sm flex flex-col items-center gap-2">
                <CheckCircle className="w-8 h-8" />
                <span>আপনার আবেদন সফলভাবে জমা হয়েছে! আইটি সেল কর্তৃক ভেরিফিকেশন শেষে ডাটাবেজে যুক্ত হবে।</span>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="flex flex-col gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">পূর্ণ নাম</label>
                  <input required type="text" placeholder="উদাঃ মোঃ রফিকুল ইসলাম" className="neu-input text-xs" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[var(--text-main)] mb-1">বিভাগ</label>
                    <select required className="neu-input text-xs">
                      <option value="CSE">CSE</option>
                      <option value="EEE">EEE</option>
                      <option value="CE">CE</option>
                      <option value="ICE">ICE</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[var(--text-main)] mb-1">পাসের শিক্ষাবর্ষ</label>
                    <input required type="text" placeholder="উদাঃ ২০১৮" className="neu-input text-xs" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">বর্তমান পদবী ও প্রতিষ্ঠান</label>
                  <input required type="text" placeholder="উদাঃ Software Engineer at Walton" className="neu-input text-xs" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">ইমেইল ও ফোন নম্বর</label>
                  <input required type="email" placeholder="example@gmail.com" className="neu-input text-xs" />
                </div>

                <div className="flex items-center justify-end gap-3 mt-3">
                  <button
                    type="button"
                    onClick={() => setShowRegModal(false)}
                    className="neu-btn text-xs py-2 px-4"
                  >
                    বাতিল
                  </button>
                  <button
                    type="submit"
                    className="neu-btn-primary text-xs font-bold py-2 px-5"
                  >
                    আবেদন জমা দিন
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
