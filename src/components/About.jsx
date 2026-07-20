import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.about-card');
    
    cards.forEach((card, index) => {
      gsap.from(card, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 1,
        }
      });
    });

    // Animate the profile image
    gsap.from('.about-image-wrapper', {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.about-image-wrapper',
        start: 'top 80%',
      }
    });
  }, { scope: aboutRef });

  return (
    <section id="about" ref={aboutRef} className="about section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        
        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image">
              <img src="/about.png" alt="About Us" className="about-img" />
            </div>
          </div>

          <div className="about-text">
            <p className="about-description">
              <strong>Fermiro Refrigeration and Air-Conditioning Services Co.</strong> provides reliable 24/7 air conditioning and refrigeration solutions for residential, commercial, and industrial clients. Our services include <strong>sales, installation, cleaning, repair, reprocessing, Freon recharging, detaching and relocation, and home service, all delivered at competitive rates. </strong>
            </p>
            <p>With experienced and certified air conditioning and refrigeration specialists, we are committed to providing quality workmanship, dependable service, and complete customer satisfaction.</p>
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default About;
