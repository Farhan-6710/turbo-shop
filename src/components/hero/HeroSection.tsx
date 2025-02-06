"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion for animation
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false); // To track if the component has mounted
  const { theme } = useTheme(); // Get the current theme

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration errors

  // Function to split the text into individual characters for animation
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.75 + index * 0.02 },
        }}
        viewport={{ once: true }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <section className="relative hero-img bg-whiteOne dark:bg-blackOne text-blackTwo dark:text-whiteOne px-6 md:px-16 py-20 pb-0 lg:py-24 2xl:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-right-bottom"
        style={{
          backgroundImage: "url('/tyre_print.svg')",
          opacity: theme === "dark" ? 1 : 0.3, // Adjust opacity based on theme
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl 2xl:max-w-[90rem] mx-auto flex flex-col lg:flex-row items-center gap-10 z-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-4 lg:gap-20 opacity-100">
          <div>
            <h1
              className="text-4xl md:text-5xl 2xl:text-6xl font-bold uppercase leading-tight"
              style={{ lineHeight: "1.25" }}
            >
              {splitText("New Turbo & Turbo Rebuild Services")}
            </h1>

            {/* Animated Paragraph */}
            <motion.p
              className="text-lg text-stone-700 dark:text-gray-300 mt-4"
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0)", opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }} // Apply blur effect on mount
            >
              We specialize in turbocharger rebuilding, replacement, upgrades,
              and new turbochargers.
            </motion.p>
          </div>

          {/* Animated Bottom Paragraphs */}
          <div className="mt-8 flex flex-wrap gap-6 text-xl font-medium">
            <motion.p
              className="w-[100%] sm:w-[26%] border-t-2 border-orange-500 pt-4"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0.5, opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.2 }}
            >
              Turbo Rebuild <br /> Services
            </motion.p>
            <motion.p
              className="w-[100%] sm:w-[26%] border-t-2 border-orange-500 pt-4"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0.5, opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.2 }}
            >
              Turbocharger <br /> Components
            </motion.p>
            <motion.p
              className="w-[100%] sm:w-[26%] border-t-2 border-orange-500 pt-4"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0.5, opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.2 }}
            >
              Turbo For <br /> Sales
            </motion.p>
          </div>
        </div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.75 }}
          className="w-full flex-1 flex justify-center opacity-100"
        >
          <Image
            src="/hero-img.png"
            alt="Turbo Image"
            width={800}
            height={500}
            className="w-full max-w-2xl"
            priority
          />
        </motion.div>
      </div>

      
    </section>
  );
};

export default HeroSection;
