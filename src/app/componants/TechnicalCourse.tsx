import React from 'react'
import Image from 'next/image'
import { FaAngleDown } from 'react-icons/fa'

const TechnicalCourse = () => {
  return (
    <>
      <div className='flex lg:px-8 pb-4 mt-4'>
  <h1
    className="flex items-center p-4 text-white bg-slate-950 opacity-85 font-semibold cursor-pointer whitespace-nowrap"
  >
    Our Technical Courses  
    <FaAngleDown className="hover:text-gray-400 ml-2" size={30} /> 
  </h1>

</div>
<div className="p-4 lg:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="rounded-2xl lg:mb-4 mt-4"
    src="./hardware.png"
    alt="hardware"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4 text-center">Desktop / Laptop Technician</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="rounded-2xl lg:mb-4 mt-4"
    src="./mobile.png"
    alt="mobile"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4 text-center">Mobile / Tab Technician</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="rounded-2xl lg:mb-4 mt-4"
    src="./networking.png"
    alt="networking"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4 text-center">Computer Networking</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="rounded-2xl lg:mb-4 mt-4"
    src="./cctv.png"
    alt="cctv"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4 text-center"> &nbsp; &nbsp; CCTV &nbsp; &nbsp; Technician</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="rounded-2xl lg:mb-4 mt-4"
    src="./printer.png"
    alt="printer"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4 text-center"> &nbsp; &nbsp; Printer &nbsp; &nbsp; Technician</h1> 
</div>

<div className="bg-white opacity-95 p-4 text-white text flex flex-col justify-center items-center">
  <Image
    className="rounded-2xl lg:mb-4 mt-4"
    src="./automation.png"
    alt="automation"
    width={143}
    height={189}
    priority
  />
  <h1 className="text-slate-950 mt-2 text-3xl font-bold mb-4 text-center">  Automation Technician</h1> 
</div>

</div>
    </>
  )
}

export default TechnicalCourse
