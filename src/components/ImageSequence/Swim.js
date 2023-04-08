import React, { useRef, useState, useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import Sequence from './ImageSequence';
import LoadingPage from '../LoadingPage/LoadingPage';
import './Swim.css';

const Swim = () => {
  const ref = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem('visited');

    if (!visited) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('visited', true);
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
        <LoadingPage />
      ) : (
        <Controller>
          <Scene duration="1200%" triggerHook="onLeave" pin>
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

export default Swim;
