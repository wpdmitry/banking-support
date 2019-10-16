import { createSelector } from "reselect";

import { State } from "./models";

const getById = (state: State) => state.operations.byId;
const getOperationIdsByAccountId = (state: State) =>
  state.operations.operationIdsByAccountId;
const getLoadedById = (state: State) => state.operations.loadedById;
const getLoadedByAccountId = (state: State) =>
  state.operations.loadedByAccountId;

const getOperation = (state: State, operationId: string) =>
  getById(state)[operationId];

const getOperationLoaded = (state: State, operationId: string) => {
  const operationLoaded = getLoadedById(state)[operationId];
  return operationLoaded ? operationLoaded.loaded : false;
};

const getOperationError = (state: State, operationId: string) => {
  const operationLoaded = getLoadedById(state)[operationId];
  return operationLoaded ? operationLoaded.error : null;
};

const getAccountOperationIds = (state: State, accountId: string) =>
  getOperationIdsByAccountId(state)[accountId] || [];

const getAccountOperationsLoaded = (state: State, accountId: string) => {
  const accountOperationsLoaded = getLoadedByAccountId(state)[accountId];
  return accountOperationsLoaded ? accountOperationsLoaded.loaded : false;
};

const getAccountOperationsError = (state: State, accountId: string) => {
  const accountOperationsLoaded = getLoadedByAccountId(state)[accountId];
  return accountOperationsLoaded ? accountOperationsLoaded.error : null;
};

export const operationSelector = createSelector(
  getOperation,
  operation => operation || null
);

export const operationLoadedSelector = getOperationLoaded;
export const operationErrorSelector = getOperationError;

export const accountOperationsSelector = createSelector(
  getAccountOperationIds,
  getById,
  (operationIds, byId) => operationIds.map(id => byId[id])
);

export const accountOperationsLoadedSelector = getAccountOperationsLoaded;
export const accountOperationsErrorSelector = getAccountOperationsError;
