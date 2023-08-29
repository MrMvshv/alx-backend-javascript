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

describe('Request to the cart endpoint', () => {
  it('endpoint Get /cart/:id<number>:', (done) => {
    const url = `${URL}cart/1`;
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal(`Payment methods for cart 1`);
      done();
    });
  });
  it('endpoint Get /cart/:id<not number>:', (done) => {
    const url = `${URL}cart/k`;
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});