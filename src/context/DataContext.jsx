'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext(null);

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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
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
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'সুদীর্ঘ সামরিক ও একাডেমিক অভিজ্ঞতা সম্পন্ন ব্যক্তিত্ব। রংপুর ইঞ্জিনিয়ারিং কলেজের সার্বিক শিক্ষা কার্যক্রম ও শৃঙ্খলার প্রধান কর্ণধার।'
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
    designation: 'Lecturer & Department Coordinator',
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
  {
    id: 't-eee-5',
    name: 'Md. Shakil Mia',
    nameBn: 'মোঃ শাকিল মিয়া',
    department: 'EEE',
    designation: 'Lab Instructor',
    qualification: 'Diploma in Electrical Engineering',
    email: 'shakil.eee@recr.edu.bd',
    phone: '01700-222005',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
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
  {
    id: 't-ce-4',
    name: 'Md. Imran Ali',
    nameBn: 'মোঃ ইমরান আলী',
    department: 'CE',
    designation: 'Lecturer',
    qualification: 'B.Sc. in Civil Eng. (KUET)',
    email: 'imran.ce@recr.edu.bd',
    phone: '01700-333004',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
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
  {
    id: 't-ice-3',
    name: 'Md. Shahinuzzaman Lemon',
    nameBn: 'মোঃ শাহীনুজ্জামান লেমন',
    department: 'ICE',
    designation: 'Lecturer',
    qualification: 'B.Sc. & M.Sc. in ICE (University of Rajshahi)',
    email: 'shahin.ice@recr.edu.bd',
    phone: '01700-444003',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-ice-4',
    name: 'MD. Mahmudul Hasan',
    nameBn: 'মোঃ মাহমুদুল হাসান',
    department: 'ICE',
    designation: 'Lecturer',
    qualification: 'B.Sc. in ICE (RU)',
    email: 'mahmudul.ice@recr.edu.bd',
    phone: '01700-444004',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },

  // Basic Science & Mathematics
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
  },
  {
    id: 't-sci-3',
    name: 'Asha Rani Roy',
    nameBn: 'আশা রানী রায়',
    department: 'Science',
    designation: 'Lecturer of Mathematics',
    qualification: 'M.Sc. in Applied Mathematics (RU)',
    email: 'asha.math@recr.edu.bd',
    phone: '01700-555003',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80'
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
    fileUrl: '/reports/audit_report_printable.html'
  },
  {
    id: 'n-2',
    title: 'জরুরি নিরাপত্তা সতর্কতা: পুরাতন সার্ভারের /alumni স্প্যাম থেকে নতুন ক্লাউড পোর্টালে রূপান্তর',
    date: '০৪ নভেম্বর, ২০২৬',
    category: 'নিরাপত্তা (Security)',
    tagColor: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300',
    description: 'পুরাতন পিএইচপি হোস্টিংয়ের /alumni ডিরেক্টরিতে ইন্দোনেশিয়ান স্লট স্প্যাম ইনজেকশনের কারণে প্রাতিষ্ঠানিক ডাটা ও শিক্ষার্থীদের সুরক্ষায় সম্পূর্ণ নতুন সার্ভারলেস নেক্সট ডট জেএস ফ্রন্টএন্ড বাস্তবায়ন করা হয়েছে।',
    fileUrl: '/audit-report'
  },
  {
    id: 'n-3',
    title: 'বিএসসি ইঞ্জিনিয়ারিং ফল সেমিস্টার ফাইনাল পরীক্ষা ২০২৬-এর সময়সূচী প্রকাশ',
    date: '২৮ অক্টোবর, ২০২৬',
    category: 'পরীক্ষা (Exam)',
    tagColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
    description: 'রাজশাহী বিশ্ববিদ্যালয় কর্তৃক নির্ধারিত সময়সূচী অনুযায়ী সকল ডিপার্টমেন্টের ৭ম ও ৫ম সেমিস্টার ফাইনাল পরীক্ষা আগামী ১৫ নভেম্বর থেকে শুরু হবে। রুটিন কলেজের নোটিশ বোর্ডে টানানো হয়েছে।',
    fileUrl: '#'
  },
  {
    id: 'n-4',
    title: 'Project Showcasing and Poster Presentation - Spring 2026 organized by EEE & CSE',
    date: '২৫ অক্টোবর, ২০২৬',
    category: 'ইভেন্ট (Event)',
    tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
    description: 'রংপুর ইঞ্জিনিয়ারিং কলেজের শিক্ষার্থীদের রোবটিক্স, এমবেডেড সিস্টেম, এআই ও সিভিল আর্কিটেকচারাল প্রজেক্ট প্রদর্শন ও পুরস্কার বিতরণী অনুষ্ঠান আগামী ১০ নভেম্বর অনুষ্ঠিত হবে।',
    fileUrl: '#'
  },
  {
    id: 'n-5',
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
    name: 'মোঃ তানভীর হাসান',
    phone: '01712-345678',
    hscGpa: '4.83',
    sscGpa: '5.00',
    hscBoard: 'Dinajpur',
    hscYear: '2025',
    dept: 'CSE',
    status: 'Verified',
    createdAt: '2026-11-03',
    notes: 'মেধাবী কোটা ও হোস্টেল সুবিধার আবেদন করেছেন।'
  },
  {
    id: 'app-2',
    name: 'ফারজানা ববি',
    phone: '01823-456789',
    hscGpa: '4.50',
    sscGpa: '4.80',
    hscBoard: 'Rajshahi',
    hscYear: '2025',
    dept: 'EEE',
    status: 'Pending',
    createdAt: '2026-11-04',
    notes: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শেষ করেছেন।'
  }
];

