import React, { useCallback } from "react";

import bcm from "../../tools/bcm";
import getMoney from "../../tools/get-money";
import formatDate from "../../tools/format-date";

import { Operation } from "../../services/operations-service";

import Button from "../button";
import { ChatIcon } from "../icons";

import OperationLogo from "./operation-logo";
import OperationName from "./operation-name";

import styles from "./operation-item.module.scss";

const b = bcm(styles);

type OperationItemProps = {
  operation: Operation;
  onMessage?: (operationId: string) => void;
};

function OperationItem({ operation, onMessage }: OperationItemProps) {
  const handleMessage = useCallback(() => {
    if (onMessage) {
      onMessage(operation.id);
    }
  }, [operation.id, onMessage]);

  return (
    <div className={b()}>
      <div className={b("bg")} />
      <div className={b("wrapper")}>
        <div className={b("left")}>
          <div className={b("logo")}>
            <OperationLogo operation={operation} />
          </div>
          <div>
            <div className={b("name")}>
              <OperationName operation={operation} />
            </div>
            <div className={b("date")}>{formatDate(operation.createdAt)}</div>
          </div>
        </div>
        <div className={b("right")}>
          <div className={b("sum")}>
            {getMoney({
              sum: operation.sum,
              currency: operation.currency,
              sign: true
            })}
          </div>
        </div>
        <Button className={b("message-button")} onClick={handleMessage}>
          <ChatIcon />
        </Button>
      </div>
    </div>
  );
}

export default OperationItem;
