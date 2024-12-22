import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta = {
  title: "Atom/Avatar (WIP)",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circle: Story = {
  args: {
    intent: "circle",
    size: "md",
    content: "image",
  },
};

export const Square: Story = {
  args: {
    intent: "square",
    size: "md",
    content: "image",
  },
};
