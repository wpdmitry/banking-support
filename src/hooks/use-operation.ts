import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  operationSelector,
  operationLoadedSelector,
  operationErrorSelector
} from "../modules/operations/selectors";
import { getOperation } from "../modules/operations/actions";
import { State } from "../modules/operations/models";

function useOperation(operationId: string) {
  const dispatch = useDispatch();
  const operation = useSelector((state: State) =>
    operationSelector(state, operationId)
  );
  const loaded = useSelector((state: State) =>
    operationLoadedSelector(state, operationId)
  );
  const error = useSelector((state: State) =>
    operationErrorSelector(state, operationId)
  );

  useEffect(() => {
    dispatch(getOperation(operationId));
  }, [operationId, dispatch]);

  return { operation, loaded, error } as const;
}

export default useOperation;
