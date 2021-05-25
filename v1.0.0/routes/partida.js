const express = require('express');
const partidaController = require('../controllers/partida');

const router = express.Router();

router.post("/guardar", partidaController.guardar);
module.exports = router;