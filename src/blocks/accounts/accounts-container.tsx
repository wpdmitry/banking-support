import React from "react";

import List from "../../components/list";
import Loader from "../../components/loader";

import AccountItem from "../../components/account-item";
import useAccounts from "./use-accounts";

function AccountsContainer() {
  const { accounts, loaded } = useAccounts();

  if (!loaded) return <Loader style={{ marginTop: 60 }} />;
  if (accounts.length === 0) return <div>У вас нет открытых счетов</div>;

  return (
    <List
      data={accounts}
      itemRenderer={({ rowData }) => (
        <AccountItem
          id={rowData.id}
          logoId={rowData.logoId}
          number={rowData.id}
          totalSum={rowData.totalSum}
          currency={rowData.currency}
          interestRate={rowData.interestRate}
          lastOperation={rowData.lastOperation}
          openedAt={rowData.openedAt}
        />
      )}
    />
  );
}

export default AccountsContainer;
