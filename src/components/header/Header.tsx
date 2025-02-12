"use client"; // Ensure this runs in a client component

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react"; // Removed X, as it's now in MobileMenu
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu component
import { useTheme } from "next-themes";
import { TransitionLink } from "@/lib/TransitionLink";
import Link from "next/link";
import useCurrencyStore from "@/store/useCurrencyStore"; // Assuming Zustand store is already set up
import CustomDropdown from "./CustomDropdown";
import CartButton from "./CartButton";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // To track if the component has mounted
  const { theme } = useTheme(); // Get the current theme

  const { currency, setCurrency } = useCurrencyStore(); // Zustand currency state

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

  // Custom Dropdown for Currency Selection
  const handleCurrencyChange = (value: string) => {
    setCurrency(value); // Update global currency state via Zustand
    setIsOpen(false); // Close dropdown after selection
  };

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
                  src="/logo1-dark.png"
                  alt="Turbo Shop Logo Dark"
                  width={240}
                  height={50}
                  className="w-full max-w-2xl"
                />
              ) : (
                <Image
                  src="/logo1-light.png"
                  alt="Turbo Shop Logo Light"
                  width={240}
                  height={50}
                  className="w-full max-w-2xl"
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
            <TransitionLink href="/contact-us">CONTACT US</TransitionLink>
          </nav>

          {/* Right Side (Cart, Currency, Theme, Phone) - Hidden on small screens */}
          <div className="hidden xl:flex items-center space-x-4">
            <TransitionLink href="/my-cart">
              <CartButton />
            </TransitionLink>
            <CustomDropdown
              handleCurrencyChange={handleCurrencyChange}
              currency={currency}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
            <ModeToggle />
            <Link href="tel:403-993-6742">
              <span className="pl-4 text-gray-900 dark:text-whiteOne font-medium">
                403-993-6742
              </span>
            </Link>
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
        handleCurrencyChange={handleCurrencyChange}
        currency={currency}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default Header;
