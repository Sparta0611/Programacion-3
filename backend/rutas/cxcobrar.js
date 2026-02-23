const express = require('express');
const router = express.Router();

const cxcobrarcontroller = require('../controler/cxcobrarcontroller');
router.get('/', cxcobrarcontroller.list);
router.post('/', cxcobrarcontroller.save);
router.delete('/:idcxc', cxcobrarcontroller.delete);
router.get('/:idcxc', cxcobrarcontroller.edit);
router.post('/:idcxc', cxcobrarcontroller.update);

module.exports = router;
