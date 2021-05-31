const express = require('express');
const perfilController = require('../controllers/perfil');

const router = express.Router();

router.get("/ver", perfilController.verPerfil);

router.post("/guardar", perfilController.guardarPerfil);

module.exports = router;