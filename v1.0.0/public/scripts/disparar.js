function disparar() {
    if (pausa == false) {
        var clase = "none";
        var cargador = 0;
        var velocidad = 0;
        var impacto = 0;
        switch (Jugador.armaActual) {
            case 1:
                clase = Jugador.arma1.nombre;
                cargador = Jugador.arma1.cargador;
                velocidad = Jugador.arma1.velocidad;
                impacto = Jugador.arma1.impacto;
                break;
            case 2:
                clase = Jugador.arma2.nombre;
                cargador = Jugador.arma2.cargador;
                velocidad = Jugador.arma2.velocidad;
                impacto = Jugador.arma2.impacto;
                break;
            default:
                break;
        }
        if (cargador > 0 && Jugador.recargando == false) {


            balasDisparadas++;
            contadorIntervalos++;
            switch (Jugador.armaActual) {
                case 1:
                    Jugador.arma1.cargador--;
                    document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma1.cargador + " / " + Jugador.arma1.municion;
                    break;
                case 2:
                    Jugador.arma2.cargador--;
                    document.getElementById("municion").innerHTML = "Cargador: " + Jugador.arma2.cargador + " / " + Jugador.arma2.municion;
                    break;
                default:
                    break;
            }
            //Compara las x y las y del objeto(personaje), generar una bola y se mueve las X y a las Y del ratón 
            //Desplazamiento y transición a través de comparar la X y la Y ?
            var bullet = document.createElement("div");
            bullet.setAttribute("id", "bullet" + balasDisparadas);
            bullet.setAttribute("class", clase);
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
            objetoBullet = {
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

            var xBulletCliente = rectanguloBullet.getBoundingClientRect().left +
                (rectanguloBullet.getBoundingClientRect().right -
                    rectanguloBullet.getBoundingClientRect().left) / 2;
            var yBulletCliente = rectanguloBullet.getBoundingClientRect().top +
                (rectanguloBullet.getBoundingClientRect().bottom -
                    rectanguloBullet.getBoundingClientRect().top) / 2;


            //Posicion2 (indicador de direccion)
            var xRatonCliente = event.clientX;
            var yRatonCliente = event.clientY;

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

            var moverBala = setInterval(movimientoBala, 5, movimientoX, movimientoY, balasDisparadas, objetoBullet.velocidadBullet, objetoBullet.impactoBullet);
        } else if (pausa == false && cargador == 0 && Jugador.recargando == false) {
            recargar(Jugador.armaActual);
        }
    }
}