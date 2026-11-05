'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { auth, db, googleProvider } from '@/lib/firebase';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  onAuthStateChanged
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore';

const DataContext = createContext(null);

// Master superadmin - always has access, cannot be removed
const MASTER_SUPERADMIN = 'acbd89507@gmail.com';

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
    { id: 'c-1', url: '/college-entrance.jpg', title: 'ক্যাম্পাস প্রবেশদ্বার ও শিক্ষার্থী সমাবেশ' },
    { id: 'c-2', url: '/rec-head.jpg', title: 'রংপুর ইঞ্জিনিয়ারিং কলেজ মূল একাডেমিক ভবন ও পরিবহন' },
    { id: 'c-3', url: '/campus-slide.png', title: 'ডিজিটাল ল্যাবরেটরি ও প্রজেক্ট প্রদর্শনী' }
  ]
};

export const INITIAL_PRINCIPAL_CARD = {
  header: 'PRINCIPAL',
  title: 'PRINCIPAL',
  quote: 'As the Principal of Rangpur Engineering College, I warmly welcome you to the inspiring world of science, technology, and innovation. Together, let\'s shape the future..',
  name: 'Col. (Retd.) M. A. Baten',
  designation: 'Principal, Rangpur Engineering College',
  image: '/principal-baten.jpg',
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
    image: 'https://www.recr.edu.bd/images/boardofdirector/board-of-derector-img-chairman.jpg',
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
    image: 'https://www.recr.edu.bd/images/managingdirector/MDSir.jpg',
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
    image: '/principal-baten.jpg',
    bio: 'সুদীর্ঘ সামরিক ও একাডেমিক অভিজ্ঞতা সম্পন্ন ব্যক্তিত্ব। রংপুর ইঞ্জিনিয়ারিং কলেজের সার্বিক শিক্ষা কার্যক্রম ও শৃঙ্খলার প্রধান কর্ণধার।'
  }
];

export const INITIAL_DEPARTMENTS = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering (CSE)',
    bengaliName: 'কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং',
    seats: 60,
    duration: '৪ বছর (৮ সেমিস্টার)',
    degree: 'B.Sc. in Computer Science & Engineering'
  },
  {
    id: 'eee',
    name: 'Electrical & Electronic Engineering (EEE)',
    bengaliName: 'ইলেকট্রিক্যাল অ্যান্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং',
    seats: 60,
    duration: '৪ বছর (৮ সেমিস্টার)',
    degree: 'B.Sc. in Electrical & Electronic Engineering'
  },
  {
    id: 'ce',
    name: 'Civil Engineering (CE)',
    bengaliName: 'পুরকৌশল (সিভিল ইঞ্জিনিয়ারিং)',
    seats: 60,
    duration: '৪ বছর (৮ সেমিস্টার)',
    degree: 'B.Sc. in Civil Engineering'
  },
  {
    id: 'ice',
    name: 'Information & Communication Engineering (ICE)',
    bengaliName: 'তথ্য ও যোগাযোগ প্রকৌশল',
    seats: 60,
    duration: '৪ বছর (৮ সেমিস্টার)',
    degree: 'B.Sc. in Information & Communication Engineering'
  }
];

