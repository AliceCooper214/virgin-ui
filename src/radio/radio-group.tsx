import React, { CSSProperties, useState, ReactNode } from "react";
import classNames from "classnames";

import Radio from "./radio";

import "./index.scss";

export interface RadioGroupProps
  extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  defaultChecked?: boolean;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
}

const RadioGroup = (props: RadioGroupProps) => {
  const { disabled, children, style } = props;

  const [value, setValue] = useState(props.defaultValue || props.value);

  const cls = classNames({
    "ant-radio-group": true,
  });

  const handleClick = (e: any) => {
    const value = e.target.value;
    setValue(value);
  };

  const newChildren = React.Children.map(children, (child: any) => {
    if (child.type !== Radio) {
      return null;
    }
    return React.cloneElement(child, {
      checked : child.props.value === value,
      disabled: disabled,
      onChange: handleClick,
    });
  });

  return (
    <span className={cls} style={{ ...style }}>
      {newChildren}
    </span>
  );
};

export default RadioGroup;
