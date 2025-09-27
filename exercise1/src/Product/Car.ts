export default class Car {
  engine?: string;
  color?: string;
  wheels?: string;
  soundSystem?: string;
  interior?: string;
  sunroof?: boolean;
  infotainment?: boolean;

  showConfig() {
    console.log(this);
  }
}
