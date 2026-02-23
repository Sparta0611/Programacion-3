const express = require('express');
const router = express.Router();

const encabezado_ventacontroller = require('../controler/encabezado_ventacontroller');
router.get('/', encabezado_ventacontroller.list);
router.post('/', encabezado_ventacontroller.save);
router.delete('/:num_venta', encabezado_ventacontroller.delete);
router.get('/:num_venta', encabezado_ventacontroller.edit);
router.post('/:num_venta', encabezado_ventacontroller.update);

module.exports = router;
