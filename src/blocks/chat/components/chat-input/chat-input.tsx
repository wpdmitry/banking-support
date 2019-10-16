import React from "react";

import bcm from "../../../../tools/bcm";

import { ChatTextIcon } from "../../../../components/icons";
import Button from "../../../../components/button";

import ChatStickers from "../chat-stickers";

import ChatTextInput from "./chat-text-input";

import styles from "./chat-input.module.scss";

const b = bcm(styles);

type ChatInputProps = {
  onSendTextMessage: (text: string) => void;
  onSendStickerMessage: (stickerId: string) => void;
};

function ChatInput({
  onSendTextMessage,
  onSendStickerMessage
}: ChatInputProps) {
  return (
    <div className={b()}>
      <div>
        <Button className={b("action")}>
          <ChatTextIcon />
        </Button>
        <ChatStickers onSelect={onSendStickerMessage} />
      </div>
      <ChatTextInput onSend={onSendTextMessage} />
    </div>
  );
}

export default ChatInput;
