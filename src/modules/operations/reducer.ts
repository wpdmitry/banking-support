import {
  GET_ACCOUNT_OPERATIONS,
  GOT_ACCOUNT_OPERATIONS,
  GOT_ACCOUNT_OPERATIONS_ERROR,
  GET_OPERATION,
  GOT_OPERATION,
  GOT_OPERATION_ERROR
} from "./constants";

import { OperationsState as State, OperationsAction as Action } from "./models";

const initialState: State = {
  byId: {},
  loadedById: {},
  operationIdsByAccountId: {},
  loadedByAccountId: {}
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case GET_ACCOUNT_OPERATIONS: {
      const { accountId } = action;

      const loadedByAccountId = state.loadedByAccountId[accountId];

      if (!loadedByAccountId) {
        return {
          ...state,
          loadedByAccountId: {
            ...state.loadedByAccountId,
            [accountId]: { loaded: false, error: null }
          }
        };
      }

      return state;
    }

    case GOT_ACCOUNT_OPERATIONS: {
      const { accountId, operations } = action;

      const operationIds = operations.map(op => op.id);
      const byId = { ...state.byId };
      const loadedById = { ...state.loadedById };

      operations.forEach(operation => {
        // @ts-ignore
        byId[operation.id] = operation;
        loadedById[operation.id] = { loaded: true, error: null };
      });

      const operationIdsByAccountId = {
        ...state.operationIdsByAccountId,
        [accountId]: operationIds
      };

      const loadedByAccountId = {
        ...state.loadedByAccountId,
        [accountId]: { loaded: true, error: null }
      };

      return {
        ...state,
        byId,
        loadedById,
        operationIdsByAccountId,
        loadedByAccountId
      };
    }

    case GOT_ACCOUNT_OPERATIONS_ERROR: {
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

    case GET_OPERATION: {
      const { operationId } = action;

      const loadedById = state.loadedById[operationId];

      if (!loadedById) {
        return {
          ...state,
          loadedById: {
            ...state.loadedById,
            [operationId]: { loaded: false, error: null }
          }
        };
      }

      return state;
    }

    case GOT_OPERATION: {
      const { operation } = action;

      const loadedById = {
        ...state.loadedById,
        [operation.id]: { loaded: true, error: null }
      };

      const byId = {
        ...state.byId,
        [operation.id]: operation
      };

      return {
        ...state,
        byId,
        loadedById
      };
    }

    case GOT_OPERATION_ERROR: {
      const { operationId, error } = action;

      const loadedById = {
        ...state.loadedById,
        [operationId]: { loaded: true, error }
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
