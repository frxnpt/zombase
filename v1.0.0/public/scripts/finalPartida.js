function finalPartida() {
    if (document.getElementById("menu")) {
        document.getElementById("menu").remove();
    }
    var menuFin = document.createElement("div");
    menuFin.setAttribute("id", "menuFin");
    menuFin.setAttribute("class", "menuFin");
    var texto = document.createTextNode("HAS MUERTO");
    menuFin.appendChild(texto);
    var botonReiniciar = document.createElement("p");
    var textoBoton = document.createTextNode("Reiniciar");
    botonReiniciar.appendChild(textoBoton);
    botonReiniciar.setAttribute("onclick", "resetear()");
    botonReiniciar.setAttribute("class", "botonReiniciar");
    menuFin.appendChild(botonReiniciar);
    container.appendChild(menuFin);
    var menuFin = document.getElementById("menuFin");
    menuFin.style.left = container.getBoundingClientRect().width / 2 -
        menuFin.getBoundingClientRect().width / 2 + "px";
    menuFin.style.top = container.getBoundingClientRect().height / 2 -
        menuFin.getBoundingClientRect().height / 2 + "px";
    pausa = true;
}