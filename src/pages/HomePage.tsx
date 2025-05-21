
import MainLayout from '../components/Layout/MainLayout';
import Hero from '../components/Home/Hero';
import FeaturedCategories from '../components/Home/FeaturedCategories';
import Testimonials from '../components/Home/Testimonials';
import SafetyTips from '../components/Home/SafetyTips';
import CTASection from '../components/Home/CTASection';
import { useEffect } from 'react';

const HomePage = () => {
  // Animation on scroll logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      animateElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <MainLayout>
      <Hero />
      
      <div className="animate-on-scroll">
        <FeaturedCategories />
      </div>
      
      <div className="animate-on-scroll">
        <Testimonials />
      </div>
      
      <div className="animate-on-scroll">
        <SafetyTips />
      </div>
      
      <div className="animate-on-scroll">
        <CTASection />
      </div>
    </MainLayout>
  );
};

export default HomePage;
