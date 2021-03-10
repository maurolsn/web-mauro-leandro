/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import ProductGrid from "./ProductGrid";
import Placeholderimage from "Components/assets/CardImage.jpg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, image: Placeholderimage, title: "Title 1", Summary: "Text" },
      { id: 2, image: Placeholderimage, title: "Title 2", Summary: "Text" },
      { id: 3, image: Placeholderimage, title: "Title 3", Summary: "Text" },
      { id: 4, image: Placeholderimage, title: "Title 4", Summary: "Text" },
      { id: 5, image: Placeholderimage, title: "Title 5", Summary: "Text" },
      { id: 6, image: Placeholderimage, title: "Title 6", Summary: "Text" },
    ]}
  />
);
