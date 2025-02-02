"use client"

import { useEffect } from "react";

const usePreLoaderAnimation = () => {
  useEffect(() => {
    // Save the current scroll position before starting the animation
    const body = document.querySelector("body");
    const scrollPosition = window.scrollY;

    // Add transition animation class
    body?.classList.add("page-transition", "bg-whiteOne", "dark:bg-blackOne");

    // Remove the transition class after the animation completes (500ms)
    const timer = setTimeout(() => {
      // Remove transition class
      body?.classList.remove("page-transition");

      // Restore the scroll position after the transition
      window.scrollTo(0, scrollPosition);
    }, 500); // Match this delay with the transition duration

    return () => clearTimeout(timer);
  }, []);
};

export default usePreLoaderAnimation;
