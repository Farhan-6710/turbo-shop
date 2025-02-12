"use client";

import Image from "next/image";
import Link from "next/link";
import QuickLinksSVG from "./QuickLinksSVG";
import { FaXTwitter } from "react-icons/fa6";
import { Facebook, Instagram, Youtube } from "lucide-react"; // Import Lucide icons
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Footer = () => {
  const [mounted, setMounted] = useState(false); // To track if the component has mounted

  const { theme } = useTheme(); // Get the current theme

  useEffect(() => {
    // Once mounted, set mounted state to true
    setMounted(true);
  }, []);

  // Prevent rendering of theme-dependent content on the server-side
  if (!mounted) {
    return null;
  }
  return (
    <footer className="dark:bg-blackOne bg-whiteOne dark:text-white text-blackOne border-t border-gray-200 dark:border-stone-800">
      <div className="">
        {/* Footer Grid */}
        <div className="container mx-auto py-10 md:py-16 pb-6 sm:pb-12 px-6 sm:px-2 md:px-2 lg:px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div>
              <div className="relative max-w-[200px]">
                {" "}
                {/* Responsive Logo */}
                {theme === "dark" ? (
                  <Image
                    src="/logo1-dark.png" // Dark theme logo
                    alt="Turbo Shop Logo Dark"
                    width={220}
                    height={50}
                    className="w-full max-w-2xl"
                  />
                ) : (
                  <Image
                    src="/logo1-light.png" // Light theme logo
                    alt="Turbo Shop Logo Light"
                    width={220}
                    height={50}
                    className="w-full max-w-2xl"
                  />
                )}
              </div>
              <p className="dark:text-white text-blackOne mt-4 text-sm md:text-lg font-sans font-normal">
                We focus exclusively on rebuilding, replacing, and upgrading
                turbochargers.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="dark:text-white text-blackOne dark:hover:text-orange-500 hover:text-primary transition duration-200 flex items-center gap-2"
                  >
                    <QuickLinksSVG />
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/universal-products"
                    className="dark:text-white text-blackOne dark:hover:text-orange-500 hover:text-primary transition duration-200 flex items-center gap-2"
                  >
                    <QuickLinksSVG />
                    UNIVERSAL PRODUCT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="dark:text-white text-blackOne dark:hover:text-orange-500 hover:text-primary transition duration-200 flex items-center gap-2"
                  >
                    <QuickLinksSVG />
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="dark:text-white text-blackOne dark:hover:text-orange-500 hover:text-primary transition duration-200 flex items-center gap-2"
                  >
                    <QuickLinksSVG />
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">FOLLOW US</h3>
              <p className="dark:text-white text-blackOne text-sm md:text-lg font-normal font-sans">
                Stay connected with us on social media for the latest updates
                and offers.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  href="#"
                  className="dark:bg-primary bg-primaryhover p-2 rounded-lg dark:hover:bg-primaryhover hover:bg-primary transition duration-200"
                >
                  <FaXTwitter className="dark:text-white text-whiteOne text-2xl" />
                </Link>
                <Link
                  href="https://www.facebook.com/Turboshoptf"
                  target="_blank"
                  className="dark:bg-primary bg-primaryhover p-2 rounded-lg dark:hover:bg-primaryhover hover:bg-primary transition duration-200"
                >
                  <Facebook className="dark:text-white text-whiteOne text-lg" />
                </Link>
                <Link
                  href="https://www.instagram.com/turboshoptf"
                  target="_blank"
                  className="dark:bg-primary bg-primaryhover p-2 rounded-lg dark:hover:bg-primaryhover hover:bg-primary transition duration-200"
                >
                  <Instagram className="dark:text-white text-whiteOne text-lg" />
                </Link>
                <Link
                  href="#"
                  className="dark:bg-primary bg-primaryhover p-2 rounded-lg dark:hover:bg-primaryhover hover:bg-primary transition duration-200"
                >
                  <Youtube className="dark:text-white text-whiteOne text-lg" />
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">CONTACT US</h3>
              <Link href="tel:403-993-6742">
              <p className="dark:text-white text-blackOne md:text-base">
                <span className="font-semibold">
                  CALL US : <br />{" "}
                </span>{" "}
                403-993-6742
              </p></Link>
              <Link href="mailto:turboshopcanada1@gmail.com">
              <p className="dark:text-white text-blackOne mt-2 md:text-base">
                <span className="font-semibold">EMAIL US : <br /> </span>{" "}
                turboshopcanada1@gmail.com
              </p></Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="dark:bg-blackTwo bg-whiteTwo py-6 px-14 text-center dark:text-white text-blackOne text-sm md:text-base border-t border-gray-200 dark:border-stone-800">
          <p className="font-sans font-normal">
            <span className="font-bold dark:text-white text-blackOne">
              Turboshop.ca
            </span>{" "}
            © All rights reserved Copyrights 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
