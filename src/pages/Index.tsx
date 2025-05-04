
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Trainers from "@/components/Trainers";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  // Animation for sections on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check on page load
    
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <div className="reveal">
        <About />
      </div>
      
      <div className="reveal">
        <Services />
      </div>
      
      <div className="reveal">
        <Trainers />
      </div>
      
      <div className="reveal">
        <Pricing />
      </div>
      
      <div className="reveal">
        <Testimonials />
      </div>
      
      <div className="reveal">
        <Contact />
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
