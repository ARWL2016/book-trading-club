const expect = require('expect');
const request = require('supertest');

const { app } = require('../server.js');
const { books, populateBooks, userOneId, bookOneId } = require('./mock-data');

beforeEach(populateBooks);

describe('GET /api/book/getBooks', () => {
  it('should fetch all book data', (done) => {
    request(app)
      .get('/api/book/getBooks')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect(res => {
        expect(res.body.length).toBe(1);
        expect(res.body[0].title).toBe(books[0].title);
      })
      // this pattern suggested by docs since assertions that fail
      // will not throw when using end()
      // but end(done) also works
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('GET /api/book/getCurrentUsersBooks?', () => {
  it('should fetch a book by the User Id', (done) => {
    request(app)
      .get(`/api/book/getCurrentUsersBooks?id=${userOneId}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect(res => {
        expect(res.body[0].userId).toBe(userOneId.toString());
      })
      .end(done);
  });
});

describe('GET /api/book/searchBooks/:title', () => {
  it('find a book by its title', (done) => {
    request(app)
      .get(`/api/book/searchBooks/${books[0].title}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect(res => {
        expect(res.body[0].title).toBe(books[0].title);
      })
      .end(done);
  });
});
