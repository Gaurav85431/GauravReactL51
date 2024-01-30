import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UnsplashImage = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            client_id: 'bg59M94f_8zZ9bX5WPlVqvh1PUdw_60WnBrYJBcqPUA',
            count: 1, // Number of images to retrieve
          },
        });

        // Assuming the API response contains an array of images
        const image = response.data[0];
        setImageData({
          url: image.urls.regular,
          alt: image.description || 'Unsplash Image',
        });
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {imageData && <img src={imageData.url} alt={imageData.alt} />}
    </div>
  );
};

export default UnsplashImage;
