function cambiarArma() {
    event.preventDefault();
    switch (Jugador.armaActual) {
        case 1:
            Jugador.armaActual = 2;
            document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma2.cargador + " / " + Jugador.arma2.municion;
            if (Jugador.skinActual == "RAMBO") {//hacer diferentes IF para futuras skins
                if (Jugador.arma2.nombre == "none") {
                    document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO.png");
                } else if (Jugador.arma2.nombre == "PISTOLA1") {
                    document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO_PISTOLA1.png");
                }
            }
            break;
        case 2:
            Jugador.armaActual = 1;
            document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma1.cargador + " / " + Jugador.arma1.municion;
            if (Jugador.arma1.nombre == "PISTOLA1") {
                document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO_PISTOLA1.png");
            } else if (Jugador.arma1.nombre == "none") {
                document.getElementById("personaje").setAttribute("src", "../public/resources/personajes/RAMBO.png");
            }
            break;
        default:
            break;
    }

}