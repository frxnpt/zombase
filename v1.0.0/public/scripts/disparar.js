function disparar() {
    if (pausa == false) {
        var clase = "none";
        var cargador = 0;
        var velocidad = 0;
        var impacto = 0;
        var modoDisparo = 0;
        var onCooldown = false;
        switch (Jugador.armaActual) {
            case 1:
                clase = Jugador.arma1.nombreArma1;
                cargador = Jugador.arma1.cargadorArma1;
                velocidad = Jugador.arma1.velocidadArma1;
                impacto = Jugador.arma1.impactoArma1;
                modoDisparo = Jugador.arma1.modoDisparoArma1;
                onCooldown = Jugador.arma1.onCooldownArma1;
                break;
            case 2:
                clase = Jugador.arma2.nombreArma2;
                cargador = Jugador.arma2.cargadorArma2;
                velocidad = Jugador.arma2.velocidadArma2;
                impacto = Jugador.arma2.impactoArma2;
                modoDisparo = Jugador.arma2.modoDisparoArma2;
                onCooldown = Jugador.arma2.onCooldownArma2;
                break;
            default:
                break;
        }
        if (cargador > 0 && Jugador.recargando == false && onCooldown == false) {
            balasDisparadas++;
            contadorIntervalos++;
            switch (Jugador.armaActual) {
                case 1:
                    Jugador.arma1.cargadorArma1--;
                    document.getElementById("armamano1-municion").innerHTML = "Cargador: " + Jugador.arma1.cargadorArma1 + " / " + Jugador.arma1.municionArma1;
                    break;
                case 2:
                    Jugador.arma2.cargadorArma2--;
                    document.getElementById("armamano2-municion").innerHTML = "Cargador: " + Jugador.arma2.cargadorArma2 + " / " + Jugador.arma2.municionArma2;
                    break;
                default:
                    break;
            }
            //Compara las x y las y del objeto(personaje), generar una bola y se mueve las X y a las Y del ratón 
            //Desplazamiento y transición a través de comparar la X y la Y ?
            var bullet = document.createElement("div");
            bullet.setAttribute("id", "bullet" + balasDisparadas);
            bullet.setAttribute("class", clase);
            bullet.setAttribute("style", "z-index: 999999;")
            container.appendChild(bullet);

            var rectanguloBullet = document.getElementById("bullet" + balasDisparadas);

            //Posicion1 (posicion de donde sale la bala) (no es la X dentro del cliente. si no dentro del container.)
            var posXBulletInicial = (elem.getBoundingClientRect().left +
                (elem.getBoundingClientRect().right - elem.getBoundingClientRect().left) / 2) -
                container.getBoundingClientRect().left;

            var posYBulletInicial = (elem.getBoundingClientRect().top +
                (elem.getBoundingClientRect().bottom - elem.getBoundingClientRect().top) / 2) -
                container.getBoundingClientRect().top;

            //Guardar balas como objeto

            var porcentajeXBullet = posXBulletInicial / container.getBoundingClientRect().width;
            var porcentajeYBullet = posYBulletInicial / container.getBoundingClientRect().height;

            //TODO: Añadir diferentes clases con diferentes daños y velocidades.
            var objetoBullet = {
                nombre: "bullet" + balasDisparadas,
                impactoBullet: impacto,
                velocidadBullet: velocidad,
                porcX: porcentajeXBullet,
                porcY: porcentajeYBullet,
                intervalo: contadorIntervalos
            }
            Balas.push(objetoBullet);

            rectanguloBullet.style.left = posXBulletInicial + "px";
            rectanguloBullet.style.top = posYBulletInicial + "px";
            var sound = new Audio("./resources/sounds/armas/" + clase + "_DISPARO1.wav");//De momento solo 1 sonido por arma
            sound.volume = volumen;
            sound.play();//Encontrar mas que no desentonen para todas las armas es muy dificil

            var xBulletCliente = rectanguloBullet.getBoundingClientRect().left +
                (rectanguloBullet.getBoundingClientRect().right -
                    rectanguloBullet.getBoundingClientRect().left) / 2;
            var yBulletCliente = rectanguloBullet.getBoundingClientRect().top +
                (rectanguloBullet.getBoundingClientRect().bottom -
                    rectanguloBullet.getBoundingClientRect().top) / 2;


            //Posicion2 (indicador de direccion)
            var xRatonCliente = ratonX;//Variables que se van actualizando en index con el
            var yRatonCliente = ratonY;//movimiento del ratón

            //Distancia recorrida del Punto 1 (P1 - Bullet) al Punto 2 (P2 - Ratón)
            //Utilizo clienWidth en los dos pq quiero que la distancia total a recorrer sea similar para X e Y
            var movimientoX = (xRatonCliente - xBulletCliente) / (document.body.clientWidth);
            var movimientoY = (yRatonCliente - yBulletCliente) / (document.body.clientWidth);

            //Trazamos la línea hasta el final de la pantalla, para calcular el % en el que se desplaza cada coordenada y la velocidad sea uniforme
            //TODO: al pulsar cerca del personaje, se produce ralentizacion al tener que hacer muchos calculos?. Optimizar
            while (true) {
                if ((xRatonCliente <= xBulletCliente - document.body.clientWidth || xRatonCliente >= xBulletCliente + document.body.clientWidth) ||
                    (yRatonCliente <= yBulletCliente - document.body.clientWidth || yRatonCliente >= yBulletCliente + document.body.clientWidth)) {
                    break;
                }
                xRatonCliente = xRatonCliente + (movimientoX) * 100;
                yRatonCliente = yRatonCliente + (movimientoY) * 100;
            }//Multiplicado * 50 para aumentar la velocidad del calculo

            //Recalculo de velocidad, con los nuevos valores, correspondientes al limite de la pantalla, para obtener una velocidad uniforme
            movimientoX = (xRatonCliente - xBulletCliente) / (document.body.clientWidth);
            movimientoY = (yRatonCliente - yBulletCliente) / (document.body.clientWidth);

            var moverBala = setInterval(movimientoBala, 5, movimientoX, movimientoY, balasDisparadas, modoDisparo, clase);
            if (modoDisparo == 5) {//Disparo escopeta
                for (let i = 0; i < 7; i++) {
                    balasDisparadas++;
                    contadorIntervalos++;
                    var bulletEscopeta = document.createElement("div");
                    bulletEscopeta.setAttribute("id", "bullet" + balasDisparadas);
                    bulletEscopeta.setAttribute("class", clase);
                    bulletEscopeta.setAttribute("style", "z-index: 999999;")
                    container.appendChild(bulletEscopeta);
                    document.getElementById("bullet" + balasDisparadas).style.left = posXBulletInicial + "px";
                    document.getElementById("bullet" + balasDisparadas).style.top = posYBulletInicial + "px";

                    var objetoBulletEscopeta = {
                        nombre: "bullet" + balasDisparadas,
                        impactoBullet: impacto,
                        velocidadBullet: velocidad,
                        porcX: porcentajeXBullet,
                        porcY: porcentajeYBullet,
                        intervalo: contadorIntervalos
                    }
                    Balas.push(objetoBulletEscopeta);
                    var movimientoXsemirandomizado = movimientoX + ((Math.floor(Math.random() * 40) - 20) / 100);//desviación de hasta +- 0.2 en movimiento
                    var movimientoYsemirandomizado = movimientoY + ((Math.floor(Math.random() * 40) - 20) / 100);
                    if (movimientoXsemirandomizado > 1) {
                        movimientoXsemirandomizado = 1;
                    } else if (movimientoXsemirandomizado < -1) {
                        movimientoXsemirandomizado = -1;
                    }

                    if (movimientoYsemirandomizado > 1) {
                        movimientoYsemirandomizado = 1;
                    } else if (movimientoYsemirandomizado < -1) {
                        movimientoYsemirandomizado = -1;
                    }
                    setInterval(movimientoBala, 5, movimientoXsemirandomizado, movimientoYsemirandomizado, balasDisparadas, modoDisparo, clase);
                }
            }
            switch (Jugador.armaActual) {
                case 1:
                    Jugador.arma1.onCooldownArma1 = true;
                    contadorIntervalos++;
                    setTimeout(() => {
                        Jugador.arma1.onCooldownArma1 = false;
                    }, Jugador.arma1.cadenciaArma1);
                    break;
                case 2:
                    Jugador.arma2.onCooldownArma2 = true;
                    contadorIntervalos++;
                    setTimeout(() => {
                        Jugador.arma2.onCooldownArma2 = false;
                    }, Jugador.arma2.cadenciaArma2);
                    break;
                default:
                    break;
            }
        } else if (pausa == false && cargador == 0 && Jugador.recargando == false) {
            recargar(Jugador.armaActual);
        }
    }
}