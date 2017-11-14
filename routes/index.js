var express = require('express');
var router = express.Router();
const bookController = require('../controllers/book');

/* GET home page. */
router.get('/', bookController.getAllBook);

router.post('/', bookController.createOneBook);

router.delete('/:bookId', bookController.deleteOneBook);
router.put('/:bookId', bookController.updateOneBook);

module.exports = router;