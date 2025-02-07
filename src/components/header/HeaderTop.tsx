"use client";

// src/components/HeaderTop.tsx
import React, { useState, useEffect } from "react";
import { IoChatbubbleSharp } from "react-icons/io5";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const HeaderTop: React.FC = () => {
  const [mounted, setMounted] = useState(false); // To track if the component has mounted

  // Run this effect once on mount to change the mounted state to true
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render the component when it's mounted
  if (!mounted) {
    return null; // Optionally, you can return a loading spinner or a placeholder here
  }

  return (
    <header className="bg-primary py-3 font-chakra">
      <div className="container mx-auto flex items-center justify-center gap-6 sm:gap-12 px-0">
        {/* Get a Quote Section */}
        <div className="flex items-center gap-2">
          <IoChatbubbleSharp className="text-white text-xl" />
          <h1 className="text-white text-md font-bold">GET A QUOTE</h1>
        </div>
        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <FaXTwitter className="dark:text-white text-whiteOne text-lg cursor-pointer" />
          <FaFacebookF className="dark:text-white text-whiteOne text-lg cursor-pointer" />
          <FaInstagram className="dark:text-white text-whiteOne text-lg cursor-pointer" />
          <FaYoutube className="dark:text-white text-whiteOne text-lg cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
