function nuevaRonda(intervalo) {
    document.getElementById("ronda").innerHTML = "Ronda: " + ronda;
    clearTimeout(intervalo);
    contadorIntervalos++;
    generarZombie = setInterval(crearZombie, 4000 - (35 * ronda));
}