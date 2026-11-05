'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  Users2,
  Search,
  Mail,
  Phone,
  GraduationCap,
  Building,
  CheckCircle,
  Briefcase,
  Layers,
  ArrowLeft
} from 'lucide-react';
import { useData } from '@/context/DataContext';

export default function TeachersPage() {
  const { teachers } = useData();
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeachers = teachers.filter((t) => {
    const matchesDept = selectedDept === 'ALL' || t.department === selectedDept;
    const matchesSearch =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.nameBn.includes(searchQuery) ||
      t.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.qualification.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[var(--neu-bg)]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="neu-badge text-emerald-700 dark:text-emerald-400 font-bold mb-3">
            <Users2 className="w-4 h-4" />
            <span>অফিসিয়াল ফ্যাকাল্টি প্রোফাইল</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--text-main)]">
            রংপুর ইঞ্জিনিয়ারিং কলেজ শিক্ষকমণ্ডলী
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
            বুয়েট, রুয়েট, কুয়েট, শাবিপ্রবি ও রাজশাহী বিশ্ববিদ্যালয় থেকে ডিগ্রিধারী অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকবৃন্দ
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="neu-flat p-5 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder="শিক্ষকের নাম, পদবী বা ডিগ্রি খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="neu-input pl-10 text-xs sm:text-sm"
              />
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {[
                { id: 'ALL', label: 'সকল বিভাগ' },
                { id: 'CSE', label: 'CSE' },
                { id: 'EEE', label: 'EEE' },
                { id: 'CE', label: 'CE' },
                { id: 'ICE', label: 'ICE' },
                { id: 'Science', label: 'Basic Science' }
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDept(d.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedDept === d.id
                      ? 'neu-pressed text-emerald-700 dark:text-emerald-400 border border-emerald-500/40'
                      : 'neu-btn text-[var(--text-muted)]'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="neu-flat p-5 flex flex-col justify-between gap-4 transition-transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start gap-4">
                  {/* Photo */}
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow bg-slate-200 dark:bg-slate-800 shrink-0 border-2 border-emerald-500/30">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/logo.jpg';
                      }}
                    />
                  </div>

                  <div>
                    <span className="neu-badge text-[10px] font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                      Dept. of {teacher.department}
                    </span>
                    <h3 className="font-bold text-base text-[var(--text-main)] leading-tight">
                      {teacher.name}
                    </h3>
                    <div className="text-xs font-semibold text-[var(--text-muted)] mt-0.5">
                      {teacher.nameBn}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--neu-dark)]/40 flex flex-col gap-2 text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-2 font-semibold text-[var(--text-main)]">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{teacher.designation}</span>
                  </div>

                  <div className="flex items-center gap-2 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{teacher.qualification}</span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <a href={`mailto:${teacher.email}`} className="hover:underline truncate">
                      {teacher.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--neu-dark)]/40 flex items-center justify-between text-[11px]">
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> অফিশিয়াল ফ্যাকাল্টি
                </span>
                <a
                  href={`tel:${teacher.phone}`}
                  className="neu-btn py-1 px-2.5 text-xs font-semibold flex items-center gap-1 text-[var(--text-main)]"
                >
                  <Phone className="w-3 h-3 text-emerald-600" />
                  <span>কল করুন</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredTeachers.length === 0 && (
          <div className="neu-flat p-10 text-center text-[var(--text-muted)] max-w-md mx-auto my-10">
            <Users2 className="w-12 h-12 mx-auto text-slate-400 mb-3" />
            <p className="font-semibold text-sm">কোনো শিক্ষকের তথ্য পাওয়া যায়নি।</p>
            <p className="text-xs mt-1">অন্য কোনো নাম বা বিভাগ দিয়ে অনুসন্ধান করুন।</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
