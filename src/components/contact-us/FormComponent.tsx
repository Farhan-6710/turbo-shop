import React from "react";

const FormComponent = () => {
  return (
    <>
      <form className="flex flex-col gap-4 px-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col sm:w-1/2">
            <label htmlFor="fullName" className="mb-1 text-xl font-semibold">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="border-b text-lg border-gray-300 dark:border-stone-700/50 bg-transparent p-2 pl-0 text-blackOne dark:text-whiteTwo no-focus-ring no-focus-ring"
            />
          </div>

          <div className="flex flex-col sm:w-1/2">
            <label htmlFor="email" className="mb-1 text-xl font-semibold">
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="border-b text-lg border-gray-300 dark:border-stone-700/50 bg-transparent p-2 pl-0 text-blackOne dark:text-whiteTwo no-focus-ring"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col sm:w-1/2">
            <label htmlFor="phone" className="mb-1 text-xl font-semibold">
              Phone Number <span className="text-primary">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="border-b text-lg border-gray-300 dark:border-stone-700/50 bg-transparent p-2 pl-0 text-blackOne dark:text-whiteTwo no-focus-ring"
            />
          </div>

          <div className="flex flex-col sm:w-1/2">
            <label htmlFor="product" className="mb-1 text-xl font-semibold">
              Product of Interest <span className="text-primary">*</span>
            </label>
            <select
              id="product"
              className="border-b text-lg border-gray-300 dark:border-stone-700/50 bg-transparent p-2 pl-0 text-blackOne dark:text-whiteTwo no-focus-ring"
            >
              <option className="dark:bg-blackOne">Select a product</option>
              <option className="dark:bg-blackOne">Turbochargers</option>
              <option className="dark:bg-blackOne">Turbo Parts</option>
              <option className="dark:bg-blackOne">
                Custom Turbo Solution
              </option>
              <option className="dark:bg-blackOne">
                Turbo Repair with Shipping
              </option>
              <option className="dark:bg-blackOne">Others</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="details" className="mb-1 text-xl font-semibold">
            Details or Inquiry <span className="text-primary">*</span>
          </label>
          <textarea
            id="details"
            rows={4}
            placeholder="Provide details about your inquiry or order"
            className="border-b text-lg border-gray-300 dark:border-stone-700/50 bg-transparent p-2 pl-0 text-blackOne dark:text-whiteTwo no-focus-ring"
          />
        </div>

        <button
          type="submit"
          className="btn-primary bg-primary text-whiteOne py-4 px-12 hover:bg-opacity-90 w-fit text-xl font-semibold"
        >
          SUBMIT FORM
        </button>
      </form>
    </>
  );
};

export default FormComponent;
