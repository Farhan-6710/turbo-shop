"use client";

import React, { useState } from "react";
import { Product } from "@/lib/productTypes";

interface SearchbarFilterProps {
  productsData: Product[];
  setSearchedData: React.Dispatch<React.SetStateAction<Product[]>>;
  resetFilters: () => void;
}

const SearchbarFilter: React.FC<SearchbarFilterProps> = ({
  productsData,
  setSearchedData,
  resetFilters,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    // Filter products based on the query
    const filteredData = productsData.filter((product) =>
      product.modelName.toLowerCase().includes(query.toLowerCase())
    );

    setSearchedData(filteredData);
  };

  return (
    <div className="w-full lg:w-fit">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        onClick={resetFilters}
        placeholder="Search products..."
        className="px-4 py-2 border border-stone-300 rounded-md w-full sm:w-[500px] 
             focus:ring focus:ring-primary focus:outline-none 
             focus:border-primary dark:bg-blackTwo dark:border-stone-800 
             dark:focus:ring-primary dark:focus:border-primary transition-shadow duration-200"
      />
    </div>
  );
};

export default SearchbarFilter;
