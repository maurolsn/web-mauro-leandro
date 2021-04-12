/* eslint-disable jest/valid-title */
import React from "react";
import { render, screen } from "test-utils";

import About from "./About";

beforeEach(() => {
  jest.resetAllMocks();
});

test("Renders About page", () => {
  render(<About />);
  expect(screen.getByText("Auto Escola")).toBeInTheDocument();
});
