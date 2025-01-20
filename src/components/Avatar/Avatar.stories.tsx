import createComponentTemplate from "@/functions/createComponentTemplate";
import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  decorators: [
    (Story) => (
      <div className="flex gap-5">
        <Story />
      </div>
    ),
  ],
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
      <Avatar variant="circle" />
      <Avatar variant="square" />
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <Avatar size="small" />
      <Avatar size="medium" />
      <Avatar size="large" />
    </>
  ),
};
