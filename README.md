### Book Trading App
This book trading app was built by Alistair Willis as a Free Code Camp Project. The front end is built with Angular 4.0 / Typescript using the Angular CLI project template. Some components, such as the navbar and the form inputs, are from materialize-css, an implementation of the Angular Material design specifications. Custom styles are authored in Sass using the BEM naming conventions. For simplicity, styles are associated with elements in a 'flat' manner - ie they use a single class selector, nested selectors are avoided.   
The backend is written in Javascript on the Node platform using Express 4. Data persistence is handled by the MongoDB cloud implementation at MLab. Schema and data access methods are written using the Mongoose ODM library. The authentication module uses Bcrypt.js for password encryption and JSON Web Tokens for maintaining secure sessions.
API testing is done with Mocha and Expect. Supertest is used for mocking HTTP requests.  
The app is hosted on Heroku.  
This is a personal project, not a production grade application. It uses free dynos on Heroku and a sandbox database at MLab. It has not been subject to full cross browser testing. 

#### Technology 
- Angular 4.0 / Angular CLI
- Typescript 2.2 
- MaterializeCSS
- Node
- Express 4.15
- MongoDB 2.2 
- Mongoose 4.11 
- Google Books API
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
- binding of click on bbs fails by one
- signout appears to work even when wrong db connected - but username not removed

Enhancements
- prevent duplicate entries? - or warn
- add footer
- add mobile menu
- remove description from bookData
- add dismissable tips
- add a messaging component
- restructure server by feature

Todo 
- front end checklist
- update CLI











