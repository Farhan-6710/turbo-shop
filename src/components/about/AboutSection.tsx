import Image from "next/image";
import AnimatedProgressBar from "./AnimatedProgressBar";

const AboutSection: React.FC = () => {
  return (
    <section className="dark:bg-blackTwo bg-whiteTwo">
      <div className="container mx-auto py-8 sm:py-12 flex flex-col lg:flex-row gap-4 lg:gap-16 items-center justify-between px-4 md:px-0">
        
        {/* Content Div */}
        <div className="lg:w-1/2 sm:text-justify sm:px-24 lg:pr-14">
          <h2 className="text-4xl font-extrabold dark:text-gray-50 text-blackOne mb-4">
            ABOUT TURBOSHOP
          </h2>
          <p className="text-lg dark:text-gray-200 text-blackOne mb-6 font-sans font-normal">
            At TurboShop, we specialize in providing high-performance turbochargers, cartridges, and components for all vehicle makes and models. With our expert team and commitment to quality, we deliver solutions that enhance your vehicle&apos;s efficiency and power.
          </p>

          <div className="mt-8">
            {/* First Progress Bar */}
            <AnimatedProgressBar label="Quality Assurance" percentage={96} />
            {/* Second Progress Bar */}
            <AnimatedProgressBar label="Customer Satisfaction" percentage={90} />
          </div>
        </div>

        {/* Image Div */}
        <div className="lg:w-1/2 flex justify-center dark:bg-blackOne bg-whiteOne py-12">
          <div className="w-3/4">
            <Image
              src="/hero-img.png"
              alt="Turbo Image"
              width={800}
              height={500}
              className="w-full max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
