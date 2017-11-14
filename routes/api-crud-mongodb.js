const router = require('express').Router()
const libraryController = require('../controller/library')


//find all books
router.get('/books', libraryController.findAll)

// insert into database
router.post('/books', libraryController.insert)

// find by obejectId
router.get('/books/:id', libraryController.findById)

// edit specific data
router.put('/books/:id', libraryController.update)

// remove data
router.delete('/books/:id', libraryController.destroy)








module.exports = router
