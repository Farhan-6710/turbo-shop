"use client"

import ProductsSection from "@/components/productsListing/ProductsSection";
import React from "react";
import { tiguanProductsData } from "@/data/tiguanProductsData";
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
        title="SHOP TIGUAN PRODUCTS"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "tiguan-products" }]}
      />
      <ProductsSection productsData={tiguanProductsData} />
      <Footer />
    </>
  );
};

export default Page;
