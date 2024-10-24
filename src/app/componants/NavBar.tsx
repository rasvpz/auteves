"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from "react";
import { FaLinkedin, FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle mobile menu

  // Navigation handlers
  const homePage = () => router.push('/');
  const aboutPage = () => router.push('/about');
  const contactPage = () => router.push('/contact');

  return (
    <div className='shadow-xl border-b-2 border-dotted border-gray-700'>
      <nav className="flex justify-between items-center py-4 px-8 text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image 
            src="./logo.png" 
            alt="Logo" 
            width={30} 
            height={27} 
            priority // Ensures the image is loaded immediately without lazy loading
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold lg:text-2xl">auteves</span>
            <span className='text-lg mt-[-12px] text-right'>academy</span>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-white" size={30} /> // Close icon when menu is open
          ) : (
            <FaBars className="text-white" size={30} /> // Hamburger icon for mobile
          )}
        </div>

        {/* Menu items for larger screens */}
        <div className="hidden md:flex space-x-8 lg:ml-0 ml-8">
          <span onClick={homePage} className="hover:text-gray-400 cursor-pointer">Home</span>
          <span onClick={aboutPage} className="hover:text-gray-400 cursor-pointer">About</span>
          <span onClick={contactPage} className="hover:text-gray-400 cursor-pointer">Contacts</span>
        </div>

        {/* Social Icons */}
        <div className="space-x-4 hidden md:flex items-center">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-400 border-2 rounded-full p-1" size={30} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-gray-400 border-2 rounded-full p-1" size={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-gray-400 border-2 rounded-full p-1" size={30} />
          </a>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col space-y-4 mt-4 md:hidden">
            <span onClick={homePage} className="hover:text-gray-400 cursor-pointer">Home</span>
            <span onClick={aboutPage} className="hover:text-gray-400 cursor-pointer">About</span>
            <span onClick={contactPage} className="hover:text-gray-400 cursor-pointer">Contacts</span>
            <div className="space-x-4 flex items-center">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-gray-400 border-2 rounded-full p-1" size={30} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-gray-400 border-2 rounded-full p-1" size={30} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-gray-400 border-2 rounded-full p-1" size={30} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
