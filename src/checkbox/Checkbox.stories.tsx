import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./index";
import Button from "../button";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {
    children: "Checkbox",
  },
};

export const UnderControl: Story = {
  args: {
    checked: false,
    children: "Checkbox",
  },
};

export const Disabled = () => {
  return (
    <>
      <Checkbox defaultChecked={false} disabled />
      <br />
      <Checkbox defaultChecked disabled />
    </>
  );
};

class Demo extends React.Component {
  state = {
    checked: true,
    disabled: false,
  };

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  onChange = (e: any) => {
    console.log("checked = ", e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    const label = `${this.state.checked ? "Checked" : "Unchecked"}-${
      this.state.disabled ? "Disabled" : "Enabled"
    }`;
    return (
      <>
        <p style={{ marginBottom: "20px" }}>
          <Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
            {label}
          </Checkbox>
        </p>
        <p>
          <Button type="primary" size="small" onClick={this.toggleChecked}>
            {!this.state.checked ? "Check" : "Uncheck"}
          </Button>
          <Button
            style={{ margin: "0 10px" }}
            type="primary"
            size="small"
            onClick={this.toggleDisable}
          >
            {!this.state.disabled ? "Disable" : "Enable"}
          </Button>
        </p>
      </>
    );
  }
}

export const Controled = () => {
  return <Demo />;
};
