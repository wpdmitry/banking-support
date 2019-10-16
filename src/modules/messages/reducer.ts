import { GET_MESSAGES, GOT_MESSAGES, GOT_MESSAGES_ERROR } from "./constants";

import { MessagesState as State, MessagesAction as Action } from "./models";

const initialState: State = {
  ids: [],
  byId: {},
  loaded: false,
  error: null
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case GET_MESSAGES: {
      return { ...state, error: null };
    }

    case GOT_MESSAGES: {
      const { messages } = action;

      const ids = messages.map(msg => msg.id);
      const byId = {};
      messages.forEach(msg => {
        // @ts-ignore
        byId[msg.id] = msg;
      });

      return {
        ...state,
        ids,
        byId,
        loaded: true
      };
    }

    case GOT_MESSAGES_ERROR: {
      const { error } = action;
      return { ...state, loaded: true, error };
    }

    default: {
      return state;
    }
  }
};
