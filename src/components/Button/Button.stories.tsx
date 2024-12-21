import type { Meta, StoryObj } from "@storybook/react";

import createComponentTemplate from "@/functions/createComponentTemplate";
import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  decorators: [
    (Story) => (
      <div className="flex gap-5">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const buttonTemplate = createComponentTemplate(Button);

export const Overview: Story = {
  render: buttonTemplate.bind({}),
  args: {
    children: "Button",
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false,
      },
    },
  },
};

/** Button fill creates a natural heirachy in a screen with multiple buttons. */
export const Fill: Story = {
  render: () => (
    <>
      <Button intent="solid">Solid</Button>
      <Button intent="outline">Outline</Button>
      <Button intent="none">None</Button>
    </>
  ),
};

export const Size: Story = {
  render: () => (
    <>
      <Button>Large</Button>
      <Button>Medium</Button>
      <Button>Small</Button>
    </>
  ),
};

export const Disabled: Story = {
  render: () => (
    <>
      <Button intent="solid">Solid</Button>
      <Button intent="outline">Outline</Button>
      <Button intent="none">None</Button>
    </>
  ),
};

export const State: Story = {
  render: () => (
    <>
      <Button>Normal</Button>
      <Button>Active</Button>
    </>
  ),
};

export const Icon: Story = {
  render: () => (
    <>
      <Button>Right icon</Button>
      <Button>Left iconn</Button>
    </>
  ),
};
