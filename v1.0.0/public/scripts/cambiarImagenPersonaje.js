function cambiarImagenPersonaje(nombre) {//Cambio de imagen cuando el jugador coge arma
    if (Jugador.skinActual == "RAMBO") {//hacer diferentes IF para futuras skins
        if (nombre == "PISTOLA1") {
            document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO_PISTOLA1.png");
        } else if (nombre == "ESCOPETA1") {
            document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO_ESCOPETA1.png");
        }
    }//Añadir mas armas en el futuro y skins del personaje si hay
}