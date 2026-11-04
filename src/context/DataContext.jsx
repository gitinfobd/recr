'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '@/lib/firebase';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  onAuthStateChanged
} from 'firebase/auth';

const DataContext = createContext(null);

export const INITIAL_SITE_SETTINGS = {
  siteTitle: 'Rangpur Engineering College',
  siteTitleBn: 'রংপুর ইঞ্জিনিয়ারিং কলেজ',
  affiliation: 'Affiliated by University of Rajshahi',
  location: 'জি. এল. রায় রোড, দখিগঞ্জ, মাহিগঞ্জ, রংপুর-৫৪০৩',
  helpline1: '01714-228756',
  helpline2: '01855-979496',
  email: 'info@recr.edu.bd',
  facebookUrl: 'https://web.facebook.com/recr.edu.bd',
  youtubeUrl: 'https://youtube.com/@recr',
  linkedinUrl: 'https://linkedin.com/school/recr',
  logoUrl: '/logo.jpg',
  marqueeNotice: 'রাজশাহী বিশ্ববিদ্যালয় অধিভুক্ত উত্তরবঙ্গের প্রথম বি.এসসি ইঞ্জিনিয়ারিং কলেজ • রংপুর ইঞ্জিনিয়ারিং কলেজে ৪ বছর মেয়াদী বিএসসি ইঞ্জিনিয়ারিং কোর্সে (CSE, EEE, CE, ICE) ভর্তি চলছে • সরাসরি হেল্পলাইন: ০১৭১৪-২২৮৭৫৬, ০১৮৫৫-৯৭৯৪৯৬'
};

export const INITIAL_HERO_DATA = {
  badge: '11 Years of Academic Excellence (Est. 2014)',
  title: 'Build Your Engineering Career With',
  highlight: 'Rangpur Engineering College',
  description: 'উত্তরবঙ্গের প্রথম ও সর্ববৃহৎ বেসরকারি প্রকৌশল মহাবিদ্যালয়। রাজশাহী বিশ্ববিদ্যালয়ের প্রকৌশল ও প্রযুক্তি অনুষদ কর্তৃক প্রদত্ত সিলেবাসে আধুনিক ল্যাব, অভিজ্ঞ শিক্ষকমণ্ডলী এবং ওয়াইফাইযুক্ত ডিজিটাল ক্যাম্পাসে ৪ বছর মেয়াদী বিএসসি ইঞ্জিনিয়ারিং (CSE, EEE, CE, ICE)।',
  deptCount: '৪টি',
  studentCount: '১২০০+',
  degreeInfo: '১০০% রাবি ডিগ্রি',
  carouselImages: [
    {
      id: 'c-1',
      url: '/college-entrance.jpg',
      title: 'ক্যাম্পাস প্রবেশদ্বার ও শিক্ষার্থী সমাবেশ'
    },
    {
      id: 'c-2',
      url: '/rec-head.jpg',
      title: 'রংপুর ইঞ্জিনিয়ারিং কলেজ মূল একাডেমিক ভবন ও পরিবহন'
    },
    {
      id: 'c-3',
      url: '/campus-slide.png',
      title: 'ডিজিটাল ল্যাবরেটরি ও প্রজেক্ট প্রদর্শনী'
    }
  ]
};

export const INITIAL_PRINCIPAL_CARD = {
  header: 'PRINCIPAL',
  title: 'PRINCIPAL',
  quote: 'As the Principal of Rangpur Engineering College, I warmly welcome you to the inspiring world of science, technology, and innovation. Together, let\'s shape the future..',
  name: 'Col. (Retd.) M. A. Baten',
  designation: 'Principal, Rangpur Engineering College',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  buttonText: 'VIEW MORE',
  buttonLink: '/management#leadership'
};

