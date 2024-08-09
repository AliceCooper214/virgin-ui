import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import RadioGroup from "./radio-group";
import Radio from "./radio";

export default {
  title: "Example/RadioGroup",
  component: RadioGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof RadioGroup>;
type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  args: {
    children: [
      <Radio value="1" key="1">
        选项1
      </Radio>,
      <Radio value="2" key="2">
        选项2
      </Radio>,
      <Radio value="3" key="3">
        选项3
      </Radio>,
    ],
  },
};

export const UnderControl = () => {
  return (
    <RadioGroup value="3">
      <Radio value="1" key="1">
        选项1
      </Radio>
      <Radio value="2" key="2">
        选项2
      </Radio>
      <Radio value="3" key="3">
        选项3
      </Radio>
    </RadioGroup>
  );
};
