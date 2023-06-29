export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for 'size'
  get size() {
    return this._size;
  }

  // Getter for 'location'
  get location() {
    return this._location;
  }

  // Override of the default valueOf() method for number casting
  valueOf() {
    return this._size;
  }

  // Override of the default toString() method for string casting
  toString() {
    return this._location;
  }
}
