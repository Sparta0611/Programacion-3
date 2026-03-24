const express = require('express');
const router = express.Router();

const detalleventacontroller = require('../controler/detalleventacontroller');
router.get('/', detalleventacontroller.list);
router.post('/', detalleventacontroller.save);
router.delete('/:iddetventa', detalleventacontroller.delete);
router.get('/:iddetventa', detalleventacontroller.edit);
router.post('/:iddetventa', detalleventacontroller.update);

module.exports = router;
