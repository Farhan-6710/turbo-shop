"use client"

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";
import ScrollToTop from "@/components/extras/ScrollToTop";
import UniversalProducts from "@/components/universal-products/UniversalProducts";
import usePreLoaderAnimation from "@/lib/usePreLoaderAnimation";

const Page: React.FC = () => {

  usePreLoaderAnimation();

  return (
    <div className="bg-whiteOne dark:bg-blackOne">
      <HeaderTop />
      <Header />
      <SelectVehicleMake />
      <UniversalProducts />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Page;
