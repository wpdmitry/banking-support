import { Deposit } from "../../services/deposits-service";

import * as actions from "./actions";

export type DepositsState = {
  ids: string[];
  byId: { [key: string]: Deposit };
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
  deposits: DepositsState;
};

type InferAction<A> = A extends { [key: string]: infer T } ? T : never;

export type DepositsAction = ReturnType<InferAction<typeof actions>>;
