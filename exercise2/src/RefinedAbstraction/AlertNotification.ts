import { Notification } from "../Abstraction/Notification";

export default class AlertNotification extends Notification {
  send(message: string) {
    this.platform.show(`⚠️ Alerta: ${message}`);
  }
}
