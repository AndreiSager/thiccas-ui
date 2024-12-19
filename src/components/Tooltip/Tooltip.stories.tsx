import type { Meta, StoryObj } from "@storybook/react";

import Button from "../Button/Button";
import Tooltip from "./Tooltip";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Tooltip",
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  args: {
    trigger: <p>Hover Over Me</p>,
    text: "This is a tooltip",
    intent: "normal",
  },
};

export const Danger: Story = {
  args: {
    trigger: <p>Hover Over Me</p>,
    text: "This is a tooltip",
    intent: "danger",
  },
};
