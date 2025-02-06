// app/cart/page.tsx

import React from "react";
import MyCart from "@/components/myCartSection/MyCart"; // Adjust the path if necessary
import HeaderTop from "@/components/header/HeaderTop";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/extras/ScrollToTop";
import Footer from "@/components/footer/Footer";

const MyCartPage: React.FC = () => {
  return (
    <>
      <HeaderTop />
      <Header />
      <MyCart />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default MyCartPage;
