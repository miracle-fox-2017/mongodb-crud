const router = require('express').Router();
const booksControl = require('../controllers/books')

router.get('/', booksControl.findAll)

router.post('/', booksControl.insert)

router.put('/:id', booksControl.update)

router.delete('/:id', booksControl.remove)

module.exports = router;
