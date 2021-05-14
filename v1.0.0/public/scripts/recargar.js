function recargar(arma) {
    switch (arma) {
        case 1:
            if (Jugador.arma1.cargador < Jugador.arma1.tamanoCargador && Jugador.arma1.municion > 0) {
                Jugador.recargando = true;
                document.getElementById("municion").innerHTML = "Recargando...";
                contadorIntervalos++;
                setTimeout(function () {
                    if ((Jugador.arma1.municion - (Jugador.arma1.tamanoCargador - Jugador.arma1.cargador) <= 0)) {
                        Jugador.arma1.cargador = Jugador.arma1.municion;
                        Jugador.arma1.municion = 0;
                    } else {
                        Jugador.arma1.municion = Jugador.arma1.municion - (Jugador.arma1.tamanoCargador - Jugador.arma1.cargador);
                        Jugador.arma1.cargador = Jugador.arma1.tamanoCargador;
                    }
                    Jugador.recargando = false;
                    document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma1.cargador + " / " + Jugador.arma1.municion;
                }, Jugador.arma1.recarga)
            }
            break;
        case 2:
            if (Jugador.arma2.nombre != "none" && Jugador.arma2.cargador < Jugador.arma2.tamanoCargador && Jugador.arma2.municion > 0) {
                Jugador.recargando = true;
                document.getElementById("municion").innerHTML = "Recargando...";
                contadorIntervalos++;
                setTimeout(function () {
                    if ((Jugador.arma2.municion - (Jugador.arma2.tamanoCargador - Jugador.arma2.cargador) <= 0)) {
                        Jugador.arma2.cargador = Jugador.arma2.municion;
                        Jugador.arma2.municion = 0;
                    } else {
                        Jugador.arma2.municion = Jugador.arma2.municion - (Jugador.arma2.tamanoCargador - Jugador.arma2.cargador);
                        Jugador.arma2.cargador = Jugador.arma2.tamanoCargador;
                    }
                    Jugador.recargando = false;
                    document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma2.cargador + " / " + Jugador.arma2.municion;
                }, Jugador.arma2.recarga)
            }
            break;

        default:
            break;
    }
}