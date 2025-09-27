import Platform from "../Implementor/Platform";

export default class WebPlatform implements Platform {
  show(message: string) {
    console.log(`[WEB] ${message}`);
  }
}
