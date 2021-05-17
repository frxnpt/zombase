function cambiarImagenPersonaje(nombre) {//Cambio de imagen cuando el jugador coge arma
    if (nombre == "RIFLEASALTO1") {
        armaAutomatica = true;//modo de disparo automatico permitido
    }
    if (Jugador.skinActual == "RAMBO") {//separar if, asignar skin a variable y meterla a los string, ahorrando codigo
        document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO_" + nombre + ".png");
    }//Añadir mas armas en el futuro y skins del personaje si hay
}