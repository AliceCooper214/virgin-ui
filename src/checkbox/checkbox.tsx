import React, {
  ReactNode,
  CSSProperties,
  useState,
  useRef,
  useContext,
  useEffect,
} from "react";
import classNames from "classnames";

import CheckboxContext from "./context";

import "./index.scss";

export interface CheckboxProps {
  prefixCls?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (e: CheckboxChangeEvent) => void;
  children?: ReactNode;
  style?: CSSProperties;
}

export interface CheckboxChangeEventTarget {
  value: string;
  checked: boolean;
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
}

const Checkbox = (props: CheckboxProps) => {
  const {
    prefixCls = "ant-",
    onChange,
    disabled,
    value,
    style,
    ...others
  } = props;

  const [checked, setCheck] = useState(props.defaultChecked || false);
  const inputEl = useRef(null);
  const {
    onChange: conChange,
    disabled: cdisabled,
    value: values,
  } = useContext(CheckboxContext);

  useEffect(() => {
    if ("checked" in props) {
      setCheck(props.checked || false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.checked]);

  useEffect(() => {
    if (values && "value" in props) {
      setCheck(values.indexOf(props.value!) > -1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const handleClick = (e: any) => {
    if (disabled || cdisabled) {
      return;
    }

    const state = !checked;
    if (!("checked" in props)) {
      setCheck(state);
    }

    if (typeof onChange === "function") {
      e.target = inputEl.current;
      e.target.checked = state;
      onChange(e);
    }

    if (typeof conChange === "function") {
      e.target = inputEl.current;
      conChange(e);
    }
  };

  const handleChange = () => {};

  const cls = classNames({
    [`${prefixCls}checkbox`]: true,
    [`${prefixCls}checkbox`]: true,
    [`${prefixCls}checkbox-checked`]: checked,
    [`${prefixCls}checkbox-disabled`]: props.disabled,
  });

  const wrapperCls = classNames({
    [`${prefixCls}checkbox-wrapper`]: true,
    [`${prefixCls}checkbox-wrapper-disabled`]: props.disabled,
  });

  return (
    <span className={wrapperCls} onClick={handleClick} {...others}>
      <span className={cls}>
        <input
          type="checkbox"
          hidden
          ref={inputEl}
          value={value}
          checked={checked}
          onChange={handleChange}
        />
        <span className="ant-checkbox-inner"></span>
      </span>
      <span>{props.children}</span>
    </span>
  );
};

export default Checkbox;
