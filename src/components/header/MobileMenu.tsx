// components/MobileMenu.tsx

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface MobileMenuProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
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
    <>
      {/* Sidebar for Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-[85%] h-full bg-white dark:bg-blackTwo shadow-lg transform ${
          isSidebarOpen
            ? "translate-x-0 duration-300 sm:duration-500 transform"
            : "-translate-x-full duration-300 transform"
        } z-30`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-stone-800">
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

        {/* Sidebar Navigation Links */}
        <nav className="flex flex-col p-6 space-y-6 font-medium">
          <Link
            href="/"
            className="text-slate-900 dark:text-whiteOne hover:text-primary dark:hover:text-primaryhover transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="/universal-products"
            className="text-slate-900 dark:text-whiteOne hover:text-primary dark:hover:text-primaryhover transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            UNIVERSAL PRODUCTS
          </Link>
          <Link
            href="/product"
            className="text-slate-900 dark:text-whiteOne hover:text-primary dark:hover:text-primaryhover transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            PRODUCT
          </Link>
          <Link
            href="/about"
            className="text-slate-900 dark:text-whiteOne hover:text-primary dark:hover:text-primaryhover transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            href="/contact"
            className="text-slate-900 dark:text-whiteOne hover:text-primary dark:hover:text-primaryhover transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Sidebar Footer (Cart, Theme Toggle, Phone) */}
        <div className="p-6 flex flex-col gap-4 border-t border-gray-200 dark:border-stone-800">
          {/* First Row: Icon and My Cart */}
          <div className="flex justify-between items-center font-medium text-slate-900 dark:text-whiteOne">
            {/* Cart Button */}
            <div className="flex items-center gap-4">
              <div className="relative hover:text-primary dark:hover:text-primaryhover transition text-blackTwo dark:text-whiteTwo">
                <ShoppingCart strokeWidth={2.5} className="h-6 w-6" />
                <span className="absolute flex justify-center items-center -top-3 -right-3 bg-primary text-white text-md w-6 h-6 font-semibold px-1 rounded-full">
                  2{" "}
                </span>
              </div>
              <span className="text-lg">My Cart</span>
            </div>

            <ModeToggle />
          </div>

          {/* Second Row: ModeToggle and Phone */}
          <div className="flex items-center gap-4">
            <span className="text-slate-900 dark:text-whiteOne font-medium">
              403-993-6742
            </span>
          </div>
        </div>
      </div>

      {/* Overlay (Click to close sidebar) */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-20 transition-opacity duration-300 ${
          isSidebarOpen
            ? "opacity-100 cursor-pointer"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
    </>
  );
};

export default MobileMenu;
