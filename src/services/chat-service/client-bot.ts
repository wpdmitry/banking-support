import ApiService from "../api-service";
import { Message } from "./models";

function getRandomInt(from: number, to: number) {
  return from + Math.floor(Math.random() * (to - from));
}

class ClientBot {
  private states: {
    [key: string]: { desc: string; run(): void };
  };
  private currentStateId: string = "1";
  private apiService: ApiService = ApiService.createService();
  private userId: string = "1";

  constructor() {
    this.states = {
      "1": {
        desc: "Приветствие",
        run: async () => {
          await this.sendStickerMessage("15", 3000);
          this.runState("2");
        }
      },
      "2": {
        desc: "Попросить помощи",
        run: async () => {
          await this.sendTextMessage("Можете помочь?", 2000);
          this.runState("3");
        }
      },
      "3": {
        desc: "Ожидает ответа на просьбу о помощи",
        run: async () => {
          await this.waitMessage();
          this.runState("4");
        }
      },
      "4": {
        desc: "Изложить проблему в двух словах",
        run: async () => {
          await this.sendTextMessage(
            "Вчера пополнил свой рублевый вклад №2352332\nно денюжка до сих пор не поступила",
            2000
          );
          await this.sendTextMessage("Можете подтвердить пополнение?", 2000);
          this.runState("6");
        }
      },
      "6": {
        desc: "Ожидание ответа на просьбу",
        run: async () => {
          const message = await this.waitMessage();

          if (message.type !== "2") {
            await this.sendTextMessage(
              "Лучше отправить саму операцию в чат",
              1000
            );
            this.runState("6");
            return;
          }

          if (message.operationId !== "163826") {
            await this.sendStickerMessage("1", 500);
            await this.sendTextMessage(
              "Так не пойдет. Отправьте последнюю операцию пополнения",
              1000
            );
            this.runState("6");
            return;
          }

          this.runState("7");
        }
      },
      "7": {
        desc: "Поблагодарить",
        run: async () => {
          await this.sendTextMessage(
            "Да, это оно. Теперь буду спать спокойно)",
            1500
          );
          await this.sendStickerMessage("21", 500);
          this.runState("8");
        }
      },
      "8": {
        desc: "Тут всегда отсылаем рандомный стикер",
        run: async () => {
          await this.waitMessage(false);

          const stickerId = `${getRandomInt(1, 24)}`;
          await this.sendStickerMessage(stickerId, 500);

          this.runState("8");
        }
      }
    };
  }

  startDialog() {
    this.runState("1");
  }

  startEcho() {
    this.runState("8");
  }

  private async sendTextMessage(text: string, timeout: number = 0) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.apiService
          .sendMessage({
            text,
            userId: this.userId
          })
          .then(resolve);
      }, timeout);
    });
  }

  private async sendStickerMessage(stickerId: string, timeout: number = 0) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.apiService
          .sendMessage({
            stickerId,
            userId: this.userId
          })
          .then(resolve);
      }, timeout);
    });
  }

  private async waitMessage(spam: boolean = true): Promise<Message> {
    return new Promise(resolve => {
      let timerId: NodeJS.Timeout;

      const unsubscribe = this.apiService.subscribeToMessages<Message>(
        message => {
          clearInterval(timerId);
          unsubscribe();
          resolve(message);
        },
        this.userId
      );

      if (spam) {
        timerId = setInterval(() => {
          const stickerId = `${getRandomInt(22, 24)}`;
          this.sendStickerMessage(stickerId);
        }, 10000);
      }
    });
  }

  private runState(stateId: string) {
    this.changeCurrentState(stateId);
    this.runCurrentState();
  }

  private runCurrentState() {
    this.states[this.currentStateId].run();
  }

  private changeCurrentState(stateId: string) {
    this.currentStateId = stateId;
  }
}

export default ClientBot;
