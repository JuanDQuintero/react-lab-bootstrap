import type { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "basic",
    title: "Title",
    subtitle: "Subtitle",
  },
  render: (args) => <Card {...args} />,

};

export const OutlinedCard: Story = {
  
};

