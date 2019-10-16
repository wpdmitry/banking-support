import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  accountSelector,
  accountErrorSelector,
  accountLoadedSelector
} from "../../modules/accounts/selectors";
import { getAccount } from "../../modules/accounts/actions";
import { State } from "../../modules/accounts/models";

function useAccount(accountId: string) {
  const dispatch = useDispatch();
  const account = useSelector((state: State) =>
    accountSelector(state, accountId)
  );
  const loaded = useSelector((state: State) =>
    accountLoadedSelector(state, accountId)
  );
  const error = useSelector((state: State) =>
    accountErrorSelector(state, accountId)
  );

  useEffect(() => {
    dispatch(getAccount(accountId));
  }, [dispatch, accountId]);

  return { account, loaded, error } as const;
}

export default useAccount;
