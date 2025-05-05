
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ForCustomers from "@/components/ForCustomers";
import ForBusinesses from "@/components/ForBusinesses";
import HowItWorks from "@/components/HowItWorks";
import UpcomingFeatures from "@/components/UpcomingFeatures";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll(".fade-in-scroll");
      
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.8;
        
        if (isInViewport) {
          element.classList.add("appear");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero /> {/* Purple (already updated) */}
      <ForCustomers /> {/* White (already white) */}
      <ForBusinesses className="bg-[#6214a8] text-white" /> {/* Changed to purple */}
      <HowItWorks className="bg-white" /> {/* Changed to white */}
      <UpcomingFeatures className="bg-[#6214a8] text-white" /> {/* Changed to purple */}
      <Testimonials /> {/* Already white */}
      <CTA /> {/* Already has a different background */}
      <Footer />
    </div>
  );
};

export default Index;
