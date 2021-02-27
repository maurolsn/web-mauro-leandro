module.exports = {
  stories: [
    "../src/stories/**/*.stories.(js|mdx)",
    "../src/Components/**/*.stories.(js|mdx)",
    "../src/styles/**/*.stories.(js|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-viewport",
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-knobs",
  ],
};
