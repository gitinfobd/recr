'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  GraduationCap,
  Calendar,
  BookOpen,
  Wifi,
  Building,
  Award,
  Download,
  Users2,
  Clock,
  Sparkles
} from 'lucide-react';

export default function StudentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--neu-bg)]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="neu-badge text-emerald-700 dark:text-emerald-400 font-bold mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>শিক্ষার্থী কর্নার (Student Life)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--text-main)]">
            রংপুর ইঞ্জিনিয়ারিং কলেজ শিক্ষার্থী পোর্টাল
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
            ক্লাস রুটিন, পরীক্ষার সময়সূচী, লাইব্রেরি সুবিধা, ক্লাব কার্যক্রম এবং ছাত্রাবাস নির্দেশিকা
          </p>
        </div>

        {/* Quick Student Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="neu-flat p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[var(--text-main)] mb-1">
                ক্লাস রুটিন ও ক্যালেন্ডার
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                ১ম থেকে ৮ম সেমিস্টারের প্রতিটি ডিপার্টমেন্টের (CSE, EEE, CE, ICE) সাপ্তাহিক ক্লাস রুটিন ও ল্যাব সিডিউল।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[var(--neu-dark)]/40 flex justify-between items-center text-xs">
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">সেশন ২০২৬</span>
              <button onClick={() => alert('ক্লাস রুটিন ডাউনলোড হচ্ছে...')} className="neu-btn py-1.5 px-3 font-bold flex items-center gap-1">
                <Download className="w-3.5 h-3.5" />
                <span>রুটিন দেখুন</span>
              </button>
            </div>
          </div>

          <div className="neu-flat p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[var(--text-main)] mb-1">
                ডিজিটাল সেন্ট্রাল লাইব্রেরি
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                ১০,০০০+ প্রকৌশল পাঠ্যবই, জার্নাল এবং আইইইই (IEEE) পেপারের সমৃদ্ধ সংগ্রহশালা। শীতাতপ নিয়ন্ত্রিত ডিজিটাল রিডিং জোন।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[var(--neu-dark)]/40 flex justify-between items-center text-xs">
              <span className="font-semibold text-blue-700 dark:text-blue-400">সকাল ৯টা - বিকাল ৫টা</span>
              <span className="neu-badge text-[10px] font-bold">ই-লাইব্রেরি এক্সেস</span>
            </div>
          </div>

          <div className="neu-flat p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[var(--text-main)] mb-1">
                আবাসিক হোস্টেল সুবিধা
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                দূরবর্তী শিক্ষার্থীদের জন্য ক্যাম্পাসের সন্নিকটে ছাত্র ও ছাত্রীদের জন্য সুসজ্জিত ও সার্বক্ষণিক নিরাপত্তা বেষ্টিত পৃথক হোস্টেল।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[var(--neu-dark)]/40 flex justify-between items-center text-xs">
              <span className="font-semibold text-amber-700 dark:text-amber-400">ওয়াইফাই ও খাবার জোন</span>
              <span className="neu-badge text-[10px] font-bold">সিট বুকিং চালু</span>
            </div>
          </div>
        </div>

        {/* Co-Curricular Clubs */}
        <div className="neu-flat p-6 sm:p-8">
          <h3 className="font-bold text-lg text-[var(--text-main)] mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            শিক্ষার্থীদের ক্লাব ও সহ-শিক্ষা কার্যক্রম (Student Clubs)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="neu-pressed p-4">
              <div className="font-bold text-[var(--text-main)] mb-1 text-emerald-700 dark:text-emerald-400">
                REC Programming Club
              </div>
              <p className="text-[var(--text-muted)] leading-relaxed">
                জাতীয় ও আন্তর্জাতিক প্রোগ্রামিং প্রতিযোগিতায় (ICPC, NCPC) অংশগ্রহণের জন্য নিয়মিত কন্টেস্ট ও ক্যাম্প।
              </p>
            </div>

            <div className="neu-pressed p-4">
              <div className="font-bold text-[var(--text-main)] mb-1 text-blue-700 dark:text-blue-400">
                REC Robotics & IoT Club
              </div>
              <p className="text-[var(--text-muted)] leading-relaxed">
                ড্রোন তৈরি, লাইন ফলোয়ার রোবট ও ইন্ডাস্ট্রিয়াল অটোমেশন প্রজেক্ট নিয়ে গবেষণা ও প্রতিযোগিতা।
              </p>
            </div>

            <div className="neu-pressed p-4">
              <div className="font-bold text-[var(--text-main)] mb-1 text-amber-700 dark:text-amber-400">
                REC Civil Engineering Society
              </div>
              <p className="text-[var(--text-muted)] leading-relaxed">
                স্ট্রাকচারাল মডেল মেকিং, মেগা প্রজেক্ট সাইট ভিজিট এবং আধুনিক অটোক্যাড সফটওয়্যার ওয়ার্কশপ।
              </p>
            </div>

            <div className="neu-pressed p-4">
              <div className="font-bold text-[var(--text-main)] mb-1 text-purple-700 dark:text-purple-400">
                Sports & Cultural Club
              </div>
              <p className="text-[var(--text-muted)] leading-relaxed">
                বার্ষিক ক্রিকেট ও ফুটবল টুর্নামেন্ট, নবীনবরণ, বিতর্ক উৎসব ও জাতীয় দিবস উদযাপন।
              </p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
