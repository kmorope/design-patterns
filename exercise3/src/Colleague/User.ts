import ChatMediator from "../Mediator/ChatMediator";

export default class User {
  constructor(private name: string, private mediator: ChatMediator) {}

  send(message: string) {
    console.log(`${this.name} envía: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message: string) {
    console.log(`${this.name} recibe: ${message}`);
  }
}
