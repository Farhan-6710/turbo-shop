"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterSection from "./FilterSection";
import SearchbarFilter from "./SearchbarFilter";
import ProductsList from "./ProductsList";
import { Product } from "@/lib/productTypes";

interface ProductsSectionProps {
  productsData: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ productsData }) => {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [yearFilter, setYearFilter] = useState<string | null>(null);
  const [searchedData, setSearchedData] = useState<Product[]>(productsData);

  const [selectedCategory, setSelectedCategory] = useState("all"); // Default selected category
  const [selectedYear, setSelectedYear] = useState("all"); // Default selected year

  // Filter products based on category and year
  const filteredProducts = searchedData
    .filter((product) =>
      categoryFilter ? product.category === categoryFilter : true
    )
    .filter((product) =>
      yearFilter ? product.year?.toString() === yearFilter : true
    );

  // Reset searched data whenever the original productsData changes
  useEffect(() => {
    setSearchedData(productsData);
  }, [productsData]);

  // Update filters when category or year changes
  useEffect(() => {
    setCategoryFilter(selectedCategory === "all" ? null : selectedCategory);
    setYearFilter(selectedYear === "all" ? null : selectedYear);
  }, [selectedCategory, selectedYear, setCategoryFilter, setYearFilter]);


  // Reset both filters
  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedYear("all");
  };

  return (
    <section className="bg-whiteTwo dark:bg-blackTwo py-6 sm:py-12 pt-0 sm:pt-0">
      <div className="container mx-auto py-4 sm:py-8 px-4 flex flex-wrap justify-between gap-4">
        <FilterSection
          productsData={productsData}
          setCategoryFilter={setCategoryFilter}
          setYearFilter={setYearFilter}
          resetFilters={resetFilters}
          selectedCategory={selectedCategory}
          selectedYear={selectedYear}
          setSelectedCategory={setSelectedCategory}
          setSelectedYear={setSelectedYear}
        />
        <SearchbarFilter
          productsData={productsData}
          setSearchedData={setSearchedData}
          resetFilters={resetFilters}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${categoryFilter}-${yearFilter}-${searchedData
            .map((p) => p.id)
            .join(",")}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
        >
          <ProductsList productsData={filteredProducts} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ProductsSection;
