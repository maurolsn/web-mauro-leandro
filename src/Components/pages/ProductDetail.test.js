/* eslint-disable jest/valid-title */
import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";

test("Render ProductDetail page", () => {
  render(<ProductDetail />);
  expect(screen.getByText("Nome do serviço")).toBeInTheDocument();
  expect(window.scrollTo).toBeCalledTimes(1);
});
