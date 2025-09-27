import User from "../Colleague/User";
import ChatMediator from "../Mediator/ChatMediator";

export default class ChatRoom implements ChatMediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, user: User): void {
    for (const u of this.users) {
      if (u !== user) {
        u.receive(message);
      }
    }
  }
}
