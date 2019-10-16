import React from "react";
import { Route } from "react-router-dom";

import bcm from "../../tools/bcm";

import NavLink from "../nav-link";

import styles from "./tabs.module.scss";

const b = bcm(styles);

type Tab = {
  title: string;
  path: string;
  component: React.ComponentType;
};

type TabsProps = {
  tabs: Tab[];
};

function Tabs({ tabs }: TabsProps) {
  return (
    <div className={b()}>
      <div className={b("nav-links")}>
        {tabs.map(({ title, path }) => (
          <div key={path} className={b("nav-link-container")}>
            <NavLink
              className={b("nav-link")}
              activeClassName={b("nav-link", { active: true })}
              to={path}
            >
              {title}
            </NavLink>
          </div>
        ))}
      </div>
      <div className={b("content")}>
        {tabs.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
      </div>
    </div>
  );
}

export default Tabs;
