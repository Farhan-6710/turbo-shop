import { Product } from "@/lib/productTypes"; // Import the Product type
import FilterDropdown from "./FilterDropdown"; // Import the FilterDropdown component

interface FilterSectionProps {
  setCategoryFilter: React.Dispatch<React.SetStateAction<string | null>>;
  setYearFilter: React.Dispatch<React.SetStateAction<string | null>>;
  productsData: Product[];
  resetFilters: () => void;
  selectedCategory: string;
  selectedYear: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  setYearFilter,
  setCategoryFilter,
  productsData,
  resetFilters,
  selectedCategory,
  selectedYear,
  setSelectedCategory,
  setSelectedYear,
}) => {

  // Get unique categories and years from productsData
  const categories = Array.from(
    new Set(
      productsData
        .map((product) => product.category)
        .filter((category) => category !== undefined)
    )
  );

  const years = Array.from(
    new Set(
      productsData
        .filter((product) => product.year)
        .map((product) => product.year!.toString())
    )
  );

  
  return (
    <div className="flex flex-col xl:flex-row gap-4">
      <div className="flex flex-wrap gap-4">
        {/* Category Filter Dropdown */}
        <FilterDropdown
          label="Category"
          options={[...categories]}
          selectedOption={selectedCategory}
          setSelectedOption={setSelectedCategory}
          setFilter={setCategoryFilter}
        />

        {/* Year Filter Dropdown */}
        <FilterDropdown
          label="Year"
          options={[...years]}
          selectedOption={selectedYear}
          setSelectedOption={setSelectedYear}
          setFilter={setYearFilter}
        />
      </div>
      {/* Reset Filters Button */}
      <button
        onClick={resetFilters}
        className="px-6 py-2 w-[230px] lg:w-fit bg-primary text-white rounded-md hover:bg-red-600 transition-all duration-300"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
