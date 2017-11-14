const router = require('express').Router()
const booksScontroller = require('../controllers/booksController');

router.get('/', booksScontroller.findAll)
router.post('/', booksScontroller.insert)
router.put('/', booksScontroller.update)
router.delete('/:_id', booksScontroller.destroy)

module.exports = router;