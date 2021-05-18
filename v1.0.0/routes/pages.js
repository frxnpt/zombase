const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});
router.get("/about-us", (req, res) => {
    res.render("about-us");
});
router.get("/login", (req, res) => {
    res.render("login");
});
router.get("/top-players", (req, res) => {
    res.render("top-players");
});

module.exports = router;