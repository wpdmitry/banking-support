import { createStore } from "redux";

import {
  accounts,
  operations,
  stickers,
  deposits,
  supportUserId,
  users
} from "./data";

const getId = () => `${Math.floor(Math.random() * 1e8)}`;

const SET_MESSAGES = "SET_MESSAGES";
const NEW_MESSAGE = "NEW_MESSAGE";
const messagesStore = createStore((messages: any[] = [], action: any) => {
  switch (action.type) {
    case SET_MESSAGES: {
      const { messages } = action;
      return messages;
    }

    case NEW_MESSAGE: {
      const { message } = action;
      return [...messages, message];
    }

    default: {
      return messages;
    }
  }
}, []);

class ApiService {
  async getAccountOperations<T>(accountId: string): Promise<T> {
    // @ts-ignore
    return operations.filter(op => op.accountId === accountId).reverse();
  }

  async getOperation<T>(operationId: string): Promise<T> {
    const operation = operations.find(op => op.id === operationId);

    if (!operation) {
      throw new Error("Not found operation");
    }

    // @ts-ignore
    return operation;
  }

  async getAccounts<T>(): Promise<T> {
    // @ts-ignore
    return accounts.map(account => {
      const accountOperations = operations.filter(
        operation => operation.accountId === account.id
      );
      return {
        ...account,
        lastOperation: accountOperations[accountOperations.length - 1]
      };
    });
  }

  async getDeposits<T>(): Promise<T> {
    // @ts-ignore
    return deposits.map(deposit => {
      const depositOperations = operations.filter(
        operation => operation.accountId === deposit.id
      );
      return {
        ...deposit,
        lastOperation: depositOperations[depositOperations.length - 1]
      };
    });
  }

  async getAccount<T>(accountId: string): Promise<T> {
    // @ts-ignore
    const account = accounts.find(account => account.id === accountId);

    if (!account) {
      throw new Error("Not found account");
    }

    // @ts-ignore
    return account;
  }

  async getDeposit<T>(depositId: string): Promise<T> {
    // @ts-ignore
    const deposit = deposits.find(deposit => deposit.id === depositId);

    if (!deposit) {
      throw new Error("Not found deposit");
    }

    // @ts-ignore
    return deposit;
  }

  async sendMessage<T>({
    userId = supportUserId,
    text,
    stickerId,
    operationId
  }: {
    text?: string;
    stickerId?: string;
    operationId?: string;
    userId?: string;
  }): Promise<T> {
    // @ts-ignore
    const user = users[userId];

    const newMessage = {
      id: getId(),
      createdAt: new Date().toISOString(),
      state: "2",
      user
    };

    if (text) {
      // @ts-ignore
      newMessage.type = "1";
      // @ts-ignore
      newMessage.text = text;
    } else if (operationId) {
      // @ts-ignore
      newMessage.type = "2";
      // @ts-ignore
      newMessage.operationId = operationId;
    } else if (stickerId) {
      // @ts-ignore
      newMessage.type = "3";
      // @ts-ignore
      newMessage.stickerId = stickerId;
    }

    messagesStore.dispatch({ type: NEW_MESSAGE, message: newMessage });
    // @ts-ignore
    return newMessage;
  }

  async getStickers<T>(): Promise<T> {
    // @ts-ignore
    return stickers;
  }

  async getMessages<T>(userId: string = supportUserId): Promise<T> {
    // @ts-ignore
    return messagesStore.getState().map(message => ({
      ...message,
      own: message.user.id === userId
    }));
  }

  subscribeToMessages<T>(
    callback: (msg: T) => void,
    userId: string = supportUserId
  ) {
    return messagesStore.subscribe(() => {
      const messages = messagesStore.getState();
      const lastMessage = messages[messages.length - 1];

      if (lastMessage && lastMessage.user.id !== userId) {
        callback({ ...lastMessage, own: false });
      }
    });
  }

  async syncMessages<T>(messages: any[]): Promise<T> {
    messagesStore.dispatch({ type: SET_MESSAGES, messages });
    // @ts-ignore
    return true;
  }

  static createService() {
    return new ApiService();
  }
}

export default ApiService;
