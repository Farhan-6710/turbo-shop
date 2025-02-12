"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { TransitionLink } from "@/lib/TransitionLink";
import { usePathname } from "next/navigation"; // Import usePathname

export function SelectVehicleMake() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);  // Track mount state
  const pathname = usePathname(); // Get the current pathname from the hook

  // List of vehicle makes
  const vehicleMakes = [
    { name: "AUDI", path: "/audi-products" },
    { name: "BMW", path: "/bmw-products" },
    { name: "CHEVROLET", path: "/chevrolet-products" },
    { name: "CADILLAC", path: "/cadillac-products" },
    { name: "GMC", path: "/gmc-products" },
    { name: "FORD", path: "/ford-products" },
    { name: "FIAT", path: "/fiat-products" },
    { name: "HONDA", path: "/honda-products" },
    { name: "JAGUAR", path: "/jaguar-products" },
    { name: "KIA", path: "/kia-products" },
    { name: "LAND ROVER", path: "/land-rover-products" },
    { name: "LINCOLN", path: "/lincoln-products" },
    { name: "MERCEDES", path: "/mercedes-products" },
    { name: "MINI", path: "/mini-products" },
    { name: "SAAB", path: "/saab-products" },
    { name: "SMART", path: "/smart-products" },
    { name: "SUBARU", path: "/subaru-products" },
    { name: "VOLKSWAGEN", path: "/volkswagen-products" },
    { name: "VOLVO", path: "/volvo-products" },
  ];

  // Use effect to ensure the component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Dynamically set the top position based on the current path
  const buttonTopPosition = isMounted ? (pathname === "/" ? "top-[155px]" : "top-[265px]") : "top-[155px]";  // Default to a valid position before mount

  if (!isMounted) {
    return null; // Render nothing until the component is loaded
  }

  return (
    <>
      {/* Conditionally render the button to avoid scroll issues */}
      {!isOpen && (
        <button
          className={`fixed right-0 ${buttonTopPosition} md:top-[200px] z-20 btn_hotline`}
          onClick={() => setIsOpen(true)}
        >
          <div className="px-5 py-3 bg-primary text-whiteOne uppercase font-semibold">
            Select Vehicle Make
          </div>
        </button>
      )}

      {/* AnimatePresence ensures proper exit animations */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed z-20 inset-0 bg-black/80 cursor-pointer dark:bg-black/85"
              onClick={() => setIsOpen(false)} // Close on overlay click
            ></motion.div>

            {/* Modal */}
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed z-30 inset-0 flex items-center justify-center mx-4"
            >
              <div className="bg-white dark:bg-blackTwo border dark:border-white/20 rounded-lg p-6 max-w-xl w-full shadow-lg relative">
                <h2 className="pl-4 text-xl font-bold mb-4 dark:text-white">
                  Select Vehicle Make
                </h2>
                {/* Two-column grid container */}
                <div className="grid grid-cols-2 overflow-y-auto">
                  {vehicleMakes.map((vehicle, index) => (
                    <TransitionLink href={vehicle.path} key={index}>
                      <div
                        className="p-2 pl-4 hover:bg-gray-100 dark:hover:bg-blackOne cursor-pointer text-blackTwo dark:text-gray-200"
                        onClick={() => {
                          setIsOpen(false); // Close modal after selection
                        }}
                      >
                        {vehicle.name}
                      </div>
                    </TransitionLink>
                  ))}
                </div>
                <div className="absolute top-4 right-4">
                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full bg-gray-200 dark:bg-blackOne"
                  >
                    <X className="w-5 h-5 text-black dark:text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
