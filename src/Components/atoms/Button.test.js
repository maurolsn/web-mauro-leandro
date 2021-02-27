import React from "react";
import { render, fireEvent } from "test-utils";

import Button, { ButtonColors, ButtonsVariants } from "./Button";

test("Renders a text", () => {
  const { getByText } = render(<Button>Click Here</Button>);

  expect(getByText("Click Here")).toBeInTheDocument();
});

test("Trigger event on click", () => {
  const handleClick = jest.fn(); // criar evento de click

  const { getByRole } = render(<Button onClick={handleClick} />);

  fireEvent.click(getByRole("button")); // executa o evento de clique no test.

  expect(handleClick).toBeCalled(); //Monitora se o butão foi clicado.
});

test.each(Object.values(ButtonColors).map((item) => [item]))(
  "Render with color %s",
  (color) => {
    const { asFragment } = render(<Button color={color} />);

    expect(asFragment()).toMatchSnapshot();
  }
);

test.each(Object.values(ButtonsVariants).map((item) => [item]))(
  "Render with variantu %s",
  (variant) => {
    const { asFragment } = render(<Button variant={variant} />);

    expect(asFragment()).toMatchSnapshot();
  }
);

test("Renders with color primary and variant outlined", () => {
  const { asFragment } = render(<Button variant="outlined" color="primary" />);

  expect(asFragment()).toMatchSnapshot();
});
test("Renders with color primary and variant link", () => {
  const { asFragment } = render(<Button variant="link" color="primary" />);

  expect(asFragment()).toMatchSnapshot();
});
