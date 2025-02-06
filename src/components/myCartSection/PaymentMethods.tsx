import React from "react";
import Image from "next/image";

const PaymentMethods: React.FC = () => {
  return (
    <div className="mt-6">
      <h3 className={`text-lg font-semibold mb-2 dark:text-white`}>Payment Methods</h3>
      <div className="flex flex-wrap justify-center items-center gap-4 w-100 pt-2">
        <div className="flex flex-col justify-center items-center space-x-2 w-full bg-whiteTwo dark:bg-blackTwo">
          <Image
            src="/payments-img-2.png" // Replace with the actual image URL
            alt="Credit Card"
            width={500} // Replace with the actual width of your image
            height={300} // Replace with the actual height of your image
            className="w-full h-auto" // Optional: for responsive styling
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
