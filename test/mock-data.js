const { ObjectID } = require('mongodb');
const { Book } = require('../api/db');

const bookOneId = new ObjectID();
const userOneId = new ObjectID();

const books = [{
  _id: bookOneId,
  title: "Dogs",
  subtitle: "History, Myth, Art",
  publisher: "Harvard University Press",
  publishedDate: "2008",
  pageCount: 208,
  description: "The juxtaposition and explanation of images as diverse as Greek pottery, Victorian jewelry, Assyrian sculpture, and Japanese netsuke, illuminates our understanding of the place of dogs in human society around the world. This book explores these cultural expressions and reflections of our deep and long-standing interest in dogs.",
  userId: userOneId,
  username: "cat",
  usersRequesting: [
      "arw"
  ],
  requestsReceived: [],
  imageLinks: {
      thumbnail: "http://books.google.com/books/content?id=KxoIW5QSrXYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  authors: [ "Catherine Johns" ]
}];

const populateBooks = (done) => {
  Book.remove({}).then(() => {
    return Book.insertMany(books);
  }).then(() => {
    done();
  });
}

module.exports = { books, populateBooks, userOneId, bookOneId };
