"use client"; // Ensure this runs in a client component

import React, { useState, useEffect } from "react";
import { ShoppingCart, Menu } from "lucide-react"; // Removed X, as it's now in MobileMenu
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu component
import { useTheme } from "next-themes";
import { TransitionLink } from "@/lib/TransitionLink";
import Link from "next/link";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // To track if the component has mounted

  const { theme } = useTheme(); // Get the current theme

  useEffect(() => {
    // Once mounted, set mounted state to true
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent rendering of theme-dependent content on the server-side
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Header */}
      <header
        className={`sticky top-0 z-20 bg-whiteTwo/40 border-b border-gray-200 dark:border-stone-800 backdrop-blur-xl text-black dark:text-white transition-all duration-300 ${
          isScrolled
            ? "py-4 lg:py-3 dark:bg-blackTwo/60"
            : "py-4 lg:py-6 dark:bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/">
            <div className="text-xl font-bold">
              {/* Conditionally render based on the current theme */}
              {theme === "dark" ? (
                <Image
                  src="/logo1-dark.png" // Dark theme logo
                  alt="Turbo Shop Logo Dark"
                  width={240}
                  height={50}
                />
              ) : (
                <Image
                  src="/logo1-light.png" // Light theme logo
                  alt="Turbo Shop Logo Light"
                  width={240}
                  height={50}
                />
              )}
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on small screens */}
          <nav className="hidden xl:flex space-x-8 font-medium xl:text-lg 2xl:text-xl">
            <TransitionLink href="/">HOME</TransitionLink>
            <TransitionLink href="/universal-products">
              UNIVERSAL PRODUCTS
            </TransitionLink>
            <TransitionLink href="/about">ABOUT US</TransitionLink>
            <TransitionLink href="/contact">CONTACT US</TransitionLink>
          </nav>

          {/* Right Side (Cart, Currency, Theme, Phone) - Hidden on small screens */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="relative hover:text-primary dark:hover:text-primaryhover transition text-blackTwo dark:text-whiteTwo cursor-pointer">
              <ShoppingCart strokeWidth={2.5} className="h-6 w-6" />
              <span className="absolute flex justify-center items-center -top-3 -right-3 bg-primary text-white text-md w-6 h-6 font-semibold px-1 rounded-full">
                2{" "}
              </span>
            </div>

            <select className="bg-transparent border-none text-blackTwo dark:text-whiteTwo focus:outline-none cursor-pointer">
              <option className="dark:bg-blackOne" value="USD">
                USD
              </option>
              <option className="dark:bg-blackOne" value="CAD">
                CAD
              </option>
            </select>

            <ModeToggle />

            <span className="pl-4 text-gray-900 dark:text-whiteOne font-medium">
              403-993-6742
            </span>
          </div>

          {/* Mobile Menu Button (Visible on <xl screens) */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="xl:hidden text-black dark:text-white hover:text-primary dark:hover:text-primaryhover transition"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </header>

      {/* MobileMenu Component */}
      <MobileMenu
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default Header;
