"use client";

import React, { useState, useEffect } from "react";
import FormComponent from "./FormComponent";

const ContactUsSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null; // Render nothing until the component is loaded
  }

  return (
    <section className="bg-whiteTwo dark:bg-blackTwo text-blackTwo dark:text-whiteTwo py-10 sm:py-16 border-t border-gray-200 dark:border-stone-800">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4">
        {/* Left Section */}
        <div className="w-full lg:w-4/12 flex flex-col bg-whiteOne dark:bg-blackOne p-12 h-fit mb-4 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            WE MAKE TURBO REPAIR MORE CONVENIENT
          </h2>
          <p className="mb-6 text-lg">
            Turbo Shop stands out for its specialized focus on rebuilding,
            replacing, and upgrading turbochargers.
          </p>
          <button className="btn-primary bg-primary text-whiteOne py-4 px-4 hover:bg-opacity-90 text-xl font-semibold">
            GET SERVICE
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-8/12 py-0 rounded-lg">
          <h2 className="text-4xl font-bold mb-4 p-6 py-0">
            CONTACT US FOR TURBO SOLUTIONS
          </h2>
          <p className="mb-6 text-lg p-6 py-0">
            Need assistance with our products, placing an order, or
            understanding specifications? Fill out the form below, and our team
            will respond promptly.
          </p>
          <div className="px-2">
            <FormComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
