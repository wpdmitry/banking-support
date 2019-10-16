import {
  GOT_DEPOSITS_ERROR,
  GOT_DEPOSITS,
  GOT_DEPOSIT,
  GET_DEPOSITS,
  GOT_DEPOSIT_ERROR,
  GET_DEPOSIT
} from "./constants";

import { DepositsState as State, DepositsAction as Action } from "./models";

const initialState: State = {
  ids: [],
  byId: {},
  loadedById: {},
  loaded: false,
  error: null
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case GET_DEPOSITS: {
      return { ...state, error: null };
    }

    case GOT_DEPOSITS: {
      const { deposits } = action;

      const ids = deposits.map(depos => depos.id);
      const byId = {};
      const loadedById = {};

      deposits.forEach(depos => {
        // @ts-ignore
        byId[depos.id] = depos;
        // @ts-ignore
        loadedById[depos.id] = { loaded: true, error: null };
      });

      return {
        ...state,
        ids,
        byId,
        loadedById,
        loaded: true
      };
    }

    case GOT_DEPOSITS_ERROR: {
      const { error } = action;
      return { ...state, loaded: true, error };
    }

    case GET_DEPOSIT: {
      const { depositId } = action;

      const deposit = state.byId[depositId];

      if (!deposit) {
        return {
          ...state,
          loadedById: {
            ...state.loadedById,
            [depositId]: { loaded: false, error: null }
          }
        };
      }

      return state;
    }

    case GOT_DEPOSIT: {
      const { deposit } = action;

      const byId = { ...state.byId, [deposit.id]: deposit };
      const loadedById = {
        ...state.loadedById,
        [deposit.id]: { loaded: true, error: null }
      };

      return {
        ...state,
        byId,
        loadedById
      };
    }

    case GOT_DEPOSIT_ERROR: {
      const { depositId, error } = action;

      const loadedById = {
        ...state.loadedById,
        [depositId]: { loaded: true, error }
      };

      return {
        ...state,
        loadedById
      };
    }

    default: {
      return state;
    }
  }
};
