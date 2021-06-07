function movimientoBala(movimientoX, movimientoY, numeroBala, modoDisparo, tipoArma) {
    if (pausa == false) {//Ajuste de matriz eliminado, calculos hechos con el width para ambos
        //Creando asi una matriz imaginaria con X e Y iguales

        var posArrayBullet = 0;
        for (let i = 0; i < Balas.length; i++) {
            if (Balas[i].nombre == "bullet" + numeroBala) {
                posArrayBullet = i;
                break;
            }
        }
        if (Balas[posArrayBullet] == undefined) {
            pausa = true;
            alert("\nHa ocurrido un error. Para más detalles visita la consola (F12)");//TODO: pasar a modal por ejemplo
            console.error("Ha ocurrido un error, alguna de las extensiones está bloqueando el funcionamiento del juego, por ello este ha sido paralizado."
                + "\n\n Puedes probar a desactivar algunas extensiones (seguramente sea alguna que esté modificando o actuando sobre la página."
                + " Por ejemplo uBlock, o la extensión de Adobe). Tranquilo, no utilizamos anuncios de ningún tipo.");
            return;
        }
        var factorVelocidadBullet = factorVelocidad / 4;
        var factorAumentoX = factorVelocidadBullet * movimientoX * Balas[posArrayBullet].velocidadBullet;
        var factorAumentoY = factorVelocidadBullet * movimientoY * Balas[posArrayBullet].velocidadBullet;
        var posXBullet = (document.getElementById("bullet" + numeroBala).getBoundingClientRect().left -
            document.getElementById("container").getBoundingClientRect().left) + factorAumentoX;
        var posYBullet = (document.getElementById("bullet" + numeroBala).getBoundingClientRect().top -
            document.getElementById("container").getBoundingClientRect().top) + factorAumentoY;

        Balas[posArrayBullet].porcX = posXBullet / container.getBoundingClientRect().width;
        Balas[posArrayBullet].porcY = posYBullet / container.getBoundingClientRect().height;

        document.getElementById("bullet" + numeroBala).style.left = posXBullet + "px";
        document.getElementById("bullet" + numeroBala).style.top = posYBullet + "px";

        //Hitbox va a estar en el centro de momento. Con posX y PosY cojemos la esquina superior izda.
        //Lo ajustaremos para que coja el centro.
        var posXHitbox = posXBullet + document.getElementById("bullet" + numeroBala).getBoundingClientRect().width / 2;
        var posYHitbox = posYBullet + document.getElementById("bullet" + numeroBala).getBoundingClientRect().height / 2;

        var penetracion = false;
        if (modoDisparo == 4) {
            penetracion = true;
        }

        //Cambiar en el futuro el "20" (valor estatico de prueba) por el "impacto" que tenga el tipo de bala en el array
        var colisionBala = colision(posXHitbox, posYHitbox, Balas[posArrayBullet].impactoBullet, penetracion);

        if (colisionBala == true) {
            if (modoDisparo == 3) {
                explosion(posXBullet, posYBullet, "bullet" + numeroBala, Balas[posArrayBullet].impactoBullet, tipoArma);
            } else if (modoDisparo == 6) {
                encadenarRayo("bullet" + numeroBala, Balas[posArrayBullet].impactoBullet);
            }
            destruir("bullet" + numeroBala, "bala", posArrayBullet);
        }
    }
}