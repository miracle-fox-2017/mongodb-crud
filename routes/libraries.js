const express = require('express')
const router = express.Router()
const Library =  require('../controllers/libraryControllers')

/* GET Librarys listing. */
router.get('/',  Library.getAllBooks);
router.post('/', Library.createBook);
router.delete('/:id', Library.deleteBook);
router.put('/:id',  Library.updateBook);

module.exports = router
