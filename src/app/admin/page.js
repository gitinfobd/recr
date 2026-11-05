'use client';

import { useState, useEffect, useRef } from 'react';
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
  Image as ImageIcon,
  Award,
  Plus,
  Trash2,
  Edit,
  Save,
  CheckCircle,
  AlertCircle,
  Key,
  ArrowRight,
  UserPlus,
  ShieldCheck,
  Upload
} from 'lucide-react';
import { useData } from '@/context/DataContext';

export default function AdminPage() {
  const {
    adminUser,
    isAuthenticated,
    isMasterAdmin,
    authorizedAdmins,
    addAuthorizedAdmin,
    removeAuthorizedAdmin,
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
    deleteApplication,
    studentsData,
    updateStudentsData
  } = useData();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotMessage, setForgotMessage] = useState('');
  const [activeTab, setActiveTab] = useState('settings');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');
  const [savedTab, setSavedTab] = useState(null);

  // Admin authorization state
  const [newAdminEmail, setNewAdminEmail] = useState('');

  const triggerSuccess = (msg, tabId = null) => {
    setSaveSuccessMsg(msg);
    if (tabId) setSavedTab(tabId);
    setTimeout(() => {
      setSaveSuccessMsg('');
      if (tabId) setSavedTab(null);
    }, 3500);
  };

  // Settings form
  const [settingsForm, setSettingsForm] = useState(siteSettings);
  useEffect(() => { setSettingsForm(siteSettings); }, [siteSettings]);
  const handleSaveSettings = (e) => {
    e.preventDefault();
    updateSiteSettings(settingsForm);
    triggerSuccess('সাইট সেটিংস সফলভাবে সংরক্ষিত হয়েছে!', 'settings');
  };

  // Hero form
  const [heroForm, setHeroForm] = useState(heroData);
  useEffect(() => { setHeroForm(heroData); }, [heroData]);
  const handleSaveHero = (e) => {
    e.preventDefault();
    updateHeroData(heroForm);
    triggerSuccess('হিরো সেকশন সংরক্ষিত হয়েছে!', 'hero');
  };

  // Principal form
  const [principalForm, setPrincipalForm] = useState(principalCard);
  useEffect(() => { setPrincipalForm(principalCard); }, [principalCard]);
  const handleSavePrincipal = (e) => {
    e.preventDefault();
    updatePrincipalCard(principalForm);
    triggerSuccess('অধ্যক্ষের কার্ড সফলভাবে সংরক্ষিত হয়েছে!', 'principal');
  };

  // Students form
  const [studentsForm, setStudentsForm] = useState(studentsData);
  useEffect(() => { setStudentsForm(studentsData); }, [studentsData]);
  const handleSaveStudents = (e) => {
    e.preventDefault();
    updateStudentsData(studentsForm);
    triggerSuccess('Students সেকশন সংরক্ষিত হয়েছে!', 'students');
  };

  // Leadership editing
  const [editingLeaderId, setEditingLeaderId] = useState(null);
  const [leaderForm, setLeaderForm] = useState({ name: '', nameBn: '', designation: '', designationBn: '', phone: '', email: '', image: '', bio: '' });

  const handleSaveLeader = (e) => {
    e.preventDefault();
    updateLeadership(leadership.map((l) => (l.id === editingLeaderId ? { ...l, ...leaderForm } : l)));
    setEditingLeaderId(null);
    triggerSuccess('ম্যানেজমেন্ট প্রোফাইল সংরক্ষিত হয়েছে!', 'leadership');
  };

  // Notice form
  const [noticeForm, setNoticeForm] = useState({ title: '', category: 'ভর্তি (Admission)', description: '', fileUrl: '' });
  const [editingNoticeId, setEditingNoticeId] = useState(null);
  const [showNoticeModal, setShowNoticeModal] = useState(false);

  const handleSaveNotice = (e) => {
    e.preventDefault();
    if (editingNoticeId) {
      editNotice(editingNoticeId, noticeForm);
      triggerSuccess('নোটিশ আপডেট হয়েছে!', 'notices');
    } else {
      addNotice(noticeForm);
      triggerSuccess('নতুন নোটিশ প্রকাশিত হয়েছে!', 'notices');
    }
    setShowNoticeModal(false);
    setEditingNoticeId(null);
    setNoticeForm({ title: '', category: 'ভর্তি (Admission)', description: '', fileUrl: '' });
  };

  // Teacher form
  const [teacherForm, setTeacherForm] = useState({ name: '', nameBn: '', department: 'CSE', designation: 'Lecturer', qualification: '', email: '', phone: '', image: '' });
  const [editingTeacherId, setEditingTeacherId] = useState(null);
  const [showTeacherModal, setShowTeacherModal] = useState(false);

  const handleSaveTeacher = (e) => {
    e.preventDefault();
    if (editingTeacherId) {
      editTeacher(editingTeacherId, teacherForm);
      triggerSuccess('শিক্ষকের তথ্য ও ছবি সফলভাবে সংরক্ষিত হয়েছে!', 'teachers');
    } else {
      addTeacher(teacherForm);
      triggerSuccess('নতুন শিক্ষক সফলভাবে যুক্ত হয়েছে!', 'teachers');
    }
    setShowTeacherModal(false);
    setEditingTeacherId(null);
    setTeacherForm({ name: '', nameBn: '', department: 'CSE', designation: 'Lecturer', qualification: '', email: '', phone: '', image: '' });
  };

  // Carousel image add/remove
  const carouselFileInputRef = useRef(null);
  const handleCarouselFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDim = 1200;
        let w = img.width;
        let h = img.height;
        if (w > h) {
          if (w > maxDim) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          }
        } else {
          if (h > maxDim) {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        const title = prompt('ছবির ক্যাপশন বা শিরোনাম দিন:', 'ক্যাম্পাস কার্যক্রম') || 'ক্যাম্পাস';
        const newImg = { id: 'c-' + Date.now(), url: dataUrl, title };
        const updated = { ...heroForm, carouselImages: [...(heroForm.carouselImages || []), newImg] };
        setHeroForm(updated);
        updateHeroData(updated);
        triggerSuccess('নতুন ব্যানার ছবি সফলভাবে আপলোড হয়েছে!', 'hero');
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteCarouselImage = (imgId) => {
    const updated = { ...heroForm, carouselImages: (heroForm.carouselImages || []).filter(i => i.id !== imgId) };
    setHeroForm(updated);
    updateHeroData(updated);
    triggerSuccess('ব্যানার ছবি সরানো হয়েছে!', 'hero');
  };

  // Login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);
    const res = await login(email, password);
    setLoginLoading(false);
    if (!res.success) setLoginError(res.message);
  };

  const handleGoogleSignIn = async () => {
    setLoginError('');
    setLoginLoading(true);
    const res = await loginWithGoogle();
    setLoginLoading(false);
    if (!res.success) setLoginError(res.message);
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    if (!forgotEmail) return;
    const res = await sendResetEmail(forgotEmail);
    setForgotMessage(res.success ? 'পাসওয়ার্ড রিসেট লিংক আপনার ইমেইলে পাঠানো হয়েছে!' : 'ত্রুটি: ' + res.message);
  };

  // ==========================================
  // LOGIN SCREEN
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--neu-bg)]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="neu-flat p-6 max-w-sm w-full">
            <div className="text-center mb-5">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center mx-auto mb-2">
                <Lock className="w-6 h-6" />
              </div>
              <h1 className="text-lg font-black text-[var(--text-main)]">REC Superadmin Portal</h1>
              <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                শুধুমাত্র অনুমোদিত এডমিনরাই এক্সেস করতে পারবেন
              </p>
            </div>

            {loginError && (
              <div className="neu-pressed p-2.5 text-red-600 text-[11px] font-bold rounded-xl mb-3 flex items-center gap-2 border border-red-500/30">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button onClick={handleGoogleSignIn} disabled={loginLoading} className="w-full neu-btn py-2.5 text-[11px] font-bold flex items-center justify-center gap-2 mb-3 hover:border-emerald-500 cursor-pointer">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Sign in with Google</span>
            </button>

            <div className="flex items-center gap-3 my-3 text-[10px] text-[var(--text-muted)]">
              <div className="flex-1 h-px bg-[var(--neu-dark)]/40" />
              <span>অথবা ইমেইল দিয়ে লগইন</span>
              <div className="flex-1 h-px bg-[var(--neu-dark)]/40" />
            </div>

            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-3">
              <div>
                <label className="block text-[11px] font-bold text-[var(--text-main)] mb-1">Admin Email</label>
                <input required type="email" placeholder="your-admin@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="neu-input text-xs" autoComplete="off" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[11px] font-bold text-[var(--text-main)]">Password</label>
                  <button type="button" onClick={() => setShowForgotModal(true)} className="text-[10px] text-emerald-600 hover:underline cursor-pointer">পাসওয়ার্ড ভুলে গেছেন?</button>
                </div>
                <div className="relative">
                  <input required type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="neu-input text-xs pr-10" autoComplete="off" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <button type="submit" disabled={loginLoading} className="neu-btn-primary text-[11px] font-bold py-2.5 mt-1 flex items-center justify-center gap-2 cursor-pointer">
                <Key className="w-4 h-4" />
                <span>{loginLoading ? 'যাচাই করা হচ্ছে...' : 'লগইন করুন'}</span>
              </button>
            </form>
          </div>
        </main>

        {showForgotModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="neu-flat p-5 max-w-sm w-full">
              <h3 className="text-sm font-bold text-[var(--text-main)] mb-2">পাসওয়ার্ড রিসেট</h3>
              {forgotMessage && <div className="neu-pressed p-2 text-[11px] font-semibold rounded-xl mb-3 text-emerald-700 dark:text-emerald-400">{forgotMessage}</div>}
              <form onSubmit={handleForgotSubmit} className="flex flex-col gap-2">
                <input required type="email" placeholder="your-email@example.com" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} className="neu-input text-xs" />
                <div className="flex items-center justify-end gap-2 mt-1">
                  <button type="button" onClick={() => { setShowForgotModal(false); setForgotMessage(''); }} className="neu-btn text-[11px] py-1.5 px-3">বন্ধ</button>
                  <button type="submit" className="neu-btn-primary text-[11px] font-bold py-1.5 px-3">রিসেট লিংক পাঠান</button>
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
  // ADMIN DASHBOARD
  // ==========================================
  const tabs = [
    { id: 'settings', label: 'সাইট সেটিংস', icon: Settings },
    { id: 'hero', label: 'হিরো ও প্রিন্সিপাল', icon: ImageIcon },
    { id: 'leadership', label: 'ম্যানেজমেন্ট', icon: Award },
    { id: 'teachers', label: `শিক্ষক (${teachers.length})`, icon: Users2 },
    { id: 'notices', label: `নোটিশ (${notices.length})`, icon: Bell },
    { id: 'applications', label: `আবেদন (${applications.length})`, icon: GraduationCap },
    { id: 'students', label: 'Students Info', icon: GraduationCap },
    ...(isMasterAdmin ? [{ id: 'admin-auth', label: 'Admin Access', icon: ShieldCheck }] : [])
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--neu-bg)]">
      <Navbar />

      {/* Floating Global Success Toast - Pinned at top center */}
      {saveSuccessMsg && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-2xl bg-emerald-700 text-white font-black text-xs shadow-2xl flex items-center gap-2 border-2 border-emerald-400 animate-in fade-in slide-in-from-top-4">
          <CheckCircle className="w-5 h-5 text-emerald-200 shrink-0 animate-bounce" />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      <main className="flex-1 max-w-6xl mx-auto px-3 py-4 w-full">

        {/* Top Control Bar */}
        <div className="neu-flat p-3 sm:p-4 mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="neu-badge text-emerald-700 dark:text-emerald-400 font-bold text-[10px]">● ACTIVE</span>
              <span className="text-[10px] font-mono text-[var(--text-muted)] truncate max-w-[200px]">{adminUser?.email}</span>
              {isMasterAdmin && <span className="text-[9px] bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 rounded font-black">MASTER</span>}
            </div>
            <h1 className="text-base sm:text-lg font-black text-[var(--text-main)] mt-0.5">REC সেন্ট্রাল কন্ট্রোল প্যানেল</h1>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <Link href="/" target="_blank" className="neu-btn text-[10px] py-1.5 px-2.5 flex items-center gap-1 cursor-pointer">
              <Eye className="w-3 h-3" /><span>লাইভ সাইট</span>
            </Link>
            <button onClick={logout} className="neu-btn-danger text-[10px] py-1.5 px-2.5 flex items-center gap-1 cursor-pointer">
              <LogOut className="w-3 h-3" /><span>লগআউট</span>
            </button>
          </div>
        </div>

        {/* Tabs - horizontally scrollable */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-thin">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`px-2.5 py-2 rounded-lg text-[10px] font-bold whitespace-nowrap cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  isActive ? 'neu-pressed text-emerald-700 dark:text-emerald-400 border border-emerald-500/40' : 'neu-btn text-[var(--text-muted)]'
                }`}
              >
                <Icon className="w-3 h-3" /><span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ============ TAB: SETTINGS ============ */}
        {activeTab === 'settings' && (
          <div className="neu-flat p-4 sm:p-5">
            <h2 className="text-sm font-black text-[var(--text-main)] mb-3 flex items-center gap-2">
              <Settings className="w-4 h-4 text-emerald-600" />
              সাইট সেটিংস, মারকুই ও সোশ্যাল লিংক
            </h2>
            <form onSubmit={handleSaveSettings} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-bold text-[var(--text-main)] mb-0.5">টপ মারকুই নোটিশ (স্ক্রলিং টেক্সট) *</label>
                <textarea rows={2} required value={settingsForm.marqueeNotice || ''} onChange={(e) => setSettingsForm({ ...settingsForm, marqueeNotice: e.target.value })} className="neu-input text-[11px]" />
              </div>
              <InputField label="ইংরেজি নাম" value={settingsForm.siteTitle} onChange={v => setSettingsForm({...settingsForm, siteTitle: v})} />
              <InputField label="বাংলা নাম" value={settingsForm.siteTitleBn} onChange={v => setSettingsForm({...settingsForm, siteTitleBn: v})} />
              <div className="sm:col-span-2">
                <InputField label="ঠিকানা (দখিগঞ্জ)" value={settingsForm.location} onChange={v => setSettingsForm({...settingsForm, location: v})} />
              </div>
              <InputField label="হেল্পলাইন ১" value={settingsForm.helpline1} onChange={v => setSettingsForm({...settingsForm, helpline1: v})} mono />
              <InputField label="হেল্পলাইন ২" value={settingsForm.helpline2} onChange={v => setSettingsForm({...settingsForm, helpline2: v})} mono />
              <InputField label="ইমেইল" value={settingsForm.email} onChange={v => setSettingsForm({...settingsForm, email: v})} mono />
              <div className="sm:col-span-2">
                <ImageUploadField label="কলেজ লোগো (Logo Image)" value={settingsForm.logoUrl} onChange={v => setSettingsForm({...settingsForm, logoUrl: v})} />
              </div>
              <InputField label="ফেসবুক লিংক" value={settingsForm.facebookUrl} onChange={v => setSettingsForm({...settingsForm, facebookUrl: v})} mono />
              <InputField label="ইউটিউব লিংক" value={settingsForm.youtubeUrl} onChange={v => setSettingsForm({...settingsForm, youtubeUrl: v})} mono />
              <InputField label="লিংকডইন লিংক" value={settingsForm.linkedinUrl} onChange={v => setSettingsForm({...settingsForm, linkedinUrl: v})} mono />
              
              <div className="sm:col-span-2 flex items-center justify-end gap-3 mt-2">
                <SaveButton isSaved={savedTab === 'settings'} defaultText="সেটিংস সংরক্ষণ করুন" />
              </div>
            </form>
          </div>
        )}

        {/* ============ TAB: HERO & PRINCIPAL ============ */}
        {activeTab === 'hero' && (
          <div className="flex flex-col gap-4">
            {/* Carousel Manager */}
            <div className="neu-flat p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <div>
                  <h3 className="text-sm font-black text-[var(--text-main)]">ক্যাম্পাস ছবি স্লাইডার (Hero Carousel)</h3>
                  <p className="text-[10px] text-[var(--text-muted)]">হোমপেজের বামপাশে সোয়াইপ হওয়া ক্যাম্পাস মেমোরি ছবিসমূহ</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    ref={carouselFileInputRef}
                    onChange={handleCarouselFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => carouselFileInputRef.current?.click()}
                    className="neu-btn-primary text-[10px] py-1.5 px-3 flex items-center gap-1 cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>ডিভাইস থেকে ছবি আপলোড</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {(heroForm.carouselImages || []).map((img) => (
                  <div key={img.id} className="neu-pressed p-2 rounded-lg">
                    <div className="h-28 rounded-lg overflow-hidden bg-slate-900 mb-1.5">
                      <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[10px] font-bold text-[var(--text-main)] truncate">{img.title}</div>
                    <div className="flex justify-end pt-1">
                      <button onClick={() => handleDeleteCarouselImage(img.id)} className="text-[10px] text-red-600 flex items-center gap-1 hover:underline cursor-pointer">
                        <Trash2 className="w-3 h-3" /><span>মুছুন</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Principal Quote Card Editor */}
            <div className="neu-flat p-4 sm:p-5">
              <h3 className="text-sm font-black text-[var(--text-main)] mb-1">অধ্যক্ষের ফটো ও উক্তি কার্ড (Principal Card)</h3>
              <p className="text-[10px] text-[var(--text-muted)] mb-3">হোমপেজের ডানপাশের ব্লু কার্ডে প্রদর্শিত অধ্যক্ষের ফটো ও বাণী</p>
              
              <form onSubmit={handleSavePrincipal} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <InputField label="হেডার" value={principalForm.header} onChange={v => setPrincipalForm({...principalForm, header: v})} />
                <InputField label="অধ্যক্ষের নাম" value={principalForm.name} onChange={v => setPrincipalForm({...principalForm, name: v})} />
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-bold text-[var(--text-main)] mb-0.5">অধ্যক্ষ মহোদয়ের উক্তি *</label>
                  <textarea rows={2} required value={principalForm.quote || ''} onChange={(e) => setPrincipalForm({...principalForm, quote: e.target.value})} className="neu-input text-[11px]" />
                </div>
                <div className="sm:col-span-2">
                  <ImageUploadField label="অধ্যক্ষের ফটো (Principal Photo)" value={principalForm.image} onChange={v => setPrincipalForm({...principalForm, image: v})} />
                </div>
                <InputField label="বাটন টেক্সট" value={principalForm.buttonText} onChange={v => setPrincipalForm({...principalForm, buttonText: v})} />
                <InputField label="বাটন লিংক" value={principalForm.buttonLink} onChange={v => setPrincipalForm({...principalForm, buttonLink: v})} mono />
                
                <div className="sm:col-span-2 flex items-center justify-end gap-3 mt-2">
                  <SaveButton isSaved={savedTab === 'principal'} defaultText="অধ্যক্ষ কার্ড সংরক্ষণ করুন" />
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ============ TAB: LEADERSHIP ============ */}
        {activeTab === 'leadership' && (
          <div className="neu-flat p-4 sm:p-5">
            <h2 className="text-sm font-black text-[var(--text-main)] mb-3">পরিচালনা পর্ষদ (Chairman, MD, Principal)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {leadership.map((leader) => (
                <div key={leader.id} className="neu-pressed p-3 rounded-lg flex flex-col justify-between">
                  <div>
                    <div className="h-36 rounded-lg overflow-hidden mb-2 bg-slate-900 border border-emerald-500/30">
                      <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&background=1e3a8a&color=fff&size=200`; }} />
                    </div>
                    <div className="neu-badge text-[9px] font-bold text-emerald-700 dark:text-emerald-400 mb-1">{leader.designation}</div>
                    <h3 className="font-bold text-xs text-[var(--text-main)]">{leader.name}</h3>
                    <div className="text-[10px] text-[var(--text-muted)]">{leader.nameBn}</div>
                  </div>
                  <div className="pt-2 mt-2 border-t border-[var(--neu-dark)]/40 flex justify-end">
                    <button onClick={() => { setEditingLeaderId(leader.id); setLeaderForm(leader); }} className="neu-btn text-[10px] py-1 px-2.5 text-blue-600 flex items-center gap-1 cursor-pointer font-bold">
                      <Edit className="w-3 h-3" /><span>ছবি ও তথ্য এডিট</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {editingLeaderId && (
              <ModalWrapper onClose={() => setEditingLeaderId(null)} title={`এডিট: ${leaderForm.name}`}>
                <form onSubmit={handleSaveLeader} className="flex flex-col gap-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <InputField label="নাম (EN) *" value={leaderForm.name} onChange={v => setLeaderForm({...leaderForm, name: v})} required />
                    <InputField label="নাম (BN)" value={leaderForm.nameBn} onChange={v => setLeaderForm({...leaderForm, nameBn: v})} />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <InputField label="পদবী (EN) *" value={leaderForm.designation} onChange={v => setLeaderForm({...leaderForm, designation: v})} required />
                    <InputField label="পদবী (BN)" value={leaderForm.designationBn} onChange={v => setLeaderForm({...leaderForm, designationBn: v})} />
                  </div>
                  
                  <ImageUploadField label="প্রোফাইল ছবি (Upload or Link)" value={leaderForm.image} onChange={v => setLeaderForm({...leaderForm, image: v})} />
                  
                  <div className="grid grid-cols-2 gap-2">
                    <InputField label="ফোন" value={leaderForm.phone} onChange={v => setLeaderForm({...leaderForm, phone: v})} mono />
                    <InputField label="ইমেইল" value={leaderForm.email} onChange={v => setLeaderForm({...leaderForm, email: v})} mono />
                  </div>
                  
                  <div className="flex justify-end gap-2 mt-2">
                    <button type="button" onClick={() => setEditingLeaderId(null)} className="neu-btn text-[10px] py-1.5 px-3">বাতিল</button>
                    <button type="submit" className="neu-btn-primary text-[10px] py-1.5 px-4 font-bold">আপডেট করুন</button>
                  </div>
                </form>
              </ModalWrapper>
            )}
          </div>
        )}

        {/* ============ TAB: TEACHERS ============ */}
        {activeTab === 'teachers' && (
          <div className="neu-flat p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <div>
                <h2 className="text-sm font-black text-[var(--text-main)]">শিক্ষকমণ্ডলী ({teachers.length} জন)</h2>
                <p className="text-[10px] text-[var(--text-muted)]">শিক্ষকের ছবি ডিভাইস থেকে আপলোড করতে &quot;এডিট&quot; এ ক্লিক করুন</p>
              </div>
              <button onClick={() => { setEditingTeacherId(null); setTeacherForm({ name: '', nameBn: '', department: 'CSE', designation: 'Lecturer', qualification: '', email: '', phone: '', image: '' }); setShowTeacherModal(true); }} className="neu-btn-primary text-[10px] py-1.5 px-3 flex items-center gap-1 cursor-pointer">
                <Plus className="w-3.5 h-3.5" /><span>নতুন শিক্ষক যুক্ত করুন</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {teachers.map((t) => (
                <div key={t.id} className="neu-pressed p-3 rounded-lg flex items-start gap-2.5">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-emerald-950/20 border-2 border-emerald-500/40 shrink-0 shadow flex items-center justify-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=15803d&color=fff&size=200&bold=true`;
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="neu-badge text-[9px] font-bold text-emerald-700 dark:text-emerald-400">{t.department}</span>
                    <div className="font-bold text-[11px] text-[var(--text-main)] mt-0.5 truncate">{t.name}</div>
                    <div className="text-[10px] text-[var(--text-muted)] truncate">{t.designation}</div>
                  </div>
                  <div className="flex flex-col gap-1 shrink-0">
                    <button onClick={() => { setEditingTeacherId(t.id); setTeacherForm(t); setShowTeacherModal(true); }} className="neu-btn p-1.5 text-blue-600 cursor-pointer" title="ছবি ও তথ্য এডিট"><Edit className="w-3.5 h-3.5" /></button>
                    <button onClick={() => { if (confirm(`"${t.name}" মুছবেন?`)) { deleteTeacher(t.id); triggerSuccess('মুছে দেওয়া হয়েছে!', 'teachers'); } }} className="neu-btn p-1.5 text-red-600 cursor-pointer" title="ডিলিট"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </div>
              ))}
            </div>

            {showTeacherModal && (
              <ModalWrapper onClose={() => setShowTeacherModal(false)} title={editingTeacherId ? 'শিক্ষকের ছবি ও তথ্য আপডেট' : 'নতুন শিক্ষক যুক্ত করুন'}>
                <form onSubmit={handleSaveTeacher} className="flex flex-col gap-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <InputField label="নাম (EN) *" value={teacherForm.name} onChange={v => setTeacherForm({...teacherForm, name: v})} required />
                    <InputField label="নাম (BN)" value={teacherForm.nameBn || ''} onChange={v => setTeacherForm({...teacherForm, nameBn: v})} />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-bold text-[var(--text-main)] mb-0.5">বিভাগ *</label>
                      <select value={teacherForm.department} onChange={(e) => setTeacherForm({...teacherForm, department: e.target.value})} className="neu-input text-[11px]">
                        <option value="CSE">CSE</option><option value="EEE">EEE</option><option value="CE">CE</option><option value="ICE">ICE</option><option value="Science">Basic Science</option>
                      </select>
                    </div>
                    <InputField label="পদবী *" value={teacherForm.designation} onChange={v => setTeacherForm({...teacherForm, designation: v})} required />
                  </div>
                  <InputField label="যোগ্যতা *" value={teacherForm.qualification} onChange={v => setTeacherForm({...teacherForm, qualification: v})} required />
                  
                  {/* Teacher Photo with Live Preview & Device Upload */}
                  <ImageUploadField label="শিক্ষকের ছবি (Device Upload or Link)" value={teacherForm.image} onChange={v => setTeacherForm({...teacherForm, image: v})} />
                  
                  <div className="grid grid-cols-2 gap-2">
                    <InputField label="ফোন নম্বর" value={teacherForm.phone} onChange={v => setTeacherForm({...teacherForm, phone: v})} mono />
                    <InputField label="ইমেইল" value={teacherForm.email} onChange={v => setTeacherForm({...teacherForm, email: v})} mono />
                  </div>

                  <div className="flex justify-end gap-2 mt-2">
                    <button type="button" onClick={() => setShowTeacherModal(false)} className="neu-btn text-[10px] py-1.5 px-3">বাতিল</button>
                    <button type="submit" className="neu-btn-primary text-[10px] py-1.5 px-4 font-bold">সংরক্ষণ করুন</button>
                  </div>
                </form>
              </ModalWrapper>
            )}
          </div>
        )}

        {/* ============ TAB: NOTICES ============ */}
        {activeTab === 'notices' && (
          <div className="neu-flat p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <h2 className="text-sm font-black text-[var(--text-main)]">নোটিশ ({notices.length} টি)</h2>
              <button onClick={() => { setEditingNoticeId(null); setNoticeForm({ title: '', category: 'ভর্তি (Admission)', description: '', fileUrl: '' }); setShowNoticeModal(true); }} className="neu-btn-primary text-[10px] py-1.5 px-2.5 flex items-center gap-1 cursor-pointer">
                <Plus className="w-3 h-3" /><span>নতুন নোটিশ</span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[11px] text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-[var(--neu-dark)]/50 text-[var(--text-muted)]">
                    <th className="py-2 px-2">তারিখ</th><th className="py-2 px-2">ক্যাটাগরি</th><th className="py-2 px-2">শিরোনাম</th><th className="py-2 px-2 text-right">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--neu-dark)]/30 text-[var(--text-main)]">
                  {notices.map((n) => (
                    <tr key={n.id} className="hover:bg-slate-500/5">
                      <td className="py-2 px-2 text-[var(--text-muted)] whitespace-nowrap">{n.date}</td>
                      <td className="py-2 px-2"><span className="neu-badge text-[9px]">{n.category}</span></td>
                      <td className="py-2 px-2 font-semibold max-w-xs truncate">{n.title}</td>
                      <td className="py-2 px-2 text-right whitespace-nowrap space-x-1">
                        <button onClick={() => { setEditingNoticeId(n.id); setNoticeForm(n); setShowNoticeModal(true); }} className="neu-btn p-1 text-blue-600 cursor-pointer"><Edit className="w-3 h-3" /></button>
                        <button onClick={() => { if (confirm(`মুছবেন?\n"${n.title}"`)) { deleteNotice(n.id); triggerSuccess('মুছে দেওয়া হয়েছে!', 'notices'); } }} className="neu-btn p-1 text-red-600 cursor-pointer"><Trash2 className="w-3 h-3" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {showNoticeModal && (
              <ModalWrapper onClose={() => setShowNoticeModal(false)} title={editingNoticeId ? 'নোটিশ সম্পাদনা' : 'নতুন নোটিশ'}>
                <form onSubmit={handleSaveNotice} className="flex flex-col gap-2">
                  <InputField label="শিরোনাম *" value={noticeForm.title} onChange={v => setNoticeForm({...noticeForm, title: v})} required />
                  <div>
                    <label className="block text-[10px] font-bold text-[var(--text-main)] mb-0.5">ক্যাটাগরি</label>
                    <select value={noticeForm.category} onChange={(e) => setNoticeForm({...noticeForm, category: e.target.value})} className="neu-input text-[11px]">
                      <option value="ভর্তি (Admission)">ভর্তি</option><option value="পরীক্ষা (Exam)">পরীক্ষা</option><option value="ক্যারিয়ার (Career)">ক্যারিয়ার</option><option value="ইভেন্ট (Event)">ইভেন্ট</option><option value="সাধারণ (General)">সাধারণ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[var(--text-main)] mb-0.5">বিবরণ *</label>
                    <textarea required rows={2} value={noticeForm.description || ''} onChange={(e) => setNoticeForm({...noticeForm, description: e.target.value})} className="neu-input text-[11px]" />
                  </div>
                  <div className="flex justify-end gap-2 mt-1">
                    <button type="button" onClick={() => setShowNoticeModal(false)} className="neu-btn text-[10px] py-1.5 px-2.5">বাতিল</button>
                    <button type="submit" className="neu-btn-primary text-[10px] py-1.5 px-3">সংরক্ষণ</button>
                  </div>
                </form>
              </ModalWrapper>
            )}
          </div>
        )}

        {/* ============ TAB: APPLICATIONS ============ */}
        {activeTab === 'applications' && (
          <div className="neu-flat p-4 sm:p-5">
            <h2 className="text-sm font-black text-[var(--text-main)] mb-3">অনলাইন আবেদন ({applications.length} টি)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[11px] text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-[var(--neu-dark)]/50 text-[var(--text-muted)]">
                    <th className="py-2 px-2">তারিখ</th><th className="py-2 px-2">নাম</th><th className="py-2 px-2">ফোন</th><th className="py-2 px-2">বিভাগ</th><th className="py-2 px-2">স্ট্যাটাস</th><th className="py-2 px-2 text-right">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--neu-dark)]/30 text-[var(--text-main)]">
                  {applications.map((app) => (
                    <tr key={app.id}>
                      <td className="py-2 px-2 text-[var(--text-muted)]">{app.createdAt}</td>
                      <td className="py-2 px-2 font-bold">{app.name}</td>
                      <td className="py-2 px-2 font-mono text-emerald-700 dark:text-emerald-400">{app.phone}</td>
                      <td className="py-2 px-2 font-bold text-blue-600">{app.dept}</td>
                      <td className="py-2 px-2">
                        <select value={app.status} onChange={(e) => { updateApplicationStatus(app.id, e.target.value); triggerSuccess('আপডেট হয়েছে!', 'applications'); }} className="neu-badge text-[10px] font-bold cursor-pointer">
                          <option value="Pending">Pending</option><option value="Verified">Verified</option><option value="Admitted">Admitted</option>
                        </select>
                      </td>
                      <td className="py-2 px-2 text-right">
                        <button onClick={() => { if (confirm(`"${app.name}" মুছবেন?`)) { deleteApplication(app.id); triggerSuccess('মুছে দেওয়া হয়েছে!', 'applications'); } }} className="neu-btn p-1 text-red-600 cursor-pointer"><Trash2 className="w-3 h-3" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {applications.length === 0 && <div className="text-center py-8 text-[var(--text-muted)] text-xs">কোনো আবেদন নেই।</div>}
            </div>
          </div>
        )}

        {/* ============ TAB: STUDENTS INFO ============ */}
        {activeTab === 'students' && (
          <div className="neu-flat p-4 sm:p-5">
            <h2 className="text-sm font-black text-[var(--text-main)] mb-3">Students সেকশন তথ্য</h2>
            <form onSubmit={handleSaveStudents} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InputField label="মোট শিক্ষার্থী" value={studentsForm.totalStudents} onChange={v => setStudentsForm({...studentsForm, totalStudents: v})} />
              <InputField label="মোট এলামনাই" value={studentsForm.totalAlumni} onChange={v => setStudentsForm({...studentsForm, totalAlumni: v})} />
              <InputField label="হোস্টেল" value={studentsForm.hostels} onChange={v => setStudentsForm({...studentsForm, hostels: v})} />
              <InputField label="ক্লাবসমূহ" value={studentsForm.clubs} onChange={v => setStudentsForm({...studentsForm, clubs: v})} />
              <InputField label="সুবিধাসমূহ" value={studentsForm.facilities} onChange={v => setStudentsForm({...studentsForm, facilities: v})} />
              <InputField label="পরিবহন" value={studentsForm.transport} onChange={v => setStudentsForm({...studentsForm, transport: v})} />
              <div className="sm:col-span-2 flex items-center justify-end gap-3 mt-2">
                <SaveButton isSaved={savedTab === 'students'} defaultText="Students তথ্য সংরক্ষণ" />
              </div>
            </form>
          </div>
        )}

        {/* ============ TAB: ADMIN AUTH (Master Only) ============ */}
        {activeTab === 'admin-auth' && isMasterAdmin && (
          <div className="neu-flat p-4 sm:p-5">
            <h2 className="text-sm font-black text-[var(--text-main)] mb-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              এডমিন অনুমোদন ব্যবস্থাপনা
            </h2>
            <p className="text-[10px] text-[var(--text-muted)] mb-4">
              শুধুমাত্র মাস্টার সুপারএডমিন (আপনি) এই সেকশনটি দেখতে ও ব্যবহার করতে পারবেন। অন্য কোনো এডমিনের কাছে এটি দৃশ্যমান হবে না।
            </p>

            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <input type="email" placeholder="নতুন এডমিনের ইমেইল" value={newAdminEmail} onChange={(e) => setNewAdminEmail(e.target.value)} className="neu-input text-[11px] max-w-xs" />
              <button type="button" onClick={() => {
                if (newAdminEmail && newAdminEmail.includes('@')) {
                  addAuthorizedAdmin(newAdminEmail);
                  setNewAdminEmail('');
                  triggerSuccess(`${newAdminEmail} অনুমোদিত হয়েছে!`, 'admin-auth');
                }
              }} className="neu-btn-primary text-[10px] py-2 px-3 flex items-center gap-1 cursor-pointer">
                <UserPlus className="w-3 h-3" /><span>অনুমোদন দিন</span>
              </button>
            </div>

            <div className="flex flex-col gap-1.5">
              {authorizedAdmins.map((adm) => (
                <div key={adm} className="neu-pressed p-2.5 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-[var(--text-main)]">{adm}</span>
                    {adm === 'acbd89507@gmail.com' && <span className="text-[9px] bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 rounded font-black">MASTER</span>}
                  </div>
                  {adm !== 'acbd89507@gmail.com' && (
                    <button onClick={() => { removeAuthorizedAdmin(adm); triggerSuccess(`${adm} অপসারিত হয়েছে!`, 'admin-auth'); }} className="text-[10px] text-red-600 flex items-center gap-1 hover:underline cursor-pointer">
                      <Trash2 className="w-3 h-3" /><span>অপসারণ</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}

// Reusable Input component
function InputField({ label, value, onChange, mono, required }) {
  return (
    <div>
      <label className="block text-[10px] font-bold text-[var(--text-main)] mb-0.5">{label}</label>
      <input type="text" value={value || ''} onChange={(e) => onChange(e.target.value)} className={`neu-input text-[11px] ${mono ? 'font-mono' : ''}`} required={required} />
    </div>
  );
}

// Reusable Image Upload component with Device Picker + URL + Live Preview
function ImageUploadField({ label, value, onChange, placeholder = "ইমেজ লিংক দিন বা ডিভাইস থেকে আপলোড করুন" }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDim = 600;
        let w = img.width;
        let h = img.height;
        if (w > h) {
          if (w > maxDim) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          }
        } else {
          if (h > maxDim) {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        onChange(dataUrl);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="block text-[10px] font-bold text-[var(--text-main)] mb-0.5">{label}</label>
      <div className="flex items-center gap-3">
        {/* Live Preview Square */}
        <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-900 border-2 border-emerald-500/40 shrink-0 shadow flex items-center justify-center">
          {value ? (
            <img
              src={value}
              alt="Preview"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/logo.jpg';
              }}
            />
          ) : (
            <ImageIcon className="w-6 h-6 text-slate-500" />
          )}
        </div>

        {/* Input & Upload Button */}
        <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="neu-input text-[11px] font-mono flex-1"
          />

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="neu-btn py-2 px-3 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center justify-center gap-1.5 shrink-0 hover:border-emerald-500 cursor-pointer"
            title="কম্পিউটার বা ফোন থেকে ছবি আপলোড করুন"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>ডিভাইস থেকে আপলোড</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable Dynamic Green Save Button
function SaveButton({ isSaved, defaultText = "সংরক্ষণ করুন" }) {
  return (
    <button
      type="submit"
      className={`text-[11px] py-2 px-5 flex items-center gap-2 rounded-xl transition-all shadow-md font-bold cursor-pointer ${
        isSaved
          ? 'bg-emerald-600 text-white ring-2 ring-emerald-300 scale-105'
          : 'neu-btn-primary'
      }`}
    >
      {isSaved ? (
        <>
          <CheckCircle className="w-4 h-4 text-white animate-bounce" />
          <span>✓ সফলভাবে সংরক্ষিত হয়েছে!</span>
        </>
      ) : (
        <>
          <Save className="w-3.5 h-3.5" />
          <span>{defaultText}</span>
        </>
      )}
    </button>
  );
}

// Reusable Modal
function ModalWrapper({ children, onClose, title }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm">
      <div className="neu-flat p-4 sm:p-5 max-w-md w-full bg-[var(--neu-bg)] border border-[var(--neu-dark)]/50 max-h-[85vh] overflow-y-auto">
        <h3 className="text-sm font-bold text-[var(--text-main)] mb-3">{title}</h3>
        {children}
      </div>
    </div>
  );
}
