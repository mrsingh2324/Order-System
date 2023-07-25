'use client'
import { FaGithub, FaTwitter, FaGoogle, FaFacebook, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
    return (
        <div className='fixed  bg-blur-10 bg-gray-900'>
            <div className="flex items-center justify-center fixed top-5 left-10 gap-2">
                <FaGithub className="text-[56px] mx-2 text-white " />
                <div>
                    <h1 className='font-bold text-2xl'>
                        Website Name
                    </h1>
                    <h1 className='text-sm'>
                        Delivers the best experience
                    </h1>
                </div>
            </div>
                <div className="flex items-center justify-center fixed top-8 gap-10 right-10 gap-2 text-xl lg:right-[70px]">
                    <button>
                        <a href="/about" className="text-white font-bold hover:text-blue-500">
                            <h1>
                                About
                            </h1>
                        </a>
                    </button>
                    <button>
                        <a href="/contact" className="text-white font-bold hover:text-blue-500">
                            <h1>
                                Contact
                            </h1>
                        </a>
                    </button>
                </div>
        </div>
    )
}