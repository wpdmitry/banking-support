import React from "react";

import bcm from "../../../../tools/bcm";

import { StickerLogo } from "../../../../components/logos";

import styles from "./chat-sticker-message.module.scss";

const b = bcm(styles);

type ChatStickerMessageProps = {
  stickerId: string;
};

function ChatStickerMessage({ stickerId }: ChatStickerMessageProps) {
  return (
    <div className={b()}>
      <StickerLogo stickerId={stickerId} className={b("logo")} />
    </div>
  );
}

export default ChatStickerMessage;
