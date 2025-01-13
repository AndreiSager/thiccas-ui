import createComponentTemplate from "@/functions/createComponentTemplate";
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

const avatarTemplate = createComponentTemplate(Avatar);

export const Overview: Story = {
  render: avatarTemplate.bind({}),
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false,
      },
    },
  },
};
export const Shape: Story = {
  render: () => (
    <>
      <Avatar intent="circle" />
      <Avatar intent="square" />
    </>
  ),
};
