import faker from "faker";

import code from "stories/assets/code.jpg";
import products from "./fixtures/products.json";

export const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result.push({
      ...products[i],
      image: code,
    });
  }

  return result;
};

export const buildProduct = () => buildProductList(1)[0];
