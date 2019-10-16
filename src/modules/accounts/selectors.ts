import { createSelector } from "reselect";

import { State } from "./models";

const getIds = (state: State) => state.accounts.ids;
const getById = (state: State) => state.accounts.byId;
const getLoaded = (state: State) => state.accounts.loaded;
const getError = (state: State) => state.accounts.error;
// const getLoadedById = (state: State) => state.accounts.loadedById;
const getAccountById = (state: State, accountId: string) =>
  state.accounts.byId[accountId];
const getAccountLoadedById = (state: State, accountId: string) =>
  state.accounts.loadedById[accountId];

export const accountsSelector = createSelector(
  getIds,
  getById,
  (ids, byId) => ids.map(id => byId[id])
);

export const accountsLoadedSelector = getLoaded;

export const accountsErrorSelector = getError;

export const accountSelector = createSelector(getAccountById, account => {
  return account || null;
});

export const accountLoadedSelector = createSelector(getAccountLoadedById, accountLoaded => {
  return accountLoaded ? accountLoaded.loaded : false;
});

export const accountErrorSelector = createSelector(getAccountLoadedById, accountLoaded => {
  return accountLoaded ? accountLoaded.error : null;
});
