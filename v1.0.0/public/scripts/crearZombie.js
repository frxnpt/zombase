function crearZombie() {
    if (pausa == false && listaZombies.length < 21 && (contadorZombies < limiteZombies)) {
        zombies++;
        contadorZombies++;
        contadorIntervalos++;
        //Valores zombie default
        var tipoZombie = "zombieTipo1";
        var fondo = "./resources/zombies/ZOMBIE1.png";
        var velocidadZombie = 1;
        var cooldownZombie = 800;
        var saludZombie = 60 + 40 * ronda;
        var impactoZombie = 5 + ronda;
        switch (Math.floor(Math.random() * 5) + 1) {
            case 2:
                tipoZombie = "zombieTipo2";
                fondo = "./resources/zombies/ZOMBIE2.png";
                velocidadZombie = 10;//Avanza un poco cada vez que dispara, leer abajo
                cooldownZombie = 3100 - 20 * ronda;//Este es especial lleva el cooldown en el movimiento. y en este dispara
                saludZombie = 100 + 45 * ronda;
                impactoZombie = 0;//Su impacto estará en la bala
                break;

            default://Zombie tipo1
                break;
        }
        var zombie = document.createElement("div");
        zombie.setAttribute("id", "zombie" + zombies);
        zombie.setAttribute("class", tipoZombie);
        var imagen = document.createElement("img");
        imagen.setAttribute("src", fondo);
        imagen.setAttribute("height", "100%");
        imagen.setAttribute("id", "zombie");
        imagen.setAttribute("draggable", "false");
        zombie.appendChild(imagen);
        container.appendChild(zombie);

        //% Posicion relativa inicial (sitio de spawn) respecto al container, para su posterior redimension.
        var porcentajeXZombie = 0;
        var porcentajeYZombie = 0;
        var spawn = Math.floor(Math.random() * 4) + 1;
        switch (spawn) {
            case 1://izda
                document.getElementById("zombie" + zombies).style.left = 0 + "px";
                document.getElementById("zombie" + zombies).style.top = container.getBoundingClientRect().height / 2 + "px";
                porcentajeXZombie = 0;
                porcentajeYZombie = 0.5;
                break;
            case 2://top
                document.getElementById("zombie" + zombies).style.left = container.getBoundingClientRect().width / 2 + "px";
                document.getElementById("zombie" + zombies).style.top = 0 + "px";
                porcentajeXZombie = 0.5;
                porcentajeYZombie = 0;
                break;
            case 3://derecha
                document.getElementById("zombie" + zombies).style.left = (container.getBoundingClientRect().width -
                    document.getElementById("zombie" + zombies).getBoundingClientRect().width) + "px";
                document.getElementById("zombie" + zombies).style.top = container.getBoundingClientRect().height / 2 + "px";
                porcentajeXZombie = 1;
                porcentajeYZombie = 0.5;
                break;
            case 4://bot
                document.getElementById("zombie" + zombies).style.left = container.getBoundingClientRect().width / 2 + "px";
                document.getElementById("zombie" + zombies).style.top = (container.getBoundingClientRect().height -
                    document.getElementById("zombie" + zombies).getBoundingClientRect().height) + "px";
                porcentajeXZombie = 0.5;
                porcentajeYZombie = 1;
                break;
            default:
                break;
        }

        //TODO: Añadir el zombie al array de objetos
        //TODO: Añadir diferentes clases con diferentes daños y velocidades.
        objetoZombie = {
            nombre: "zombie" + zombies,
            salud: saludZombie,
            impacto: impactoZombie,
            porcX: porcentajeXZombie,
            porcY: porcentajeYZombie,
            numeroZombie: contadorZombies,
            intervalo: contadorIntervalos,
            velocidad: velocidadZombie,
            cooldown: cooldownZombie
        }
        listaZombies.push(objetoZombie);

        if (tipoZombie == "zombieTipo2") {
            var moverZombie = setInterval(movimientoZombie, cooldownZombie, zombies, tipoZombie);
        } else {
            var moverZombie = setInterval(movimientoZombie, 25, zombies, tipoZombie);//ajustar velocidad y milisegundos para reducir zigzag
        }
    }

}