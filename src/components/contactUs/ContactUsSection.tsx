import React from "react";

const ContactUsSection = () => {
  return (
    <section className="bg-whiteTwo dark:bg-blackTwo text-blackTwo dark:text-whiteTwo py-10 sm:py-16 border-t border-gray-300 dark:border-stone-800">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4">
        {/* Left Section */}
        <div className="w-full lg:w-4/12 flex flex-col bg-whiteOne dark:bg-blackOne p-12 h-fit mb-4 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            WE MAKE TURBO REPAIR MORE CONVENIENT
          </h2>
          <p className="mb-6 text-lg">
            Turbo Shop stands out for its specialized focus on rebuilding,
            replacing, and upgrading turbochargers.
          </p>
          <button className="btn-primary bg-primary text-whiteOne py-4 px-4 hover:bg-opacity-90 text-xl font-semibold">
            GET SERVICE
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-8/12 p-6 py-0 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">
            CONTACT US FOR TURBO SOLUTIONS
          </h2>
          <p className="mb-6 text-lg">
            Need assistance with our products, placing an order, or
            understanding specifications? Fill out the form below, and our team
            will respond promptly.
          </p>
          <form className="flex flex-col gap-4">
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
                <option className="dark:bg-blackOne">Custom Turbo Solution</option>
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
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