export const INITIAL_LEADERSHIP = [
  {
    id: 'lead-1',
    name: 'Md. Ashraful Alam Al-Amin',
    nameBn: 'মোঃ আশরাফুল আলম আল-আমিন',
    designation: 'Chairman, Governing Body',
    designationBn: 'চেয়ারম্যান, গভর্নিং বডি',
    phone: '01714-228756',
    email: 'chairman@recr.edu.bd',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'রংপুর ইঞ্জিনিয়ারিং কলেজের প্রতিষ্ঠাতা চেয়ারম্যান ও সমাজসেবক। উত্তরবঙ্গে প্রযুক্তি শিক্ষার প্রসারে নিরলসভাবে কাজ করে যাচ্ছেন।'
  },
  {
    id: 'lead-2',
    name: 'Md. Idrish Ali',
    nameBn: 'মোঃ ইদ্রিস আলী',
    designation: 'Managing Director',
    designationBn: 'ব্যবস্থাপনা পরিচালক (MD)',
    phone: '01855-979496',
    email: 'md@recr.edu.bd',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'প্রতিষ্ঠানের প্রশাসনিক ব্যবস্থাপনা, অবকাঠামোগত উন্নয়ন এবং শিক্ষার্থীদের গবেষণামূলক সুবিধাদি নিশ্চিতকরণে নিয়োজিত।'
  },
  {
    id: 'lead-3',
    name: 'Col. (Retd.) M. A. Baten',
    nameBn: 'কর্নেল (অব.) এম. এ. বাতেন',
    designation: 'Principal',
    designationBn: 'অধ্যক্ষ',
    phone: '01711-000000',
    email: 'principal@recr.edu.bd',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'সুদীর্ঘ সামরিক ও একাডেমিক অভিজ্ঞতা সম্পন্ন ব্যক্তিত্ব। রংপুর ইঞ্জিনিয়ারিং কলেজের সার্বিক শিক্ষা কার্যক্রম ও শৃঙ্খলার প্রধান কর্ণধার।'
  }
];

export const INITIAL_DEPARTMENTS = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering (CSE)',
    bengaliName: 'কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং',
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

