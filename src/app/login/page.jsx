// use client
'use client'
import { FaGithub, FaTwitter, FaGoogle, FaFacebook, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


export default function login() {
    const [arrow, setArrow] = useState(false);

    return (
        <div className="bg-gray-900 h-screen text-white flex items-center justify-start relative text-white">
            <img src="/images/login.png" alt="login" className="fixed h-full w-full object-cover transform scale-x-[-1] " />

            {/* login form */}
            <Header />
           
            <div className="flex flex-col items-center justify-center mt-5 border bg-gradient-to-t from-gray-900 to-none border-gray-400 bg-opacity-10 shadow-md right-[70px] p-16 px-20 rounded-2xl shadow-2xl absolute">
                <h1 className="text-3xl font-bold mb-5 text-white ">Login</h1>
                <input type="text" placeholder="Email" className="text-black border border-gray-400 w-80 h-10 rounded-lg mb-5 px-5" />
                <input type="password" placeholder="Password" className="text-black border border-gray-400 w-80 h-10 rounded-lg mb-5 px-5" />
                <button className="bg-blue-500 w-80 h-10 rounded-lg text-white font-bold flex items-center justify-center gap-0 group-hover:bg-blue-600"
                    onMouseEnter={() => setArrow(true)}
                    onMouseLeave={() => setArrow(false)}>
                    <h1>Login</h1>
                    {/* {arrow &&  */}
                    <FaArrowRight className={`transform translate-x-2 ${arrow ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`} />
                    {/* } */}
                </button>
                {/* login using google and others  */}
                <div className="flex flex-col items-center justify-center mt-5">
                    <div className="flex items-center justify-center ">
                        <div className="w-36 h-0.3 bg-gray-400"></div>
                        <p className="mx-2 text-white">or</p>
                        <div className="w-36 h-0.3 bg-gray-400"></div>
                    </div>
                    <div className='flex mt-5 gap-10 items-center justify-center'>
                        <FaGoogle className="text-4xl bg-red-600 mx-2 text-white hover:cursor-pointer rounded-full " />
                        <FaFacebook className="text-4xl bg-blue-600 mx-2 text-white hover:cursor-pointer rounded-full " />
                    </div>
                </div>
                {/* or signup */}
                <div className="flex items-center justify-center mt-5">
                    <p className="mx-2 text-gray-100">Don't have an account?</p>
                    <a href="/signup" className="text-blue-500 hover:underline"><p className="text-white font-bold hover:text-blue-500">Sign up</p>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
