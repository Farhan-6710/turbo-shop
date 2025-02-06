import React from "react";

interface DropdownArrowSVGProps {
    isOpen: boolean;
}

const DropdownArrowSVG:React.FC<DropdownArrowSVGProps> = ({isOpen}) => {
  return (
    <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none">
      <svg
        className={`w-5 h-5 mr-2 text-blackOne dark:text-whiteOne transform transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default DropdownArrowSVG;
