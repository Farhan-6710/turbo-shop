"use client"

import ProductsSection from "@/components/productsListing/ProductsSection";
import React from "react";
import { lincolnProductsData } from "@/data/lincolnProductsData";
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
        title="SHOP LINCOLN PRODUCTS"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "lincoln-products" }]}
      />
      <ProductsSection productsData={lincolnProductsData} />
      <Footer />
    </>
  );
};

export default Page;
