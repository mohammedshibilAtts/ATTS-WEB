"use client";;
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";

import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "./use-outside-click";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;

    }
  }, [initialScroll]);


  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    (<CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}>
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto"
            )}>
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl">
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </CarouselContext.Provider>)
  );
};


export const Card = ({
  card,
  index,
  layout = false,
}) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  return (
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-96 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      <div
        className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none"
      />
      <div className="relative z-40 p-8 w-full">
        <motion.p
          layoutId={layout ? `category-${card.category}` : undefined}
          className="text-white text-sm md:text-base font-medium font-sans text-left"
        >
          {card.category}
        </motion.p>

        
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className={`text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2 transition-all duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {card.title}
        </motion.p>

        
        <motion.div
          layoutId={layout ? `description-${card.title}` : undefined}
          className="w-full h-full text-white text-base font-light font-sans mt-2 absolute top-0 left-0 right-0 px-8 transition-all duration-300 "
          initial={{ y: 100, opacity: 0 }} 
          animate={{
            y: isHovered ? 10: 30, 
            opacity: isHovered ? 1 : 0,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
        >
         <div className=" text-start">
         {card.description}
          </div>
        </motion.div>
      </div>

      <BlurImage
        src={card.img}
        alt={card.title}
        fill
        className="object-cover absolute z-10 inset-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
    </motion.button>
  );
};


export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    (<Image
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest} />)
  );
};
