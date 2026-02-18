const express = require('express');
const router = express.Router();

const areas_trabajocontroller = require('../controler/areas_trabajocontroller');
router.get('/', areas_trabajocontroller.list);
router.post('/', areas_trabajocontroller.save);
router.delete('/:idarea', areas_trabajocontroller.delete);
router.get('/:idarea', areas_trabajocontroller.edit);
router.post('/:idarea', areas_trabajocontroller.update);

module.exports = router;
