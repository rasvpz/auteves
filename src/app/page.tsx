"use client";
import React from 'react';
import Navbar from './componants/NavBar';
import Banner from './componants/Banner';
import MiddleArea from './componants/MiddleArea';

const Page = () => {


  return (
    <div className="h-[100%] bg-gradient-to-br from-black via-pink-500 to-blue-500">
    <Navbar />
    <Banner />
    <MiddleArea />
    </div>
  );
};

export default Page;
