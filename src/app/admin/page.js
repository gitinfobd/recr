'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  Lock,
  Eye,
  EyeOff,
  LogOut,
  Bell,
  Users2,
  GraduationCap,
  Settings,
  Image,
  Award,
  Layers,
  Phone,
  Mail,
  Globe,
  Plus,
  Trash2,
  Edit,
  Save,
  CheckCircle,
  AlertCircle,
  Key,
  Flame,
  ArrowRight
} from 'lucide-react';
import { useData } from '@/context/DataContext';

export default function AdminPage() {
  const {
    adminUser,
    isAuthenticated,
    login,
    loginWithGoogle,
    sendResetEmail,
    logout,
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
    addTeacher,
    editTeacher,
    deleteTeacher,
    notices,
    addNotice,
    editNotice,
    deleteNotice,
    applications,
    updateApplicationStatus,
    deleteApplication
  } = useData();

  // Login form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Forgot password modal
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotMessage, setForgotMessage] = useState('');

  // Active dashboard tab
  const [activeTab, setActiveTab] = useState('settings');

  // Success indicator banner
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  const triggerSuccess = (msg) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(''), 3500);
  };

  // Local state for Site Settings form
  const [settingsForm, setSettingsForm] = useState(siteSettings);
  const handleSaveSettings = (e) => {
    e.preventDefault();
    updateSiteSettings(settingsForm);
    triggerSuccess('সাইট সেটিংস ও সোশ্যাল লিংকসমূহ সফলভাবে সংরক্ষিত হয়েছে!');
  };

  // Local state for Hero form
  const [heroForm, setHeroForm] = useState(heroData);
  const handleSaveHero = (e) => {
    e.preventDefault();
    updateHeroData(heroForm);
    triggerSuccess('হিরো সেকশন ও ব্যানার সফলভাবে সংরক্ষিত হয়েছে!');
  };

  // Local state for Principal Card form
  const [principalForm, setPrincipalForm] = useState(principalCard);
  const handleSavePrincipal = (e) => {
    e.preventDefault();
    updatePrincipalCard(principalForm);
    triggerSuccess('অধ্যক্ষের উক্তি ও ফটো কার্ড সফলভাবে সংরক্ষিত হয়েছে!');
  };

  // Leadership editing state
  const [editingLeaderId, setEditingLeaderId] = useState(null);
  const [leaderForm, setLeaderForm] = useState({
    name: '',
    nameBn: '',
    designation: '',
    designationBn: '',
    phone: '',
    email: '',
    image: '',
    bio: ''
  });

  const openEditLeader = (leader) => {
    setEditingLeaderId(leader.id);
    setLeaderForm(leader);
  };

  const handleSaveLeader = (e) => {
    e.preventDefault();
    const updated = leadership.map((l) => (l.id === editingLeaderId ? { ...l, ...leaderForm } : l));
    updateLeadership(updated);
    setEditingLeaderId(null);
    triggerSuccess('ম্যানেজমেন্ট লিডারশিপ প্রোফাইল সংরক্ষিত হয়েছে!');
  };

  // Notice Form State
  const [noticeForm, setNoticeForm] = useState({
    title: '',
    category: 'ভর্তি (Admission)',
    description: '',
    fileUrl: ''
  });
  const [editingNoticeId, setEditingNoticeId] = useState(null);
  const [showNoticeModal, setShowNoticeModal] = useState(false);

  const handleSaveNotice = (e) => {
    e.preventDefault();
    if (editingNoticeId) {
      editNotice(editingNoticeId, noticeForm);
      triggerSuccess('নোটিশ সফলভাবে আপডেট হয়েছে!');
    } else {
      addNotice(noticeForm);
      triggerSuccess('নতুন নোটিশ প্রকাশিত হয়েছে!');
    }
    setShowNoticeModal(false);
    setEditingNoticeId(null);
    setNoticeForm({ title: '', category: 'ভর্তি (Admission)', description: '', fileUrl: '' });
  };

  // Teacher Form State
  const [teacherForm, setTeacherForm] = useState({
    name: '',
    nameBn: '',
    department: 'CSE',
    designation: 'Lecturer',
    qualification: '',
    email: '',
    phone: '',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  });
  const [editingTeacherId, setEditingTeacherId] = useState(null);
  const [showTeacherModal, setShowTeacherModal] = useState(false);

  const handleSaveTeacher = (e) => {
    e.preventDefault();
    if (editingTeacherId) {
      editTeacher(editingTeacherId, teacherForm);
      triggerSuccess('শিক্ষকের তথ্য আপডেট করা হয়েছে!');
    } else {
      addTeacher(teacherForm);
      triggerSuccess('নতুন শিক্ষক সফলভাবে যুক্ত করা হয়েছে!');
    }
    setShowTeacherModal(false);
    setEditingTeacherId(null);
    setTeacherForm({
      name: '',
      nameBn: '',
      department: 'CSE',
      designation: 'Lecturer',
      qualification: '',
      email: '',
      phone: '',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    });
  };

  // Carousel Image add/remove
  const handleAddCarouselImage = () => {
    const url = prompt('নতুন ছবির ইমেজ URL দিন (e.g. /rec-head.jpg বা https://...):');
    if (!url) return;
    const title = prompt('ছবির ক্যাপশন বা শিরোনাম দিন:', 'ক্যাম্পাস কার্যক্রম');
    const newImage = { id: 'c-' + Date.now(), url, title: title || '' };
    const updatedImages = [...(heroForm.carouselImages || []), newImage];
    const updated = { ...heroForm, carouselImages: updatedImages };
    setHeroForm(updated);
    updateHeroData(updated);
    triggerSuccess('নতুন ব্যানার ছবি যুক্ত হয়েছে!');
  };

  const handleDeleteCarouselImage = (imgId) => {
    const updatedImages = (heroForm.carouselImages || []).filter((i) => i.id !== imgId);
    const updated = { ...heroForm, carouselImages: updatedImages };
    setHeroForm(updated);
    updateHeroData(updated);
    triggerSuccess('ব্যানার ছবি সরানো হয়েছে!');
  };

  // Login handler
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);
    const res = await login(email, password);
    setLoginLoading(false);
    if (!res.success) {
      setLoginError(res.message);
    }
  };

  // Google sign in
  const handleGoogleSignIn = async () => {
    setLoginError('');
    setLoginLoading(true);
    const res = await loginWithGoogle();
    setLoginLoading(false);
    if (!res.success) {
      setLoginError(res.message);
    }
  };

  // Forgot password handler
  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    if (!forgotEmail) return;
    const res = await sendResetEmail(forgotEmail);
    if (res.success) {
      setForgotMessage('পাসওয়ার্ড রিসেট লিংক আপনার ইমেইলে পাঠানো হয়েছে!');
    } else {
      setForgotMessage('ত্রুটি: ' + res.message);
    }
  };

  // ==========================================
  // VIEW: LOGIN SCREEN (if not authenticated)
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--neu-bg)]">
        <Navbar />

        <main className="flex-1 flex items-center justify-center p-4">
          <div className="neu-flat p-6 sm:p-8 max-w-md w-full bg-[var(--neu-bg)] border border-[var(--neu-dark)]/40 shadow-xl">
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                <Lock className="w-7 h-7" />
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-[var(--text-main)]">
                REC Superadmin Portal
              </h1>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                রংপুর ইঞ্জিনিয়ারিং কলেজ কেন্দ্রীয কন্টেন্ট ম্যানেজমেন্ট সিস্টেম
              </p>
            </div>

            {loginError && (
              <div className="neu-pressed p-3 text-red-600 text-xs font-bold rounded-xl mb-4 flex items-center gap-2 border border-red-500/30">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            {/* Google Sign-in Button */}
            <button
              onClick={handleGoogleSignIn}
              disabled={loginLoading}
              className="w-full neu-btn py-3 text-xs font-bold flex items-center justify-center gap-2 mb-4 hover:border-emerald-500 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Sign in with Google</span>
            </button>

            <div className="flex items-center gap-3 my-3 text-[11px] text-[var(--text-muted)]">
              <div className="flex-1 h-px bg-[var(--neu-dark)]/40"></div>
              <span>অথবা ইমেইল দিয়ে লগইন</span>
              <div className="flex-1 h-px bg-[var(--neu-dark)]/40"></div>
            </div>

            {/* Email & Password Form */}
            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-3.5">
              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">Superadmin Email</label>
                <input
                  required
                  type="email"
                  placeholder="acbd89507@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="neu-input text-xs font-mono"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-[var(--text-main)]">Password</label>
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(true)}
                    className="text-[11px] text-emerald-600 hover:underline cursor-pointer"
                  >
                    পাসওয়ার্ড ভুলে গেছেন?
                  </button>
                </div>
                
                <div className="relative">
                  <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="neu-input text-xs font-mono pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="neu-btn-primary text-xs font-bold py-3 mt-1 shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Key className="w-4 h-4" />
                <span>{loginLoading ? 'যাচাই করা হচ্ছে...' : 'লগইন করুন (Secure Sign In)'}</span>
              </button>
            </form>
          </div>
        </main>

        {/* Forgot Password Modal */}
        {showForgotModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="neu-flat p-6 max-w-sm w-full bg-[var(--neu-bg)] border border-[var(--neu-dark)]/50">
              <h3 className="text-base font-bold text-[var(--text-main)] mb-2">
                পাসওয়ার্ড রিসেট করুন
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-4">
                আপনার সুপারএডমিন ইমেইল প্রদান করলে পাসওয়ার্ড রিসেট করার লিংক ইমেইল করা হবে।
              </p>

              {forgotMessage && (
                <div className="neu-pressed p-3 text-xs font-semibold rounded-xl mb-3 text-emerald-700 dark:text-emerald-400">
                  {forgotMessage}
                </div>
              )}

              <form onSubmit={handleForgotSubmit} className="flex flex-col gap-3">
                <input
                  required
                  type="email"
                  placeholder="acbd89507@gmail.com"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="neu-input text-xs font-mono"
                />
                <div className="flex items-center justify-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForgotModal(false);
                      setForgotMessage('');
                    }}
                    className="neu-btn text-xs py-2 px-3"
                  >
                    বন্ধ করুন
                  </button>
                  <button
                    type="submit"
                    className="neu-btn-primary text-xs font-bold py-2 px-4"
                  >
                    রিসেট লিংক পাঠান
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <Footer />
      </div>
    );
  }

  // ==========================================
  // VIEW: FULL DYNAMIC ADMIN DASHBOARD (100% RESPONSIVE)
  // ==========================================
  return (
    <div className="min-h-screen flex flex-col bg-[var(--neu-bg)]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-6 w-full">
        
        {/* Success Alert Banner */}
        {saveSuccessMsg && (
          <div className="neu-flat p-4 mb-6 border-l-4 border-emerald-600 bg-emerald-500/10 flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 animate-in fade-in">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{saveSuccessMsg}</span>
          </div>
        )}

        {/* Top Control Bar */}
        <div className="neu-flat p-4 sm:p-5 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="neu-badge text-emerald-700 dark:text-emerald-400 font-bold text-xs bg-emerald-500/10">
                ● SUPERADMIN ACTIVE
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)] truncate max-w-xs">
                {adminUser?.email}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-[var(--text-main)] mt-1">
              রংপুর ইঞ্জিনিয়ারিং কলেজ কেন্দ্রীয কন্টেন্ট কন্ট্রোল
            </h1>
            <p className="text-xs text-[var(--text-muted)]">
              ওয়েবসাইটের প্রতিটি কার্ড, লেখা, ছবি, ব্যানার, নোটিশ ও সোশ্যাল লিংক সম্পাদনাযোগ্য
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
            <Link
              href="/"
              target="_blank"
              className="neu-btn text-xs font-bold py-2 px-3 flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>লাইভ সাইট দেখুন</span>
            </Link>

            <button
              onClick={logout}
              className="neu-btn-danger text-xs font-bold py-2 px-3 flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>লগআউট</span>
            </button>
          </div>
        </div>

        {/* 100% Responsive Navigation Tabs (Scrollable on small screens) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
          {[
            { id: 'settings', label: 'সাইট ও সোশ্যাল লিংক', icon: Settings },
            { id: 'hero', label: 'হিরো ও প্রিন্সিপাল কার্ড', icon: Image },
            { id: 'leadership', label: 'পরিচালনা পর্ষদ (Leadership)', icon: Award },
            { id: 'teachers', label: `শিক্ষকমণ্ডলী (${teachers.length})`, icon: Users2 },
            { id: 'notices', label: `নোটিশ বোর্ড (${notices.length})`, icon: Bell },
            { id: 'applications', label: `ভর্তি আবেদন (${applications.length})`, icon: GraduationCap }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'neu-pressed text-emerald-700 dark:text-emerald-400 border border-emerald-500/40 shadow-inner'
                    : 'neu-btn text-[var(--text-muted)]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* TAB 1: SITE IDENTITY, MARQUEE & SOCIAL LINKS */}
        {/* ========================================================= */}
        {activeTab === 'settings' && (
          <div className="neu-flat p-6">
            <h2 className="text-base sm:text-lg font-black text-[var(--text-main)] mb-1 flex items-center gap-2">
              <Settings className="w-5 h-5 text-emerald-600" />
              সাইট সেটিংস, নোটিশ মারকুই ও সোশ্যাল মিডিয়া
            </h2>
            <p className="text-xs text-[var(--text-muted)] mb-5">
              এখানে পরিবর্তন করা তথ্য ওয়েবসাইটের হেডারে, ফুটারে, মারকুই স্ক্রলারে এবং কন্টাক্ট সেকশনে সরাসরি আপডেট হবে।
            </p>

            <form onSubmit={handleSaveSettings} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">
                  টপ মারকুই নোটিশ (ডান থেকে বামে স্ক্রল হওয়া বার্তা) *
                </label>
                <textarea
                  rows={2}
                  required
                  value={settingsForm.marqueeNotice}
                  onChange={(e) => setSettingsForm({ ...settingsForm, marqueeNotice: e.target.value })}
                  className="neu-input text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">প্রতিষ্ঠানের ইংরেজি নাম</label>
                <input
                  type="text"
                  value={settingsForm.siteTitle}
                  onChange={(e) => setSettingsForm({ ...settingsForm, siteTitle: e.target.value })}
                  className="neu-input text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">প্রতিষ্ঠানের বাংলা নাম</label>
                <input
                  type="text"
                  value={settingsForm.siteTitleBn}
                  onChange={(e) => setSettingsForm({ ...settingsForm, siteTitleBn: e.target.value })}
                  className="neu-input text-xs"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">
                  অবস্থান ও ঠিকানা (দখিগঞ্জ বানান নিশ্চিত করা হয়েছে) *
                </label>
                <input
                  type="text"
                  value={settingsForm.location}
                  onChange={(e) => setSettingsForm({ ...settingsForm, location: e.target.value })}
                  className="neu-input text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">হেল্পলাইন নম্বর ১ *</label>
                <input
                  type="text"
                  value={settingsForm.helpline1}
                  onChange={(e) => setSettingsForm({ ...settingsForm, helpline1: e.target.value })}
                  className="neu-input text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">হেল্পলাইন নম্বর ২ *</label>
                <input
                  type="text"
                  value={settingsForm.helpline2}
                  onChange={(e) => setSettingsForm({ ...settingsForm, helpline2: e.target.value })}
                  className="neu-input text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">অফিসিয়াল ইমেইল</label>
                <input
                  type="email"
                  value={settingsForm.email}
                  onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                  className="neu-input text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">অফিসিয়াল ফেসবুক পেজ লিংক *</label>
                <input
                  type="text"
                  value={settingsForm.facebookUrl}
                  onChange={(e) => setSettingsForm({ ...settingsForm, facebookUrl: e.target.value })}
                  className="neu-input text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">ইউটিউব চ্যানেল লিংক</label>
                <input
                  type="text"
                  value={settingsForm.youtubeUrl}
                  onChange={(e) => setSettingsForm({ ...settingsForm, youtubeUrl: e.target.value })}
                  className="neu-input text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">লিংকডইন লিংক</label>
                <input
                  type="text"
                  value={settingsForm.linkedinUrl}
                  onChange={(e) => setSettingsForm({ ...settingsForm, linkedinUrl: e.target.value })}
                  className="neu-input text-xs font-mono"
                />
              </div>

              <div className="md:col-span-2 flex justify-end mt-2">
                <button
                  type="submit"
                  className="neu-btn-primary text-xs font-bold py-2.5 px-6 flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>সেটিংস সংরক্ষণ করুন (Save Settings)</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: HERO CAROUSEL & PRINCIPAL CARD */}
        {/* ========================================================= */}
        {activeTab === 'hero' && (
          <div className="flex flex-col gap-6">
            
            {/* Campus Image Carousel Manager */}
            <div className="neu-flat p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-black text-[var(--text-main)]">
                    বামপাশের ক্যাম্পাস মেমোরি ফটো সোয়াইপার (Carousel Images)
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    হোমপেজের বামপাশে থাকা স্লাইডারে প্রদর্শিত ছবিসমূহ
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddCarouselImage}
                  className="neu-btn-primary text-xs font-bold py-2 px-3 flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>ছবি যোগ করুন</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {(heroForm.carouselImages || []).map((img) => (
                  <div key={img.id} className="neu-pressed p-3 rounded-xl flex flex-col justify-between gap-2">
                    <div className="relative h-36 rounded-lg overflow-hidden bg-slate-900 border border-slate-700">
                      <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xs font-bold text-[var(--text-main)] truncate">{img.title}</div>
                    <div className="flex justify-end pt-1 border-t border-[var(--neu-dark)]/40">
                      <button
                        type="button"
                        onClick={() => handleDeleteCarouselImage(img.id)}
                        className="neu-btn p-1.5 text-red-600 hover:text-red-700 text-xs flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>মুছে ফেলুন</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Principal Quote Card Editor (Image 1 style) */}
            <div className="neu-flat p-6">
              <h3 className="text-base font-black text-[var(--text-main)] mb-1">
                ডানপাশের অধ্যক্ষের ছবি ও উক্তি কার্ড (Principal Card)
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-5">
                স্ক্রিনশট ১-এ প্রদর্শিত অধ্যক্ষ মহোদয়ের উক্তি, নাম, ছবি ও বাটন এডিটর
              </p>

              <form onSubmit={handleSavePrincipal} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">কার্ড হেডার টাইটেল</label>
                  <input
                    type="text"
                    value={principalForm.header}
                    onChange={(e) => setPrincipalForm({ ...principalForm, header: e.target.value })}
                    className="neu-input text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">অধ্যক্ষের নাম</label>
                  <input
                    type="text"
                    value={principalForm.name}
                    onChange={(e) => setPrincipalForm({ ...principalForm, name: e.target.value })}
                    className="neu-input text-xs"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">অধ্যক্ষ মহোদয়ের উক্তি (Quote Text) *</label>
                  <textarea
                    rows={3}
                    required
                    value={principalForm.quote}
                    onChange={(e) => setPrincipalForm({ ...principalForm, quote: e.target.value })}
                    className="neu-input text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">অধ্যক্ষের ফটো URL</label>
                  <input
                    type="text"
                    value={principalForm.image}
                    onChange={(e) => setPrincipalForm({ ...principalForm, image: e.target.value })}
                    className="neu-input text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">বাটন টেক্সট ও লিংক</label>
                  <input
                    type="text"
                    value={principalForm.buttonText}
                    onChange={(e) => setPrincipalForm({ ...principalForm, buttonText: e.target.value })}
                    className="neu-input text-xs"
                  />
                </div>

                <div className="md:col-span-2 flex justify-end mt-2">
                  <button
                    type="submit"
                    className="neu-btn-primary text-xs font-bold py-2.5 px-6 flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <Save className="w-4 h-4" />
                    <span>অধ্যক্ষ কার্ড সংরক্ষণ করুন</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: MANAGEMENT & LEADERSHIP (Chairman, MD, Principal) */}
        {/* ========================================================= */}
        {activeTab === 'leadership' && (
          <div className="neu-flat p-6">
            <h2 className="text-base sm:text-lg font-black text-[var(--text-main)] mb-1">
              পরিচালনা পর্ষদ ও প্রশাসনিক নেতৃত্ব (Chairman, MD, Principal)
            </h2>
            <p className="text-xs text-[var(--text-muted)] mb-5">
              চেয়ারম্যান, ব্যবস্থাপনা পরিচালক এবং অধ্যক্ষের বিস্তারিত তথ্য, ছবি ও যোগাযোগ নম্বর সম্পাদনা করুন।
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {leadership.map((leader) => (
                <div key={leader.id} className="neu-pressed p-4 rounded-xl flex flex-col justify-between gap-3">
                  <div>
                    <div className="relative h-44 rounded-xl overflow-hidden mb-3 bg-slate-900 border border-slate-700">
                      <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="neu-badge text-[10px] font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                      {leader.designation}
                    </div>
                    <h3 className="font-bold text-sm text-[var(--text-main)]">{leader.name}</h3>
                    <div className="text-xs font-semibold text-[var(--text-muted)]">{leader.nameBn}</div>
                    <p className="text-xs text-[var(--text-muted)] mt-2 line-clamp-3 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[var(--neu-dark)]/40 flex justify-end">
                    <button
                      onClick={() => openEditLeader(leader)}
                      className="neu-btn text-xs py-1.5 px-3 font-bold text-blue-600 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      <span>এডিট করুন</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Leader Edit Modal */}
            {editingLeaderId && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
                <div className="neu-flat p-6 max-w-lg w-full bg-[var(--neu-bg)] border border-[var(--neu-dark)]/50">
                  <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
                    নেতৃত্ব প্রোফাইল সম্পাদনা: {leaderForm.name}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mb-4">
                    সঠিক তথ্য প্রদান করে সেভ করুন।
                  </p>

                  <form onSubmit={handleSaveLeader} className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[var(--text-main)] mb-1">ইংরেজি নাম *</label>
                        <input
                          required
                          type="text"
                          value={leaderForm.name}
                          onChange={(e) => setLeaderForm({ ...leaderForm, name: e.target.value })}
                          className="neu-input text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[var(--text-main)] mb-1">বাংলায় নাম</label>
                        <input
                          type="text"
                          value={leaderForm.nameBn}
                          onChange={(e) => setLeaderForm({ ...leaderForm, nameBn: e.target.value })}
                          className="neu-input text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[var(--text-main)] mb-1">পদবী (English) *</label>
                        <input
                          required
                          type="text"
                          value={leaderForm.designation}
                          onChange={(e) => setLeaderForm({ ...leaderForm, designation: e.target.value })}
                          className="neu-input text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[var(--text-main)] mb-1">পদবী (বাংলা)</label>
                        <input
                          type="text"
                          value={leaderForm.designationBn}
                          onChange={(e) => setLeaderForm({ ...leaderForm, designationBn: e.target.value })}
                          className="neu-input text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[var(--text-main)] mb-1">ফোন নম্বর</label>
                        <input
                          type="text"
                          value={leaderForm.phone}
                          onChange={(e) => setLeaderForm({ ...leaderForm, phone: e.target.value })}
                          className="neu-input text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[var(--text-main)] mb-1">ইমেইল</label>
                        <input
                          type="email"
                          value={leaderForm.email}
                          onChange={(e) => setLeaderForm({ ...leaderForm, email: e.target.value })}
                          className="neu-input text-xs font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[var(--text-main)] mb-1">ছবির URL</label>
                      <input
                        type="text"
                        value={leaderForm.image}
                        onChange={(e) => setLeaderForm({ ...leaderForm, image: e.target.value })}
                        className="neu-input text-xs font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[var(--text-main)] mb-1">সংক্ষিপ্ত বায়ো / ভূমিকা</label>
                      <textarea
                        rows={2}
                        value={leaderForm.bio}
                        onChange={(e) => setLeaderForm({ ...leaderForm, bio: e.target.value })}
                        className="neu-input text-xs"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-2 mt-3">
                      <button
                        type="button"
                        onClick={() => setEditingLeaderId(null)}
                        className="neu-btn text-xs py-2 px-3"
                      >
                        বাতিল
                      </button>
                      <button
                        type="submit"
                        className="neu-btn-primary text-xs font-bold py-2 px-5"
                      >
                        আপডেট করুন
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: TEACHERS & FACULTY MANAGEMENT */}
        {/* ========================================================= */}
        {activeTab === 'teachers' && (
          <div className="neu-flat p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
              <div>
                <h2 className="text-base sm:text-lg font-black text-[var(--text-main)]">
                  শিক্ষক ও ফ্যাকাল্টি পরিষদ ({teachers.length} জন)
                </h2>
                <p className="text-xs text-[var(--text-muted)]">
                  নতুন শিক্ষকের প্রোফাইল তৈরি করুন, তথ্য আপডেট করুন বা লিস্ট থেকে মুছে দিন।
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingTeacherId(null);
                  setTeacherForm({
                    name: '',
                    nameBn: '',
                    department: 'CSE',
                    designation: 'Lecturer',
                    qualification: '',
                    email: '',
                    phone: '',
                    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
                  });
                  setShowTeacherModal(true);
                }}
                className="neu-btn-primary text-xs font-bold py-2 px-3 flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>নতুন শিক্ষক যুক্ত করুন</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {teachers.map((t) => (
                <div key={t.id} className="neu-pressed p-4 rounded-xl flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-xl object-cover border border-emerald-500/40 shrink-0" />
                    <div>
                      <span className="neu-badge text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                        {t.department}
                      </span>
                      <div className="font-bold text-xs text-[var(--text-main)] mt-0.5">{t.name}</div>
                      <div className="text-[11px] text-[var(--text-muted)]">{t.designation}</div>
                      <div className="text-[10px] text-blue-600 dark:text-blue-400 mt-0.5 font-medium">{t.qualification}</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        setEditingTeacherId(t.id);
                        setTeacherForm(t);
                        setShowTeacherModal(true);
                      }}
                      className="neu-btn p-1.5 text-blue-600"
                      title="এডিট করুন"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`আপনি কি "${t.name}" শিক্ষকের রেকর্ড মুছে দিতে চান?`)) {
                          deleteTeacher(t.id);
                          triggerSuccess('শিক্ষকের রেকর্ড মুছে দেওয়া হয়েছে!');
                        }
                      }}
                      className="neu-btn p-1.5 text-red-600"
                      title="ডিলিট করুন"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Teacher Modal */}
            {showTeacherModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
                <div className="neu-flat p-6 max-w-lg w-full bg-[var(--neu-bg)] border border-[var(--neu-dark)]/50">
                  <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
                    {editingTeacherId ? 'শিক্ষকের তথ্য আপডেট করুন' : 'নতুন শিক্ষক বা ফ্যাকাল্টি যুক্ত করুন'}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mb-4">
                    সঠিক তথ্য ও ছবি পূরণ করে সংরক্ষণ করুন।
                  </p>

                  <form onSubmit={handleSaveTeacher} className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[var(--text-main)] mb-1">নাম (English) *</label>
                        <input
                          required
                          type="text"
                          value={teacherForm.name}
                          onChange={(e) => setTeacherForm({ ...teacherForm, name: e.target.value })}
                          className="neu-input text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[var(--text-main)] mb-1">নাম (বাংলা)</label>
                        <input
                          type="text"
                          value={teacherForm.nameBn || ''}
                          onChange={(e) => setTeacherForm({ ...teacherForm, nameBn: e.target.value })}
                          className="neu-input text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[var(--text-main)] mb-1">বিভাগ (Department) *</label>
                        <select
                          value={teacherForm.department}
                          onChange={(e) => setTeacherForm({ ...teacherForm, department: e.target.value })}
                          className="neu-input text-xs font-bold"
                        >
                          <option value="CSE">CSE</option>
                          <option value="EEE">EEE</option>
                          <option value="CE">CE</option>
                          <option value="ICE">ICE</option>
                          <option value="Science">Basic Science</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[var(--text-main)] mb-1">পদবী (Designation) *</label>
                        <input
                          required
                          type="text"
                          value={teacherForm.designation}
                          onChange={(e) => setTeacherForm({ ...teacherForm, designation: e.target.value })}
                          className="neu-input text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[var(--text-main)] mb-1">শিক্ষাগত যোগ্যতা *</label>
                      <input
                        required
                        type="text"
                        value={teacherForm.qualification}
                        onChange={(e) => setTeacherForm({ ...teacherForm, qualification: e.target.value })}
                        className="neu-input text-xs"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[var(--text-main)] mb-1">ফোন নম্বর</label>
                        <input
                          type="text"
                          value={teacherForm.phone}
                          onChange={(e) => setTeacherForm({ ...teacherForm, phone: e.target.value })}
                          className="neu-input text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[var(--text-main)] mb-1">ইমেইল</label>
                        <input
                          type="email"
                          value={teacherForm.email}
                          onChange={(e) => setTeacherForm({ ...teacherForm, email: e.target.value })}
                          className="neu-input text-xs font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[var(--text-main)] mb-1">ছবির URL</label>
                      <input
                        type="text"
                        value={teacherForm.image}
                        onChange={(e) => setTeacherForm({ ...teacherForm, image: e.target.value })}
                        className="neu-input text-xs font-mono"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-2 mt-3">
                      <button
                        type="button"
                        onClick={() => setShowTeacherModal(false)}
                        className="neu-btn text-xs py-2 px-3"
                      >
                        বাতিল
                      </button>
                      <button
                        type="submit"
                        className="neu-btn-primary text-xs font-bold py-2 px-5"
                      >
                        সংরক্ষণ করুন
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: NOTICE MANAGEMENT */}
        {/* ========================================================= */}
        {activeTab === 'notices' && (
          <div className="neu-flat p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
              <div>
                <h2 className="text-base sm:text-lg font-black text-[var(--text-main)]">
                  নোটিশ তালিকা ও এডিটর ({notices.length} টি)
                </h2>
                <p className="text-xs text-[var(--text-muted)]">
                  এখান থেকে নতুন নোটিশ যোগ করুন, পূর্বের নোটিশ পরিবর্তন বা স্থায়ীভাবে মুছে ফেলুন।
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingNoticeId(null);
                  setNoticeForm({ title: '', category: 'ভর্তি (Admission)', description: '', fileUrl: '' });
                  setShowNoticeModal(true);
                }}
                className="neu-btn-primary text-xs font-bold py-2 px-3 flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>নতুন নোটিশ যোগ করুন</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-[var(--neu-dark)]/50 text-[var(--text-muted)]">
                    <th className="py-3 px-3">তারিখ</th>
                    <th className="py-3 px-3">ক্যাটাগরি</th>
                    <th className="py-3 px-3">শিরোনাম</th>
                    <th className="py-3 px-3 text-right">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--neu-dark)]/30 text-[var(--text-main)]">
                  {notices.map((n) => (
                    <tr key={n.id} className="hover:bg-slate-500/5">
                      <td className="py-3 px-3 font-medium whitespace-nowrap text-[var(--text-muted)]">{n.date}</td>
                      <td className="py-3 px-3 font-bold">
                        <span className="neu-badge text-[10px]">{n.category}</span>
                      </td>
                      <td className="py-3 px-3 font-semibold max-w-md">{n.title}</td>
                      <td className="py-3 px-3 text-right whitespace-nowrap space-x-2">
                        <button
                          onClick={() => {
                            setEditingNoticeId(n.id);
                            setNoticeForm(n);
                            setShowNoticeModal(true);
                          }}
                          className="neu-btn p-1.5 text-blue-600"
                          title="সম্পাদনা করুন"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`আপনি কি নিশ্চিত যে এই নোটিশটি মুছতে চান:\n"${n.title}"?`)) {
                              deleteNotice(n.id);
                              triggerSuccess('নোটিশ মুছে ফেলা হয়েছে!');
                            }
                          }}
                          className="neu-btn p-1.5 text-red-600"
                          title="মুছে ফেলুন"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Notice Modal */}
            {showNoticeModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
                <div className="neu-flat p-6 max-w-lg w-full bg-[var(--neu-bg)] border border-[var(--neu-dark)]/50">
                  <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
                    {editingNoticeId ? 'নোটিশ সম্পাদনা করুন' : 'নতুন প্রাতিষ্ঠানিক নোটিশ প্রকাশ'}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mb-4">
                    তথ্য পূরণ করে সেভ করুন।
                  </p>

                  <form onSubmit={handleSaveNotice} className="flex flex-col gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[var(--text-main)] mb-1">নোটিশের শিরোনাম *</label>
                      <input
                        required
                        type="text"
                        value={noticeForm.title}
                        onChange={(e) => setNoticeForm({ ...noticeForm, title: e.target.value })}
                        className="neu-input text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[var(--text-main)] mb-1">ক্যাটাগরি *</label>
                      <select
                        value={noticeForm.category}
                        onChange={(e) => setNoticeForm({ ...noticeForm, category: e.target.value })}
                        className="neu-input text-xs font-bold"
                      >
                        <option value="ভর্তি (Admission)">ভর্তি (Admission)</option>
                        <option value="পরীক্ষা (Exam)">পরীক্ষা (Exam)</option>
                        <option value="ক্যারিয়ার (Career)">ক্যারিয়ার (Career)</option>
                        <option value="ইভেন্ট (Event)">ইভেন্ট (Event)</option>
                        <option value="সাধারণ (General)">সাধারণ (General)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[var(--text-main)] mb-1">বিস্তারিত বিবরণ *</label>
                      <textarea
                        required
                        rows={3}
                        value={noticeForm.description}
                        onChange={(e) => setNoticeForm({ ...noticeForm, description: e.target.value })}
                        className="neu-input text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[var(--text-main)] mb-1">ফাইল বা পিডিএফ লিংক (ঐচ্ছিক)</label>
                      <input
                        type="text"
                        placeholder="https://..."
                        value={noticeForm.fileUrl || ''}
                        onChange={(e) => setNoticeForm({ ...noticeForm, fileUrl: e.target.value })}
                        className="neu-input text-xs font-mono"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-2 mt-3">
                      <button
                        type="button"
                        onClick={() => setShowNoticeModal(false)}
                        className="neu-btn text-xs py-2 px-3"
                      >
                        বাতিল
                      </button>
                      <button
                        type="submit"
                        className="neu-btn-primary text-xs font-bold py-2 px-5"
                      >
                        সংরক্ষণ করুন
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 6: ADMISSION APPLICATIONS */}
        {/* ========================================================= */}
        {activeTab === 'applications' && (
          <div className="neu-flat p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-base sm:text-lg font-black text-[var(--text-main)]">
                  অনলাইন ভর্তি আবেদনসমূহ
                </h2>
                <p className="text-xs text-[var(--text-muted)]">
                  ওয়েবসাইটের অনলাইন ফর্ম থেকে আসা শিক্ষার্থীদের আবেদনের তালিকা
                </p>
              </div>
              <span className="neu-badge font-bold text-xs text-emerald-700 dark:text-emerald-400">
                মোট আবেদন: {applications.length} টি
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-[var(--neu-dark)]/50 text-[var(--text-muted)]">
                    <th className="py-3 px-3">তারিখ</th>
                    <th className="py-3 px-3">শিক্ষার্থীর নাম</th>
                    <th className="py-3 px-3">ফোন নম্বর</th>
                    <th className="py-3 px-3">বিভাগ</th>
                    <th className="py-3 px-3">জিপিএ</th>
                    <th className="py-3 px-3">স্ট্যাটাস</th>
                    <th className="py-3 px-3 text-right">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--neu-dark)]/30 text-[var(--text-main)]">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-500/5">
                      <td className="py-3 px-3 font-mono text-[var(--text-muted)]">{app.createdAt}</td>
                      <td className="py-3 px-3 font-bold">{app.name}</td>
                      <td className="py-3 px-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">
                        <a href={`tel:${app.phone}`}>{app.phone}</a>
                      </td>
                      <td className="py-3 px-3 font-black text-blue-600">{app.dept}</td>
                      <td className="py-3 px-3 text-[11px]">
                        SSC: {app.sscGpa || 'N/A'} | HSC: {app.hscGpa}
                      </td>
                      <td className="py-3 px-3">
                        <select
                          value={app.status}
                          onChange={(e) => {
                            updateApplicationStatus(app.id, e.target.value);
                            triggerSuccess('স্ট্যাটাস আপডেট হয়েছে!');
                          }}
                          className="neu-badge text-[11px] font-bold cursor-pointer"
                        >
                          <option value="Pending">Pending (অপেক্ষমান)</option>
                          <option value="Verified">Verified (যাচাইকৃত)</option>
                          <option value="Admitted">Admitted (ভর্তি সম্পন্ন)</option>
                        </select>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => {
                            if (confirm(`আপনি কি "${app.name}" এর আবেদন ডিলিট করতে চান?`)) {
                              deleteApplication(app.id);
                              triggerSuccess('আবেদন মুছে দেওয়া হয়েছে!');
                            }
                          }}
                          className="neu-btn p-1.5 text-red-600 hover:text-red-700"
                          title="মুছে ফেলুন"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
