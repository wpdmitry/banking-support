import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  sendTextMessage,
  sendStickerMessage
} from "../../modules/messages/actions";

import ChatLayout from "./components/chat-layout";
import ChatInput from "./components/chat-input";
import ChatMessages from "./components/chat-messages";
import ChatMessage from "./components/chat-message";

import useChatMessages from "./use-chat-messages";

function ChatContainer() {
  const dispatch = useDispatch();
  const { messages } = useChatMessages();

  const handleSendTextMessage = useCallback(
    (text: string) => {
      dispatch(sendTextMessage(text));
    },
    [dispatch]
  );

  const handleSendStickerMessage = useCallback(
    (stickerId: string) => {
      dispatch(sendStickerMessage(stickerId));
    },
    [dispatch]
  );

  return (
    <ChatLayout
      messagesCount={messages.length}
      input={
        <ChatInput
          onSendTextMessage={handleSendTextMessage}
          onSendStickerMessage={handleSendStickerMessage}
        />
      }
      messages={
        <ChatMessages
          messages={messages}
          messageRenderer={message => (
            <ChatMessage key={message.id} message={message} />
          )}
        />
      }
    />
  );
}

export default ChatContainer;
