const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('check two numbers without float part are the expected sum', () => {
    assert.equal(calculateNumber(1, 5), 6);
    assert.equal(calculateNumber(1, 7), 8);
  });
  it('rounds numbers and returns sum', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(2.2, 3.7), 6);
  });
  it('returns correct sum of rounded numbers', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(4.2, 4.5), 9);
  });
  it('sum is executed correctly with a 0', () => {
    assert.equal(calculateNumber(0, 8), 8);
    assert.equal(calculateNumber(10, 0), 10);
    assert.equal(calculateNumber(0, 16), 16);
    assert.equal(calculateNumber(-50, 0), -50);  
  });
  it('check that the sum is working correctly with negative numbers', function () {
    assert.equal(calculateNumber(10, -5), 5);
    assert.equal(calculateNumber(-8, -12), -20);
    assert.equal(calculateNumber(-999, -1), -1000);
  });
  it('Check first number is float number and second number is integer number', function () {
    assert.equal(calculateNumber(0.8, 15), 16);
    assert.equal(calculateNumber(0.4, 16), 16);
  });
});
