function cambiarImagenPersonaje(nombre) { //Cambio de imagen cuando el jugador coge arma
    if (nombre == "M16" || nombre == "FAMAS" || nombre == "MP5" || nombre == "MAC-9") {
        armaAutomatica = true; //modo de disparo automatico permitido
    } else {
        armaAutomatica = false;
    }
    document.getElementById("personaje").setAttribute("src", "../resources/personajes/" + Jugador.skinActual + "_" + nombre + ".png");
}