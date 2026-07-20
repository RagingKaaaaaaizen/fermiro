import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Hero.css';

function Hero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.3
    })
    .from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    }, '-=0.5')
    .fromTo('.hero-cta', 
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6
      }, '-=0.3')
    .from('.aircon-img', {
      x: 100,
      opacity: 0,
      duration: 1
    }, '-=0.8')
    .from('.wind-effect', {
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15
    }, '-=0.5')
    .fromTo('.hero-scroll', 
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.2');

    // Separate continuous bounce animation for the arrow
    gsap.to('.scroll-arrow', {
      y: 10,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, { scope: heroRef });

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={heroRef} className="hero section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Aircon Sales, Installation, <span className="gradient-text">Cleaning & Repair Services in Cebu</span>
          </h1>
          <p className="hero-subtitle">
            Accepts Residential, Commercial and Industrial aircon installation, cleaning and repair services.
          </p>
          <p className="hero-subtitle">
            Our Certified Air Conditioning and Refrigeration Specialists ensure that your experience with us is satisfactory.
          </p>
          <button className="hero-cta" onClick={scrollToContact}>
            Contact Us
          </button>
        </div>
        <div className="hero-image">
          <img src="/aircon.png" alt="Air Conditioning Services" className="aircon-img" />
          <img src="/wind.png" alt="" className="wind-effect wind-1" />
          <img src="/wind.png" alt="" className="wind-effect wind-2" />
          <img src="/wind.png" alt="" className="wind-effect wind-3" />
        </div>
      </div>
      <div className="hero-scroll" onClick={scrollToNext}>
        <span>Explore More</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}

export default Hero;
