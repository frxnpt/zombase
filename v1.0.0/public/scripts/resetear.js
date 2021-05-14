function resetear() {
    for (let i = intervalosAnteriores; i <= contadorIntervalos; i++) {
        clearInterval(i);
    }
    intervalosAnteriores = contadorIntervalos;//Intervalos de la partida anterior no se tendrán en cuenta.
    var elementos = document.getElementById("container").getElementsByTagName("div").length;
    if (elementos > 1) {
        for (let j = 1; j < elementos; j++) {
            document.getElementById("container").removeChild(document.getElementById("container").lastChild);
        }
    }
    pausa = false;
    balasDisparadas = 0;
    ronda = 1;
    limiteZombies = Math.round((ronda + 6) * (0.7 * ronda));
    zombies = 0;
    contadorZombies = 0;
    Jugador = {
        salud: 100,
        armaActual: 1,
        arma1:
        {
            nombre: "Tipo1",
            cargador: 8,
            tamanoCargador: 8,
            municion: Infinity,
            recarga: 2000,
            cadencia: 0,
            velocidad: 1,
            impacto: 20
        },
        arma2:
        {
            nombre: "none",
            cargador: 0,
            tamanoCargador: 8,
            municion: 0,
            recarga: 0,
            cadencia: 0,
            velocidad: 0,
            impacto: 20
        },
        velocidad: 1,
        porcentajeX: 0.5,
        porcentajeY: 0.5,
        recargando: false
    }
    contadorIntervalos += 2;//Sumamos los dos intervalos base que vamos a añadir.
    listaZombies = [];
    Balas = [];
    elem.style = "width: " + widhtInicial + "vw; height: " + heightInicial +
        "vw; position: absolute; border-radius: 25px; display: block; left: " +
        xInicial + "px; top: " + yInicial + "px;";
    document.getElementById("salud").innerHTML = "Salud: " + Jugador.salud + "HP";
    document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma1.cargadorArma1 + " / " + Jugador.arma1.municionArma1;

    document.getElementById("ronda").innerHTML = "Ronda: ";
    myMove();
    timer = setInterval(myMove, 20, container, elem);
    empezarRonda = setTimeout(nuevaRonda, 5000, contadorIntervalos);
    generarZombie = 0;
}