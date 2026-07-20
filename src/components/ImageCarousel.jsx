import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ThreeDImageCarousel } from './lightswind/3d-image-carousel.tsx';
import './ImageCarousel.css';

function ImageCarousel() {
  const carouselRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  // Image slides for the 3D carousel
  const slides = [
    { 
      id: 1, 
      src: '/about.png'
    },
    { 
      id: 2, 
      src: '/about1.png'
    },
    { 
      id: 3, 
      src: '/about2.png'
    },
    { 
      id: 4, 
      src: '/about3.png'
    },
    { 
      id: 5, 
      src: '/about4.png'
    },
  ];

  useGSAP(() => {
    if (!carouselRef.current) return;

    const title = carouselRef.current.querySelector('.carousel-title');
    const wrapper = carouselRef.current.querySelector('.carousel-3d-wrapper');

    if (title) {
      gsap.from(title, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top 80%',
        }
      });
    }

    if (wrapper) {
      gsap.from(wrapper, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top 70%',
        }
      });
    }
  }, { scope: carouselRef });

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
    // Stop carousel autoplay
    const carouselContainer = document.querySelector('.cascade-slider_container');
    if (carouselContainer) {
      carouselContainer.style.pointerEvents = 'none';
    }
  };

  const closeLightbox = () => {
    setIsClosing(true);
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setLightboxOpen(false);
      setLightboxImage(null);
      setIsClosing(false);
      document.body.style.overflow = 'auto';
      // Resume carousel autoplay
      const carouselContainer = document.querySelector('.cascade-slider_container');
      if (carouselContainer) {
        carouselContainer.style.pointerEvents = 'auto';
      }
    }, 500); // Match the animation duration
  };

  // Handle click on carousel images
  const handleImageClick = (e, src) => {
    e.preventDefault();
    openLightbox(src);
  };

  return (
    <>
      <section ref={carouselRef} className="carousel-section">
        <div className="container">
      
          
          <div className="carousel-3d-wrapper" onClick={(e) => {
            // Don't allow clicks when lightbox is open
            if (lightboxOpen) return;
            
            const imgElement = e.target.closest('img');
            if (imgElement) {
              handleImageClick(e, imgElement.src);
            }
          }}>
            <ThreeDImageCarousel
              slides={slides}
              itemCount={5}
              autoplay={!lightboxOpen}
              delay={3}
              pauseOnHover={true}
              className="my-8"
            />
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className={`lightbox-overlay ${isClosing ? 'closing' : ''}`} onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Gallery" className="lightbox-image" />
            <p className="lightbox-hint">Use arrow keys to navigate • ESC to close</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageCarousel;
