import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import About1 from '@/assests/images/about1.jpg'
import About2 from '@/assests/images/about2.jpg'
import About3 from '@/assests/images/about3.jpg'
import About4 from '@/assests/images/about4.jpg'
import About5 from '@/assests/images/about5.png'
import About6 from '@/assests/images/about6.jpg'
import About7 from '@/assests/images/about7.jpg'
import About8 from '@/assests/images/about8.jpg'
import About9 from '@/assests/images/about9.jpg'
import About10 from '@/assests/images/about10.jpg'
import Image from 'next/image';
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample images - replace with your own
  const images = [
    { src: About1, alt: "About 1" },
    { src: About2, alt: "About 2" },
    { src: About3, alt: "About 3" },
    { src: About4, alt: "About 4" },
    { src: About5, alt: "About 5" },
    { src: About6, alt: "About 6" },
    { src: About7, alt: "About 7" },
    { src: About8, alt: "About 8" },
    { src: About9, alt: "About 9" },
    { src: About10, alt: "About 10" },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full block lg:hidden mt-7">
      {/* Main slider container */}
      <div 
        className="relative h-96 overflow-hidden rounded-t-lg"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Image container */}
        <div 
          className="absolute w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex h-full">
            {images.map((image, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;