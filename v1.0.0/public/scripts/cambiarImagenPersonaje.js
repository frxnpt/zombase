function cambiarImagenPersonaje(nombre) { //Cambio de imagen cuando el jugador coge arma
    if (nombre == "RIFLEASALTO1" || nombre == "RIFLEASALTO2" || nombre == "SUBFUSIL1" || nombre == "SUBFUSIL2") {
        armaAutomatica = true; //modo de disparo automatico permitido
    } else {
        armaAutomatica = false;
    }
    document.getElementById("personaje").setAttribute("src", "../resources/personajes/" + Jugador.skinActual + "_" + nombre + ".png");
}