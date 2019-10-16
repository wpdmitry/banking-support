import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  depositsSelector,
  depositsLoadedSelector,
  depositsErrorSelector
} from "../../modules/deposits/selectors";
import { getDeposits } from "../../modules/deposits/actions";

function useDeposits() {
  const dispatch = useDispatch();
  const deposits = useSelector(depositsSelector);
  const loaded = useSelector(depositsLoadedSelector);
  const error = useSelector(depositsErrorSelector);

  useEffect(() => {
    dispatch(getDeposits());
  }, [dispatch]);

  return { deposits, loaded, error } as const;
}

export default useDeposits;
