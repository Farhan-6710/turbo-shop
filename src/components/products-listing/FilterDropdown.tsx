import React, { useState } from "react";
import DropdownArrowSVG from "@/components/header/DropdownArrowSVG"; // Assuming this is imported from your original code

interface FilterDropdownProps {
  label: string; // Label for the dropdown (e.g., 'Category' or 'Year')
  options: string[]; // Array of options (e.g., categories or years)
  selectedOption: string; // The currently selected option
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>; // Function to update selected option
  setFilter: React.Dispatch<React.SetStateAction<string | null>>; // Function to set the filter in parent
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  options,
  selectedOption,
  setSelectedOption,
  setFilter,
}) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown open/close

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setFilter(option === "all" ? null : option); // Reset filter to null if "all" is selected
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="bg-whiteOne dark:bg-blackOne relative rounded-md flex justify-center items-center border border-gray-300 dark:border-stone-700 w-fit">
      <div
        className="bg-transparent text-blackTwo dark:text-whiteTwo focus:outline-none focus:ring-0 cursor-pointer p-1 pl-3 pr-7 rounded-lg text-md lg:text-lg xl:text-xl appearance-none w-[230px]"
        onMouseDown={(e) => e.preventDefault()} // Prevent default dropdown opening on click
        onMouseUp={() => setIsOpen(!isOpen)} // Open/close on mouse release
      >
        <span>
          {selectedOption === "all" ? `Select a ${label}` : selectedOption}
        </span>
        <DropdownArrowSVG isOpen={isOpen} />
      </div>

      {/* Custom Dropdown Options */}
      {isOpen && (
        <ul className="absolute rounded-md left-0 top-7 z-20 w-full mt-1 md:mt-2 lg:mt-3 bg-whiteOne dark:bg-blackOne border border-gray-300 dark:border-stone-700 shadow-lg">
          <li
            className="cursor-pointer rounded-lg text-md hover:bg-gray-100 dark:hover:bg-blackTwo p-2 py-1"
            onClick={() => handleOptionChange("all")}
          >
            Reset Filters
          </li>
          <li className="border-t border-gray-300 dark:border-stone-800"></li>
          {options.map(
            (option) =>
              option && (
                <li
                  key={option}
                  className="cursor-pointer text-md hover:bg-gray-100 dark:hover:bg-blackTwo p-2 py-1"
                  onClick={() => handleOptionChange(option)}
                >
                  {option}
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
