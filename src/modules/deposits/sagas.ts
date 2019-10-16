import { put, takeEvery, all } from "redux-saga/effects";

import DepositsService from "../../services/deposits-service";

import * as actions from "./actions";
import { GET_DEPOSIT, GET_DEPOSITS } from "./constants";

function* getDeposits() {
  const depositsService = DepositsService.createService();

  try {
    const deposits = yield depositsService.getDeposits();
    yield put(actions.gotDeposits(deposits));
  } catch (e) {
    yield put(actions.gotDepositsError(e.message));
  }
}

function* getDeposit(action: ReturnType<typeof actions.getDeposit>) {
  const { depositId } = action;
  const depositsService = DepositsService.createService();

  try {
    const deposit = yield depositsService.getDeposit(depositId);
    yield put(actions.gotDeposit(deposit));
  } catch (e) {
    yield put(actions.gotDepositError(depositId, e.message));
  }
}

export default function*() {
  yield all([
    takeEvery(GET_DEPOSITS, getDeposits),
    takeEvery(GET_DEPOSIT, getDeposit)
  ]);
}
