import { combineReducers } from "redux";

import operations from "./operations/reducer";
import { State as OperationsState } from "./operations/models";

import accounts from "./accounts/reducer";
import { State as AccountsState } from "./accounts/models";

import deposits from "./deposits/reducer";
import { State as DepositsState } from "./deposits/models";

import messages from "./messages/reducer";
import { State as MessagesState } from "./messages/models";

type State = OperationsState | AccountsState | DepositsState | MessagesState;

export default combineReducers<State>({
  operations,
  accounts,
  deposits,
  messages
});
