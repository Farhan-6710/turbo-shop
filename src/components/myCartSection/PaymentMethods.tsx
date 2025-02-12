import React from "react";
import Image from "next/image";
import Link from "next/link";

const PaymentMethods: React.FC = () => {
  return (
    <div className="mt-6">
      <h3 className={`text-lg font-semibold mb-2 dark:text-white`}>
        Payment Methods
      </h3>
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
      <Link className="" href="tel:4039936742"><p className="btn-primary px-10 py-4 bg-primary mt-4 text-center font-semibold text-white">CALL TO BUY NOW</p></Link>
    </div>
  );
};

export default PaymentMethods;
