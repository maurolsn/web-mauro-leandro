/* eslint-disable jest/valid-title */
import React from "react";
import { render, screen, fireEvent } from "test-utils";
import Accordion from "./Accordion";

import AcordionGroup from "./AccordionGroup";

const title = "Accordion Group test";
const renderGroup = (n) => {
  const accordions = [];

  for (let i = 0; i < n; i++) {
    accordions.push(
      <Accordion key={i} title={`Title ${i}`}>
        Child {i}
      </Accordion>
    );
  }

  return render(<AcordionGroup>{accordions}</AcordionGroup>);
};

test("renders with one child", () => {
  render(
    <AcordionGroup>
      <Accordion title={title} />
    </AcordionGroup>
  );

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("renders with three children", () => {
  render(
    <AcordionGroup>
      <Accordion title={title} />
      <Accordion title={title} />
      <Accordion title={title} />
    </AcordionGroup>
  );

  expect(screen.getAllByText(title)).toHaveLength(3);
});

test("renders with all accordinons closed", () => {
  renderGroup(3);

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
});

test("opens accordion with click", async () => {
  renderGroup(4);

  await fireEvent.click(screen.getByText("Title 3"));

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 3")).toBeInTheDocument();
});

test("closes accordion when it clicks on it", async () => {
  renderGroup(4);

  await fireEvent.click(screen.getByText("Title 1"));

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 3")).not.toBeInTheDocument();

  await fireEvent.click(screen.getByText("Title 1"));

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 3")).not.toBeInTheDocument();
});
