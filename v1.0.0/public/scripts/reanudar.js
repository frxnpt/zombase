function reanudar() {
    if (Jugador.salud > 0) {
        var menuPausa = document.getElementById("menuPausa");
        menuPausa.style.display = "none"
        menuMuerte.style.zIndex = "1";
        pausa = false;
    }
}