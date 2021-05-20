function colisionZombie(X, Y, indice, rangoX, rangoY) {
    var rectanguloJugador = document.getElementById("animate").getBoundingClientRect();

    var limiteJugadorIzda = rectanguloJugador.left -
        container.getBoundingClientRect().left;
    var limiteJugadorDcha = rectanguloJugador.right -
        container.getBoundingClientRect().left;
    var limiteJugadorTop = rectanguloJugador.top -
        container.getBoundingClientRect().top;
    var limiteJugadorBot = rectanguloJugador.bottom -
        container.getBoundingClientRect().top;
    //X,Y son el centro del zombie
    var Xleft = X - rangoX * 0.8; //4 puntos: izda centro, top centro, dcha centro, bot centro
    var Xright = X + rangoX * 0.8;//rango es la mitad del width del zombie, o sea
    var Ytop = Y - rangoY * 0.8;//hasta donde llega su imagen
    var Ybot = Y + rangoY * 0.8;
    //Reducimos su rango un poco para que el zombie se tenga que acercar un poco al jugador, si no pega casi sin contactar
    if (((Xleft >= limiteJugadorIzda && Xleft <= limiteJugadorDcha) &&//Si X se mantiene en la izda y la y en el centro, y ademas
        (Y >= limiteJugadorTop && Y <= limiteJugadorBot)) ||//se encuentra en los limites del jugador, entra, similar con los demas
        ((Xright >= limiteJugadorIzda && Xright <= limiteJugadorDcha) &&
            (Y >= limiteJugadorTop && Y <= limiteJugadorBot)) ||
        ((X >= limiteJugadorIzda && X <= limiteJugadorDcha) &&
            (Ytop >= limiteJugadorTop && Ytop <= limiteJugadorBot)) ||
        ((X >= limiteJugadorIzda && X <= limiteJugadorDcha) &&
            (Ybot >= limiteJugadorTop && Ybot <= limiteJugadorBot))) {
        Jugador.salud -= listaZombies[indice].impacto;
        document.getElementById("salud").innerHTML = "Salud: " + Jugador.salud + "HP";
        if (Jugador.salud <= 0) {
            finalPartida();
        } else if (Jugador.salud <= 20) {
            document.getElementById('personaje').style.animation = "saludCritica 1s";
            document.getElementById("personaje").style.animationIterationCount = "infinite";
        }
        clearInterval(listaZombies[indice].intervalo);
        contadorIntervalos++;
        setTimeout(reestablecerMovimiento, listaZombies[indice].cooldown, contadorIntervalos, indice, listaZombies[indice].nombre);

    }
}