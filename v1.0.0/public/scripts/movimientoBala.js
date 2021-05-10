function movimientoBala(movimientoX, movimientoY, numeroBala, velocidadBala, impacto) {
    if (pausa == false) {//Ajuste de matriz eliminado, calculos hechos con el width para ambos
        //Creando asi una matriz imaginaria con X e Y iguales
        var factorVelocidadBullet = factorVelocidad / 4;
        var factorAumentoX = factorVelocidadBullet * movimientoX * velocidadBala;
        var factorAumentoY = factorVelocidadBullet * movimientoY * velocidadBala;
        var posXBullet = (document.getElementById("bullet" + numeroBala).getBoundingClientRect().left -
            document.getElementById("container").getBoundingClientRect().left) + factorAumentoX;
        var posYBullet = (document.getElementById("bullet" + numeroBala).getBoundingClientRect().top -
            document.getElementById("container").getBoundingClientRect().top) + factorAumentoY;

        var posArrayBullet = 0;
        for (let i = 0; i < Balas.length; i++) {
            if (Balas[i].nombre == "bullet" + numeroBala) {
                posArrayBullet = i;
            }
        }

        Balas[posArrayBullet].porcX = posXBullet / container.getBoundingClientRect().width;
        Balas[posArrayBullet].porcY = posYBullet / container.getBoundingClientRect().height;

        document.getElementById("bullet" + numeroBala).style.left = posXBullet + "px";
        document.getElementById("bullet" + numeroBala).style.top = posYBullet + "px";

        //Hitbox va a estar en el centro de momento. Con posX y PosY cojemos la esquina superior izda.
        //Lo ajustaremos para que coja el centro.
        var posXHitbox = posXBullet + document.getElementById("bullet" + numeroBala).getBoundingClientRect().width / 2;
        var posYHitbox = posYBullet + document.getElementById("bullet" + numeroBala).getBoundingClientRect().height / 2;

        //Cambiar en el futuro el "20" (valor estatico de prueba) por el "impacto" que tenga el tipo de bala en el array
        var colisionBala = colision(posXHitbox, posYHitbox, impacto);

        if (colisionBala == true) {
            destruir("bullet" + numeroBala, "bala", posArrayBullet);
        }
    }
}