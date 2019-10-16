import ApiService from "../api-service";

import {
  Message,
  TextMessage,
  OperationMessage,
  StickerMessage,
  Sticker
} from "./models";

class ChatService {
  constructor(private apiService: ApiService) {}

  async sendTextMessage(text: string): Promise<TextMessage> {
    return await this.apiService.sendMessage<TextMessage>({ text });
  }

  async sendOperationMessage(operationId: string): Promise<OperationMessage> {
    return await this.apiService.sendMessage<OperationMessage>({ operationId });
  }

  async sendStickerMessage(stickerId: string): Promise<StickerMessage> {
    return await this.apiService.sendMessage<StickerMessage>({ stickerId });
  }

  async getMessages(): Promise<Message[]> {
    return await this.apiService.getMessages<Message[]>();
  }

  async getStickers(): Promise<Sticker[]> {
    return await this.apiService.getStickers<Sticker[]>();
  }

  async syncMessages(messages: Message[]): Promise<boolean> {
    return await this.apiService.syncMessages<boolean>(messages);
  }

  static createService() {
    return new ChatService(ApiService.createService());
  }
}

export default ChatService;
