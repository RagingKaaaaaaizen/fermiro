import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CallBanner.css';

gsap.registerPlugin(ScrollTrigger);

function CallBanner() {
  const bannerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.call-banner-title', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: bannerRef.current,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      }
    });

    gsap.from('.call-banner-text', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: bannerRef.current,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      }
    });
  }, { scope: bannerRef });

  return (
    <section ref={bannerRef} className="call-banner">
      <div className="call-banner-content">
        <h2 className="call-banner-title"><strong>Fermiro Refrigeration And Air-Conditioning Services Co.</strong></h2>
        <p className="call-banner-text">
          Call us now at (+632) 462-1818, 0917-790-0366 or 0923-422-8388.
        </p>
      </div>
    </section>
  );
}

export default CallBanner;
