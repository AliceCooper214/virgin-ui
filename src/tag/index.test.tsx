import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tag from "./index";

describe("Tag", () => {
  test("renders Tag", () => {
    render(<Tag>click me</Tag>);
    const linkElement = screen.getByText(/click me/i);
    // @ts-ignore
    expect(linkElement).toBeInTheDocument();
  });

  test("should support onClose", () => {
    const onClose = jest.fn();
    const { container } = render(
      <Tag closable onClose={onClose}>
        tag
      </Tag>
    );

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const linkElement = container.querySelector(".anticon");
    fireEvent.click(linkElement!);

    expect(onClose).toBeCalled();
  });
});
