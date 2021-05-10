function movimientoZombie(zombies, tipoZombie) {
    if (pausa == false) {

        var xZombieInicial = document.getElementById("zombie" + zombies).getBoundingClientRect().left
            - container.getBoundingClientRect().left;
        var yZombieInicial = document.getElementById("zombie" + zombies).getBoundingClientRect().top
            - container.getBoundingClientRect().top;

        var xJugador = elem.getBoundingClientRect().left - container.getBoundingClientRect().left;
        var yJugador = elem.getBoundingClientRect().top - container.getBoundingClientRect().top;

        //P2 (pos jugador) - P1 (pos zombie)
        var movimientoXzombie = (xJugador - xZombieInicial) / Math.abs(xJugador - xZombieInicial);
        if (Number.isNaN(movimientoXzombie)) {
            movimientoXzombie = 0;
        }
        var movimientoYzombie = (yJugador - yZombieInicial) / Math.abs(yJugador - yZombieInicial);
        if (Number.isNaN(movimientoYzombie)) {
            movimientoYzombie = 0;
        }

        //Comprobar colision antes de asignar?

        var posArrayZombie;
        for (let i = 0; i < listaZombies.length; i++) {
            if (listaZombies[i].nombre == "zombie" + zombies) {
                posArrayZombie = i;
            }
        }

        var xZombieFinal = xZombieInicial + (movimientoXzombie * (factorVelocidad * listaZombies[posArrayZombie].velocidad / 40));
        var yZombieFinal = yZombieInicial + (movimientoYzombie * (factorVelocidad * listaZombies[posArrayZombie].velocidad / 40));

        listaZombies[posArrayZombie].porcX = xZombieFinal / container.getBoundingClientRect().width;
        listaZombies[posArrayZombie].porcY = yZombieFinal / container.getBoundingClientRect().height;

        var rad = Math.atan2(elem.getBoundingClientRect().x - document.getElementById("zombie" + zombies).getBoundingClientRect().x,
            elem.getBoundingClientRect().y - document.getElementById("zombie" + zombies).getBoundingClientRect().y);
        var rot = (rad * (180 / Math.PI) * -1) + 180;
        document.getElementById("zombie" + zombies).childNodes.item(0).style = "transform: rotate(" + rot + "deg);";
        document.getElementById("zombie" + zombies).style.left = xZombieFinal + "px";
        document.getElementById("zombie" + zombies).style.top = yZombieFinal + "px";

        if (tipoZombie == "zombieTipo2") {
            //disparoZombie(posArrayZombie);
        } else {

            var posXHitboxZ = xZombieFinal + document.getElementById("zombie" + zombies).getBoundingClientRect().width / 2;
            var posYHitboxZ = yZombieFinal + document.getElementById("zombie" + zombies).getBoundingClientRect().height / 2;
            colisionZombie(posXHitboxZ, posYHitboxZ, posArrayZombie);
        }
    }
}