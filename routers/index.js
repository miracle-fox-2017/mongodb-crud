const express = require('express');
const router = express.Router();
const controller = require('../controllers/index')

router.get('/',controller.viewData)
router.post('/',controller.insertData)
router.put('/:id',controller.editData)
router.delete('/:id',controller.deleteData)



module.exports = router;
