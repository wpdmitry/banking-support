import { Currency, Operation } from "../operations-service";

export type Account = {
  id: string;
  logoId: string;
  currency: Currency;
  interestRate: number;
  openedAt: string;
  totalSum: number;
  lastOperation?: Operation;
};
