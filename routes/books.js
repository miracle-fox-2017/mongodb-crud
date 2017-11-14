const express = require('express')
const router  = express.Router()
const book = require('../controllers/booksControllers')

router.post('/', book.insertCollection)
router.get('/', book.findAll)
router.delete('/delete/:id', book.destroyDoc)
router.put('/edit/:id', book.updateDoc)

module.exports = router