/* eslint-disable jest/valid-title */
import React from "react";
import { render } from "test-utils";

import Section from "./Section";

test("Render Section with Children", () => {
  const { getByText } = render(
    <Section>
      {" "}
      <p>Mauro Leandro</p>
    </Section>
  );

  expect(getByText("Mauro Leandro")).toBeInTheDocument();
});
