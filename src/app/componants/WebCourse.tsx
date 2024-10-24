import { useRouter } from 'next/router'
import {  FaAngleDown  } from "react-icons/fa"
import Image from 'next/image'

import React from 'react'

const WebCourse = () => {
    const router = useRouter(); // Initialize the router

    const handleLoginClick = () => {
      // Navigate programmatically to the login page
      router.push('/about');
    };
  return (
    <>
<div className='flex lg:px-8 pb-4 mt-4'>
  <h1
    className="flex items-center p-4 text-white bg-slate-950 opacity-85 font-semibold cursor-pointer whitespace-nowrap"
    onClick={handleLoginClick} // Call handleLoginClick on click
  >
    Web & Mobile Development Courses  
    <FaAngleDown className="hover:text-gray-400 ml-2" size={30} /> 
  </h1>

</div>
<div className="p-4 lg:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="rounded-2xl lg:mb-4 mt-4"
    src="./java.png"
    alt="accounting"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4">Java Springboot</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="rounded-2xl lg:mb-4 mt-4"
    src="./nodeJs.png"
    alt="nodejs"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4">NodeJs</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="rounded-2xl lg:mb-4 mt-4"
    src="./reactJs.png"
    alt="reactjs"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4">ReactJs</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="lg:mb-4 mt-4"
    src="./javaScript.png"
    alt="javascript"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4">JavaScript</h1> 
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
