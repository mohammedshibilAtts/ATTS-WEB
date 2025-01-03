import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function Button({ title, link = "" }) {
  return (
    <button className="bg-[#010202] text-white px-6 py-2 rounded-xl transition-all duration-300 mb-3 flex items-center group hover:scale-110">
      <Link href={link} className="flex items-center">
        {title}
        <span className="ml-2 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-45">
          <MdArrowOutward />
        </span>
      </Link>
    </button>
  );
}

export default Button;
