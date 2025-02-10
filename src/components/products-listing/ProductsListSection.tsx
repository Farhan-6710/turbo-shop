"use client";

import React, { useState } from "react";
import FilterSection from "./FilterSection";
import ProductsList from "./ProductsList";
import { Product } from "@/lib/productTypes";

interface ProductsSectionProps {
  productsData: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ productsData }) => {
  const [filter, setFilter] = useState<string | null>(null);

  // Filter products based on the filter state
  const filteredProducts = filter
    ? productsData.filter((product) => product.category === filter) // Example filter by category
    : productsData;

  return (
    <section className="border-b border-gray-200 dark:border-stone-800 bg-whiteTwo dark:bg-blackTwo py-6 sm:py-12 pt-0 sm:pt-0">
      <FilterSection productsData={productsData} setFilter={setFilter} />
      <ProductsList productsData={filteredProducts} />
    </section>
  );
};

export default ProductsSection;