export const INITIAL_TEACHERS = [
  // Computer Science & Engineering (CSE)
  {
    id: 't-cse-1',
    name: 'Jnananjan Roy',
    nameBn: 'জ্ঞানরঞ্জন রায়',
    department: 'CSE',
    designation: 'Lecturer',
    qualification: 'B.Sc. in CSE (SUST)',
    email: 'jnananjan.cse@recr.edu.bd',
    phone: '01700-111001',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-cse-2',
    name: 'Dipanjan Das Dipto',
    nameBn: 'দীপাঞ্জন দাস দীপ্ত',
    department: 'CSE',
    designation: 'Lecturer',
    qualification: 'B.Sc. in CSE (AIUB)',
    email: 'dipanjan.cse@recr.edu.bd',
    phone: '01700-111002',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-cse-3',
    name: 'Md. Tarikul Islam',
    nameBn: 'মোঃ তারিকুল ইসলাম',
    department: 'CSE',
    designation: 'Lecturer',
    qualification: 'B.Sc. in CSE (PUST)',
    email: 'tarikul.cse@recr.edu.bd',
    phone: '01700-111003',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-cse-4',
    name: 'Md. Maskur Al Shal Sabil',
    nameBn: 'মোঃ মাসকুর আল শাল সাবিল',
    department: 'CSE',
    designation: 'Lecturer',
    qualification: 'B.Sc. in CSE (RU)',
    email: 'maskur.cse@recr.edu.bd',
    phone: '01700-111004',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-cse-5',
    name: 'Md. Mezanur Rahman',
    nameBn: 'মোঃ মিজানুর রহমান',
    department: 'CSE',
    designation: 'Senior Lab Assistant',
    qualification: 'Diploma in Computer Technology',
    email: 'mezanur.cse@recr.edu.bd',
    phone: '01700-111005',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  },

  // Electrical & Electronic Engineering (EEE)
  {
    id: 't-eee-1',
    name: 'Aman Ullah Aman',
    nameBn: 'আমান উল্লাহ আমান',
    department: 'EEE',
    designation: 'Lecturer & Coordinator',
    qualification: 'B.Sc. in EEE (RUET)',
    email: 'aman.eee@recr.edu.bd',
    phone: '01700-222001',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-eee-2',
    name: 'Amena Akter',
    nameBn: 'আমেনা আক্তার',
    department: 'EEE',
    designation: 'Lecturer',
    qualification: 'B.Sc. in EEE (RU)',
    email: 'amena.eee@recr.edu.bd',
    phone: '01700-222002',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-eee-3',
    name: 'Polas Chandra Roy',
    nameBn: 'পলাশ চন্দ্র রায়',
    department: 'EEE',
    designation: 'Lecturer',
    qualification: 'B.Sc. in EEE (RU)',
    email: 'polas.eee@recr.edu.bd',
    phone: '01700-222003',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-eee-4',
    name: 'Jubayer Ahmmed',
    nameBn: 'জুবায়ের আহমেদ',
    department: 'EEE',
    designation: 'Lecturer',
    qualification: 'B.Sc. in EEE (KUET)',
    email: 'jubayer.eee@recr.edu.bd',
    phone: '01700-222004',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
  },

  // Civil Engineering (CE)
  {
    id: 't-ce-1',
    name: 'Sajedur Rahman',
    nameBn: 'সাজেদুর রহমান',
    department: 'CE',
    designation: 'Assistant Professor & Head',
    qualification: 'B.Sc. in Civil Eng. (RUET), M.Sc. in Structural Eng.',
    email: 'sajedur.ce@recr.edu.bd',
    phone: '01700-333001',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-ce-2',
    name: 'Jarif Ferdous Rashik',
    nameBn: 'জারিফ ফেরদৌস রাশিক',
    department: 'CE',
    designation: 'Lecturer',
    qualification: 'B.Sc. in Civil Eng. (AUST)',
    email: 'jarif.ce@recr.edu.bd',
    phone: '01700-333002',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-ce-3',
    name: 'Md. Mahamudul Hasan',
    nameBn: 'মোঃ মাহমুদুল হাসান',
    department: 'CE',
    designation: 'Lecturer',
    qualification: 'B.Sc. in Civil Eng. (RUET)',
    email: 'mahamudul.ce@recr.edu.bd',
    phone: '01700-333003',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80'
  },

  // Information & Communication Engineering (ICE)
  {
    id: 't-ice-1',
    name: 'Md. al-Hafiz',
    nameBn: 'মোঃ আল-হাফিজ',
    department: 'ICE',
    designation: 'Lecturer & Coordinator',
    qualification: 'B.Sc. & M.Sc. in ICE (University of Rajshahi)',
    email: 'alhafiz.ice@recr.edu.bd',
    phone: '01700-444001',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-ice-2',
    name: 'Imran Hossen',
    nameBn: 'ইমরান হোসেন',
    department: 'ICE',
    designation: 'Lecturer',
    qualification: 'B.Sc. & M.Sc. in ICE (University of Rajshahi)',
    email: 'imran.ice@recr.edu.bd',
    phone: '01700-444002',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  },

  // Basic Science
  {
    id: 't-sci-1',
    name: 'Md. Shahadat Hossain',
    nameBn: 'মোঃ শাহাদাত হোসেন',
    department: 'Science',
    designation: 'Assistant Professor (Physics)',
    qualification: 'M.Sc. in Physics (RU)',
    email: 'shahadat.phy@recr.edu.bd',
    phone: '01700-555001',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-sci-2',
    name: 'Rokshana Sabnom',
    nameBn: 'রোকসানা শবনম',
    department: 'Science',
    designation: 'Assistant Professor (Chemistry)',
    qualification: 'M.Sc. in Chemistry (RU)',
    email: 'rokshana.chem@recr.edu.bd',
    phone: '01700-555002',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  }
];

