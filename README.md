### Book Trading App

https://github.com/ARWL2016/book-trading-club 

#### Notifications 
https://www.npmjs.com/package/angular2-notifications#documentation 
https://github.com/flauc/angular2-notifications/blob/master/docs/toastNotifications.md 

#### Remove unwanted Git history 
https://stackoverflow.com/questions/13716658/how-to-delete-all-commit-history-in-github 

Google Books API 
https://developers.google.com/books/docs/v1/using#WorkingVolumes 
Basic search: https://www.googleapis.com/books/v1/volumes?q=search+terms
https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey (containing 'keyes' in author field)
terms: inauthor: intitle: subject: 
API Key not needed for basic search

Response Data 
data.items - array of books 
data.items[0].volumeInfo - object with useful information 
data.items[0].volumeInfo.title - string 
data.items[0].volumeInfo.authors - string []
data.items[0].volumeInfo.pageCount - number 
data.items[0].volumeInfo.imageLinks.thumbnail - link string
data.items[0].volumeInfo.imageLinks.smallThumbnail - link string 
data.items[0].volumeInfo.language - string, such as 'en'

Routes 
https://stackoverflow.com/questions/43869961/node-js-express-redirect-all-to-angular-2-page 
- Remember to redirect Node routes to Angular if they are not used - else cannot GET










