import React, { useState, useEffect } from 'react';

const ImageComponent = () => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('https://gauravimages.onrender.com/api/getImages/1706292035473-box1.jpg');

        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {imageSrc && <img src={imageSrc} alt="Fetched Image" height={200} width={300} />}
    </div>
  );
};

export default ImageComponent;
