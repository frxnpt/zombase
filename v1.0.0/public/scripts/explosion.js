function explosion(X, Y, id, impacto) {
    var explosion = document.createElement("div");
    explosion.setAttribute("id", "EXP_" + id);
    explosion.setAttribute("class", "EXPLOSION");
    var imagen = document.createElement("img");
    imagen.setAttribute("src", "./resources/gif/EXPLOSION.gif");
    imagen.setAttribute("width", "100%");
    imagen.setAttribute("draggable", "false");
    explosion.appendChild(imagen);
    container.appendChild(explosion);

    document.getElementById("EXP_" + id).style.left = (X -
        document.getElementById("EXP_" + id).getBoundingClientRect().width / 2) + "px";
    document.getElementById("EXP_" + id).style.top = (Y -
        document.getElementById("EXP_" + id).getBoundingClientRect().height / 2) + "px";

    //Necesario instanciar el rectangulo despues de asignarle las coordenadas
    var rectanguloExplosion = document.getElementById("EXP_" + id).getBoundingClientRect();

    var limiteExplosionIzda = rectanguloExplosion.left;
    var limiteExplosionDcha = rectanguloExplosion.right;
    var limiteExplosionTop = rectanguloExplosion.top;
    var limiteExplosionBot = rectanguloExplosion.bottom;


    for (let i = 0; i < listaZombies.length; i++) {

        var recZombie = document.getElementById(listaZombies[i].nombre).getBoundingClientRect();

        var Xleft = recZombie.left;
        var Xright = recZombie.right;
        var Ytop = recZombie.top;
        var Ybot = recZombie.bottom;
        var Xcentro = (recZombie.left + recZombie.width / 2);
        var Ycentro = (recZombie.top + recZombie.height / 2);
        //Logica similar a la de colision de zombies! Aqui es necesario calcular el centro tambien
        if (((Xleft >= limiteExplosionIzda && Xleft <= limiteExplosionDcha) &&//Si X se mantiene en la izda y la y en el centro, y ademas
            (Ycentro >= limiteExplosionTop && Ycentro <= limiteExplosionBot)) ||//se encuentra en los limites de la Explosion, entra, similar con los demas
            ((Xright >= limiteExplosionIzda && Xright <= limiteExplosionDcha) &&
                (Ycentro >= limiteExplosionTop && Ycentro <= limiteExplosionBot)) ||
            ((Xcentro >= limiteExplosionIzda && Xcentro <= limiteExplosionDcha) &&
                (Ytop >= limiteExplosionTop && Ytop <= limiteExplosionBot)) ||
            ((Xcentro >= limiteExplosionIzda && Xcentro <= limiteExplosionDcha) &&
                (Ybot >= limiteExplosionTop && Ybot <= limiteExplosionBot))) {

            listaZombies[i].salud = listaZombies[i].salud - impacto / 2;//El daño de la explosion, sera la mitad que la del impacto del proyectil
            if (listaZombies[i].salud <= 0) { //Caso en el que el zombie muere

                //Necesario recalcular , ya su rectangulo puede no estar actualizado (caso zombies tipo 2 que se actualizan a los 3s aprox)
                var posXZombie = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().left - container.getBoundingClientRect().left;
                var posYZombie = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().top - container.getBoundingClientRect().top;

                var porcentajeX = listaZombies[i].porcX;
                var porcentajeY = listaZombies[i].porcY;


                drops(posXZombie, posYZombie, porcentajeX, porcentajeY, listaZombies[i].tipoZombie);

                destruir(listaZombies[i].nombre, "zombie", i);
            }
        }
    }
    contadorIntervalos++;
    setTimeout(destruir, 1300, "EXP_" + id, "", 0);
}