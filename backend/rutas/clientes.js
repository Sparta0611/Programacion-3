const express = require('express');
const router = express.Router();

const clientesController = require('../controler/clientescontroller');
router.get('/', clientesController.list);
router.post('/', clientesController.save);
router.delete('/:idcliente', clientesController.delete);
router.get('/:idcliente', clientesController.edit);
router.post('/:idcliente', clientesController.update);

module.exports = router;
