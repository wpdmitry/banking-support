import React from "react";

import bcm from "../../tools/bcm";

import { Operation } from "../../services/operations-service";

import styles from "./operation-name.module.scss";

const b = bcm(styles);

type OperationNameProps = {
  operation: Operation;
};

function OperationName({ operation }: OperationNameProps) {
  return (
    <div className={b()}>
      {operation.type === "1" && operation.merchant.name}
      {operation.type === "2" && "Выплата вознаграждения"}
      {operation.type === "3" && "Выплата процентов"}
      {operation.type === "4" && operation.user.name}
      {operation.type === "5" && "Пополнение"}
      {operation.type === "6" && "Плата за обслуживание"}
    </div>
  );
}

export default OperationName;
