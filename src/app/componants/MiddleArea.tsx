import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import WebCourse from "./WebCourse";
import TechnicalCourse from "./TechnicalCourse";

const MiddleArea = () => {
  const [showDetails, setShowDetails] = useState<Record<string, boolean>>({});
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/about");
  };

  const toggleDetails = (id: string) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <div className="flex lg:px-8 pb-4 lg:mt-0 mt-4">
        <h1
          className="flex items-center p-4 text-white bg-slate-950 opacity-85 font-bold cursor-pointer whitespace-nowrap"
          onClick={handleLoginClick}
        >
          Accounting with GST, Tally & SAP
          <FaAngleDown className="hover:text-gray-400 ml-2" size={30} />
        </h1>
      </div>

      <div className="p-4 lg:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* First Card */}
        <div
          className={`${
            showDetails["card1"] ? "max-h-[920px]" : "lg:max-h-[500px] max-h-[526px]"
          } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
        >
        <div className="relative pb-9/16 w-full">
        <iframe
          className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg "
          src="https://www.youtube.com/embed/AfTCM6VGRN8?list=PLdXVgtxMrtEeQ2v4mVZ-ywKWjD1291aml"
          title="Accounting Class 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
              <mark>Manual Accounting with GST </mark> from an Expert Trainer in Cherpulassery
            </h1>

            <hr className="border border-blue-900"/>
            
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
            Are you ready to build a solid foundation in accounting? Join our
            comprehensive course in <strong>Manual Accounting and GST</strong>,
            led by a highly experienced GST consultant, right here in{" "}
            <strong>Cherpulassery</strong>. This course is designed for students
            and professionals alike who want to master the essential skills of
            accounting and GST and no previous experience required!
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-0 self-end"
            onClick={() => toggleDetails("card1")}
          >
            What You will Gain...
          </button>

          {/* Conditionally render content based on showDetails['card1'] */}
          {showDetails["card1"] && (
            <>
              <ul className="list-disc pl-10 mt-4">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                  A deep understanding of manual accounting practices.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                  Expert knowledge of GST, directly from a professional
                  consultant.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                  Practical skills that will give you an edge in business or a
                  career in accounting at Cherpulassery.
                </li>
              </ul>
              <p className="text-slate-800 p-2 leading-tight">
                Classes are available in <strong>Cherpulassery</strong> and open
                to residents and working emloyees of nearby cities, including{" "}
                <strong>
                  Pattambi, Koppam, Shornur, Perinthalmanna, Mannarkad,
                  Ottapalam, and Kongad
                </strong>
                . Do not miss this opportunity to learn from the best!
              </p>
            </>
          )}
        </div>

        {/* Second Card */}
        <div
        className={`${
          showDetails["card2"] ? "max-h-[920px]" : "lg:max-h-[500px] max-h-[526px]"
        } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
      >
          {" "}
          <div className="relative pb-9/16 w-full">
        <iframe
          className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg "
          src="https://www.youtube.com/embed/i8cL61v-rSM?list=PLdXVgtxMrtEeQ2v4mVZ-ywKWjD1291aml" 
          title="Tally Prime" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
              Become a Pro in <mark> Tally prime</mark> from an Expert Trainer in
              Cherpulassery!
            </h1>

          <p className="text-slate-800 pl-2 pr-2 leading-tight">
            Unlock the world of accounting with our hands-on course in Manual
            Accounting, GST, and Tally! Led by a{" "}
            <strong>seasoned Tally trainer</strong> with years of experience,
            this course provides practical, in-depth knowledge in accounting
            fundamentals and GST, all designed to get you career-ready. Whether
            you are a beginner or seeking to enhance your skills.
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card2")}
          >
            What You will Gain...
          </button>
          {/* Conditionally render content based on showDetails['card2'] */}
          {showDetails["card2"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                  Learn manual accounting and GST from a professional trainer
                  with years of Tally expertise.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                  Gain the skills and confidence to work with Tally for business
                  accounting.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                  A perfect foundation for a career in finance and accounting.
                </li>
              </ul>
              <p className="text-slate-800 p-2 leading-tight">
                Classes are available in <strong>Cherpulassery</strong> and open
                to residents and working emloyees of nearby cities, including{" "}
                <strong>
                  Pattambi, Koppam, Shornur, Perinthalmanna, Mannarkad,
                  Ottapalam, and Kongad
                </strong>
                . Don not miss this opportunity to learn from the best!
              </p>
            </>
          )}
        </div>

        {/* Third Card */}

        <div
        className={`${
          showDetails["card3"] ? "max-h-[920px]" : "lg:max-h-[500px] max-h-[526px]"
        } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
      >

<div className="relative pb-9/16 w-full">
            <iframe
              className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
          src="https://www.youtube.com/embed/IBZtdr3t2xc?list=PLdXVgtxMrtEeQ2v4mVZ-ywKWjD1291aml" 
          title="GST Training"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
              Master Your Accounting Skill with our <mark>GST course</mark> in Cherpulassery!
            </h1>

          <p className="text-slate-800 pl-2 pr-2 leading-tight">
            Are you ready to build a career in accounting or upgrade your
            financial management skills? Our Complete Accounting Course—covering
            GST expertise you need, whether you are a beginner or an experienced
            learner looking to expand your knowledge. Led by a seasoned{" "}
            <strong> Tally expert with years of industry experience</strong>
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card3")}
          >
            What You will Gain...
          </button>
          {/* Conditionally render content based on showDetails['card2'] */}
          {showDetails["card3"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                  This course delivers hands-on learning, practical knowledge,
                  and a solid foundation for real-world application.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                  Expert-Level Understanding of GST: Gain practical skills in
                  GST management directly from an experienced GST consultant.
                </li>
              </ul>
              <p className="text-slate-800 p-2 leading-tight">
                Classes are available in <strong>Cherpulassery</strong> and open
                to residents and working emloyees of nearby cities, including{" "}
                <strong>
                  Pattambi, Koppam, Shornur, Perinthalmanna, Mannarkad,
                  Ottapalam, and Kongad
                </strong>
                . Do not miss this opportunity to learn from the best!
              </p>
            </>
          )}
        </div>

        {/* Fourth Card */}

        <div
        className={`${
          showDetails["card4"] ? "max-h-[920px]" : "lg:max-h-[500px] max-h-[526px]"
        } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
      >
          {" "}
          <div className="relative pb-9/16 w-full">
            <iframe
              className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
              src="https://www.youtube.com/embed/paStT256QpU?list=PLdXVgtxMrtEeQ2v4mVZ-ywKWjD1291aml&autoplay=1&controls=1"
              title="SAP Hana"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
              <mark>SAP and Tally</mark> Course with an Expert Training in Cherpulassery!
            </h1>

          <p className="text-slate-800 pl-2 pr-2 leading-tight">
            Take the next step in your career with our{" "}
            <strong>SAP and Tally Professional</strong> Course. Our seasoned
            trainer brings years of <strong>expertise in Tally and SAP</strong>{" "}
            to provide you with practical, hands-on skills tailored to
            real-world business needs. Whether you are new to accounting
            software or looking to advance your skills, this course will prepare
            you with the essential tools to excel roles.
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card4")}
          >
            What You will Gain...
          </button>
          {/* Conditionally render content based on showDetails['card2'] */}
          {showDetails["card4"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                  Professional, career-focused training in SAP and Tally.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                  Personalized guidance from an experienced trainer.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                  Convenient access for residents of nearby towns
                </li>
              </ul>
              <p className="text-slate-800 p-2 leading-tight">
                Our training center is located in <strong>Cherpulassery</strong>
                , accessible to students and professionals from{" "}
                <strong>
                  {" "}
                  Pattambi, Koppam, Shornur, Perinthalmanna, Mannarkad,
                  Ottapalam, and Kongad
                </strong>
                .
              </p>
            </>
          )}
        </div>
      </div>

      <WebCourse />
      <TechnicalCourse />
    </>
  );
};

export default MiddleArea;
