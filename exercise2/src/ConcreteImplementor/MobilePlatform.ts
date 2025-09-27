import Platform from "../Implementor/Platform";

export default class MobilePlatform implements Platform {
  show(message: string) {
    console.log(`[MOBILE] ${message}`);
  }
}
