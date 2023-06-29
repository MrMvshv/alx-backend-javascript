import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = Number(amount);
    this._currency = new Currency(currency.code, currency.name);
  }

  // Get and set 'amount'
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = Number(newAmount);
  }

  // Get and set 'Currency'
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = new Currency(newCurrency.code, newCurrency.name);
  }

  // display  in the following format amount currency_name (currency_code).
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
