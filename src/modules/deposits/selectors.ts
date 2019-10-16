import { createSelector } from "reselect";

import { State } from "./models";

const getIds = (state: State) => state.deposits.ids;
const getById = (state: State) => state.deposits.byId;
const getLoaded = (state: State) => state.deposits.loaded;
const getError = (state: State) => state.deposits.error;
// const getLoadedById = (state: State) => state.deposits.loadedById;
const getDepositById = (state: State, accountId: string) =>
  state.deposits.byId[accountId];
const getDepositLoadedById = (state: State, accountId: string) =>
  state.deposits.loadedById[accountId];

export const depositsSelector = createSelector(
  getIds,
  getById,
  (ids, byId) => ids.map(id => byId[id])
);

export const depositsLoadedSelector = getLoaded;

export const depositsErrorSelector = getError;

export const depositSelector = createSelector(
  getDepositById,
  deposit => {
    return deposit || null;
  }
);

export const depositLoadedSelector = createSelector(
  getDepositLoadedById,
  depositLoaded => {
    return depositLoaded ? depositLoaded.loaded : false;
  }
);

export const depositErrorSelector = createSelector(
  getDepositLoadedById,
  depositLoaded => {
    return depositLoaded ? depositLoaded.error : null;
  }
);
