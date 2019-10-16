import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  depositSelector,
  depositLoadedSelector,
  depositErrorSelector
} from "../../modules/deposits/selectors";
import { getDeposit } from "../../modules/deposits/actions";
import { State } from "../../modules/deposits/models";

function useDeposit(accountId: string) {
  const dispatch = useDispatch();
  const deposit = useSelector((state: State) =>
    depositSelector(state, accountId)
  );
  const loaded = useSelector((state: State) =>
    depositLoadedSelector(state, accountId)
  );
  const error = useSelector((state: State) =>
    depositErrorSelector(state, accountId)
  );

  useEffect(() => {
    dispatch(getDeposit(accountId));
  }, [dispatch, accountId]);

  return { deposit, loaded, error } as const;
}

export default useDeposit;
