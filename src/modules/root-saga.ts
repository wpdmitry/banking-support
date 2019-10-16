import { all, call } from "redux-saga/effects";

import operationsSaga from "./operations/sagas";
import accountsSaga from "./accounts/sagas";
import depositsSaga from "./deposits/sagas";
import messagesSaga from "./messages/sagas";

export default function*() {
  yield all([
    call(accountsSaga),
    call(depositsSaga),
    call(messagesSaga),
    call(operationsSaga)
  ]);
}
