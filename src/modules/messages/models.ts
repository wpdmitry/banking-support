import { Message } from "../../services/chat-service";

import * as actions from "./actions";

export type MessagesState = {
  ids: string[];
  byId: { [key: string]: Message };
  loaded: boolean;
  error: string | null;
};

export type State = {
  messages: MessagesState;
};

type InferAction<A> = A extends { [key: string]: infer T } ? T : never;

export type MessagesAction = ReturnType<InferAction<typeof actions>>;
