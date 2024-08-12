import React from "react";
import classNames from "classnames";

import "./index.scss";

export interface AffixProps extends React.HTMLAttributes<HTMLDivElement> {
  offsetTop?: number;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Affix = (props: AffixProps) => {
  const { className, children, style, offsetTop = 0 } = props;
  const [wraperStyle, setWrapperStyle] = React.useState<React.CSSProperties>();
  const [affixed, setAffixed] = React.useState(false);

  const wraperRefCB = React.useCallback((node: HTMLDivElement) => {
    if (!node) return;
    function updatePosition() {
      const { top, width, height } = node.getBoundingClientRect();
      console.log("🚀 ~ updatePosition ~ height:", height);
      console.log("🚀 ~ updatePosition ~ width:", width);

      if (
        (top <= offsetTop && !affixed) ||
        (affixed &&
          (width !== wraperStyle?.width || height !== wraperStyle?.height))
      ) {
        setWrapperStyle({
          width,
          height,
        });
        setAffixed(true);
      } else if (top > offsetTop) {
        setAffixed(false);
      }
    }
    window.addEventListener("scroll", updatePosition, false);

    const ob = new ResizeObserver(updatePosition);
    ob.observe(node);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cls = classNames({
    "ant-affix": affixed,
    [className as string]: !!className,
  });

  return (
    <div style={style} ref={wraperRefCB}>
      {affixed ? <div style={wraperStyle} /> : null}
      <div
        style={
          affixed
            ? {
                position: "fixed",
                top: offsetTop,
                ...wraperStyle,
              }
            : undefined
        }
        className={cls}
      >
        {children}
      </div>
    </div>
  );
};

export default Affix;
