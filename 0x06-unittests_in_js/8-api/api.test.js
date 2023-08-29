const { expect } = require('chai');

const URL = 'http://localhost:7865';
const request = require('request');

describe('Request to the root path', () => {
  it('Get /', (done) => {
    request(URL, (err, res, body) => {
      if (err) {
        done(err); // Pass the error to the done callback
        return;
      }
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});