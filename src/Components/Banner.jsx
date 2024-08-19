import { useState, useEffect } from 'react';
import '../styles/Banner.css';
import { IconNext, IconPrev } from './Icons'
import { carouselImages as images } from '../assets/images/Carrousel/images.json';

export function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesCarrousel = images;

  useEffect(() => {
    if (imagesCarrousel.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesCarrousel.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [imagesCarrousel.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesCarrousel.length) % imagesCarrousel.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesCarrousel.length);
  };

  if (imagesCarrousel.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="banner">
      {imagesCarrousel.length > 1 && <button className='btn-carrousel btn-left' onClick={handlePrev}><IconPrev/></button>}
      <img
        src={imagesCarrousel[currentIndex].url}
        alt={imagesCarrousel[currentIndex].name}
        className="banner-image"
      />
      {imagesCarrousel.length > 1 && <button className='btn-carrousel btn-right' onClick={handleNext}><IconNext/></button>}
      <div className="indicators">
        {imagesCarrousel.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}