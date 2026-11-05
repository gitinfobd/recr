'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  Building2,
  Award,
  Phone,
  Mail,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Users2,
  ArrowRight
} from 'lucide-react';
import { useData } from '@/context/DataContext';

export default function ManagementPage() {
  const { leadership } = useData();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--neu-bg)]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="neu-badge text-emerald-700 dark:text-emerald-400 font-bold mb-3">
            <Building2 className="w-4 h-4" />
            <span>প্রশাসনিক পরিচালনা পর্ষদ</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--text-main)]">
            রংপুর ইঞ্জিনিয়ারিং কলেজ ম্যানেজমেন্ট
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
            প্রতিষ্ঠানের পরিচালনা পর্ষদ, নীতিনির্ধারণী পরিষদ এবং শীর্ষ প্রশাসনিক নেতৃত্ব
          </p>
        </div>

        {/* Leadership Cards */}
        <div id="leadership" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {leadership.map((leader) => (
            <div key={leader.id} className="neu-flat p-6 flex flex-col justify-between gap-4">
              <div>
                <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-4 shadow bg-slate-200 dark:bg-slate-800 border-2 border-emerald-500/20">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/logo.jpg';
                    }}
                  />
                  <div className="absolute top-3 left-3 neu-badge text-[11px] font-bold bg-white/90 text-emerald-800">
                    {leader.designation}
                  </div>
                </div>

                <h3 className="text-lg font-black text-[var(--text-main)] leading-tight">
                  {leader.name}
                </h3>
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mt-0.5">
                  {leader.nameBn} • {leader.designationBn}
                </div>

                <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--neu-dark)]/40 flex flex-col gap-1.5 text-xs">
                <a href={`tel:${leader.phone}`} className="flex items-center gap-2 font-mono font-bold text-[var(--text-main)] hover:text-emerald-600">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{leader.phone}</span>
                </a>
                <a href={`mailto:${leader.email}`} className="flex items-center gap-2 text-[var(--text-muted)] hover:underline truncate">
                  <Mail className="w-3.5 h-3.5 text-amber-500" />
                  <span>{leader.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Governing Body Structure */}
        <div className="neu-flat p-6 sm:p-8 mb-10">
          <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)] mb-2 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600" />
            গভর্নিং বডি ও প্রশাসনিক কাঠামো (Administrative Council)
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
            রংপুর ইঞ্জিনিয়ারিং কলেজের গভর্নিং বডি রাজশাহী বিশ্ববিদ্যালয়ের সংবিধি এবং গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের শিক্ষা মন্ত্রণালয়ের বিধিমালা অনুসারে পরিচালিত হয়।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="neu-pressed p-4">
              <div className="font-bold text-[var(--text-main)] mb-1 text-emerald-700 dark:text-emerald-400">
                পর্ষদের মূল দায়িত্বসমূহ:
              </div>
              <ul className="space-y-1.5 text-[var(--text-muted)]">
                <li>• শিক্ষা কার্যক্রমের মানোন্নয়ন ও রাবির পরীক্ষা সমন্বয়</li>
                <li>• বিশ্বমানের ল্যাবরেটরি যন্ত্রপাতি ও সফটওয়্যার লাইসেন্স সংযোজন</li>
                <li>• শিক্ষক ও কর্মকর্তা নিয়োগ প্রক্রিয়া পরিচালনা</li>
                <li>• মেধাবী ও অসচ্ছল শিক্ষার্থীদের জন্য বৃত্তির অনুমোদন</li>
              </ul>
            </div>

            <div className="neu-pressed p-4">
              <div className="font-bold text-[var(--text-main)] mb-1 text-blue-700 dark:text-blue-400">
                অফিসিয়াল যোগাযোগ ও সময়সূচী:
              </div>
              <ul className="space-y-1.5 text-[var(--text-muted)]">
                <li>• অফিস সময়: শনিবার থেকে বৃহস্পতিবার (সকাল ৯:০০ - বিকাল ৪:০০)</li>
                <li>• প্রশাসনিক ভবন: ২য় তলা, রংপুর ইঞ্জিনিয়ারিং কলেজ ক্যাম্পাস</li>
                <li>• সাধারণ তথ্য সেল: info@recr.edu.bd | হটলাইন: 01714-228756</li>
              </ul>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
