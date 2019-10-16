export type Currency = {
  name: string;
};

export type BaseOperation = {
  id: string;
  sum: number;
  currency: Currency;
  accountId: string;
  createdAt: string;
};

// покупка
export interface MerchantOperation extends BaseOperation {
  type: "1";
  merchant: { id: string; name: string };
}

// кэшбек
export interface CashbackOperation extends BaseOperation {
  type: "2";
}

// выплата процентов
export interface InterestPaymentOperation extends BaseOperation {
  type: "3";
}

// перевод
export interface TransferOperation extends BaseOperation {
  type: "4";
  user: { id: string, name: string };
}

// пополнение
export interface ReplenishmentOperation extends BaseOperation {
  type: "5"
}

// плата за обслуживание
export interface ServiceChargeOperation extends BaseOperation {
  type: "6"
}

export type Operation =
  | MerchantOperation
  | CashbackOperation
  | InterestPaymentOperation
  | TransferOperation
  | ReplenishmentOperation
  | ServiceChargeOperation;
