const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books')

/* GET books listing. */

router.post('/', booksController.create);
router.get('/', booksController.findAll);
router.put('/:id', booksController.update);
router.delete('/:id', booksController.destroy);

module.exports = router;
