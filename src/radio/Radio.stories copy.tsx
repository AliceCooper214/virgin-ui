import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Radio from "./index";

export default {
  title: "Example/Radio",
  component: Radio,
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
  args: { onClick: fn() },
} satisfies Meta<typeof Radio>;
type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  args: {
    children: "Radio",
  },
};

export const Basic = () => {
  return (
    <>
      <Radio
        onChange={() => {
          fn();
        }}
      >
        Primary Radio
      </Radio>
    </>
  );
};

export const UnChecked = () => {
  return (
    <>
      <Radio checked={false}>Primary Radio</Radio>
    </>
  );
};

export const Disabled = () => {
  return (
    <>
      <Radio disabled> Radio</Radio>
    </>
  );
};
