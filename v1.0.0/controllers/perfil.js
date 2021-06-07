const mysql = require("mysql");
const jwt = require('jsonwebtoken');


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
const getCookie = (req, name) => { //Nos da el contenido de la cookie introducida como parámetro
    return req.headers.cookie
        .split("; ")
        .map(it => it.split("="))
        .filter(it => it[0] == name)[0][1];
}
const verPerfil = (req, res) => {
    if (!req.cookies.jwt) {
        res.render("login");
    } else {
        let tokenCookie = getCookie(req, "jwt");
        console.log("La cookie que conteiene el token " + tokenCookie)
        let decodedJWT = jwt.verify(tokenCookie, process.env.JWT_SECRET);
        let jwtstring = decodedJWT.id;
        db.query("SELECT *, DATE_FORMAT(fecha,'%d/%m/%Y %H:%i') as fechabien FROM games WHERE jugador = ?", jwtstring, async(error, results) => {
            if (error) {
                console.error(error);
            }
            db.query("SELECT * FROM users WHERE id = ?", jwtstring, async(error, rresults) => {
                console.log(rresults);
                res.render('profile', {
                    partidas: results,
                    player: rresults,
                    jwt: req.cookies.jwt
                });
            });
        });
    }
}

exports.guardarPerfil = (req, res) => {
    console.log(req.body);
    const { nombre, pp, description } = req.body;
    console.log("DESC: " + description);

    let tokensito = getCookie(req, "jwt");
    let decodedJWT = jwt.verify(tokensito, process.env.JWT_SECRET);
    let jwtstring = decodedJWT.id;
    db.query("UPDATE users SET descripcion = ? WHERE id = ?", [description, jwtstring], async(error, results) => {
        if (error) {
            console.error(error);
        }
        console.log("ACTUALIZANDO PERFIL...");
        res.redirect('/perfil/ver');
    });
}


exports.verPerfil = verPerfil;