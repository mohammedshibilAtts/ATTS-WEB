import Image from 'next/image';
import React from 'react';
const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-[#010202] hover:border-gray-100 p-6 text-white border border-[#FFFFFF26] flex flex-col h-full transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#010202]">
      {icon && (
        <div className="mr-3 flex justify-center mb-3">
          <div className='bg-[#003067] p-3 border border-white rounded-3xl'>
            <Image src={icon} alt="Rocket Icon" width={40} height={40} />
          </div>
        </div>
      )}
      <div className="flex items-center justify-between mb-2 mt-3">
        <div className="flex items-Start">
          <div className="text-2xl text-white font-unbounded text-Start">{title}</div>
        </div>
      </div>
      <p className="text-sm sm:text-base mb-4 break-words">{description}</p>
    </div>
  );
};

export default Card;
