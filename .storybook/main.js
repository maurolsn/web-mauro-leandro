module.exports = {
  stories: [
    "../src/stories/**/*.stories.@(js|mdx)",
    "../src/Components/**/*.stories.@(js|mdx)",
    "../src/styles/**/*.stories.@(js|mdx)",
  ],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
  ],
};
