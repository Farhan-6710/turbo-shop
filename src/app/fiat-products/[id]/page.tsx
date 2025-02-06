"use client";

import ScrollToTop from "@/components/extras/ScrollToTop";
import { SelectVehicleMake } from "@/components/extras/SelectVehicleMake";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import ProductDetails from "@/components/product-details/ProductDetails";
import { fiatProductsData } from "@/data/products-data/fiatProductsData"; // Make sure the path is correct
import React from "react";

// Explicitly define the type for params
interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  // Use React.use() to unwrap the params Promise
  const { id } = React.use(params);

  // Handle cases where no id is found
  if (!id) {
    return <div>Loading...</div>;
  }

  // Convert the id to a number, as it is a string from the URL
  const productId = parseInt(id, 10);

  // Find the product by its ID
  const product = fiatProductsData.find((prod) => prod.id === productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  // Ensure product.imgPath is always an array, even if it's a single string
  const productImages = Array.isArray(product.imgPath)
    ? product.imgPath
    : [product.imgPath];

  return (
    <div>
      <HeaderTop />
      <Header />
      <ProductDetails product={product} images={productImages} />
      <SelectVehicleMake />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ProductPage;
