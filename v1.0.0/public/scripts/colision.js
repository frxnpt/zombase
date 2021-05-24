function colision(X, Y, impacto, penetracion) {
    //Colision con los limites
    if (X < 0 || X > document.getElementById("container").getBoundingClientRect().width ||
        Y < 0 || Y > document.getElementById("container").getBoundingClientRect().height) {
        ultimoZombieGolpeado = ""; //Reseteamos para balas de penetracion
        return true;
    }
    //Colision con zombies
    if (listaZombies.length > 0) {

        for (let i = 0; i < listaZombies.length; i++) {

            var limiteObjetoXizda = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().left -
                document.getElementById("container").getBoundingClientRect().left;

            var limiteObjetoXdcha = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().right -
                document.getElementById("container").getBoundingClientRect().left;

            var limiteObjetoYtop = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().top -
                document.getElementById("container").getBoundingClientRect().top;

            var limiteObjetoYbot = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().bottom -
                document.getElementById("container").getBoundingClientRect().top;

            if ((X >= limiteObjetoXizda && X <= limiteObjetoXdcha) && (Y >= limiteObjetoYtop && Y <= limiteObjetoYbot)) {
                if (penetracion == true && listaZombies[i].nombre == ultimoZombieGolpeado) {//Control que solo se produce un tick de daño
                    return false;// por bala (armas penetrantes) Con 20 de daño por ejemplo estaba matando a un boss con 4500 de vida 
                }//con unos 15 tiros debido a la cantidad de veces que se ejecuta
                listaZombies[i].salud = listaZombies[i].salud - impacto;
                ultimoZombieGolpeado = listaZombies[i].nombre;//Control que solo se produce un tick de daño por bala (armas penetrantes)
                if (listaZombies[i].salud <= 0) {//Caso en el que el zombie muere

                    var posXZombie = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().left - container.getBoundingClientRect().left;
                    var posYZombie = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().top - container.getBoundingClientRect().top;

                    var porcentajeX = listaZombies[i].porcX;
                    var porcentajeY = listaZombies[i].porcY;

                    drops(posXZombie, posYZombie, porcentajeX, porcentajeY, listaZombies[i].tipoZombie);

                    destruir(listaZombies[i].nombre, "zombie", i);
                }
                if (penetracion == true) {
                    return false;
                } else {
                    return true;
                }
            }
        }
        ultimoZombieGolpeado = "";//Reseteamos para balas de penetracion que no han golpeado nada
        return false;//Sistema de colision arreglado, antes solo comprobaba el primer indice al estar dentro del for
    }

}