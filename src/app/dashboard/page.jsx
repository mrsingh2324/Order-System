// please give me the dashboard page code in latest next js format

// use client
'use client'
import { FaGithub, FaTwitter, FaGoogle, FaFacebook, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


export default function dashboard() {
    const [arrow, setArrow] = useState(false);

    return (
        <div className="bg-gray-900 h-screen text-white flex items-center justify-start relative text-white">
            <Header />
                Dashboard
            <Footer />
        </div>
    )
}
