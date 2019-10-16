import { Message } from "../../services/chat-service";

import {
  START_WATCH_MESSAGES,
  STOP_WATCH_MESSAGES,
  SEND_TEXT_MESSAGE,
  SEND_OPERATION_MESSAGE,
  SEND_STICKER_MESSAGE,
  GET_MESSAGES,
  GOT_MESSAGES,
  GOT_MESSAGES_ERROR
} from "./constants";

export function sendTextMessage(text: string) {
  return { type: SEND_TEXT_MESSAGE, text } as const;
}

export function sendOperationMessage(operationId: string) {
  return { type: SEND_OPERATION_MESSAGE, operationId } as const;
}

export function sendStickerMessage(stickerId: string) {
  return { type: SEND_STICKER_MESSAGE, stickerId } as const;
}

export function getMessages() {
  return { type: GET_MESSAGES } as const;
}

export function gotMessages(messages: Message[]) {
  return { type: GOT_MESSAGES, messages } as const;
}

export function gotMessagesError(error: string) {
  return { type: GOT_MESSAGES_ERROR, error } as const;
}

export function startWatchMessages() {
  return { type: START_WATCH_MESSAGES } as const;
}

export function stopWatchMessages() {
  return { type: STOP_WATCH_MESSAGES } as const;
}
