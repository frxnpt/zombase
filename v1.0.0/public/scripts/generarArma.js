function generarArma(i) {//i es el indice del zombie que ha muerto
    contadorArmas++;
    var arma = document.createElement("div");
    arma.setAttribute("id", "arma" + contadorArmas);
    arma.setAttribute("class", "ArmaDrop");
    var imagen = document.createElement("img");
    imagen.setAttribute("draggable", "false");

    var idArma = "PISTOLA1";

    switch (Math.floor(Math.random() * 5) + 1) {//añadir luego quiza condiciones de rondas para armas mas potentes
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
        default://pistola1
            break;
    }

    imagen.setAttribute("src", "./resources/armas/" + idArma + "DROP.png");

    imagen.setAttribute("height", "100%");
    arma.appendChild(imagen);
    container.appendChild(arma);

    var rectanguloArma = document.getElementById("arma" + contadorArmas);
    //Creamos el arma en donde ha muerto el zombie
    var posXArma = (document.getElementById(listaZombies[i].nombre).getBoundingClientRect().left +
        document.getElementById(listaZombies[i].nombre).getBoundingClientRect().width / 2) - container.getBoundingClientRect().left;

    var posYArma = (document.getElementById(listaZombies[i].nombre).getBoundingClientRect().top +
        document.getElementById(listaZombies[i].nombre).getBoundingClientRect().height / 2) - container.getBoundingClientRect().top;

    var porcentajeXArma = posXArma / container.getBoundingClientRect().width;
    var porcentajeYArma = posYArma / container.getBoundingClientRect().height;

    objetoArmaDrop = {
        nombre: "arma" + contadorArmas,
        idArma: idArma,
        porcX: porcentajeXArma,
        porcY: porcentajeYArma
    }

    armas.push(objetoArmaDrop);
    desvanecerItem(2, "arma" + contadorArmas);//Devanece el arma a los 30s
    rectanguloArma.style.left = posXArma + "px";
    rectanguloArma.style.top = posYArma + "px";
}