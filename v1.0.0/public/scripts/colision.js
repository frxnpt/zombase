function colision(X, Y, impacto) {

    if (X < 0 || X > document.getElementById("container").getBoundingClientRect().width ||
        Y < 0 || Y > document.getElementById("container").getBoundingClientRect().height) {
        return true;
    }

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
                listaZombies[i].salud = listaZombies[i].salud - impacto;
                if (listaZombies[i].salud <= 0) {//Caso en el que el zombie muere

                    var posXZombie = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().left - container.getBoundingClientRect().left;
                    var posYZombie = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().top - container.getBoundingClientRect().top;

                    var porcentajeX = listaZombies[i].porcX;
                    var porcentajeY = listaZombies[i].porcY;

                    drops(posXZombie, posYZombie, porcentajeX, porcentajeY, listaZombies[i].tipoZombie);

                    destruir(listaZombies[i].nombre, "zombie", i);
                }
                return true;
            }
        }
        return false;//Sistema de colision arreglado, antes solo comprobaba el primer indice al estar dentro del for
    }

}