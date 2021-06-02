function generarArma(ZombieX, ZombieY, perX, perY) {
    contadorArmas++;
    var arma = document.createElement("div");
    arma.setAttribute("id", "arma" + contadorArmas);
    arma.setAttribute("class", "ArmaDrop");
    arma.setAttribute("style", "z-index: 9999;")
    var imagen = document.createElement("img");
    var idArma = "P4100";
    let roll = Math.floor(Math.random() * 100) + 1;
    console.log(roll);

    switch (true) {//añadir luego quiza condiciones de rondas para armas mas potentes
        case roll <= 12://12%
            idArma = "MSS500";
            break;
        case roll > 12 && roll <= 20://8%
            idArma = "FA16";
            break;
        case roll > 20 && roll <= 24://4%
            idArma = "ARMA_DESCONOCIDA";
            break;
        case roll > 24 && roll <= 30://6%
            idArma = "DE90";
            break;
        case roll > 30 && roll <= 32://2%
            idArma = "LANZA-NUKES";
            break;
        case roll > 32 && roll <= 46://14%
            idArma = "M101";
            break;
        case roll > 46 && roll <= 51://7%
            idArma = "FG1";
            break;
        case roll > 51 && roll <= 57://6%
            idArma = "CARABINA_ANTIGUA";
            break;
        case roll > 57 && roll <= 66://9%
            idArma = "SMG507";
            break;
        case roll > 66 && roll <= 77://11%
            idArma = "SU-4";
            break;
        case roll > 77 && roll <= 82://5%
            idArma = "LANZAGRANADAS";
            break;
        case roll > 82 && roll <= 83://1%
            idArma = "EXPERIMENTO-69420";
            break;
        case roll > 83 && roll <= 88://5%
            idArma = "L11SR";
            break;
        case roll > 88 && roll <= 100://12%
            idArma = "P4100";
            break;
        default://P4100 12%
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