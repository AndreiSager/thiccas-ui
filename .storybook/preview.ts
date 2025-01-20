import "../src/app/globals.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      canvas: { sourceState: "shown" },
      source: { type: "dynamic" },
    },
    options: {
      storySort: {
        order: [
          "Welcome",
          "Getting Started",
          "Catalog",
          "Changelog",
          "Foundations",
          "Atoms",
          "Molecules",
          "Organisms",
          "Templates N' Pages",
          "*",
        ],
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
