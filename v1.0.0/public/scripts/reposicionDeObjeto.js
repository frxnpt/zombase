function reposicionDeObjetos() {
    //Llamar pausa!
    if (document.getElementById("menu")) {
        document.getElementById("menu").remove();
    }
    pausar();
    //ajuste de margenes del container
    document.getElementById("container").style.marginTop = document.body.clientHeight / 2 - document.getElementById("container").clientHeight / 2 + "px";
    document.getElementById("container").style.marginLeft = document.body.clientWidth / 2 - document.getElementById("container").clientWidth / 2 + "px";
    //La reposición de objetos se realizará con % del contenedor, es decir, 
    //si el objeto está en el centro, será reposicionado en el 50%x 50%y del siguiente tamaño del contenedor.
    factorVelocidad = document.getElementById("container").clientWidth * 0.025;
    console.log("Factor de velocidad: " + factorVelocidad + " px");

    var recContainer = document.getElementById("container").getBoundingClientRect();
    var posNuevaX = (recContainer.width * Jugador.porcentajeX);
    var posNuevaY = (recContainer.height * Jugador.porcentajeY);

    document.getElementById("animate").style.left = Math.round(posNuevaX) + "px";
    document.getElementById("animate").style.top = Math.round(posNuevaY) + "px";

    //Reposicion de balas, guardar como un objeto
    //Deshacerse de las balas que se destruyen, sino tira error
    for (let i = 0; i < Balas.length; i++) {

        var posXNuevaBullet = recContainer.width * Balas[i].porcX;
        var posYNuevaBullet = recContainer.height * Balas[i].porcY;

        document.getElementById(Balas[i].nombre).style.left = posXNuevaBullet + "px";
        document.getElementById(Balas[i].nombre).style.top = posYNuevaBullet + "px";
    }

    for (let i = 0; i < listaZombies.length; i++) {

        var posXNuevaZombie = recContainer.width * listaZombies[i].porcX;
        var posYNuevaZombie = recContainer.height * listaZombies[i].porcY;

        document.getElementById(listaZombies[i].nombre).style.left = posXNuevaZombie + "px";
        document.getElementById(listaZombies[i].nombre).style.top = posYNuevaZombie + "px";
    }
}