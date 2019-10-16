import { Account } from "../../services/accounts-service";

import {
  GET_ACCOUNT,
  GOT_ACCOUNT,
  GET_ACCOUNTS,
  GOT_ACCOUNTS,
  GOT_ACCOUNTS_ERROR,
  GOT_ACCOUNT_ERROR
} from "./constants";

export function getAccounts() {
  return { type: GET_ACCOUNTS } as const;
}

export function gotAccounts(accounts: Account[]) {
  return { type: GOT_ACCOUNTS, accounts } as const;
}

export function gotAccountsError(error: string) {
  return { type: GOT_ACCOUNTS_ERROR, error } as const;
}

export function getAccount(accountId: string) {
  return { type: GET_ACCOUNT, accountId } as const;
}

export function gotAccount(account: Account) {
  return { type: GOT_ACCOUNT, account } as const;
}

export function gotAccountError(accountId: string, error: string) {
  return { type: GOT_ACCOUNT_ERROR, accountId, error } as const;
}
