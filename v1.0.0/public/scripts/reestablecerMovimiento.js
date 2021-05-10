function reestablecerMovimiento(intervalo, indice, nombre) {
    clearTimeout(intervalo);
    if (document.getElementById(nombre)) {
        contadorIntervalos++;
        listaZombies[indice].intervalo = contadorIntervalos;
        setInterval(movimientoZombie, 25, parseInt(nombre.substr(6)));
    }

}