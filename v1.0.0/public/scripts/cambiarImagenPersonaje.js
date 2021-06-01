function cambiarImagenPersonaje(nombre, modoDisparo) { //Cambio de imagen cuando el jugador coge arma
    if (modoDisparo == 2) {
        armaAutomatica = true; //modo de disparo automatico permitido
    } else {
        armaAutomatica = false;
    }
    document.getElementById("personaje").setAttribute("src", "../resources/personajes/" + Jugador.skinActual + "_" + nombre + ".png");
}