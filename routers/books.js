const express = require('express')
const router = express.Router()
const bookControllers = require('../controllers/bookControllers');

router.get('/books', bookControllers.findAll)
router.post('/books', bookControllers.insertOne)
router.delete('/books/:id', bookControllers.deleteOne)
router.put('/books/:id', bookControllers.editOne)


module.exports = router;
