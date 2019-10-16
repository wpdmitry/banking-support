import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  messagesSelector,
  messagesLoadedSelector,
  messagesErrorSelector
} from "../../modules/messages/selectors";
import {
  startWatchMessages,
  stopWatchMessages
} from "../../modules/messages/actions";

function useChatMessages() {
  const dispatch = useDispatch();
  const messages = useSelector(messagesSelector);
  const loaded = useSelector(messagesLoadedSelector);
  const error = useSelector(messagesErrorSelector);

  useEffect(() => {
    dispatch(startWatchMessages());
    return () => {
      dispatch(stopWatchMessages());
    };
  }, [dispatch]);

  return { messages, loaded, error } as const;
}

export default useChatMessages;
