export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Get and Set 'code'
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Get and Set 'name'
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // display in the following format name (code).
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
