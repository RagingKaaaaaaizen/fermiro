import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Portfolio.css';

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const portfolioRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.portfolio-item');
    
    items.forEach((item, index) => {
      gsap.from(item, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 1,
        }
      });

      // Image parallax effect
      const image = item.querySelector('.portfolio-image');
      gsap.to(image, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
  }, { scope: portfolioRef });

  const portfolioData = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'A modern e-commerce platform with smooth animations and intuitive user experience.',
      color: '#667eea'
    },
    {
      title: 'Portfolio Website',
      category: 'Personal Brand',
      description: 'Creative portfolio showcasing work with stunning visual effects and transitions.',
      color: '#764ba2'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Application',
      description: 'Data visualization dashboard with real-time updates and interactive charts.',
      color: '#f093fb'
    },
    {
      title: 'Mobile App Landing',
      category: 'Marketing',
      description: 'Engaging landing page for mobile app with scroll-triggered animations.',
      color: '#4facfe'
    }
  ];

  return (
    <section id="portfolio" ref={portfolioRef} className="portfolio section">
      <div className="container">
        <h2 className="section-title">Our Work</h2>
        
        <div className="portfolio-grid">
          {portfolioData.map((project, index) => (
            <div key={index} className="portfolio-item">
              <div 
                className="portfolio-image" 
                style={{ background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}99 100%)` }}
              >
                <div className="portfolio-overlay">
                  <button className="portfolio-btn">View Project →</button>
                </div>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
