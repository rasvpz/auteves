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
          className="flex items-center p-4 text-white bg-slate-950 opacity-85 font-semibold cursor-pointer whitespace-nowrap"
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
            showDetails["card1"] ? "max-h-[920px]" : "max-h-[518px]"
          } bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
        >
          <Link href="https://www.facebook.com/profile.php?id=61567655038718">
            <Image
              src="./accountingWithGst.png"
              alt="accounting"
              width={307}
              height={175}
              priority
              className="w-full object-cover"
            />
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-semibold leading-tight">
              Manual Accounting with GST from an Expert Trainer in Cherpulassery
            </h1>
          </Link>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
            Are you ready to build a solid foundation in accounting? Join our
            comprehensive course in <strong>Manual Accounting and GST</strong>,
            led by a highly experienced GST consultant, right here in{" "}
            <strong>Cherpulassery</strong>. This course is designed for students
            and professionals alike who want to master the essential skills of
            accounting and GST and no previous experience required!
          </p>
          <div>
            
          </div>
          <button
          className="bg-slate-950 p-1 px-2 cursor-pointer mt-3 mr-3 mb-3 self-end"
            onClick={() => toggleDetails("card1")}
          >
            What You will Gain...
          </button>

          {/* Conditionally render content based on showDetails['card1'] */}
          {showDetails["card1"] && (
            <>
              <ul className="list-disc pl-10">
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
            showDetails["card2"] ? "max-h-[920px]" : "max-h-[518px]"
          } bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
        >
          {" "}
          <Link href="https://www.facebook.com/profile.php?id=61567655038718">
            <Image
              src="./tallythumb.png"
              alt="accounting"
              width={307}
              height={175}
              priority
              className="w-full object-cover"
            />
              <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-semibold leading-tight">
              Become a Pro in Tally prime from an Expert Trainer in
              Cherpulassery!
            </h1>
          </Link>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
            Unlock the world of accounting with our hands-on course in Manual
            Accounting, GST, and Tally! Led by a{" "}
            <strong>seasoned Tally trainer</strong> with years of experience,
            this course provides practical, in-depth knowledge in accounting
            fundamentals and GST, all designed to get you career-ready. Whether
            you are a beginner or seeking to enhance your skills.
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-3 mr-3 mb-3 self-end"
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
            showDetails["card3"] ? "max-h-[920px]" : "max-h-[518px]"
          } bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
        >
          {" "}
          <Link href="https://www.facebook.com/profile.php?id=61567655038718">
            <Image
              src="./gstthumbnails.png"
              alt="gst"
              width={307}
              height={175}
              priority
              className="w-full object-cover"
            />
              <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-semibold leading-tight">
              Master Your Accounting Skill with our GST course in Cherpulassery!
            </h1>
          </Link>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
            Are you ready to build a career in accounting or upgrade your
            financial management skills? Our Complete Accounting Course—covering
            GST expertise you need, whether you are a beginner or an experienced
            learner looking to expand your knowledge. Led by a seasoned{" "}
            <strong> Tally expert with years of industry experience</strong>
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-3 mr-3 mb-3 self-end"
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
            showDetails["card4"] ? "max-h-[920px]" : "max-h-[518px]"
          } bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
        >
          {" "}
          <Link href="https://www.facebook.com/profile.php?id=61567655038718">
            <Image
              src="./sapthumbnail.png"
              alt="sap"
              width={307}
              height={175}
              priority
              className="w-full object-cover"
            />
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-semibold leading-tight">
              SAP and Tally Course with an Expert Training in Cherpulassery!
            </h1>
          </Link>
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
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-3 mr-3 mb-3 self-end"
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
