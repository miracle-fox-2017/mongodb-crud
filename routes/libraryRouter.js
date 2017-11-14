let express = require('express')
let router = express.Router()
let libraryController = require('../controllers/libraryController.js')

// Insert new document to library
router.post('/',libraryController.insertDataBooks)

// Find all documents in library
router.get('/',libraryController.findAllBooks)

// Update book by id
router.put('/:id',libraryController.updateBookById)

// Delete book by id
router.delete('/:id',libraryController.removeBookById)

module.exports = router
