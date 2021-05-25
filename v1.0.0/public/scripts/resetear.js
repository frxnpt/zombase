function resetear() {
    for (let i = intervalosAnteriores; i <= contadorIntervalos; i++) {
        clearInterval(i);
    }
    intervalosAnteriores = contadorIntervalos; //Intervalos de la partida anterior no se tendrán en cuenta.
    var elementos = document.getElementById("container").getElementsByTagName("div").length;
    if (elementos > 7) {
        for (let j = 7; j < elementos; j++) { //Añadir 1 por cada div que no queramos eliminar, inluidos aquellos dentro de estos
            document.getElementById("container").removeChild(document.getElementById("container").lastChild);
        }
    }
    pausa = false;
    menuPausa.style.display = "none";
    menuMuerte.style.display = "none";
    balasDisparadas = 0;
    balasDisparadasZombie = 0;
    contadorItems = 0;
    contadorArmas = 0;
    contadorAssets = 0;
    contadorBiohazards = 0;
    ronda = 1;
    limiteZombies = Math.round((ronda / 3 + 6) * (0.7 * ronda));
    zombies = 0;
    contadorZombies = 0;
    score = 0;
    document.getElementById("Scoreboard-data").innerHTML = score;
    Jugador = {
        salud: 100,
        skinActual: "RAMBO",
        armaActual: 1,
        arma1: {
            nombreArma1: "PISTOLA1",
            cargadorArma1: 8,
            tamanoCargadorArma1: 8,
            municionArma1: 120,
            recargaArma1: 2000,
            cadenciaArma1: 200,
            velocidadArma1: 0.75,
            impactoArma1: 30,
            onCooldownArma1: false
        },
        arma2: {
            nombreArma2: "none",
            cargadorArma2: 0,
            tamanoCargadorArma2: 0,
            municionArma2: 0,
            recargaArma2: 0,
            cadenciaArma2: 0,
            velocidadArma2: 0,
            impactoArma2: 0,
            onCooldownArma2: false
        },
        velocidad: 0.5,
        porcentajeX: 0.5, //Empieza en el centro del contenedor
        porcentajeY: 0.5,
        recargando: false
    }
    contadorIntervalos += 2; //Sumamos los dos intervalos base que vamos a añadir.
    listaZombies = [];
    Balas = [];
    BalasZombie = [];
    botiquines = [];
    municiones = [];
    armas = [];
    listaAssets = [];
    listaBiohazards = [];
    inmunidadVeneno = false;
    ultimoZombieGolpeado = "";
    elem.style = "width: " + widhtInicial + "vw; height: " + heightInicial +
        "vw; position: absolute; border-radius: 25px; display: block; left: " +
        xInicial + "px; top: " + yInicial + "px;";
    document.getElementById("salud").innerHTML = "Salud: " + Jugador.salud + "HP";
    document.getElementById("armamano1-municion").innerHTML = "Cargador: " + Jugador.arma1.cargadorArma1 + " / " + Jugador.arma1.municionArma1;
    document.getElementById("ronda").innerHTML = "Ronda: ";
    document.getElementById('personaje').style.animation = "none";
    document.getElementById("personaje").style.animationIterationCount = "0";
    document.getElementById("armamano1-data").innerHTML = Jugador.arma1.nombreArma1;
    document.getElementById("armamano1-img").setAttribute("src", "../resources/armas_frame/PISTOLA1_FRAME.png");
    document.getElementById("armamano2-img").removeAttribute("src");
    document.getElementById("armamano2-data").innerHTML = "";
    document.getElementById("armamano2-municion").innerHTML = "";
    armaAutomatica = false;
    cambiarImagenPersonaje("PISTOLA1");
    myMove();
    timer = setInterval(myMove, 20, container, elem);
    empezarRonda = setTimeout(nuevaRonda, 5000, contadorIntervalos);
    generarZombie = 0;
}