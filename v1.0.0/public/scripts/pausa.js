function pausar() {
    pausa = true;
    clearInterval(disparoAutomatico);
    if (Jugador.salud > 0) {
        var menuPausa = document.getElementById("menuPausa");
        menuPausa.style.display = "inherit";
        menuPausa.style.zIndex = "99999999";

        menuPausa.style.left = container.getBoundingClientRect().width / 2 -
            menuPausa.getBoundingClientRect().width / 2 + "px";
        menuPausa.style.top = container.getBoundingClientRect().height / 2 -
            menuPausa.getBoundingClientRect().height / 2 + "px";
    } else {
        finalPartida();
    }
}