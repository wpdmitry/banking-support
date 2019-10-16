import { createSelector } from "reselect";

import { State } from "./models";

const getIds = (state: State) => state.messages.ids;
const getById = (state: State) => state.messages.byId;
const getLoaded = (state: State) => state.messages.loaded;
const getError = (state: State) => state.messages.error;

export const messagesSelector = createSelector(
  getIds,
  getById,
  (ids, byId) => ids.map(id => byId[id])
);

export const messagesLoadedSelector = getLoaded;

export const messagesErrorSelector = getError;
