import React, { ReactNode, CSSProperties, useState, useRef } from "react";
import classNames from "classnames";

import "./index.scss";

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  value?: string;
  defaultChecked?: boolean;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
}

const Radio = (props: RadioProps) => {
  const { disabled, children, style, onChange, value } = props;

  const [checked, setChecked] = useState(false);
  const inputEl = useRef(null);

  const cls = classNames({
    "ant-radio": true,
    "ant-radio-checked": checked,
    "ant-radio-disabled": disabled,
  });

  const wrapperCls = classNames({
    "ant-radio-wrapper": true,
    "ant-radio-wrapper-disabled": disabled,
  });

  React.useEffect(() => {
    if ("checked" in props && props.checked !== checked) {
      setChecked(props.checked!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.checked]);

  const handleClick = (e: any) => {
    if (disabled || checked) {
      return;
    }

    if (!("checked" in props)) {
      setChecked(true);
    }

    if (typeof onChange === "function") {
      e.target = inputEl.current!;
      onChange(e);
    }
  };

  return (
    <span className={wrapperCls} onClick={handleClick}>
      <span className={cls}>
        <input
          type="radio"
          className="ant-radio-input"
          value={value}
          ref={inputEl}
          style={{ ...style }}
        />
        <span className="ant-radio-inner"></span>
      </span>
      <span>{children}</span>
    </span>
  );
};

export default Radio;
