# mongodb-crud
crud with mongodb (native drive),
use insomnia or postman to access route

#### List of User routes:
Route | HTTP | Description
----- | ---- | -----------
`/books` | GET | Get all the book info
`/books` | POST | Create a book
`/books/edit/:id` | PUT | Update a book
`/books/delete/:id` | DELETE | delete a book with id


## Usage
#### With only npm:
```
npm install
npm start
```

Acces the website via API via  `http://localhost:3000/books`