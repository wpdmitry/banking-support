import {
  GET_ACCOUNTS,
  GOT_ACCOUNTS,
  GOT_ACCOUNTS_ERROR,
  GET_ACCOUNT,
  GOT_ACCOUNT,
  GOT_ACCOUNT_ERROR
} from "./constants";

import { AccountsState as State, AccountsAction as Action } from "./models";

const initialState: State = {
  ids: [],
  byId: {},
  loadedById: {},
  loaded: false,
  error: null
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case GET_ACCOUNTS: {
      return { ...state, error: null };
    }

    case GOT_ACCOUNTS: {
      const { accounts } = action;

      const ids = accounts.map(acc => acc.id);
      const byId = {};
      const loadedById = {};

      accounts.forEach(account => {
        // @ts-ignore
        byId[account.id] = account;
        // @ts-ignore
        loadedById[account.id] = { loaded: true, error: null };
      });

      return {
        ...state,
        ids,
        byId,
        loadedById,
        loaded: true
      };
    }

    case GOT_ACCOUNTS_ERROR: {
      const { error } = action;
      return { ...state, loaded: true, error };
    }

    case GET_ACCOUNT: {
      const { accountId } = action;

      const account = state.byId[accountId];

      if (!account) {
        return {
          ...state,
          loadedById: {
            ...state.loadedById,
            [accountId]: { loaded: false, error: null }
          }
        };
      }

      return state;
    }

    case GOT_ACCOUNT: {
      const { account } = action;

      const byId = { ...state.byId, [account.id]: account };
      const loadedById = {
        ...state.loadedById,
        [account.id]: { loaded: true, error: null }
      };

      return {
        ...state,
        byId,
        loadedById
      };
    }

    case GOT_ACCOUNT_ERROR: {
      const { accountId, error } = action;

      const loadedById = {
        ...state.loadedById,
        [accountId]: { loaded: true, error }
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
