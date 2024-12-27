import React from 'react';
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


const GalleryGrid = () => {
  return (
    <div className="w-full  mx-auto py-8">
      {/* Header */}
      

      {/* Masonry Grid */}
      <div className="grid grid-cols-5  gap-3">
        {/* First column */}
        <div className="space-y-3 flex flex-col justify-end">
  <div className="rounded-r-2xl overflow-hidden h-96">
    <Image
      src={About1}
      alt="Office staircase"
      className="w-full h-full object-cover bg-red-50 object-right"
    />
  </div>
  <div className="rounded-r-2xl overflow-hidden h-96">
    <Image
      src={About2}
      alt="Office workspace side view"
      className="w-full h-full object-cover bg-red-50 object-right"
    />
  </div>
</div>


        {/* Second column */}
        <div className="space-y-3 flex flex-col justify-end">
          <div className="rounded-2xl overflow-hidden h-80">
            <Image
              src={About3}
              alt="Reception desk with wooden wall"
              className="w-full h-full object-cover bg-red-50"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-80">
            <Image
               src={About4}
              alt="Meeting room centered view"
              className="w-full h-full object-cover bg-red-50"
            />
          </div>
        </div>

        {/* Third column */}
        <div className="space-y-3 flex flex-col justify-end">
          <div className="rounded-2xl overflow-hidden h-72">
            <Image
              src={About5}
              alt="Conference room table"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-72">
            <Image
               src={About6}
              alt="Main workspace area"
              className="w-full h-full object-cover bg-red-50"
            />
          </div>
        </div>

        {/* Fourth column */}
        <div className="space-y-3 flex flex-col justify-end">
          <div className="rounded-2xl overflow-hidden h-80">
            <Image
               src={About7}
              alt="Conference room table"
              className="w-full h-full object-cover bg-red-50"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-80">
            <Image
               src={About8}
              alt="Main workspace area"
              className="w-full h-full object-cover bg-red-50"
            />
          </div>
        </div>

        {/* Fifth column */}
        <div className="space-y-3 flex flex-col justify-end">
          <div className="rounded-l-2xl overflow-hidden h-96">
            <Image
               src={About9}
              alt="Office interior with wall art"
              className="w-full h-full object-cover bg-red-50"
            />
          </div>
          <div className="rounded-l-2xl overflow-hidden h-96">
            <Image
               src={About10}
              alt="Office detail view"
              className="w-full h-full object-cover bg-red-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
