import React from "react";

import bcm from "../../../../tools/bcm";
import { Message } from "../../../../services/chat-service";

import { UserLogo } from "../../../../components/logos";

import ChatTextMessage from "../chat-text-message";
import ChatOperationMessage from "../chat-operation-message";
import ChatStickerMessage from "../chat-sticker-message";

import styles from "./chat-message.module.scss";

const b = bcm(styles);

type ChatMessageProps = {
  message: Message;
};

function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={b({ own: message.own })}>
      {!message.own && <div className={b("name")}>{message.user.name}</div>}
      <div className={b("wrapper")}>
        {!message.own && (
          <UserLogo userId={message.user.id} className={b("logo")} />
        )}
        <div>
          {message.type === "1" && (
            <ChatTextMessage
              text={message.text}
              theme={message.own ? "dark" : "light"}
            />
          )}
          {message.type === "2" && (
            <ChatOperationMessage
              operationId={message.operationId}
              theme={message.own ? "dark" : "light"}
            />
          )}
          {message.type === "3" && (
            <ChatStickerMessage stickerId={message.stickerId} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
