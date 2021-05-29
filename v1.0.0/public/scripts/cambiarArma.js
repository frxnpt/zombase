function cambiarArma() { // cambio de imagen (y modo disparo!) Para el cambio de arma con la ruleta del raton
    if (pausa == false) {

        event.preventDefault(); //TODO: Actualizar a cambio con variable para evitar repetición de código (igual que cambio imagen)
        switch (Jugador.armaActual) {
            case 1:
                Jugador.armaActual = 2;
                if (Jugador.arma2.nombreArma2 == "none") {
                    document.getElementById("personaje").setAttribute("src", "../resources/personajes/RAMBO.png");
                } else {
                    cambiarImagenPersonaje(Jugador.arma2.nombreArma2, Jugador.arma2.modoDisparoArma2);
                }

                document.getElementById("armamano2").style.opacity = 1;
                document.getElementById("armamano1").style.opacity = 0.4;
                break;
            case 2:
                Jugador.armaActual = 1;
                if (Jugador.arma1.nombreArma1 == "none") {
                    document.getElementById("personaje").setAttribute("src", "../resources/personajes/RAMBO.png");
                } else {
                    cambiarImagenPersonaje(Jugador.arma1.nombreArma1, Jugador.arma1.modoDisparoArma1);
                }

                document.getElementById("armamano1").style.opacity = 1;
                document.getElementById("armamano2").style.opacity = 0.4;
                break;
            default:
                break;
        }

    }
}