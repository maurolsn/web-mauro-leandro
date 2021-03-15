/* eslint-disable jest/valid-title */
import React from "react";
import { ThemeProvider } from "styled-components";
import { render } from "test-utils";

import App from "./App";

test("render the App", () => {
  render(
    <App>
      <ThemeProvider />
    </App>
  );
  expect(document.body).toMatchSnapshot();
});
