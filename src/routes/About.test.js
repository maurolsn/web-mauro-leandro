/* eslint-disable jest/valid-title */
import React from "react";
import { render } from "test-utils";

import About from "./About";

test("scroll to top in fist render", () => {
  render(<About />);
  expect(window.scrollTo).toBeCalledTimes(1);
});
