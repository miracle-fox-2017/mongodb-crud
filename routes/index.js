var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.getAllBook);

router.post('/', indexController.createOneBook);

router.delete('/:bookId', indexController.deleteOneBook);
router.put('/:bookId', indexController.updateOneBook);

module.exports = router;