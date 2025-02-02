"use client";

import { useLayoutEffect } from "react";

const usePreLoaderAnimation = () => {
  useLayoutEffect(() => {
    const body = document.querySelector("body");
    const scrollPosition = window.scrollY;

    // Add transition animation class
    body?.classList.add("page-transition", "bg-whiteOne", "dark:bg-blackOne");

    // Remove the transition class after the animation completes (500ms)
    const timer = setTimeout(() => {
      body?.classList.remove("page-transition");

      // Restore the scroll position after the transition
      window.scrollTo(0, scrollPosition);
    }, 500); // Match this delay with the transition duration

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures it runs once when mounted
};

export default usePreLoaderAnimation;
