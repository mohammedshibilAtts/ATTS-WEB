import React from 'react';
import { motion, useInView } from 'framer-motion';
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

const GalleryGrid = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Animation variants for each image container
  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="w-full mx-auto py-8"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="grid grid-cols-5 gap-3">
        {/* First column */}
        <div className="space-y-3 flex flex-col justify-end">
          <motion.div variants={imageVariants} className="rounded-r-2xl overflow-hidden h-96">
            <Image
              src={About1}
              alt="Office staircase"
              className="w-full h-full object-cover  object-right"
            />
          </motion.div>
          <motion.div variants={imageVariants} className="rounded-r-2xl overflow-hidden h-96">
            <Image
              src={About2}
              alt="Office workspace side view"
              className="w-full h-full object-cover  object-right"
            />
          </motion.div>
        </div>

        {/* Second column */}
        <div className="space-y-3 flex flex-col justify-end">
          <motion.div variants={imageVariants} className="rounded-2xl overflow-hidden h-80">
            <Image
              src={About3}
              alt="Reception desk with wooden wall"
              className="w-full h-full object-cover "
            />
          </motion.div>
          <motion.div variants={imageVariants} className="rounded-2xl overflow-hidden h-80">
            <Image
              src={About4}
              alt="Meeting room centered view"
              className="w-full h-full object-cover "
            />
          </motion.div>
        </div>

        {/* Third column */}
        <div className="space-y-3 flex flex-col justify-end">
          <motion.div variants={imageVariants} className="rounded-2xl overflow-hidden h-72">
            <Image
              src={About5}
              alt="Conference room table"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div variants={imageVariants} className="rounded-2xl overflow-hidden h-72">
            <Image
              src={About6}
              alt="Main workspace area"
              className="w-full h-full object-cover "
            />
          </motion.div>
        </div>

        {/* Fourth column */}
        <div className="space-y-3 flex flex-col justify-end">
          <motion.div variants={imageVariants} className="rounded-2xl overflow-hidden h-80">
            <Image
              src={About7}
              alt="Conference room table"
              className="w-full h-full object-cover "
            />
          </motion.div>
          <motion.div variants={imageVariants} className="rounded-2xl overflow-hidden h-80">
            <Image
              src={About8}
              alt="Main workspace area"
              className="w-full h-full object-cover "
            />
          </motion.div>
        </div>

        {/* Fifth column */}
        <div className="space-y-3 flex flex-col justify-end">
          <motion.div variants={imageVariants} className="rounded-l-2xl overflow-hidden h-96">
            <Image
              src={About9}
              alt="Office interior with wall art"
              className="w-full h-full object-cover "
            />
          </motion.div>
          <motion.div variants={imageVariants} className="rounded-l-2xl overflow-hidden h-96">
            <Image
              src={About10}
              alt="Office detail view"
              className="w-full h-full object-cover "
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryGrid;