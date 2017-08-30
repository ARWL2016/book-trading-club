const request = require('request');

const bookSearch = function (search, author, title) {
  const url =`https://www.googleapis.com/books/v1/volumes?q=${search}${author}${title}`;

  request(url, (err, res, body) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
}


