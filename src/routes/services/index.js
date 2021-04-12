import React from "react";
import { useParams } from "react-router-dom";

import { useScrollToTop } from "hooks/scroll";
import { useProduct } from "hooks/products";

import ProductDetailPage from "Components/pages/ProductDetail";
import Error from "Components/pages/Error";
import Take from "draws/Taken";

const ProductDeteil = () => {
  useScrollToTop();

  const { slang } = useParams();
  const product = useProduct({ slang });

  if (!product) {
    return (
      <Error
        image={<Take />}
        title="Servicço não Encontrado"
        desccription="Serviço não encontrado ou não disponível."
      />
    );
  }
  return <ProductDetailPage product={product} />;
};

export default ProductDeteil;
