import React, { useState } from 'react';
import './styles.css';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

const Gallery = ({ images, width, height, radius, showThumbs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleThumbClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="gallery" style={{ width, height }}>
      <div className="gallery-main">
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          style={{ borderRadius: radius }}
        />
        <button
          className="gallery-arrow gallery-arrow-left"
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          <img src={arrowLeft} alt="Previous" />
        </button>
        <button
          className="gallery-arrow gallery-arrow-right"
          onClick={handleNextClick}
          disabled={currentIndex === images.length - 1}
        >
          <img src={arrowRight} alt="Next" />
        </button>
      </div>
      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className={`gallery-thumb ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleThumbClick(index)}
              style={{ borderRadius: radius }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
