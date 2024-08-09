import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Icon from "./index";

describe("Icon", () => {
  test("renders Icon", () => {
    const { container } = render(<Icon type="fixed" />);
    // @ts-ignore
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  test("custom className", () => {
    const { container } = render(<Icon type="fixed" className="custom" />);
    // @ts-ignore
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(".custom")).toBeInTheDocument();
  });

  test("should support click", () => {
    const onClick = jest.fn();
    const { container } = render(<Icon type="fixed" onClick={onClick} />);
    // @ts-ignore
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const linkElement = container.querySelector("svg") as SVGSVGElement;
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
});
