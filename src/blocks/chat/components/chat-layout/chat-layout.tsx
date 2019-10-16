import React, { useRef, useEffect } from "react";

import bcm from "../../../../tools/bcm";

import styles from "./chat-layout.module.scss";

const b = bcm(styles);

type ChatProps = {
  input: React.ReactElement;
  messages: React.ReactElement;
  messagesCount?: number;
};

function ChatLayout({ input, messages, messagesCount }: ChatProps) {
  const messagesRef = useRef<HTMLDivElement>(null);
  const lastScrollHeight = useRef<number>(0);

  useEffect(() => {
    if (messagesRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = messagesRef.current;
      const isBottom = lastScrollHeight.current - scrollTop <= clientHeight;
      lastScrollHeight.current = scrollHeight;

      if (isBottom) {
        setTimeout(() => {
          if (messagesRef.current) {
            const { scrollHeight } = messagesRef.current;
            messagesRef.current.scrollTo(0, scrollHeight);
          }
        }, 100); // magic ;)
      }
    }
  }, [messagesCount]);

  return (
    <div className={b()}>
      <div ref={messagesRef} className={b("messages")}>
        {messages}
      </div>
      <div className={b("input")}>{input}</div>
    </div>
  );
}

export default ChatLayout;
