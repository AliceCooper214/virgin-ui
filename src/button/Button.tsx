import React, { ReactNode } from "react";
import classNames from "classnames";

import "./index.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "normal" | "primary" | "dashed" | "link" | "text";
  size?: "small" | "medium" | "large";
  children?: ReactNode;
  style?: React.CSSProperties;
  htmlType?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      className,
      type = "normal",
      size = "medium",
      children,
      style,
      onClick,
      onBlur,
      htmlType,
      ...others
    } = props;

    const sizeClassNameMap = { large: "lg", small: "sm", medium: undefined };

    const sizeCls = size ? sizeClassNameMap[size] : "";

    const cls = classNames(
      {
        "ant-btn": true,
        [`ant-btn-${sizeCls}`]: size,
        [`ant-btn-${type}`]: type,
      },
      className
    );

    return (
      <button
        {...others}
        type={htmlType}
        ref={ref}
        className={cls}
        style={style}
        onClick={onClick}
        onBlur={onBlur}
      >
        {children}
      </button>
    );
  }
);

export default Button;
