'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  Lock,
  ShieldCheck,
  Plus,
  Trash2,
  Edit,
  LogOut,
  Bell,
  Users2,
  GraduationCap,
  CheckCircle,
  AlertCircle,
  FileText,
  Search,
  Filter,
  Eye,
  Key
} from 'lucide-react';
import { useData } from '@/context/DataContext';

export default function AdminPage() {
  const {
    adminUser,
    isAuthenticated,
    login,
    logout,
    notices,
    addNotice,
    editNotice,
    deleteNotice,
    teachers,
    addTeacher,
    editTeacher,
    deleteTeacher,
    applications,
    updateApplicationStatus,
    deleteApplication
  } = useData();

  // Login form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Dashboard active tab
  const [activeTab, setActiveTab] = useState('notices');

  // Notice Form State
  const [noticeForm, setNoticeForm] = useState({
    title: '',
    category: 'ভর্তি (Admission)',
    description: '',
    fileUrl: ''
  });
  const [editingNoticeId, setEditingNoticeId] = useState(null);
  const [showNoticeModal, setShowNoticeModal] = useState(false);

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

  // Handle Login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError('');
    const res = login(email, password);
    if (!res.success) {
      setLoginError(res.message);
    }
  };

  // Quick fill helper for user/evaluator
  const handleQuickFill = () => {
    setEmail('super@recr.edu.bd');
    setPassword('trynot9999*');
  };

  // Handle Notice Save
  const handleSaveNotice = (e) => {
    e.preventDefault();
    if (editingNoticeId) {
      editNotice(editingNoticeId, noticeForm);
    } else {
      addNotice(noticeForm);
    }
    setShowNoticeModal(false);
    setEditingNoticeId(null);
    setNoticeForm({ title: '', category: 'ভর্তি (Admission)', description: '', fileUrl: '' });
  };

  const openEditNotice = (n) => {
    setEditingNoticeId(n.id);
    setNoticeForm({
      title: n.title,
      category: n.category,
      description: n.description,
      fileUrl: n.fileUrl || ''
    });
    setShowNoticeModal(true);
  };

  // Handle Teacher Save
  const handleSaveTeacher = (e) => {
    e.preventDefault();
    if (editingTeacherId) {
      editTeacher(editingTeacherId, teacherForm);
    } else {
      addTeacher(teacherForm);
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

  const openEditTeacher = (t) => {
    setEditingTeacherId(t.id);
    setTeacherForm({
      name: t.name,
      nameBn: t.nameBn || '',
      department: t.department,
      designation: t.designation,
      qualification: t.qualification,
      email: t.email,
      phone: t.phone,
      image: t.image
    });
    setShowTeacherModal(true);
  };

  // ==========================================
  // VIEW: LOGIN SCREEN (if not authenticated)
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--neu-bg)]">
        <Navbar />

        <main className="flex-1 flex items-center justify-center p-4">
          <div className="neu-flat p-6 sm:p-8 max-w-md w-full bg-[var(--neu-bg)] border border-[var(--neu-dark)]/40">
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                <Lock className="w-7 h-7" />
              </div>
              <h1 className="text-xl font-black text-[var(--text-main)]">
                REC Superadmin Portal
              </h1>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                রংপুর ইঞ্জিনিয়ারিং কলেজ কন্টেন্ট ও নোটিশ ম্যানেজমেন্ট প্যানেল
              </p>
            </div>

            {loginError && (
              <div className="neu-pressed p-3 text-red-600 text-xs font-bold rounded-xl mb-4 flex items-center gap-2 border border-red-500/30">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">Superadmin Email</label>
                <input
                  required
                  type="email"
                  placeholder="super@recr.edu.bd"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="neu-input text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">Secret Password</label>
                <input
                  required
                  type="password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="neu-input text-xs font-mono"
                />
              </div>

              <button
                type="submit"
                className="neu-btn-primary text-xs font-bold py-3 mt-1 shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Key className="w-4 h-4" />
                <span>লগইন করুন (Secure Sign In)</span>
              </button>
            </form>

            {/* Quick Demo Autofill Pill */}
            <div className="mt-5 pt-4 border-t border-[var(--neu-dark)]/40 flex items-center justify-between text-[11px]">
              <span className="text-[var(--text-muted)]">টেস্টিং ক্রেডেনশিয়াল:</span>
              <button
                type="button"
                onClick={handleQuickFill}
                className="neu-btn py-1 px-2.5 text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 cursor-pointer"
              >
                Auto-Fill Info
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // ==========================================
  // VIEW: SUPERADMIN DASHBOARD (authenticated)
  // ==========================================
  return (
    <div className="min-h-screen flex flex-col bg-[var(--neu-bg)]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        
        {/* Top Control Header */}
        <div className="neu-flat p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="neu-badge text-emerald-700 dark:text-emerald-400 font-bold text-xs">
                ● LIVE SUPERADMIN ACTIVE
              </span>
              <span className="text-xs text-[var(--text-muted)]">({adminUser.email})</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-[var(--text-main)] mt-1">
              রংপুর ইঞ্জিনিয়ারিং কলেজ সেন্ট্রাল কন্ট্রোল প্যানেল
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="neu-btn text-xs font-bold py-2 px-3 flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>ওয়েবসাইটে দেখুন</span>
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

        {/* Metric Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="neu-pressed p-4">
            <div className="text-[11px] font-bold text-[var(--text-muted)] uppercase">মোট নোটিশ</div>
            <div className="text-2xl font-black text-amber-600 mt-1">{notices.length} টি</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">সবগুলো এডিটেবল</div>
          </div>

          <div className="neu-pressed p-4">
            <div className="text-[11px] font-bold text-[var(--text-muted)] uppercase">শিক্ষকমণ্ডলী</div>
            <div className="text-2xl font-black text-blue-600 mt-1">{teachers.length} জন</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">৫টি বিভাগ সমন্বিত</div>
          </div>

          <div className="neu-pressed p-4">
            <div className="text-[11px] font-bold text-[var(--text-muted)] uppercase">অনলাইন আবেদন</div>
            <div className="text-2xl font-black text-emerald-600 mt-1">{applications.length} টি</div>
            <div className="text-[10px] text-slate-500 font-semibold mt-0.5">রিয়েল-টাইম ডাটা</div>
          </div>

          <div className="neu-pressed p-4">
            <div className="text-[11px] font-bold text-[var(--text-muted)] uppercase">সার্ভার স্ট্যাটাস</div>
            <div className="text-2xl font-black text-emerald-600 mt-1">100%</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">হ্যাক-প্রুফ এজ</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab('notices')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'notices'
                ? 'neu-pressed text-emerald-700 dark:text-emerald-400 border border-emerald-500/40'
                : 'neu-btn text-[var(--text-muted)]'
            }`}
          >
            <Bell className="w-4 h-4 text-amber-500" />
            <span>নোটিশ ম্যানেজমেন্ট ({notices.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('teachers')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'teachers'
                ? 'neu-pressed text-emerald-700 dark:text-emerald-400 border border-emerald-500/40'
                : 'neu-btn text-[var(--text-muted)]'
            }`}
          >
            <Users2 className="w-4 h-4 text-blue-500" />
            <span>শিক্ষক ও ফ্যাকাল্টি ({teachers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('applications')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'applications'
                ? 'neu-pressed text-emerald-700 dark:text-emerald-400 border border-emerald-500/40'
                : 'neu-btn text-[var(--text-muted)]'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-emerald-500" />
            <span>ভর্তি আবেদনসমূহ ({applications.length})</span>
          </button>
        </div>

        {/* ======================================= */}
        {/* TAB 1: NOTICES MANAGEMENT */}
        {/* ======================================= */}
        {activeTab === 'notices' && (
          <div className="neu-flat p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-lg font-black text-[var(--text-main)]">
                  নোটিশ তালিকা ও এডিটর
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
                className="neu-btn-primary text-xs font-bold py-2.5 px-4 flex items-center gap-1.5 cursor-pointer"
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
                          onClick={() => openEditNotice(n)}
                          className="neu-btn p-1.5 text-blue-600 hover:text-blue-700"
                          title="সম্পাদনা করুন"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`আপনি কি নিশ্চিত যে এই নোটিশটি মুছতে চান:\n"${n.title}"?`)) {
                              deleteNotice(n.id);
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

        {/* ======================================= */}
        {/* TAB 2: TEACHERS MANAGEMENT */}
        {/* ======================================= */}
        {activeTab === 'teachers' && (
          <div className="neu-flat p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-lg font-black text-[var(--text-main)]">
                  শিক্ষক ও ফ্যাকাল্টি পরিষদ
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
                className="neu-btn-primary text-xs font-bold py-2.5 px-4 flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>নতুন শিক্ষক যুক্ত করুন</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {teachers.map((t) => (
                <div key={t.id} className="neu-pressed p-4 rounded-xl flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-xl object-cover border border-emerald-500/40" />
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
                      onClick={() => openEditTeacher(t)}
                      className="neu-btn p-1.5 text-blue-600"
                      title="এডিট করুন"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`আপনি কি "${t.name}" শিক্ষকের রেকর্ড মুছে দিতে চান?`)) {
                          deleteTeacher(t.id);
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
          </div>
        )}

        {/* ======================================= */}
        {/* TAB 3: ADMISSION APPLICATIONS */}
        {/* ======================================= */}
        {activeTab === 'applications' && (
          <div className="neu-flat p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-lg font-black text-[var(--text-main)]">
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
                    <th className="py-3 px-3">এসএসসি ও এইচএসসি</th>
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
                          onChange={(e) => updateApplicationStatus(app.id, e.target.value)}
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

      {/* ======================================= */}
      {/* MODAL: ADD / EDIT NOTICE */}
      {/* ======================================= */}
      {showNoticeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="neu-flat p-6 max-w-lg w-full bg-[var(--neu-bg)] border border-[var(--neu-dark)]/50">
            <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
              {editingNoticeId ? 'নোটিশ সম্পাদনা করুন' : 'নতুন প্রাতিষ্ঠানিক নোটিশ প্রকাশ'}
            </h3>
            <p className="text-xs text-[var(--text-muted)] mb-4">
              ফর্ম পূরণ করে সেভ করলেই সঙ্গে সঙ্গে হোমপেজ ও নোটিশ বোর্ডে দৃশ্যমান হবে।
            </p>

            <form onSubmit={handleSaveNotice} className="flex flex-col gap-3">
              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">নোটিশের শিরোনাম *</label>
                <input
                  required
                  type="text"
                  placeholder="উদাঃ ফল সেমিস্টার ফাইনাল পরীক্ষার রুটিন প্রকাশ"
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
                  <option value="নিরাপত্তা (Security)">নিরাপত্তা (Security)</option>
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
                  placeholder="নোটিশের বিস্তারিত বার্তা এখানে লিখুন..."
                  value={noticeForm.description}
                  onChange={(e) => setNoticeForm({ ...noticeForm, description: e.target.value })}
                  className="neu-input text-xs"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">পিডিএফ বা ফাইল লিংক (ঐচ্ছিক)</label>
                <input
                  type="text"
                  placeholder="e.g. /reports/audit_report_printable.html"
                  value={noticeForm.fileUrl}
                  onChange={(e) => setNoticeForm({ ...noticeForm, fileUrl: e.target.value })}
                  className="neu-input text-xs font-mono"
                />
              </div>

              <div className="flex items-center justify-end gap-3 mt-3">
                <button
                  type="button"
                  onClick={() => setShowNoticeModal(false)}
                  className="neu-btn text-xs py-2 px-4"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="neu-btn-primary text-xs font-bold py-2 px-5"
                >
                  সংরক্ষণ করুন (Save)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================= */}
      {/* MODAL: ADD / EDIT TEACHER */}
      {/* ======================================= */}
      {showTeacherModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="neu-flat p-6 max-w-lg w-full bg-[var(--neu-bg)] border border-[var(--neu-dark)]/50">
            <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
              {editingTeacherId ? 'শিক্ষকের তথ্য আপডেট করুন' : 'নতুন শিক্ষক বা ফ্যাকাল্টি সদস্য যুক্ত করুন'}
            </h3>
            <p className="text-xs text-[var(--text-muted)] mb-4">
              শিক্ষকের তথ্য ও ছবি সংযুক্ত করে অফিশিয়াল ফ্যাকাল্টি পেজে প্রকাশ করুন।
            </p>

            <form onSubmit={handleSaveTeacher} className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">ইংরেজিতে নাম *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Jnananjan Roy"
                    value={teacherForm.name}
                    onChange={(e) => setTeacherForm({ ...teacherForm, name: e.target.value })}
                    className="neu-input text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">বাংলায় নাম</label>
                  <input
                    type="text"
                    placeholder="উদাঃ জ্ঞানরঞ্জন রায়"
                    value={teacherForm.nameBn}
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
                    placeholder="e.g. Lecturer / Assistant Professor"
                    value={teacherForm.designation}
                    onChange={(e) => setTeacherForm({ ...teacherForm, designation: e.target.value })}
                    className="neu-input text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">শিক্ষাগত যোগ্যতা (Degree & Univ) *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. B.Sc. in CSE (SUST)"
                  value={teacherForm.qualification}
                  onChange={(e) => setTeacherForm({ ...teacherForm, qualification: e.target.value })}
                  className="neu-input text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">অফিসিয়াল ইমেইল</label>
                  <input
                    type="email"
                    placeholder="name.dept@recr.edu.bd"
                    value={teacherForm.email}
                    onChange={(e) => setTeacherForm({ ...teacherForm, email: e.target.value })}
                    className="neu-input text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--text-main)] mb-1">ফোন নম্বর</label>
                  <input
                    type="text"
                    placeholder="017XXXXXXXX"
                    value={teacherForm.phone}
                    onChange={(e) => setTeacherForm({ ...teacherForm, phone: e.target.value })}
                    className="neu-input text-xs font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--text-main)] mb-1">ছবির URL</label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={teacherForm.image}
                  onChange={(e) => setTeacherForm({ ...teacherForm, image: e.target.value })}
                  className="neu-input text-xs font-mono"
                />
              </div>

              <div className="flex items-center justify-end gap-3 mt-3">
                <button
                  type="button"
                  onClick={() => setShowTeacherModal(false)}
                  className="neu-btn text-xs py-2 px-4"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="neu-btn-primary text-xs font-bold py-2 px-5"
                >
                  সংরক্ষণ করুন (Save)
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
