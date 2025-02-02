"use client"

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import HeroSection from "@/components/hero/HeroSection";
import PopularProductsSection from "@/components/popularProducts/PopularProductsSection";
import ContactUsSection from "@/components/contactUs/ContactUsSection";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";
import usePreLoaderAnimation from "@/lib/usePreLoaderAnimation";

const Page: React.FC = () => {

  usePreLoaderAnimation();

  return (
    <div className="bg-whiteOne dark:bg-blackOne">
      <HeaderTop />
      <Header />
      <SelectVehicleMake />
      <HeroSection />
      <PopularProductsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default Page;
