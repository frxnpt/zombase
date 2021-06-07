function reposicionDeObjetos() {
    if (document.getElementById("menuPausa")) {
        document.getElementById("menuPausa").style.display = "none";
        pausar();
    }
    if (document.getElementById("menuMuerte")) {
        document.getElementById("menuMuerte").style.display = "none";
    }
    pausar();
    //ajuste de margenes del container
    container.style.marginTop = "2vh";
    container.style.marginLeft = document.body.clientWidth / 2 - document.getElementById("container").clientWidth / 2 + "px";
    //La reposición de objetos se realizará con % del contenedor, es decir, 
    //si el objeto está en el centro, será reposicionado en el 50%x 50%y del siguiente tamaño del contenedor.
    factorVelocidad = document.getElementById("container").clientWidth * 0.025; //Re-calculo de la velocidad

    var recContainer = document.getElementById("container").getBoundingClientRect();
    var posNuevaX = (recContainer.width * Jugador.porcentajeX);
    var posNuevaY = (recContainer.height * Jugador.porcentajeY);

    document.getElementById("animate").style.left = Math.round(posNuevaX) + "px";
    document.getElementById("animate").style.top = Math.round(posNuevaY) + "px";

    document.getElementById("Scoreboard").style.top = container.getBoundingClientRect().top + "px"; //ajuste altura score
    document.getElementById("armamano1").style.top = container.getBoundingClientRect().top +
        container.getBoundingClientRect().height / 3.2 + "px";
    document.getElementById("armamano2").style.top = container.getBoundingClientRect().top +
        container.getBoundingClientRect().height / 1.9 + "px";
    document.getElementById("audiocontainer").style.top = container.getBoundingClientRect().top + "px";

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

    //Reposicion de botiquines
    for (let i = 0; i < botiquines.length; i++) {

        var posXNuevaItem = recContainer.width * botiquines[i].porcX;
        var posYNuevaItem = recContainer.height * botiquines[i].porcY;

        document.getElementById(botiquines[i].nombre).style.left = posXNuevaItem + "px";
        document.getElementById(botiquines[i].nombre).style.top = posYNuevaItem + "px";
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

    //Reposicion de municiones
    for (let i = 0; i < municiones.length; i++) {

        var posXNuevaItem = recContainer.width * municiones[i].porcX;
        var posYNuevaItem = recContainer.height * municiones[i].porcY;

        document.getElementById(municiones[i].nombre).style.left = posXNuevaItem + "px";
        document.getElementById(municiones[i].nombre).style.top = posYNuevaItem + "px";
    }

    //Reposicion de sangre
    for (let i = 0; i < listaAssets.length; i++) {

        var posXNuevaItem = recContainer.width * listaAssets[i].porcX;
        var posYNuevaItem = recContainer.height * listaAssets[i].porcY;

        document.getElementById(listaAssets[i].nombre).style.left = posXNuevaItem + "px";
        document.getElementById(listaAssets[i].nombre).style.top = posYNuevaItem + "px";
    }

}