import React from "react";
import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

import Affix from "./index";
import Button from "../button";

export default {
  title: "Example/Affix",
  component: Affix,
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
} satisfies Meta<typeof Affix>;
// type Story = StoryObj<typeof Affix>;

export const Basic = () => {
  return (
    <div
      style={{
        height: "750px",
      }}
    >
      <Affix offsetTop={110}>
        <Button type="primary">Affix top</Button>
      </Affix>
      <br />
      <Button type="primary">Others Button</Button>
    </div>
  );
};
