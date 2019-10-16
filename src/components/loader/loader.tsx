import React from "react";

import bcm from "../../tools/bcm";
import cn from "../../tools/classnames";

import styles from "./loader.module.scss";

const b = bcm(styles);

type LoaderProps = {
  size?: "s" | "m" | "l";
  className?: string;
  style?: React.CSSProperties;
};

function Loader({ size = "s", className, style }: LoaderProps) {
  return (
    <div className={cn(b(), className)} style={style}>
      <div className={b("content", { size })} />
    </div>
  );
}

export default Loader;
