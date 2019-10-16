import {
  put,
  takeEvery,
  all,
  fork,
  take,
  delay,
  select
} from "redux-saga/effects";

import ChatService from "../../services/chat-service";
import ClientBot from "../../services/chat-service/client-bot";

import * as actions from "./actions";
import {
  SEND_TEXT_MESSAGE,
  SEND_OPERATION_MESSAGE,
  SEND_STICKER_MESSAGE,
  GET_MESSAGES,
  START_WATCH_MESSAGES,
  STOP_WATCH_MESSAGES
} from "./constants";

import { messagesSelector } from "./selectors";

function* getMessages() {
  const messagesService = ChatService.createService();

  try {
    const messages = yield messagesService.getMessages();
    yield put(actions.gotMessages(messages));
  } catch (e) {
    yield put(actions.gotMessagesError(e.message));
  }
}

function* messagesWatcher() {
  while (true) {
    yield put(actions.getMessages());
    yield delay(5000);
  }
}

function* startWatchMessages() {
  const watcher = yield fork(messagesWatcher);
  yield take(STOP_WATCH_MESSAGES);
  watcher.cancel();
}

function* sendTextMessage(action: ReturnType<typeof actions.sendTextMessage>) {
  const { text } = action;

  if (text.trim().length === 0) return;

  const messagesService = ChatService.createService();

  try {
    yield messagesService.sendTextMessage(text);
    yield getMessages();
  } catch (e) {
    // ooops...
  }
}

function* sendOperationMessage(
  action: ReturnType<typeof actions.sendOperationMessage>
) {
  const { operationId } = action;
  const messagesService = ChatService.createService();

  try {
    yield messagesService.sendOperationMessage(operationId);
    yield getMessages();
  } catch (e) {
    // ooops...
  }
}

function* sendStickerMessage(
  action: ReturnType<typeof actions.sendStickerMessage>
) {
  const { stickerId } = action;
  const messagesService = ChatService.createService();

  try {
    yield messagesService.sendStickerMessage(stickerId);
    yield getMessages();
  } catch (e) {
    // ooops...
  }
}

function* rehydrateMessages() {
  try {
    const messages = yield select(messagesSelector);
    const messagesService = ChatService.createService();
    yield messagesService.syncMessages(messages);
    const clientBot = new ClientBot();

    if (messages.length === 0) {
      clientBot.startDialog();
    } else {
      clientBot.startEcho();
    }
  } catch (e) {
    // ooops...
  }
}

export default function*() {
  yield all([
    takeEvery(GET_MESSAGES, getMessages),
    takeEvery(START_WATCH_MESSAGES, startWatchMessages),
    takeEvery(SEND_TEXT_MESSAGE, sendTextMessage),
    takeEvery(SEND_OPERATION_MESSAGE, sendOperationMessage),
    takeEvery(SEND_STICKER_MESSAGE, sendStickerMessage),
    takeEvery("persist/REHYDRATE", rehydrateMessages)
  ]);
}
