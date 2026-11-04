'use client';

import { useState } from 'react';
import { Bell, FileText, Download, Calendar, Tag, ShieldAlert } from 'lucide-react';

const NOTICES = [
  {
    id: 1,
    title: '১ম বর্ষ বিএসসি ইঞ্জিনিয়ারিং ভর্তি বিজ্ঞপ্তি ২০২৬-২০২৭ (রাজশাহী বিশ্ববিদ্যালয় অধিভুক্ত)',
    date: '০২ নভেম্বর, ২০২৬',
    category: 'ভর্তি (Admission)',
    tagColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
    description: 'এইচএসসি (বিজ্ঞান) বা ডিপ্লোমা ইন ইঞ্জিনিয়ারিং উত্তীর্ণ শিক্ষার্থীদের জন্য ৪ বছর মেয়াদী বিএসসি ইঞ্জিনিয়ারিং কোর্সে (CSE, EEE, CE, ICE) ভর্তি কার্যক্রম শুরু হয়েছে।'
  },
  {
    id: 2,
    title: 'জরুরি নিরাপত্তা বিজ্ঞপ্তি: পুরাতন সার্ভার পেজ থেকে নতুন ক্লাউড পোর্টালে স্থানান্তর সংক্রান্ত',
    date: '০৪ নভেম্বর, ২০২৬',
    category: 'নিরাপত্তা (Security)',
    tagColor: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300',
    description: 'ওয়েবসাইটের পুরাতন পিএইচপি হোস্টিংয়ের /alumni পেজে বাহ্যিক স্প্যাম ইনজেকশনের কারণে প্রাতিষ্ঠানিক ডেটা সুরক্ষায় নতুন ক্লাউড প্রিভিউ ও সিকিউর সার্ভারলেস আর্কিটেকচার চালু করা হয়েছে।'
  },
  {
    id: 3,
    title: 'বিএসসি ইঞ্জিনিয়ারিং ফল সেমিস্টার ফাইনাল পরীক্ষা ২০২৬-এর সময়সূচী প্রকাশ',
    date: '২৮ অক্টোবর, ২০২৬',
    category: 'পরীক্ষা (Exam)',
    tagColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
    description: 'রাজশাহী বিশ্ববিদ্যালয় কর্তৃক নির্ধারিত সময়সূচী অনুযায়ী সকল ডিপার্টমেন্টের ৭ম ও ৫ম সেমিস্টার ফাইনাল পরীক্ষা আগামী ১৫ নভেম্বর থেকে শুরু হবে।'
  },
  {
    id: 4,
    title: 'ওয়ালটন হাই-টেক ও সফটওয়্যার কোম্পানিতে অন-ক্যাম্পাস প্লেসমেন্ট ড্রাইভ ২০২৬',
    date: '২২ অক্টোবর, ২০২৬',
    category: 'সার্কুলার (Career)',
    tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
    description: 'সিএসই এবং ইইই বিভাগের ফাইনাল বর্ষের শিক্ষার্থীদের জন্য রংপুর ইঞ্জিনিয়ারিং কলেজ অডিটোরিয়ামে ক্যাম্পাস ইন্টারভিউ অনুষ্ঠিত হবে।'
  }
];

export default function NoticeBoardSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredNotices = selectedCategory === 'all'
    ? NOTICES
    : NOTICES.filter(n => n.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="notices" className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="neu-badge text-amber-600 dark:text-amber-400 font-bold mb-3">
          <Bell className="w-3.5 h-3.5" />
          <span>অফিসিয়াল নোটিশ বোর্ড</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-main)]">
          সর্বশেষ নোটিশ ও প্রাতিষ্ঠানিক আদেশ
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
          রংপুর ইঞ্জিনিয়ারিং কলেজের ভর্তি, পরীক্ষা ও প্রশাসনিক হালনাগাদ তথ্যাবলী
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {[
          { id: 'all', label: 'সকল নোটিশ (All)' },
          { id: 'admission', label: 'ভর্তি (Admission)' },
          { id: 'exam', label: 'পরীক্ষা (Exam)' },
          { id: 'security', label: 'নিরাপত্তা (Security)' },
          { id: 'career', label: 'ক্যারিয়ার (Career)' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === tab.id
                ? 'neu-pressed text-emerald-700 dark:text-emerald-400 border border-emerald-500/40'
                : 'neu-btn text-[var(--text-muted)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Notice Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {filteredNotices.map((notice) => (
          <div
            key={notice.id}
            className="neu-flat p-5 flex flex-col justify-between gap-4 transition-all hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${notice.tagColor}`}>
                  {notice.category}
                </span>
                <span className="text-xs text-[var(--text-muted)] flex items-center gap-1 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {notice.date}
                </span>
              </div>

              <h3 className="font-bold text-sm sm:text-base text-[var(--text-main)] leading-snug">
                {notice.title}
              </h3>

              <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                {notice.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[var(--neu-dark)]/40 mt-1">
              <button
                onClick={() => alert(`ডাউনলোড হচ্ছে: ${notice.title}`)}
                className="neu-btn text-xs font-semibold py-1.5 px-3 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-emerald-600" />
                <span>পিডিএফ ডাউনলোড</span>
              </button>
              <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                অফিসিয়াল কপি
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
