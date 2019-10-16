import { Account } from "../accounts-service";

export interface Deposit extends Account {
  closeAt: string;
}
