export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse._verifyS(name, 'name');
    this._length = HolbertonCourse._verifyN(length, 'length');
    this._students = HolbertonCourse._verifyA(students, 'students');
  }

  static _verifyS(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string.`);
    }
    return value;
  }

  static _verifyN(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number.`);
    }
    return value;
  }

  static _verifyA(value, attributeName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attributeName} must be an array.`);
    }
    return value;
  }

  // Get and Set 'name'
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = HolbertonCourse._verifyS(newName, 'name');
  }

  // Get and Set 'length'
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = HolbertonCourse._verifyN(newLength, 'length');
  }

  // Get and Set 'students'
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = HolbertonCourse._verifyA(newStudents, 'students');
  }
}
