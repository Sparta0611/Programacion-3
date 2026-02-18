const express = require('express');
const router = express.Router();

const productocontroller = require('../controler/productocontroller');
router.get('/', productocontroller.list);
router.post('/', productocontroller.save);
router.delete('/:idtpprod', productocontroller.delete);
router.get('/:idtpprod', productocontroller.edit);
router.post('/:idtpprod', productocontroller.update);

module.exports = router;
