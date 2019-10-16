import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  accountOperationsErrorSelector,
  accountOperationsLoadedSelector,
  accountOperationsSelector
} from "../modules/operations/selectors";
import { getAccountOperations } from "../modules/operations/actions";
import { State } from "../modules/operations/models";

function useAccountOperations(accountId: string) {
  const dispatch = useDispatch();
  const operations = useSelector((state: State) =>
    accountOperationsSelector(state, accountId)
  );
  const loaded = useSelector((state: State) =>
    accountOperationsLoadedSelector(state, accountId)
  );
  const error = useSelector((state: State) =>
    accountOperationsErrorSelector(state, accountId)
  );

  useEffect(() => {
    dispatch(getAccountOperations(accountId));
  }, [accountId, dispatch]);

  return { operations, loaded, error } as const;
}

export default useAccountOperations;
