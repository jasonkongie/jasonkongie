import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import './Gallery.css';
import Swim from '../ImageSequence/Swim';

const Gallery = ({ images }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem('visited_gallery');

    if (!visited) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('visited_gallery', true);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="gallery-grid">
      {isLoading ? (
        <div className="gallery-loading">
          <LoadingPage
            strings={["Custom text 1.", "Custom text 2."]}
            typeSpeed={100}
            backSpeed={50}
            loop={false}
          />
        </div>
      ) : (
        images.map((image, index) => (
          <Link
            key={index}
            to={
              image.alt.toLowerCase() === 'swim'
                ? { pathname: '/swim', component: Swim }
                : `/image/${index}`
            }
          >
            <img src={image.src} alt={image.alt} className="gallery-img" />
          </Link>
        ))
      )}
    </div>
  );
};

export default Gallery;
