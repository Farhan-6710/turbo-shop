"use client"

import ProductsSection from "@/components/productsListing/ProductsSection";
import React from "react";
import { cadillacProductsData } from "@/data/cadillacProductsData";
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
        title="SHOP CADILLAC PRODUCTS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "cadillac-products" },
        ]}
      />
      <ProductsSection productsData={cadillacProductsData} />
      <Footer />
    </>
  );
};

export default Page;
