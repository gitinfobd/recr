'use client';

import { useState } from 'react';
import { GraduationCap, CheckCircle, PhoneCall, HelpCircle, Send } from 'lucide-react';

export default function AdmissionSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    hscGpa: '',
    dept: 'CSE',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="admission" className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="neu-badge text-emerald-700 dark:text-emerald-400 font-bold mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>ভর্তি কার্যক্রম ২০২৬-২০২৭</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-main)]">
          বিএসসি ইন ইঞ্জিনিয়ারিং ভর্তি আবেদন
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
          রাজশাহী বিশ্ববিদ্যালয় অধিভুক্ত রংপুর ইঞ্জিনিয়ারিং কলেজে ৪ বছর মেয়াদী কোর্সে সরাসরি ভর্তি চলছে
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        
        {/* Left: Requirements & Helpline */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="neu-flat p-6">
            <h3 className="font-bold text-base text-[var(--text-main)] mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              ভর্তির ন্যূনতম যোগ্যতা
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-[var(--text-muted)] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5"></span>
                <span>এইচএসসি (বিজ্ঞান শাখা) পদার্থ, রসায়ন ও গণিতসহ ন্যূনতম জিপিএ ৩.০০ এবং মোট জিপিএ ৬.৫০ থাকতে হবে।</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5"></span>
                <span>বাংলাদেশ কারিগরি শিক্ষা বোর্ডের অধীনে ৪ বছর মেয়াদী ডিপ্লোমা ইন ইঞ্জিনিয়ারিং উত্তীর্ণ শিক্ষার্থীরা ২য় বর্ষে ক্রেডিট ট্রান্সফার বা ১ম বর্ষে ভর্তির সুযোগ পাবেন।</span>
              </li>
            </ul>
          </div>

          <div className="neu-flat p-6 bg-gradient-to-br from-emerald-800 to-green-950 text-white">
            <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-emerald-300" />
              সরাসরি ভর্তি হেল্পলাইন
            </h4>
            <p className="text-xs text-emerald-100 mb-3">
              সিট বুকিং ও ভর্তি সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি যোগাযোগ করুন:
            </p>
            <div className="flex flex-col gap-1.5 font-mono text-sm font-bold">
              <a href="tel:01714228756" className="hover:underline flex items-center gap-2">
                📞 ০১৭১৪-২২৮৭৫৬
              </a>
              <a href="tel:01855979496" className="hover:underline flex items-center gap-2">
                📞 ০১৮৫৫-৯৭৯৪৯৬
              </a>
            </div>
            <div className="mt-3 pt-3 border-t border-emerald-700/60 text-[11px] text-emerald-200">
              বিকাশ মার্চেন্ট একাউন্টে ভর্তি ফি প্রদানযোগ্য।
            </div>
          </div>
        </div>

        {/* Right: Online Admission Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="neu-flat p-6 sm:p-8">
            <h3 className="font-bold text-lg text-[var(--text-main)] mb-1">
              অনলাইন সিট বুকিং ও ভর্তি আবেদন ফর্ম
            </h3>
            <p className="text-xs text-[var(--text-muted)] mb-5">
              তথ্য পূরণ করে আবেদন সাবমিট করুন। আমাদের ভর্তি প্রতিনিধি আপনার সাথে ২৪ ঘণ্টার মধ্যে যোগাযোগ করবেন।
            </p>

            {submitted ? (
              <div className="neu-pressed p-8 text-center text-emerald-700 dark:text-emerald-400 font-bold flex flex-col items-center gap-3">
                <CheckCircle className="w-12 h-12" />
                <h4 className="text-base">ধন্যবাদ, {formData.name}!</h4>
                <p className="text-xs font-normal text-[var(--text-muted)]">
                  আপনার আবেদনটি সফলভাবে গৃহীত হয়েছে। শীঘ্রই আমাদের এডমিশন অফিসার আপনার মোবাইল নম্বরে ({formData.phone}) কল করবেন।
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="neu-btn text-xs mt-3 py-2 px-4"
                >
                  আরেকটি আবেদন করুন
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">শিক্ষার্থীর পূর্ণ নাম *</label>
                  <input
                    required
                    type="text"
                    placeholder="উদাঃ মোঃ নাজমুল হোসেন"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="neu-input text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[var(--text-main)] mb-1">মোবাইল নম্বর (সচল) *</label>
                    <input
                      required
                      type="tel"
                      placeholder="০১XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="neu-input text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--text-main)] mb-1">এসএসসি ও এইচএসসি মোট জিপিএ *</label>
                    <input
                      required
                      type="text"
                      placeholder="উদাঃ ৮.৫০"
                      value={formData.hscGpa}
                      onChange={(e) => setFormData({ ...formData, hscGpa: e.target.value })}
                      className="neu-input text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">কাঙ্ক্ষিত প্রকৌশল বিভাগ *</label>
                  <select
                    value={formData.dept}
                    onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
                    className="neu-input text-xs"
                  >
                    <option value="CSE">কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE)</option>
                    <option value="EEE">ইলেকট্রিক্যাল অ্যান্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং (EEE)</option>
                    <option value="CE">পুরকৌশল / সিভিল ইঞ্জিনিয়ারিং (CE)</option>
                    <option value="ICE">তথ্য ও যোগাযোগ প্রকৌশল (ICE)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">বার্তা বা প্রশ্ন (যদি থাকে)</label>
                  <textarea
                    rows={2}
                    placeholder="হোস্টেল সুবিধা বা ওয়েভার সংক্রান্ত তথ্য জানতে লিখুন..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="neu-input text-xs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="neu-btn-primary text-xs sm:text-sm font-bold py-3 px-6 flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>আবেদনপত্র সাবমিট করুন</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
