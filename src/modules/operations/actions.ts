import { Operation } from "../../services/operations-service";

import {
  GET_ACCOUNT_OPERATIONS,
  GOT_ACCOUNT_OPERATIONS,
  GOT_ACCOUNT_OPERATIONS_ERROR,
  GET_OPERATION,
  GOT_OPERATION,
  GOT_OPERATION_ERROR
} from "./constants";

export function getAccountOperations(accountId: string) {
  return { type: GET_ACCOUNT_OPERATIONS, accountId } as const;
}

export function gotAccountOperations(
  accountId: string,
  operations: Operation[]
) {
  return { type: GOT_ACCOUNT_OPERATIONS, accountId, operations } as const;
}

export function gotAccountOperationsError(accountId: string, error: string) {
  return { type: GOT_ACCOUNT_OPERATIONS_ERROR, accountId, error } as const;
}

export function getOperation(operationId: string) {
  return { type: GET_OPERATION, operationId } as const;
}

export function gotOperation(operation: Operation) {
  return { type: GOT_OPERATION, operation } as const;
}

export function gotOperationError(operationId: string, error: string) {
  return { type: GOT_OPERATION_ERROR, operationId, error } as const;
}
