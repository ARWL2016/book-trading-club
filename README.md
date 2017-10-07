### Book Trading App
This book trading app was built by Alistair Willis as a Free Code Camp Project. The front end is built with Angular 4.0 / Typescript using the Angular CLI project template. Some components, such as the navbar and the form inputs, are from materialize-css, an implementation of the Angular Material design specifications. Custom styles are authored in Sass using the BEM naming conventions. For simplicity, styles are associated with elements in a 'flat' manner - ie they use a single class selector, nested selectors are avoided.   
The backend is written in Javascript on the Node platform using Express 4. Data persistence is handled by the MongoDB cloud implementation at MLab. Schema and data access methods are written using the Mongoose ODM library. The authentication module uses Bcrypt.js for password encryption and JSON Web Tokens for maintaining secure sessions.
API testing is done with Mocha and Expect. Supertest is used for mocking HTTP requests.  
The app is hosted on Heroku.  
This is a personal project, not a production grade application. It uses free dynos on Heroku and a sandbox database at MLab. It has not been subject to full cross browser testing. 

https://www.freecodecamp.org/challenges/manage-a-book-trading-club  
https://github.com/ARWL2016/book-trading-club 

Google Books API 
https://developers.google.com/books/docs/v1/using#WorkingVolumes 
Basic search: https://www.googleapis.com/books/v1/volumes?q=search+terms
https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey (containing 'keyes' in author field)
terms: inauthor: intitle: subject: 
API Key not needed for basic search

Routes 
https://stackoverflow.com/questions/43869961/node-js-express-redirect-all-to-angular-2-page 
- Remember to redirect Node routes to Angular if they are not used - else cannot GET

Features
- add a messaging component

Production
- add server side logging
- authenticate routes consistently
- add fuller test coverage for API

Bugs: 
- binding of click on bbs fails by one
- signout appears to work even when wrong db connected - but username not removed

Enhancements
- add footer
- add mobile menu
- remove description from bookData
- add dismissable tips











