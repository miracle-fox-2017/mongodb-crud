const router = require('express').Router()
const BookControllers = require('../controllers/books')

router.get('/books',BookControllers.read )
router.post('/books',BookControllers.insert )
router.delete('/books',BookControllers.destroy )
router.put('/books',BookControllers.update )

module.exports = router