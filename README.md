### Book Trading App
  

This is a personal project, not a production grade application. It uses free dynos on Heroku and a sandbox database at MLab. It has not been subject to full cross browser testing. 

#### Technology 
- Angular 4.0 / Angular CLI
- Typescript 2.2 
- MaterializeCSS (Material Design implementation)
- Node
- Express 4.15
- MongoDB 2.2 
- Mongoose 4.11 
- Google Books API
- Auth: JSON Web Tokens, BCrypt
- Hosting: Heroku / MLab (cloud Mongo provider)
- Testing: Karma, Mocha, Supertest, Expect

#### Useful Links
https://arwl-book-exchange.herokuapp.com 
https://github.com/ARWL2016/book-trading-club 
https://developers.google.com/books/docs/v1/using#WorkingVolumes  
https://stackoverflow.com/questions/43869961/node-js-express-redirect-all-to-angular-2-page  


Production
- add server side logging
- authenticate routes consistently
- add fuller test coverage for API

Bugs: 
- cancel request not cancelling the correct request
- binding of click on bbs fails by one
- signout appears to work even when wrong db connected - but username not removed

Enhancements
- implement delete modal on profile page
- prevent duplicate entries? - or warn
- add footer
- add paging
- add mobile menu
- remove description from bookData
- add dismissable tips
- add a messaging component
- add proper front end error handling

Todo 
- front end checklist
- create modal as separate component











