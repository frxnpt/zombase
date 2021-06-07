const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


exports.register = (req, res) => {
    console.log(req.body);

    const { name, surname, phone, emailReg, passReg, passRegConfirm, acepto } = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [emailReg], async(error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('login', {
                errorReg: 'Ese email se encuentra en uso'
            });

        } else if (passReg != passRegConfirm) {
            return res.render('login', {
                errorReg: 'Las contraseñas no coinciden'
            });
        }
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(passReg, salt, function(err, hash) {
                //returns hash
                console.log("contraseña hasheada: " + hash);
                db.query('INSERT INTO users SET ?', { name: name, surname: surname, email: emailReg, password: hash, pp: "/img/perfil.jpg" }, (error, results) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(results);
                        return res.render('login', {
                            successReg: 'Usuario registrado correctamente!'
                        });
                    }
                });
            });
        });
    });
}
exports.login = (req, res) => {
    try {
        const { emailLog, passLog } = req.body;

        if (!emailLog || !passLog) {
            return res.status(400).render('login', {
                messageLog: 'Porfavor introduzca un usuario y contraseña'
            });
        }

        db.query('SELECT * from users WHERE email = ?', [emailLog], async(error, results) => {
            console.log(results);
            if (!results || !(await bcrypt.compare(passLog, results[0].password))) {
                res.status(401).render('login', {
                    messageLog: 'El email o la contraseña son incorrectos'
                });

            } else {
                const id = results[0].id;
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                console.log("The token is:" + token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookieOptions); //y guardamos el JWT en las cookies con la configuracion de arriba
                res.status(200).redirect("/"); //redireccionamos al index
            }
        });
    } catch (error) {
        console.log(error)
    }
}
exports.logout = (req, res) => {
    try {
        res.clearCookie('jwt');

        return res.status(200).redirect('/login');
    } catch (error) {
        console.log(error)
    }
}