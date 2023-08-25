const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  it('call sendPaymentRequestToAPI with 100, and 2 and expect 102', () => {
    sendPaymentRequestToApi(100, 2);
    expect(console.log.calledWith('The total is: 102')).to.be.true;
  });

  it('call sendPaymentRequestToAPI with 10, and 101 and expect 111', () => {
    sendPaymentRequestToApi(10, 101);
    expect(console.log.calledWith('The total is: 111')).to.be.true;
  });

  afterEach(() => {
    console.log.restore();
  });
});
