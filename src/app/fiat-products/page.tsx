"use client"

import ProductsSection from "@/components/productsListing/ProductsSection";
import React from "react";
import { fiatProductsData } from "@/data/fiatProductsData";
import HeaderTop from "@/components/header/HeaderTop";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BreadcrumbSection from "@/components/productsListing/BreadcrumbSection";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";
import usePreLoaderAnimation from "@/lib/usePreLoaderAnimation";

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
      <Footer />
    </>
  );
};

export default Page;
