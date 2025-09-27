import CarBuilder from "./Builder/CarBuilder";

const customCar = new CarBuilder()
  .setEngine("V8")
  .setColor("Rojo")
  .setSoundSystem("Bose")
  .setInterior("Cuero")
  .enableSunroof()
  .enableInfotainment()
  .build();
customCar.showConfig();
