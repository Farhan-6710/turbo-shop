// app/cart/page.tsx

import React from "react";
import MyCart from "@/components/myCartSection/MyCart"; // Adjust the path if necessary
import HeaderTop from "@/components/header/HeaderTop";
import Header from "@/components/header/Header";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";
import ScrollToTop from "@/components/extras/ScrollToTop";
import Footer from "@/components/footer/Footer";

const MyCartPage: React.FC = () => {
  return (
    <>
      <HeaderTop />
      <Header />
      <SelectVehicleMake />
      <MyCart />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default MyCartPage;
