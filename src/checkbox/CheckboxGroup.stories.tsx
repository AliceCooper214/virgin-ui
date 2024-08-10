import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CheckboxGroup from "./checkbox-group";
import Checkbox from "./checkbox";

export default {
  title: "Example/CheckboxGroup",
  component: CheckboxGroup,
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
} satisfies Meta<typeof CheckboxGroup>;
type Story = StoryObj<typeof CheckboxGroup>;

export const Basic: Story = {
  args: {
    children: [
      <Checkbox value="1" key="1">
        选项1
      </Checkbox>,
      <Checkbox value="2" key="2">
        选项2
      </Checkbox>,
      <Checkbox value="3" key="3">
        选项3
      </Checkbox>,
    ],
  },
};

export const DefaultValue: Story = {
  args: {
    defaultValue: ["2"],
    children: [
      <Checkbox value="1" key="1">
        选项1
      </Checkbox>,
      <Checkbox value="2" key="2">
        选项2
      </Checkbox>,
      <Checkbox value="3" key="3">
        选项3
      </Checkbox>,
    ],
  },
};

export const ContextDemo = () => {
  return (
    <CheckboxGroup defaultValue={["2"]}>
      <span>
        <Checkbox value="1" key="1">
          选项1
        </Checkbox>
      </span>
      <span>
        <Checkbox value="2" key="2">
          选项2
        </Checkbox>
      </span>
      <Checkbox value="3" key="3">
        选项3
      </Checkbox>
    </CheckboxGroup>
  );
};
