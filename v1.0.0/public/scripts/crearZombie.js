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
            /*case "zombieTipo3":
                fondo = "./resources/zombies/ZOMBIE3.png";
                break;
            case "zombieTipo4":
                fondo = "./resources/zombies/ZOMBIE4.png";
                break;
            case "zombieTipo5":
                fondo = "./resources/zombies/ZOMBIE5.png";
                break;*/
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
                objetoZombie.porcX = 0.01;//Evitamos 0 para que no aparezcan en el límite y sus drops sean un poco mas accesibles
                objetoZombie.porcY = 0.5;
                //% Posicion relativa inicial (sitio de spawn) respecto al container, para su posterior redimension.
                break;
            case 2://top
                document.getElementById("zombie" + zombies).style.left = container.getBoundingClientRect().width / 2 + "px";
                document.getElementById("zombie" + zombies).style.top = 0 + "px";
                objetoZombie.porcX = 0.5;
                objetoZombie.porcY = 0.01;
                break;
            case 3://derecha
                document.getElementById("zombie" + zombies).style.left = (container.getBoundingClientRect().width -
                    document.getElementById("zombie" + zombies).getBoundingClientRect().width) + "px";
                document.getElementById("zombie" + zombies).style.top = container.getBoundingClientRect().height / 2 + "px";
                objetoZombie.porcX = 0.99;//Evitamos 1 para que no aparezcan en el límite y sus drops sean un poco mas accesibles
                objetoZombie.porcY = 0.5;
                break;
            case 4://bot
                document.getElementById("zombie" + zombies).style.left = container.getBoundingClientRect().width / 2 + "px";
                document.getElementById("zombie" + zombies).style.top = (container.getBoundingClientRect().height -
                    document.getElementById("zombie" + zombies).getBoundingClientRect().height) + "px";
                objetoZombie.porcX = 0.5;
                objetoZombie.porcY = 0.99;
                break;
            default:
                break;
        }

        listaZombies.push(objetoZombie);

        if (objetoZombie.tipoZombie == "zombieTipo2") {
            setInterval(movimientoZombie, objetoZombie.cooldown, zombies, objetoZombie.tipoZombie);
        } else {
            setInterval(movimientoZombie, 25, zombies, objetoZombie.tipoZombie);//ajustar velocidad y milisegundos para reducir zigzag
        }
    }

}