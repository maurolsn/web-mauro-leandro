import React from "react";
import { render } from "test-utils";

import Hero from "./Hero";

test("renders Hero with children", () => {
  const { getByText } = render(
    <Hero>
      <p>Mauro Leandro</p>
    </Hero>
  );
  expect(getByText("Mauro Leandro")).toBeInTheDocument();
});

test("Renders image background", () => {
  const image = "http://test/image.jpg";

  const { getByTestId } = render(<Hero image={image} />);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
