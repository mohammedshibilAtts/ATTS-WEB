import { digitalEngineering, digitalMarketing, digitalMedia } from '@/constants/constant';
import Link from 'next/link';
import React from 'react'

function Services({ closeMenu }) {
  return (
   
    <div className="bg-[#2E2E30] text-white  px-4 sm:px-6 lg:px-8 mx-20 mt-8 rounded-xl   ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:grid-cols-2 xl:grid-cols-3 custom:grid-cols-2">
          
          {/* Digital Engineering Section */}
          <div className="main text-center p-6 rounded-lg h-full flex flex-col justify-between  ">
            <h2 className="text-2xl font-semibold mb-4">Digital Engineering</h2>
            <p className="mb-4 text-gray-400">Where creativity meets technology in digital engineering.</p>
            <hr className="my-4 border-gray-600" />
            <div className="items mt-2 space-y-4 flex-grow">
              {digitalEngineering.map((item, index) => (
                <div key={index} className="text-left">
                  <Link href={item.link} onClick={closeMenu }>
                  <h3 className="text-xl font-medium hover:cursor-pointer hover:text-[#B5D3F5] transition-colors duration-300">{item.title}</h3></Link>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Marketing Section */}
          <div className="main text-center p-6 rounded-lg h-full flex flex-col justify-between  ">
            <h2 className="text-2xl font-semibold mb-4">Digital Marketing</h2>
            <p className="mb-4 text-gray-400">Where creativity meets technology in digital marketing.</p>
            <hr className="my-4 border-gray-600" />
            <div className="items mt-2 space-y-4 flex-grow">
              {digitalMarketing.map((item, index) => (
                <div key={index} className="text-left">
                  <Link href={item.link} onClick={closeMenu }>
                  <h3 className="text-xl font-medium hover:cursor-pointer hover:text-[#B5D3F5] transition-colors duration-300">{item.title}</h3></Link>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Media Section */}
          <div className="main text-center p-6 rounded-lg h-full flex flex-col justify-between  ">
            <h2 className="text-2xl font-semibold mb-4">Digital Media</h2>
            <p className="mb-4 text-gray-400">Where creativity meets technology in digital media.</p>
            <hr className="my-4 border-gray-600" />
            <div className="items mt-2 space-y-4 flex-grow">
              {digitalMedia.map((item, index) => (
                <div key={index} className="text-left">
                  <Link href={item.link} onClick={closeMenu }>
                  <h3 className="text-xl font-medium hover:cursor-pointer hover:text-[#B5D3F5] transition-colors duration-300">{item.title}</h3></Link>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};




export default Services