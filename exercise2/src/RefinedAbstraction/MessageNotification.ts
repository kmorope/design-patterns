import { Notification } from "../Abstraction/Notification";

export default class MessageNotification extends Notification {
  send(message: string) {
    this.platform.show(`Mensaje: ${message}`);
  }
}
