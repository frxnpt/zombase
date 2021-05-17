function cambiarArma() {// cambio de imagen (y modo disparo!) Para el cambio de arma con la ruleta del raton
    event.preventDefault();//TODO: Actualizar a cambio con variable para evitar repetición de código (igual que cambio imagen)
    switch (Jugador.armaActual) {
        case 1:
            Jugador.armaActual = 2;
            armaAutomatica = false;//default
            document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma2.cargadorArma2 + " / " + Jugador.arma2.municionArma2;
            if (Jugador.arma2.nombreArma2 == "none") {
                document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO.png");
            } else if (Jugador.arma2.nombreArma2 == "PISTOLA1") {
                cambiarImagenPersonaje("PISTOLA1");
            } else if (Jugador.arma2.nombreArma2 == "ESCOPETA1") {
                cambiarImagenPersonaje("ESCOPETA1");
            } else if (Jugador.arma2.nombreArma2 == "RIFLEASALTO1") {
                cambiarImagenPersonaje("RIFLEASALTO1");
            } else if (Jugador.arma2.nombreArma2 == "PISTOLA2") {
                cambiarImagenPersonaje("PISTOLA2");
            } else if (Jugador.arma2.nombreArma2 == "ARMARAYOS") {
                cambiarImagenPersonaje("ARMARAYOS");
            }

            document.getElementById("armamano2").style.opacity = 1;
            document.getElementById("armamano1").style.opacity = 0.4;
            break;
        case 2:
            Jugador.armaActual = 1;
            armaAutomatica = false;//default
            document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma1.cargadorArma1 + " / " + Jugador.arma1.municionArma1;
            if (Jugador.arma1.nombreArma1 == "PISTOLA1") {
                cambiarImagenPersonaje("PISTOLA1");
            } else if (Jugador.arma1.nombreArma1 == "none") {
                document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO.png");
            } else if (Jugador.arma1.nombreArma1 == "ESCOPETA1") {
                cambiarImagenPersonaje("ESCOPETA1");
            } else if (Jugador.arma1.nombreArma1 == "RIFLEASALTO1") {
                cambiarImagenPersonaje("RIFLEASALTO1");
            } else if (Jugador.arma1.nombreArma1 == "PISTOLA2") {
                cambiarImagenPersonaje("PISTOLA2");
            } else if (Jugador.arma1.nombreArma1 == "ARMARAYOS") {
                cambiarImagenPersonaje("ARMARAYOS");
            }

            document.getElementById("armamano1").style.opacity = 1;
            document.getElementById("armamano2").style.opacity = 0.4;
            break;
        default:
            break;
    }

}