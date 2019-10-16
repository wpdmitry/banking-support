import React from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";

// import bcm from "../../tools/bcm";
//
// import styles from "./link.module.scss";
//
// const b = bcm(styles);

function Link({ to, ...rest }: LinkProps) {
  return <RouterLink to={to} {...rest} />
}

export default Link;
