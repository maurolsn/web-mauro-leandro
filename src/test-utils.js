import React from "react";

import ThemeProvider from "styles/ThemeProvider";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

const TestProvider = ({ children }) => (
  <Router>
    <ThemeProvider>{children}</ThemeProvider>
  </Router>
);

export * from "@testing-library/react";

const customRender = (ui, Options) =>
  render(ui, { wrapper: TestProvider, ...Options });

export { customRender as render };
