import React from "react";

import { useScrollToTop } from "hooks/scroll";
import ProductDetailPage from "Components/pages/ProductDetail";

const ProductDeteil = () => {
  useScrollToTop();
  return <ProductDetailPage />;
};

export default ProductDeteil;
