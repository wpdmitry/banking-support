import { put, takeEvery, all } from "redux-saga/effects";

import AccountsService from "../../services/accounts-service";

import * as actions from "./actions";
import { GET_ACCOUNTS, GET_ACCOUNT } from "./constants";

function* getAccounts() {
  const accountsService = AccountsService.createService();

  try {
    const accounts = yield accountsService.getAccounts();
    yield put(actions.gotAccounts(accounts));
  } catch (e) {
    yield put(actions.gotAccountsError(e.message));
  }
}

function* getAccount(action: ReturnType<typeof actions.getAccount>) {
  const { accountId } = action;
  const accountsService = AccountsService.createService();

  try {
    const account = yield accountsService.getAccount(accountId);
    yield put(actions.gotAccount(account));
  } catch (e) {
    yield put(actions.gotAccountError(accountId, e.message));
  }
}

export default function*() {
  yield all([
    takeEvery(GET_ACCOUNTS, getAccounts),
    takeEvery(GET_ACCOUNT, getAccount)
  ]);
}
