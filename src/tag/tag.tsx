import React, { ReactNode, CSSProperties } from "react";
import classNames from "classnames";

import "./index.scss";
import { CloseOutlined } from "@ant-design/icons";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  closable?: boolean;
  color?: string;
  visible?: boolean;
  onClose?: Function;
}

const Tag = (props: TagProps) => {
  const {
    className,
    children,
    closable,
    color,
    onClose,
    style: pstyle,
    ...others
  } = props;
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    if ("visible" in props && typeof props.visible !== "undefined") {
      setVisible(props.visible);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.visible]);

  const customColor = color && color.match(/^#/);
  const cls = classNames({
    "ant-tag": true,
    [`ant-tag-${color}`]: color && !customColor,
    [className as string]: !!className,
  });

  const style: React.CSSProperties = { ...pstyle };
  if (customColor) {
    style.backgroundColor = color;
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    typeof onClose === "function" && onClose(e);

    if (e.defaultPrevented) {
      return;
    }
    if (!("visible" in props)) {
      setVisible(false);
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <span {...others} className={cls} style={style}>
      {children}
      {closable ? <CloseOutlined onClick={handleClick} /> : null}
    </span>
  );
};

export default Tag;
