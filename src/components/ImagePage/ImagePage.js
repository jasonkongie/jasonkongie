import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typed from 'typed.js';
import './ImagePage.css';

const ImagePage = ({ images }) => {
  const { id } = useParams();
  const image = images[id];

  useEffect(() => {
    const typedOptions = {
      strings: [image.caption],
      typeSpeed: 10,
      loop: false,
    };

    const typed = new Typed(".image-caption", typedOptions);
    return () => {
      typed.destroy();
    };
  }, [image.caption]);

  if (!image) {
    return <p>Image not found</p>;
  }

  return (
    <div className="image-page-container">
      <div className="image-page-wrapper">
        <img src={image.src} alt={image.alt} className="image" />
        <div>
          <h2 className="image-title">{image.title}</h2>
          <p className="image-caption"></p>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
