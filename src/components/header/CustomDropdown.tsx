import React from "react";
import DropdownArrowSVG from "./DropdownArrowSVG";

interface CustomDropdownProps {
  setIsOpen: (isOpen: boolean) => void;
  currency: string;
  isOpen: boolean;
  handleCurrencyChange: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  setIsOpen,
  currency,
  isOpen,
  handleCurrencyChange,
}) => {
  return (
    <>
      {/* Custom Dropdown */}
      <div className="relative flex justify-center items-center border border-gray-300 dark:border-stone-700 rounded-lg w-fit">
        <div
          className="bg-transparent text-blackTwo dark:text-whiteTwo focus:outline-none focus:ring-0 cursor-pointer p-1 pl-3 pr-7 rounded-lg text-md appearance-none w-[72px]"
          onMouseDown={(e) => e.preventDefault()} // Prevent default dropdown opening on click
          onMouseUp={() => setIsOpen(!isOpen)} // Open/close on mouse release
        >
          <span>{currency}</span>
          <DropdownArrowSVG isOpen={isOpen} />
        </div>

        {/* Custom Dropdown Options */}
        {isOpen && (
          <ul className="absolute top-7 z-10 w-full mt-1 bg-white dark:bg-blackOne border border-gray-300 dark:border-stone-700 rounded-lg shadow-lg">
            <li
              className="cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-blackTwo p-2 py-1"
              onClick={() => handleCurrencyChange("USD")}
            >
              USD
            </li>
            <li className="border-t border-gray-300 dark:border-stone-800"></li>
            <li
              className="cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-blackTwo p-2 py-1"
              onClick={() => handleCurrencyChange("CAD")}
            >
              CAD
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default CustomDropdown;
