"use client";

import React /* useState */ from "react";
import FilterSection from "./FilterSection";
import ProductsList from "./ProductsList";
import { Product } from "@/lib/productTypes";

interface ProductsSectionProps {
  productsData: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ productsData }) => {
  /* const [filter, setFilter] = useState(null); */

  return (
    <section className="border-b border-gray-200 dark:border-stone-800">
      
      <FilterSection /* setFilter={setFilter} */ />
      <ProductsList productsData={productsData} /* filter={filter} */ />
    </section>
  );
};

export default ProductsSection;
