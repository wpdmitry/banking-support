import React from "react";

import bcm from "../../tools/bcm";
import getMoney from "../../tools/get-money";
import formatDate from "../../tools/format-date";

import Link from "../link";
import { DisclosureIcon } from "../icons";
import { AccountLogo } from "../logos";

import styles from "./account-item.module.scss";

const b = bcm(styles);

type AccountItemProps = {
  id: string;
  logoId: string;
  number: string;
  totalSum: number;
  currency: { name: string };
  interestRate: number;
  openedAt: string;
  lastOperation?: {
    sum: number;
    createdAt: string;
    currency: { name: string };
  };
};

function AccountItem({
  id,
  logoId,
  number,
  totalSum,
  currency,
  interestRate,
  openedAt,
  lastOperation
}: AccountItemProps) {
  return (
    <div className={b()}>
      <div className={b("header")}>
        <div>{`Счет № ${number}`}</div>
        <div className={b("total-sum")}>
          {getMoney({ sum: totalSum, currency })}
        </div>
      </div>

      <div className={b("info")}>{`${interestRate}%  годовых`}</div>
      <div className={b("info")}>{`Создан: ${formatDate(openedAt)}`}</div>
      {lastOperation && (
        <div className={b("info")}>
          <div>Последняя операция:</div>
          <span>{formatDate(lastOperation.createdAt)} </span>
          <span>
            <span>(</span>
            <span className={b("last-sum")}>{`${getMoney({
              sum: lastOperation.sum,
              currency: lastOperation.currency,
              sign: true
            })}`}</span>
            <span>)</span>
          </span>
        </div>
      )}

      <AccountLogo logoId={logoId} className={b("logo")} />
      {lastOperation && (
        <Link className={b("more-link")} to={`/accounts/${id}`} title="Открыть">
          <DisclosureIcon />
        </Link>
      )}
    </div>
  );
}

export default AccountItem;
