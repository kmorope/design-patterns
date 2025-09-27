import Car from "../Product/Car";

export default class CarBuilder {
  private car: Car;
  constructor() {
    this.car = new Car();
  }

  setEngine(engine: string) {
    this.car.engine = engine;
    return this;
  }

  setColor(color: string) {
    this.car.color = color;
    return this;
  }

  setWheels(wheels: string) {
    this.car.wheels = wheels;
    return this;
  }

  setSoundSystem(model: string) {
    this.car.soundSystem = model;
    return this;
  }

  setInterior(type: string) {
    this.car.interior = type;
    return this;
  }

  enableSunroof() {
    this.car.sunroof = true;
    return this;
  }

  enableInfotainment() {
    this.car.infotainment = true;
    return this;
  }

  build(): Car {
    return this.car;
  }
}
