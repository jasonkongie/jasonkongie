import React, { useState, useRef, useEffect } from 'react';
import './VideoPlayer.css';
import videoData from '../../assets/videoData';

const VideoPlayer = () => {
  const [activeCaptionIndex, setActiveCaptionIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const thumbnailContainers = scrollRef.current.getElementsByClassName('video-player-thumbnail-container');
      const centerPosition = window.innerWidth / 2;

      let newActiveCaptionIndex = activeCaptionIndex;
      let minDistanceToCenter = Number.MAX_VALUE;

      for (let i = 0; i < thumbnailContainers.length; i++) {
        const rect = thumbnailContainers[i].getBoundingClientRect();
        const distanceToCenter = Math.abs(centerPosition - (rect.left + rect.width / 2));
        if (distanceToCenter < minDistanceToCenter) {
          minDistanceToCenter = distanceToCenter;
          newActiveCaptionIndex = i;
        }
      }

      setActiveCaptionIndex(newActiveCaptionIndex);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="video-player-container">
      <h1 className="video-player-title">VideoTape Archive</h1>
      <div className="video-player-scroll" ref={scrollRef} onScroll={handleScroll}>
        {videoData.map((video, index) => (
          <div key={index} className="video-player-thumbnail-container">
            <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer">
              <img src={video.thumbnail} alt={video.title} className="video-player-thumbnail" />
            </a>
          </div>
        ))}
      </div>
      <div className="video-player-caption">
        <h2>{videoData[activeCaptionIndex].title}</h2>
      </div>
    </div>
  );
};

export default VideoPlayer;
