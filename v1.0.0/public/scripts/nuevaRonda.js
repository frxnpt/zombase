function nuevaRonda(intervalo) {
    document.getElementById("ronda").innerHTML = "Ronda: " + ronda;
    clearTimeout(intervalo);
    contadorIntervalos++;
    generarZombie = setInterval(crearZombie, 2500 - (20 * ronda));
}