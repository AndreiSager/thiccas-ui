import createComponentTemplate from "@/functions/createComponentTemplate";
import { Meta, StoryObj } from "@storybook/react";
import AvatarGroup from "./AvatarGroup";

const meta = {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
  decorators: [
    (Story) => (
      <div className="flex gap-5">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const avatarGroupTemplate = createComponentTemplate(AvatarGroup);

export const Overview: Story = {
  render: avatarGroupTemplate.bind({}),
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
      <AvatarGroup variant="circle" />
      <AvatarGroup variant="square" />
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <AvatarGroup size="small" />
      <AvatarGroup size="medium" />
      <AvatarGroup size="large" />
    </>
  ),
};
