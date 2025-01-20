import createComponentTemplate from "@/functions/createComponentTemplate";
import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";

const meta = {
  title: "Molecules/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => {
      <div className="flex gap-5">
        <Story />
      </div>;
    },
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const tooltipTemplate = createComponentTemplate(Tooltip);

export const Overview: Story = {
  render: tooltipTemplate.bind({}),
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false,
      },
    },
  },
};

export const Position: Story = {
  render: () => (
    <>
      <Tooltip variant="top" />
      <Tooltip variant="left" />
      <Tooltip variant="bottom" />
      <Tooltip variant="right" />
    </>
  ),
};
