const express = require('express');
const router = express.Router();

const usuariocontroller = require('../controler/usuariocontroller');
router.get('/', usuariocontroller.list);
router.post('/', usuariocontroller.save);
router.delete('/:userid', usuariocontroller.delete);
router.get('/:userid', usuariocontroller.edit);
router.post('/:userid', usuariocontroller.update);

module.exports = router;
