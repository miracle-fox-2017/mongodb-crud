const router = require('express').Router();
const controller = require('../controller/index')


router.get('/', controller.getAllBooks)
router.post('/', controller.createOneBook);
router.put('/:id', controller.updateBook);
router.delete('/:id', controller.deleteBook);

module.exports = router;