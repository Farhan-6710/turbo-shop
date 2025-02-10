import { Product } from "@/lib/productTypes";
import React, { useState, useMemo } from "react";
import DropdownArrowSVG from "@/components/header/DropdownArrowSVG"; // Assuming this is imported from your original code

interface FilterSectionProps {
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
  productsData: Product[];
}

const FilterSection: React.FC<FilterSectionProps> = ({
  setFilter,
  productsData,
}) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown open/close
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default selected category is "all"

  // Extract unique categories from productsData
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(productsData.map((product) => product.category))
    );
    return uniqueCategories;
  }, [productsData]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setFilter(category === "all" ? null : category); // Reset filter to null if "all" is selected
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="container mx-auto py-4 sm:py-8 px-4">
      {/* Custom Category Filter Dropdown */}
      <div className="relative flex justify-center items-center border border-gray-300 dark:border-stone-700 w-fit">
        <div
          className="bg-transparent text-blackTwo dark:text-whiteTwo focus:outline-none focus:ring-0 cursor-pointer p-1 pl-3 pr-7 rounded-lg text-md lg:text-lg xl:text-xl appearance-none w-[230px]"
          onMouseDown={(e) => e.preventDefault()} // Prevent default dropdown opening on click
          onMouseUp={() => setIsOpen(!isOpen)} // Open/close on mouse release
        >
          <span>
            {selectedCategory === "all"
              ? "Select a Category"
              : selectedCategory}
          </span>
          <DropdownArrowSVG isOpen={isOpen} />
        </div>

        {/* Custom Dropdown Options */}
        {isOpen && (
          <ul className="absolute top-7 z-20 w-full mt-2 bg-white dark:bg-blackOne border border-gray-300 dark:border-stone-700 shadow-lg">
            <li
              className="cursor-pointer rounded-lg text-md lg:text-md hover:bg-gray-100 dark:hover:bg-blackTwo p-2 py-1"
              onClick={() => handleCategoryChange("all")}
            >
              Reset Filters
            </li>
            <li className="border-t border-gray-300 dark:border-stone-800"></li>
            {categories.map(
              (category) =>
                category && (
                  <li
                    key={category}
                    className="cursor-pointer text-md lg:text-md rounded-lg hover:bg-gray-100 dark:hover:bg-blackTwo p-2 py-1"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </li>
                )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
