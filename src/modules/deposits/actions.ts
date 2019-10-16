import { Deposit } from "../../services/deposits-service";

import {
  GET_DEPOSIT,
  GET_DEPOSITS,
  GOT_DEPOSIT_ERROR,
  GOT_DEPOSIT,
  GOT_DEPOSITS,
  GOT_DEPOSITS_ERROR
} from "./constants";

export function getDeposits() {
  return { type: GET_DEPOSITS } as const;
}

export function gotDeposits(deposits: Deposit[]) {
  return { type: GOT_DEPOSITS, deposits } as const;
}

export function gotDepositsError(error: string) {
  return { type: GOT_DEPOSITS_ERROR, error } as const;
}

export function getDeposit(depositId: string) {
  return { type: GET_DEPOSIT, depositId } as const;
}

export function gotDeposit(deposit: Deposit) {
  return { type: GOT_DEPOSIT, deposit } as const;
}

export function gotDepositError(depositId: string, error: string) {
  return { type: GOT_DEPOSIT_ERROR, depositId, error } as const;
}
