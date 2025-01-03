import React, { useState, useEffect } from 'react';

const VideoCarousel = ({ videos }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle indicator click
  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  // Change to the next video (or loop back to the first one)
  const changeVideo = () => {
    setActiveIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // Set an interval to change the video every 10 seconds
    const interval = setInterval(changeVideo, 11000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [videos.length,activeIndex]); // Re-run the effect when the videos array length changes

  return (
    <div id="indicators-carousel" className="relative w-full">
      <div className="relative md:h-[770px] h-[250px] overflow-hidden bg-slate-50"> {/* Set a fixed height */}
        
        {/* Black Shade Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div> {/* Black semi-transparent shade */}
        
        {videos.map((video, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}
            data-carousel-item={index === activeIndex ? 'active' : ''}
          >
            <video
              className="absolute block w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src={video.src}
              alt={video.alt}
              autoPlay
              loop
              muted
              playsInline
              style={{
                objectFit: 'fill', // Ensures the video maintains its aspect ratio and doesn't stretch
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        ))}
      </div>

      {/* Indicators (Dots) */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {videos.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-blue-500' : 'bg-white'}`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
