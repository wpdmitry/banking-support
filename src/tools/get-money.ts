const moneyMap = {
  RUB: "₽",
  USD: "$"
};

type GetMoneyArgs = {
  sum: number;
  currency: { name: string };
  sign?: boolean;
};

export default ({ sum, currency, sign = false }: GetMoneyArgs) => {
  const signStr = sum > 0 ? "+ " : "- ";
  return `${sign ? signStr : ""}${Math.abs(sum)} ${moneyMap[
    currency.name as keyof typeof moneyMap
  ] || ""}`;
};
