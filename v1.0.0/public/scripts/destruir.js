function destruir(nombre, tipo, indice) {
    document.getElementById(nombre).remove();
    if (tipo == "bala") {
        clearInterval(Balas[indice].intervalo);
        Balas.splice(indice, 1);
    } else if (tipo == "zombie") {
        clearInterval(listaZombies[indice].intervalo);
        listaZombies.splice(indice, 1);
        if (contadorZombies == limiteZombies && listaZombies.length == 0) {
            contadorIntervalos++;
            ronda++;
            limiteZombies = Math.round((ronda + 6) * (0.7 * ronda));//Necesario reinstanciala para que no quede estatica
            contadorZombies = 0;
            if (generarZombie != 0) {
                clearInterval(generarZombie);
            }
            var empezarRonda = setTimeout(nuevaRonda, 6000, contadorIntervalos);
        }
    } else if (tipo == "BalaZombie") {
        clearInterval(BalasZombie[indice].intervalo);
        BalasZombie.splice(indice, 1);
    } else if (tipo == "BOTIQUIN") {
        botiquines.splice(indice, 1);
    } else if (tipo == "ARMA") {
        armas.splice(indice, 1);
    } else if (tipo == "MUNICION") {
        municiones.splice(indice, 1);
    } else if (tipo == "SANGRE") {
        listaAssets.splice(indice, 1);
    }
}