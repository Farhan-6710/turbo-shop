"use client"

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import ScrollToTop from "@/components/extras/ScrollToTop";
import UniversalProducts from "@/components/universal-products/UniversalProducts";
import usePreLoaderAnimation from "@/lib/usePreLoaderAnimation";
import ShippingFeeToast from "@/components/extras/ShippingFeeToast";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";

const Page: React.FC = () => {

  usePreLoaderAnimation();

  return (
    <div className="bg-whiteOne dark:bg-blackOne">
      <HeaderTop />
      <Header />
      <SelectVehicleMake />
      <ShippingFeeToast heading="SHIPPING CHARGES FOR REPAIR" text="ADDITIONAL $200 FOR SHIPPING FOR PRODUCT REPAIRS." />
      <UniversalProducts />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Page;
