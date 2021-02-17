import { breakAt, BreakpointSizes } from "./Breakpoints";

test.each([
  [BreakpointSizes.sm],
  [BreakpointSizes.md],
  [BreakpointSizes.ld],
  [BreakpointSizes.xl],
])("break at %ipx", (size) => {
  expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`);
});