export function DataProvider({ children }) {
  const [leadership, setLeadership] = useState(INITIAL_LEADERSHIP);
  const [teachers, setTeachers] = useState(INITIAL_TEACHERS);
  const [notices, setNotices] = useState(INITIAL_NOTICES);
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  const [adminUser, setAdminUser] = useState(null);

  // Load saved state from localStorage on client-side
  useEffect(() => {
    try {
      const savedNotices = localStorage.getItem('recr_notices');
      if (savedNotices) setNotices(JSON.parse(savedNotices));

      const savedTeachers = localStorage.getItem('recr_teachers');
      if (savedTeachers) setTeachers(JSON.parse(savedTeachers));

      const savedLeadership = localStorage.getItem('recr_leadership');
      if (savedLeadership) setLeadership(JSON.parse(savedLeadership));

      const savedApps = localStorage.getItem('recr_applications');
      if (savedApps) setApplications(JSON.parse(savedApps));

      const savedAdmin = localStorage.getItem('recr_admin_session');
      if (savedAdmin) setAdminUser(JSON.parse(savedAdmin));
    } catch (e) {
      console.error('Failed to load local state:', e);
    }
  }, []);

  // Save changes to localStorage
  const saveNotices = (updated) => {
    setNotices(updated);
    localStorage.setItem('recr_notices', JSON.stringify(updated));
  };

  const saveTeachers = (updated) => {
    setTeachers(updated);
    localStorage.setItem('recr_teachers', JSON.stringify(updated));
  };

  const saveLeadership = (updated) => {
    setLeadership(updated);
    localStorage.setItem('recr_leadership', JSON.stringify(updated));
  };

  const saveApplications = (updated) => {
    setApplications(updated);
    localStorage.setItem('recr_applications', JSON.stringify(updated));
  };

  // Notice CRUD
  const addNotice = (notice) => {
    const newItem = {
      ...notice,
      id: 'n-' + Date.now(),
      date: new Date().toLocaleDateString('bn-BD', { day: '2-digit', month: 'long', year: 'numeric' })
    };
    saveNotices([newItem, ...notices]);
  };

  const editNotice = (id, updatedFields) => {
    saveNotices(notices.map(n => n.id === id ? { ...n, ...updatedFields } : n));
  };

  const deleteNotice = (id) => {
    saveNotices(notices.filter(n => n.id !== id));
  };

  // Teacher CRUD
  const addTeacher = (teacher) => {
    const newItem = { ...teacher, id: 't-' + Date.now() };
    saveTeachers([...teachers, newItem]);
  };

  const editTeacher = (id, updatedFields) => {
    saveTeachers(teachers.map(t => t.id === id ? { ...t, ...updatedFields } : t));
  };

  const deleteTeacher = (id) => {
    saveTeachers(teachers.filter(t => t.id !== id));
  };

  // Leadership CRUD
  const editLeader = (id, updatedFields) => {
    saveLeadership(leadership.map(l => l.id === id ? { ...l, ...updatedFields } : l));
  };

  // Applications
  const addApplication = (app) => {
    const newApp = {
      ...app,
      id: 'app-' + Date.now(),
      status: 'Pending',
      createdAt: new Date().toISOString().split('T')[0]
    };
    saveApplications([newApp, ...applications]);
    return newApp;
  };

  const updateApplicationStatus = (id, status) => {
    saveApplications(applications.map(a => a.id === id ? { ...a, status } : a));
  };

  const deleteApplication = (id) => {
    saveApplications(applications.filter(a => a.id !== id));
  };

  // Superadmin Auth: super@recr.edu.bd / trynot9999*
  const login = (email, password) => {
    if (email === 'super@recr.edu.bd' && password === 'trynot9999*') {
      const user = {
        email,
        role: 'SUPERADMIN',
        name: 'REC System Administrator',
        loggedInAt: new Date().toISOString()
      };
      setAdminUser(user);
      localStorage.setItem('recr_admin_session', JSON.stringify(user));
      return { success: true };
    }
    return { success: false, message: 'ভুল ইমেইল বা পাসওয়ার্ড! সঠিক তথ্য দিয়ে আবার চেষ্টা করুন।' };
  };

  const logout = () => {
    setAdminUser(null);
    localStorage.removeItem('recr_admin_session');
  };

  return (
    <DataContext.Provider
      value={{
        leadership,
        teachers,
        notices,
        applications,
        adminUser,
        isAuthenticated: !!adminUser,
        login,
        logout,
        addNotice,
        editNotice,
        deleteNotice,
        addTeacher,
        editTeacher,
        deleteTeacher,
        editLeader,
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
