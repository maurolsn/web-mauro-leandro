/* eslint-disable jest/valid-title */
import { useProduct, useProducts } from "./products";

describe("useProdict()", () => {
  test("returns a product", () => {
    const slang = "css";

    const product = useProduct({ slang });

    expect(product.title).toEqual("CSS");
  });
  test("returns undefined if product was not found", () => {
    const slang = "css-invalid";

    const product = useProduct({ slang });

    expect(product).toBeUndefined();
  });
});

describe("useProducts()", () => {
  test("returns a product list", () => {
    const products = useProducts();

    expect(products.length).toBeGreaterThan(1);
  });
});
