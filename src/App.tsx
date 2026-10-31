import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import AttractionsSection from './components/AttractionsSection';
import EntertainmentSection from './components/EntertainmentSection';
import FoodFestivalSection from './components/FoodFestivalSection';
import EntrepreneurshipSection from './components/EntrepreneurshipSection';
import ScheduleSection from './components/ScheduleSection';
import RegistrationCtaSection from './components/RegistrationCtaSection';
import Footer from './components/Footer';
import InstagramPopup from './components/InstagramPopup';
import MobileFloatingBar from './components/MobileFloatingBar';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-diwali-dark text-diwali-cream flex flex-col selection:bg-diwali-orange selection:text-diwali-dark overflow-x-hidden">
      
      {/* Sticky Festive Navigation */}
      <Navbar />

      {/* Main Website Sections */}
      <main className="flex-grow">
        {/* Section 1 — Hero */}
        <Hero />

        {/* Section 2 — Event Introduction Video */}
        <VideoSection />

        {/* Section 3 — Festival Attractions (8 Official Attractions) */}
        <AttractionsSection />

        {/* Section 4 — Special Entertainment */}
        <EntertainmentSection />

        {/* Section 5 — Diwali Food Festival (8 Gourmet Stalls) */}
        <FoodFestivalSection />

        {/* Section 6 — Student Entrepreneurship & Stalls */}
        <EntrepreneurshipSection />

        {/* Section 7 — Event Schedule Timeline */}
        <ScheduleSection />

        {/* Section 8 — Final Registration CTA (Razorpay) */}
        <RegistrationCtaSection />
      </main>

      {/* Section 10 — Footer & Campus Info */}
      <Footer />

      {/* Mobile Floating Quick Registration Bar */}
      <MobileFloatingBar />

      {/* Section 6 of PRD: Instagram Follow Popup */}
      <InstagramPopup />

    </div>
  );
};

export default App;
