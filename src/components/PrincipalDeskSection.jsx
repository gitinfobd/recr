'use client';

import { Award, BookOpen, Quote, Shield, Sparkles, Building2, Wifi, Users } from 'lucide-react';

export default function PrincipalDeskSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Principal's Message */}
        <div className="lg:col-span-7">
          <div className="neu-flat p-6 sm:p-8">
            <div className="flex items-center gap-2 neu-badge text-emerald-700 dark:text-emerald-400 font-bold mb-4">
              <Quote className="w-3.5 h-3.5" />
              <span>অধ্যক্ষ মহোদয়ের বাণী (Principal's Message)</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[var(--text-main)] leading-tight">
              "দক্ষ প্রকৌশলী ও উদ্ভাবনী মেধা বিকাশে আমরা প্রতিশ্রুতিবদ্ধ"
            </h3>

            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-4 leading-relaxed">
              রংপুর ইঞ্জিনিয়ারিং কলেজ উত্তরবঙ্গের তরুণ শিক্ষার্থীদের প্রযুক্তি ও প্রকৌশল শিক্ষায় দক্ষ জনশক্তি হিসেবে গড়ে তুলতে ২০১৪ সাল থেকে নিরলসভাবে কাজ করে যাচ্ছে। রাজশাহী বিশ্ববিদ্যালয়ের প্রকৌশল ও প্রযুক্তি অনুষদভুক্ত আমাদের বিএসসি ইন ইঞ্জিনিয়ারিং প্রোগ্রামগুলো অত্যন্ত যুগোপযোগী এবং আন্তর্জাতিক মানের।
            </p>

            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-3 leading-relaxed">
              থিওরিটিক্যাল ক্লাসের পাশাপাশি ল্যাবরেটরি এক্সপেরিমেন্ট, ইন্ডাস্ট্রিয়াল ভিজিট ও নিয়মিত প্রজেক্ট ওয়ার্কের মাধ্যমে আমরা প্রতিটি শিক্ষার্থীকে বিশ্ববাজারের উপযোগী করে প্রস্তুত করি। আমাদের গ্র্যাজুয়েটরা আজ দেশ-বিদেশের শীর্ষ প্রযুক্তি প্রতিষ্ঠান ও সরকারি সংস্থায় সুনামের সাথে অবদান রাখছে।
            </p>

            <div className="mt-6 pt-5 border-t border-[var(--neu-dark)]/40 flex items-center justify-between">
              <div>
                <div className="font-bold text-sm text-[var(--text-main)]">প্রফেসর ড. ইঞ্জিনিয়ার মোহাম্মদ রফিকুল ইসলাম</div>
                <div className="text-xs text-[var(--text-muted)]">অধ্যক্ষ, রংপুর ইঞ্জিনিয়ারিং কলেজ</div>
              </div>
              <div className="neu-badge font-bold text-xs text-emerald-700 dark:text-emerald-400">
                REC Leadership
              </div>
            </div>
          </div>
        </div>

        {/* Campus Facilities Matrix */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="neu-flat p-5">
            <h4 className="text-sm font-bold text-[var(--text-main)] flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              ক্যাম্পাস সুযোগ-সুবিধাসমূহ (Campus Facilities)
            </h4>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="neu-pressed p-3">
                <Building2 className="w-4 h-4 text-emerald-600 mb-1" />
                <div className="font-bold text-[var(--text-main)]">আধুনিক ল্যাবরেটরি</div>
                <div className="text-[11px] text-[var(--text-muted)] mt-0.5">সব বিভাগে ডেডিকেটেড ল্যাব</div>
              </div>

              <div className="neu-pressed p-3">
                <BookOpen className="w-4 h-4 text-blue-600 mb-1" />
                <div className="font-bold text-[var(--text-main)]">সমৃদ্ধ লাইব্রেরি</div>
                <div className="text-[11px] text-[var(--text-muted)] mt-0.5">১০,০০০+ টেক্সট ও জার্নাল</div>
              </div>

              <div className="neu-pressed p-3">
                <Wifi className="w-4 h-4 text-amber-500 mb-1" />
                <div className="font-bold text-[var(--text-main)]">হাই-স্পিড ওয়াইফাই</div>
                <div className="text-[11px] text-[var(--text-muted)] mt-0.5">ডিজিটাল স্টাডি জোন</div>
              </div>

              <div className="neu-pressed p-3">
                <Users className="w-4 h-4 text-purple-600 mb-1" />
                <div className="font-bold text-[var(--text-main)]">ক্যারিয়ার প্লেসমেন্ট সেল</div>
                <div className="text-[11px] text-[var(--text-muted)] mt-0.5">ইন্টার্নশিপ ও জব ফেয়ার</div>
              </div>
            </div>
          </div>

          <div className="neu-flat p-4 bg-emerald-500/10 border-l-4 border-emerald-600">
            <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
              🎓 মেধাভিত্তিক বৃত্তি ও ওয়েভার সুবিধা
            </div>
            <p className="text-[11px] text-[var(--text-muted)] mt-1 leading-relaxed">
              এসএসসি ও এইচএসসিতে জিপিএ ৫.০০ প্রাপ্ত শিক্ষার্থী এবং অসচ্ছল ও মেধাবী ছাত্র-ছাত্রীদের জন্য বিশেষ সেমিস্টার ফি ওয়েভার এবং স্কলারশিপের সুব্যবস্থা রয়েছে।
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
