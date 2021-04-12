/* eslint-disable jest/valid-title */
import React from "react";
import { render, screen } from "test-utils";

import ProductDetailRoute from "./index";

import { useProduct } from "hooks/products";
import { buildProduct } from "models/builders/products";

jest.mock("hooks/products");

test("render with a product", () => {
  useProduct.mockReturnValue(buildProduct());

  render(<ProductDetailRoute />);

  expect(
    screen.getByText("Rustic Steel Car", { selector: "h1" })
  ).toBeInTheDocument();
});

test("not found product", () => {
  useProduct.mockReturnValue(null);

  render(<ProductDetailRoute />);

  expect(
    screen.getByText("Servicço não Encontrado", { selector: "h1" })
  ).toBeInTheDocument();
});
