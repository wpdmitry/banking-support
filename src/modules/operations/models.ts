import { Operation } from "../../services/operations-service";

import * as actions from "./actions";

export type OperationsState = {
  byId: { [key: string]: Operation };
  loadedById: {
    [key: string]: {
      loaded: boolean;
      error: string | null;
    };
  };
  operationIdsByAccountId: { [key: string]: string[] }
  loadedByAccountId: {
    [key: string]: {
      loaded: boolean;
      error: string | null;
    };
  };
};

export type State = {
  operations: OperationsState;
};

type InferAction<A> = A extends { [key: string]: infer T } ? T : never;

export type OperationsAction = ReturnType<InferAction<typeof actions>>;
