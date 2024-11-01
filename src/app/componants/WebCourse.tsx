
import {  FaAngleDown  } from "react-icons/fa"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from "next/link";

const WebCourse = () => {
  const [showDetails, setShowDetails] = useState<Record<string, boolean>>({});
  const toggleDetails = (id: string) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <>
<div className='flex lg:px-8 pb-4 mt-4'>
  <h1
    className="flex items-center p-4 text-white bg-slate-950 opacity-85 font-semibold cursor-pointer whitespace-nowrap"
  >
    Web & Mobile Development Courses  
    <FaAngleDown className="hover:text-gray-400 ml-2" size={30} /> 
  </h1>

</div>
<div className="p-4 lg:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        <div
          className={`${
            showDetails["card1"] ? "max-h-[1100px]" : "lg:max-h-[560px] max-h-[1100px]"
          } bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
        >
          <Link href="https://www.facebook.com/profile.php?id=61567655038718">
            <Image
              src="./javathumbnail.png"
              alt="Java"
              width={307}
              height={175}
              priority
              className="w-full object-cover"
            />
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Are you looking to master <mark> Java programming</mark> and become a true professional with Spring Boot.
            </h1>
          </Link>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
          Join our <strong>Java</strong> Course, tailored for complete <strong>project-oriented learning</strong> using <strong>Spring Boot</strong> . 
          Led by a 13-year experienced <strong>industry expert</strong>  who has successfully completed over <strong>40 large projects</strong> , 
          this course delivers practical knowledge gained through real-world experiences. Whether you are a <strong>beginner</strong>  or a <strong>developer </strong> 
          looking to level up, this opportunity is now available in Cherpulassery!
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card1")}
          >
            What You will Gain...
          </button>

          {/* Conditionally render content based on showDetails['card1'] */}
          {showDetails["card1"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Master Spring Boot:</strong> Deep dive into Spring Boot, the industry-standard
                 framework for Java, and learn to build robust and scalable applications.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Problem-Solving Skills:</strong> Develop your ability to solve complex coding 
                challenges with practical examples from live projects.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Real-World Applications:</strong> Understand how to apply Java in real business 
                scenarios, preparing you for challenges faced by developers in the industry.
                </li>
              </ul>
              <p className="text-slate-800 p-2 leading-tight">
              <strong>Oppertunity to connect with other learners and professionals </strong> from nearby cities like Cherpulassery, Pattambi, Koppam, Shornur, Perinthalmanna, Mannarkad, Ottapalam, and Kongad.
              By the end of the course, you will be equipped with the knowledge and confidence needed to excel as a professional Java developer.
                . Do not miss this opportunity to learn from the best in cherppulassery!
              </p>
            </>
          )}
        </div>


        <div
          className={`${
            showDetails["card2"] ? "max-h-[1100px]" : "lg:max-h-[560px] max-h-[1100px]"
          } bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
        >
          <Link href="https://www.facebook.com/profile.php?id=61567655038718">
            <Image
              src="./nodejsthumbnail.png"
              alt="nodejs"
              width={307}
              height={175}
              priority
              className="w-full object-cover"
            />
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Unlock the power of <mark>Node.js</mark> with our project-oriented course by Express, NestJs and ElectronJs.
            </h1>
          </Link>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
          This hands-on program covers <strong>Express</strong> , <strong>NestJS</strong>, <strong>Electron</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>, providing  
          <strong> a full-stack experience </strong> & Learn to build robust APIs and handle server-side logic efficiently
           start from scratch to enhance your skills, this course offers practical 
          knowledge gained from real-world scenarios. Join us in Cherpulassery to take your programming skills 
          to the next level!
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card2")}
          >
            What You will Gain...
          </button>

          {/* Conditionally render content based on showDetails['card1'] */}
          {showDetails["card2"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Full-Stack Development Skills : </strong>
                Integrate frontend and backend using Electron, NestJs and Express enabling to build web & desktop applications.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Database Mastery : </strong>  Gain practical experience with both SQL (MySQL) and NoSQL (MongoDB) databases, covering data storage, retrieval, and management..
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Guidance from an Industry Veteran :</strong>  Learn directly from a professional who has successfully completed over 40 major projects, gaining invaluable strategies.
                </li>
              </ul>
              <p className="text-slate-800 p-2 leading-tight">
              Master server-side programming with Node.js, a critical skill for modern web development.
              Learn to build robust APIs and handle server-side logic efficiently using Express. Also Oppertunity to connect with other learners and professionals from nearby cities like Cherpulassery, Pattambi, Koppam, Shornur, Perinthalmanna, Mannarkad, Ottapalam, and Kongad.
              <strong> Join us in Cherpulassery to take your programming skills to the next level </strong>

              </p>
            </>
          )}
        </div>

        <div
          className={`${
            showDetails["card3"] ? "max-h-[1100px]" : "lg:max-h-[560px] max-h-[1100px]"
          } bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
        >
          <Link href="https://www.facebook.com/profile.php?id=61567655038718">
            <Image
              src="./reactJs2.png"
              alt="reactJs"
              width={307}
              height={175}
              priority
              className="w-full object-cover"
            />
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Master the Advanced <mark>React</mark> and <mark>Redux ToolKit</mark> to Elevate Your Web Development Skills with NEXTJS Frame Work
            </h1>
          </Link>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
          Dive deep into the cutting-edge world of <b>React</b> and <b>Redux</b>, where you will unlock the full potential of modern 
         <b>web development</b>. This course is designed for developers who want to take their skills to the next level and 
          build complex, high-performance applications. Work on practical projects to apply your knowledge and
          Learn how to <b>deploy React applications</b> to production by using <b>CI/CD</b> Pipelines
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card3")}
          >
            What You will Gain...
          </button>

          {/* Conditionally render content based on showDetails['card1'] */}
          {showDetails["card3"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Advanced JavaScript Concepts:</strong> Deep dive into functional programming paradigms. Master asynchronous programming with promises and async/await
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>React Mastery:</strong> Build reusable components with custom hooks 
                Optimize performance with techniques like memoization and lazy loading.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Redux Proficiency :</strong> Understand the core concepts of Redux: state management, actions, and reducers
                </li>
              </ul>
              <p className="text-slate-800 p-2 leading-tight">
              <strong>Explore advanced JavaScript features like closures, currying, and higher-order functions </strong> Implement server-side rendering (SSR) and static site generation (SSG), Leverage advanced routing techniques and data fetching strategies
              Build robust and scalable Redux applications with advanced patterns like middleware and normalization, Optimize Redux performance with techniques like memoization and selective updates.
              </p>
            </>
          )}
        </div>

        <div
          className={`${
            showDetails["card4"] ? "max-h-[1100px]" : "lg:max-h-[560px] max-h-[1100px]"
          } bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
        >
          <Link href="https://www.facebook.com/profile.php?id=61567655038718">
            <Image
              src="./javascript.png"
              alt="reactJs"
              width={307}
              height={175}
              priority
              className="w-full object-cover"
            />
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Level Up Your <mark>JavaScript</mark> Skills and Master the Advanced Concepts of <mark>ES6+</mark> Features
            </h1>
          </Link>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
          Learn deep into the world of modern <b>JavaScript</b> and unlock the full potential of your <b>web development skills</b>. 
          This course is designed to equip you with the <b>advanced concepts</b> and techniques necessary to build sophisticated 
          and efficient <b>web applications</b>. Functional programming paradigms with Higher-order functions 
          and programming with <b>Promises, async/await</b>
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card4")}
          >
            What You will Gain...
          </button>

          {/* Conditionally render content based on showDetails['card1'] */}
          {showDetails["card4"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>ES6 and Beyond : </strong> Destructuring assignment and spread operator, Arrow functions and lexical this, Template literals and tagged template literals
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Expert Instruction : </strong> Learn from experienced JavaScript developers who are passionate about teaching. 
                Gain practical experience by building real-world applications.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Flexible Learning : </strong> Learn at your own pace with self-paced video lessons and interactive exercises.
                </li>
              </ul>
              <p className="text-slate-800 p-2 leading-tight">
              This course is your gateway to the exciting world of web development. You will learn the core concepts of JavaScript and how to apply them to build dynamic, interactive web applications using popular frameworks and libraries like <b>Node.js, React, Angular, Next.js, and NestJS</b>.</p>
            </>
          )}
        </div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="lg:mb-4 mt-4"
    src="./mongoDb1.png"
    alt="momngodb"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4">MongoDB</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="lg:mb-4 mt-4"
    src="./mySql.png"
    alt="mysql"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4">mySQL</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="lg:mb-4 mt-4"
    src="./devOps.png"
    alt="devops"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4">devOps Engineer</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="lg:mb-4 mt-4"
    src="./cicd.png"
    alt="cicd"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4">CI / CD Pipeline</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="lg:mb-4 mt-4"
    src="./html.png"
    alt="cicd"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4">HTML</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="lg:mb-4 mt-4"
    src="./css.png"
    alt="cicd"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4">CSS</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="lg:mb-4 mt-4"
    src="./bootstrap.png"
    alt="cicd"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4">Bootstrap</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="lg:mb-4 mt-4"
    src="./tailwind.png"
    alt="cicd"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4">Tailwind</h1> 
</div>

</div>
</>
  )
}

export default WebCourse
