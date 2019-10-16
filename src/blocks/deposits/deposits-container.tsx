import React from "react";

import List from "../../components/list";
import Loader from "../../components/loader/loader";

import DepositItem from "../../components/deposit-item";
import useAccounts from "./use-deposits";

function DepositsContainer() {
  const { deposits, loaded } = useAccounts();

  if (!loaded) return <Loader style={{ marginTop: 60 }} />;
  if (deposits.length === 0) return <div>У вас нет открытых вкладов</div>;

  return (
    <List
      data={deposits}
      itemRenderer={({ rowData }) => (
        <DepositItem
          id={rowData.id}
          logoId={rowData.logoId}
          number={rowData.id}
          totalSum={rowData.totalSum}
          openedAt={rowData.openedAt}
          closeAt={rowData.closeAt}
          currency={rowData.currency}
          interestRate={rowData.interestRate}
          lastOperation={rowData.lastOperation}
        />
      )}
    />
  );
}

export default DepositsContainer;
