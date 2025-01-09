"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const LayoutGrid = ({ cards, img }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-57xl mx-auto gap-4 relative z-10 cursor-pointer">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onHoverStart={() => setHoveredCard(card)}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative overflow-hidden bg-white rounded-xl h-full w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <ImageComponent card={card} img={img} />
            
            {hoveredCard?.id === card.id && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 transition-all duration-200"
              >
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-white z-20"
                >
                  {card.content}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card, img = true }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  // Lazy load logic using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px", // Trigger loading a bit before entering the viewport
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return img ? (
    <motion.div
      ref={imageRef}
      className={`absolute inset-0 h-full w-full transition duration-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`absolute inset-0 w-full h-full bg-center bg-cover ${isLoaded ? '' : 'blur-xl'}`}
        style={{ backgroundImage: `url(${'https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200'})` }}
      ></div>
      
      {/* This is for when the image is loaded */}
      {isLoaded && (
        
        <motion.img
        
          src={card.thumbnail}
          className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
          alt="thumbnail"
        />
      )}
    </motion.div>
  ) : (
    <div className="relative w-full h-full">
      <motion.video
        ref={imageRef}
        autoPlay
        loop
        muted
        playsInline
        className={`object-cover object-top absolute inset-0 w-full h-full transition duration-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        alt="thumbnail"
        loading="lazy"
      >
        <source src={isLoaded ? card.thumbnail : ""} type="video/mp4" />
        <source src="fallback-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Black shade overlay using Tailwind */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  );
};
