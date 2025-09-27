import MobilePlatform from "./ConcreteImplementor/MobilePlatform";
import WebPlatform from "./ConcreteImplementor/WebPlatform";
import AlertNotification from "./RefinedAbstraction/AlertNotification";
import MessageNotification from "./RefinedAbstraction/MessageNotification";

const notif1 = new MessageNotification(new WebPlatform());
notif1.send("Hola desde la web");

const notif2 = new AlertNotification(new MobilePlatform());
notif2.send("Batería baja");
