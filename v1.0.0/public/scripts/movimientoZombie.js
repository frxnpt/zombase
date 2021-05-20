function movimientoZombie(zombies, tipoZombie) {
    if (pausa == false) {

        var recZombie = document.getElementById("zombie" + zombies).getBoundingClientRect();

        var xZombieInicial = recZombie.left
            - container.getBoundingClientRect().left;
        var yZombieInicial = recZombie.top
            - container.getBoundingClientRect().top;

        var xZombieCentro = (recZombie.left + recZombie.width / 2)
            - container.getBoundingClientRect().left;
        var yZombieCentro = (recZombie.top + recZombie.height / 2)
            - container.getBoundingClientRect().top;
        var xJugador = (elem.getBoundingClientRect().left + elem.getBoundingClientRect().width / 2) - container.getBoundingClientRect().left;
        var yJugador = (elem.getBoundingClientRect().top + elem.getBoundingClientRect().height / 2) - container.getBoundingClientRect().top;

        //P2 (pos jugador) - P1 (pos zombie)
        var movimientoXzombie = (xJugador - xZombieCentro) / Math.abs(xJugador - xZombieCentro);
        if (Number.isNaN(movimientoXzombie)) {
            movimientoXzombie = 0;
        }
        var movimientoYzombie = (yJugador - yZombieCentro) / Math.abs(yJugador - yZombieCentro);
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

        var rad = Math.atan2((elem.getBoundingClientRect().x + elem.getBoundingClientRect().width / 2) - (recZombie.x + recZombie.width / 2),
            (elem.getBoundingClientRect().y + elem.getBoundingClientRect().height / 2) - (recZombie.y + recZombie.height / 2));
        var rot = (rad * (180 / Math.PI) * -1) + 180;//La rotación aqui se hara con los centros de zombie y jugador, 
        //por lo que los zombies rotaran en referencia al centro del jugador
        document.getElementById("zombie" + zombies).childNodes.item(0).style = "transform: rotate(" + rot + "deg);";
        document.getElementById("zombie" + zombies).style.left = xZombieFinal + "px";
        document.getElementById("zombie" + zombies).style.top = yZombieFinal + "px";

        if (tipoZombie == "zombieTipo2") {
            disparoZombie(posArrayZombie);
        } else {

            var posXHitboxZ = xZombieFinal + recZombie.width / 2;
            var posYHitboxZ = yZombieFinal + recZombie.height / 2;
            colisionZombie(posXHitboxZ, posYHitboxZ, posArrayZombie, recZombie.width / 2, recZombie.height / 2);
        }
    }
}