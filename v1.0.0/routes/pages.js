const express = require('express');
const partidaController = require('../controllers/partida');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { jwt: req.cookies.jwt });
});
router.get("/about-us", (req, res) => {
    res.render("about-us", { jwt: req.cookies.jwt });
});
router.get("/login", (req, res) => {
    if (!req.cookies.jwt) {
        res.render("login");
    } else {
        res.status(200).redirect('/');
    }
});
module.exports = router;