export const INITIAL_NOTICES = [
  {
    id: 'n-1',
    title: '১ম বর্ষ বিএসসি ইঞ্জিনিয়ারিং ভর্তি বিজ্ঞপ্তি ২০২৬-২০২৭ (রাজশাহী বিশ্ববিদ্যালয় অধিভুক্ত)',
    date: '০২ নভেম্বর, ২০২৬',
    category: 'ভর্তি (Admission)',
    tagColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
    description: 'এইচএসসি (বিজ্ঞান শাখা) ও ডিপ্লোমা ইন ইঞ্জিনিয়ারিং উত্তীর্ণ শিক্ষার্থীদের জন্য ৪ বছর মেয়াদী বিএসসি ইঞ্জিনিয়ারিং কোর্সে (CSE, EEE, CE, ICE) সরাসরি আসন বুকিং ও ভর্তি কার্যক্রম চলমান রয়েছে।',
    fileUrl: '#'
  },
  {
    id: 'n-2',
    title: 'বিএসসি ইঞ্জিনিয়ারিং ফল সেমিস্টার ফাইনাল পরীক্ষা ২০২৬-এর সময়সূচী প্রকাশ',
    date: '২৮ অক্টোবর, ২০২৬',
    category: 'পরীক্ষা (Exam)',
    tagColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
    description: 'রাজশাহী বিশ্ববিদ্যালয় কর্তৃক নির্ধারিত সময়সূচী অনুযায়ী সকল ডিপার্টমেন্টের ৭ম ও ৫ম সেমিস্টার ফাইনাল পরীক্ষা আগামী ১৫ নভেম্বর থেকে শুরু হবে। রুটিন কলেজের নোটিশ বোর্ডে টানানো হয়েছে।',
    fileUrl: '#'
  },
  {
    id: 'n-3',
    title: 'Project Showcasing and Poster Presentation - Spring 2026 organized by EEE & CSE',
    date: '২৫ অক্টোবর, ২০২৬',
    category: 'ইভেন্ট (Event)',
    tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
    description: 'রংপুর ইঞ্জিনিয়ারিং কলেজের শিক্ষার্থীদের রোবটিক্স, এমবেডেড সিস্টেম, এআই ও সিভিল আর্কিটেকচারাল প্রজেক্ট প্রদর্শন ও পুরস্কার বিতরণী অনুষ্ঠান আগামী ১০ নভেম্বর অনুষ্ঠিত হবে।',
    fileUrl: '#'
  },
  {
    id: 'n-4',
    title: 'ওয়ালটন হাই-টেক ও সফটওয়্যার কোম্পানিতে অন-ক্যাম্পাস প্লেসমেন্ট ড্রাইভ ২০২৬',
    date: '২২ অক্টোবর, ২০২৬',
    category: 'ক্যারিয়ার (Career)',
    tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
    description: 'সিএসই এবং ইইই বিভাগের ফাইনাল বর্ষের শিক্ষার্থীদের জন্য রংপুর ইঞ্জিনিয়ারিং কলেজ অডিটোরিয়ামে ক্যাম্পাস ইন্টারভিউ ও সরাসরি নিয়োগ প্রক্রিয়া অনুষ্ঠিত হবে।',
    fileUrl: '#'
  }
];

export const INITIAL_APPLICATIONS = [
  {
    id: 'app-1',
    name: 'MD. NAZMUL HOSSAIN',
    phone: '01712-345678',
    hscGpa: '4.83',
    sscGpa: '5.00',
    hscBoard: 'Dinajpur',
    hscYear: '2025',
    dept: 'CSE',
    status: 'Verified',
    createdAt: '2026-11-03',
    notes: 'মেধাবী কোটা ও হোস্টেল সুবিধার আবেদন করেছেন।'
  }
];

