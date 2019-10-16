import React from "react";

import bcm from "../../../../tools/bcm";

import styles from "./chat-text-message.module.scss";

const b = bcm(styles);

type ChatTextMessageProps = {
  text: string;
  theme?: "dark" | "light";
};

function ChatTextMessage({ text, theme = "light" }: ChatTextMessageProps) {
  return <div className={b({ theme })}>{text}</div>;
}

export default ChatTextMessage;
