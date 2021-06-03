function nuevaRonda(intervalo) {
    document.getElementById("ronda").innerHTML = "Ronda: " + ronda;
    clearTimeout(intervalo);
    switch (ronda / 5) { //Cambia terreno cada 5 rondas
        case 1:
            document.getElementById("terreno").setAttribute("src", "./resources/terrenos/TERRENO2.png")
            break;
        case 2:
            document.getElementById("terreno").setAttribute("src", "./resources/terrenos/TERRENO3.png")
            break;
        default:
            break;
    }
    contadorIntervalos++;
    generarZombie = setInterval(crearZombie, 2500 - (20 * ronda));
}