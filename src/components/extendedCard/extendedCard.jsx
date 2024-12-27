import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const OpenCards = ({ cards }) => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const cardVariants = {
    initial: { 
      width: 600,
      transition: { 
        duration: 0.8
      }
    },
    expanded: { 
      width: 2000,
      transition: { 
        duration: 0.9,
      }
    },
    hover: {
      transition: { 
        duration: 0.6
      }
    }
  }

  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        delay: 0.3, 
        duration: 1.1
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: { 
        stiffness: 200,
        duration: 0.3 
      }
    }
  }

  return (
    <section className='py-16'>
      <div className='w-full'>
        <div className='flex flex-col md:flex-row justify-center items-center space-x-1 space-y-4 md:space-y-0'>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={expandedIndex === index ? "expanded" : "initial"}
              transition={{ duration: 0.5 }}
              whileHover="hover"
              className="relative overflow-hidden shadow-lg cursor-pointer"
              style={{ height: '500px', width: '600px' }} 
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
            >
              <div className='relative w-full h-full'>
                <Image 
                  src={card.img} 
                  alt={card.title || `Card ${index + 1}`} 
                  layout="fill" 
                  objectFit="cover" 
                  className='absolute inset-0 z-0'
                />
                <div className='absolute inset-0 bg-black bg-opacity-50 z-10' />
                
                <motion.div 
                  className="absolute left-0 top-3/4 transform -translate-y-1/2 z-20 -rotate-90 text-white mb-8 pl-4 ms-4"
                  style={{ "transformOrigin": 'left center',"textWrap":"nowrap" }}
                >
                  <h3 className="font-Unbounded text-lg text-white w-30 mt-2 -ms-32  font-unbounded">{card.title || `Card ${index + 1}`}</h3>
                </motion.div>

                {expandedIndex === index && (
                  <div className='absolute bottom-0 left-0 right-0 p-9 text-white z-20'>
                     
                    <AnimatePresence>
                      <motion.div
                        variants={textVariants}
                        initial="initial"
                        animate="visible"
                        exit="exit"
                        className='mt-2 text-sm text-white'
                      >
                       <hr  className='mr-auto mb-2'/>
                        {card.description || 'No description available'}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OpenCards
