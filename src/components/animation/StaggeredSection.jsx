"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StaggeredSection = ({ children, staggerAmount = 1}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount:0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerAmount
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full "
    >
      {React.Children.map(children, (child, index) => (
        <motion.div 
          key={index} 
          variants={itemVariants}
          style={{ 
            transformOrigin: 'center',
            willChange: 'transform, opacity'
          }}

        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredSection