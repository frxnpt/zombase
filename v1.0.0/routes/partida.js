const express = require('express');
const partidaController = require('../controllers/partida');

const router = express.Router();

router.post("/guardar", partidaController.guardar);

router.get("/top", partidaController.verTop);

router.get("/misPartidas", partidaController.verMisPartidas);

router.post("/borrar/:id", partidaController.borrar);
module.exports = router;