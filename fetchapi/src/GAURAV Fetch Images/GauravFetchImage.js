// Importing necessary React hooks
import React, { useState, useEffect } from 'react';

// Creating a functional component named ImageComponent
const GauravImageComponent = () => {
  // Using the useState hook to create a state variable called imageSrc
  const [imageSrc, setImageSrc] = useState('');

  // Using the useEffect hook to perform side effects in the component
  useEffect(() => {
    // Defining an asynchronous function fetchImage
    const fetchImage = async () => {
      try {
        // Using the fetch function to make an HTTP GET request to the specified API endpoint
        const response = await fetch('https://gauravimages.onrender.com/api/getImages/1705044683489-box6.jpg');

        // Checking if the response status is OK (status code 200)
        if (!response.ok) {
          // If not OK, throwing an error
          throw new Error('Failed to fetch image');
        }

        // If the response is OK, getting the image data as a blob
        const blob = await response.blob();

        // Creating a local URL for the image using the blob data
        const imageUrl = URL.createObjectURL(blob);

        // Setting the image URL in the component's state
        setImageSrc(imageUrl);
      } catch (error) {
        // Handling errors by logging them to the console
        console.error('Error fetching image:', error);
      }
    };

    // Calling the fetchImage function when the component mounts
    fetchImage();
  }, []); // The empty dependency array ensures that useEffect runs only once when the component mounts

  // Rendering JSX content
  return (
    <div>
      {/* Rendering an image tag with the fetched image source (if available) */}
      {imageSrc && <img src={imageSrc} alt="Fetched Image" />}
    </div>
  );
};

// Exporting the ImageComponent so it can be used in other parts of the application
export default GauravImageComponent;
