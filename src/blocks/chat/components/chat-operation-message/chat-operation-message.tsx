import React from "react";

import bcm from "../../../../tools/bcm";
import getMoney from "../../../../tools/get-money";

import Loader from "../../../../components/loader";

import useOperation from "../../../../hooks/use-operation";

import {
  OperationLogo,
  OperationName
} from "../../../../components/operation-item";

import styles from "./chat-operation-message.module.scss";

const b = bcm(styles);

type ChatOperationMessageProps = {
  operationId: string;
  theme?: "dark" | "light";
};

function ChatOperationMessage({ operationId, theme = "light" }: ChatOperationMessageProps) {
  const { operation, loaded, error } = useOperation(operationId);

  if (!loaded) return <Loader />;
  if (error) return null;

  return (
    <div className={b({ theme })}>
      <div className={b("logo")}>
        <OperationLogo operation={operation} size={60} />
      </div>
      <div className={b("name")}>
        <OperationName operation={operation} />
      </div>
      <div className={b("sum")}>
        {getMoney({ sum: operation.sum, currency: operation.currency })}
      </div>
    </div>
  );
}

export default ChatOperationMessage;
