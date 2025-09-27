import Platform from "../Implementor/Platform";

export abstract class Notification {
  protected platform: Platform;
  constructor(platform: Platform) {
    this.platform = platform;
  }
  abstract send(message: string): void;
}
