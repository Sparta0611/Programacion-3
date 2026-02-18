const express = require('express');
const router = express.Router();

const sucursalesController = require('../controler/sucursalesController');
router.get('/', sucursalesController.list);
router.post('/', sucursalesController.save);
router.delete('/:idsuc', sucursalesController.delete);
router.get('/:idsuc', sucursalesController.edit);
router.post('/:idsuc', sucursalesController.update);

module.exports = router;
