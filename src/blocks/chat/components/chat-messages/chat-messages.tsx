import React from "react";

import bcm from "../../../../tools/bcm";

import styles from "./chat-messages.module.scss";

const b = bcm(styles);

type ChatMessages<T> = {
  messages: T[];
  messageRenderer: (message: T) => React.ReactElement;
};

function ChatMessages<T>({ messages, messageRenderer }: ChatMessages<T>) {
  return <div className={b()}>{messages.map(messageRenderer)}</div>;
}

export default ChatMessages;
