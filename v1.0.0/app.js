//Importar todas las liberías necesarias
const express = require("express");
const mysql = require("mysql");
const path = require("path");
const dotenv = require('dotenv');
const session = require('express-session')
const cookieParser = require('cookie-parser');

//Localizamos el archivo con las contraseñas e información sensible
dotenv.config({ path: './config.env' })
    //Guardamos la funcion que crea la applicación express en una variable
const app = express();

//creo una conexión con la base de datos y la guardo en una variable
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

//establecemos el directorio public como directorio principal
const publicDirectory = path.join(__dirname, 'public');
console.log(__dirname);
app.use(express.static(publicDirectory));

//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }))

//Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());

//Establecemos el sistema de templates (Handlebars)
app.set('view engine', 'hbs');

/*en caso de que haya un error con la conexión mostramos el error, y si no hay error, mostramos un mensaje por consola 
para verificar que todo está bien*/
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
        if (error) {
            console.log(error);
        } else {
            console.log("MYSQL Connected...")
        }
    })
    // caching disabled for every route
app.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});
//añadimos todas las rutas desde otra carpeta
app.use('/', require('./routes/pages'));
app.use('/auth/', require('./routes/auth'));
app.use('/partida/', require('./routes/partida'));
app.use('/perfil/', require('./routes/perfil'));



//seleccionamos el puerto en el que va a correr nuestra applicación
app.listen(5069, () => {
    console.log("Server started on Port 5069")
})