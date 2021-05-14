function disparoZombie(indice) {
    if (pausa == false) {

        balasDisparadasZombie++;
        contadorIntervalos++;

        var bulletZombie = document.createElement("div");
        bulletZombie.setAttribute("id", "BalaZ" + balasDisparadasZombie);
        bulletZombie.setAttribute("class", "BulletZ");
        var imagen = document.createElement("img");
        imagen.setAttribute("src", "./resources/zombies/PROYECTILZOMBIE.png");//se ejecuta desde el index realmente por lo que la ruta es asi
        imagen.setAttribute("height", "100%");
        imagen.setAttribute("draggable", "false");
        bulletZombie.appendChild(imagen);
        container.appendChild(bulletZombie);

        var rectanguloBulletZombie = document.getElementById("BalaZ" + balasDisparadasZombie);

        var posXBalaZ = (document.getElementById(listaZombies[indice].nombre).getBoundingClientRect().left +
            document.getElementById(listaZombies[indice].nombre).getBoundingClientRect().width / 2) - container.getBoundingClientRect().left;

        var posYBalaZ = (document.getElementById(listaZombies[indice].nombre).getBoundingClientRect().top +
            document.getElementById(listaZombies[indice].nombre).getBoundingClientRect().height / 2) - container.getBoundingClientRect().top;

        var porcentajeXBulletZ = posXBalaZ / container.getBoundingClientRect().width;
        var porcentajeYBulletZ = posYBalaZ / container.getBoundingClientRect().height;

        objetoBulletZ = {
            nombre: "BalaZ" + balasDisparadasZombie,
            impactoBullet: 8 + Math.round(ronda / 2),
            velocidadBullet: 0.4,
            porcX: porcentajeXBulletZ,
            porcY: porcentajeYBulletZ,
            intervalo: contadorIntervalos
        }
        BalasZombie.push(objetoBulletZ);

        rectanguloBulletZombie.style.left = posXBalaZ + "px";
        rectanguloBulletZombie.style.top = posYBalaZ + "px";

        var balaZXCliente = document.getElementById(listaZombies[indice].nombre).getBoundingClientRect().left +
            document.getElementById(listaZombies[indice].nombre).getBoundingClientRect().width / 2;
        var balaZYCliente = document.getElementById(listaZombies[indice].nombre).getBoundingClientRect().top +
            document.getElementById(listaZombies[indice].nombre).getBoundingClientRect().height / 2;

        var posXFinal = (elem.getBoundingClientRect().left + elem.getBoundingClientRect().width / 2);
        var posYFinal = (elem.getBoundingClientRect().top + elem.getBoundingClientRect().height / 2);

        var balaZMovimientoX = (posXFinal - balaZXCliente) / (document.body.clientWidth);//Si no va cambiar por body clientwidth y recalcular
        var balaZMovimientoY = (posYFinal - balaZYCliente) / (document.body.clientWidth);

        while (true) {//trazamos la linea para mantener velocidad constante
            if ((posXFinal <= balaZXCliente - document.body.clientWidth || posXFinal >= balaZXCliente + document.body.clientWidth) ||
                (posYFinal <= balaZYCliente - document.body.clientWidth || posYFinal >= balaZYCliente + document.body.clientWidth)) {
                break;
            }
            posXFinal = posXFinal + (balaZMovimientoX) * 100;
            posYFinal = posYFinal + (balaZMovimientoY) * 100;
        }

        balaZMovimientoX = (posXFinal - balaZXCliente) / (document.body.clientWidth);
        balaZMovimientoY = (posYFinal - balaZYCliente) / (document.body.clientWidth);

        var moverBalaZ = setInterval(movimientoBalaZombie, 5, balaZMovimientoX, balaZMovimientoY, balasDisparadasZombie, objetoBulletZ.velocidadBullet, objetoBulletZ.impactoBullet);
    }
}