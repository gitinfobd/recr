import MarqueeNotice from '@/components/MarqueeNotice';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import DepartmentsSection from '@/components/DepartmentsSection';
import NoticeBoardSection from '@/components/NoticeBoardSection';
import PrincipalDeskSection from '@/components/PrincipalDeskSection';
import AdmissionSection from '@/components/AdmissionSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--neu-bg)]">
      {/* Top Scrolling Marquee Notice (Right to Left) */}
      <MarqueeNotice />

      {/* Main Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* Official Hero Section: Left Campus Swiper, Right Principal Quote Card */}
        <HeroBanner />

        {/* 4 Accredited Engineering Departments */}
        <DepartmentsSection />

        {/* Live Academic & Exam Notice Board */}
        <NoticeBoardSection />

        {/* Principal's Desk & Campus Facilities */}
        <PrincipalDeskSection />

        {/* Online Admission Application & High-Contrast Direct Helpline */}
        <AdmissionSection />
      </main>

      {/* Institutional Footer with Social Media Hub */}
      <Footer />
    </div>
  );
}
