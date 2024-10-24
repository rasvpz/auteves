"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const Page = () => {
  const router = useRouter(); // Initialize the router

  const handleLoginClick = () => {
    // Navigate programmatically to the login page
    router.push('/');
  };

  return (
    <div>
      <h1
        className="text-red-600 font-semibold cursor-pointer"
        onClick={handleLoginClick} // Call handleLoginClick on click
      >
        Yes im About
      </h1>
    </div>
  );
};

export default Page;
