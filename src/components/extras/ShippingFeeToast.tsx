"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react"; // Icon for the cross mark

type ShippingFeeToastProps = {
  heading: string;
  text: string;
};

const ShippingFeeToast: React.FC<ShippingFeeToastProps> = ({
  heading,
  text,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 3000);
    const hideTimer = setTimeout(() => setIsVisible(false), 10000); // 15 secs after appearing

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 right-4 z-20 bg-whiteTwo dark:bg-blackTwo shadow-lg rounded-2xl p-4 border border-gray-200 dark:border-stone-800"
        >
          <div className="flex justify-between items-center gap-6">
            <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-semibold text-blackTwo dark:text-whiteTwo">
              {heading}
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col justify-center gap-2 mt-2">
            <p className="text-sm md:text-md text-gray-700 dark:text-gray-400">
              {text}
            </p>
            <Link
              href="/contact-us"
              className="text-sm md:text-md px-4 py-2 bg-primary rounded-md w-fit"
            >
              <p className="text-white">Know More</p>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShippingFeeToast;
