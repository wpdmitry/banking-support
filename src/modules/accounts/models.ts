import { Account } from "../../services/accounts-service";

import * as actions from "./actions";

export type AccountsState = {
  ids: string[];
  byId: { [key: string]: Account };
  loadedById: {
    [key: string]: {
      loaded: boolean;
      error: string | null;
    };
  };
  loaded: boolean;
  error: string | null;
};

export type State = {
  accounts: AccountsState;
};

type InferAction<A> = A extends { [key: string]: infer T } ? T : never;

export type AccountsAction = ReturnType<InferAction<typeof actions>>;
