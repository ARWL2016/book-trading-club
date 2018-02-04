### Book Trading App

  Book Exchange is a book trading application which allows authenticated users to search for books on the Google Books API, build a book collection, view other users' collections, and send and receive requests for books. 

#### Technology 
- Angular 4.0 / Angular CLI
- Typescript 2.2 
- MaterializeCSS (Material Design implementation)
- Node
- Express 4.15
- MongoDB 2.2 
- Mongoose 4.11 
- Data: Google Books API
- Auth: JSON Web Tokens, BCrypt
- Hosting: Heroku / MLab (cloud Mongo provider)
- Testing: Karma, Mocha, Supertest, Expect
- Linting: ESLint, TSLint

#### Features 
- responsive design
- data pagination
- server side username validation
- password encryption
- progress bar and notifications for asynchronous features

#### Browser Compatibility 
- tested on Chrome, Opera, Edge, IE11

#### Useful Links
https://arwl-book-exchange.herokuapp.com 
https://github.com/ARWL2016/book-trading-club 
https://developers.google.com/books/docs/v1/using#WorkingVolumes  
https://stackoverflow.com/questions/43869961/node-js-express-redirect-all-to-angular-2-page  
http://materializecss.com/ 

 
Enhancements
- add fuller test coverage for API
- add footer
- add a messaging component
- add proper front end error handling
- extract modal as separate component

Todo 
- delete book method - currently requests for a deleted book are not auto removed
- front end checklist

Notes 
- Users BookIDs array is not being used













