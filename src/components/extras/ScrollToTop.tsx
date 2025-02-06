"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-4 z-10 md:bottom-8 md:right-8 p-2 md:p-3 rounded-full bg-primary
        text-white shadow-lg transition-opacity duration-300 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      aria-label="Scroll to Top"
    >
      <ArrowUp
        strokeWidth={2.6}
        className="sm:text-2xl md:text-3xl lg:text-4xl"
      />
    </button>
  );
};

export default ScrollToTop;
