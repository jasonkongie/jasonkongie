import React, { useRef, useState, useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import Sequence from './ImageSequence';
import LoadingPage from '../LoadingPage/LoadingPage';
import './Flash.css';

const Flash = () => {
  const ref = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem('visited_flash');

    if (!visited) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('visited_flash', true);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading-page">
          <LoadingPage
            strings={["Custom text 1.", "Custom text 2."]}
            typeSpeed={100}
            backSpeed={50}
            loop={false}
          />
        </div>
      ) : (
        <Controller>
          <Scene duration="10000%" triggerHook="onLeave" pin>
            {progress => (
              <div style={{ height: '100vh', position: 'relative' }}>
                <Sequence ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
          <div>
            <p>thank you swim</p>
          </div>
        </Controller>
      )}
    </div>
  );
};

export default Flash;
