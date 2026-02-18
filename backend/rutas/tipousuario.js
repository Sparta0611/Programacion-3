const express = require('express');
const router = express.Router();

const tipousuariocontroller = require('../controler/tipousuariocontroller');
router.get('/', tipousuariocontroller.list);
router.post('/', tipousuariocontroller.save);
router.delete('/:idtpusuario', tipousuariocontroller.delete);
router.get('/:idtpusuario', tipousuariocontroller.edit);
router.post('/:idtpusuario', tipousuariocontroller.update);

module.exports = router;
