import React from "react";

import bcm from "../../tools/bcm";

import Link from "../link";
import { CrossIcon } from "../icons";

import styles from "./account-layout.module.scss";

const b = bcm(styles);

type AccountProps = {
  info?: React.ReactElement;
  operations?: React.ReactElement;
  fallback?: React.ReactElement;
  returnUrl: string;
};

function AccountLayout({ info, operations, fallback, returnUrl }: AccountProps) {
  return (
    <div className={b()}>
      {fallback && <div className={b("fallback")}>{fallback}</div>}
      {info && <div className={b("info")}>{info}</div>}
      {operations && (
        <div className={b("operations-container")}>
          <div className={b("operations-title")}>История операций</div>
          <div className={b("operations")}>{operations}</div>
        </div>
      )}
      <Link className={b("close-link")} to={returnUrl} title="Назад">
        <CrossIcon />
      </Link>
    </div>
  );
}

export default AccountLayout;
