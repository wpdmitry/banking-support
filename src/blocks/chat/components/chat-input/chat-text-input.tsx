import React, { useRef, useCallback, useState } from "react";

import bcm from "../../../../tools/bcm";

import { ChatSendIcon } from "../../../../components/icons";
import Button from "../../../../components/button";

import styles from "./chat-text-input.module.scss";

const b = bcm(styles);

function getLinkBreakCount(text: string) {
  return text.split("\n").length;
}

function setCursorToEnd(ele: HTMLDivElement){
  try {
    const range = document.createRange();
    const sel = window.getSelection();
    if (sel) {
      range.setStart(ele, getLinkBreakCount(ele.innerText));
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  } catch (e) {
    // ooops...
  }

}

type ChatTextInputProps = {
  onSend: (text: string) => void;
};

function ChatTextInput({ onSend }: ChatTextInputProps) {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");
  const div = useRef<HTMLDivElement>(null);

  const changeText = useCallback(
    (text: string) => {
      setText(text);
      if (div.current) {
        div.current.innerText = text;

        if (text) {
          setCursorToEnd(div.current);
        }
      }
    },
    [setText]
  );

  const handleSendText = useCallback(() => {
    onSend(text);
    changeText("");
  }, [text, changeText, onSend]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      handleSendText();
    },
    [handleSendText]
  );

  const handleInput = useCallback(() => {
    if (div.current) {
      const { innerText } = div.current;
      setText(innerText);
    }
  }, [setText]);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, [setFocused]);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, [setFocused]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const { keyCode, metaKey } = e;

      if (keyCode !== 13) return;

      e.preventDefault();

      if (metaKey) {
        changeText(`${text}\n\n`);
      } else {
        handleSendText();
      }
    },
    [handleSendText, changeText, text]
  );

  const showPlaceholder = !focused && text.trim().length === 0;

  return (
    <form onSubmit={handleSubmit} className={b()}>
      <div className={b("wrapper")}>
        <div
          ref={div}
          contentEditable
          className={b("field")}
          onInput={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
        <div className={b("placeholder", { visible: showPlaceholder })}>
          Введите сообщение...
        </div>
      </div>
      <Button className={b("send-button")}>
        <ChatSendIcon />
      </Button>
    </form>
  );
}

export default ChatTextInput;
