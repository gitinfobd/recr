'use client';

import { useState } from 'react';
import { Bell, FileText, Download, Calendar, Tag, ExternalLink } from 'lucide-react';
import { useData } from '@/context/DataContext';

export default function NoticeBoardSection() {
  const { notices } = useData();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredNotices = selectedCategory === 'all'
    ? notices
    : notices.filter(n => n.category.toLowerCase().includes(selectedCategory.toLowerCase()));

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
          রংপুর ইঞ্জিনিয়ারিং কলেজের ভর্তি, পরীক্ষা ও একাডেমিক হালনাগাদ তথ্যাবলী (সুপারএডমিন কর্তৃক পরিচালিত)
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {[
          { id: 'all', label: 'সকল নোটিশ (All)' },
          { id: 'admission', label: 'ভর্তি (Admission)' },
          { id: 'exam', label: 'পরীক্ষা (Exam)' },
          { id: 'security', label: 'নিরাপত্তা (Security)' },
          { id: 'career', label: 'ক্যারিয়ার (Career)' },
          { id: 'event', label: 'ইভেন্ট (Event)' }
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
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${notice.tagColor || 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'}`}>
                  {notice.category}
                </span>
                <span className="text-xs text-[var(--text-muted)] flex items-center gap-1 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
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
              <a
                href={notice.fileUrl || '#'}
                target={notice.fileUrl?.startsWith('http') || notice.fileUrl?.includes('.html') ? '_blank' : '_self'}
                className="neu-btn text-xs font-semibold py-1.5 px-3 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-emerald-600" />
                <span>পিডিএফ / বিস্তারিত দেখুন</span>
              </a>
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
