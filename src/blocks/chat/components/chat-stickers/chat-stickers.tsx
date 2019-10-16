import React from "react";

import bcm from "../../../../tools/bcm";

import { StickerLogo } from "../../../../components/logos";
import { ChatStickersIcon } from "../../../../components/icons";
import Popup from "../../../../components/popup";
import Button from "../../../../components/button";

import useStickers from "../../use-stickers";

import styles from "./chat-stickers.module.scss";

const b = bcm(styles);

type ChatStickersProps = {
  onSelect: (stickerId: string) => void;
};

function ChatStickers({ onSelect }: ChatStickersProps) {
  const { stickers } = useStickers();

  return (
    <Popup
      trigger={
        <Button>
          <ChatStickersIcon />
        </Button>
      }
      position="top left"
    >
      {close => (
        <div className={b()}>
          <div className={b("items")}>
            {stickers.map(sticker => (
              <Button
                key={sticker.id}
                className={b("item")}
                onClick={() => {
                  onSelect(sticker.id);
                  close();
                }}
              >
                <StickerLogo
                  width="100%"
                  stickerId={sticker.id}
                />
              </Button>
            ))}
          </div>
        </div>
      )}
    </Popup>
  );
}

export default ChatStickers;
