import Navbar from '@/components/Navbar';
import SecurityAlertBanner from '@/components/SecurityAlertBanner';
import HeroBanner from '@/components/HeroBanner';
import DepartmentsSection from '@/components/DepartmentsSection';
import NoticeBoardSection from '@/components/NoticeBoardSection';
import PrincipalDeskSection from '@/components/PrincipalDeskSection';
import AdmissionSection from '@/components/AdmissionSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--neu-bg)]">
      {/* Top Navigation */}
      <Navbar />

      {/* Prominent Security Notice Banner */}
      <SecurityAlertBanner />

      <main className="flex-1">
        {/* Hero Banner with Soft Neumorphism */}
        <HeroBanner />

        {/* Engineering Departments (CSE, EEE, CE, ICE) */}
        <DepartmentsSection />

        {/* Notice Board */}
        <NoticeBoardSection />

        {/* Principal Desk & Campus Facilities */}
        <PrincipalDeskSection />

        {/* Online Admission Application Section */}
        <AdmissionSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
