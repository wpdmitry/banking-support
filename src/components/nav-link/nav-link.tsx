import React from "react";
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";

import bcm from "../../tools/bcm";

import styles from "./nav-link.module.scss";

const b = bcm(styles);

function NavLink({ to, ...rest }: NavLinkProps) {
  return (
    <div className={b()}>
      <RouterNavLink to={to} {...rest} />
    </div>
  );
}

export default NavLink;