export const INITIAL_TEACHERS = [
  { id: 't-cse-1', name: 'Jnananjan Roy', nameBn: 'জ্ঞানরঞ্জন রায়', department: 'CSE', designation: 'Lecturer', qualification: 'B.Sc. in CSE (SUST)', email: 'jnananjan.cse@recr.edu.bd', phone: '01700-111001', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
  { id: 't-cse-2', name: 'Dipanjan Das Dipto', nameBn: 'দীপাঞ্জন দাস দীপ্ত', department: 'CSE', designation: 'Lecturer', qualification: 'B.Sc. in CSE (AIUB)', email: 'dipanjan.cse@recr.edu.bd', phone: '01700-111002', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
  { id: 't-cse-3', name: 'Md. Tarikul Islam', nameBn: 'মোঃ তারিকুল ইসলাম', department: 'CSE', designation: 'Lecturer', qualification: 'B.Sc. in CSE (PUST)', email: 'tarikul.cse@recr.edu.bd', phone: '01700-111003', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
  { id: 't-cse-4', name: 'Md. Maskur Al Shal Sabil', nameBn: 'মোঃ মাসকুর আল শাল সাবিল', department: 'CSE', designation: 'Lecturer', qualification: 'B.Sc. in CSE (RU)', email: 'maskur.cse@recr.edu.bd', phone: '01700-111004', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80' },
  { id: 't-cse-5', name: 'Md. Mezanur Rahman', nameBn: 'মোঃ মিজানুর রহমান', department: 'CSE', designation: 'Senior Lab Assistant', qualification: 'Diploma in Computer Technology', email: 'mezanur.cse@recr.edu.bd', phone: '01700-111005', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' },
  { id: 't-eee-1', name: 'Aman Ullah Aman', nameBn: 'আমান উল্লাহ আমান', department: 'EEE', designation: 'Lecturer & Coordinator', qualification: 'B.Sc. in EEE (RUET)', email: 'aman.eee@recr.edu.bd', phone: '01700-222001', image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80' },
  { id: 't-eee-2', name: 'Amena Akter', nameBn: 'আমেনা আক্তার', department: 'EEE', designation: 'Lecturer', qualification: 'B.Sc. in EEE (RU)', email: 'amena.eee@recr.edu.bd', phone: '01700-222002', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
  { id: 't-eee-3', name: 'Polas Chandra Roy', nameBn: 'পলাশ চন্দ্র রায়', department: 'EEE', designation: 'Lecturer', qualification: 'B.Sc. in EEE (RU)', email: 'polas.eee@recr.edu.bd', phone: '01700-222003', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80' },
  { id: 't-eee-4', name: 'Jubayer Ahmmed', nameBn: 'জুবায়ের আহমেদ', department: 'EEE', designation: 'Lecturer', qualification: 'B.Sc. in EEE (KUET)', email: 'jubayer.eee@recr.edu.bd', phone: '01700-222004', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { id: 't-ce-1', name: 'Sajedur Rahman', nameBn: 'সাজেদুর রহমান', department: 'CE', designation: 'Assistant Professor & Head', qualification: 'B.Sc. in Civil Eng. (RUET), M.Sc.', email: 'sajedur.ce@recr.edu.bd', phone: '01700-333001', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80' },
  { id: 't-ce-2', name: 'Jarif Ferdous Rashik', nameBn: 'জারিফ ফেরদৌস রাশিক', department: 'CE', designation: 'Lecturer', qualification: 'B.Sc. in Civil Eng. (AUST)', email: 'jarif.ce@recr.edu.bd', phone: '01700-333002', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80' },
  { id: 't-ce-3', name: 'Md. Mahamudul Hasan', nameBn: 'মোঃ মাহমুদুল হাসান', department: 'CE', designation: 'Lecturer', qualification: 'B.Sc. in Civil Eng. (RUET)', email: 'mahamudul.ce@recr.edu.bd', phone: '01700-333003', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80' },
  { id: 't-ice-1', name: 'Md. al-Hafiz', nameBn: 'মোঃ আল-হাফিজ', department: 'ICE', designation: 'Lecturer & Coordinator', qualification: 'B.Sc. & M.Sc. in ICE (RU)', email: 'alhafiz.ice@recr.edu.bd', phone: '01700-444001', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
  { id: 't-ice-2', name: 'Imran Hossen', nameBn: 'ইমরান হোসেন', department: 'ICE', designation: 'Lecturer', qualification: 'B.Sc. & M.Sc. in ICE (RU)', email: 'imran.ice@recr.edu.bd', phone: '01700-444002', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
  { id: 't-sci-1', name: 'Md. Shahadat Hossain', nameBn: 'মোঃ শাহাদাত হোসেন', department: 'Science', designation: 'Assistant Professor (Physics)', qualification: 'M.Sc. in Physics (RU)', email: 'shahadat.phy@recr.edu.bd', phone: '01700-555001', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' },
  { id: 't-sci-2', name: 'Rokshana Sabnom', nameBn: 'রোকসানা শবনম', department: 'Science', designation: 'Assistant Professor (Chemistry)', qualification: 'M.Sc. in Chemistry (RU)', email: 'rokshana.chem@recr.edu.bd', phone: '01700-555002', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' }
];

export const INITIAL_NOTICES = [
  {
    id: 'n-1',
    title: '১ম বর্ষ বিএসসি ইঞ্জিনিয়ারিং ভর্তি বিজ্ঞপ্তি ২০২৬-২০২৭',
    date: '০২ নভেম্বর, ২০২৬',
    category: 'ভর্তি (Admission)',
    description: 'এইচএসসি (বিজ্ঞান শাখা) ও ডিপ্লোমা ইন ইঞ্জিনিয়ারিং উত্তীর্ণ শিক্ষার্থীদের জন্য ৪ বছর মেয়াদী বিএসসি ইঞ্জিনিয়ারিং কোর্সে (CSE, EEE, CE, ICE) সরাসরি আসন বুকিং ও ভর্তি কার্যক্রম চলমান রয়েছে।',
    fileUrl: '#'
  },
  {
    id: 'n-2',
    title: 'ফল সেমিস্টার ফাইনাল পরীক্ষা ২০২৬-এর সময়সূচী প্রকাশ',
    date: '২৮ অক্টোবর, ২০২৬',
    category: 'পরীক্ষা (Exam)',
    description: 'সকল ডিপার্টমেন্টের ৭ম ও ৫ম সেমিস্টার ফাইনাল পরীক্ষা আগামী ১৫ নভেম্বর থেকে শুরু হবে।',
    fileUrl: '#'
  },
  {
    id: 'n-3',
    title: 'Project Showcasing and Poster Presentation - Spring 2026',
    date: '২৫ অক্টোবর, ২০২৬',
    category: 'ইভেন্ট (Event)',
    description: 'রোবটিক্স, এমবেডেড সিস্টেম, এআই ও সিভিল আর্কিটেকচারাল প্রজেক্ট প্রদর্শন ও পুরস্কার বিতরণী অনুষ্ঠান আগামী ১০ নভেম্বর অনুষ্ঠিত হবে।',
    fileUrl: '#'
  }
];

export const INITIAL_APPLICATIONS = [];

// Student section data
export const INITIAL_STUDENTS_DATA = {
  totalStudents: '১২০০+',
  totalAlumni: '৫০০+',
  hostels: 'ছাত্র ও ছাত্রী আলাদা হোস্টেল',
  clubs: 'প্রোগ্রামিং ক্লাব, রোবটিক্স ক্লাব, ডিবেটিং ক্লাব, সাংস্কৃতিক সংগঠন',
  facilities: 'ক্যান্টিন, লাইব্রেরি, স্পোর্টস গ্রাউন্ড, ওয়াইফাই ক্যাম্পাস',
  transport: 'নিজস্ব পরিবহন ব্যবস্থা (বাস সার্ভিস)'
};

export function DataProvider({ children }) {
  const [siteSettings, setSiteSettings] = useState(INITIAL_SITE_SETTINGS);
  const [heroData, setHeroData] = useState(INITIAL_HERO_DATA);
  const [principalCard, setPrincipalCard] = useState(INITIAL_PRINCIPAL_CARD);
  const [leadership, setLeadership] = useState(INITIAL_LEADERSHIP);
  const [departments, setDepartments] = useState(INITIAL_DEPARTMENTS);
  const [teachers, setTeachers] = useState(INITIAL_TEACHERS);
  const [notices, setNotices] = useState(INITIAL_NOTICES);
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  const [studentsData, setStudentsData] = useState(INITIAL_STUDENTS_DATA);
  const [adminUser, setAdminUser] = useState(null);
  const [authorizedAdmins, setAuthorizedAdmins] = useState([MASTER_SUPERADMIN]);
  const [firestoreReady, setFirestoreReady] = useState(false);

  // Check if email is authorized admin
  const isAuthorizedAdmin = useCallback((email) => {
    if (!email) return false;
    const lower = email.toLowerCase();
    return lower === MASTER_SUPERADMIN || authorizedAdmins.includes(lower);
  }, [authorizedAdmins]);

  // Check if current user is MASTER superadmin
  const isMasterAdmin = adminUser?.email?.toLowerCase() === MASTER_SUPERADMIN;

  // Firestore save helper
  const saveToFirestore = useCallback(async (collectionName, data) => {
    try {
      await setDoc(doc(db, 'recr_data', collectionName), { data, updatedAt: new Date().toISOString() });
    } catch (e) {
      console.warn('Firestore save failed, using localStorage:', e.message);
    }
  }, []);

  // Sanitize incoming data to replace any broken recr.edu.bd links
  const sanitizeData = (key, data) => {
    if (!data) return data;
    if (key === 'principal') {
      if (!data.image || data.image.includes('recr.edu.bd/images/')) {
        return { ...data, image: '/principal-baten.jpg' };
      }
    }
    if (key === 'leadership' && Array.isArray(data)) {
      return data.map((l) => {
        if (l.id === 'lead-3' && (!l.image || l.image.includes('recr.edu.bd/images/'))) {
          return { ...l, image: '/principal-baten.jpg' };
        }
        return l;
      });
    }
    if (key === 'teachers' && Array.isArray(data)) {
      return data.map((t) => {
        if (!t.image || t.image.includes('recr.edu.bd/images/')) {
          const match = INITIAL_TEACHERS.find((it) => it.id === t.id || it.name === t.name);
          if (match) return { ...t, image: match.image };
        }
        return t;
      });
    }
    return data;
  };

  // Load from Firestore, fallback to localStorage
  useEffect(() => {
    let unsubscribes = [];

    const loadData = async () => {
      const collections = [
        { key: 'settings', setter: setSiteSettings, initial: INITIAL_SITE_SETTINGS, local: 'recr_settings' },
        { key: 'hero', setter: setHeroData, initial: INITIAL_HERO_DATA, local: 'recr_hero' },
        { key: 'principal', setter: setPrincipalCard, initial: INITIAL_PRINCIPAL_CARD, local: 'recr_principal_card' },
        { key: 'leadership', setter: setLeadership, initial: INITIAL_LEADERSHIP, local: 'recr_leadership' },
        { key: 'departments', setter: setDepartments, initial: INITIAL_DEPARTMENTS, local: 'recr_departments' },
        { key: 'teachers', setter: setTeachers, initial: INITIAL_TEACHERS, local: 'recr_teachers' },
        { key: 'notices', setter: setNotices, initial: INITIAL_NOTICES, local: 'recr_notices' },
        { key: 'applications', setter: setApplications, initial: INITIAL_APPLICATIONS, local: 'recr_applications' },
        { key: 'students', setter: setStudentsData, initial: INITIAL_STUDENTS_DATA, local: 'recr_students' },
        { key: 'authorized_admins', setter: setAuthorizedAdmins, initial: [MASTER_SUPERADMIN], local: 'recr_authorized_admins' }
      ];

      for (const col of collections) {
        try {
          // Try Firestore realtime listener
          const unsub = onSnapshot(doc(db, 'recr_data', col.key), (snap) => {
            if (snap.exists() && snap.data()?.data) {
              const cleaned = sanitizeData(col.key, snap.data().data);
              col.setter(cleaned);
              localStorage.setItem(col.local, JSON.stringify(cleaned));
            }
          }, (err) => {
            // Firestore failed, try localStorage
            try {
              const saved = localStorage.getItem(col.local);
              if (saved) {
                const cleaned = sanitizeData(col.key, JSON.parse(saved));
                col.setter(cleaned);
              }
            } catch (e) { /* use initial */ }
          });
          unsubscribes.push(unsub);
        } catch (e) {
          // Fallback to localStorage
          try {
            const saved = localStorage.getItem(col.local);
            if (saved) {
              const cleaned = sanitizeData(col.key, JSON.parse(saved));
              col.setter(cleaned);
            }
          } catch (err) { /* use initial */ }
        }
      }

      setFirestoreReady(true);
    };

    loadData();

    // Firebase Auth State Listener - ONLY authorize specific emails
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email?.toLowerCase();
        // Check if already authorized or master admin
        if (email === MASTER_SUPERADMIN || authorizedAdmins.includes(email)) {
          const u = {
            email: user.email,
            name: user.displayName || 'REC Administrator',
            photo: user.photoURL || '',
            role: email === MASTER_SUPERADMIN ? 'MASTER_SUPERADMIN' : 'ADMIN',
            uid: user.uid
          };
          setAdminUser(u);
          localStorage.setItem('recr_admin_session', JSON.stringify(u));
        } else {
          // Not authorized - sign them out
          firebaseSignOut(auth);
          setAdminUser(null);
          localStorage.removeItem('recr_admin_session');
        }
      }
    });

    return () => {
      unsubscribes.forEach(u => u());
      unsubAuth();
    };
  }, [authorizedAdmins]);

  // Setters with Firestore + localStorage persistence
  const updateSiteSettings = (settings) => {
    const updated = { ...siteSettings, ...settings };
    setSiteSettings(updated);
    localStorage.setItem('recr_settings', JSON.stringify(updated));
    saveToFirestore('settings', updated);
  };

  const updateHeroData = (data) => {
    const updated = { ...heroData, ...data };
    setHeroData(updated);
    localStorage.setItem('recr_hero', JSON.stringify(updated));
    saveToFirestore('hero', updated);
  };

  const updatePrincipalCard = (card) => {
    const updated = { ...principalCard, ...card };
    setPrincipalCard(updated);
    localStorage.setItem('recr_principal_card', JSON.stringify(updated));
    saveToFirestore('principal', updated);
  };

  const updateLeadership = (list) => {
    setLeadership(list);
    localStorage.setItem('recr_leadership', JSON.stringify(list));
    saveToFirestore('leadership', list);
  };

  const updateDepartments = (list) => {
    setDepartments(list);
    localStorage.setItem('recr_departments', JSON.stringify(list));
    saveToFirestore('departments', list);
  };

  const updateTeachers = (list) => {
    setTeachers(list);
    localStorage.setItem('recr_teachers', JSON.stringify(list));
    saveToFirestore('teachers', list);
  };

  const updateNotices = (list) => {
    setNotices(list);
    localStorage.setItem('recr_notices', JSON.stringify(list));
    saveToFirestore('notices', list);
  };

  const updateApplications = (list) => {
    setApplications(list);
    localStorage.setItem('recr_applications', JSON.stringify(list));
    saveToFirestore('applications', list);
  };

  const updateStudentsData = (data) => {
    const updated = { ...studentsData, ...data };
    setStudentsData(updated);
    localStorage.setItem('recr_students', JSON.stringify(updated));
    saveToFirestore('students', updated);
  };

  // Authorized admins management (only master admin can use)
  const addAuthorizedAdmin = (email, password) => {
    if (!isMasterAdmin) return;
    const lower = email.toLowerCase();
    if (!authorizedAdmins.includes(lower)) {
      const updated = [...authorizedAdmins, lower];
      setAuthorizedAdmins(updated);
      localStorage.setItem('recr_authorized_admins', JSON.stringify(updated));
      saveToFirestore('authorized_admins', updated);
    }
  };

  const removeAuthorizedAdmin = (email) => {
    if (!isMasterAdmin) return;
    if (email.toLowerCase() === MASTER_SUPERADMIN) return; // Cannot remove master
    const updated = authorizedAdmins.filter(e => e !== email.toLowerCase());
    setAuthorizedAdmins(updated);
    localStorage.setItem('recr_authorized_admins', JSON.stringify(updated));
    saveToFirestore('authorized_admins', updated);
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

  // Auth: Email/Pass - RESTRICTED to authorized emails only
  const login = async (email, password) => {
    const lower = email.toLowerCase();
    if (!isAuthorizedAdmin(lower)) {
      return {
        success: false,
        message: 'এই ইমেইল অনুমোদিত এডমিন তালিকায় নেই। সুপারএডমিনের কাছ থেকে অনুমোদন নিন।'
      };
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = {
        email: userCredential.user.email,
        name: userCredential.user.displayName || 'REC Administrator',
        role: lower === MASTER_SUPERADMIN ? 'MASTER_SUPERADMIN' : 'ADMIN',
        uid: userCredential.user.uid
      };
      setAdminUser(user);
      localStorage.setItem('recr_admin_session', JSON.stringify(user));
      return { success: true };
    } catch (fbErr) {
      return {
        success: false,
        message: 'ভুল ইমেইল বা পাসওয়ার্ড! সঠিক তথ্য দিয়ে আবার চেষ্টা করুন।'
      };
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const email = result.user.email?.toLowerCase();

      if (!isAuthorizedAdmin(email)) {
        await firebaseSignOut(auth);
        return {
          success: false,
          message: `"${result.user.email}" অনুমোদিত এডমিন তালিকায় নেই। সুপারএডমিনের কাছ থেকে অনুমোদন নিন।`
        };
      }

      const user = {
        email: result.user.email,
        name: result.user.displayName,
        photo: result.user.photoURL,
        role: email === MASTER_SUPERADMIN ? 'MASTER_SUPERADMIN' : 'ADMIN',
        uid: result.user.uid
      };
      setAdminUser(user);
      localStorage.setItem('recr_admin_session', JSON.stringify(user));
      return { success: true };
    } catch (err) {
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
        siteSettings, updateSiteSettings,
        heroData, updateHeroData,
        principalCard, updatePrincipalCard,
        leadership, updateLeadership,
        departments, updateDepartments,
        teachers, updateTeachers,
        notices, updateNotices,
        applications, updateApplications,
        studentsData, updateStudentsData,
        adminUser,
        isAuthenticated: !!adminUser,
        isMasterAdmin,
        authorizedAdmins,
        addAuthorizedAdmin,
        removeAuthorizedAdmin,
        login, loginWithGoogle, sendResetEmail, logout,
        addNotice, editNotice, deleteNotice,
        addTeacher, editTeacher, deleteTeacher,
        addApplication, updateApplicationStatus, deleteApplication
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
