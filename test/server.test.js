const request = require('supertest');
const expect = require('expect');

const { app } = require('../server.js');

describe('Server Tests', () => {
  it('should run the test script', () => {
    expect(true).toBe(true);
  });
});

describe('Root GET request', () => {
  it('should respond with html', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .expect('Content-Length', '858')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});




