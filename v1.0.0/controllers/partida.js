const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const session = require("express-session");
const express = require("express");
var Handlebars = require('hbs');


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.guardar = (req, res) => {
    console.log(req.body);
    const { token, fecha, puntuacion } = req.body;

    let decodedJWT = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedJWT.id);
    db.query('INSERT INTO games SET ?', { jugador: decodedJWT.id, fecha: fecha, puntuacion: puntuacion, descripción: "" }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            console.log("guardaste la partida!");
            console.log(results);
        }
    });
}
exports.verTop = (req, res) => {
    db.query("SELECT * FROM games JOIN users ON games.jugador = users.id ORDER BY puntuacion DESC LIMIT 1", (err, rowss, fields) => {
        if (err) {
            console.error(err);
        }
        db.query("SELECT * FROM games JOIN users ON games.jugador = users.id ORDER BY puntuacion DESC LIMIT 9 OFFSET 1", (err, rows, fields) => {
            if (err) {
                console.error(err);
            }
            var positionCounter = 2;

            Handlebars.registerHelper('position', function() {
                return positionCounter++;
            });
            res.render('top', {
                title: "Top Players",
                primero: rowss,
                items: rows
            })
        });
    });
}
exports.verMisPartidas = (req, res) => {
    console.log(req.body);
    const { token } = req.body;
    console.log('el token:' + token);
    let decodedJWT = jwt.verify(token, process.env.JWT_SECRET);
    let jwtstring = decodedJWT.id;
    db.query("SELECT *, DATE_FORMAT(fecha,'%d/%m/%Y %H:%i') as fechabien FROM games WHERE jugador = ?", jwtstring, async(error, results) => {
        if (error) {
            console.error(error);
        }
        console.log(results);
        //res.render('profile', {
        //  partidas: results
        //})
        res.status(200).redirect("/profile");
    });

}
exports.verMisPartidasMostrar = (req, res) => {

}