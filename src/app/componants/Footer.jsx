import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { FaAngleDown } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const MiddleArea = () => {
  const [showDetails, setShowDetails] = useState({}); // Track each card's detail state
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/about');
  };

  const toggleDetails = (id) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the specific card's details
    }));
  };

  return (
    <>
      <div className='flex lg:px-8 pb-4'>
        <h1
          className="flex items-center p-4 text-white bg-slate-950 opacity-85 font-semibold cursor-pointer whitespace-nowrap"
          onClick={handleLoginClick}
        >
          Accounting with GST, Tally & SAP  
          <FaAngleDown className="hover:text-gray-400 ml-2" size={30} /> 
        </h1>
      </div>

      <div className="p-4 lg:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
        {/* Card 1 */}
        <div className="bg-white opacity-95 text-white text flex flex-col justify-center items-center border-2 border-white">
          <Link href="https://www.facebook.com/profile.php?id=61567655038718">
            <Image
              src="./accountingWithGst.png"
              alt="accounting"
              width={307}
              height={175}
              priority
            />
            <h1 className="text-slate-950 text-xl p-3 font-semibold leading-tight">
              Manual Accounting with GST from an Expert in Cherpulassery
            </h1>
          </Link>

          <p className="text-slate-800 pl-2 pr-2 leading-tight">
            Are you ready to build a solid foundation in accounting? Join our comprehensive course in <strong>Manual Accounting and GST</strong>, led by a highly experienced GST consultant, right here in <strong>Cherpulassery</strong>. This course is designed for students and professionals alike who want to master the essential skills of accounting and GST—no previous experience required!
          </p>

          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer m-4 self-end"
            onClick={() => toggleDetails('card1')}
          >
            What You’ll Gain...
          </button>

          {showDetails['card1'] && (
            <>
              <ul>
                <li className="text-slate-950">A deep understanding of manual accounting practices.</li>
                <li className="text-slate-950">Expert knowledge of GST, directly from a professional consultant.</li>
                <li className="text-slate-950">Practical skills that will give you an edge in business or a career in accounting at Cherpulassery.</li>
              </ul>

              <p className="text-slate-950">
                Our classes are accessible to anyone in the surrounding cities, including <strong>Pattambi, Koppam, Shornur, Perinthalmanna, Mannarkad, Ottapalam</strong>, and <strong>Kongad</strong>. Don’t miss this opportunity to learn from the best!
              </p>
            </>
          )}
        </div>

        {/* Card 2 */}
        <div className="bg-white opacity-95 text-white text flex flex-col justify-center items-center border-2 border-white">
          <Link href="https://www.facebook.com/profile.php?id=61567655038718">
            <Image
              src="./tallythumb.png"
              alt="tally"
              width={307}
              height={175}
              priority
            />
            <h1 className="text-slate-950 text-xl p-3 font-semibold leading-tight">
              Become a Pro in Tally prime from an Expert Trainer in Chepulassery!
            </h1>
          </Link>

          <p className="text-slate-800 pl-2 pr-2 leading-tight">
            Unlock the world of accounting with our hands-on course in Manual Accounting, GST, and Tally! Led by a <strong>seasoned Tally trainer</strong> with years of experience, this course provides practical, in-depth knowledge in accounting fundamentals and GST, all designed to get you career-ready.
          </p>

          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer m-4 self-end"
            onClick={() => toggleDetails('card2')}
          >
            What You’ll Gain...
          </button>

          {showDetails['card2'] && (
            <>
              <ul>
                <li className="text-slate-950">Learn manual accounting and GST from a professional trainer with years of Tally expertise.</li>
                <li className="text-slate-950">Gain the skills and confidence to work with Tally for business accounting.</li>
                <li className="text-slate-950">A perfect foundation for a career in finance and accounting.</li>
              </ul>

              <p className="text-slate-950">
                Classes are available in <strong>Chepulassery</strong> and open to residents of nearby cities, including <strong>Pattambi, Koppam, Shornur, Perinthalmanna, Mannarkad, Ottapalam, and Kongad</strong>. Don’t miss this opportunity to learn from the best!
              </p>
            </>
          )}
        </div>
        <div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="lg:mb-4 mt-4"
    src="./gst.png"
    alt="gst"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4">GST</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="lg:mb-4 mt-4"
    src="./sap.png"
    alt="sap"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4">SAP</h1> 
</div>
      </div>
    </>
  );
};

export default MiddleArea;
