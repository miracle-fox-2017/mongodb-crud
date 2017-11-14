var express = require('express');
var router = express.Router();
const library = require('../controllers/libraryControllers');

router.get('/', library.findAll);
router.post('/', library.addBooks);
router.delete('/:id', library.delBooks);
router.put('/:id', library.editBooks);

module.exports = router;