export function DataProvider({ children }) {
  const [siteSettings, setSiteSettings] = useState(INITIAL_SITE_SETTINGS);
  const [heroData, setHeroData] = useState(INITIAL_HERO_DATA);
  const [principalCard, setPrincipalCard] = useState(INITIAL_PRINCIPAL_CARD);
  const [leadership, setLeadership] = useState(INITIAL_LEADERSHIP);
  const [departments, setDepartments] = useState(INITIAL_DEPARTMENTS);
  const [teachers, setTeachers] = useState(INITIAL_TEACHERS);
  const [notices, setNotices] = useState(INITIAL_NOTICES);
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  const [adminUser, setAdminUser] = useState(null);

  // Load from localStorage
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem('recr_settings');
      if (savedSettings) setSiteSettings(JSON.parse(savedSettings));

      const savedHero = localStorage.getItem('recr_hero');
      if (savedHero) setHeroData(JSON.parse(savedHero));

      const savedPrincipal = localStorage.getItem('recr_principal_card');
      if (savedPrincipal) setPrincipalCard(JSON.parse(savedPrincipal));

      const savedLead = localStorage.getItem('recr_leadership');
      if (savedLead) setLeadership(JSON.parse(savedLead));

      const savedDepts = localStorage.getItem('recr_departments');
      if (savedDepts) setDepartments(JSON.parse(savedDepts));

      const savedTeachers = localStorage.getItem('recr_teachers');
      if (savedTeachers) setTeachers(JSON.parse(savedTeachers));

      const savedNotices = localStorage.getItem('recr_notices');
      if (savedNotices) setNotices(JSON.parse(savedNotices));

      const savedApps = localStorage.getItem('recr_applications');
      if (savedApps) setApplications(JSON.parse(savedApps));

      const savedAdmin = localStorage.getItem('recr_admin_session');
      if (savedAdmin) setAdminUser(JSON.parse(savedAdmin));
    } catch (e) {
      console.error('Failed to load local state:', e);
    }

    // Firebase Auth State Listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const u = {
          email: user.email,
          name: user.displayName || 'REC Administrator',
          photo: user.photoURL || '',
          role: 'SUPERADMIN',
          uid: user.uid
        };
        setAdminUser(u);
        localStorage.setItem('recr_admin_session', JSON.stringify(u));
      }
    });

    return () => unsubscribe();
  }, []);

  // Setters with persistent storage
  const updateSiteSettings = (settings) => {
    const updated = { ...siteSettings, ...settings };
    setSiteSettings(updated);
    localStorage.setItem('recr_settings', JSON.stringify(updated));
  };

  const updateHeroData = (data) => {
    const updated = { ...heroData, ...data };
    setHeroData(updated);
    localStorage.setItem('recr_hero', JSON.stringify(updated));
  };

  const updatePrincipalCard = (card) => {
    const updated = { ...principalCard, ...card };
    setPrincipalCard(updated);
    localStorage.setItem('recr_principal_card', JSON.stringify(updated));
  };

  const updateLeadership = (list) => {
    setLeadership(list);
    localStorage.setItem('recr_leadership', JSON.stringify(list));
  };

  const updateDepartments = (list) => {
    setDepartments(list);
    localStorage.setItem('recr_departments', JSON.stringify(list));
  };

  const updateTeachers = (list) => {
    setTeachers(list);
    localStorage.setItem('recr_teachers', JSON.stringify(list));
  };

  const updateNotices = (list) => {
    setNotices(list);
    localStorage.setItem('recr_notices', JSON.stringify(list));
  };

  const updateApplications = (list) => {
    setApplications(list);
    localStorage.setItem('recr_applications', JSON.stringify(list));
  };

  // CRUD Helpers
  const addNotice = (item) => {
    const newItem = {
      ...item,
      id: 'n-' + Date.now(),
      date: new Date().toLocaleDateString('bn-BD', { day: '2-digit', month: 'long', year: 'numeric' })
    };
    updateNotices([newItem, ...notices]);
  };

  const editNotice = (id, fields) => {
    updateNotices(notices.map(n => n.id === id ? { ...n, ...fields } : n));
  };

  const deleteNotice = (id) => {
    updateNotices(notices.filter(n => n.id !== id));
  };

  const addTeacher = (item) => {
    const newItem = { ...item, id: 't-' + Date.now() };
    updateTeachers([...teachers, newItem]);
  };

  const editTeacher = (id, fields) => {
    updateTeachers(teachers.map(t => t.id === id ? { ...t, ...fields } : t));
  };

  const deleteTeacher = (id) => {
    updateTeachers(teachers.filter(t => t.id !== id));
  };

  const addApplication = (app) => {
    const newApp = {
      ...app,
      id: 'app-' + Date.now(),
      status: 'Pending',
      createdAt: new Date().toISOString().split('T')[0]
    };
    updateApplications([newApp, ...applications]);
    return newApp;
  };

  const updateApplicationStatus = (id, status) => {
    updateApplications(applications.map(a => a.id === id ? { ...a, status } : a));
  };

  const deleteApplication = (id) => {
    updateApplications(applications.filter(a => a.id !== id));
  };

  // Auth: Email/Pass and Google Sign-in
  const login = async (email, password) => {
    // 1. Try Firebase Auth first
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = {
        email: userCredential.user.email,
        name: userCredential.user.displayName || 'REC Administrator',
        role: 'SUPERADMIN',
        uid: userCredential.user.uid
      };
      setAdminUser(user);
      localStorage.setItem('recr_admin_session', JSON.stringify(user));
      return { success: true };
    } catch (fbErr) {
      console.warn('Firebase email auth fell back to static check:', fbErr.code);
      // 2. Authorized Superadmin check: acbd89507@gmail.com / ACBD507*
      if (email === 'acbd89507@gmail.com' && password === 'ACBD507*') {
        const user = {
          email,
          name: 'REC System Administrator',
          role: 'SUPERADMIN',
          loggedInAt: new Date().toISOString()
        };
        setAdminUser(user);
        localStorage.setItem('recr_admin_session', JSON.stringify(user));
        return { success: true };
      }
      return {
        success: false,
        message: fbErr.code === 'auth/wrong-password' || fbErr.code === 'auth/user-not-found'
          ? 'ভুল ইমেইল বা পাসওয়ার্ড! সঠিক তথ্য দিয়ে আবার চেষ্টা করুন।'
          : 'লগইন ব্যর্থ হয়েছে: ' + (fbErr.message || 'ক্রেডেনশিয়াল চেক করুন')
      };
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = {
        email: result.user.email,
        name: result.user.displayName,
        photo: result.user.photoURL,
        role: 'SUPERADMIN',
        uid: result.user.uid
      };
      setAdminUser(user);
      localStorage.setItem('recr_admin_session', JSON.stringify(user));
      return { success: true };
    } catch (err) {
      console.error('Google Sign-In Error:', err);
      return { success: false, message: err.message };
    }
  };

  const sendResetEmail = async (emailToReset) => {
    try {
      await sendPasswordResetEmail(auth, emailToReset);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  const logout = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (e) {
      console.error(e);
    }
    setAdminUser(null);
    localStorage.removeItem('recr_admin_session');
  };

  return (
    <DataContext.Provider
      value={{
        siteSettings,
        updateSiteSettings,
        heroData,
        updateHeroData,
        principalCard,
        updatePrincipalCard,
        leadership,
        updateLeadership,
        departments,
        updateDepartments,
        teachers,
        updateTeachers,
        notices,
        updateNotices,
        applications,
        updateApplications,
        adminUser,
        isAuthenticated: !!adminUser,
        login,
        loginWithGoogle,
        sendResetEmail,
        logout,
        addNotice,
        editNotice,
        deleteNotice,
        addTeacher,
        editTeacher,
        deleteTeacher,
        addApplication,
        updateApplicationStatus,
        deleteApplication
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
