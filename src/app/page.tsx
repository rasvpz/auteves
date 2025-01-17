"use client";
import React from 'react';
import Navbar from './componants/NavBar';
import Banner from './componants/Banner';
import MiddleArea from './componants/MiddleArea';
import Footer from './componants/Footer';

const Page = () => {


  return (
    <div className="h-[100%] bg-gradient-to-br from-black via-pink-500 to-blue-500">
    <Navbar />
    <Banner />
    <MiddleArea />
    <Footer />
    </div>
  );
};

export default Page;
