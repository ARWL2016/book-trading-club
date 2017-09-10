const { Book } = require('../db');
const { User } = require('../db');
const chalk = require('chalk');

module.exports = {
  getAllBooks(req, res) {
    Book.find()
      .then(bookData => {
        res.status(200).send(bookData);
    })
      .catch(e => console.log(e));
  },

  getBooksById(req, res) {
    const id = req.query.id;
    // console.log('get books', id);
    Book.find({userId: id})
      .then(data => {
        // console.log(data);
        res.status(200).send(data);
      });
  },

  searchBooksByTitle(req, res) {
    const title = req.params.title;
    console.log(chalk.red(title));
    Book.find({ "title" : { $regex: new RegExp(title), $options: 'i' } })
      .then(data => {
      console.log(chalk.green(data));
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(200).send('The query returned no results');
      }

    })
  },
  addBook(req, res) {
    console.log(chalk.green('ADD BOOKS'));
    const {user, bookToAdd} = req.body;

    // add user id to the book we will save
    const id = user._id;
    bookToAdd.userId = id;
    bookToAdd.username = user.username;

    Book.create(bookToAdd).then(bookData => {

      // for now, duplicate books are allowed
      User.findById(id).then((user) => {
        user.bookIDs.push(bookData._id);
        user.save()
          .then(() => {
            res.status(200).send(bookData);
            console.log(chalk.green(`Book data was added successfully`));
        });
      }).catch(e => {
        res.status(400).send('Data could not be added');
        console.log(chalk.red(e));
      });

    })
  },


  // db.profiles.update( { _id: 1 }, { $pull: { votes: { $gte: 6 } } } )
  // https://docs.mongodb.com/manual/reference/operator/update/pull/#up._S_pull

  deleteBookById(req, res) {
    const id = req.params.id;
    Book.findByIdAndRemove(id)
      .then(book => {
        User.findById(book.userId)
          .then(user => {
            const bookIdString = book._id.toString();
            const filteredArray = user.bookIDs.filter(id => id !== bookIdString);
            user.bookIDs = filteredArray;
            user.save().then(() => {
              res.status(200).send({message: 'Book was removed from the collection'});
            });
          });
      });
  },

  requestBook(req, res) {
    const {request} = req.body;
    console.log(request);

    Book.findById(request.bookId)
      .then(bookData => {
        bookData.requests.push(request);
        bookData.save()
          .then(() => {
            User.findById(request.requesterId)
            .then(userData => {
              userData.requestsFromUser.push(request);
              userData.save()
              .then(() => {
                res.status(200).send('Request was made successfully');
              })
              .catch(error => console.log(error));
            });
          })
      });
  },

  // var query = PUser.find({'userID': {$in:array}});

  getRequestsForUserId(req, res) {
    const id = req.query.id;
    console.log('get books', id);
    User.findById(id)
      .then(user => {
        const requests = user.requestsFromUser;
        let bookIds = [];
        requests.forEach(request => {
          bookIds.push(request.bookId)
        });

        Book.find({'_id': {$in:bookIds}})
          .then(books => {
            console.log(books);
            const responseData = { requests, books};
            res.status(200).send(responseData);
          });
      });
  }
}
