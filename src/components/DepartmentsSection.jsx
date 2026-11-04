'use client';

import { useState } from 'react';
import { Laptop, Cpu, HardHat, Radio, Check, Users, Award, BookOpen, Layers } from 'lucide-react';

const DEPARTMENTS = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering (CSE)',
    bengaliName: 'কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং',
    icon: Laptop,
    seats: 60,
    duration: '৪ বছর (৮ সেমিস্টার)',
    degree: 'B.Sc. in Computer Science & Engineering',
    tagline: 'সফটওয়্যার ডেভেলপমেন্ট, ক্লাউড কম্পিউটিং এবং এআই গবেষণায় আধুনিক শিক্ষা',
    labs: [
      'সফটওয়্যার ডেভেলপমেন্ট ল্যাব (High-end Core i7 PCs)',
      'নেটওয়ার্কিং ও সাইবার সিকিউরিটি ল্যাব (Cisco Routers)',
      'মাইক্রোপ্রসেসর ও এমবেডেড সিস্টেম ল্যাব',
      'ডাটা স্ট্রাকচার ও অ্যালগরিদম রিসার্চ ল্যাব'
    ],
    highlights: [
      'বিশ্বমানের প্রোগ্রামিং কন্টেস্ট ক্লাব',
      'ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট ভিত্তিক শিখন',
      'টপ টেক কোম্পানিগুলোতে ইন্টার্নশিপ ও প্লেসমেন্ট'
    ]
  },
  {
    id: 'eee',
    name: 'Electrical & Electronic Engineering (EEE)',
    bengaliName: 'ইলেকট্রিক্যাল অ্যান্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং',
    icon: Cpu,
    seats: 60,
    duration: '৪ বছর (৮ সেমিস্টার)',
    degree: 'B.Sc. in Electrical & Electronic Engineering',
    tagline: 'পাওয়ার সিস্টেম, সেমিকন্ডাক্টর ও ইন্ডাস্ট্রিয়াল অটোমেশনের সমন্বিত পাঠ্যক্রম',
    labs: [
      'ইলেকট্রিক্যাল সার্কিট ও মেশিনারি ল্যাব',
      'পাওয়ার সিস্টেম প্রোটেকশন ও গ্রিড ল্যাব',
      'ডিজিটাল সিগন্যাল প্রসেসিং (DSP) ল্যাব',
      'কন্ট্রোল সিস্টেম ও ভিএলএসআই ল্যাব'
    ],
    highlights: [
      'পাওয়ার প্ল্যান্ট ও সাব-স্টেশন ফিল্ড ভিজিট',
      'নবায়নযোগ্য শক্তি (সোলার ও উইন্ড) গবেষণা',
      'ইন্ডাস্ট্রিয়াল অটোমেশন ও পিএলসি ট্রেনিং'
    ]
  },
  {
    id: 'ce',
    name: 'Civil Engineering (CE)',
    bengaliName: 'পুরকৌশল (সিভিল ইঞ্জিনিয়ারিং)',
    icon: HardHat,
    seats: 60,
    duration: '৪ বছর (৮ সেমিস্টার)',
    degree: 'B.Sc. in Civil Engineering',
    tagline: 'আধুনিক অবকাঠামো, মেগা প্রজেক্ট ডিজাইন ও পরিবেশবান্ধব নির্মাণ কৌশল',
    labs: [
      'স্ট্রাকচারাল মেকানিক্স ও কনক্রিট টেস্টিং ল্যাব',
      'জিওটেকনিক্যাল ও সয়েল মেকানিক্স ল্যাব',
      'অ্যাডভান্সড সার্ভেইং ও জিআইএস ল্যাব (Total Station)',
      'হাইড্রোলিক্স ও এনভায়রনমেন্টাল ল্যাব'
    ],
    highlights: [
      'অটোম্যাটেড অটোক্যাড ও ই-ট্যাবস ডিজাইন ল্যাব',
      'পদ্মা সেতু ও কর্ণফুলী টানেল স্ট্যান্ডার্ড ফিল্ড কেস স্টাডি',
      'সরকারি ও বেসরকারি কনস্ট্রাকশন সংস্থায় ব্যাপক সুযোগ'
    ]
  },
  {
    id: 'ice',
    name: 'Information & Communication Engineering (ICE)',
    bengaliName: 'তথ্য ও যোগাযোগ প্রকৌশল',
    icon: Radio,
    seats: 60,
    duration: '৪ বছর (৮ সেমিস্টার)',
    degree: 'B.Sc. in Information & Communication Engineering',
    tagline: 'অপটিক্যাল ফাইবার, ওয়্যারলেস নেটওয়ার্ক, ৫জি ও স্যাটেলাইট কমিউনিকেশন',
    labs: [
      'অপটিক্যাল ফাইবার কমিউনিকেশন ল্যাব',
      'ওয়্যারলেস ও সেলুলার নেটওয়ার্কিং ল্যাব',
      'ডিজিটাল টেলিকমিউনিকেশন ল্যাব',
      'রেডিও ফ্রিকোয়েন্সি ও অ্যান্টেনা টেস্ট ল্যাব'
    ],
    highlights: [
      'টেলিকম ও ইন্টারনেট সার্ভিস প্রোভাইডার ল্যাব ট্রেনিং',
      'স্যাটেলাইট ও রাডার সিগন্যাল অ্যানালাইসিস',
      'ডাটা সেন্টারে উচ্চ চাহিদাসম্পন্ন নেটওয়ার্ক ক্যারিয়ার'
    ]
  }
];

