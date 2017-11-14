const router = require('express').Router();
const booksControl = require('../controllers/books')

router.get('/books', booksControl.findAll)

router.post('/books', booksControl.insert)

router.put('/books/:id', booksControl.update)

router.delete('/books/:id', booksControl.remove)

module.exports = router;
