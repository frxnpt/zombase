function nuevaRonda(intervalo) {
    document.getElementById("ronda").innerHTML = "Ronda: " + ronda;
    clearTimeout(intervalo);
    contadorIntervalos++;
    generarZombie = setInterval(crearZombie, 3000 - (35 * ronda));
}