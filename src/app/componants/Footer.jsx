// import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { FaAngleDown } from "react-icons/fa";
import Image from 'next/image';
// import Link from 'next/link';

const Footer = () => {
  // const [showDetails, setShowDetails] = useState({}); // Track each card's detail state
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/about');
  };

  // const toggleDetails = (id) => {
  //   setShowDetails((prevState) => ({
  //     ...prevState,
  //     [id]: !prevState[id], // Toggle the specific card's details
  //   }));
  // };

  return (
    <>
      <div className='flex lg:px-8 pb-4'>
        <h1
          className="flex items-center p-4 text-white bg-slate-950 opacity-85 font-semibold cursor-pointer whitespace-nowrap"
          onClick={handleLoginClick}
        >
          CONTACTS
          <FaAngleDown className="hover:text-gray-400 ml-2" size={30} /> 
        </h1>
      </div>

      <div className="shadow-2xl">
        
        <div className="p-4 bg-gray-300">
        <div className="flex items-center space-x-2">
          <Image 
            src="./logo.png" 
            alt="Logo" 
            width={60} 
            height={54} 
            priority
            className='shadow-lg'
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold lg:text-2xl">auteves</span>
            <span className='text-lg mt-[-12px] text-right'>academy</span>
          </div>
        </div>
        </div>

     </div>
    </>
  );
};

export default Footer;
