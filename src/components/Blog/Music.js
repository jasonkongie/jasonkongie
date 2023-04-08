import React, { useState, useEffect } from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';
import './Music.css';

const Music = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem('visited_music');

    if (!visited) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('visited_music', true);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="blog-container">
      {isLoading ? (
        <LoadingPage
          strings={["Custom text 1.", "Custom text 2."]}
          typeSpeed={100}
          backSpeed={50}
          loop={false}
        />
      ) : (
        <>
          <h1 className="blog-title">Life is a Rhapsody</h1>
          <div className="video-wrapper">
            <iframe
              title="Life is a Rhapsody"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ohbPd1qRA5Y"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
};

export default Music;
