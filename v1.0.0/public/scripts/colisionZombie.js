function colisionZombie(X, Y, indice) {
    var limiteJugadorIzda = document.getElementById("animate").getBoundingClientRect().left -
        document.getElementById("container").getBoundingClientRect().left;
    var limiteJugadorDcha = document.getElementById("animate").getBoundingClientRect().right -
        document.getElementById("container").getBoundingClientRect().left;
    var limiteJugadorTop = document.getElementById("animate").getBoundingClientRect().top -
        document.getElementById("container").getBoundingClientRect().top;
    var limiteJugadorBot = document.getElementById("animate").getBoundingClientRect().bottom -
        document.getElementById("container").getBoundingClientRect().top;

    if ((X >= limiteJugadorIzda && X <= limiteJugadorDcha) &&
        (Y >= limiteJugadorTop && Y <= limiteJugadorBot)) {
        Jugador.salud -= listaZombies[indice].impacto;
        document.getElementById("salud").innerHTML = "Salud: " + Jugador.salud + "HP";
        if (Jugador.salud <= 0) {
            finalPartida();
        }
        clearInterval(listaZombies[indice].intervalo);
        contadorIntervalos++;
        setTimeout(reestablecerMovimiento, listaZombies[indice].cooldown, contadorIntervalos, indice, listaZombies[indice].nombre);

    }
}