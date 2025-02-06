"use client";

import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface BreadcrumbSectionProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  title,
  breadcrumbs,
}) => {
  const [mounted, setMounted] = useState(false); // To track if the component has mounted
  const { theme } = useTheme(); // Get the current theme

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration errors

  return (
    <section className="relative bg-whiteOne dark:bg-blackOne text-blackTwo dark:text-white py-12 px-6 md:px-12 border-b border-gray-200 dark:border-stone-800">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/tyre_print.svg')",
          backgroundPosition: "right -300px bottom -50px",
          opacity: theme === "dark" ? 1 : 0.3, // Adjust opacity based on theme
        }}
      ></div>

      {/* Breadcrumbs */}
      <div className="relative z-10 flex items-center space-x-2 text-sm uppercase">
        {breadcrumbs.map((crumb, index) => (
          <span
            key={index}
            className="flex justify-center items-center text-gray-400"
          >
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="text-blackOne dark:text-whiteOne"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="flex items-center justify-center text-primary">{crumb.label}</span>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className="ml-2 flex items-center">
                <ChevronRight className="w-4 h-4 text-primary inline-block" />
              </span>
            )}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="relative z-10 text-2xl sm:text-5xl md:text-7xl font-bold mt-4">
        {title}
      </h1>
    </section>
  );
};

export default BreadcrumbSection;
