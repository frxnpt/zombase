function recargar(arma) {
    switch (arma) {
        case 1:
            if (Jugador.arma1.cargadorArma1 < Jugador.arma1.tamanoCargadorArma1 && Jugador.arma1.municionArma1 > 0) {
                Jugador.recargando = true;
                var sound = new Audio("./resources/sounds/armas/" + Jugador.arma1.nombreArma1 + "_RECARGA1.wav");//De momento solo 1 sonido por arma
                sound.volume = volumen;
                sound.play();//Encontrar mas que no desentonen para todas las armas es muy dificil
                document.getElementById("municion").innerHTML = "Recargando...";
                contadorIntervalos++;
                setTimeout(function () {
                    if ((Jugador.arma1.municionArma1 - (Jugador.arma1.tamanoCargadorArma1 - Jugador.arma1.cargadorArma1) <= 0)) {
                        Jugador.arma1.cargadorArma1 = Jugador.arma1.municionArma1;
                        Jugador.arma1.municionArma1 = 0;
                    } else {
                        Jugador.arma1.municionArma1 = Jugador.arma1.municionArma1 - (Jugador.arma1.tamanoCargadorArma1 - Jugador.arma1.cargadorArma1);
                        Jugador.arma1.cargadorArma1 = Jugador.arma1.tamanoCargadorArma1;
                    }
                    Jugador.recargando = false;
                    document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma1.cargadorArma1 + " / " + Jugador.arma1.municionArma1;
                }, Jugador.arma1.recargaArma1)
            }
            break;
        case 2:
            if (Jugador.arma2.nombreArma2 != "none" && Jugador.arma2.cargadorArma2 < Jugador.arma2.tamanoCargadorArma2 && Jugador.arma2.municionArma2 > 0) {
                Jugador.recargando = true;
                var sound = new Audio("./resources/sounds/armas/" + Jugador.arma2.nombreArma2 + "_RECARGA1.wav");//De momento solo 1 sonido por arma
                sound.volume = volumen;
                sound.play();//Encontrar mas que no desentonen para todas las armas es muy dificil
                document.getElementById("municion").innerHTML = "Recargando...";
                contadorIntervalos++;
                setTimeout(function () {
                    if ((Jugador.arma2.municionArma2 - (Jugador.arma2.tamanoCargadorArma2 - Jugador.arma2.cargadorArma2) <= 0)) {
                        Jugador.arma2.cargadorArma2 = Jugador.arma2.municionArma2;
                        Jugador.arma2.municionArma2 = 0;
                    } else {
                        Jugador.arma2.municionArma2 = Jugador.arma2.municionArma2 - (Jugador.arma2.tamanoCargadorArma2 - Jugador.arma2.cargadorArma2);
                        Jugador.arma2.cargadorArma2 = Jugador.arma2.tamanoCargadorArma2;
                    }
                    Jugador.recargando = false;
                    document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma2.cargadorArma2 + " / " + Jugador.arma2.municionArma2;
                }, Jugador.arma2.recargaArma2)
            }
            break;

        default:
            break;
    }
}