function myMove(container, elem) {

    if (pausa == false) {

        if (keysPressed['Escape']) {
            pausar();
        } else if (keysPressed['KeyA'] || keysPressed['KeyW'] || keysPressed['KeyD'] ||
            keysPressed['KeyS']) {
            var rectanguloContainer = container.getBoundingClientRect();
            var rectanguloObjeto = elem.getBoundingClientRect();

            //Pos X y Y relativas al contenedor, no al Viewport.
            var x = Math.round(rectanguloObjeto.left - rectanguloContainer.left);
            var y = Math.round(rectanguloObjeto.top - rectanguloContainer.top);
            var direccionX = 0;
            var direccionY = 0;

            var limiteX = Math.round(rectanguloContainer.width - rectanguloObjeto.width);
            var limiteY = Math.round(rectanguloContainer.height - rectanguloObjeto.height);

            //TODO: PASAR A SWITCH DE MANERA ELEGANTE SI ES POSIBLE, ENCAPSULAR EN FUNCION
            if (keysPressed['KeyA'] && x >= 0) {
                direccionX -= factorVelocidad * Jugador.velocidad / 3;
            } if (keysPressed['KeyW'] && y >= 0) {
                direccionY -= factorVelocidad * Jugador.velocidad / 3;
            } if (keysPressed['KeyS'] && y <= limiteY) {
                direccionY += factorVelocidad * Jugador.velocidad / 3;
            } if (keysPressed['KeyD'] && x <= limiteX) {
                direccionX += factorVelocidad * Jugador.velocidad / 3;
            }

            x = x + direccionX;
            y = y + direccionY;

            if (x > limiteX) {
                x = limiteX;
            } else if (x < 0) {
                x = 0;
            }
            if (y > limiteY) {
                y = limiteY;
            } else if (y < 0) {
                y = 0;
            }

            Jugador.porcentajeX = x / rectanguloContainer.width;
            Jugador.porcentajeY = y / rectanguloContainer.height;
            elem.style.left = x + "px";
            elem.style.top = y + "px";

            var rad = Math.atan2(ratonX - rectanguloObjeto.x, ratonY - rectanguloObjeto.y);
            var rot = (rad * (180 / Math.PI) * -1) + 180;
            document.getElementById("personaje").style = "transform: rotate(" + rot + "deg);"

        } else if (keysPressed['KeyR']) {
            recargar(Jugador.armaActual);
        }
    }
}