function cambiarArma() {// cambio de imagen Para el cambio de arma con la ruleta del raton
    event.preventDefault();
    switch (Jugador.armaActual) {
        case 1:
            Jugador.armaActual = 2;
            document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma2.cargadorArma2 + " / " + Jugador.arma2.municionArma2;
            if (Jugador.skinActual == "RAMBO") {//hacer diferentes IF para futuras skins
                if (Jugador.arma2.nombreArma2 == "none") {
                    document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO.png");
                } else if (Jugador.arma2.nombreArma2 == "PISTOLA1") {
                    document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO_PISTOLA1.png");
                } else if (Jugador.arma2.nombreArma2 == "ESCOPETA1") {
                    document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO_ESCOPETA1.png");
                }
            }
            break;
        case 2:
            Jugador.armaActual = 1;
            document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma1.cargadorArma1 + " / " + Jugador.arma1.municionArma1;
            if (Jugador.arma1.nombreArma1 == "PISTOLA1") {
                document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO_PISTOLA1.png");
            } else if (Jugador.arma1.nombreArma1 == "none") {
                document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO.png");
            } else if (Jugador.arma1.nombreArma1 == "ESCOPETA1") {
                document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO_ESCOPETA1.png");
            }
            break;
        default:
            break;
    }

}