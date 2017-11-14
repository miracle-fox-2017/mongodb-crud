const router = require('express').Router()
const BookControllers = require('../controllers/books')

router.get('/books',BookControllers.read )
router.post('/books',BookControllers.insert )
router.delete('/books/:id',BookControllers.destroy )
router.put('/books/:id',BookControllers.update )

module.exports = router