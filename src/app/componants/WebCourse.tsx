import {  FaAngleDown  } from "react-icons/fa"
import Image from 'next/image'
import React, { useState } from 'react'

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
            showDetails["card1"] ? "max-h-[1100px]" : "lg:max-h-[540px] max-h-[526px]"
          } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
        >
        <div className="relative pb-9/16 w-full">
        <iframe src="https://www.youtube.com/embed/Vj4UyTFzXUc?list=PLdXVgtxMrtEcEPmvulsmwIPjQRkgPwtSD" 
        className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg "
        title="Java Introduction Class 1" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>

        </iframe>

      </div>

            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Are you looking to master <mark> Java programming</mark> and become a true professional with Spring Boot.
            </h1>

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
            showDetails["card2"] ? "max-h-[1100px]" : "lg:max-h-[540px] max-h-[526px]"
        } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
      >
        <div className="relative pb-9/16 w-full">
            <iframe
              className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
          src="https://www.youtube.com/embed/fYmS5qW4fUk?list=PLdXVgtxMrtEcJou7rj_FjCGx3Wys6y7Go&autoplay=1&controls=1" 
          title="GST Training"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Unlock the power of <mark>Node.js</mark> with our project-oriented course by Express, NestJs and ElectronJs.
            </h1>

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
            showDetails["card2"] ? "max-h-[1100px]" : "lg:max-h-[540px] max-h-[526px]"
        } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
      >
        <div className="relative pb-9/16 w-full">
            <iframe
              className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
          src="https://www.youtube.com/embed/ZsE9moGVKms?list=PLdXVgtxMrtEdDnuFlSjLa4hSrDLWZND4c&autoplay=1&controls=1" 
          title="ReactJs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Master the Advanced <mark>React</mark> and <mark>Redux ToolKit</mark> to Elevate Your Web Development Skills with NEXTJS
            </h1>
        
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
          Dive deep into the cutting-edge world of <b>React</b> and <b>Redux</b>, where you will unlock the full potential of modern 
         <b>web development</b>. This course is designed for developers who want to take their skills to the next level and 
          build complex, high-performance applications. Work on practical projects to apply your knowledge and
          Learn how to <b>deploy React App </b> to production by using <b>CI/CD</b> Pipelines
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
                <strong>Advanced JavaScript Concepts : </strong> Deep dive into functional programming paradigms. Master asynchronous programming with promises and async/await
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>React Mastery : </strong> Build reusable components with custom hooks 
                Optimize performance with techniques like memoization and lazy loading.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Redux Proficiency : </strong> Understand the core concepts of Redux: state management, actions, and reducers
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
            showDetails["card4"] ? "max-h-[1100px]" : "lg:max-h-[540px] max-h-[526px]"
        } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
      >
        <div className="relative pb-9/16 w-full">
            <iframe
              className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
          src="https://www.youtube.com/embed/aqxueHlZXkQ?list=PLdXVgtxMrtEfXusLd5OW_cE9Rm_vLEIhr&autoplay=1&controls=1" 
          title="JavaScript" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Level Up Your <mark>JavaScript</mark> Skills and Master the Advanced Concepts of <mark>ES6+</mark> Features With Live Projects
            </h1>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
          Learn deep into the world of modern <b>JavaScript</b> and unlock the full potential of your <b>web development skills</b>. 
          This course is designed to equip you with the <b>advanced concepts</b> and techniques necessary to build sophisticated 
          and efficient <b>web applications</b>. Functional programming paradigms with Higher-order functions 
          and programming with <b>Promises, async/await and ES^ Features</b>
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

        <div
          className={`${
            showDetails["card5"] ? "max-h-[1100px]" : "lg:max-h-[540px] max-h-[526px]"
        } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
      >
        <div className="relative pb-9/16 w-full">
            <iframe
              className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
          src="https://www.youtube.com/embed/UIspAD9xUlY?list=PLdXVgtxMrtEcQgxLOax0XdnLvHkQSZW3p&autoplay=1&controls=1" 
          title="MongoDb"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Are you ready to unlock the power of <mark>MongoDb</mark> Whether you are a complete <mark>beginner</mark> or a <mark>developer</mark></h1>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
           looking to level up your database skills, this MongoDB series <b>is for you!</b> Join us as we guide you through every essential
           <b>MongoDB concept</b>, packed with real-world examples and <b>practical applications</b> . In this series, you will go from zero to hero, 
           understanding MongoDBs unique document-oriented structure.
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card5")}
          >
            What You will Gain...
          </button>

          {/* Conditionally render content based on showDetails['card1'] */}
          {showDetails["card5"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>MongoDB Basics : </strong> Dive into databases, collections, and the flexible document model that MongoDB offers.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>CRUD Operations : </strong> Master the building blocks of MongoDB—Create, Read, Update, and Delete
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Schema Design & Data Modeling </strong> Discover best practices for designing schemas that scale efficiently and perform well.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Aggregation Framework : </strong> Learn to query and transform data effectively using MongoDB’s powerful aggregation features.</li>
              </ul>
              <p className="text-slate-800 p-2 leading-tight">
              This course is your gateway to the exciting world of mongoDb. You will learn the core and advanced concepts of mongoDb and how apply to <b>interactive web applications</b>  </p>
            </>
          )}
        </div>


        <div
          className={`${
            showDetails["card6"] ? "max-h-[1100px]" : "lg:max-h-[540px] max-h-[526px]"
        } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
      >
        <div className="relative pb-9/16 w-full">
            <iframe
              className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
          src="https://www.youtube.com/embed/P6UebcYff30?list=PLdXVgtxMrtEd6HOjJLvbLtTQfmH57_lWt&autoplay=1&controls=1" 
          title="MySQL"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Master the Power of <mark>MySQL</mark> from the Ground Up! If you want to become a <mark>PRO</mark> in the field of <mark>database management</mark>
            </h1>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
          This is the course for you  to build a <b>strong foundation in databases?</b> This MySQL course is designed to take you 
          from the <b>basics to advanced database management</b>. Whether you are new to SQL or looking to deepen your understanding, 
          this <b>course has everything</b> you need to work confidently with relational databases using MySQL.
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card6")}
          >
            What You will Gain...
          </button>

          {/* Conditionally render content based on showDetails['card1'] */}
          {showDetails["card6"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Understanding Databases and Tables</strong> Dive into database concepts and learn to design tables for real-world scenarios.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>SQL Fundamentals : </strong>  Master core SQL commands like SELECT, INSERT, UPDATE, DELETE, and more.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Joins and Relationships : </strong> Learn to work with joins and create relationships across tables for powerful data analysis.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Advanced SQL Techniques : </strong> Explore indexing, subqueries, views, and transactions to optimize and secure your data handling.</li>
              </ul>
              <p className="text-slate-800 p-2 leading-tight">
              This course is your gateway to the exciting world of mongoDb. You will learn the core and advanced concepts of mongoDb and how apply to <b>interactive web applications</b>  </p>
            </>
          )}
        </div>

        <div
          className={`${
            showDetails["card7"] ? "max-h-[1500px]" : "lg:max-h-[540px] max-h-[526px]"
        } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
      >
        <div className="relative pb-9/16 w-full">
            <iframe
              className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
          src="https://www.youtube.com/embed/P6UebcYff30?list=PLdXVgtxMrtEd6HOjJLvbLtTQfmH57_lWt&autoplay=1&controls=1" 
          title="MySQL"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            <mark>DevOps</mark> journey with a beginner-friendly course! like 
            <mark>AWS</mark>, <mark>Linux</mark>, <mark>Jenkins</mark>, <mark>Ansible</mark>, <mark>Docker</mark>, <mark>Kubernetes</mark>. 
            </h1>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
          This course is designed to make <b>DevOps accessible</b>, even if you are new to the field. We cover the <b>tools and techniques </b>
          you will need to <b>launch your career</b>, with a mix of hands-on projects, <b>real-world scenarios</b>, and step-by-step guides. 
          By the end, you will be equipped with the knowledge and confidence to start working in DevOps.
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card7")}
          >
            What You will Gain...
          </button>

          {/* Conditionally render content based on showDetails['card1'] */}
          {showDetails["card7"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>AWS Fundamentals : </strong> Get hands-on with Amazon Web Services, one of the most popular cloud platforms for DevOps.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Linux Essentials : </strong>  Learn the basics of Linux, the backbone of most DevOps environments.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Shell Scripting  : </strong> Automate routine tasks with scripts and build your efficiency.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Configuration Management with Ansible </strong>  Automate complex tasks across multiple servers easily with Ansible.</li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Jenkins for CI/CD : </strong> Master Continuous Integration and Continuous Deployment pipelines with Jenkins.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>GitOps Basics : </strong> Manage your infrastructure and application updates in version-controlled repositories.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Containerization with Docker : </strong> Learn how to build, deploy, and manage containerized applications.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Kubernetes for Orchestration : </strong> Deploy and manage containerized applications at scale using Kubernetes.</li>
              </ul>
              <p className="text-slate-800 p-2 leading-tight">
              This course is designed to make DevOps accessible, even if you are new to the field. We cover the tools and techniques 
              you will need to launch your career, with a mix of hands-on projects, real-world scenarios, and step-by-step guides. By the end, 
              you will be equipped with the knowledge and confidence to start working in DevOps or enhance your current skill set. </p>
            </>
          )}
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
