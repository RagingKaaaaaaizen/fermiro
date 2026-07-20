import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const servicesRef = useRef(null);

  useGSAP(() => {
    const services = gsap.utils.toArray('.service-item');
    
    services.forEach((service, index) => {
      gsap.from(service, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: service,
          start: 'top 85%',
          end: 'top 65%',
          scrub: 1,
        },
        stagger: 0.2
      });

      // Hover animation
      service.addEventListener('mouseenter', () => {
        gsap.to(service.querySelector('.service-number'), {
          scale: 1.2,
          rotation: 360,
          duration: 0.6,
          ease: 'back.out(1.7)'
        });
      });

      service.addEventListener('mouseleave', () => {
        gsap.to(service.querySelector('.service-number'), {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    });
  }, { scope: servicesRef });

  const servicesData = [
    {
      number: '01',
      title: 'Web Development',
      description: 'Building responsive, fast, and scalable web applications using modern technologies and best practices.',
      icon: '💻'
    },
    {
      number: '02',
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that provide exceptional user experiences.',
      icon: '🎨'
    },
    {
      number: '03',
      title: 'Animation',
      description: 'Crafting smooth, performant animations that bring your website to life and engage users.',
      icon: '✨'
    },
    {
      number: '04',
      title: 'Consulting',
      description: 'Providing expert guidance on architecture, performance optimization, and best practices.',
      icon: '💡'
    }
  ];

  return (
    <section id="services" ref={servicesRef} className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-number">{service.number}</div>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-btn">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
