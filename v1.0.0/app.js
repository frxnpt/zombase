const express = require("express");
const mysql = require("mysql");
const path = require("path");
const dotenv = require('dotenv');
const session = require('express-session')
const cookieParser = require('cookie-parser');

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

//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }))

//Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'hbs');
// caching disabled for every route
app.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});

// otherwise put the res.set() call into the route-handler you want
db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("MYSQL Connected...")
    }
})


app.use(session({
    secret: 'aosdnkasdnk1.ksadAMsamdlkasmdaks',
    resave: false,
    saveUninitialized: false,
}));

// Run a "middleware" function on each request
app.use((req, res, next) => {
    // Check if we've already initialised a session
    req.session.hola = "hola";
    session.Store.hola;
    next();
});

app.use('/', require('./routes/pages'));
app.use('/auth/', require('./routes/auth'));
app.use('/partida/', require('./routes/partida'));


app.listen(5069, () => {
    console.log("Server started on Port 5069")
})