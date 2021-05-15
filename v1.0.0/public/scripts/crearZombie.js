function crearZombie() {
    if (pausa == false && listaZombies.length < 21 && (contadorZombies < limiteZombies)) {
        zombies++;
        contadorZombies++;
        contadorIntervalos++;

        var fondo = "./resources/zombies/ZOMBIE1.png";
        var objetoZombie = generarTipoZombie();
        var zombie = document.createElement("div");
        zombie.setAttribute("id", "zombie" + zombies);
        zombie.setAttribute("class", objetoZombie.tipoZombie);
        var imagen = document.createElement("img");
        switch (objetoZombie.tipoZombie) {
            case "zombieTipo2":
                fondo = "./resources/zombies/ZOMBIE2.png";
                break;
            default:
                break;
        }
        imagen.setAttribute("src", fondo);
        imagen.setAttribute("height", "100%");
        imagen.setAttribute("id", "zombie");
        imagen.setAttribute("draggable", "false");
        zombie.appendChild(imagen);
        container.appendChild(zombie);

        var spawn = Math.floor(Math.random() * 4) + 1;
        switch (spawn) {
            case 1://izda
                document.getElementById("zombie" + zombies).style.left = 0 + "px";
                document.getElementById("zombie" + zombies).style.top = container.getBoundingClientRect().height / 2 + "px";
                objetoZombie.porcX = 0;
                objetoZombie.porcY = 0.5;
                //% Posicion relativa inicial (sitio de spawn) respecto al container, para su posterior redimension.
                break;
            case 2://top
                document.getElementById("zombie" + zombies).style.left = container.getBoundingClientRect().width / 2 + "px";
                document.getElementById("zombie" + zombies).style.top = 0 + "px";
                objetoZombie.porcX = 0.5;
                objetoZombie.porcY = 0;
                break;
            case 3://derecha
                document.getElementById("zombie" + zombies).style.left = (container.getBoundingClientRect().width -
                    document.getElementById("zombie" + zombies).getBoundingClientRect().width) + "px";
                document.getElementById("zombie" + zombies).style.top = container.getBoundingClientRect().height / 2 + "px";
                objetoZombie.porcX = 1;
                objetoZombie.porcY = 0.5;
                break;
            case 4://bot
                document.getElementById("zombie" + zombies).style.left = container.getBoundingClientRect().width / 2 + "px";
                document.getElementById("zombie" + zombies).style.top = (container.getBoundingClientRect().height -
                    document.getElementById("zombie" + zombies).getBoundingClientRect().height) + "px";
                objetoZombie.porcX = 0.5;
                objetoZombie.porcY = 1;
                break;
            default:
                break;
        }

        listaZombies.push(objetoZombie);

        if (objetoZombie.tipoZombie == "zombieTipo2") {
            var moverZombie = setInterval(movimientoZombie, objetoZombie.cooldown, zombies, objetoZombie.tipoZombie);
        } else {
            var moverZombie = setInterval(movimientoZombie, 25, zombies, objetoZombie.tipoZombie);//ajustar velocidad y milisegundos para reducir zigzag
        }
    }

}