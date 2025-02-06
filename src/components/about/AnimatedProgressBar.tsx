"use client";

import { useState, useEffect } from "react";

interface AnimatedProgressBarProps {
    label: string;
    percentage: number;
}

const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({ label, percentage }) => {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    setTimeout(() => {
      setWidth(`${percentage}%`);
    }, 1000); // Delay to trigger animation after mount
  }, [percentage]);

  return (
    <section className="mb-6">
      <h4 className="text-lg text-blackOne dark:text-gray-50 mb-2">{label}</h4>
      <div className="border-2 border-stone-700">
      <div className="flex items-center relative w-full bg-stone-700 h-5">
        <div
          className="bg-primary h-3 transition-all duration-1000 ease-in-out"
          style={{ width, marginLeft:"3px" }}
        ></div>
        <span className="absolute z-10 top-[-35px] right-0 text-xl font text-blackOne dark:text-gray-50 pr-2">
          {percentage}%
        </span>
      </div>
      </div>
    </section>
  );
};

export default AnimatedProgressBar;
