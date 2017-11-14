const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController')
/* GET users listing. */
router.get('/', bookController.findAllDataBooks)
router.post('/', bookController.insertIntoBooks)
router.put('/:id', bookController.updateDataBook)
router.delete('/:id', bookController.deleteDataBook)
module.exports = router;
