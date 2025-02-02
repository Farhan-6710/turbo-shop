"use client"

import ProductsSection from "@/components/productsListing/ProductsSection";
import React from "react";
import { audiProductsData } from "@/data/audiProductsData";
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
        title="SHOP AUDI PRODUCTS"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "audi-products" }]}
      />
      <ProductsSection productsData={audiProductsData} />
      <Footer />
    </>
  );
};

export default Page;
