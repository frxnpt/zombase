function myMove(container, elem) {

    if (pausa == false) {

        if (keysPressed['Escape']) {
            pausar();
        } else if (keysPressed['KeyA'] || keysPressed['KeyW'] || keysPressed['KeyD'] ||
            keysPressed['KeyS']) {
            if (keysPressed['KeyR']) {//poder recargar mientras te mueves
                recargar(Jugador.armaActual);
            }
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

        } else if (keysPressed['KeyR']) {//poder recargar sin movimiento
            recargar(Jugador.armaActual);
        }

        if (items.length > 0) {

            var xPersonajeHitbox = (elem.getBoundingClientRect().left + elem.getBoundingClientRect().width / 2) -
                document.getElementById("container").getBoundingClientRect().left;
            var yPersonajeHitbox = (elem.getBoundingClientRect().top + elem.getBoundingClientRect().height / 2) -
                document.getElementById("container").getBoundingClientRect().top;

            for (let i = 0; i < items.length; i++) {
                var limiteItemXizda = document.getElementById(items[i].nombre).getBoundingClientRect().left -
                    document.getElementById("container").getBoundingClientRect().left;

                var limiteItemXdcha = document.getElementById(items[i].nombre).getBoundingClientRect().right -
                    document.getElementById("container").getBoundingClientRect().left;

                var limiteItemYtop = document.getElementById(items[i].nombre).getBoundingClientRect().top -
                    document.getElementById("container").getBoundingClientRect().top;

                var limiteItemYbot = document.getElementById(items[i].nombre).getBoundingClientRect().bottom -
                    document.getElementById("container").getBoundingClientRect().top;

                if ((xPersonajeHitbox >= limiteItemXizda && xPersonajeHitbox <= limiteItemXdcha) &&
                    (yPersonajeHitbox >= limiteItemYtop && yPersonajeHitbox <= limiteItemYbot)) {
                    Jugador.salud = Jugador.salud + 20;
                    if (Jugador.salud > 100) {
                        Jugador.salud = 100;
                    }
                    document.getElementById("salud").innerHTML = "Salud: " + Jugador.salud + "HP";
                    destruir(items[i].nombre, "BOTIQUIN", i);
                }

            }


        }

        if (armas.length > 0) {
            if (items.length == 0) {//Si hay un botiquin, estas variables ya están instanciadas
                var xPersonajeHitbox = (elem.getBoundingClientRect().left + elem.getBoundingClientRect().width / 2) -
                    document.getElementById("container").getBoundingClientRect().left;
                var yPersonajeHitbox = (elem.getBoundingClientRect().top + elem.getBoundingClientRect().height / 2) -
                    document.getElementById("container").getBoundingClientRect().top;
            }

            for (let i = 0; i < armas.length; i++) {
                var limiteItemXizda = document.getElementById(armas[i].nombre).getBoundingClientRect().left -
                    document.getElementById("container").getBoundingClientRect().left;

                var limiteItemXdcha = document.getElementById(armas[i].nombre).getBoundingClientRect().right -
                    document.getElementById("container").getBoundingClientRect().left;

                var limiteItemYtop = document.getElementById(armas[i].nombre).getBoundingClientRect().top -
                    document.getElementById("container").getBoundingClientRect().top;

                var limiteItemYbot = document.getElementById(armas[i].nombre).getBoundingClientRect().bottom -
                    document.getElementById("container").getBoundingClientRect().top;

                if (((xPersonajeHitbox >= limiteItemXizda && xPersonajeHitbox <= limiteItemXdcha) &&
                    (yPersonajeHitbox >= limiteItemYtop && yPersonajeHitbox <= limiteItemYbot)) && keysPressed['KeyE']) {
                    for (let j = 0; j < listadoArmas.length; j++) {//Listado armas viene de armas.js que carga un array
                        if (armas[i].idArma == listadoArmas[j].nombre) {
                            switch (Jugador.armaActual) {
                                case 1:
                                    //Jugador.arma1 = listadoArmas[j];asi da problemas de solapamiento?
                                    Jugador.arma1.nombreArma1 = listadoArmas[j].nombre;
                                    Jugador.arma1.cargadorArma1 = listadoArmas[j].cargador;
                                    Jugador.arma1.tamanoCargadorArma1 = listadoArmas[j].tamanoCargador;
                                    Jugador.arma1.municionArma1 = listadoArmas[j].municion;
                                    Jugador.arma1.recargaArma1 = listadoArmas[j].recarga;
                                    Jugador.arma1.cadenciaArma1 = listadoArmas[j].cadencia;
                                    Jugador.arma1.velocidadArma1 = listadoArmas[j].velocidad;
                                    Jugador.arma1.impactoArma1 = listadoArmas[j].impacto;
                                    Jugador.arma1.onCooldownArma1 = listadoArmas[j].onCooldown;
                                    cambiarImagenPersonaje(listadoArmas[j].nombre);
                                    document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma1.cargadorArma1 + " / " + Jugador.arma1.municionArma1;
                                    break;
                                case 2:
                                    //Jugador.arma2 = listadoArmas[j];asi da problemas de solapamiento?
                                    Jugador.arma2.nombreArma2 = listadoArmas[j].nombre;
                                    Jugador.arma2.cargadorArma2 = listadoArmas[j].cargador;
                                    Jugador.arma2.tamanoCargadorArma2 = listadoArmas[j].tamanoCargador;
                                    Jugador.arma2.municionArma2 = listadoArmas[j].municion;
                                    Jugador.arma2.recargaArma2 = listadoArmas[j].recarga;
                                    Jugador.arma2.cadenciaArma2 = listadoArmas[j].cadencia;
                                    Jugador.arma2.velocidadArma2 = listadoArmas[j].velocidad;
                                    Jugador.arma2.impactoArma2 = listadoArmas[j].impacto;
                                    Jugador.arma2.onCooldownArma2 = listadoArmas[j].onCooldown;
                                    cambiarImagenPersonaje(listadoArmas[j].nombre);
                                    document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma2.cargadorArma2 + " / " + Jugador.arma2.municionArma2;
                                    break;

                                default:
                                    break;
                            }
                        }
                    }
                    destruir(armas[i].nombre, "ARMA", i);
                }

            }


        }
    }
}