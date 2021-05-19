const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
let hashedPassword;

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
                messageReg: 'That email is already in use'
            });

        } else if (passReg != passRegConfirm) {
            return res.render('login', {
                messageReg: 'Passwords do not match'
            });
        }
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(passReg, salt, function(err, hash) {
                //returns hash
                console.log(hash);
                db.query('INSERT INTO users SET ?', { name: name, surname: surname, email: emailReg, password: hash, pp: "" }, (error, results) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(results);
                        req.session.loggedin = true;
                        req.session.save();
                        return res.render('login', {
                            messageReg: 'User Registered successfully'
                        });

                    }
                });
            });
        });
    });
}