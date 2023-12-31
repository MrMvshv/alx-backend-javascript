export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (!this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }


  // Getter for 'sqft'
  get sqft() {
    return this._sqft;
  }
}
