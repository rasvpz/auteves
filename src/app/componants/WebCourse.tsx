import {  FaAngleDown  } from "react-icons/fa"
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
            Master the Power of <mark>MySQL</mark> from the Ground Up! If you want to become a <mark>PRO</mark> in the field of <mark>DB management</mark>
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

        <div
          className={`${
            showDetails["card8"] ? "max-h-[1500px]" : "lg:max-h-[540px] max-h-[526px]"
        } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
      >
        <div className="relative pb-9/16 w-full">
            <iframe
              className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
          src="https://www.youtube.com/embed/-BlPBtsqmVQ?list=PLdXVgtxMrtEdvNV4-GHWz0JiqQLGtxFo-&autoplay=1&controls=1" 
          title="CI_Cd PipeLine"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Welcome to our <mark>CI/CD</mark> Mastery Course! tailored specifically for <mark>Node.js</mark>, <mark>Next.js</mark>, and <mark>Java</mark> applications 
            </h1>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
          In this course, we dive into the world of CI/CD (Continuous Integration and Continuous Deployment) pipelines tailored 
          specifically for Node.js, Next.js, and Java applications. You will gain hands-on experience building efficient, automated 
          pipelines from scratch, covering essential tools and processes like Git, GitHub Actions, Jenkins, Docker & Kubernetes

          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card8")}
          >
            What You will Gain...
          </button>

          {/* Conditionally render content based on showDetails['card1'] */}
          {showDetails["card8"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Strong Foundation in CI/CD : </strong> Learn how CI/CD can transform your development process, from continuous integration to seamless deployment.</li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Real-World Skills : </strong>  Gain practical skills by working with industry-standard tools and building workflows used in modern development teams.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Increased Efficiency : </strong> Master automation to minimize manual tasks, speed up releases, and reduce errors.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Full Lifecycle Knowledge : </strong>  Understand the full application lifecycle from development to production, ensuring high-quality releases every time.</li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Confidence to Implement CI/CD Pipelines: </strong> Build, test, and deploy applications across multiple environments, equipping yourself to handle real-world scenarios.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Cross-Technology Expertise: </strong> Develop pipelines for Node.js, Next.js, and Java, making you versatile and valuable across different tech stacks.
                </li>
                </ul>
              <p className="text-slate-800 p-2 leading-tight">
              Whether you are a developer or a DevOps enthusiast, this course will help you streamline development, 
              improve deployment efficiency, and ensure robust, automated workflows. Join us to enhance your skills, boost productivity, 
              and build a solid foundation in modern CI/CD practices. Dont forget to subscribe for more tech tutorials!</p>
            </>
          )}
        </div>

        <div
          className={`${
            showDetails["card9"] ? "max-h-[1500px]" : "lg:max-h-[540px] max-h-[526px]"
        } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
      >
        <div className="relative pb-9/16 w-full">
            <iframe
              className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
          src="https://www.youtube.com/embed/BtmGpemKtnw?list=PLdXVgtxMrtEcD5W9bel6WyE905gZNc8rx&autoplay=1&controls=1" 
          title="html"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Welcome to Our Complete <mark>HTML</mark> Basics to Advanced training course with <mark>Solid Foundation</mark>. 
            </h1>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
          Whether you are new to coding or looking to sharpen your <b>HTML skills</b>, this course covers everything you need to 
          <b>become proficient in HTML</b>, the foundational language of the web. Targeted at <b>aspiring web developers</b>, we guide 
          you from <b>HTML basics</b> like structure and tags to <b>advanced topics</b> including forms, multimedia, semantic elements.

          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card9")}
          >
            What You will Gain...
          </button>

          {/* Conditionally render content based on showDetails['card1'] */}
          {showDetails["card9"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Solid Foundation in Web Development </strong> Learn how CI/CD can transform your development process, from continuous integration to seamless deployment.</li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>HTML Best Practices </strong>  Gain practical skills by working with industry-standard tools and building workflows used in modern development teams.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Responsive Layouts </strong> Master automation to minimize manual tasks, speed up releases, and reduce errors.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Advanced HTML Techniques </strong>  Understand the full application lifecycle from development to production, ensuring high-quality releases every time.</li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Readiness for CSS and JavaScript </strong> Build, test, and deploy applications across multiple environments, equipping yourself to handle real-world scenarios.
                </li>
                </ul>
              <p className="text-slate-800 p-2 leading-tight">
              Whether you are aiming to build personal projects or pursue a career as a front-end developer, this course will 
              give you the knowledge and confidence to move forward. Join us, subscribe, and lets start building the web, 
              one line of HTML at a time!</p>   </>
          )}
        </div>

        <div
          className={`${
            showDetails["card10"] ? "max-h-[1500px]" : "lg:max-h-[540px] max-h-[526px]"
        } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
      >
        <div className="relative pb-9/16 w-full">
            <iframe
              className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
          src="https://www.youtube.com/embed/R5QfB0_DYHM?list=PLdXVgtxMrtEenN1F6zjV5NkyKaEO0WLfL&autoplay=1&controls=1" 
          title="CSS"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Master <mark>CSS</mark> from a Complete Guide for Aspiring Web Developers to <mark>strengthen the CSS skills</mark>. 
            </h1>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
          Welcome to our all-encompassing <b>CSS course</b>, designed to take you from <b>beginner to pro</b>! Whether 
          you are just starting out or looking to <b>strengthen your CSS skills</b>, this course is <b>tailored for aspiring web 
          developers</b> who want to create stunning, responsive, and well-structured websites with 10+ projects for better understandings
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card10")}
          >
            What You will Gain...
          </button>

          {/* Conditionally render content based on showDetails['card1'] */}
          {showDetails["card10"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Foundational Knowledge </strong> Get a solid understanding of CSS fundamentals, including selectors, properties, and syntax.</li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Responsive Design Skills </strong>  Learn to make websites look great on any device by mastering CSS Flexbox, Grid, and responsive units.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Advanced Styling Techniques </strong> Dive into animations, transitions, transformations, and pseudo-classes to create dynamic user experiences.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>CSS Best Practices </strong>Discover methods to write clean, maintainable, and scalable CSS code, ensuring your projects are easy to manage.</li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Real-World Application </strong>Work on practical projects and challenges that solidify your skills and prepare you for real development environments.
                </li>
                </ul>
              <p className="text-slate-800 p-2 leading-tight">
              This course will empower you to create visually appealing, user-friendly websites and set you up for success 
              as a front-end developer. Subscribe, join us, and lets style the web together!</p>   </>
          )}
        </div>

        <div
          className={`${
            showDetails["card11"] ? "max-h-[1500px]" : "lg:max-h-[540px] max-h-[526px]"
        } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
      >
        <div className="relative pb-9/16 w-full">
            <iframe
              className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
          src="https://www.youtube.com/embed/nXZpBpHb908?list=PLdXVgtxMrtEf89h3ejRJpNRF8U6KPEGWd&autoplay=1&controls=1" 
          title="Bootstrap"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Learn <mark>Bootstrap</mark> from <mark>Basics to Advanced</mark> The Ultimate Guide for Aspiring Web Developers 
            </h1>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
          Dive into our comprehensive <b>Bootstrap course</b>, perfect for beginners and experienced learners alike! Designed for aspiring 
          web developers, this course will <b>guide you through the essentials of Bootstrap</b>, helping you to build  the responsive, visually 
          appealing websites quickly and effectively by the help of ecperienced trainers
          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card11")}
          >
            What You will Gain...
          </button>

          {/* Conditionally render content based on showDetails['card1'] */}
          {showDetails["card11"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Foundational Bootstrap Skills </strong> Get comfortable with the Bootstrap framework, including components, utilities, and layout systems.</li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Responsive Web Design</strong>  Master the Bootstrap grid and breakpoints to create mobile-friendly websites that adapt to any screen size.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Advanced Bootstrap Customization </strong>  Learn to customize themes, work with Sass for styling, and implement JavaScript plugins for interactive elements.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Hands-On Projects </strong>  Build real-world projects to practice and solidify your Bootstrap skills, preparing you to tackle professional web development tasks.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Efficiency in Development </strong> Discover how Bootstrap can streamline your workflow, reduce repetitive coding, and help you deliver high-quality designs faster.
                </li>
                </ul>
              <p className="text-slate-800 p-2 leading-tight">
              Whether you are aiming to build personal projects or pursue a career as a front-end developer, this course will 
              give you the knowledge and confidence to move forward. Join us, subscribe, and lets start building the web, 
              one line of HTML at a time!</p>   </>
          )}
        </div>

        <div
          className={`${
            showDetails["card12"] ? "max-h-[1500px]" : "lg:max-h-[540px] max-h-[526px]"
        } rounded-lg bg-white opacity-95 text-white flex flex-col justify-top items-center border-2 border-white`}
      >
        <div className="relative pb-9/16 w-full">
            <iframe
              className="top-0 left-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
          src="https://www.youtube.com/embed/PMfgbpXAgfY?list=PLdXVgtxMrtEcbKiu2gd--f19AuQyxrmzx&autoplay=1&controls=1" 
          title="Tailwind Css"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
            <h1 className="text-slate-950 lg:text-slate-950 sm:text-slate-950 md:text-slate-950 text-xl p-3 font-bold leading-tight">
            Master <mark>Tailwind CSS</mark> from Basics to Advanced. A Complete Guide for <mark>Aspiring Web Developers</mark> 
            </h1>
          <p className="text-slate-800 pl-2 pr-2 leading-tight">
          Welcome to our <b>comprehensive Tailwind CSS course</b>, designed to take you from the basics to advanced skills. 
          Tailored for aspiring web developers, this course will help you build stylish, responsive, and fully 
          customized websites using Tailwind CSS, <b>the powerful utility-first CSS framework</b> especially for reactJs developers.


          </p>
          <button
            className="bg-slate-950 p-1 px-2 cursor-pointer mt-4 mr-4 mb-4 self-end"
            onClick={() => toggleDetails("card12")}
          >
            What You will Gain...
          </button>

          {/* Conditionally render content based on showDetails['card1'] */}
          {showDetails["card12"] && (
            <>
              <ul className="list-disc pl-10">
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Strong Foundation in Tailwind CSS</strong> Learn the essentials, from utility classes to the Tailwind configuration file.</li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Responsive and Modern Design Skills</strong> Master responsive design principles with Tailwinds mobile-first utilities, making your sites look great on any device.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Advanced Customization Techniques</strong>  Dive into advanced concepts like custom themes, using plugins, and configuring Tailwind for different project needs.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Efficiency in Development</strong> Discover how Tailwind speeds up your workflow, reduces the need for writing custom CSS, and allows for rapid prototyping.
                </li>
                <li className="text-slate-800 pl-2 pr-2 mb-2 leading-tight">
                <strong>Real-World Practice</strong>  Build hands-on projects to apply and reinforce your skills, giving you the confidence to handle professional web development tasks.
                </li>
                </ul>
              <p className="text-slate-800 p-2 leading-tight">
              Whether you are aiming to build personal projects or pursue a career as a front-end developer, this course will 
              give you the knowledge and confidence to move forward. Join us, subscribe, and lets start building the web, 
              one line of HTML at a time!</p>   </>
          )}
        </div>

</div>
</>
  )
}

export default WebCourse
