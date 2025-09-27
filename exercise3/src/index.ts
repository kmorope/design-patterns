import User from "./Colleague/User";
import ChatRoom from "./ConcreteMediator/ChatRoom";

const chatRoom = new ChatRoom();

const user1 = new User("Felipe", chatRoom);
const user2 = new User("Luis", chatRoom);
const user3 = new User("Pedro", chatRoom);

chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

user1.send("¡Hola a todos!");
user3.send("Hola Felipe 👋");
