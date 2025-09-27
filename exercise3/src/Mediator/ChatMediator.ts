import User from "../Colleague/User";

export default interface ChatMediator {
  sendMessage(message: string, user: User): void;
  addUser(user: User): void;
}
