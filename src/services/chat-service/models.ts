type MessageUser = {
  id: string;
  name: string;
};

// отправляется | доставлено | ошибка | прочитано
type MessageState = "1" | "2" | "3" | "4";

type BaseMessage = {
  id: string;
  user: MessageUser;
  state: MessageState;
  createdAt: string;
  own: boolean;
};

export interface TextMessage extends BaseMessage {
  type: "1";
  text: string;
}

export interface OperationMessage extends BaseMessage {
  type: "2";
  operationId: string;
}

export interface StickerMessage extends BaseMessage {
  type: "3";
  stickerId: string;
}

export type Message = TextMessage | OperationMessage | StickerMessage;

export type Sticker = {
  id: string;
};
