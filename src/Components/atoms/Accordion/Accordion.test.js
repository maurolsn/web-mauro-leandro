/* eslint-disable jest/valid-title */
import React from "react";
import { render, screen, fireEvent } from "test-utils";

import Accordion from "./Accordion";

const text = "My children text open";
const title = "My Title";

test("Render the title", () => {
  render(<Accordion title={title} />);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("renders without children", () => {
  render(<Accordion>{text}</Accordion>);

  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test("triggers onchange when it is clicked", async () => {
  const handleChange = jest.fn();

  render(<Accordion title={title} onChange={handleChange} />);

  await fireEvent.click(screen.getByText(title));

  expect(screen.getByText(title)).toBeInTheDocument();
});

describe("when ins controlled", () => {
  describe("when starts opended", () => {
    test("renders with children", () => {
      render(<Accordion open>{text}</Accordion>);

      expect(screen.queryByText(text)).toBeInTheDocument();
    });

    test("triggers onchange when it is clicked", async () => {
      const handleChange = jest.fn();

      render(
        <Accordion title={title} onChange={handleChange} open>
          {text}
        </Accordion>
      );

      await fireEvent.click(screen.getByText(title));
      expect(handleChange).toBeCalledTimes(1);
    });
    test("call default function when it is clicked", async () => {
      render(
        <Accordion title={title} open>
          {text}
        </Accordion>
      );

      await fireEvent.click(screen.getByText(title));
    });

    test("hide children when open changes to false", () => {
      const { rerender } = render(
        <Accordion title={title} open>
          {text}
        </Accordion>
      );

      rerender(
        <Accordion title={title} open={false}>
          {text}
        </Accordion>
      );
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });

  describe("when starts closeded", () => {
    test("renders without children", () => {
      render(<Accordion open={false}>{text}</Accordion>);

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });
});
