const express = require('express');
const router = express.Router();

const detalle_compracontroller = require('../controler/detalle_compracontroller');
router.get('/', detalle_compracontroller.list);
router.post('/', detalle_compracontroller.save);
router.delete('/:iddetcomp', detalle_compracontroller.delete);
router.get('/:iddetcomp', detalle_compracontroller.edit);
router.post('/:iddetcomp', detalle_compracontroller.update);

module.exports = router;
