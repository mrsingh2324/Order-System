"use client"

import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Footer(){
  return (
    <div className='absolute w-full bottom-0'>

    <footer className="bg-gray-900 text-white py-4 px-8 flex justify-center items-center gap-10">
      <div className="flex gap-8">
        <a href="https://github.com/themacson" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-blue-500" />
        </a>
        <a href="https://twitter.com/themacson" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-blue-500" />
        </a>
        <a href="https://facebook.com/themacson" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl hover:text-blue-500" />
        </a>
      </div>
      <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} Your Food App. All rights reserved.</p>
    </footer>
    </div>
  );
};

