/* eslint-disable jest/valid-title */
import React from "react";
import { render } from "test-utils";

import Grid from "./Grid";

test("Match snapshot with no params", () => {
  const { asFragment } = render(<Grid></Grid>);

  expect(asFragment()).toMatchSnapshot();
});

test("Match snapshot with params", () => {
  const { asFragment } = render(<Grid sm={2} md={3} lg={4} xl={5}></Grid>);

  expect(asFragment()).toMatchSnapshot();
});

test("Match snapshot with sm and lg", () => {
  const { asFragment } = render(<Grid sm={2} xl={5}></Grid>);

  expect(asFragment()).toMatchSnapshot();
});
