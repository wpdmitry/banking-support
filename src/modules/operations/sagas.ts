import { put, takeEvery, all } from "redux-saga/effects";

import OperationsService from "../../services/operations-service";

import * as actions from "./actions";
import { GET_OPERATION, GET_ACCOUNT_OPERATIONS } from "./constants";

function* getAccountOperations(action: ReturnType<typeof actions.getAccountOperations>) {
  const { accountId } = action;
  const operationsService = OperationsService.createService();

  try {
    const operations = yield operationsService.getAccountOperations(accountId);
    yield put(actions.gotAccountOperations(accountId, operations));
  } catch (e) {
    yield put(actions.gotAccountOperationsError(accountId, e.message));
  }
}

function* geOperation(action: ReturnType<typeof actions.getOperation>) {
  const { operationId } = action;
  const operationsService = OperationsService.createService();

  try {
    const operation = yield operationsService.getOperation(operationId);
    yield put(actions.gotOperation(operation));
  } catch (e) {
    yield put(actions.gotOperationError(operationId, e.message));
  }
}

export default function*() {
  yield all([
    takeEvery(GET_ACCOUNT_OPERATIONS, getAccountOperations),
    takeEvery(GET_OPERATION, geOperation)
  ]);
}
