const express = require('express');
const router = express.Router();

const tipoproductocontroller = require('../controler/tipoproductocontroller');
router.get('/', tipoproductocontroller.list);
router.post('/', tipoproductocontroller.save);
router.delete('/:idtpprod', tipoproductocontroller.delete);
router.get('/:idtpprod', tipoproductocontroller.edit);
router.post('/:idtpprod', tipoproductocontroller.update);

module.exports = router;
