const express = require('express');
const router = express.Router();

const cxpagarcontroller = require('../controler/cxpagarcontroller');
router.get('/', cxpagarcontroller.list);
router.post('/', cxpagarcontroller.save);
router.delete('/:idcxp', cxpagarcontroller.delete);
router.get('/:idcxp', cxpagarcontroller.edit);
router.post('/:idcxp', cxpagarcontroller.update);

module.exports = router;
