import { Product } from "@/lib/productTypes";
import SpecialCarousel from "./SpecialCarousel";
import useCurrencyStore from "@/store/useCurrencyStore";
import LeftPricingSection from "../products-listing/LeftPricingSection";
import RightPricingSection from "../products-listing/RightPricingSection";

interface ProductDetailsProps {
  product: Product;
  images: string[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, images }) => {
  const { currency } = useCurrencyStore();
  const prices = product.prices[currency.toLowerCase() as "usd" | "cad"];

  return (
    <div className="bg-white dark:bg-blackOne text-blackOne dark:text-white">
      <div className="container mx-auto py-10 2xl:py-20 flex flex-col xl:flex-row gap-8 items-center justify-center pl-4">
        
        {/* Carousel Section */}
          <SpecialCarousel images={images} />

        {/* Product Details Section */}
        <div className="w-full xl:w-7/12 px-4">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
              {product.brand} {product.modelName}
            </h1>
            <h2 className="text-xl sm:text-xl text-gray-700 dark:text-gray-300">
              {product.subTitle}
            </h2>

            <p className="text-base sm:text-md text-gray-700 dark:text-gray-300">
              {product.description}
            </p>

            <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <p>Category: <span className="font-semibold">{product.category}</span></p>
              <p>Year: <span className="font-semibold">{product.year}</span></p>
            </div>

            <div className="flex flex-col xl:flex-row xl:w-full gap-2 xl:gap-4 mt-6">
              <LeftPricingSection prices={prices} product={product} />
              <RightPricingSection prices={prices} product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
