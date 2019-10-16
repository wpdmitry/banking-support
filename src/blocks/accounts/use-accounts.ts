import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  accountsErrorSelector,
  accountsLoadedSelector,
  accountsSelector
} from "../../modules/accounts/selectors";
import { getAccounts } from "../../modules/accounts/actions";

function useAccounts() {
  const dispatch = useDispatch();
  const accounts = useSelector(accountsSelector);
  const loaded = useSelector(accountsLoadedSelector);
  const error = useSelector(accountsErrorSelector);

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  return { accounts, loaded, error } as const;
}

export default useAccounts;
