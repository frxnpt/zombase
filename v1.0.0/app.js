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


app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about-us", (req, res) => {
    res.render("about-us");
});
app.get("/login", (req, res) => {
    res.render("login");
});
app.get("/top-players", (req, res) => {
    res.render("top-players");
});
app.listen(5069, () => {
    console.log("Server started on Port 5069")
})