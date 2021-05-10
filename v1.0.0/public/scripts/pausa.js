function pausar() {
    var menuPausa = document.createElement("div");
    menuPausa.setAttribute("id", "menu");
    menuPausa.setAttribute("class", "menu");
    var texto = document.createTextNode("PAUSA");
    menuPausa.appendChild(texto);
    var botonContinuar = document.createElement("p");
    var textoBoton = document.createTextNode("¿Continuar?");
    botonContinuar.appendChild(textoBoton);
    botonContinuar.setAttribute("onclick", "reanudar()");
    botonContinuar.setAttribute("class", "botonContinuar");
    menuPausa.appendChild(botonContinuar);
    var botonReiniciar = document.createElement("p");
    var textoBoton2 = document.createTextNode("Reiniciar");
    botonReiniciar.appendChild(textoBoton2);
    botonReiniciar.setAttribute("onclick", "resetear()");
    botonReiniciar.setAttribute("class", "botonReiniciar");
    menuPausa.appendChild(botonReiniciar);
    container.appendChild(menuPausa);
    var menu = document.getElementById("menu");
    menu.style.left = container.getBoundingClientRect().width / 2 -
        menu.getBoundingClientRect().width / 2 + "px";
    menu.style.top = container.getBoundingClientRect().height / 2 -
        menu.getBoundingClientRect().height / 2 + "px";
    pausa = true;
}