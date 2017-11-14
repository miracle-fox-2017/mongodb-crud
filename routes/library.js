const router = require('express').Router()
const library = require('../controllers/library_crud');

router.get('/', library.getAll)

router.post('/', library.insertData)

router.put('/:id', library.editData)

router.delete('/:id', library.deleteData)

module.exports = router