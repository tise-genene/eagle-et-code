import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import KeyFeatures from "../components/KeyFeatures";
import TestimonialsSection from "../components/TestimonialsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import FAQsSection from "../components/FAQsSection";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        <KeyFeatures />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQsSection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