export default function DepartmentsSection() {
  const [activeTab, setActiveTab] = useState('cse');
  const activeDept = DEPARTMENTS.find(d => d.id === activeTab) || DEPARTMENTS[0];

  return (
    <section id="departments" className="py-12 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="neu-badge text-emerald-700 dark:text-emerald-400 font-bold mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>শিক্ষা ও বিভাগসমূহ</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-main)]">
          প্রকৌশল বিভাগসমূহ (Academic Departments)
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
          রাজশাহী বিশ্ববিদ্যালয়ের প্রকৌশল ও প্রযুক্তি অনুষদ কর্তৃক অনুমোদিত ৪ বছর মেয়াদী বিএসসি ইঞ্জিনিয়ারিং ডিগ্রি
        </p>
      </div>

      {/* Neumorphic Tab Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
        {DEPARTMENTS.map((dept) => {
          const Icon = dept.icon;
          const isActive = dept.id === activeTab;
          return (
            <button
              key={dept.id}
              onClick={() => setActiveTab(dept.id)}
              className={`p-3 rounded-2xl flex flex-col items-center gap-2 transition-all cursor-pointer ${
                isActive
                  ? 'neu-pressed border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 font-bold'
                  : 'neu-flat hover:neu-flat-hover text-[var(--text-muted)] font-semibold'
              }`}
            >
              <div className={`p-2.5 rounded-xl ${isActive ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs text-center">{dept.id.toUpperCase()}</span>
            </button>
          );
        })}
      </div>

      {/* Active Department Details Showcase */}
      <div className="neu-flat p-6 sm:p-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--neu-dark)]/40 pb-6 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Department of {activeDept.id.toUpperCase()}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[var(--text-main)] mt-1">
              {activeDept.name}
            </h3>
            <p className="text-sm font-semibold text-[var(--text-muted)] mt-0.5">
              {activeDept.bengaliName}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="neu-badge text-emerald-700 dark:text-emerald-400 font-bold">
              আসন সংখ্যা: {activeDept.seats}
            </span>
            <span className="neu-badge text-blue-700 dark:text-blue-400 font-bold">
              কোর্স ব্যাপ্তি: {activeDept.duration}
            </span>
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)] mb-6 font-medium">
          {activeDept.tagline}
        </p>

        {/* Two-Column Grid: Labs & Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Labs */}
          <div className="neu-pressed p-5">
            <h4 className="text-sm font-bold text-[var(--text-main)] flex items-center gap-2 mb-3">
              <Laptop className="w-4 h-4 text-emerald-600" />
              ল্যাবরেটরি ও ব্যবহারিক সুবিধাসমূহ
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[var(--text-muted)]">
              {activeDept.labs.map((lab, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{lab}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights */}
          <div className="neu-pressed p-5">
            <h4 className="text-sm font-bold text-[var(--text-main)] flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-amber-500" />
              বিভাগীয় বৈশিষ্ট্য ও ক্যারিয়ার ফোকাস
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[var(--text-muted)]">
              {activeDept.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
