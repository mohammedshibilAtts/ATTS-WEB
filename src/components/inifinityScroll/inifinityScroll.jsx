import Image from "next/image";
import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "right") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[150px] h-[60px] flex-shrink-0 bg-black overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex items-center justify-center"
            style={{
              borderRadius: "10px",  
              border: "0.5px solid #FFFFFF", 
              boxSizing: "border-box",
            }}
          >
            <Image 
              src={item.imageUrl} 
              alt={item.alt || `Image ${idx + 1}`}
              className="object-fill w-full h-full"
              style={{
                filter: "invert(1) grayscale(1)", 
                borderRadius: "10px",
                padding:"2px",
               
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
