'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  ShieldAlert,
  Printer,
  Download,
  AlertOctagon,
  CheckCircle2,
  Terminal,
  Server,
  Globe,
  FileCode,
  Key,
  ShieldCheck,
  ArrowLeft,
  ExternalLink
} from 'lucide-react';

export default function AuditReportPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--neu-bg)]">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full print:p-0 print:max-w-none">
        
        {/* Back Link & Actions Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 print:hidden">
          <Link href="/" className="neu-btn text-xs font-semibold py-2 px-3 flex items-center gap-1.5 self-start">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>মূল প্রিভিউতে ফিরে যান</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="neu-btn-primary text-xs font-bold py-2.5 px-4 flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>রিপোর্ট প্রিন্ট বা PDF হিসেবে সেভ করুন (Ctrl+P)</span>
            </button>
            <a
              href="/reports/audit_report_printable.html"
              target="_blank"
              className="neu-btn text-xs font-bold py-2.5 px-3 flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>ক্লিন প্রিন্ট ভার্সন</span>
            </a>
          </div>
        </div>

        {/* Audit Report Container */}
        <div className="neu-flat p-6 sm:p-10 border border-red-500/30 print:shadow-none print:border-none print:p-0">
          
          {/* Official Document Header */}
          <div className="border-b-2 border-[var(--neu-dark)]/50 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="neu-badge font-bold text-xs text-red-600 border border-red-500/30 mb-2">
                🚨 সাইবার সিকিউরিটি ফরেনসিক অডিট রিপোর্ট
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] mt-1">
                রংপুর ইঞ্জিনিয়ারিং কলেজ (RECR)
              </h1>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] font-semibold mt-0.5">
                ওয়েবসাইট সিকিউরিটি বিশ্লেষণ, স্প্যাম ইনজেকশন তদন্ত ও স্থায়ী সমাধান নির্দেশিকা
              </p>
            </div>

            <div className="neu-pressed p-3 text-right shrink-0">
              <div className="text-[11px] font-bold text-[var(--text-muted)]">অডিট তারিখ</div>
              <div className="text-xs font-black text-[var(--text-main)]">০৪ নভেম্বর, ২০২৬</div>
              <div className="text-[11px] font-bold text-red-600 mt-1">CVSS স্কোর: ৯.৩ (ক্রিটিক্যাল)</div>
            </div>
          </div>

          {/* Incident Callout */}
          <div className="neu-pressed border-l-4 border-red-600 p-5 rounded-xl mb-8 bg-red-500/5">
            <h2 className="text-base font-bold text-red-600 flex items-center gap-2 mb-2">
              <AlertOctagon className="w-5 h-5" />
              জরুরি সারসংক্ষেপ (স্যারের দৃষ্টি আকর্ষণ ও করণীয়)
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-main)] leading-relaxed font-medium">
              কলেজের মূল ডোমেনের <strong>https://www.recr.edu.bd/alumni</strong> পেজে ইন্দোনেশিয়ান বেটিং সাইটের বিজ্ঞাপন (<strong>HOTDEPO: Link Viral Gampang Menang Situs Slot777</strong>) প্রদর্শিত হচ্ছে। এটি কোনো দুর্ঘটনা নয়—বরং আন্তর্জাতিক জুয়া চক্রের চালানো <strong>Black Hat SEO Spam Doorway Attack</strong>। হ্যাকাররা কলেজের উচ্চ ডোমেন রেটিং (.edu.bd) ব্যবহার করে গুগল সার্চ রেজাল্ট ম্যানিপুলেট করতে এই পেজটি ইনজেক্ট করেছে।
            </p>
          </div>

          {/* Section 1: Detailed Root Cause Analysis */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[var(--text-main)] flex items-center gap-2 mb-3">
              <FileCode className="w-5 h-5 text-emerald-600" />
              ১. হ্যাকের প্রযুক্তিগত কারণ (কেন এই বিজ্ঞাপন দেখাচ্ছে?)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="neu-flat p-4">
                <h4 className="font-bold text-[var(--text-main)] mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  লারাভেল ফ্রেমওয়ার্ক বাইপাস
                </h4>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  কলেজের মূল সাইটটি Laravel PHP-তে তৈরি। কিন্তু আক্রমণকারীরা ওয়েব রুটে সরাসরি <code>public_html/alumni/index.php</code> ফোল্ডার ও ফাইল তৈরি করেছে। ওয়েব সার্ভারের ডিফল্ট রুল অনুসারে ফাইল বিদ্যমান থাকলে লারাভেল বাইপাস হয়ে হ্যাকারের স্ক্রিপ্ট রান হয়।
                </p>
              </div>

              <div className="neu-flat p-4">
                <h4 className="font-bold text-[var(--text-main)] mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  গুগল সার্চ কনসোল হাইজ্যাকিং
                </h4>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  পেজে হ্যাকারের নিজস্ব গুগল মেটা টোকেন (<code>ns6qi_nRNLevMVdzlVFK2EYPC_FNWcOOlWuRbkGnhCU</code>) যুক্ত করা হয়েছে। এর মাধ্যমে তারা গুগলে দ্রুত জুয়ার পেজ হিসেবে ইনডেক্সিং রিকোয়েস্ট পাঠিয়েছে।
                </p>
              </div>

              <div className="neu-flat p-4">
                <h4 className="font-bold text-[var(--text-main)] mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  ডোরওয়ে রিডাইরেকশন
                </h4>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  পেজের কোডে <code>&lt;link rel="amphtml" href="https://admin-hotdepo.pages.dev/"&gt;</code> যুক্ত রয়েছে, যা মোবাইল সার্চ ট্রাফিককে স্বয়ংক্রিয়ভাবে ক্লাউডফ্লেয়ার পেজের মাধ্যমে জুয়ার সার্ভারে রিডাইরেক্ট করে।
                </p>
              </div>

              <div className="neu-flat p-4">
                <h4 className="font-bold text-[var(--text-main)] mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  উন্মুক্ত অ্যাডমিন গেটওয়ে
                </h4>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  সার্ভারের <code>/cpanel</code> (Port 2083) এবং <code>/webmail</code> (Port 2096) সরাসরি ইন্টারনেটে উন্মুক্ত রয়েছে এবং কোনো আইপি রেস্ট্রিকশন বা 2FA নেই।
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Technical Parameters Table */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[var(--text-main)] flex items-center gap-2 mb-3">
              <Server className="w-5 h-5 text-blue-600" />
              ২. ডায়াগনস্টিক অডিট প্যারামিটার
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-[var(--neu-dark)]/50 text-[var(--text-muted)]">
                    <th className="py-2.5 px-3">প্যারামিটার</th>
                    <th className="py-2.5 px-3">বর্তমান স্ট্যাটাস</th>
                    <th className="py-2.5 px-3">ঝুঁকি মূল্যায়ন</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--neu-dark)]/30 text-[var(--text-main)]">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold">আক্রান্ত ইউআরএল</td>
                    <td className="py-2.5 px-3 font-mono">https://www.recr.edu.bd/alumni/index.php</td>
                    <td className="py-2.5 px-3"><span className="neu-badge text-red-600 font-bold">CRITICAL</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold">হোস্টিং আইপি ও প্রোভাইডার</td>
                    <td className="py-2.5 px-3 font-mono">50.28.37.166 (Liquid Web / cPanel)</td>
                    <td className="py-2.5 px-3"><span className="neu-badge text-amber-600 font-bold">HIGH</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold">ওয়েব সার্ভার সফটওয়্যার</td>
                    <td className="py-2.5 px-3 font-mono">LiteSpeed Web Server</td>
                    <td className="py-2.5 px-3"><span className="neu-badge text-blue-600 font-bold">INFO</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold">HTTP সিকিউরিটি হেডার্স (HSTS, CSP)</td>
                    <td className="py-2.5 px-3 text-red-600 font-semibold">সম্পূর্ণ অনুপস্থিত (MISSING)</td>
                    <td className="py-2.5 px-3"><span className="neu-badge text-amber-600 font-bold">HIGH</span></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold">গুগল পেনাল্টির ঝুঁকি</td>
                    <td className="py-2.5 px-3 text-red-600 font-semibold">অতি উচ্চ (Blacklisting & De-indexing)</td>
                    <td className="py-2.5 px-3"><span className="neu-badge text-red-600 font-bold">CRITICAL</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: Step by Step Remediation Guide */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[var(--text-main)] flex items-center gap-2 mb-3">
              <Terminal className="w-5 h-5 text-emerald-600" />
              ৩. পয়েন্ট-টু-পয়েন্ট সমাধান নির্দেশিকা (আইটি অ্যাডমিনের জন্য)
            </h3>

            <div className="flex flex-col gap-4 text-xs">
              {/* Step 1 */}
              <div className="neu-pressed p-4 rounded-xl">
                <div className="flex items-center gap-2 font-bold text-[var(--text-main)] mb-1">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">১</span>
                  সিপ্যানেল ফাইল ম্যানেজার থেকে হ্যাক ফোল্ডার অবিলম্বে মুছে ফেলা
                </div>
                <p className="text-[var(--text-muted)] ml-7 leading-relaxed">
                  সিপ্যানেল ফাইল ম্যানেজারে ঢুকে <code>public_html/alumni</code> ফোল্ডারটি সম্পূর্ণরূপে স্থায়ীভাবে ডিলিট (Trash বাইপাস) করে দিন। এতে সাথে সাথে পেজে জুয়ার স্ক্রিপ্ট রান হওয়া বন্ধ হবে।
                </p>
              </div>

              {/* Step 2 */}
              <div className="neu-pressed p-4 rounded-xl">
                <div className="flex items-center gap-2 font-bold text-[var(--text-main)] mb-1">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">২</span>
                  SSH টার্মিনাল দিয়ে লুকায়িত ওয়েবশেল ও পরিবর্তিত ফাইল স্ক্যান
                </div>
                <p className="text-[var(--text-muted)] ml-7 leading-relaxed">
                  সার্ভারে হ্যাকার কোনো ব্যাকডোর রেখে গেছে কি না তা যাচাই করতে SSH-এ নিচের কমান্ডটি চালান:
                </p>
                <div className="ml-7 mt-2 p-3 bg-slate-900 text-emerald-400 rounded-lg font-mono text-[11px] overflow-x-auto">
                  grep -rnE '(eval\(|base64_decode\(|gzinflate\(|shell_exec\()' /home/*/public_html/
                </div>
              </div>

              {/* Step 3 */}
              <div className="neu-pressed p-4 rounded-xl">
                <div className="flex items-center gap-2 font-bold text-[var(--text-main)] mb-1">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">৩</span>
                  গুগল সার্চ কনসোল থেকে হ্যাকারের ভেরিফিকেশন বাতিল ও URL রিমুভাল
                </div>
                <p className="text-[var(--text-muted)] ml-7 leading-relaxed">
                  Google Search Console-এ গিয়ে <strong>Removals</strong> মেনু থেকে <code>https://www.recr.edu.bd/alumni</code> ইউআরএলটির জন্য রিমুভাল রিকোয়েস্ট পাঠান এবং <strong>URL Inspection</strong> থেকে ফ্রেশ ইনডেক্সিং সাবমিট করুন।
                </p>
              </div>

              {/* Step 4 */}
              <div className="neu-pressed p-4 rounded-xl">
                <div className="flex items-center gap-2 font-bold text-[var(--text-main)] mb-1">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">৪</span>
                  আপলোড ফোল্ডারে পিএইচপি এক্সিকিউশন নিষিদ্ধ করা (.htaccess)
                </div>
                <p className="text-[var(--text-muted)] ml-7 leading-relaxed">
                  ভবিষ্যতে যাতে কোনো ফাইল আপলোড ফর্ম দিয়ে পিএইচপি ফাইল আপলোড ও রান করতে না পারে, সেজন্য <code>uploads/.htaccess</code> ফাইলে নিচের রুল যুক্ত করুন:
                </p>
                <div className="ml-7 mt-2 p-3 bg-slate-900 text-sky-400 rounded-lg font-mono text-[11px] overflow-x-auto">
                  &lt;Files *.php&gt;<br />
                  &nbsp;&nbsp;Order Deny,Allow<br />
                  &nbsp;&nbsp;Deny from all<br />
                  &lt;/Files&gt;
                </div>
              </div>

              {/* Step 5 */}
              <div className="neu-pressed p-4 rounded-xl">
                <div className="flex items-center gap-2 font-bold text-[var(--text-main)] mb-1">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">৫</span>
                  ক্লাউডফ্লেয়ার (Cloudflare) WAF যুক্ত করা ও পাসওয়ার্ড পরিবর্তন
                </div>
                <p className="text-[var(--text-muted)] ml-7 leading-relaxed">
                  সিপ্যানেল পাসওয়ার্ড পরিবর্তন করে ২-ফ্যাক্টর অথেনটিকেশন (2FA) চালু করুন এবং ক্লাউডফ্লেয়ার ফ্রি WAF দিয়ে সাইটকে বট ও ডিডিওএস ট্রাফিক থেকে সুরক্ষিত করুন।
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Modern Cloud Solution Preview */}
          <div className="neu-flat p-6 border-l-4 border-emerald-600 bg-emerald-500/5">
            <h3 className="text-base font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5" />
              স্থায়ী সমাধান: আধুনিক ও অভেদ্য ক্লাউড প্রিভিউ (recrtest.vercel.app)
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              পুরাতন পিএইচপি শেয়ার্ড হোস্টিংয়ের দুর্বলতা চিরতরে দূর করতে আমরা সম্পূর্ণ সাইটের একটি সুরক্ষিত, বিদ্যুৎগতির এবং নিউমরফিজম ডিজাইনের প্রিভিউ তৈরি করেছি যা বর্তমানে <strong>https://recrtest.vercel.app</strong> এ লাইভ রয়েছে। এটি সম্পূর্ণ সার্ভারলেস ও ইমিউটেবল হওয়ায় এখানে পিএইচপি ফাইল ইনজেকশন বা হ্যাক করা সম্পূর্ণ অসম্ভব।
            </p>
          </div>

          {/* Document Sign-off */}
          <div className="mt-8 pt-6 border-t border-[var(--neu-dark)]/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-[var(--text-muted)]">
            <div>
              <div className="font-bold text-[var(--text-main)]">প্রতিবেদন প্রস্তুতকারী:</div>
              <div>সাইবার সিকিউরিটি ও আইটি অডিট সেল</div>
              <div>রংপুর ইঞ্জিনিয়ারিং কলেজ শিক্ষার্থী ও প্রতিনিধি দল</div>
            </div>
            <div className="sm:text-right">
              <div className="font-bold text-[var(--text-main)]">অনুলিপি প্রেরিত:</div>
              <div>১. অধ্যক্ষ মহোদয়, রংপুর ইঞ্জিনিয়ারিং কলেজ</div>
              <div>২. বিভাগীয় প্রধান (CSE/EEE/CE/ICE)</div>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
