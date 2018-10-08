export class Dogpark {
  id: Number = 0;
  name: String = '';
  address: String = '';
  city: String = '';
  state: String = '';
  zip: Number = 0;
  lat: Number = 0;
  lon: Number = 0;
  pid: Number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
