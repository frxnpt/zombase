const express = require('express');
const multer = require('multer');
const uuid = require('uuid').v4;
const mysql = require("mysql");
const jwt = require('jsonwebtoken');

let imgpath = "";
const router = express.Router();
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/profiles');
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        cb(null, `${uuid()}-${originalname}`);
    }
});

const upload = multer({ storage });


router.post("/subir", upload.single("avatar"), (req, res) => {
    imgpath = "/img/profiles/" + req.file.filename;

    req.file.filename = ""
    const getCookie = (req, name) => {
        return req.headers.cookie
            .split("; ")
            .map(it => it.split("="))
            .filter(it => it[0] == name)[0][1];
    }

    let tokensito = getCookie(req, "jwt");
    let decodedJWT = jwt.verify(tokensito, process.env.JWT_SECRET);
    let jwtstring = decodedJWT.id;
    db.query("UPDATE users SET pp = ? WHERE id = ?", [imgpath, jwtstring], async(error, results) => {
        if (error) {
            console.error(error);
        }
        console.log("CAMBIANDO FOTO...");
    });
    res.redirect('/perfil/ver');
});
module.exports = router;