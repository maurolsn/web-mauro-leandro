import React from "react";
import { addDecorator, addParameters } from "@storybook/react";

import GlobalStyle from "../src/styles/GlobalStyle";
import ThemeProvider, { ThemeName } from "../src/styles/ThemeProvider";
import { select } from "@storybook/addon-knobs";

addDecorator((storyFn) => (
  <>
    <ThemeProvider theme={select("Theme", ThemeName, ThemeName.light)}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </>
));

const viewports = {
  extraSmall: {
    name: "Portrait phone (defaut)",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  small: {
    name: "Landscape phone (sm)",
    styles: {
      width: "640px",
      height: "360px",
    },
  },
  medium: {
    name: "Tabet (md)",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  large: {
    name: "Descktop (lg)",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  extraLarge: {
    name: "Large Descktop (xl)",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
};

addParameters({
  viewport: {
    viewports,
  },
});
// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// };
