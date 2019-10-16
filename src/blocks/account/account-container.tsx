import React from "react";
import { useDispatch } from "react-redux";

import useUrlParams from "../../hooks/use-url-params";

import List from "../../components/list";
import Loader from "../../components/loader/loader";
import AccountItem from "../../components/account-item";
import OperationItem from "../../components/operation-item";
import AccountLayout from "../../components/account-layout";

import { sendOperationMessage } from "../../modules/messages/actions";

import useAccountOperations from "../../hooks/use-account-operations";

import useAccount from "./use-account";

function AccountContainer() {
  const dispatch = useDispatch();
  const { accountId } = useUrlParams<{ accountId: string }>();
  const { account, loaded: loadedAccount } = useAccount(accountId);
  const { operations, loaded: loadedOperations } = useAccountOperations(
    accountId
  );

  const handleSendOperation = (operationId: string) => {
    dispatch(sendOperationMessage(operationId));
  };

  if (!loadedAccount || !loadedOperations)
    return <Loader style={{ marginTop: 200 }} />;

  if (!account)
    return (
      <AccountLayout
        returnUrl={"/accounts"}
        fallback={<div>Счет не найден</div>}
      />
    );

  return (
    <AccountLayout
      returnUrl={"/accounts"}
      info={
        <AccountItem
          id={account.id}
          logoId={account.logoId}
          totalSum={account.totalSum}
          number={account.id}
          currency={account.currency}
          interestRate={account.interestRate}
          openedAt={account.openedAt}
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

export default AccountContainer;
