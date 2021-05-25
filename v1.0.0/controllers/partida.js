const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const session = require("express-session");
const express = require("express");


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
    db.query('INSERT INTO games SET ?', { jugador: decodedJWT.id, fecha: fecha, puntuacion: puntuacion }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            console.log("guardaste la partida!");
            console.log(results);
        }
    });
}