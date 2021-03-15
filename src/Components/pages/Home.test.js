/* eslint-disable jest/valid-title */
import Hero from "Components/molecules/Hero";
import React from "react";
import { render, screen } from "test-utils";

import Home from "./Home";

test("render with one child", () => {
  const image = "http://test/image.jpg";
  render(
    <Home>
      <Hero image={image} />
    </Home>
  );

  expect(screen.getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});

// test("renders with one child", () => {
//   render(
//     <AcordionGroup>
//       <Accordion title={title} />
//     </AcordionGroup>
//   );

//   expect(screen.getByText(title)).toBeInTheDocument();
// });

// const { getByTestId } = render(<Hero image={image} />);

// expect(getByTestId("hero")).toHaveStyleRule({
//   backgroundImage: image,
// });
