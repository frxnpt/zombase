const express = require("express");
const mysql = require("mysql");
const path = require("path");
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' })

const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public');
console.log(__dirname);
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("MYSQL Connected...")
    }
})


app.use('/', require('./routes/pages'));
app.use('/auth/', require('./routes/auth'));

app.listen(5069, () => {
    console.log("Server started on Port 5069")
})