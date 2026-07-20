import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CallBanner from './components/CallBanner';
import About from './components/About';
import ImageCarousel from './components/ImageCarousel';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Smooth scroll reveal for all sections
    const sections = gsap.utils.toArray('.section');
    
    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        }
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="app">
      <Navbar />
      <Hero />
      <CallBanner />
      <About />
      <ImageCarousel />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
