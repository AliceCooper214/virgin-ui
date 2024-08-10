import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { CheckboxChangeEvent } from "./checkbox";

import checkboxContext from "./context";

import "./index.scss";

export interface GroupProps {
  defaultValue?: string[];
  value?: string[];
  onChange?: Function;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: object;
}

const CheckboxGroup = (props: GroupProps) => {
  const { disabled, children, onChange, style, ...others } = props;

  const [value, setValue] = useState(props.defaultValue || props.value || []);

  useEffect(() => {
    if ("value" in props && props.value !== undefined) {
      setValue(props.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);

  const cls = classNames(classNames, {
    "ant-checkbox-group": true,
  });

  const handleChange = (e: CheckboxChangeEvent) => {
    const targetValue = e.target.value;
    const idx = value.indexOf(targetValue);
    const checked = e.target.checked;

    let nvalue = value;
    if (idx === -1 && !checked) {
      nvalue = value.concat([targetValue]);
      setValue(nvalue);
    } else if (idx > -1 && checked) {
      value.splice(idx, 1);
      nvalue = value.concat([]);
      setValue(nvalue);
    }

    onChange?.(nvalue);
  };

  return (
    <span className={cls} style={{ ...style }} {...others}>
      <checkboxContext.Provider
        value={{
          onChange: handleChange,
          disabled: !!disabled,
          value,
        }}
      >
        {children}
      </checkboxContext.Provider>
    </span>
  );
};

export default CheckboxGroup;
