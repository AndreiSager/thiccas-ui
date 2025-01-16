import type { Meta, StoryObj } from "@storybook/react";

import Button from "../Button/Button";
import Dropdown from "./Dropdown";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Dropdown (WIP)",
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    items: [
      "10 - 100",
      "100 - 1000",
      "1000 - 10,000",
      "10,000 - 100,000",
      "100,000+",
    ],
    trigger: <Button>Dropdown</Button>,
  },
};
