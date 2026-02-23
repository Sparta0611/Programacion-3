const express = require('express');
const router = express.Router();

const encabezado_compracontroller = require('../controler/encabezado_compracontroller');
router.get('/', encabezado_compracontroller.list);
router.post('/', encabezado_compracontroller.save);
router.delete('/:num_compra', encabezado_compracontroller.delete);
router.get('/:num_compra', encabezado_compracontroller.edit);
router.post('/:num_compra', encabezado_compracontroller.update);

module.exports = router;
