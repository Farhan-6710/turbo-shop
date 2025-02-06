"use client";

import ProductsSection from "@/components/products-listing/ProductsSection";
import React from "react";
import { fiatProductsData } from "@/data/products-data/fiatProductsData";
import HeaderTop from "@/components/header/HeaderTop";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BreadcrumbSection from "@/components/products-listing/BreadcrumbSection";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";
import usePreLoaderAnimation from "@/lib/usePreLoaderAnimation";
import ScrollToTop from "@/components/extras/ScrollToTop";

const Page = () => {
  usePreLoaderAnimation();

  return (
    <>
      <HeaderTop />
      <Header />
      <SelectVehicleMake />
      <BreadcrumbSection
        title="SHOP FIAT PRODUCTS"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "fiat-products" }]}
      />
      <ProductsSection productsData={fiatProductsData} />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Page;
