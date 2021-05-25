const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const session = require("express-session");
let hashedPassword;

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


exports.guardar = (req, res) => {


    console.log(req.body);
    //const { token, fecha, puntuacion } = req.body;

    //let decodedJWT = jwt.verify(token, process.env.JWT_SECRET)
    //console.log("jwt decoded" + decodedJWT);
    /*
        //returns hash
        db.query('INSERT INTO games SET ?', { jugador: jugador, fecha: fecha, puntuacion: puntuacion }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);
                req.session.loggedin = true;
                req.session.save();
                return res.render('/', {
                    successReg: 'Game Registered successfully'
                });
            }
        });
        */
}