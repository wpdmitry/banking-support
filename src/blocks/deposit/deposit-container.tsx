import React from "react";
import { useDispatch } from "react-redux";

import useUrlParams from "../../hooks/use-url-params";

import List from "../../components/list";
import Loader from "../../components/loader/loader";
import DepositItem from "../../components/deposit-item";
import OperationItem from "../../components/operation-item";
import AccountLayout from "../../components/account-layout";

import useAccountOperations from "../../hooks/use-account-operations";

import { sendOperationMessage } from "../../modules/messages/actions";

import useDeposit from "./use-deposit";

function DepositContainer() {
  const dispatch = useDispatch();
  const { depositId } = useUrlParams<{ depositId: string }>();
  const { deposit, loaded: loadedAccount } = useDeposit(depositId);
  const { operations, loaded: loadedOperations } = useAccountOperations(
    depositId
  );

  const handleSendOperation = (operationId: string) => {
    dispatch(sendOperationMessage(operationId));
  };
  
  if (!loadedAccount || !loadedOperations)
    return <Loader style={{ marginTop: 200 }} />;

  if (!deposit) return (
    <AccountLayout returnUrl={"/deposits"} fallback={<div>Депозит не найден</div>} />
  );

  return (
    <AccountLayout
      returnUrl={"/deposits"}
      info={
        <DepositItem
          id={deposit.id}
          logoId={deposit.logoId}
          totalSum={deposit.totalSum}
          number={deposit.id}
          currency={deposit.currency}
          interestRate={deposit.interestRate}
          openedAt={deposit.openedAt}
          closeAt={deposit.closeAt}
        />
      }
      operations={
        operations.length !== 0 ? (
          <List
            data={operations}
            itemRenderer={({ rowData }) => (
              <OperationItem
                operation={rowData}
                onMessage={handleSendOperation}
              />
            )}
          />
        ) : (
          <div>Нет ни одной операции</div>
        )
      }
    />
  );
}

export default DepositContainer;
