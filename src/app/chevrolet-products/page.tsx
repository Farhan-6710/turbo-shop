"use client";

import ProductsSection from "@/components/products-listing/ProductsSection";
import React from "react";
import { chevroletProductsData } from "@/data/products-data/chevroletProductsData";
import HeaderTop from "@/components/header/HeaderTop";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BreadcrumbSection from "@/components/products-listing/BreadcrumbSection";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";
import usePreLoaderAnimation from "@/lib/usePreLoaderAnimation";
import ScrollToTop from "@/components/extras/ScrollToTop";
import ShippingFeeToast from "@/components/extras/ShippingFeeToast";

const Page = () => {
  usePreLoaderAnimation();

  return (
    <>
      <HeaderTop />
      <Header />
      <SelectVehicleMake />
      <ShippingFeeToast
        heading="SHIPPING CHARGES FOR REPAIR"
        text="ADDITIONAL $200 FOR SHIPPING FOR PRODUCT REPAIRS."
      />
      <BreadcrumbSection
        title="SHOP CHEVROLET PRODUCTS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "chevrolet-products" },
        ]}
      />
      <ProductsSection productsData={chevroletProductsData} />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Page;
