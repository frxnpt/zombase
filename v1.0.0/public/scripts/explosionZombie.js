function explosionZombie(X, Y, id) {//X e Y vienen centradas
    var explosion = document.createElement("div");
    explosion.setAttribute("id", "EXPZ_" + id);
    explosion.setAttribute("class", "EXPLOSIONZ");
    var imagen = document.createElement("img");
    imagen.setAttribute("src", "./resources/gif/EXPLOSION_ZOMBIE.gif");
    imagen.setAttribute("style", "width: 100%; height: 100%;");
    imagen.setAttribute("draggable", "false");
    explosion.appendChild(imagen);
    container.appendChild(explosion);

    document.getElementById("EXPZ_" + id).style.left = (X -
        document.getElementById("EXPZ_" + id).getBoundingClientRect().width / 2) + "px";
    document.getElementById("EXPZ_" + id).style.top = (Y -
        document.getElementById("EXPZ_" + id).getBoundingClientRect().height / 2) + "px";

    //Necesario instanciar el rectangulo DESPUES de asignarle las coordenadas
    var rectanguloExplosion = document.getElementById("EXPZ_" + id).getBoundingClientRect();

    var limiteExplosionIzda = rectanguloExplosion.left;
    var limiteExplosionDcha = rectanguloExplosion.right;
    var limiteExplosionTop = rectanguloExplosion.top;
    var limiteExplosionBot = rectanguloExplosion.bottom;

    var rectanguloJugador = elem.getBoundingClientRect();

    var Xleft = rectanguloJugador.left * 0.9;//*0.9 para que no con 
    var Xright = rectanguloJugador.right * 0.9;//Rozar el limite solo haga daño
    var Ytop = rectanguloJugador.top * 0.9;//quiza cambiar a los limites para ajustar hitboxes
    var Ybot = rectanguloJugador.bottom * 0.9;
    var Xcentro = (rectanguloJugador.left + rectanguloJugador.width / 2);
    var Ycentro = (rectanguloJugador.top + rectanguloJugador.height / 2);

    //Logica similar a la de colision de zombies! Aqui es necesario calcular el centro tambien
    if (((Xleft >= limiteExplosionIzda && Xleft <= limiteExplosionDcha) &&//Si X se mantiene en la izda y la y en el centro, y ademas
        (Ycentro >= limiteExplosionTop && Ycentro <= limiteExplosionBot)) ||//se encuentra en los limites de la Explosion, entra, similar con los demas
        ((Xright >= limiteExplosionIzda && Xright <= limiteExplosionDcha) &&
            (Ycentro >= limiteExplosionTop && Ycentro <= limiteExplosionBot)) ||
        ((Xcentro >= limiteExplosionIzda && Xcentro <= limiteExplosionDcha) &&
            (Ytop >= limiteExplosionTop && Ytop <= limiteExplosionBot)) ||
        ((Xcentro >= limiteExplosionIzda && Xcentro <= limiteExplosionDcha) &&
            (Ybot >= limiteExplosionTop && Ybot <= limiteExplosionBot))) {

        Jugador.salud = Jugador.salud - (7 + Math.round(ronda / 2));//El daño de la explosion aumentara 1 cada 2 rondas
        document.getElementById("salud").innerHTML = "Salud: " + Jugador.salud + "HP";
        if (Jugador.salud <= 0) { //Caso en el que el zombie muere
            finalPartida();
        } else if (Jugador.salud <= 20) {
            document.getElementById('personaje').style.animation = "saludCritica 1s";
            document.getElementById("personaje").style.animationIterationCount = "infinite";
        }
    }

    contadorIntervalos++;
    setTimeout(destruir, 420, "EXPZ_" + id, "", 0);
}