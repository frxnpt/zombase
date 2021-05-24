function generarArma(ZombieX, ZombieY, perX, perY) {
    contadorArmas++;
    var arma = document.createElement("div");
    arma.setAttribute("id", "arma" + contadorArmas);
    arma.setAttribute("class", "ArmaDrop");
    var imagen = document.createElement("img");
    var idArma = "PISTOLA1";

    switch (Math.floor(Math.random() * 12) + 1) {//añadir luego quiza condiciones de rondas para armas mas potentes
        case 1:
            idArma = "ESCOPETA1";
            break;

        case 2://TODO:AÑADIR MAS
            idArma = "RIFLEASALTO1";
            break;
        case 3:
            idArma = "ARMARAYOS";
            break;
        case 4:
            idArma = "PISTOLA2";
            break;
        case 5:
            idArma = "NUKE_LAUNCHER";
            break;
        case 6:
            idArma = "PISTOLA3";
            break;
        case 7:
            idArma = "RIFLEASALTO2";
            break;
        case 8:
            idArma = "RIFLEASALTO3";
            break;
        case 9:
            idArma = "SUBFUSIL1";
            break;
        case 10:
            idArma = "SUBFUSIL2";
            break;
        case 11:
            idArma = "LANZAGRANADAS";
            break;
        default://pistola1
            break;
    }

    imagen.setAttribute("src", "./resources/armas/" + idArma + "DROP.png");
    imagen.setAttribute("style", "width: 100%; height: 100%;");
    imagen.setAttribute("draggable", "false");
    arma.appendChild(imagen);
    container.appendChild(arma);

    var rectanguloArma = document.getElementById("arma" + contadorArmas);

    var objetoArmaDrop = {
        nombre: "arma" + contadorArmas,
        idArma: idArma,
        porcX: perX,
        porcY: perY
    }

    armas.push(objetoArmaDrop);
    desvanecerItem(2, "arma" + contadorArmas);//Devanece el arma a los 30s
    rectanguloArma.style.left = ZombieX + "px";
    rectanguloArma.style.top = ZombieY + "px";
}