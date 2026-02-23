const express = require('express');
const router = express.Router();

const detalleventacontroller = require('../controler/detalleventacontroller');
router.get('/', detalleventacontroller.list);
router.post('/', detalleventacontroller.save);
router.delete('/:idcxc', detalleventacontroller.delete);
router.get('/:idcxc', detalleventacontroller.edit);
router.post('/:idcxc', detalleventacontroller.update);

module.exports = router;
