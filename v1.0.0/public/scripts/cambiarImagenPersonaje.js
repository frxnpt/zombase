function cambiarImagenPersonaje(nombre) { //Cambio de imagen cuando el jugador coge arma
    if (nombre == "RIFLEASALTO1") {
        armaAutomatica = true; //modo de disparo automatico permitido
    }
    document.getElementById("personaje").setAttribute("src", "../resources/personajes/" + Jugador.skinActual + "_" + nombre + ".png");
}