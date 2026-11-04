'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  Briefcase,
  Building,
  GraduationCap,
  MapPin,
  Calendar,
  Send,
  Award,
  CheckCircle,
  Clock
} from 'lucide-react';

const JOBS = [
  {
    id: 1,
    title: 'Assistant Engineer (Electronics / Power)',
    organization: 'Walton Hi-Tech Industries PLC',
    location: 'Gazipur, Bangladesh',
    dept: 'EEE / ICE',
    deadline: '২০ নভেম্বর, ২০২৬',
    type: 'Full Time',
    salary: '৳৩৫,০০০ - ৫০,০০০'
  },
  {
    id: 2,
    title: 'Junior Software Engineer (Full Stack JS / Python)',
    organization: 'Brain Station 23 Ltd',
    location: 'Mohakhali DOHS, Dhaka',
    dept: 'CSE',
    deadline: '২৫ নভেম্বর, ২০২৬',
    type: 'Full Time',
    salary: '৳৪০,০০০ - ৫৫,০০০'
  },
  {
    id: 3,
    title: 'Site Civil Engineer (Bridge & Structural)',
    organization: 'Spectra Engineers Ltd',
    location: 'Rangpur Regional Project',
    dept: 'CE',
    deadline: '১৫ নভেম্বর, ২০২৬',
    type: 'Project Basis',
    salary: '৳৩৫,০০০ - ৪৫,০০০'
  },
  {
    id: 4,
    title: 'Network Operations Trainee (NOC)',
    organization: 'Link3 Technologies Ltd',
    location: 'Rangpur & Bogura',
    dept: 'ICE / CSE',
    deadline: '৩০ নভেম্বর, ২০২৬',
    type: 'Full Time',
    salary: '৳২৮,০০০ - ৩৫,০০০'
  }
];

export default function CareerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--neu-bg)]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="neu-badge text-emerald-700 dark:text-emerald-400 font-bold mb-3">
            <Briefcase className="w-4 h-4" />
            <span>প্লেসমেন্ট ও ক্যারিয়ার সেল</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--text-main)]">
            রংপুর ইঞ্জিনিয়ারিং কলেজ ক্যারিয়ার হাব
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
            শিক্ষার্থী ও গ্র্যাজুয়েট প্রকৌশলীদের জন্য শীর্ষস্থানীয় প্রযুক্তি প্রতিষ্ঠানসমূহের চাকরি ও ইন্টার্নশিপ সার্কুলার
          </p>
        </div>

        {/* Corporate Partners Bar */}
        <div className="neu-flat p-5 mb-8 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
            আমাদের গ্র্যাজুয়েটদের অন্যতম নিয়োগকারী প্রতিষ্ঠানসমূহ (Placement Partners)
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <span className="neu-badge px-3 py-1">Walton Hi-Tech</span>
            <span className="neu-badge px-3 py-1">Brain Station 23</span>
            <span className="neu-badge px-3 py-1">Therap BD</span>
            <span className="neu-badge px-3 py-1">Banglalink Digital</span>
            <span className="neu-badge px-3 py-1">PGCB</span>
            <span className="neu-badge px-3 py-1">Max Infrastructure</span>
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {JOBS.map((job) => (
            <div key={job.id} className="neu-flat p-6 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="neu-badge text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                    Dept: {job.dept}
                  </span>
                  <span className="text-[11px] font-medium text-[var(--text-muted)] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> ডেডলাইন: {job.deadline}
                  </span>
                </div>

                <h3 className="font-bold text-base sm:text-lg text-[var(--text-main)] leading-snug">
                  {job.title}
                </h3>

                <div className="mt-3 flex flex-col gap-1.5 text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-2 font-bold text-[var(--text-main)]">
                    <Building className="w-3.5 h-3.5 text-blue-600" />
                    <span>{job.organization}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>{job.location}</span>
                  </div>
                  <div className="text-emerald-700 dark:text-emerald-400 font-bold mt-1">
                    বেতন সীমা: {job.salary} ({job.type})
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--neu-dark)]/40 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">ক্যাম্পাস রেফারেল প্রযোজ্য</span>
                <button
                  onClick={() => alert(`আবেদন সম্পন্ন করতে সিভি পাঠান: career@recr.edu.bd`)}
                  className="neu-btn-primary text-xs font-bold py-1.5 px-3 flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>আবেদন করুন</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Internship Assistance Notice */}
        <div className="neu-flat p-6 bg-emerald-500/10 border-l-4 border-emerald-600">
          <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-300 mb-1">
            🎓 ফাইনাল সেমিস্টার ইন্ডাস্ট্রিয়াল এটাচমেন্ট ও ইন্টার্নশিপ
          </h4>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            ৮ম সেমিস্টারের সকল ডিপার্টমেন্টের শিক্ষার্থীদের জন্য বাধ্যতামূলক ৩ মাসের ইন্ডাস্ট্রিয়াল ইন্টার্নশিপ প্লেসমেন্ট রংপুর ইঞ্জিনিয়ারিং কলেজের ক্যারিয়ার সেল কর্তৃক সরকারি ও কর্পোরেট প্রতিষ্ঠানে বিনামূল্যে ব্যবস্থা করা হয়।
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
