import React, { useState } from "react";
import foto1 from '../assets/video.png';
import foto2 from '../assets/liveSound.png';
import foto3 from '../assets/stage.png';

export default function HomeSlider() {
  const [currentPhoto, setCurrentPhoto] = useState(0); // Initial photo index
  const photos = [foto1, foto2, foto3];

  const handlePrev = () => {
    setCurrentPhoto(prevPhotoIndex => (prevPhotoIndex === 0 ? photos.length - 1 : prevPhotoIndex - 1));
  };

  const handleNext = () => {
    setCurrentPhoto(prevPhotoIndex => (prevPhotoIndex === photos.length - 1 ? 0 : prevPhotoIndex + 1));
  };

  return (
    <div className="bg-white relative" style={{ height: '30rem', position: 'relative' }}>
      <div className="w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition duration-500 ease-in-out transform"
          src={photos[currentPhoto].src}
          alt={`Photo ${currentPhoto + 1}`}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2" onClick={handlePrev}>
        Previous
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2" onClick={handleNext}>
        Next
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${index === currentPhoto ? 'bg-gray-900' : 'bg-gray-300'}`}
            onClick={() => setCurrentPhoto(index)}
          />
        ))}
      </div>
    </div>
  );
}
