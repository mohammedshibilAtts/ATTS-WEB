import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import About1 from '@/assests/images/about1.jpg';
import About2 from '@/assests/images/about2.jpg';
import About3 from '@/assests/images/about3.jpg';
import About4 from '@/assests/images/about4.jpg';
import About5 from '@/assests/images/about5.png';
import About6 from '@/assests/images/about6.jpg';
import About7 from '@/assests/images/about7.jpg';
import About8 from '@/assests/images/about8.jpg';
import About9 from '@/assests/images/about9.jpg';
import About10 from '@/assests/images/about10.jpg';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    { src: About1, alt: "Office staircase" },
    { src: About2, alt: "Office workspace side view" },
    { src: About3, alt: "Reception desk with wooden wall" },
    { src: About4, alt: "Meeting room centered view" },
    { src: About5, alt: "Conference room table" },
    { src: About6, alt: "Main workspace area" },
    { src: About7, alt: "Conference room" },
    { src: About8, alt: "Main workspace" },
    { src: About9, alt: "Office interior with wall art" },
    { src: About10, alt: "Office detail view" },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000); // Changed to 10 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


  return (
    <div className="relative w-full block lg:hidden mt-7">
      <motion.div 
        className="relative h-96 overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence initial={false}>
          <motion.div 
            key={currentIndex}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>


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
      </motion.div>
    </div>
  );
};

export default ImageSlider;