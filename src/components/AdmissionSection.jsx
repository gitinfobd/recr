'use client';

import { useState } from 'react';
import {
  GraduationCap,
  CheckCircle,
  PhoneCall,
  FileCheck,
  CreditCard,
  Send,
  AlertCircle,
  Clock,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { useData } from '@/context/DataContext';

export default function AdmissionSection() {
  const { addApplication } = useData();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    hscGpa: '',
    sscGpa: '',
    hscBoard: 'Dinajpur',
    hscYear: '2025',
    dept: 'CSE',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addApplication(formData);
    setSubmitted(true);
  };

  return (
    <section id="admission" className="py-12 px-4 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="neu-badge text-emerald-700 dark:text-emerald-400 font-bold mb-3">
          <GraduationCap className="w-4 h-4" />
          <span>ভর্তি কার্যক্রম ২০২৬-২০২৭</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-main)]">
          বিএসসি ইন ইঞ্জিনিয়ারিং ভর্তি যোগ্যতা ও আবেদন
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
          রাজশাহী বিশ্ববিদ্যালয় অধিভুক্ত রংপুর ইঞ্জিনিয়ারিং কলেজে ৪ বছর মেয়াদী বিএসসি ইঞ্জিনিয়ারিং কোর্সে আসন সীমিত
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        
        {/* Left Column: Requirements & High-Contrast Contact Card */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          
          {/* HIGH-CONTRAST HELPLINE CARD (Fixed: Zero white-on-white text) */}
          <div className="rounded-2xl p-6 bg-slate-900 text-white shadow-xl border-2 border-emerald-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500 text-slate-950 uppercase tracking-wider flex items-center gap-1.5 shadow">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>সরাসরি ভর্তি হেল্পলাইন</span>
                </span>
                <span className="text-[11px] text-emerald-300 font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3" /> সকাল ৯টা - সন্ধ্যা ৭টা
                </span>
              </div>

              <p className="text-xs text-slate-200 mb-4 leading-relaxed font-medium">
                ভর্তি সংক্রান্ত যেকোনো তথ্য, সিট বুকিং বা সরাসরি ক্যাম্পাস পরিদর্শনের জন্য কল করুন:
              </p>

              {/* Ultra-Prominent Contact Numbers */}
              <div className="flex flex-col gap-2.5">
                <a
                  href="tel:01714228756"
                  className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 hover:bg-emerald-900 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-sm">
                      ১
                    </div>
                    <div>
                      <div className="text-[11px] text-emerald-300 font-semibold">অফিসিয়াল ভর্তি হটলাইন</div>
                      <div className="text-lg font-black text-white font-mono tracking-wider group-hover:text-amber-300 transition-colors">
                        01714-228756
                      </div>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-600 text-white px-2.5 py-1 rounded-md font-bold">Call Now</span>
                </a>

                <a
                  href="tel:01855979496"
                  className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 hover:bg-emerald-900 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-sm">
                      ২
                    </div>
                    <div>
                      <div className="text-[11px] text-emerald-300 font-semibold">এডমিশন অফিসার</div>
                      <div className="text-lg font-black text-white font-mono tracking-wider group-hover:text-amber-300 transition-colors">
                        01855-979496
                      </div>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-600 text-white px-2.5 py-1 rounded-md font-bold">Call Now</span>
                </a>
              </div>

              {/* bKash Payment Note */}
              <div className="mt-4 pt-3 border-t border-slate-700 flex items-center gap-2 text-xs text-amber-300 font-semibold">
                <CreditCard className="w-4 h-4 shrink-0 text-amber-400" />
                <span>বিকাশ/নগদ মার্চেন্টে ভর্তি ফি প্রদানযোগ্য: 01714-228756</span>
              </div>
            </div>
          </div>

          {/* APPLICATION REQUIREMENTS DETAIL CARD */}
          <div className="neu-flat p-6">
            <h3 className="font-bold text-base text-[var(--text-main)] mb-3 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              ভর্তির আবশ্যকীয় যোগ্যতা ও শর্তাবলী
            </h3>

            <div className="flex flex-col gap-3 text-xs text-[var(--text-muted)] leading-relaxed">
              <div className="neu-pressed p-3">
                <div className="font-bold text-[var(--text-main)] mb-1 text-emerald-700 dark:text-emerald-400">
                  ১. এইচএসসি (বিজ্ঞান শাখা) শিক্ষার্থীদের জন্য:
                </div>
                <p>
                  এইচএসসি বা সমমানের পরীক্ষায় পদার্থবিজ্ঞান, রসায়ন ও উচ্চতর গণিত বিষয়সহ ন্যূনতম জিপিএ ৩.০০ এবং এসএসসি ও এইচএসসি মিলিয়ে সর্বমোট জিপিএ ৬.৫০ থাকতে হবে।
                </p>
              </div>

              <div className="neu-pressed p-3">
                <div className="font-bold text-[var(--text-main)] mb-1 text-blue-700 dark:text-blue-400">
                  ২. ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষার্থীদের জন্য:
                </div>
                <p>
                  বাংলাদেশ কারিগরি শিক্ষা বোর্ডের (BTEB) অধীনে ৪ বছর মেয়াদী ডিপ্লোমা ইন ইঞ্জিনিয়ারিং পরীক্ষায় ন্যূনতম সিজিপিএ ২.৫০ প্রাপ্ত শিক্ষার্থীরা সরাসরি বিএসসি কোর্সে ভর্তির আবেদন করতে পারবেন।
                </p>
              </div>

              <div className="neu-pressed p-3">
                <div className="font-bold text-[var(--text-main)] mb-1 text-amber-700 dark:text-amber-400">
                  ৩. প্রয়োজনীয় কাগজপত্র (Checklist):
                </div>
                <ul className="list-disc list-inside space-y-1">
                  <li>এসএসসি ও এইচএসসি পরীক্ষার মূল মার্কশিট ও প্রশংসাপত্র</li>
                  <li>সদ্য তোলা ৪ কপি পাসপোর্ট সাইজ ল্যাব প্রিন্ট রঙিন ছবি</li>
                  <li>শিক্ষার্থী ও অভিভাবকের জাতীয় পরিচয়পত্র / জন্মনিবন্ধনের ফটোকপি</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Online Admission Application Form */}
        <div className="lg:col-span-7">
          <div className="neu-flat p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-[var(--neu-dark)]/40 pb-4 mb-5">
              <div>
                <h3 className="font-black text-lg text-[var(--text-main)]">
                  অনলাইন সিট বুকিং ও ভর্তি আবেদন ফর্ম
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">
                  তথ্য পূরণ করে সাবমিট করুন। আমাদের এডমিশন সেল দ্রুত আপনার সাথে যোগাযোগ করবে।
                </p>
              </div>
              <span className="neu-badge font-bold text-xs text-emerald-700 dark:text-emerald-400 hidden sm:inline-flex">
                সেশন ২০২৬-২০২৭
              </span>
            </div>

            {submitted ? (
              <div className="neu-pressed p-8 text-center text-emerald-700 dark:text-emerald-400 font-bold flex flex-col items-center gap-3 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-lg">ধন্যবাদ, {formData.name}!</h4>
                <p className="text-xs font-normal text-[var(--text-muted)] max-w-md">
                  আপনার ভর্তি আবেদনটি সফলভাবে ডাটাবেজে সংরক্ষিত হয়েছে। আমাদের এডমিশন অফিসার আপনার মোবাইল নম্বরে (<span className="font-mono font-bold text-[var(--text-main)]">{formData.phone}</span>) কল করে সিট নিশ্চিত করবেন।
                </p>
                <div className="neu-badge text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mt-2">
                  আবেদন ট্র্যাকিং আইডি: REC-2026-{Math.floor(1000 + Math.random() * 9000)}
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="neu-btn text-xs mt-3 py-2 px-5"
                >
                  আরেকটি আবেদন করুন
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">শিক্ষার্থীর পূর্ণ নাম (Name in English) *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. MD. NAZMUL HOSSAIN"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="neu-input text-xs uppercase"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[var(--text-main)] mb-1">মোবাইল নম্বর (Phone Number) *</label>
                    <input
                      required
                      type="tel"
                      placeholder="01XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="neu-input text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--text-main)] mb-1">কাঙ্ক্ষিত প্রকৌশল বিভাগ (Department) *</label>
                    <select
                      value={formData.dept}
                      onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
                      className="neu-input text-xs font-bold"
                    >
                      <option value="CSE">Computer Science & Engineering (CSE)</option>
                      <option value="EEE">Electrical & Electronic Engineering (EEE)</option>
                      <option value="CE">Civil Engineering (CE)</option>
                      <option value="ICE">Information & Communication Eng. (ICE)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[var(--text-main)] mb-1">এসএসসি জিপিএ *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. 5.00"
                      value={formData.sscGpa}
                      onChange={(e) => setFormData({ ...formData, sscGpa: e.target.value })}
                      className="neu-input text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--text-main)] mb-1">এইচএসসি/ডিপ্লোমা জিপিএ *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. 4.50"
                      value={formData.hscGpa}
                      onChange={(e) => setFormData({ ...formData, hscGpa: e.target.value })}
                      className="neu-input text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--text-main)] mb-1">শিক্ষা বোর্ড *</label>
                    <select
                      value={formData.hscBoard}
                      onChange={(e) => setFormData({ ...formData, hscBoard: e.target.value })}
                      className="neu-input text-xs"
                    >
                      <option value="Dinajpur">দিনাজপুর</option>
                      <option value="Rajshahi">রাজশাহী</option>
                      <option value="Dhaka">ঢাকা</option>
                      <option value="BTEB">কারিগরি (BTEB)</option>
                      <option value="Other">অন্যান্য</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--text-main)] mb-1">পাসের সাল *</label>
                    <select
                      value={formData.hscYear}
                      onChange={(e) => setFormData({ ...formData, hscYear: e.target.value })}
                      className="neu-input text-xs"
                    >
                      <option value="2025">২০২৫</option>
                      <option value="2024">২০২৪</option>
                      <option value="2023">২০২৩</option>
                      <option value="2026">২০২৬ (Appeared)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">হোস্টেল বা ওয়েভার সংক্রান্ত তথ্য (ঐচ্ছিক)</label>
                  <textarea
                    rows={2}
                    placeholder="হোস্টেলে সিট প্রয়োজন কি না বা অন্যান্য জিজ্ঞাসা থাকলে লিখুন..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="neu-input text-xs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="neu-btn-primary text-xs sm:text-sm font-bold py-3 px-6 flex items-center justify-center gap-2 mt-1 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>ভর্তি আবেদন সাবমিট করুন (Submit Application)</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
