function cambiarImagenPersonaje(nombre) {//Cambio de imagen cuando el jugador coge arma
    if (Jugador.skinActual == "RAMBO") {//separar if, asignar skin a variable y meterla a los string, ahorrando codigo
        if (nombre == "PISTOLA1") {
            document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO_PISTOLA1.png");
        } else if (nombre == "ESCOPETA1") {
            document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO_ESCOPETA1.png");
        } else if (nombre == "RIFLEASALTO1") {
            armaAutomatica = true;//modo de disparo automatico permitido
            document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO_RIFLEASALTO1.png");
        }/* else if (nombre == "PISTOLA2") {
            document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO_PISTOLA2.png");
        } else if (nombre == "ARMARAYOS") {
            document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO_ARMARAYOS.png");
        }*/
    }//Añadir mas armas en el futuro y skins del personaje si hay
}