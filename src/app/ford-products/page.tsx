"use client"

import ProductsSection from "@/components/productsListing/ProductsSection";
import React from "react";
import { fordProductsData } from "@/data/fordProductsData";
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
        title="SHOP FORD PRODUCTS"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "ford-products" }]}
      />
      <ProductsSection productsData={fordProductsData} />
      <Footer />
    </>
  );
};

export default Page;
