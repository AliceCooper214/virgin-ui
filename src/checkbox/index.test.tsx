import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Checkbox from "./index";
import CheckboxGroup from "./checkbox-group";

describe("Checkbox", () => {
  test("renders Checkbox", () => {
    render(<Checkbox>click me</Checkbox>);
    const linkElement = screen.getByText(/click me/i);
    // @ts-ignore
    expect(linkElement).toBeInTheDocument();
  });

  test("should support click", () => {
    const onChange = jest.fn();
    render(
      <CheckboxGroup onChange={onChange}>
        <Checkbox value="1">click me</Checkbox>
        <Checkbox value="2">click 2</Checkbox>
      </CheckboxGroup>
    );

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onChange).toBeCalled();
  });
});
