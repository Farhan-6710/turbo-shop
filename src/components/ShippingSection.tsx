import {  ChevronRight } from "lucide-react";
import React from "react";

const ShippingSection = () => {
  return (
    <div className="bg-whiteOne dark:bg-blackOne text-white flex items-center p-4 gap-4">
      <div className="hidden xs:flex bg-primary text-white font-bold px-4 py-4 text-lg">
        +$200
      </div>
      <div className="">
        <p className="font-bold text-lg xl:text-2xl">
          ADDITIONAL $200 FOR SHIPPING FOR PRODUCT REPAIRS.
        </p>
        <button className="flex justify-between items-center text-sm text-white mt-1 w-full">
          <div className="flex justify-center items-center gap-2 text-2xl xs:text-lg">
            <span className="flex justify-center items-center bg-primary h-7 w-7 xs:h-5 xs:w-5 mr-2">
              {" "}
              <ChevronRight strokeWidth={2.4} />{" "}
            </span>{" "}
            MORE DETAILS
          </div>
          <div className="flex xs:hidden bg-primary text-white font-bold px-4 py-4 text-lg">
            +$200
          </div>
        </button>
      </div>
    </div>
  );
};

export default ShippingSection;