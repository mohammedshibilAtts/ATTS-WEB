"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({ children, direction = 'up' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    up: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 }
    },
    down: {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 }
    },
    right: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ 
        duration: 0.5, 
        type: "spring", 
        stiffness: 100 
      }}
      className="w-full "
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection