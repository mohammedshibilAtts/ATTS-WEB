import React, { useState } from 'react';
import { FaPlusSquare } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";
function Accordion({accordionData}) {
  const [openIndex, setOpenIndex] = useState(null); 
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index} className="border border-slate-200 bg-[#e2d4d41a] mt-2  rounded-3xl px-8">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-3 text-black "
          >
            <span>{item.title}</span>
            <span
              className="text-slate-800 transition-transform duration-300"
              aria-expanded={openIndex === index ? 'true' : 'false'}
            >
              {openIndex === index ? (
               <FaSquareMinus size={30} />
              ) : (
                <FaPlusSquare size={30}/>
              )}
            </span>
          </button>
        
          <div
            className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out "
            style={{ maxHeight: openIndex === index ? `${document.getElementById(`content-${index}`).scrollHeight}px` : '0px' }}
          >
            <div id={`content-${index}`} className="pb-5 text-sm text-[#0F1929]" style={{"fontFamily":"gilroy","fontSize":"15px"}}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
