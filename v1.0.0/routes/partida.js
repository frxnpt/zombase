const express = require('express');
const partidaController = require('../controllers/partida');

const router = express.Router();

router.post("/guardar", partidaController.guardar);

router.get("/top", partidaController.verTop);

router.post("/misPartidas", partidaController.verMisPartidas)

router.get("/misPartidasMostrar", partidaController.verMisPartidas)
module.exports = router;