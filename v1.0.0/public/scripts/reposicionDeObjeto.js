function reposicionDeObjetos() {
    if (document.getElementById("menu")) {
        document.getElementById("menu").remove();
    }
    if (document.getElementById("menuFin")) {
        document.getElementById("menuFin").remove();
    }
    pausar();
    //ajuste de margenes del container
    container.style.marginTop = "2vh";
    container.style.marginLeft = document.body.clientWidth / 2 - document.getElementById("container").clientWidth / 2 + "px";
    //La reposición de objetos se realizará con % del contenedor, es decir, 
    //si el objeto está en el centro, será reposicionado en el 50%x 50%y del siguiente tamaño del contenedor.
    factorVelocidad = document.getElementById("container").clientWidth * 0.025;//Re-calculo de la velocidad

    var recContainer = document.getElementById("container").getBoundingClientRect();
    var posNuevaX = (recContainer.width * Jugador.porcentajeX);
    var posNuevaY = (recContainer.height * Jugador.porcentajeY);

    document.getElementById("animate").style.left = Math.round(posNuevaX) + "px";
    document.getElementById("animate").style.top = Math.round(posNuevaY) + "px";

    //Reposicion de balas
    for (let i = 0; i < Balas.length; i++) {

        var posXNuevaBullet = recContainer.width * Balas[i].porcX;
        var posYNuevaBullet = recContainer.height * Balas[i].porcY;

        document.getElementById(Balas[i].nombre).style.left = posXNuevaBullet + "px";
        document.getElementById(Balas[i].nombre).style.top = posYNuevaBullet + "px";
    }
    //Reposicion de zombies
    for (let i = 0; i < listaZombies.length; i++) {

        var posXNuevaZombie = recContainer.width * listaZombies[i].porcX;
        var posYNuevaZombie = recContainer.height * listaZombies[i].porcY;

        document.getElementById(listaZombies[i].nombre).style.left = posXNuevaZombie + "px";
        document.getElementById(listaZombies[i].nombre).style.top = posYNuevaZombie + "px";
    }

    //Reposicion de items
    for (let i = 0; i < items.length; i++) {

        var posXNuevaItem = recContainer.width * items[i].porcX;
        var posYNuevaItem = recContainer.height * items[i].porcY;

        document.getElementById(items[i].nombre).style.left = posXNuevaItem + "px";
        document.getElementById(items[i].nombre).style.top = posYNuevaItem + "px";
    }

    //Reposicion de armas
    for (let i = 0; i < armas.length; i++) {
        var posXNuevaArma = recContainer.width * armas[i].porcX;
        var posYNuevaArma = recContainer.height * armas[i].porcY;

        document.getElementById(armas[i].nombre).style.left = posXNuevaArma + "px";
        document.getElementById(armas[i].nombre).style.top = posYNuevaArma + "px";
    }

    //Reposicion de balas de Zombies
    for (let i = 0; i < BalasZombie.length; i++) {

        var posXNuevaBalaZ = recContainer.width * BalasZombie[i].porcX;
        var posYNuevaBalaZ = recContainer.height * BalasZombie[i].porcY;

        document.getElementById(BalasZombie[i].nombre).style.left = posXNuevaBalaZ + "px";
        document.getElementById(BalasZombie[i].nombre).style.top = posYNuevaBalaZ + "px";
    }

}